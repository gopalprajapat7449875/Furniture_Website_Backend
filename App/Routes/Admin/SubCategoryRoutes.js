let express = require('express')

let SubCategoryRoutes = express.Router()
const multer = require("multer")
const { SubCategoryControlleradd, SubCategoryControllerview, SubCategoryControllerparent,SubCategoryControllerdelete,SubCategoryControllerchangestatus,Subcontrollersingledata,SubCategoryControllerupdate } = require('../../Controller/Admin/SubCategoryController')
const  upload  = require('../../Middleware/upload')
const  uploadImage  = require('../../Controller/uploadController')




SubCategoryRoutes.post('/create', upload.single("_image"),uploadImage("subcategory"),  SubCategoryControlleradd)
SubCategoryRoutes.get('/view',  SubCategoryControllerview)
SubCategoryRoutes.get('/parent',  SubCategoryControllerparent)
SubCategoryRoutes.post('/delete/', SubCategoryControllerdelete)
SubCategoryRoutes.post('/change-status', SubCategoryControllerchangestatus)
SubCategoryRoutes.get('/updatedata/:_id',Subcontrollersingledata )
SubCategoryRoutes.put('/update/:_id', upload.single("_image"),uploadImage("subcategory"),SubCategoryControllerupdate)
module.exports={SubCategoryRoutes}