const {Router} = require ('express');
const Auth = require('../Middlewares/Auth');
const { HomeRender, ProPost, Products } = require('../Controllers/Product.Controllers');


const ProRouter = Router();

//home mate jo login hoy to home pages open thay
ProRouter.get("/Post" ,Auth, HomeRender )
//post routes mate
ProRouter.post("/Post" ,Auth, ProPost)

//je user login hoy temana data jova
ProRouter.get("/PostGet" ,Auth, Products)


module.exports = ProRouter;