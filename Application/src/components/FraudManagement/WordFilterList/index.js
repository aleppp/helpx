import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { AddNewTerm } from "../WordFilterNew";
import { Pagination } from "@mui/material";

export default function WordFilterList() {
  const [FraudCCList, setFraudCCList] = useState([]);
  const [showOverlay, toggleOverlay] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/fraudmanagement/sel")
      .then((res) => {
        if (res.status === 200) setFraudCCList(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  let [page, setPage] = useState(1);
  const PER_PAGE = 7;

  const count = Math.ceil(FraudCCList.length / PER_PAGE);
  const FraudDataCC = usePagination(FraudCCList, PER_PAGE);

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
    <>
      <div className="container-fluid" id="WordFilterListCC">
        <div className="d-flex d-sm-flex-column">
          <div className="row g-0 d-flex">
            <div className="col-lg-12">
              <table>
                <thead>
                  <tr className="tdashboard">
                    <td colSpan={3}>
                      <div className="title">Word Filter List</div>
                      <div className="desc">
                        <p>
                          {" "}
                          Words you specify below will be filtered from all user
                          input (e.g. release notes, documentation and FAQ). All
                          filtered words will be highlighted during creation of
                          new content and cannot be submit for approval until
                          the highlighted words are removed.
                        </p>
                        <button
                          onClick={() => toggleOverlay(true)}
                          className="btn btn-primary button-blue"
                        >
                          Add New
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>ID</th>
                    <th>Term</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {FraudDataCC.currentData().map((fraudcc, i) => {
                    return (
                      <tr>
                        <td>{fraudcc.id}</td>
                        <td>{fraudcc.term}</td>{" "}
                        {showOverlay && (
                          <div
                            className="overlayBG"
                            onClick={() => toggleOverlay(false)}
                          >
                            <div
                              className="overlayContent"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <AddNewTerm />{" "}
                            </div>
                          </div>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3}>
                      <p className="foot"></p>
                    </td>
                  </tr>
                </tfoot>
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
          </div>
        </div>
      </div>
    </>
  );
}
