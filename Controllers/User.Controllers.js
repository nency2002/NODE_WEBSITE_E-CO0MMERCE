const UserModel = require('../Models/User.Schema');
const bcrypt = require('bcrypt');

const SignRender = (req, res) => {
    res.render("signup")
}


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
                res.json({ msg: "User Created", data: data });

            })
        }
    }
    catch (error) {
        return res.json({ error: error.message });
    }


}

module.exports ={SignRender , SignupData}