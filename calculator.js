//jshint esversion6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(request, respond){
    respond.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/", function(request, respond){

    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);

    var result = num1 / (num2*num2);

    let result2 = result.toFixed(2);

    respond.send("Your BMI is " + result2);
})

app.listen(3000,function(){
    console.log("Server started at port 3000");
});