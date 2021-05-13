const express = require('express');
 
const app = express();
 
app.use(express.static(__dirname+"/frontend"));

app.get("/", function(req, res){
    res.sendFile('frontend/html/index.html',{root:__dirname})
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

app.get("/Login", function(req, res){
    res.sendFile('frontend/html/login.html',{root:__dirname})
})

app.get("/Register", function(req, res){
    res.sendFile('frontend/html/register.html',{root:__dirname})
})

app.get("/Todo", function(req, res){
    res.sendFile('frontend/html/todo.html',{root:__dirname})
})

// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})


// //TO MAKE IT API SERVER
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// app.user(function(req, res, next){
//     // all requests will go through it
// })
// app.use('/api/special', function(req, res, next){
//     // this is only for apis whose url starts with /api/special
// })
// var todos= [];

// // 5 Routes for any resource

// app.get('/api/todos', function(req, res){
//     // Get all todos
// })

// app.get('/api/todos/:todoId', function(req, res){

//     // req.params.todoId

//     // get single todo with given id
// })

// app.put('/api/todos/:todoId', function(req, res){

//     // update
// })

// app.delete('/api/todos/:todoId', function(req, res){

//     // delete
// })


// app.post('/api/todos', function(req, res){
//     // Create

//     // req.body will have what frontend sent
// })