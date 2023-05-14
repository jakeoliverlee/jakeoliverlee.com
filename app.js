const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.static(__dirname + "/src/pages/home"));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/src/pages/home/index.html");
});

app.listen(3000, function () {
  console.log("Server started on :3000");
});
