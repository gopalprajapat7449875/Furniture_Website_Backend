
const SliderUseadd = require("../../Model/SliderModel")
const WhyChoosemodeluse = require("../../Model/WhyChooseUsModel")



let WhyChooseusadd = async (req, res) => {



    let data = { ...req.body }


    let { _WhyChooseTital } = req.body




    var check = await WhyChoosemodeluse.findOne({
        _WhyChooseTital: _WhyChooseTital,
        _WhyChoose_Deleted_to: null
    })


    if (req.file) {
        if (req.file.filename) {
            data['_image'] = req.file.filename
        }
    }

    if (check) {
        let obj = {
            _status: false,
            _Message: 'why Choose alredy exist',

        }
        res.send(obj)


    } else {
        try {


            let whychooseres = await WhyChoosemodeluse.insertOne(data)



            let obj = {
                _status: true,
                _Message: 'whychoose add',

                whychooseres,


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
}

let WhyChooseusview = async (req, res) => {


    let nondeleted = {
        _WhyChoose_Deleted_to: null
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
let WhyChooseusdelete = async (req, res) => {

    let { _id } = req.body
    console.log(_id)
    await WhyChoosemodeluse.updateMany(
        { _id: _id }
        , {
            $set: {
                _WhyChoose_Deleted_to: new Date()
            }
        }
    )
        .then((ress) => {
            let obj = {
                _status: true,
                _Message: 'Why Choose delete',
                ress
            }
            res.send(obj)
        })
        .catch((err) => {
            let obj = {
                _status: false,
                _Message: err.errors,

            }
            res.send(obj)
        })


}
let WhyChooseuschangestatus = async (req, res) => {

    let { _id } = req.body
    console.log(_id)
    WhyChoosemodeluse.updateMany(
        { _id: _id }
        , [{
            $set: {
                _WhyChooseStatus: {
                    $not: "$_WhyChooseStatus"
                }
            }
        }],
        {
            updatePipeline: true
        }
    )
        .then((ress) => {
            let obj = {
                _status: true,
                _Message: 'WhyChoose Status Changed successfully ',
                ress
            }
            res.send(obj)
        })
        .catch((err) => {
            let obj = {
                _status: false,
                _Message: err.errors,

            }
            res.send(obj)
        })


}

let WhyChooseussingledata = async (req, res) => {
    let { _id } = req.params;

    let data = await WhyChoosemodeluse.findById(_id)

    res.status(200).json({
        _status: true,
        _Message: 'whychooseus Found',
        _path: process.env.WHYCHOOSEUSMAINPATH,
        data
    })
}
let WhyChooseusupdate = (req, res) => {
    let data = { ...req.body }
    let { _id } = req.params;

    console.log(_id)
    if (req.file) {
        if (req.file.filename) {
            data['_image'] = req.file.filename
        }
    }
    WhyChoosemodeluse.updateOne(
        { _id: _id }
        ,
        {
            $set: data
        }

    )
        .then((updateres) => {

            let obj = {
                _status: true,
                _Message: 'Why choose updated',
                updateres
            }

            res.send(obj)
        })
        .catch((err) => {

            console.log(err)

            let obj = {
                _status: false,
                _Message: 'Update failed',
                error: err.message
            }

            res.send(obj)
        })
}

module.exports = { WhyChooseusadd, WhyChooseusview, WhyChooseusdelete, WhyChooseuschangestatus, WhyChooseussingledata, WhyChooseusupdate }