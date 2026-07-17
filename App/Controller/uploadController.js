const streamifier = require("streamifier");
const { cloudinary } = require("../Config/cloudinary");

const uploadImage = (folder) => {
  return async (req, res, next) => {
    try {
      const uploadToCloudinary = (file) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            }
          );

          streamifier.createReadStream(file.buffer).pipe(stream);
        });
      };

      req.uploadedImages = {
        image: null,
        gallery: [],
      };

      // upload.single("_image")
      if (req.file) {
        const result = await uploadToCloudinary(req.file);

        req.uploadedImages.image = {
          url: result.secure_url,
          public_id: result.public_id,
        };
      }

      // upload.fields(...)
      if (req.files) {
        if (req.files._image?.length) {
          const result = await uploadToCloudinary(req.files._image[0]);

          req.uploadedImages.image = {
            url: result.secure_url,
            public_id: result.public_id,
          };
        }

        if (req.files._Gallery_image?.length) {
          req.uploadedImages.gallery = await Promise.all(
            req.files._Gallery_image.map(async (file) => {
              const result = await uploadToCloudinary(file);

              return {
                url: result.secure_url,
                public_id: result.public_id,
              };
            })
          );
        }
      }

      next();
    } catch (err) {
      next(err);
    }
  };
};

module.exports = uploadImage;