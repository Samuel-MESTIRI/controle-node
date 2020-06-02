var express = require('express'); 
var http = require('http'); 
var app = express(); 

function displayCurrentUrl(req) {
  console.log(req.protocol + '://' + req.get('host') + req.originalUrl)
}

app.get('/', function(req, res){   
  res.writeHead(200);   
  displayCurrentUrl(req)
  res.write('Hello Express!!!');   
  res.end(); 
}); 

app.get('/salut', function(req, res){   
  res.writeHead(200);   
  displayCurrentUrl(req)
  res.write('salutt');   
  res.end(); 
}); 

http.createServer(app).listen(4567);