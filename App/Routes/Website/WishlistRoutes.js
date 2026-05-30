let express = require("express")

const multer = require("multer")

const { CheckToken } = require("../../Middleware/CheckToken")
const { AddWsihlist ,Wishlistproduct, Wishlistitemdelete } = require("../../Controller/Website/WishListController")







let WishRoutes = express.Router()
WishRoutes.post('/add', CheckToken, AddWsihlist)
WishRoutes.post('/view', CheckToken, Wishlistproduct)

WishRoutes.post('/delete', CheckToken, Wishlistitemdelete)
 
module.exports = { WishRoutes }