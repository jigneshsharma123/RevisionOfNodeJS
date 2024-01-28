const fs = require('node:fs');
const port = 8080;
const http = require('node:http');

const instanceOfServer = http.createServer((req,res) => {
    const path = './demo.html';
    fs.readFile(path, (err, data) => {
        if(err) {
            res.writeHead(404, {'Content-Type' : 'text/html'});
            res.write('404 page not Found!');
            return;
        }
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    });
});
instanceOfServer.listen(port, (err) => {
    if(err) {
        console.error('error in running the server on : ',port);
        return;
    }
    console.log("server is running on the port:",port);
})