import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import "./style.css";
import { AddNewTerm } from "../WordFilterNew";
import Button from "../../Buttons/Buttons";
import { Pagination } from "@mui/material";

export default function WordFilterList() {
  //store data and render in dom
  const [FraudCCList, setFraudCCList] = useState([]);
  const checkfilter = FraudCCList;

  //using sorting
  const checksort = FraudCCList;

  //for sorting
  const [currentFraud, setCurrentFraud] = useState("fraudUnsort");
  const [fraudClicked, setFraudClicked] = useState("");

  const initialState = {
    isFraudSorted: false,
    isFraudDesc: false,
  };

  const [state, dispatch] = useReducer(sortReducer, initialState);

  function sortReducer(state, action) {
    if (fraudClicked === "fraudid" || fraudClicked === "fraudterm") {
      switch (action.type) {
        case "fraudUnsort":
          return {
            isFraudSorted: true,
            isFraudDesc: false,
          };
        case "fraudAsc":
          return {
            isFraudSorted: true,
            isFraudDesc: true,
          };
        case "fraudDesc":
          return {
            isFraudSorted: true,
            isFraudDesc: false,
          };
        default:
          return {
            isFraudSorted: state.isFraudSorted,
            isFraudDesc: state.isFraudDesc,
          };
      }
    }
  }

  function dispatchSort(e) {
    let sortData = [...FraudCCList];
    setFraudClicked(e.currentTarget.id);
    let targetDate = e.currentTarget.id;

    if (targetDate === "fraudid") {
      if (currentFraud === "fraudUnsort") {
        setCurrentFraud("fraudAsc");
        dispatch({ type: "fraudUnsort" });
        sortData = sortData.sort((a, b) => a.id - b.id);
      } else if (currentFraud === "fraudAsc") {
        setCurrentFraud("fraudDesc");
        dispatch({ type: "fraudAsc" });
        sortData = sortData.sort((a, b) => b.id - a.id);
      } else {
        setCurrentFraud("fraudAsc");
        dispatch({ type: "fraudUnsort" });
        sortData = sortData.sort((a, b) => a.id - b.id);
      }
    }
    if (targetDate === "fraudterm") {
      if (currentFraud === "fraudUnsort") {
        setCurrentFraud("fraudAsc");
        dispatch({ type: "fraudUnsort" });
        sortData = sortData.sort((a, b) => a.term.localeCompare(b.term));
      } else if (currentFraud === "fraudAsc") {
        setCurrentFraud("fraudDesc");
        dispatch({ type: "fraudAsc" });
        sortData = sortData.sort((a, b) => b.term.localeCompare(a.term));
      } else {
        setCurrentFraud("fraudAsc");
        dispatch({ type: "fraudUnsort" });
        sortData = sortData.sort((a, b) => a.term.localeCompare(b.term));
      }
    }

    setFraudCCList(sortData);
  }

  //fetch data from api
  useEffect(() => {
    axios
      .get("http://localhost:8080/fraudmanagement/sel")
      .then((res) => {
        if (res.status === 200) setFraudCCList(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  //mui pagination
  let [page, setPage] = useState(1);
  const PER_PAGE = 4;

  const count = Math.ceil(checkfilter.length / PER_PAGE);
  const FraudDataCC = usePagination(checkfilter, PER_PAGE);

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
                    <td colSpan={2}>
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
                          data-bs-toggle="modal"
                          href="#myModal2"
                          class="btn btn-primary"
                          className="button-blue"
                        >
                          Add New
                        </button>
                        <div
                          class="modal"
                          id="myModal2"
                          data-bs-backdrop="static"
                        >
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title">Add New Term</h4>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-hidden="true"
                                ></button>
                              </div>
                              <div class="container"></div>
                              <div class="modal-body">
                                <div className="term">
                                  <AddNewTerm />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th id="fraudid" onClick={(e) => dispatchSort(e)}>
                      ID
                      {state.isFraudSorted ? (
                        state.isFraudDesc ? (
                          <img
                            src={process.env.PUBLIC_URL + "/icons/descend.svg"}
                          />
                        ) : (
                          <img
                            src={process.env.PUBLIC_URL + "/icons/ascend.svg"}
                          />
                        )
                      ) : (
                        <img
                          src={process.env.PUBLIC_URL + "/icons/unsort.svg"}
                        />
                      )}
                    </th>
                    <th id="fraudterm" onClick={(e) => dispatchSort(e)}>
                      Term
                      {state.isFraudSorted ? (
                        state.isFraudDesc ? (
                          <img
                            src={process.env.PUBLIC_URL + "/icons/descend.svg"}
                          />
                        ) : (
                          <img
                            src={process.env.PUBLIC_URL + "/icons/ascend.svg"}
                          />
                        )
                      ) : (
                        <img
                          src={process.env.PUBLIC_URL + "/icons/unsort.svg"}
                        />
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {FraudDataCC.currentData().map((fraudcc, i) => {
                    return (
                      <tr key={i}>
                        <td>{fraudcc.id}</td>
                        <td>{fraudcc.term}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={2}>
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
