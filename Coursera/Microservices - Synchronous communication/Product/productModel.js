const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productId:{
        type:String,required:true
    },
    productName:{
        type:String, required:true
    },
    productDetails:{
        type:String,
        required:true
    }
})

const Product = mongoose.model('Product',productSchema)
module.exports = Product