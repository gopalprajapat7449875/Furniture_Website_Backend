const streamifier = require("streamifier");
const { cloudinary } = require("../Config/cloudinary");

const uploadImage = (folder) => {
  return async (req, res, next) => {
    try {
      // Agar koi file nahi aayi
      if (!req.files) {
        return next();
      }

      // Single file upload function
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

      // Response object
      req.uploadedImages = {
        image: null,
        gallery: [],
      };

      // Single Image (_image)
      if (req.files._image && req.files._image.length > 0) {
        const result = await uploadToCloudinary(req.files._image[0]);

        req.uploadedImages.image = {
          url: result.secure_url,
          public_id: result.public_id,
        };
      }

      // Gallery Images (_Gallery_image)
      if (
        req.files._Gallery_image &&
        req.files._Gallery_image.length > 0
      ) {
        const gallery = await Promise.all(
          req.files._Gallery_image.map(async (file) => {
            const result = await uploadToCloudinary(file);

            return {
              url: result.secure_url,
              public_id: result.public_id,
            };
          })
        );

        req.uploadedImages.gallery = gallery;
      }

      next();
    } catch (err) {
      next(err);
    }
  };
};

module.exports = uploadImage;