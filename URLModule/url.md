# NodeJS URL Module

1. URL Module is a Built-in Module avilable in the NodeJS.
2. This Provides method for parsing and formatting the URL Strings.
3. The ULR module is particularly useful when working with URLs in web application or when dealing with network-related tasks.
4. The URL MODULE splits up a web address into readable parts.

1. Parsing URLs : 

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

2. formatting URLs : 

```
The url.format() method is used to take a URL object and format it into a string. Here's an example : 
```
<code>
const url = require('url');

const urlObject = {
  protocol: 'https:',
  host: 'www.example.com',
  pathname: '/path',
  query: { query: '123' },
  hash: '#fragment',
};

const formattedUrl = url.format(urlObject);
//'https://www.example.com/path?query=123#fragment'.
console.log(formattedUrl);
</code>

3. URL RESOLUTION : 
 ```
 The url.resolve() method is used to resolve a relative URL against a base URL. Here's an example:
 ```
<code>
const url = require('url');

const baseUrl = 'https://www.example.com/base';
const relativeUrl = '/path?query=123';

const resolvedUrl = url.resolve(baseUrl, relativeUrl);

console.log(resolvedUrl);
</code>

3. URLSearchParams

```
The URLSearchParams class provides methods to work with query parameters. It can be used to create, manipulate, and iterate over query parameters. Here's an example:
```
<code>
const { URLSearchParams } = require('url');

const params = new URLSearchParams();
params.append('key1', 'value1');
params.append('key2', 'value2');

console.log(params.toString()); // Output: 'key1=value1&key2=value2'
</code>
<pre>You can use methods like append(), delete(), get(), getAll(), has(), and toString() to interact with query parameters.</pre>