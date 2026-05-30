const mongoose = require('mongoose');

let wishlistscema = mongoose.Schema({
    _UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    _ProductID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    _ProductName: { type: String },
    _ProductPrice: { type: Number },
    _ProductImage: { type: String },
    _Product_Slug: { type: String },
    _Quantity: { type: Number, default: 1 },
    _ProductAddedAt: { type: Date, default: Date.now }
   
        
});
let WishListModel = mongoose.model("wishlist", wishlistscema)
module.exports = WishListModel