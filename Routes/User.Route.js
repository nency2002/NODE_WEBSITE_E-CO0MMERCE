const { Router } = require('express');
const { SignupData, SignRender, LoginData, LoginRender, HomeRender } = require('../Controllers/User.Controllers');
const Auth = require('../Middlewares/Auth');


const UserRouter = Router();

// signup with jwt bcrypt
UserRouter.get("/Signup",SignRender )
UserRouter.post("/Signup",SignupData )

//login with jwt bcrypt
UserRouter.get("/Login" , LoginRender)
UserRouter.post("/Login", LoginData)

//home mate jo login hoy to home pages open thay
UserRouter.get("/Home" ,Auth,  HomeRender)



module.exports = UserRouter