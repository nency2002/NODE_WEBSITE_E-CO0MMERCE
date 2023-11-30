const { Router } = require('express');
const { SignupData, SignRender, LoginData, LoginRender } = require('../Controllers/User.Controllers');



const UserRouter = Router();

// signup with jwt bcrypt
UserRouter.get("/Signup",SignRender )
UserRouter.post("/Signup",SignupData )

//login with jwt bcrypt
UserRouter.get("/Login" , LoginRender)
UserRouter.post("/Login", LoginData)


module.exports = UserRouter