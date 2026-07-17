let express = require('express')
// const { SliderControlleradd, SliderControllerview, SliderControllerdelete, SliderControllerchangestatus, controllersingledata, SliderControllerupdate } = require('../../Controller/Admin/SliderController')

let SliderRoutes = express.Router()
const multer = require("multer")
const { SliderControlleradd, SliderControllerview,Slidercontrollersingledata, SliderControllerdelete, SliderControllerchangestatus, SliderControllerupdate } = require('../../Controller/Admin/SliderController')



const  upload  = require('../../Middleware/upload')
const  uploadImage  = require('../../Controller/uploadController')


SliderRoutes.post('/create', upload.single("_image"),uploadImage("slider"),  SliderControlleradd)
SliderRoutes.get('/view',  SliderControllerview)
SliderRoutes.post('/delete/', SliderControllerdelete)
SliderRoutes.post('/change-status', SliderControllerchangestatus)
SliderRoutes.get('/updatedata/:_id',Slidercontrollersingledata )
SliderRoutes.put('/update/:_id', upload.single("_image"),uploadImage("slider"),SliderControllerupdate)
module.exports={SliderRoutes}