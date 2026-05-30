let express = require("express")
const { getProduct, getProductDetail, getSlider, gettestimonial, ComponydataWeb, Categoryview, SubCategoryview, colorviewdata, Materialviewdata } = require("../../Controller/Website/HomeController")
const { Faqview } = require("../../Controller/Website/Faqcontroller")
const { AboutViewData, WhyChooseusviewData } = require("../../Controller/Website/AboutController")


let HomeRoute = express.Router()

HomeRoute.get('/slider', getSlider)
HomeRoute.get('/product', getProduct)
HomeRoute.get('/product-details/:_Slug', getProductDetail)
HomeRoute.get('/testimonial', gettestimonial)
HomeRoute.get('/faq', Faqview)
HomeRoute.get('/compony', ComponydataWeb)
HomeRoute.get('/about', AboutViewData)
HomeRoute.get('/whychoose', WhyChooseusviewData)
HomeRoute.get('/category', Categoryview)
HomeRoute.get('/subcategory', SubCategoryview)
HomeRoute.get('/color', colorviewdata)
HomeRoute.get('/material', Materialviewdata)
module.exports = { HomeRoute }