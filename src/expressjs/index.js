const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");


const app = express();

app.use(cors());

app.use(express.static(__dirname + "/pages/home"));
app.use(express.static(__dirname + "/pages/contact"));

app.get("/contact", function(request, response){
    response.sendFile(__dirname + "/pages/contact/contact.html");
});

app.get("/", function(request, response){
    response.sendFile(__dirname + "/pages/home/index.html");
});

app.get('/visit', function(req, res) {

    const json = fs.readFileSync("count.json", "utf-8");
    const obj = JSON.parse(json);

    obj.visits = obj.visits+1;

    const newJSON = JSON.stringify(obj);

    fs.writeFileSync("count.json", newJSON);

    res.send(newJSON);

})


app.listen(3000, function(){
    console.log("Server started on :3000")
});

