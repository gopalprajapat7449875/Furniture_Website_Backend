const mongoose = require('mongoose');

let UserForAdminmodel = mongoose.Schema(
    {
        _UserName: {
            type: String,


        },

        _UserEmail: {
            type: String,



        },
        _UserPhoneNumber: {
            type: String,



        },
        _Permissions: {
            type: String,
            enum: ["1", "2", "3", "4", "5"],
            default: "5"
        },
         _Role: {
            type: String,
           
            default: "All"
        },


        _UserGender: {
            type: String,
            enum: [1, 2], // Allowed values
            default: 1, // Optional default value

        },
        _UserPassword: {
            type: String,
            required: [true, "please File  _UserPassword"],

        },



        _ProfilePic: String,



        _UserStatus: {
            type: Boolean,
            default: true
        },
        _User_Creted_to: {
            type: Date,
            default: new Date()
        },
        _User_Updated_to: {
            type: Date,
            default: new Date()
        },
        _User_Deleted_to: {
            type: Date,
            default: null
        }



    }
)
let UserAdminUseadd = mongoose.model("useradmin", UserForAdminmodel)
module.exports = UserAdminUseadd