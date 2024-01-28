const url = require('node:url');

const urlString = 'https://www.example.com/path?query=123#fragment';
const parsedURL = url.parse(urlString, true, (err) => {
    if(err) {
        console.error("Error in parsing th urlString :",err);
       return;
    }
   
});
console.log(parsedURL);