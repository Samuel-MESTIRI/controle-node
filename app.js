var http = require('http'); 
http.createServer(function (request, response) {   
  response.writeHead(200);   
  // console.log(request)
  const lastIndex  = __dirname.split('\\').length
  const name = __dirname.split('\\')[parseInt(lastIndex)-1] 
  response.write('<h1>L\'url est : '+ request.url + '</h1>\n <p>Le chemin du repertoire : ' + __dirname + '</p>\n <p>Le nom du repertoire : ' + name + '</p>');   
  response.end(); 
}).listen(5000); 
console.log('Server running at ​http://localhost:5000​'); 