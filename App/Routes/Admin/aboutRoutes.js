let express = require('express')

let AboutRoutes = express.Router()
const multer = require("multer")
const { FileUpload } = require('../../Middleware/Fileupload')
const { AboutAdd, AboutView, Aboutupdate } = require('../../Controller/Admin/Aboutcontroller')

const storage = FileUpload("about")
const upload = multer({ storage: storage })



AboutRoutes.post('/create', upload.single("_AboutHero"), AboutAdd)
AboutRoutes.get('/view', AboutView)
AboutRoutes.post('/update/:_id', upload.single("_AboutHero"), Aboutupdate)



module.exports = { AboutRoutes }