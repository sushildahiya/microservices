const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const axios = require('axios')


app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.post('/events',(req,res)=>{
    console.log("Event")
    axios.post('http://localhost:4000/events',req.body).catch(err=>console.log(err.message))
    axios.post('http://localhost:4001/events',req.body).catch(err=>console.log(err.message))
    axios.post('http://localhost:4003/events',req.body).catch(err=>console.log(err.message))

    res.status(201).send({message:"OK"})
})

app.listen(4005,()=>{
    console.log('Listening on 4005')
})

