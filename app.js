const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 4000;

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extented:true}));

let ejs = require('ejs');
let people = ['geddy','neil','alex'];
let html = ejs.render('<%= people.join(",");%>',{people:people});

app.get('/',(req,res)=>{res.render("home");});
app.get('/projet-1',(req,res)=>{res.render("projet-1");});
app.get('/projet-2',(req,res)=>{res.render("projet-2");});
app.get('/projet-3',(req,res)=>{res.render("projet-3");});
app.get('/projet-4',(req,res)=>{res.render("projet-4");});
app.get('/training',(req,res)=>{res.render("training");});
app.listen(port,()=>{console.log("Server running on port ${port}")});
