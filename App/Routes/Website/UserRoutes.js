let express = require('express')
const { UserCreate, UserLogin, ChangePassaword, ForgotPassaword, ChangePassawordBeforeLogin, Userdata, UserUpdate } = require('../../Controller/Website/UserController')

let UserRoutes = express.Router()

const multer = require("multer")
const  uploadImage  = require('../../Controller/uploadController')
const upload = require('../../Middleware/upload')




UserRoutes.post('/create',UserCreate)
UserRoutes.post('/login',UserLogin)
UserRoutes.post('/change-password',ChangePassaword)
UserRoutes.post('/forgot-password',ForgotPassaword)
UserRoutes.post('/reset-password/:id',ChangePassawordBeforeLogin)
UserRoutes.post('/user-data',Userdata)
UserRoutes.post('/update' ,upload.single("_ProfilePic"),uploadImage("userweb"),UserUpdate)


module.exports={UserRoutes}