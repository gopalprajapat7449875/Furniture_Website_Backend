const UserUseadd = require("../../Model/UserModel")

let Usershow = async (req, res) => {

    let user = await UserUseadd.find()

    let obj = {
        _Status: true,
        user
    }

    res.send(obj)
}
module.exports ={Usershow}