var express=require('express');
var validation=require('./validation')
var app=express();
app.use(express.json());

app.post('/joi',validation.verification,(req,res)=>{
  
  res.json({result:req.body})
  
})


app.post('/data',validation.data,(req,res)=>{
  
  res.json({result:req.body})
  
})






app.listen(5000,()=>{
    console.log("server running on 5000 port")
})