let express = require('express')

let AdminUserRoutes = express.Router()
const multer = require("multer")
const { FileUpload } = require('../../Middleware/Fileupload')
const { SubAdminCreate, AdminLogin, ChangePassawordAdmin, UserdataAdmin, UserUpdateAdmin } = require('../../Controller/Admin/UserAdminController')
const { CheckToken } = require('../../Middleware/CheckToken')
const { ComponyCreate, Componydata, componydataupdate } = require('../../Controller/Admin/Componycontroller')
const storage = FileUpload("adminuserandcompony")
const upload = multer({ storage: storage })



AdminUserRoutes.post('/create', upload.single("_ProfilePic"), SubAdminCreate)
AdminUserRoutes.post('/login', AdminLogin)


AdminUserRoutes.post('/change-password', CheckToken, ChangePassawordAdmin)

AdminUserRoutes.post('/user-data', CheckToken, UserdataAdmin)
AdminUserRoutes.post('/update', upload.single("_ProfilePic"), UserUpdateAdmin)





AdminUserRoutes.post('/componycreate', upload.single("_logoimg"), ComponyCreate)
AdminUserRoutes.get('/compony-data', Componydata)
AdminUserRoutes.post('/update/:_id', upload.single("_logoimg"), componydataupdate)

module.exports = { AdminUserRoutes }