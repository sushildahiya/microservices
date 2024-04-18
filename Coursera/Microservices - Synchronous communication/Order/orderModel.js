const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer',
        required:true
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    }
})


const Order = mongoose.model('Order',orderSchema)
module.exports = Order