const mongoose = require('mongoose')

const ProSchema = new mongoose.Schema({
    title:String,
    description:String,
    image:String,
    category:String,
    price:Number,
    userID:String
})

const ProModel = mongoose.model('Product' , ProSchema)

module.exports = ProModel