var http = require('http'); 
http.createServer(function (request, response) {   
  response.writeHead(200);   
  // console.log(request)
  console.log('http://localhost' + request.url)
  response.write('<h1>L\'url est : '+ request.url + '</h1>\n');   
  response.end(); 
}).listen(5000); 
console.log('Server running at ​http://localhost:5000​'); 