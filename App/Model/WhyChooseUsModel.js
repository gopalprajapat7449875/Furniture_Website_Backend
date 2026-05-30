const mongoose = require('mongoose');

let WhyChoosemodel = mongoose.Schema(
    {
        _WhyChooseTital: {
            type: String,
            required: [true, "please File correct Categoryname"],
           
        },

        _WhyChooseOrder: {
            type: Number,
            required: true
        },
        _image: String,


        _WhyChooseDiscription: {
            type: String,
            required: true
        },
        _WhyChooseStatus: {
            type: Boolean,
            default: true
        },

        _WhyChoose_Creted_to: {
            type: Date,
            default: new Date()
        },
        _WhyChoose_Updated_to: {
            type: Date,
            default: new Date()
        },
        _WhyChoose_Deleted_to: {
            type: Date,
            default: null
        }



    }
)
let WhyChoosemodeluse = mongoose.model("whychooseus", WhyChoosemodel)
module.exports = WhyChoosemodeluse