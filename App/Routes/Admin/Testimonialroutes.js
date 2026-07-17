let express = require('express')
// const { SliderControlleradd, SliderControllerview, SliderControllerdelete, SliderControllerchangestatus, controllersingledata, SliderControllerupdate } = require('../../Controller/Admin/SliderController')

let TestimonialRoutes = express.Router()
const multer = require("multer")
const { FileUpload } = require('../../Middleware/Fileupload')
const { Testimonialadd, Testimonialview,
    Testimonialdelete,
    Testimonialchangestatus,
    Testimonialsingle,
    Testimonialupdate } = require('../../Controller/Admin/TestimoialController')

const  upload  = require('../../Middleware/upload')
const  uploadImage  = require('../../Controller/uploadController')




TestimonialRoutes.post('/create', upload.single("_image"),uploadImage("testiomnial"), Testimonialadd)
TestimonialRoutes.get('/view', Testimonialview)
TestimonialRoutes.post('/delete/', Testimonialdelete)
TestimonialRoutes.post('/change-status', Testimonialchangestatus)
TestimonialRoutes.get('/updatedata/:_id', Testimonialsingle)
TestimonialRoutes.put('/update/:_id', upload.single("_image"),uploadImage("testiomnial"), Testimonialupdate)

module.exports = { TestimonialRoutes }