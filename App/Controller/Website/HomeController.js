const CategoryUseadd = require("../../Model/CatagoryModel");
const ColorUseadd = require("../../Model/ColorModel");
const MaterialUseadd = require("../../Model/MaterialModel");
const ComponyModel = require("../../Model/ComponyModel");
const ProductUseadd = require("../../Model/ProductModel");
const SliderUseadd = require("../../Model/SliderModel");
const SubCategoryUseadd = require("../../Model/SubcategoryModel");
const TestimonialModelUse = require("../../Model/TestimonialModel");

let getProduct = async (req, res) => {

    let filter = {
        _Product_Deleted_to: null,

        _ProductStatus: true,
    };
    let productres = await ProductUseadd
        .find(filter)
        .populate([
            {
                path: "_PerentCategory",
                select: "_CategoryName"
            },
            {
                path: "_SubCategory",
                select: "_SubCategoryName"
            },
            {
                path: "_SubSubCategory",
                select: "_SubSubCategoryName"
            },
            {
                path: "_Material",
                select: "_MetarialName"
            },
            {
                path: "_Color",
                select: "_ColorName"
            }
        ])

    let obj = {
        _status: true,
        _message: "Product View ",
        _Path: process.env.PRODUCTMAINPATH,
        productres,
    }
    res.send(obj);
}


let getProductDetail = async (req, res) => {
    let { _Slug } = req.params
console.log(_Slug)

    let filter = {
        _Product_Deleted_to: null,
        _Slug: _Slug,
        _ProductStatus: true,
    };
    let productres = await ProductUseadd
        .findOne(filter)
        .populate([
            {
                path: "_PerentCategory",
                select: "_CategoryName"
            },
            {
                path: "_SubCategory",
                select: "_SubCategoryName"
            },
            {
                path: "_SubSubCategory",
                select: "_SubSubCategoryName"
            },
            {
                path: "_Material",
                select: "_MetarialName"
            },
            {
                path: "_Color",
                select: "_ColorName"
            }
        ])

    let obj = {
        _status: true,
        _message: "Product View ",
        _Path: process.env.PRODUCTMAINPATH,
        productres,
    }
    res.send(obj);
}
let getSlider = async (req, res) => {

    let filter = {
        _Slider_Deleted_to: null,
        _SliderStatus: true

    }
    let Sliderres = await SliderUseadd.find(filter)
    let obj = {
        _status: true,
        _Message: 'Slider view',
        _path: process.env.SLIDERMAINPATH,

        Sliderres
    }
    res.send(obj)
}
let gettestimonial = async (req, res) => {

    let data = await TestimonialModelUse.find({
        _Testimonial_Deleted_to: null,
        _TestimonialStatus: true
    });

    res.send({
        _status: true,
        _Message: "Testimonial list",
        _path: process.env.TESTIMONAILMAINPATH,
        data
    });
};

let ComponydataWeb = async (req, res) => {


    let componydata = await ComponyModel.find()


    let obj = {
        _status: true,
        _path: process.env.USERANDCOMPONYMAINPATH,
        componydata
    }
    res.send(obj)

}


let Categoryview = async (req, res) => {


    let nondeleted = {
        _Category_Deleted_to: null,
        _CategoryStatus:true
    }
    let Categoryres = await CategoryUseadd.find(nondeleted)
    let obj = {
        _status: true,
        _Message: 'Country view',
        _path: process.env.MAINPATH,

        Categoryres
    }
    res.send(obj)
}
let SubCategoryview = async (req, res) => {


    let nondeleted = {
        _SubCategory_Deleted_to: null,
        _SubCategoryStatus:true
    }
    let SubCategoryres = await SubCategoryUseadd.find(nondeleted).populate("_PerentCategory","_CategoryName")
    let obj = {
        _status: true,
        _Message: 'Category view',
         _path : process.env.SUBMAINPATH,

        SubCategoryres
    }
    res.send(obj)
}


let colorviewdata = async (req, res) => {


    let nondeleted = {
        _Color_Deleted_to: null,
        _ColorStatus:true

    }
     let colorres = await ColorUseadd.find(nondeleted)
  
     let obj = {
        _status: true,
        colorres
    }
    res.send(obj)
}

let Materialviewdata = async (req, res) => {


    let nondeleted = {
        _Metarial_Deleted_to: null,
        _MetarialStatus:true

    }
    let Materialres = await MaterialUseadd.find(nondeleted)
    let obj = {
        _status: true,
      
        Materialres
    }
    res.send(obj)
}


module.exports = { getProduct, getProductDetail, getSlider,gettestimonial,ComponydataWeb,Categoryview,SubCategoryview,colorviewdata,Materialviewdata }