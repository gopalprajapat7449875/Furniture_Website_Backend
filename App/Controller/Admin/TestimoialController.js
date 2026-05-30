const TestimonialModelUse = require("../../Model/TestimonialModel");

// ✅ ADD
let Testimonialadd = async (req, res) => {
    try {
        let data = { ...req.body };
        let { _TestimonialName } = req.body;

        let check = await TestimonialModelUse.findOne({
            _TestimonialName,
            _Testimonial_Deleted_to: null
        });

        if (check) {
            return res.send({
                _status: false,
                _Message: "Testimonial already exists"
            });
        }

        // image
        if (req.file?.filename) {
            data["_image"] = req.file.filename;
        }

        let result = await TestimonialModelUse.create(data);

        res.send({
            _status: true,
            _Message: "Testimonial added",
            result
        });

    } catch (err) {
        console.log(err);

        let erre = [];
        if (err.errors) {
            for (let key in err.errors) {
                let obj = {};
                obj[key] = err.errors[key].message;
                erre.push(obj);
            }
        }

        res.send({
            _status: false,
            erre
        });
    }
};



// ✅ VIEW
let Testimonialview = async (req, res) => {
    let data = await TestimonialModelUse.find({
        _Testimonial_Deleted_to: null
    });

    res.send({
        _status: true,
        _Message: "Testimonial list",
        _path: process.env.TESTIMONAILMAINPATH,
        data
    });
};



// ✅ DELETE (soft delete)
let Testimonialdelete = async (req, res) => {
    let { _id } = req.body;

    try {
        let result = await TestimonialModelUse.updateOne(
            { _id },
            {
                $set: {
                    _Testimonial_Deleted_to: new Date()
                }
            }
        );

        res.send({
            _status: true,
            _Message: "Deleted successfully",
            result
        });

    } catch (err) {
        res.send({
            _status: false,
            _Message: err.message
        });
    }
};



// ✅ STATUS TOGGLE
let Testimonialchangestatus = async (req, res) => {
    let { _id } = req.body;

    try {
        let result = await TestimonialModelUse.updateOne(
             { _id: _id }
        , [{
            $set: {
                _TestimonialStatus: {
                    $not: "$_TestimonialStatus"
                }
            }
        }],
        {
            updatePipeline: true
        }
        );

        res.send({
            _status: true,
            _Message: "Status changed",
            result
        });

    } catch (err) {
        res.send({
            _status: false,
            _Message: err.message
        });
    }
};



// ✅ SINGLE DATA
let Testimonialsingle = async (req, res) => {
    let { _id } = req.params;

    let data = await TestimonialModelUse.findById(_id);

    res.send({
        _status: true,
        _Message: "Found",
        _path: process.env.TESTIMONAILMAINPATH,
        data
    });
};



// ✅ UPDATE
let Testimonialupdate = async (req, res) => {
    let { _id } = req.params;
    let data = { ...req.body };

    try {
        if (req.file?.filename) {
            data["_image"] = req.file.filename;
        }

        let result = await TestimonialModelUse.updateOne(
            { _id },
            { $set: data }
        );

        res.send({
            _status: true,
            _Message: "Updated successfully",
            result
        });

    } catch (err) {
        res.send({
            _status: false,
            _Message: err.message
        });
    }
};



// ✅ EXPORT
module.exports = {
    Testimonialadd,
    Testimonialview,
    Testimonialdelete,
    Testimonialchangestatus,
    Testimonialsingle,
    Testimonialupdate
};