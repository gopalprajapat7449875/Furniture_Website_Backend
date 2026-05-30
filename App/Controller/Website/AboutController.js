const AboutModel = require("../../Model/Aboutmodel")
const WhyChoosemodeluse = require("../../Model/WhyChooseUsModel")


let AboutViewData = async (req, res) => {
    let about = await AboutModel.findOne()

    let obj = {
        _status: true,
        _path: process.env.ABOUTMAINPATH,
        about
    }
    res.send(obj)
}

let WhyChooseusviewData = async (req, res) => {


    let nondeleted = {
        _WhyChoose_Deleted_to: null,
         _WhyChooseStatus:true
    }
    let whychooseres = await WhyChoosemodeluse.find(nondeleted)
    let obj = {
        _status: true,
        _Message: 'why choose view',
        _path: process.env.WHYCHOOSEUSMAINPATH,

        whychooseres
    }
    res.send(obj)
}
module.exports = {AboutViewData,WhyChooseusviewData  };