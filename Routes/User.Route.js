const { Router } = require('express');
const { SignupData, SignRender, LoginData, LoginRender, resetpass, verify, ProfileRender } = require('../Controllers/User.Controllers');



const UserRouter = Router();

// signup with jwt bcrypt
UserRouter.get("/Signup",SignRender )
UserRouter.post("/Signup",SignupData )

//login with jwt bcrypt
UserRouter.get("/Login" , LoginRender)
UserRouter.post("/Login", LoginData)



// nodemailer
UserRouter.post("/reset" ,resetpass)
UserRouter.get("/verify/:otp", verify)


//profile 
UserRouter.get("/profile",ProfileRender)

module.exports = UserRouter