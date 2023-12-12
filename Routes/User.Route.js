const { Router } = require('express');
const { SignupData, SignRender, LoginData, LoginRender, Reset, Verify, ProfileRender } = require('../Controllers/User.Controllers');



const UserRouter = Router();

// signup with jwt bcrypt
UserRouter.get("/Signup",SignRender )
UserRouter.post("/Signup",SignupData )

//login with jwt bcrypt
UserRouter.get("/Login" , LoginRender)
UserRouter.post("/Login", LoginData)



// nodemailer
UserRouter.get("/Forget" , (req , res)=>{
    res.render('forget')
})
UserRouter.post("/Sendmail",Reset)
UserRouter.get("/Verify/:otp",Verify)

//profile 
UserRouter.get("/profile",ProfileRender)




module.exports = UserRouter