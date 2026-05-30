const WishListModel = require("../../Model/WisthListmodel")



let AddWsihlist = async (req, res) => {


    let { _UserId, _ProductID, _ProductPrice } = req.body
    let data = { ...req.body }

    let filter = {
        _UserId: _UserId,
        _ProductID: _ProductID
    }


    let check = await WishListModel.findOne(filter)

    console.log(check)
    if (check) {
        await WishListModel.updateOne(
            {

                _id: check._id

            },
            {
                $set: {
                    _Quantity: check._Quantity + 1,

                    _ProductPrice: check._ProductPrice + _ProductPrice
                }
            }
        )
    }
    else {
        let cartres = await WishListModel.insertOne(data)

    }



    let obj = {
        _status: true,
        _message: "Product Add to wishlist",


    }
    res.send(obj);
}
let Wishlistproduct = async (req, res) => {

    let { _UserId } = req.body



    let filter = {
        _UserId: _UserId
    }


    let wishlist = await WishListModel.find(filter)


    let obj = {
        _status: true,
        _message: "Product Add",
        _Path: process.env.PRODUCTMAINPATH,
        wishlist,
    }
    res.send(obj);
}


let Wishlistitemdelete = async (req, res) => {
    let { _UserId, _id } = req.body


    try {
        let check = {
            _UserId: _UserId,
            _id:_id
        };
        let checkres = await WishListModel.findOne(check)

        if (checkres) {
            await WishListModel.deleteOne({_id:_id})
        }
        res.send({
            _status: true,
            _message: "Cart Item deleted Successfully"
        });


    }
    catch (error) {
        console.log(error);
        res.send({
            _status: false,
            _message: "Server Error"
        });
    }




}


module.exports = { AddWsihlist, Wishlistproduct, Wishlistitemdelete }