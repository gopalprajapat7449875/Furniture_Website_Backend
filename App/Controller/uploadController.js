

// const { cloudinary } = require("../Config/cloudinary");

// const uploadImage = async (req, res) => {
//     console.log(req)
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path);

//     res.json({
//       success: true,
//       image: result.secure_url,
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
// module.exports = {uploadImage}

const streamifier = require("streamifier");
const { cloudinary } = require("../Config/cloudinary");

const uploadImage = (folder) => {
  return async (req, res, next) => {
    try {
      if (!req.file) {
        return next();
      }

      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });

      req.imageUrl = result.secure_url;
      req.publicId = result.public_id;

      next();
    } catch (err) {
      next(err);
    }
  };
};

module.exports = uploadImage;