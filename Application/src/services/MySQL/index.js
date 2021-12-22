const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

// establish connection to database
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "helpx",
  database: "helpx",
});

//function to test connection with db
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
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
