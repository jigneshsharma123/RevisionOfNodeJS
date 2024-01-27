const http = require('http');

const exmodule = require('./firsttModuel');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("The date and time are currently: " + exmodule.myDatetime());
    res.end();
}).listen(8000,(err) => {
    if(err) {
        console.log("error in running the server on the port:",8000);
    }
    console.log("server is running on the port", 8000);
});