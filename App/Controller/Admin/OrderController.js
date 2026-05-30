const OrderModel = require("../../Model/OrderModel");

let  AllOrder= async(req,res)=>{

 let order = await OrderModel.find()

    let obj = {
      _status: true,
      order
    };

    res.send(obj);
 
};
module.exports = {AllOrder };