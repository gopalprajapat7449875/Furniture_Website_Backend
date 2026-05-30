const mongoose = require('mongoose');

let Newslettersschema = mongoose.Schema(
    {

        _Email: {
            type: String,
            required: [true, "please File correct _Email"],

        },
        _UserId: {
            type: String,
            ref: "user"
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
let NewsLettersModeluse = mongoose.model("newsletters", Newslettersschema)
module.exports = NewsLettersModeluse