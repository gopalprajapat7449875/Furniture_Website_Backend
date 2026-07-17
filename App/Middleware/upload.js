const multer = require("multer")

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "upload-files/category")
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now()  + file.originalname)
//     }
// })

// const upload = multer({ storage: storage })

// module.exports = upload
// import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
});
module.exports = upload
