// database ma connect karva

const mongoose = require('mongoose');

const Connect = async() =>{
    await mongoose.connect("mongodb://127.0.0.1:27017/E-commerce");
    console.log("Connect to MongoDB");
}

module.exports = Connect