let express = require('express')
const { Usershow } = require('../../Controller/Admin/UserControllerforadmin')
let UserForWebRoutes = express.Router()

UserForWebRoutes.get('/view',Usershow )

module.exports={UserForWebRoutes}