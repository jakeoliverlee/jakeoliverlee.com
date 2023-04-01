const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");



const app = express();

app.use(express.static(__dirname + "/pages/home"));
app.use(express.static(__dirname + "/pages/contact"));

app.get("/contact", function(request, response){
    response.sendFile(__dirname + "/pages/contact/contact.html");
});

app.get("/", function(request, response){
    response.sendFile(__dirname + "/pages/home/index.html");
});

app.listen(3000, function(){
    console.log("Server started on :3000")
});
