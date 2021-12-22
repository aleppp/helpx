var mysql = require("mysql");
const express = require("express");
const app = express();
app.use(express.json());

//connection db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "helpx",
  database: "helpx",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  //listener
  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`Its alive on http://localhost:${port}`));

  // declare functions
  function getQuery(con, sqlQuery, res) {
    con.query(sqlQuery, (err, result) => {
      if (err) {
        res.send(err.sqlMessage);
      } else {
        res.send(result);
      }
    });
  }

  function setQuery(con, sqlQuery, par, res) {
    con.query(sqlQuery, par, (err, result) => {
      if (err) {
        res.send(err.sqlMessage);
      } else {
        res.send(result);
      }
    });
  }

  //getReleaseNotes
  app.get("/releasenotes/list", (req, res) => {
    const ReleaseNotes = "CALL sp_ReleaseNotes_sel()";
    getQuery(con, ReleaseNotes, res);
  });

  /*query
  if (err) throw err;
  con.query(
    "SELECT * FROM lookupappattributes",
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    }
  );*/
});
