let express =require('express')
const { AllOrder } = require('../../Controller/Admin/OrderController')


let OrderRoutes=express.Router()


OrderRoutes.get('/view',AllOrder )

module.exports={OrderRoutes}