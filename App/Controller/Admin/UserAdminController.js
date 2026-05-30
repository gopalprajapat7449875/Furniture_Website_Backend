const bcrypt = require("bcrypt");
const saltRounds = 10;

var jwt = require('jsonwebtoken');
const UserAdminUseadd = require("../../Model/UserForAdminand");

let SubAdminCreate = async (req, res) => {

    let data = { ...req.body }
    let { _UserEmail, _UserPassword } = req.body;


    let admindata = await UserAdminUseadd.findOne({ _UserEmail: _UserEmail });

    if (admindata) {


        let obj = {
            _status: true,
            _Message: "Sub Admin Alredy Axist"
        }

        res.send(obj)

    } else {


        if (req.file) {
            if (req.file.filename) {
                data['_ProfilePic'] = req.file.filename
            }
        }

        let hashedPassword = _UserPassword;


        if (_UserPassword) {
            const saltRounds = 10;
            hashedPassword = await bcrypt.hash(_UserPassword, saltRounds);
        }


        await UserAdminUseadd.insertOne({
            ...data,
            _UserPassword: hashedPassword
        });
        let obj = {
            _status: true,
            _Message: "Sub Admin Created"
        }
        res.send(obj)

    }

}


let AdminLogin = async (req, res) => {

    let { _UserEmail, _UserPassword } = req.body

    try {

        let EmailCheak = await UserAdminUseadd.findOne({ _UserEmail })







        if (EmailCheak) {

            const match = await bcrypt.compareSync(_UserPassword, EmailCheak._UserPassword);
            if (match) {


                let token = jwt.sign({ UserId: EmailCheak._id }, process.env.TOKENKEY);

                let obj = {
                    _status: true,
                    _Message: 'Login Sucess',

                    token

                }
                res.send(obj)
            }
            else {
                let obj = {
                    _status: false,
                    _Message: 'Invalid Password',

                }
                res.send(obj)
            }

        }

        else {
            let obj = {
                _status: false,
                _Message: 'Email Is Invalid',

            }
            res.send(obj)

        }
    }

    catch (err) {

        console.log(err);

        let errorrs = err.errors
        let erre = []
        for (let key in errorrs) {
            let errobj = {}
            errobj[key] = errorrs[key].message
            erre.push(errobj)

        }
        let obj = {
            _status: false,
            erre
        }
        res.send(obj)

    }



}

let ChangePassawordAdmin = async (req, res) => {

    let { _UserId, _NewPassword, _OldPassword } = req.body




    let userData = await UserAdminUseadd.findOne({ _id: _UserId });

    let hashedPassword = userData._UserPassword
    let saltRounds = 10;
    if (bcrypt.compareSync(_OldPassword, hashedPassword)) {

        const hashedPassword = bcrypt.hashSync(_NewPassword, saltRounds);

        await UserAdminUseadd.updateOne(
            {

                _id: _UserId

            },
            {
                $set: {
                    _UserPassword: hashedPassword
                }
            }
        )
        let obj = {
            _status: true,
            _message: "Password Change Successfully...."
        }
        res.send(obj)

    }
    else {
        let obj = {
            _status: false,
            _message: " Invalid Old Password....",
        };
        res.send(obj);
    }





}
let UserdataAdmin = async (req, res) => {

    let { _UserId } = req.body



    let userData = await UserAdminUseadd.findOne({ _id: _UserId });

    let obj = {
        _status: true,
        _message: "User Found",
        userData,
        _path: process.env.USERANDCOMPONYMAINPATH,
    }
    res.send(obj)


}

let UserUpdateAdmin = async (req, res) => {



    let data = { ...req.body }

    let token = req.headers.authorization;
    let onlytoken = token.split(" ")[1]
    let deCode = jwt.verify(onlytoken, process.env.TOKENKEY)
    let { UserId } = deCode

    if (req.file) {
        if (req.file.filename) {
            data['_ProfilePic'] = req.file.filename
        }
    }
    await UserAdminUseadd.updateOne(
        { _id: UserId }
        ,
        {
            $set: data
        }
    );
    let obj = {
        _status: true,
        _message: "User Data Updated",




    }
    res.send(obj)







}
module.exports = { SubAdminCreate, AdminLogin, ChangePassawordAdmin, UserdataAdmin, UserUpdateAdmin }