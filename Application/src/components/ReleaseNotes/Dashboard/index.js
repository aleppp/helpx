import { useState, useReducer, useMemo } from "react";
import "./index.css";
import { default as DATA } from "./MOCKDATA.json";
import UnfoldMoreOutlinedIcon from "@material-ui/icons/UnfoldMoreOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import { Pagination } from "@material-ui/lab";

export default function Dashboard() {
  const mockdata = useMemo(() => DATA, []);
  const prevData = useMemo(() => DATA, []); //trying to store the unsorted, but not working
  const [current, setCurrent] = useState("unsorted");

  //initialisation for pagination
  let [page, setPage] = useState(1);
  const PER_PAGE = 4;
  const count = Math.ceil(mockdata.length / PER_PAGE);
  const _DATA = usePagination(mockdata, PER_PAGE);
  const _DATAP = usePagination(prevData, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  //initial state for sorting
  const initialState = {
    isSorted: false,
    isDesc: false
  };

  
  const [state, dispatch] = useReducer(sortReducer, initialState);

  function sortReducer(state, action) {
    switch (action.type) {
      case "unsorted":
        return {
          isSorted: true,
          isDesc: false
        };
      case "asc":
        return {
          isSorted: true,
          isDesc: true
        };
      case "desc":
        return {
          isSorted: false,
          isDesc: false
        };
      default:
        return { isSorted: state.isSorted, isDesc: state.isDesc };
    }
  }

  function dispatchSort() {
    if (current === "unsorted") {
      setCurrent("asc");
      dispatch({ type: "unsorted" });
      mockdata.sort((a, b) => a.Date.localeCompare(b.Date));
    } else if (current === "asc") {
      setCurrent("desc");
      dispatch({ type: "asc" });
      mockdata.sort((a, b) => b.Date.localeCompare(a.Date));
    } else {
      setCurrent("unsorted");
      dispatch({ type: "desc" });
      //mockdata = prevData;
    }
  }

  function usePagination(data, itemsPerPage) {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    // Specify which data will be displayed in the table
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
    <div className="App">
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>
              Date
              <button onClick={() => dispatchSort()}>
                <span>
                  {state.isSorted ? (
                    state.isDesc ? (
                      <KeyboardArrowDownOutlinedIcon />
                    ) : (
                      <ExpandLessOutlinedIcon />
                    )
                  ) : (
                    <UnfoldMoreOutlinedIcon />
                  )}
                </span>
              </button>
            </th>
            <th>Title</th>
            <th>Schedule</th>
            <th>Feedback Button</th>
            <th>Feedback</th>
            <th>Visibility </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {state.isSorted
            ? _DATA.currentData().map((item) => {
                return (
                  <tr>
                    <td>{item.Date}</td>
                    <td>{item.Title}</td>
                    <td>{item.Schedule}</td>
                    <td>{item.FeedbackButton}</td>
                    <td>{item.Feedback}</td>
                    <td>{item.Visibility}</td>
                    <td>{item.Status}</td>
                  </tr>
                );
              })
            : _DATAP.currentData().map((item) => {
                return (
                  <tr>
                    <td>{item.Date}</td>
                    <td>{item.Title}</td>
                    <td>{item.Schedule}</td>
                    <td>{item.FeedbackButton}</td>
                    <td>{item.Feedback}</td>
                    <td>{item.Visibility}</td>
                    <td>{item.Status}</td>
                  </tr>
                );
              })}
        </tbody>
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
