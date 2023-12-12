const {Router} = require ('express');
const {Auth} = require('../Middlewares/Auth');
const { PostRender, ProPost, Products, all, HomeRender, Deleteproduct  , Cart  , CartDatas , CartRender, cartqty, payments} = require('../Controllers/Product.Controllers');


const ProRouter = Router();

//home mate jo login hoy to home pages open thay
ProRouter.get("/Post" ,Auth, PostRender )
//post routes mate
ProRouter.post("/Post" ,Auth, ProPost)

//je user login hoy temana data jova
ProRouter.get("/UserProduct" ,Auth, Products)
//je user login hoy temana data jova delete karva
ProRouter.delete("/delete/:id",Auth, Deleteproduct);


//badha data male home page pr
ProRouter.get("/All" ,all)


// cart
ProRouter.post("/Cart/:id",Auth,Cart);
ProRouter.get("/CartData" , Auth , CartDatas)
ProRouter.get("/CartRender" ,CartRender)


ProRouter.get("/HomeRender" ,HomeRender)


ProRouter.patch("/Crat/Update/:id" , Auth , cartqty)

// payment

ProRouter.post("/Payment" , Auth ,payments)





module.exports = ProRouter;