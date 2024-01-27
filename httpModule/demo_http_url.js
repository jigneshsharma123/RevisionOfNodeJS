// example of query string = 'name=js&age=22&city=deoria'

const http = require('node:http');
const url = require('node:url');
const querystring = require('node:querystring');
http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    //  console.log(req.url); 
    // http://localhost:8080/summer ouput=> summer
    const q = url.parse(req.url, true).query;
    const txt = q.year + " " + q.month;
    res.write(txt);
    console.log(querystring.parse("name=John&age=30&city=NewYork"));
    res.end();
}).listen(8080);