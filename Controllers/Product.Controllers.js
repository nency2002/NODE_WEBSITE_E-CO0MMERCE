const ProModel = require('../Models/Product.Schema');


//home mate jo login hoy to home pages open thay
const HomeRender =  (req, res) => {
    res.render("home")
}

//admin panel jo user login to userid sathe post kari sake
const ProPost = async (req, res) => {
    let data = await ProModel.create(req.body);
    res.json({ data : data });
}

//admin panel jo user login to temna post karela data dekhay

const Products = async (req , res) => {
    let data = await ProModel.find({userID:req.body.userID});
    res.send({prodata:data})

}

module.exports = {HomeRender , ProPost , Products}