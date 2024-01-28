# Node.js file system

```
File System in a built-in module present in the  NodeJS . which allows us to work with the file system on your computer.

fs = require('fs'); is the way to include in your application.
```
# Common usages of the File System module : 

* Read Files
* Create Files
* Delete Files
* Rename Files
* Update Files

# Read Files
```
The fs.readFile("path", callback((err,data)));method is used to read files on you computer.

```

# Create Files

#### The file system moduule has methods for creating new files: 

* fs.appendFile()
* fs.open()
* fs.writeFile()

## fs.appendFile() : 

```
 fs.appendFile() method append the specified content to a file. if the file does not exist, the file will be created : 

```
<br>
<code> 
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
</code>

# fs.open() : 

```
The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
```
<br> 
<code>
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
</code>