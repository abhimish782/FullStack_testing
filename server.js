const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var height=req.body.height;
    var weight=req.body.weight;
    var bmi=(parseInt(weight)/((parseFloat(height)*parseFloat(height))))*10000;
    res.send("Your BMI IS "+bmi);
});


app.listen("3000",function(){
    console.log("Server started at port 3000");
});