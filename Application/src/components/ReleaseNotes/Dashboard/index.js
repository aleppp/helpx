import React, {useState, useReducer, useEffect} from 'react';
import {Pagination} from "@mui/material";
import './index.css';
import axios from 'axios'


export default function Dashboard() {
  const [tableData, setTableData] = useState([])
  const [current, setCurrent] = useState("unsorted");

  let [page, setPage] = useState(1);
  const PER_PAGE = 4;

  const count = Math.ceil(tableData.length / PER_PAGE);
  const _DATA = usePagination(tableData, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  useEffect(() => {
    axios
      .get("./MOCKDATA.json")
      .then((res) => setTableData(res.data))
      .catch((err) => console.log(err));
  }, []);

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
          isSorted: true,
          isDesc: false
        };
      default:
        return { isSorted: state.isSorted, isDesc: state.isDesc };
    }
  }

  function dispatchSort() {
    let sortData = [...tableData]
    if (current === "unsorted") {
      setCurrent("asc");
      dispatch({ type: "unsorted" });
      sortData = sortData.sort((a, b) => a.Date.localeCompare(b.Date));
    } else if (current === "asc") {
      setCurrent("desc");
      dispatch({ type: "asc" });
      sortData = sortData.sort((a, b) => b.Date.localeCompare(a.Date));
    } else {
      setCurrent("asc");
      dispatch({ type: "unsorted" });
      sortData = sortData.sort((a, b) => a.Date.localeCompare(b.Date));
    }

    setTableData(sortData);
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
    <>
    <div className="dashboard"> 
      <table className="table table-borderless text-center">
        <thead>
          <tr className="dashSummary">
            <td colSpan={7}>
            <div className="supscript" id="sup1">5<sup>Pending Approval</sup></div>
            <div className="supscript" id="sup2">2<sup>In Draft</sup></div> 
            <button>{"New Release Note"}</button>
            </td>
          </tr>
          <tr>
            <th className="tableHeader">
              <button onClick={() => dispatchSort()}>
                Date
                <span>
                  {state.isSorted ? (
                    state.isDesc ? (
                      <img  src={process.env.PUBLIC_URL + '/icons/descend.svg'} />
                    ) : (
                      <img src={process.env.PUBLIC_URL + '/icons/ascend.svg'} />
                    )
                  ) : (
                    <img src={process.env.PUBLIC_URL + '/icons/unsort.svg'} />
                  )}
                </span>
              </button>
            </th>
            <th>Title <img  src={process.env.PUBLIC_URL + '/icons/descend.svg'} /></th>
            <th>Schedule <img  src={process.env.PUBLIC_URL + '/icons/descend.svg'} /></th>
            <th><div className="fbHead">Feedback Button <img  src={process.env.PUBLIC_URL + '/icons/descend.svg'} /></div></th>
            <th>Feedback <img  src={process.env.PUBLIC_URL + '/icons/descend.svg'} /></th>
            <th>Visibility <img  src={process.env.PUBLIC_URL + '/icons/descend.svg'} /></th>
            <th>Status <img  src={process.env.PUBLIC_URL + '/icons/descend.svg'} /></th>
          </tr>
        </thead>
        <tbody>
          {_DATA.currentData().map(item => {
            return(
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
        <tfoot>
          <tr>
            <td colSpan={7}><p className="foot">Total Number of Release: {tableData.length}</p></td>
          </tr>
        </tfoot>
      </table>
      <Pagination 
      className = "pageBar"
      count = {count}
      size = "large"
      color = "primary"
      page = {page}
      shape = "rounded"
      onChange = {handleChange} 
    />
    </div>
    
    
    </>
  );
}