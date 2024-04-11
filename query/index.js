const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const posts={}
app.get('/posts',(req,res)=>{
    res.send(posts);
})

app.post('/events',(req,res)=> {
    const {type,data}=req.body
    if(type==='PostCreated'){
        posts[data.id]={id:data.id,title:data.title,comments:[]}
    }
    if(type==='CommentCreated'){
        posts[data.postId].comments.push(data.id,data.content)
    }
   res.send({message:"OK"})
})

app.post('/posts',(req,res)=>{
   
})

app.listen(4003,()=>{
    console.log('Listening on 4003')
})

