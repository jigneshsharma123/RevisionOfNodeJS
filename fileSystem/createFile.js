const fs = require('fs');

// example of fs.appendFile();

// fs.appendFile('./append.txt', 'appended text', function(err) {
//     if(err) throw err;
//     console.log("Saved!");
// });

fs.open("./open.txt", 'w', (err, OtherActionOnFile) => {
       if(err) {
        console.log("error in opening the file in writing mode",err);
        return;
       }

       console.log("file is successfully open for writing:", OtherActionOnFile);

       fs.appendFile(OtherActionOnFile, "this is some content to append", (err) => {
        if(err) {
            console.error('error in appending to file:', err);
            return;
        }
        console.log('Content appended successfully');
        fs.close(OtherActionOnFile, (err) => {
            if(err) {
                console.log('error in closing file', err);
                return;
            }
            console.log('file closed successfully');
        })
       })

})
