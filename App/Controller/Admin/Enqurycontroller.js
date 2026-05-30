const ContectModelUse = require("../../Model/ContectModel")
const NewsLettersModeluse = require("../../Model/NewsLetterModel")


let Contectdata = async (req, res) => {





    let contectres = await ContectModelUse.find()


    obj = {
        _Status: true,

        contectres
    }

    res.send(obj)

}
let Newsletterdata = async (req, res) => {

    let newsres = await NewsLettersModeluse.find()


    obj = {
        _Status: true,
        newsres

    }


    res.send(obj)

}
module.exports = { Contectdata, Newsletterdata };