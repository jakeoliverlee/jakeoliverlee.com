const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.get("/resume", function(request, response){
    response.send("<h1>Resume</h1>");
});

app.get("/", function(request, response){
    response.sendFile(__dirname + "/../index.html");
});

app.listen(3000, function(){
    console.log("Server started on :3000")
});  // listen on port 3000