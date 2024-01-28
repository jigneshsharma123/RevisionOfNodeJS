# NodeJS URL Module

1. URL Module is a Built-in Module avilable in the NodeJS.
2. This Provides method for parsing and formatting the URL Strings.
3. The ULR module is particularly useful when working with URLs in web application or when dealing with network-related tasks.
4. The URL MODULE splits up a web address into readable parts.

# Parsing URLs : 

```
The url.parse() method is used to parse the URL String and return the an object with it's components.
```

### example : 
<br>
<code>
const url = require('url');

const urlString = 'https://www.example.com/path?query=123#fragment';
const parsedUrl = url.parse(urlString, true);

console.log(parsedUrl);

</code>
<pre>output: </pre>The parsedUrl object will contain properties like protocol, host, path, query, and hash. 

