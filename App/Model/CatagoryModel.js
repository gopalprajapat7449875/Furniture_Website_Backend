const mongoose = require('mongoose');

let Categorymodel = mongoose.Schema(
    {
        _CategoryName: {
            type: String,
            required: [true, "please File correct Categoryname"],
          
        },

        _CategoryOrder: {
            type: Number,
            required: true
        },
        _image: String,

        _Slug: String,

        _CategoryStatus: {
            type: Boolean,
            default: true
        },
        _Category_Creted_to: {
            type: Date,
            default: new Date()
        },
        _Category_Updated_to: {
            type: Date,
            default: new Date()
        },
        _Category_Deleted_to: {
            type: Date,
            default: null
        }



    }
)
let CategoryUseadd = mongoose.model("category", Categorymodel)
module.exports = CategoryUseadd