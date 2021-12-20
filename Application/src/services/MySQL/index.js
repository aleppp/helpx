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

//function to call select SP
function getQuery(db, sqlQuery, res) {
  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err.sqlMessage);
    } else {
      res.send(result);
    }
  });
}

//function to call delete, insert, update SP
function setQuery(db, sqlQuery, par, res) {
  db.query(sqlQuery, par, (err, result) => {
    if (err) {
      res.send(err.sqlMessage);
    } else {
      res.send(result);
    }
  });
}
