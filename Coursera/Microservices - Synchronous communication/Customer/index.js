const express = require('express')
const app = express()
const customerRouter= require('./customerRouter')
app.use(express.json())

app.use('/customer',customerRouter)

app.listen(4000,()=>{
    console.log('listening ...............')
})