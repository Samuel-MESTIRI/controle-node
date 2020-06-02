var http = require('http'); 
http.createServer(function (request, response) {   
  response.writeHead(200);   
  response.write('<h1>Je retourne la chaine de on choix !</h1>\n');   
  response.end(); 
}).listen(5000); 
console.log('Server running at ​http://localhost:5000​'); 