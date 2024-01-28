const http = require('http');
const fs = require('fs');

http.createServer((req,res)=> {
   fs.readFile('./demo.html', ((err,data) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    if(err) {
        console.log("error in reading the file");
    }
    res.write(data);
    res.end();
   }));
}).listen(8080);