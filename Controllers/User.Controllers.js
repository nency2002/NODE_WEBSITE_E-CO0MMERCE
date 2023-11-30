const UserModel = require('../Models/User.Schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const SignRender = (req, res) => {
    res.render("signup")
}
// signup with jwt bcrypt

const SignupData = async (req, res) => {
    try {
        let data = await UserModel.findOne({ email: req.body.email });
        if (data) {
            return res.json({ success: 'User already exists' });
        }
        else {
            let { username, email, password } = req.body
            bcrypt.hash(password, 5, async (err, hash) => {
                let obj = {
                    username: username,
                    email: email,
                    password: hash
                }
                let data = await UserModel.create(obj);
                // res.json({ msg: "User Created", data: data });
                res.redirect('/User/Login');
            })
        }
    }
    catch (error) {
        return res.json({ error: error.message });
    }


}

// login with jwt bcrypt

const LoginRender = (req, res) => {
    res.render("login")
}

const LoginData = async (req, res) => {
    try{
        const {email , password} = req.body;
        const data = await UserModel.findOne({email: email});
        if(data){
            bcrypt.compare(password, data.password , (err,result) =>{
                if(result){
                    let token = jwt.sign({id :data._id},"token");
                    res.cookie("token",token).redirect('/Product/Post')
                }
                else{
                    res.send("paassword incorrent");
                }
            })
        }
    }
    catch (error) {
        return res.json({ error: error.message });
    }
}

module.exports ={SignRender , SignupData , LoginData , LoginRender }