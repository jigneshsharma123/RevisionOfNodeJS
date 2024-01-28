const fs = require('fs');

// example of fs.appendFile();

fs.appendFile('./append.txt', 'appended text', function(err) {
    if(err) throw err;
    console.log("Saved!");
});


