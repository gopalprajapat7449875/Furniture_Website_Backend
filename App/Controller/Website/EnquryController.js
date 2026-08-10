const ContectModelUse = require("../../Model/ContectModel")
const NewsLettersModeluse = require("../../Model/NewsLetterModel")
const UserUseadd = require("../../Model/UserModel")

let ContectAdd = async (req, res) => {



    // let check = await UserUseadd.findOne({ _id: _UserId })
    let obj;
    if (req.body) {
        let res = await ContectModelUse.insertOne(req.body)


        obj = {
            _Status: true,
            _Message: "Contect Enqury send succses"
        }
     
    }
    else {
        obj = {
            _Status: false,
            _Message: " Please fill form again "
        }

    }
    res.send(obj)

}
let NewslettersAdd = async (req, res) => {

    let { _UserId } = req.body

    let check = await UserUseadd.findOne({ _id: _UserId })
    let obj;
    if (check) {
        let res = await NewsLettersModeluse.insertOne(req.body)


        obj = {
            _Status: true,
            _Message: "Newsletters send succses"
        }
      
    }
    else {
        obj = {
            _Status: false,
            _Message: "Login First"
        }

    }
    res.send(obj)

}
module.exports = { ContectAdd, NewslettersAdd };