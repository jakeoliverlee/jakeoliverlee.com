const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");


const app = express();

app.use(cors());

app.use(express.static(__dirname + "/pages/home"));

app.get("/", function(request, response){
    response.sendFile(__dirname + "/pages/home/index.html");
});




app.listen(3000, function(){
    console.log("Server started on :3000")
});

