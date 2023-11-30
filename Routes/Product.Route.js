const {Router} = require ('express');
const Auth = require('../Middlewares/Auth');
const { HomeRender, ProPost } = require('../Controllers/Product.Controllers');
const ProModel = require('../Models/Product.Schema');


const ProRouter = Router();

//home mate jo login hoy to home pages open thay
ProRouter.get("/Post" ,Auth, HomeRender )
//post routes mate
ProRouter.post("/Post" ,Auth, ProPost)

//je user login hoy temana data jova
ProRouter.get("/PostGet" ,Auth, async (req , res) => {
    let data = await ProModel.find({userId : req.body.userID});
    console.log(data);
    // res.json({data : data});
    res.send(data);

})


module.exports = ProRouter;