const Product = require('../Models/Product.Schema');
const cart = require("../Models/Cart.Schema");
const Razorpay = require('razorpay');

//home mate jo login hoy to home pages open thay
const PostRender = (req, res) => {
    res.render("post")
}


const HomeRender = (req, res) => {
    res.render("home")
}

const CartRender = (req, res) => {
    res.render("cart")
}

//admin panel jo user login to userid sathe data post kari sake
const ProPost = async (req, res) => {
    let data = await Product.create(req.body);
    res.json({ data: data });
}

//admin panel jo user login to temna post karela data dekhay

const Products = async (req, res) => {
    let data = await Product.find({ userID: req.body.userID });
    res.send(data);
   
}
//je user login hoy temana data jova delete karva
const Deleteproduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    let data = await Product.find({ userID: req.body.userID });
    res.json(data);
}


//badha data male home page pr
const all = async (req, res) => {
    let data = await Product.find()
    res.send(data);
}

// cart
const Cart = async (req, res) => {
    let data = await cart.create(req.body);
    res.send(data);
}

const CartDatas = async (req , res)=>{
    let data = await cart.find({userID : req.body.userID}).populate('productID');
    res.send(data);
}

const cartqty = async (req, res) =>{
    let {id} = req.params
    let {val} = req.body
    let data = await cart.findById(id)
    if(data.qty ==1 & val == -1){
        await cart.findByIdAndDelete(id);
        return res.send({status : "success"})
    }
   
    data.qty = data.qty+val
    await data.save()
    res.send(data);
}

// payments
var razorpay = new Razorpay({
    key_id: 'rzp_test_67TKW3OGPNMj27',
    key_secret: 'hyczz38bwQ7oe7lI65LqazeJ',
  });

  const payments = async (req, res) =>{
        let {amount} = req.body
        let options ={
            amount : amount*100,
        }
        razorpay.orders.create(options , (err, order) =>{
            if(err){
                console.log(err);
                res.send({data : err.message});
            }
            else{
                res.send(order)
            }
        })
  }

module.exports = { PostRender, ProPost, Products, all, HomeRender ,Deleteproduct , Cart , CartDatas , CartRender , cartqty , payments}