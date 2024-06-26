const express = require('express');
const {randomBytes} =  require('crypto')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const axios = require('axios')


app.use(cors())

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const posts={}
app.get('/posts',(req,res)=>{
    res.send(posts);
})

app.post('/posts',(req,res)=>{
    const id =  randomBytes(4).toString('hex');
    const {title}=req.body;
    posts[id]={
        id,title
    }
    axios.post('http://localhost:4005/events',{type:'PostCreated',data:{id,title}})
    res.status(201).send(posts[id])
})
app.post('/events',(req,res)=> console.log(req.body.type))

app.listen(4000,()=>{
    console.log('Listening on 4000')
})

