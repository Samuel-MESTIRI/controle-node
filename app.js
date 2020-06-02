var express = require('express'); 
var http = require('http'); 
var app = express(); 
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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

app.get('/post', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/post', function (req, res) {
  console.log('ca ne fonctionne pas', req.body)
  res.send('le super post')
})

http.createServer(app).listen(4567);