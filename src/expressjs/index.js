const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const mongoose = require("mongoose");
const createError = require("http-errors");
var path = require("path");

var indexRouter = require("../expressjs/routes/routes");


const app = express();
const url = "mongodb://localhost:27017/visitors";
const con = mongoose.connect(url);

connect.then((db) =>{
    console.log("Successfully connected to visitorsDB!");
})
.catch((err)=>{console.log(err)});


app.use(express.static(__dirname + "/pages/home"));
app.use(express.static(__dirname + "/pages/contact"));

app.get("/contact", function(request, response){
    response.sendFile(__dirname + "/pages/contact/contact.html");
});

app.get("/", function(request, response){
    response.sendFile(__dirname + "/pages/home/index.html");
});


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(3000, function(){
    console.log("Server started on :3000")
});

