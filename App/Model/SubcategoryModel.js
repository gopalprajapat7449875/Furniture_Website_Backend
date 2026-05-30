const mongoose = require('mongoose');

let SubCategorymodel = mongoose.Schema(
    {
        _SubCategoryName: {
            type: String,
            required: [true, "please File correct Categoryname"],
           
        },

        _SubCategoryOrder: {
            type: Number,
            required: true
        },
        _image: String,

        _Slug: String,

        _PerentCategory: {

            type: String,
            ref: "category"
        },

        _SubCategoryStatus: {
            type: Boolean,
            default: true
        },
        _SubCategory_Creted_to: {
            type: Date,
            default: new Date()
        },
        _SubCategory_Updated_to: {
            type: Date,
            default: new Date()
        },
        _SubCategory_Deleted_to: {
            type: Date,
            default: null
        }



    }
)
let SubCategoryUseadd = mongoose.model("subcategory", SubCategorymodel)
module.exports = SubCategoryUseadd