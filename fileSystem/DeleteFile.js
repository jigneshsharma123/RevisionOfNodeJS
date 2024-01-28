const fs = require('fs');
const filePath = './append.txt';
fs.unlink(filePath, (err) => {
    if(err) {
        console.error('error in deleting the file', err);
        return;
    }
    console.log("file deleted successfully.");
});