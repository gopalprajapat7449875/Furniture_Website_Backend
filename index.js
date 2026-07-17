
const mongoose = require('mongoose');
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
let express = require('express')
// const { initSocket } = require("./socket");

require('dotenv').config()
let cors = require('cors')
const { AdminRoute } = require('./App/Routes/AdminRouter');
const { WebsiteRoute } = require('./App/Routes/WebsuteRouter');
const { AdminCreate, initSocket } = require('./App/Config/helper');
// const { Server } = require('http');
let http = require('http')
let App = express()

App.use(cors())
App.use(express.json())


const server = http.createServer(App);
const io = initSocket(server);

App.use('/admin', AdminRoute)
App.use('/website', WebsiteRoute)

// App.use('/upload-files/category', express.static('upload-files/category'))
// App.use('/upload-files/subcategory', express.static('upload-files/subcategory'))
// App.use('/upload-files/slider', express.static('upload-files/slider'))
// App.use('/upload-files/subsubcategory', express.static('upload-files/subsubcategory'))
// App.use('/upload-files/userimages', express.static('upload-files/userimages'))
// App.use('/upload-files/product', express.static('upload-files/product'))
// App.use('/upload-files/whychooseus', express.static('upload-files/whychooseus'))
// App.use('/upload-files/testimonial', express.static('upload-files/testimonial'))
// App.use('/upload-files/adminuserandcompony', express.static('upload-files/adminuserandcompony'))
// App.use('/upload-files/about', express.static('upload-files/about'))
// App.use('/upload-files/cartimages', express.static('upload-files/cartimages'))
// mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBCONACTION}`)
mongoose.connect(process.env.DBCONACTION)

    .then((res) => {

        server.listen(process.env.PORT || 8000, async () => {
            console.log('server start', process.env.PORT)

            await AdminCreate()
        })
    })


