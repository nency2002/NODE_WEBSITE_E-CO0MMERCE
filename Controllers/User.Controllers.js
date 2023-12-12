const User = require('../Models/User.Schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const otpgenerator = require("otp-generator");


const SignRender = (req, res) => {
  res.render("signup")
}
// signup with jwt bcrypt

const SignupData = async (req, res) => {
  try {
    let data = await User.findOne({ email: req.body.email });
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
        let val = await User.create(obj);
        let token = jwt.sign({ id: val.id }, "token");
        res.cookie("token", token);
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
  try {
    const { email, password } = req.body;
    const data = await User.findOne({ email: email });
    if (data) {
      console.log(data);
      bcrypt.compare(password, data.password, (err, result) => {
        if (result) {
          let token = jwt.sign({ id: data._id }, "token");
          res.cookie("token", token).redirect('/Product/Post')
          console.log(result);
        }
        else {
          res.send("paassword incorrent");
        }
      })
    }
  }
  catch (error) {
    return res.json({ error: error.message });
  }
}

//profile 
const ProfileRender = (req, res) => {
  res.render('profile');
}

// forget password nodemailer

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'kotadiyanency7@gmail.com',
    pass: 'ensh gvim ydkw nfze'
  }
})

let otp = otpgenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });


const Reset = (req, res) => {
  let { email } = req.body
  const mailoption = {
    from: "kotadiyanency7@gmail.com",
    to: email,
    subject: "reset password",
    html: `<a href=http://localhost:2002/User/Verify/${otp}> otp : ${otp} </a>`
  }
  transporter.sendMail(mailoption, (err, info) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log(info)
    }
  })
  res.send("sending otp")
}

const Verify = (req, res) => {
  let verifyotp = req.params.otp
  if (verifyotp == otp) {
    res.send("verifying otp")
  }
  else {
    res.send("not verifying otp")
  }
}






module.exports = { SignRender, SignupData, LoginData, LoginRender, Reset, Verify, ProfileRender }