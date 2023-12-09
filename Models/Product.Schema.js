const mongoose = require('mongoose')

const ProSchema = new mongoose.Schema({
    title:String,
    description:String,
    image:String,
    category:String,
    price:Number,
    userID:{ type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

const Product = mongoose.model('Product' , ProSchema)

module.exports = Product