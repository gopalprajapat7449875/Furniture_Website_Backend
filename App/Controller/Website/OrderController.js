const OrderModel = require("../../Model/OrderModel");
let crypto = require("crypto");
const Razorpay = require("razorpay");
const CartModelUse = require("../../Model/CartModel");
var instance = new Razorpay({
  key_id: "rzp_test_Sc4vLFNT9FnPo9",
  key_secret: "hmxkHaJiHkAixtoQ5fMS9s1T",
});


let saveOrder = async (req, res) => {
  let orderData = { ...req.body };

  try {
    if (req.body._PaymentMethod == 1) {
      let today = new Date();
      today.setDate(today.getDate() + 10);

      orderData._OrderDileverDate = today;
      orderData._OrderStatus = "process";
      let order = await OrderModel.insertOne(orderData);

      // User userID for Clear Cart
      await CartModelUse.deleteMany({ _UserId: req.body._UserId });

      res
        .status(200)
        .json({ _status: true, _message: "Order Placed Successfully" });
    } else if (req.body._PaymentMethod == 2) {
      //Backend Order Creare

      let today = new Date();
      today.setDate(today.getDate() + 10);

      orderData._OrderDileverDate = today;
      orderData._PaymentStatus = '1'; //Pending
      orderData._OrderStatus = "pending";

      let order = await OrderModel.insertOne(orderData);

      //Razorpay Order Create

      var options = {
        amount: orderData._OrderAmount * 100, // amount in the smallest currency unit
        currency: "INR",
        receipt: order._id.toString(),
      };

      let orderRes = await instance.orders.create(options)


      await OrderModel.updateOne(
        { _id: order._id },
        { $set: { _RazorpayOrderId: orderRes.id } },
      );



      // After Razorpay Order Create return ORDER ID and other details

      res
        .status(200)
        .json({
          _status: true,
          _message: "Order Placed Successfully, Please proceed to payment",
          orderRes,
        });
    }
  } catch (error) {



    res
      .status(500)
      .json({
        _status: false,
        _message: "Something went wrong",
        error: error.message,
      });
  }
};

let paymentverify = async (req, res) => {
  console.log(req.body)
  let { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
  let sign = razorpay_order_id + "|" + razorpay_payment_id;
  let expectedSign = crypto
    .createHmac("sha256", "hmxkHaJiHkAixtoQ5fMS9s1T")
    .update(sign.toString())
    .digest("hex");

  if (expectedSign === razorpay_signature) {
    //Payment Success
    await OrderModel.updateOne(
      { _RazorpayOrderId: razorpay_order_id },
      {
        $set: {
          _PaymentStatus: "2",
          _RazorpayPayment: razorpay_payment_id,
          _OrderStatus: "process",
        },
      },
    );
    await CartModelUse.deleteMany({ _UserId: req.body._UserId });
    res
      .status(200)
      .json({ _status: true, _message: "Payment verified successfully" });
  }
};

let showOrder = async (req, res) => {
  try {
    let { _UserId } = req.body;

    let orderres = await OrderModel.find({
      _UserId: _UserId,
      $or: [
        { _PaymentMethod: 1, _PaymentStatus: "1" },
        { _PaymentMethod: 2, _PaymentStatus: "2" }
      ]
    });

    let obj = {
      _status: true,
      orderres
    };

    res.send(obj);
  } catch (error) {
    res.send({
      _status: false,
      message: "Error fetching orders"
    });
  }
};
module.exports = { saveOrder, paymentverify, showOrder };