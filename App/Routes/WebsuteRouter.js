let express = require('express')
const { UserRoutes } = require('./Website/UserRoutes')
const { HomeRoute } = require('./Website/HomeRoutes')
const { CartRoutes } = require('./Website/CartRoutes')
const { OrderRoute } = require('./Website/OrderRoutes')
const { EnquryRoutes } = require('./Website/EnquryRoutes')
const { WishRoutes } = require('./Website/WishlistRoutes')
let WebsiteRoute = express.Router()


WebsiteRoute.use('/user',UserRoutes)
WebsiteRoute.use('/home',HomeRoute)
WebsiteRoute.use('/cart',CartRoutes)
WebsiteRoute.use('/wishlist',WishRoutes)
WebsiteRoute.use('/order',OrderRoute)
WebsiteRoute.use('/enqury',EnquryRoutes)
module.exports={WebsiteRoute}