import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Pagination } from "@mui/material";

function AuditLogDatatable() {
  const [AuditLogDatatable, setAuditLogDatatable] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/auditlogs/datatable")
      .then((res) => {
        if (res.status === 200) setAuditLogDatatable(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  let [page, setPage] = useState(1);
  const PER_PAGE = 4;

  const count = Math.ceil(AuditLogDatatable.length / PER_PAGE);
  const FraudDataCC = usePagination(AuditLogDatatable, PER_PAGE);

  const handleChange = (event, page) => {
    setPage(page);
    FraudDataCC.jump(page);
  };

  function usePagination(data, itemsPerPage) {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    function currentData() {
      const begin = (currentPage - 1) * itemsPerPage;
      const end = begin + itemsPerPage;

      return data.slice(begin, end);
    }

    function jump(page) {
      const pageNumber = Math.max(1, page);
      setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
    }

    return { jump, currentData, currentPage, maxPage };
  }

  return (
    <div>
      <div className="audit-1">
        <h1>Audit Log History</h1>
        <img src="images/export.png" alt="Download" className="export"></img>
      </div>

      <table>
        <tr>
          <th>
            Date & Time <ExpandMoreIcon />
          </th>
          <th>
            User <ExpandMoreIcon />
          </th>
          <th>
            {" "}
            Category <ExpandMoreIcon />{" "}
          </th>
          <th>
            {" "}
            Changes <ExpandMoreIcon />{" "}
          </th>
          <th>
            {" "}
            Changed Object <ExpandMoreIcon />{" "}
          </th>
          <th> Action </th>
        </tr>
        {AuditLogDatatable.map((auditlog, i) => (
          <tr key={i}>
            <td> {auditlog.DateTime} </td>
            <td> {auditlog.User} </td>
            <td> {auditlog.Category} </td>
            <td> {auditlog.Changes} </td>
            <td> {auditlog.ChangedObject} </td>
          </tr>
        ))}
      </table>
      <Pagination
        className="pageBar"
        count={count}
        size="large"
        color="primary"
        page={page}
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
}

export default AuditLogDatatable;
