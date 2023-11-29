const { Router } = require('express');
const { SignupData, SignRender } = require('../Controllers/User.Controllers');


const UserRouter = Router();

UserRouter.get("/Signup",SignRender )

UserRouter.post("/Signup",SignupData )

module.exports = UserRouter