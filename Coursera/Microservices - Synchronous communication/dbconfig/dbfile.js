const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://0.0.0.0:27017/OrderDb'
const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const connection = mongoose.connection
connection.on('open',()=>console.log('Connected.......'))
connection.once('error',(err)=>{
    console.log("DB connection error",err)
    process.exit(1)
})
app.use(express.urlencoded({extended:true}))
app.use(express.json())