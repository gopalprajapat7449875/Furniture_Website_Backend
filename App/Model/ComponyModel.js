const mongoose = require('mongoose');

let componyschema = mongoose.Schema(
    {
        _ComponyName: {
            type: String,


        },

        _ComponyEmail: {
            type: String,



        },
        _ComponyWebsite: {
            type: String,



        },
          _ComponyInstagram: {
            type: String,



        },
          _Componyfacebook: {
            type: String,



        },
          _Componylinkdin: {
            type: String,



        },
          _Componytwiter: {
            type: String,



        },
          _Componyyoutube: {
            type: String,



        },
        
          _ComponyMap: {
            type: String,



        },
         _Componyteligram: {
            type: String,



        },
        
        

        _ComponyOfferCoupan: {
            type: String,



        },
        _ComponyGSTnumber: {
            type: String,



        },
        _ComponyCINnumber: {
            type: String,



        },
        _ComponyPANnumber: {
            type: String,



        },
        _ComponyFoundedYear: {
            type: String,



        },
        _ComponyCountry: {
            type: String,



        },
        _ComponyState: {
            type: String,



        },
        _ComponyCity: {
            type: String,



        },
        _ComponyPinCode: {
            type: String,



        },
        _ComponyType: {
            type: String,



        },

        _ComponySize: {
            type: String,



        },

        _ComponyPinCode: {
            type: String,



        },

        _ComponyFullAddrese: {
            type: String,



        },

        _ComponyDiscription: {
            type: String,



        },


        _ComponyPhoneNumber: {
            type: String,



        },
        _ComponyAlterPhoneNumber: {
            type: String,



        },

         _ComponyDisOffer: {
            type: Number,

        },



        _logoimg: String,




        
        _User_Updated_to: {
            type: Date,
            default: new Date()
        },




    }
)
let ComponyModel = mongoose.model("compony", componyschema)
module.exports = ComponyModel