var express = require("express");
var app = express();

//Set view engine for node.js
app.set("view engine", "ejs");
//Tell node that /folderroute starts at public
app.use(express.static(__dirname + '/public'));

//HOME PAGE
app.get("/", function(res,res){
  res.render("index")
})

var port = process.env.PORT || 8000;
//Set up server
app.listen(port, console.log("APP STARTED ON SERVER 5000"));
