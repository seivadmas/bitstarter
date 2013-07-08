// Modified to read index.html and print whatever it finds there

// read string from index.html
var indexContents = fs.readFileSync("index.html", "utf8");
var indexString = indexContents.toString();

var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send("TestString");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
