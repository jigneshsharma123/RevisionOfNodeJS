# MySQL Database

1. You can download a free MySQL database at https://www.mysql.com/downloads/.
2. Install MySQL Driver

<mark>npm install mysql</mark>

3. ### Create Connection

<code>var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});</code>

4. Run the file ouput-> connected