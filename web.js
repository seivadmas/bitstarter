// Modified to read index.html and print whatever it finds there

var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

// read string from index.html
var indexContents = fs.readFileSync("index.html", "utf8");
var indexString = indexContents.toString();

app.get('/', function(request, response) {
  response.send(indexString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
