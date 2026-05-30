let express = require('express')
const { Contectdata, Newsletterdata } = require('../../Controller/Admin/Enqurycontroller')

let EnquryAdmin = express.Router()




EnquryAdmin.get('/contect',Contectdata )
EnquryAdmin.get('/newsletters',Newsletterdata )

module.exports={EnquryAdmin}