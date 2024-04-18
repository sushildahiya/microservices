const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    customerId:{type:String,required:true},
    customerName:{type:String,required:true},
    customerAge:{type:String,required:true},
    customerAddress:{type:String,required:true}
})

const Customer = mongoose.model('Customer',customerSchema)
module.exports = Customer