var express = require('express');
var app = express.createServer(express.logger());
var htmlfile = "index.html";
var fs = require('fs');


app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
  //console.log(fs.readFileSync('index.html', 'utf-8'));
});
