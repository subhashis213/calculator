//jshint esversion:6

const express = require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.send("hello world");
});

app.listen(process.env.PORT,function(){
    console.log("server is running on port 3000")
});