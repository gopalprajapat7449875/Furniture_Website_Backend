let express = require('express')
// const { SliderControlleradd, SliderControllerview, SliderControllerdelete, SliderControllerchangestatus, controllersingledata, SliderControllerupdate } = require('../../Controller/Admin/SliderController')

let WhyChooseRoutes = express.Router()
const multer = require("multer")
const { FileUpload } = require('../../Middleware/Fileupload')
const { WhyChooseusadd , WhyChooseusview, WhyChooseusdelete, WhyChooseuschangestatus, WhyChooseussingledata, WhyChooseusupdate} = require('../../Controller/Admin/WhuChooseusController')


const  upload  = require('../../Middleware/upload')
const  uploadImage  = require('../../Controller/uploadController')



WhyChooseRoutes.post('/create', upload.single("_image"), uploadImage("whychooseus"), WhyChooseusadd)
WhyChooseRoutes.get('/view',  WhyChooseusview)
WhyChooseRoutes.post('/delete/', WhyChooseusdelete)
WhyChooseRoutes.post('/change-status', WhyChooseuschangestatus)
WhyChooseRoutes.get('/updatedata/:_id',WhyChooseussingledata )
WhyChooseRoutes.put('/update/:_id', upload.single("_image"),uploadImage("whychooseus"),WhyChooseusupdate)

module.exports={WhyChooseRoutes}