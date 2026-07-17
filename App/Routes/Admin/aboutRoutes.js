let express = require('express')

let AboutRoutes = express.Router()
const multer = require("multer")
// const { FileUpload } = require('../../Middleware/Fileupload')
const { AboutAdd, AboutView, Aboutupdate } = require('../../Controller/Admin/Aboutcontroller')
const upload  = require('../../Middleware/upload')
const  uploadImage  = require('../../Controller/uploadController')
// const { default: upload } = require('../../Middleware/upload')
// const { default: uploadImage } = require('../../Controller/uploadController')

// const storage = FileUpload("about")
// const upload = multer({ storage: storage })



AboutRoutes.post('/create', upload.single("_AboutHero"),uploadImage("about"), AboutAdd)
AboutRoutes.get('/view', AboutView)
AboutRoutes.post('/update/:_id', upload.single("_AboutHero"),uploadImage("about"), Aboutupdate)



module.exports = { AboutRoutes }