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
const fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, fileDescriptor) {
  if (err) throw err;
  console.log('Saved!');
  return;
  // now  we can perform other action like readFile, writeFile() on the fileDescriptor. 
  fs.close(fileDescriptor,(err) {
  if(err) 
  {
    console.error("error in closing the file");
    return;
  }
  })
});
</code>

# writeFile(); 

```
The fs.writeFile() method in Node.js is used to asynchronously write data to a file. It has the following 

syntax:
fs.writeFile(file, data, [options], callback);

file (string): The name of the file to be written.

data (string or buffer): The data to be written to the file.

options (object, optional): An object that can include options like encoding or mode.

callback (function): A callback function that will be called after the file is written. The callback takes an error as its only parameter.
```