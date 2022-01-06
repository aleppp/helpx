import React, {useState, useReducer, useEffect} from 'react';
import {Pagination} from "@mui/material";
import './index.css';
import axios from 'axios'

export default function Dashboard() {
  const [tableData, setTableData] = useState([])
  const [currentCreated, setCurrentCreated] = useState("createdUnsort");
  const [currentSchedule, setCurrentSchedule] = useState("scheduleUnsort");
  const [dateClicked, setDateClicked] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:8080/ctdashboard")
      .then((response) => {
        if (response.status === 200)
          setTableData(response.data[0]);
        }
      )
      .catch((err) => console.log(err));
  }, []);

  let [page, setPage] = useState(1);
  const PER_PAGE = 4;

  const count = Math.ceil(tableData.length / PER_PAGE);
  const _DATA = usePagination(tableData, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const initialState = {
    isCreatedSorted: false,
    isScheduleSorted: false,
    isCreatedDesc: false,
    isScheduleDesc: false,
  };

  const [state, dispatch] = useReducer(sortReducer, initialState);

  function sortReducer(state, action) {
    if(dateClicked === "DateCreated") {
      switch (action.type) {
        case "createdUnsort":
          return {
            isCreatedSorted: true,
            isCreatedDesc: false
          };
        case "createdAsc":
          return {
            isCreatedSorted: true,
            isCreatedDesc: true
          };
        case "createdDesc":
          return {
            isCreatedSorted: true,
            isCreatedDesc: false
          };
          default:
            return { 
              isCreatedSorted: state.isCreatedSorted,
              isCreatedDesc: state.isCreatedDesc,
            };
      }
    }
    else if (dateClicked === "DatePublished") {
      switch (action.type) {
        case "scheduleUnsort":
          return {
            isScheduleSorted: true,
            isScheduleDesc: false
          };
        case "scheduleAsc":
          return {
            isScheduleSorted: true,
            isScheduleDesc: true
          };
        case "scheduleDesc":
          return {
            isScheduleSorted: true,
            isScheduleDesc: false
          }; 
        default:
          return { 
            isScheduleSorted: state.isScheduleSorted,
            isScheduleDesc: state.isScheduleDesc
          };
      }
    }
  }

  function dispatchSort(e) {
    let sortData = [...tableData]
    setDateClicked(e.currentTarget.id)
    let targetDate = e.currentTarget.id

    if (targetDate === "DateCreated") {
      if (currentCreated === "createdUnsort") {
        setCurrentCreated("createdAsc");
        dispatch({ type: "createdUnsort" });
        sortData = sortData.sort((a, b) => a.DateCreated.localeCompare(b.DateCreated));
      } else if (currentCreated === "createdAsc") {
        setCurrentCreated("createdDesc");
        dispatch({ type: "createdAsc" });
        sortData = sortData.sort((a, b) => b.DateCreated.localeCompare(a.DateCreated));
      } else {
        setCurrentCreated("createdAsc");
        dispatch({ type: "createdUnsort" });
        sortData = sortData.sort((a, b) => a.DateCreated.localeCompare(b.DateCreated));
      }
    }
    else if (targetDate === "DatePublished") {
      if (currentSchedule === "scheduleUnsort") {
        setCurrentSchedule("scheduleAsc");
        dispatch({ type: "scheduleUnsort" });
        sortData = sortData.sort((a, b) => a.DatePublished.localeCompare(b.DatePublished));
      } else if (currentSchedule === "scheduleAsc") {
        setCurrentSchedule("scheduleDesc");
        dispatch({ type: "scheduleAsc" });
        sortData = sortData.sort((a, b) => b.DatePublished.localeCompare(a.DatePublished));
      } else {
        setCurrentSchedule("scheduleAsc");
        dispatch({ type: "scheduleUnsort" });
        sortData = sortData.sort((a, b) => a.DatePublished.localeCompare(b.DatePublished));
      }
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
              <button id='DateCreated' onClick={(e) => dispatchSort(e)}>
                  Date
                  {state.isCreatedSorted ? (
                    state.isCreatedDesc ? (
                      <img  src={process.env.PUBLIC_URL + '/icons/descend.svg'} />
                    ) : (
                      <img src={process.env.PUBLIC_URL + '/icons/ascend.svg'} />
                    )
                  ) : (
                    <img src={process.env.PUBLIC_URL + '/icons/unsort.svg'} />
                  )}
              </button>  
            </th>
            <th>Title <img  src={process.env.PUBLIC_URL + '/icons/descend.svg'} /></th>
            <th className='tableHeader'>
              <button id='DatePublished' onClick={(e) => dispatchSort(e)}>
                  Schedule
                  {state.isScheduleSorted ? (
                    state.isScheduleDesc ? (
                      <img  src={process.env.PUBLIC_URL + '/icons/descend.svg'} alt='descending' />
                    ) : (
                      <img  src={process.env.PUBLIC_URL + '/icons/ascend.svg'} alt='ascending'/>
                    )
                  ) : (
                    <img src={process.env.PUBLIC_URL + '/icons/unsort.svg'} alt='unsort'/>
                  )}
              </button>
              
            </th>
            <th><div className="fbHead">Feedback Button <img  src={process.env.PUBLIC_URL + '/icons/descend.svg'} /></div></th>
            <th>Feedback <img  src={process.env.PUBLIC_URL + '/icons/descend.svg'} /></th>
            <th>Visibility <img  src={process.env.PUBLIC_URL + '/icons/descend.svg'} /></th>
            <th>Status <img  src={process.env.PUBLIC_URL + '/icons/descend.svg'} /></th>
          </tr>
        </thead>
        <tbody>
          {_DATA.currentData().map((item, index) => {
            return(
              <tr key={index}>
                <td>{item.DateCreated}</td>
                <td>{item.Title}</td>
                <td>{item.DatePublished}</td>
                <td>{item.IsFeebackAllowed}</td>
                <td>{item.feedback}</td>
                <td>{item.IsVisible}</td>
                <td>{item.status}</td>
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