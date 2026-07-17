const AboutModel = require("../../Model/Aboutmodel")

let AboutAdd = async (req, res) => {



    let data = { ...req.body }









    if (req.imageUrl) {
        if (req.imageUrl) {
            data['_AboutHero'] =req.imageUrl
        }
    }


    try {


        let whychooseres = await AboutModel.insertOne(data)



        let obj = {
            _status: true,




        }
        res.send(obj)


    }
    catch (err) {

        console.log(err);

        let errorrs = err.errors
        let erre = []
        for (let key in errorrs) {
            let errobj = {}
            errobj[key] = errorrs[key].message
            erre.push(errobj)

        }
        let obj = {
            _status: false,
            erre
        }
        res.send(obj)

    }
}
let AboutView = async (req, res) => {

    let about = await AboutModel.findOne()

    let obj = {
        _status: true,
        _path: process.env.ABOUTMAINPATH,
        about
    }
    res.send(obj)
}
let Aboutupdate = async (req, res) => {

    let { _id } = req.params
    let data = { ...req.body }
    console.log(req.imageUrl)
    if (req.imageUrl) {
        if (req.imageUrl) {
            data['_AboutHero'] = req.imageUrl
        }
    }
    let about = await AboutModel.updateOne(
        { _id: _id }
        ,
        {
            $set: data
        }
    );
    let obj = {
        _status: true,
        _message: "Data Updated",

    }

    res.send(obj)





}
module.exports = { AboutAdd, AboutView, Aboutupdate }