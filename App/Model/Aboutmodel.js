const mongoose = require('mongoose');

let aboutschema = mongoose.Schema(
    {
        _AboutDiscription: {
            type: String,
            
        },

      

        _AboutHero: String,

        _Category_Creted_to: {
            type: Date,
            default: new Date()
        },
        _Category_Updated_to: {
            type: Date,
            default: new Date()
        }
        

    }
)
let AboutModel = mongoose.model("about", aboutschema)
module.exports = AboutModel