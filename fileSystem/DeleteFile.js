const fs = require('fs');
const filePath = './append.txt';
fs.unlink(filePath, (err) => {
    if(err) {
        console.error('error in deleting the file', err);
        return;
    }
    console.log("file deleted successfully.");
});

/**
 


const fs = require('fs');

const directoryPath = 'myDirectory';

fs.rmdir(directoryPath, { recursive: true }, (err) => {
    if (err) {
        console.error('Error deleting directory:', err);
        return;
    }
    console.log('Directory deleted successfully.');
});

directoryPath is the path to 
the directory you want to delete.

{ recursive: true } is an option that 
makes fs.rmdir() remove the directory 
and its contents recursively.
 Without this option, 
 the directory must be empty
  for the deletion to succeed.
 */