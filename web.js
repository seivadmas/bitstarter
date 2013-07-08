// Modified to read index.html and print whatever it finds there

var greeting = "Hello World, Hola Mundo." // string read from index.html

var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(greeting);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
