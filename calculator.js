//jshint esversion6

const express = require("express");
const app = express();

app.get("/",function(request, respond){
    respond.send("<h1>Calculator</h1>")
})

app.listen(3000,function(){
    console.log("Server started at 3000");
})