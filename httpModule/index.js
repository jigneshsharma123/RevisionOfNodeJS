const http = require('http');

//Use the createServer() method to create an HTTP server:
//create a server object: 
http.createServer((req, res) => {
    //http header for displaying HTML
    res.writeHead(200,
        {
            "Content-Type": "text/html"
        }
    );
    res.write("Hello world ", 'utf-8', ((err) => {
        if (err) {
            console.log("error in send the chunk of the data");
        }
    })); // write a response to the client;
    res.end("by NodeJS", 'utf-8', ((error) => {
        if (error) { console.log("erron in ending the response") }
    })); //end the response;

}).listen(8080);//the server object listens on port 8080