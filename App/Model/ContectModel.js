const mongoose = require('mongoose');

let ContectSchema = mongoose.Schema(
    {
        _Name: {
            type: String,
            required: [true, "please File correct _Name"],
            match: [/^[a-zA-Z ]{2,100}$/, "please fill min. 2 and max 20 car value"]
        },


        _Email: {
            type: String,
            required: [true, "please File correct _Email"],

        },
        _UserId: {
            type: String,
            ref: "user"
        },


        _Phone: {
            type: String,
            required: [true, "please File correct _Phone"],

        },


        _Subject: {
            type: String,
            required: [true, "please File correct _subject"],

        },

        _Message: {
            type: String,

        },





        _Status: {
            type: Boolean,
            default: true
        },
        _Creted_to: {
            type: Date,
            default: new Date()
        },
        _Updated_to: {
            type: Date,
            default: new Date()
        },
        _Deleted_to: {
            type: Date,
            default: null
        }



    }
)
let ContectModelUse = mongoose.model("contect", ContectSchema)
module.exports = ContectModelUse