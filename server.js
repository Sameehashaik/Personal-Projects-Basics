const express = require('express');
const mongoose = require('mongoose');
const Table = require('./frontend/js/table');

const app = express();
 
app.use(express.static(__dirname+"/frontend"));

var password = process.env.Mongo_atlas_PASSWORD;
var connectionString = "mongodb+srv://sameeha_shaik:"+password+"@cluster0.tdhog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(connectionString, {useUnifiedTopology: true, useNewUrlParser: true});
mongoose.connection.on('connected', function(){
    console.log("Database Connected");
});

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

app.get("/CRUD", function(req, res){
    res.sendFile('frontend/html/crud.html',{root:__dirname})
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

//app.js

app.get('/crud/get',async function(req, res){
    //res.json(a);
    await Table.find()
    .then((result)=>{
     res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.post('/crud/post',function(req, res){
    var newt= req.body;
    console.log(newt)
    const table= new Table({
        name: newt.name,
        Articels: newt.Articels
    })
    console.log(table)
    table.save()
    //res.json(a)
 })

 app.delete('/crud/del:id', function(req, res){
    var i=req.params.id
    console.log(i)
        Table.findByIdAndDelete(i,function(err,orb){
        if(err)
        console.log("ERROR:"+err)
        else 
        console.log("SUCCESS")
    })
})

app.put('/crud/put:id', function(req, res){
    var i=req.params.id
    Table.findById(i,function(err,obj){
        if(err)
        console.log("ERROR:"+err)
        else {
            console.log(obj.Articels)
        var obj={Articels: obj.Articels }
        //Table.findByIdAndUpdate(i,obj,function(){})
        }
    })
})