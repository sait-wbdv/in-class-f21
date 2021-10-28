const http = require('http')
const fs = require('fs')

const server = http.createServer(function(request, response){
  console.log(request.url)
  
  if (request.url === '/') {
    // Asynchronous: Recommended for beginners
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});  
    fs.readFile('./public/index.html', 'utf-8', function(error, data){
      if (error) {
        return console.log(error);
      }
      response.end(data);
    });
  } else if (request.url === '/css/main.css') {

    response.writeHead(200, {"Content-Type": "text/css; charset=utf-8"});  
    fs.readFile('./public/css/main.css', 'utf-8', function(error, data){
      if (error) {
        return console.log(error);
      }
      response.end(data);
    })

  } else if (request.url === '/js/client.js') {

    response.writeHead(200, {"Content-Type": "text/javascript; charset=utf-8"});  
    fs.readFile('./public/js/client.js', 'utf-8', function(error, data){
      if (error) {
        return console.log(error);
      }
      response.end(data);
    })

  } else {
    response.writeHead(404, {"Content-Type": "text/html; charset=utf-8"}); 
    response.end('<h1>File Not Found</h1>') 
  }

})

server.listen(8080, function(){
  console.log(`Listening on port 8080`);
})