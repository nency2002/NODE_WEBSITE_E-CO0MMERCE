//token verify karava

const jwt = require("jsonwebtoken");

const Auth = ( req , res , next)=>{
    let {token}  = req.cookies;
    if(token){
        let decoded = jwt.verify(token , "token");
        req.body.id = decoded.id;
        next();
    }
    else{
        res.redirect('/User/Login');
    }
}

module.exports = Auth;