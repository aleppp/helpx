const mysql = require("mysql2");

// establish connection to database
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "helpx",
  database: "helpx",
});

db.query(`call sp_applications_sel`, (err, result, fields) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});
