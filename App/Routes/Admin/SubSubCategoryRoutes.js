let express = require('express')

let SubSubCategoryRoutes = express.Router()
const multer = require("multer")
const { SubCategoryControlleradd, SubCategoryControllerview, SubCategoryControllerparent,SubCategoryControllerdelete,SubCategoryControllerchangestatus,Subcontrollersingledata,SubCategoryControllerupdate } = require('../../Controller/Admin/SubCategoryController')
const { SubCategoryControllersubcategory, SubSubCategoryControlleradd, SubSubCategoryControllerview, SubSubCategoryControllerdelete, SubSubCategoryControllerchangestatus, SubSubcontrollersingledata, SubSubCategoryControllerupdate } = require('../../Controller/Admin/SubSubCategoryController')
const  upload  = require('../../Middleware/upload')
const  uploadImage  = require('../../Controller/uploadController')



SubSubCategoryRoutes.post('/create', upload.single("_image"),uploadImage("subsubcategory"),  SubSubCategoryControlleradd)
SubSubCategoryRoutes.get('/view',  SubSubCategoryControllerview)
SubSubCategoryRoutes.get('/parent',  SubCategoryControllerparent)
SubSubCategoryRoutes.post('/delete/', SubSubCategoryControllerdelete)
SubSubCategoryRoutes.post('/change-status', SubSubCategoryControllerchangestatus)
SubSubCategoryRoutes.get('/updatedata/:_id',SubSubcontrollersingledata )
SubSubCategoryRoutes.put('/update/:_id',upload.single("_image"),uploadImage("subsubcategory"),  SubSubCategoryControllerupdate)
SubSubCategoryRoutes.get('/subcategory/:_id', SubCategoryControllersubcategory)
module.exports={SubSubCategoryRoutes}