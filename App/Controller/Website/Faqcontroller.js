const FaqUseadd = require("../../Model/FaqModel")

let Faqview = async (req, res) => {


    let nondeleted = {
        _Faq_Deleted_to: null,
        _FaqStatus:true
    }
    let Faqres = await FaqUseadd.find(nondeleted)
    let obj = {
        _status: true,
        _Message: 'Faq view',
        Faqres
    }
    res.send(obj)
}
module.exports = {Faqview  };