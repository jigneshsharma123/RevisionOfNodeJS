const url = require('node:url');
// example of url.parse(urlString, true, cb(err));
const urlString = 'https://www.example.com/path?query=123#fragment';
// const parsedURL = url.parse(urlString, true, (err) => {
//     if(err) {
//         console.error("Error in parsing th urlString :",err);
//        return;
//     }

// });
// console.log(parsedURL);

//example of url.format(urlObject);
const Urlobject = {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.example.com',
    port: null,
    hostname: 'www.example.com',
    hash: '#fragment',
    search: '?query=123',
    query: { query: '123' },
    pathname: '/path',
    path: '/path?query=123',
    href: 'https://www.example.com/path?query=123#fragment'
}
const formattedUrl = url.format(Urlobject);
console.log(formattedUrl);