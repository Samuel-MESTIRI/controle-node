var express = require('express'); 
var http = require('http'); 
var app = express(); 

app.get('/', function(req, res){   
  res.writeHead(200);   
  res.write('Hello Express!!!');   
  res.end(); 
}); 

app.get('/salut', function(req, res){   
  res.writeHead(200);   
  res.write('salutt');   
  res.end(); 
}); 

http.createServer(app).listen(4567);