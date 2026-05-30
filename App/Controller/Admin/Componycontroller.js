const { response } = require("express");
const ComponyModel = require("../../Model/ComponyModel");

let ComponyCreate = async (req, res) => {

    let data = { ...req.body }

   

    if (data) {

        if (req.file) {
            if (req.file.filename) {
                data['_logoimg'] = req.file.filename
            }
        }



        await ComponyModel.insertOne(data);
        let obj = {
            _status: true,

        }
        res.send(obj)

    }
    else{
         let obj = {
            _status: false,

        }
           res.send(obj) 
    }

}

let Componydata = async (req, res) => {


    let componydata = await ComponyModel.findOne()


    let obj = {
        _status: true,
        _path: process.env.USERANDCOMPONYMAINPATH,
        componydata
    }
    res.send(obj)

}
let componydataupdate = async (req, res) => {

    let { _id } = req.params
    let data = { ...req.body }

    if (req.file) {
        if (req.file.filename) {
            data['_logoimg'] = req.file.filename
        }
    }
    let userData = await ComponyModel.updateOne(
        { _id: _id }
        ,
        {
            $set: data
        }
    );
    let obj = {
        _status: true,
        _message: "Compony Data Updated",

    }

    res.send(obj)





}
module.exports = { ComponyCreate, Componydata, componydataupdate }