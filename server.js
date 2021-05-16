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

app.get("/TodoCRUD", function(req, res){
    res.sendFile('frontend/html/todocrud.html',{root:__dirname})
})

// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})

//TO MAKE IT API SERVER
app.use(express.urlencoded({extended: true}));
app.use(express.json());

var a={
    "task":[]
};

app.get('/api/todo', function(req, res){
    res.json(a);
})

app.post('/api/todo', function(req, res){
    var newUser= req.body;
    a.task.push(newUser.task)
    res.json(a)
 })

 app.delete('/api/todo/:id', function(req, res){
    var i=req.params.id
    if(i==-1){
        for(var j=0;j<a.task.length;++j){
            a.task.splice(j,1)
            console.log(a.task[j])
        }
    }
    a.task.splice(i,1)
})

app.put('/api/todo/:id', function(req, res){
    var i=req.params.id
    a.task[i]="<s>"+a.task[i]+"</s>" 
})