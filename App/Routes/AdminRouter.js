let express = require('express')
const { colorRoutes } = require('./Admin/colorroutes')
const { SizeRoutes } = require('./Admin/Sizeroutes')
const { FaqRoutes } = require('./Admin/Faqroutes')
const { MaterialRoutes } = require('./Admin/MaterialRoutes')
const { CountryRoutes } = require('./Admin/CountryRoutes')
const { CategoryRoutes } = require('./Admin/CategoryRoutes')
const { SubCategoryRoutes } = require('./Admin/SubCategoryRoutes')
const { SliderRoutes } = require('./Admin/SliderRouter')
const { SubSubCategoryRoutes } = require('./Admin/SubSubCategoryRoutes')
const { ProductRoutes } = require('./Admin/ProductRoutes')
const { UserForWebRoutes } = require('./Admin/WebUserRoutes')
const { OrderRoutes } = require('./Admin/OrderRoutesAdmin')
const { WhyChooseRoutes } = require('./Admin/WhyChooseRoutes')
const { TestimonialRoutes } = require('./Admin/Testimonialroutes')
const { EnquryAdmin } = require('./Admin/Enquryadminroutes')
const { AdminUserRoutes } = require('./Admin/AdminForUser')
const { AboutRoutes } = require('./Admin/aboutRoutes')

let AdminRoute = express.Router()


AdminRoute.use('/color',colorRoutes)
AdminRoute.use('/size',SizeRoutes )
AdminRoute.use('/faq',FaqRoutes )
AdminRoute.use('/material',MaterialRoutes )
AdminRoute.use('/country',CountryRoutes )
AdminRoute.use('/slider',SliderRoutes)
AdminRoute.use('/category',CategoryRoutes )
AdminRoute.use('/subcategory',SubCategoryRoutes )
AdminRoute.use('/subsubcategory',SubSubCategoryRoutes )
AdminRoute.use('/product', ProductRoutes )
AdminRoute.use('/whychooseus', WhyChooseRoutes )
AdminRoute.use('/testimonial', TestimonialRoutes )
AdminRoute.use('/webuser', UserForWebRoutes )
AdminRoute.use('/weborder', OrderRoutes )
AdminRoute.use('/enqury', EnquryAdmin )
AdminRoute.use('/admin', AdminUserRoutes )

AdminRoute.use('/about', AboutRoutes )



module.exports={AdminRoute}