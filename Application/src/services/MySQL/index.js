const mysql = require("mysql");

// establish connection to database
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "helpx",
  database: "helpx",
});
