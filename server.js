var express = require('express');

var app = express();

app.use(express.static('public'))

app.get('/', function (req, res) {
   res.send("Hello World!"); 
});

app.listen(8080, function(){
    console.log("Listen on port 8080...");
});