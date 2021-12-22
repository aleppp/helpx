const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json()); //middleware to parse json
app.use(cors());
const PORT = 8080;

//listener
app.listen(PORT, () => console.log(`live http://localhost:${PORT}`));

//connection db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
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

//db hook for displaying applications in datatable for admin
app.get("/apps/sel", (req, res) => {
  const getApplicationsList = "CALL sp_applications_sel()";
  getQuery(db, getApplicationsList, res);
});

//insert new application
app.post("/apps/ins", (req, res) => {
  const insApp = "CALL sp_applications_ins(?,?,?,?)";
  const params = req.body.apps;
  setQuery(
    db,
    insApp,
    [params.name, params.url, params.datecreated, params.datemodified],
    res
  );
});

//edit application info
app.post("/apps/upd", (req, res) => {
  const updApp = "CALL sp_applications_upd()";
  const params = req.body.apps;
  setQuery(db, updApp, [params.name, params.url, params.datemodified], res);
});

//delete application
app.delete("/apps/del", (req, res) => {
  const deleteApps = "CALL sp_applications_del(?)";
  const params = req.body;
  setQuery(db, deleteApps, params.id, res);
});

app.get("/ctdashboard", (req, res) => {
  const getDashboardDetails = "CALL sp_contentdb_sel()";
  getQuery(db, getDashboardDetails, res);
});

//db hook for list of release notes
app.get("/releasenotes/list", (req, res) => {
  const ReleaseNotes = "CALL sp_ReleaseNotes_sel()";
  getQuery(db, ReleaseNotes, res);
});
