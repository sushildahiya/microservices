const express = require('express')
const router  = express.Router()
const mongoose = require('mongoose')
const axios = require('axios')
require('../dbconfig/dbfile')
const Order = require('./orderModel')

router.post('/',async (req,res)=>{
    try{
        const newOrder = new Order({
            customerId: new mongoose.Types.ObjectId(req.body.customerId),
            productId:new mongoose.Types.ObjectId(req.body.productId)
        });

        const data = await newOrder.save();
        if(data)
        res.status(200).send('Success')
    }catch(err){
        console.log("Error",err)
    }
})

router.get('/:id',(req,res)=>{
    Order.findById(req.params.id).then((order)=>{
        if(order){
            axios.get(`http://localhost:4000/customer/${order.customerId}`).then((response)=>{
                let orderObject = {
                    CustomerName:response.data.customerName
                }
                axios.get(`http://localhost:3000/product/${order.productId}`).then((response)=>{
                    orderObject.ProductName = response.data.productName
                    orderObject.ProductDetails = response.data.productDetails
                    res.json(orderObject)
                })
            })
        }else{
            res.status(404).send('Orders not found')
        }
        
    }).catch((err)=>{
        res.status(500).send("Internal server error")
    })
})

module.exports = router