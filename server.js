const express = require('express');
 
const app = express();
 
app.use(express.static(__dirname+"/frontend"));

app.get("/", function(req, res){
    res.send("Welcome to Sameeha's Basic Site");
})

app.get("/Resume", function(req, res){
    res.sendFile('frontend/html/resume.html',{root:__dirname})
})

app.get("/Google", function(req, res){
    res.sendFile('frontend/html/google.html',{root:__dirname})
})

app.get("/Color", function(req, res){
    res.sendFile('frontend/html/color.html',{root:__dirname})
})

app.get("/Practice", function(req, res){
    res.sendFile('frontend/html/practice.html',{root:__dirname})
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
