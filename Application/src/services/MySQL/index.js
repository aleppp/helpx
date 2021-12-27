const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json()); //middleware to parse json
app.use(cors());
const PORT = 8080;

//listener
app.listen(PORT, () => console.log(`live http://localhost:${PORT}`));

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
  const updApp = "CALL sp_applications_upd(?,?,?,?)";
  const params = req.body.apps;
  setQuery(
    db,
    updApp,
    [params.id, params.name, params.url, params.datemodified],
    res
  );
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

//db hook for list of release Notes

app.get("/releasenotes/list", (req, res) => {
  const ReleaseNotes = "CALL sp_ReleaseNotes_sel()";
  getQuery(db, ReleaseNotes, res);
});

//insert new content
app.post("/content/ins", (req, res) => {
  const insContent = "CALL sp_content_ins(?,?,?,?,?,?,?,?,?,?,?)";
  const params = req.body.content;
  setQuery(
    db,
    insContent,
    [
      params.appid,
      params.userid,
      params.contenttypeid,
      params.statusid,
      params.isfeebackallowed,
      params.isvisible,
      params.title,
      params.body,
      params.datecreated,
      params.datemodified,
      params.datepublished,
    ],
    res
  );
});

//insert new faq
app.post("/faq/ins", (req, res) => {
  const insFaq = "CALL sp_faq_ins(?,?,?,?,?,?,?)";
  const params = req.body.faq;
  setQuery(
    db,
    insFaq,
    [
      params.appid,
      params.question,
      params.answer,
      params.isfeebackallowed,
      params.isvisible,
      params.datecreated,
      params.datemodified,
    ],
    res
  );
});

//db hook for displaying faq for admin and content creator
app.get("/faq/sel", (req, res) => {
  const getFAQList = "CALL sp_faq_sel()";
  getQuery(db, getFAQList, res);
});

//insert new content file
app.post("/contentfiles/ins", (req, res) => {
  const insContentFiles = "CALL sp_contentfiles_ins(?,?,?,?)";
  const params = req.body.contentfiles;
  setQuery(
    db,
    insContentFiles,
    [
      params.contentid,
      params.filepath,
      params.datecreated,
      params.datemodified,
    ],
    res
  );
});

//db hook for displaying feddback list for user view
app.get("/feedback/sel", (req, res) => {
  const getFeedbackListEU = "CALL sp_feedback_sel_user()";
  getQuery(db, getFeedbackListEU, res);
});

//edit faq update
app.post("/faq/upd", (req, res) => {
  const updFaq = "CALL sp_faq_upd(?,?,?,?,?,?,?)";
  const params = req.body.faq;
  setQuery(
    db,
    updFaq,
    [
      params.appid,
      params.question,
      params.answer,
      params.isfeedbackallowed,
      params.isvisible,
      params.datecreated,
      params.datemodified,
    ],
    res
  );
});

//edit faq delete
app.delete("/faq/del", (req, res) => {
  const deleteFaq = "CALL sp_faq_del(?)";
  const params = req.body;
  setQuery(db, deleteFaq, params.id, res);
});

//db hook for displaying feedbacklist under release note for content creator
app.get("/feedbackccrn/sel", (req, res) => {
  const getFeedbackListCCRN = "CALL sp_feedback_sel_byContentID()";
  getQuery(db, getFeedbackListCCRN, res);
});

//db hook for displaying lookupuserroles list
app.get("/roles/sel", (req, res) => {
  const getlookupuserroles = "CALL sp_lookupuserroles_sel()";
  getQuery(db, getlookupuserroles, res);
});

//insert new roles
app.post("/roles/ins", (req, res) => {
  const insRoles = "CALL sp_lookupuserroles_ins(?,?,?,?)";
  const params = req.body.role;
  setQuery(
    db,
    insRoles,
    [params.name, params.description, params.datecreated, params.datemodified],
    res
  );
});

// db hook for displaying users list
app.get("/user/sel", (req, res) => {
  const getUsers = "CALL sp_users_sel()";
  getQuery(db, getUsers, res);
});

// db hook for displaying fraud list
app.get("/fraudmanagement/sel", (req, res) => {
  const getFraudManagement = "CALL sp_fraudmanagement_sel()";
  getQuery(db, getFraudManagement, res);
});

//insert new admin fraud
app.post("/fraudmanagement/ins", (req, res) => {
  const insFraudManagement = "CALL sp_fraudmanagement_ins(?,?,?)";
  const params = req.body.fraudmanagement;
  setQuery(
    db,
    insFraudManagement,
    [params.term, params.datecreated, params.datemodified],
    res
  );
});

// insert new template for content creator
app.post("/template/ins", (req, res) => {
  const insTemplate = "CALL sp_template_ins(?,?,?,?)";
  const params = req.body.template;
  setQuery(
    db,
    insTemplate,
    [params.appid, params.userid, params.title, params.body],
    res
  );
});

// db hook for displaying template list
app.get("/template/sel", (req, res) => {
  const getTemplate = "CALL sp_template_sel()";
  getQuery(db, getTemplate, res);
});

//template update
app.post("/template/upd", (req, res) => {
  const updTem = "CALL sp_template_upd(?,?,?,?,?,?,?)";
  const params = req.body.tem;
  setQuery(
    db,
    updTem,
    [
      params.id,
      params.appid,
      params.userid,
      params.title,
      params.body,
      params.datecreated,
      params.datemodified,
    ],
    res
  );
});

//template delete
app.delete("/template/del", (req, res) => {
  const deleteTemplate = "CALL sp_template_del(?)";
  const params = req.body;
  setQuery(db, deleteTemplate, params.id, res);
});

// db hook to insert bookmark
app.post("/bookmarks/ins", (req, res) => {
  const insBookmarks = "CALL sp_bookmarks_ins(?,?,?,?,?)";
  const params = req.body.book;
  setQuery(
    db,
    insBookmarks,
    [
      params.userid,
      params.url,
      params.bookmarkname,
      params.datecreated,
      params.datemodified,
    ],
    res
  );
});

// db hook to delete bookmark
app.delete("/bookmarks/del", (req, res) => {
  const deleteBookmarks = "CALL sp_bookmarks_del(?)";
  const params = req.body;
  setQuery(db, deleteBookmarks, params.id, res);
});

// db hook to update bookmark
app.post("/bookmarks/upd", (req, res) => {
  const updBookmarks = "CALL sp_bookmarks_upd(?,?,?)";
  const params = req.body.book;
  setQuery(
    db,
    updBookmarks,
    [params.bookmarkname, params.id, params.datemodified],
    res
  );
});
