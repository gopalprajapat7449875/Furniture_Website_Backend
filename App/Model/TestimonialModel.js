const mongoose = require('mongoose');

let TestimonialSchema = mongoose.Schema(
    {
        _TestimonialName: {
            type: String,
            required: [true, "please File _TestimonialName"],
        },
        _TestimonialComponiName: {
            type: String,
            required: [true, "please enter _TestimonialComponiName "]
        },
        _TestimonialRating: {
            type: Number,
            enum: [1,2,3,4,5],
            required: [true, "please enter _TestimonialRating "]
        },
         _TestimonialAbout: {
            type: String,
           
            required: [true, "please enter _TestimonialAbout "]
        },
        _image: String,
        _TestimonialOrder: {
            type: Number,
            required: true
        },
        _TestimonialStatus: {
            type: Boolean,
            default: true
        },
        _Testimonial_Creted_to: {
            type: Date,
            default: new Date()
        },
        _Testimonial_Updated_to: {
            type: Date,
            default: new Date()
        },
        _Testimonial_Deleted_to: {
            type: Date,
            default: null
        }



    }
)
let TestimonialModelUse = mongoose.model("testimonial", TestimonialSchema)
module.exports = TestimonialModelUse