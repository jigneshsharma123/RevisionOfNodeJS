const fs = require('fs');

const newpath = './open.txt';
const oldPath = './newOpen.txt';

fs.rename(oldPath, newpath, (err) => {
    if (err) {
        console.error("error in renaming the file", err);
        return;
    }
    console.log('file renamed successfully');
})