let express=require("express")
const { CheckToken } = require("../../Middleware/CheckToken")
const { saveOrder, paymentverify, showOrder } = require("../../Controller/Website/OrderController")


let OrderRoute=express.Router()

OrderRoute.post("/place-order",CheckToken,saveOrder)
OrderRoute.post("/payment-verify",CheckToken,paymentverify)
OrderRoute.post("/show-order",CheckToken,showOrder)

module.exports={OrderRoute}

