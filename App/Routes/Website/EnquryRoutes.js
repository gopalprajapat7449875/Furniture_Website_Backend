let express = require("express")
const { ContectAdd, NewslettersAdd } = require("../../Controller/Website/EnquryController")
const { CheckToken } = require("../../Middleware/CheckToken")



let EnquryRoutes = express.Router()

EnquryRoutes.post('/contect',CheckToken, ContectAdd)
EnquryRoutes.post('/newsletter',CheckToken, NewslettersAdd)

module.exports = { EnquryRoutes }