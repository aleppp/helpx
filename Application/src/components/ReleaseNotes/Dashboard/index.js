import React, {useState, useReducer, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {Pagination} from "@mui/material";
import './index.css';
import axios from 'axios'

export default function Dashboard() {
  const [tableData, setTableData] = useState([])
  const history = useHistory()

  //for sorting
  const [currentCreated, setCurrentCreated] = useState("createdUnsort");
  const [currentSchedule, setCurrentSchedule] = useState("scheduleUnsort");
  const [dateClicked, setDateClicked] = useState("")

  //for filtering using text input
  const [query, setQuery] = useState("")
  const [targetFilter, setTargetFilter] = useState("")

  //label for checkbox filtering
  const statusLabel = [
    {
      id: 1,
      name: "In Draft",
      value: "In Draft"
    },
    {
      id: 2,
      name: "Sent for approval",
      value: "Sent for approval"
    },
    {
      id: 3,
      name: "Approved",
      value: "Approved"
    }
  ]
 
  const visibleLabel= [
    {
      id: 4,
      name: "On",
      value: 1
    },
    {
      id: 5,
      name: "Off",
      value: 0
    },
  ]
  const fbuttonLabel = [
    {
      id: 6,
      name: "On",
      value: 1
    },
    {
      id: 7,
      name: "Off",
      value: 0
    },
  ]

  //to store which checkbox is checked
  const [fbuttonFilter, setFbuttonFilter] = useState([])
  const [visibleFilter, setVisibleFilter] = useState([])
  const [statusFilter, setStatusFilter] = useState([])

  //to determine which checkbox has been ticked
  const [checkedStatusState, setCheckedStatusState] = useState([false, false, false]);
  const [checkedVisibleState, setCheckedVisibleState] = useState([false, false]);
  const [checkedFeedbackState, setCheckedFeedbackState] = useState([false, false]);

  //using filtering
  const checkfilter = useCheckbox(tableData)

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

  //for pagination
  let [page, setPage] = useState(1);
  const PER_PAGE = 4;
  
  const _DATA = usePagination(checkfilter, PER_PAGE);
  const count = Math.ceil(checkfilter.length / PER_PAGE);

  //handler for MUI oagination
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

  //handler for text input filtering
  function handleFilter(e){
    setTargetFilter(e.target.id)
    setQuery(e.target.value)
  }
  
  //event handler for checkbox filtering
  function handleCheckbox(filter, column, position) {
    if(column === "fbutton") {
      let feedback = checkedFeedbackState.map((item, index) => 
        index === position ? !item : item
      )
      setCheckedFeedbackState(feedback)

      if(fbuttonFilter.includes(filter)) {
        const filterIndex = fbuttonFilter.indexOf(filter);
        const newFilter = [...fbuttonFilter];
        newFilter.splice(filterIndex, 1);
        setFbuttonFilter(newFilter)
      } else {
        setFbuttonFilter([...fbuttonFilter, filter])
      }
    } else if (column === "visible") {
      let visible = checkedVisibleState.map((item, index) => 
        index === position ? !item : item
      )
      setCheckedVisibleState(visible)

      if(visibleFilter.includes(filter)) {
        const filterIndex = visibleFilter.indexOf(filter);
        const newFilter = [...visibleFilter];
        newFilter.splice(filterIndex, 1);
        setVisibleFilter(newFilter)
      } else {
        setVisibleFilter([...visibleFilter, filter])
      }
    } else if (column === "stats") {
      let status = checkedStatusState.map((item, index) => 
        index === position ? !item : item
      )
      setCheckedStatusState(status)

      if(statusFilter.includes(filter)) {
        const filterIndex = statusFilter.indexOf(filter);
        const newFilter = [...statusFilter];
        newFilter.splice(filterIndex, 1);
        setStatusFilter(newFilter)
      } else {
        setStatusFilter([...statusFilter, filter])
      }
    }
  }

  //where all the filtering implemented
  function useCheckbox(data) {
    let checkdata = [];

    console.log(fbuttonFilter, visibleFilter, statusFilter)

    if(
      (fbuttonFilter.length === 0 || fbuttonFilter.length === fbuttonLabel.length) &&
      (visibleFilter.length === 0 || visibleFilter.length === visibleLabel.length) &&
      (statusFilter.length === 0 || statusFilter.length === statusLabel.length) &&
      query === ""
      ) {
      checkdata = tableData;
    }else {
      if(!checkedFeedbackState.every(x => x === false)){ //if any of the checkbox checked return true
        checkdata = data.filter(item => fbuttonFilter.includes(item.IsFeebackAllowed));
      }if(!checkedVisibleState.every(x => x === false)) {
        checkdata = data.filter(item => visibleFilter.includes(item.IsVisible));
      }if(!checkedStatusState.every(x => x === false)) {
        checkdata = data.filter(item => statusFilter.includes(item.status));
      }if(!checkedFeedbackState.every(x => x === false) && !checkedStatusState.every(x => x === false)) { //if both status and feedback button checked
        checkdata = data.filter(item => fbuttonFilter.includes(item.IsFeebackAllowed) && statusFilter.includes(item.status));
      }if(!checkedFeedbackState.every(x => x === false) && !checkedVisibleState.every(x => x === false)) {
        checkdata = data.filter(item => fbuttonFilter.includes(item.IsFeebackAllowed) && visibleFilter.includes(item.IsVisible));
      }if(!checkedVisibleState.every(x => x === false) && !checkedStatusState.every(x => x === false)) {
        checkdata = data.filter(item => visibleFilter.includes(item.IsVisible) && statusFilter.includes(item.status));
      }if(!checkedFeedbackState.every(x => x === false) && !checkedVisibleState.every(x => x === false) && !checkedStatusState.every(x => x === false)) {
        checkdata = data.filter(item => fbuttonFilter.includes(item.IsFeebackAllowed) && visibleFilter.includes(item.IsVisible) && statusFilter.includes(item.status));
      }if(targetFilter === "Title" && query !== "") { //text input filtering
        checkdata = data.filter(item => item["Title"].toString().toLowerCase().indexOf(query.toLowerCase()) > -1) 
      }if((targetFilter === "Title" && query !== "") && !checkedFeedbackState.every(x => x === false)){
        checkdata = data.filter(item => item["Title"].toString().toLowerCase().indexOf(query.toLowerCase()) > -1 && fbuttonFilter.includes(item.IsFeebackAllowed));
      }if((targetFilter === "Title" && query !== "") && !checkedVisibleState.every(x => x === false)) {
        checkdata = data.filter(item => item["Title"].toString().toLowerCase().indexOf(query.toLowerCase()) > -1 && visibleFilter.includes(item.IsVisible));
      }if((targetFilter === "Title" && query !== "") && !checkedStatusState.every(x => x === false)) {
        checkdata = data.filter(item => item["Title"].toString().toLowerCase().indexOf(query.toLowerCase()) > -1 && statusFilter.includes(item.status));
      }if((targetFilter === "Title" && query !== "") && !checkedFeedbackState.every(x => x === false) && !checkedStatusState.every(x => x === false)) {
        checkdata = data.filter(item => item["Title"].toString().toLowerCase().indexOf(query.toLowerCase()) > -1 && fbuttonFilter.includes(item.IsFeebackAllowed) && statusFilter.includes(item.status));
      }if((targetFilter === "Title" && query !== "") && !checkedFeedbackState.every(x => x === false) && !checkedVisibleState.every(x => x === false)) {
        checkdata = data.filter(item => item["Title"].toString().toLowerCase().indexOf(query.toLowerCase()) > -1 && fbuttonFilter.includes(item.IsFeebackAllowed) && visibleFilter.includes(item.IsVisible));
      }if((targetFilter === "Title" && query !== "") && !checkedVisibleState.every(x => x === false) && !checkedStatusState.every(x => x === false)) {
        checkdata = data.filter(item => item["Title"].toString().toLowerCase().indexOf(query.toLowerCase()) > -1 && visibleFilter.includes(item.IsVisible) && statusFilter.includes(item.status));
      }if((targetFilter === "Title" && query !== "") && !checkedFeedbackState.every(x => x === false) && !checkedVisibleState.every(x => x === false) && !checkedStatusState.every(x => x === false)) {
        checkdata = data.filter(item => item["Title"].toString().toLowerCase().indexOf(query.toLowerCase()) > -1 && fbuttonFilter.includes(item.IsFeebackAllowed) && visibleFilter.includes(item.IsVisible) && statusFilter.includes(item.status));
      }
    }
      
    return checkdata; 
  }

  function counter(count) {
    let add = 0
    if(count === "approval") {
      tableData.map( item => {
        if(item.status === "Sent for approval")
          add+=1;
        }
      )
    } else if(count === "draft") {
      tableData.map( item => {
        if(item.status === "In Draft")
          add+=1;
        }
      )
    }
    return add
  }

  return (
    <div className='container'>
      <div className='row g-0'>
        <div className='col-lg-12' style={{border:"solid black"}}>
          <table className='m-0'>
            <thead>
              <tr>
                <td colSpan={7}>
                <div>
                  {counter("approval")}<sup>Pending Approval</sup>
                  {counter("draft")}<sup>In Draft</sup>
                </div> 
                <button onClick={() => history.push('/normal-editor')}>New Release Note</button>
                </td>
              </tr>
              <tr>
                <th>
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
                <th>
                <div class="dropdown">
                    <p className="dropdown-toggle" data-bs-toggle="dropdown">Title</p>
                    <div className="dropdown-menu">
                      <input
                        id='Title' 
                        type='text' 
                        value={query} 
                        onChange={(e) => handleFilter(e)}
                      />
                    </div>
                  </div>
                </th>
                <th>
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
                <th>
                <div class="dropdown">
                    <p className="dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close='outside' aria-expanded='false'>
                      Feedback Button
                    </p>
                    <div className="dropdown-menu">
                      {
                          fbuttonLabel.map((cb, index) => (
                              <div>
                                <input
                                  key={`cb-${index}`}
                                  type= 'checkbox'
                                  id={cb.id}
                                  checked={checkedFeedbackState[index]}
                                  onClick={() => handleCheckbox(cb.value, 'fbutton', index)}
                                /><label htmlFor={cb.id} style={{width:"90%"}}>{cb.name}</label><br/>
                              </div>
                            )
                          )
                      }  
                    </div>
                  </div>
                </th>
                <th>
                  Feedback 
                  <img  src={process.env.PUBLIC_URL + '/icons/descend.svg'} />
                </th>
                <th>
                  <div class="dropdown">
                    <p className="dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close='outside' aria-expanded='false'>
                      Visibility
                    </p>
                    <div className="dropdown-menu">
                      {
                        visibleLabel.map((cb, index) => (
                            <>
                              <input
                                key={`cb-${index}`}
                                id={cb.id}
                                type='checkbox'
                                checked={checkedVisibleState[index]}
                                onClick={() => handleCheckbox(cb.value, 'visible', index)}
                              /><label htmlFor={cb.id} style={{width:"90%"}}>{cb.name}</label><br/>
                            </>
                          )
                        )
                      }
                    </div>
                  </div>
                </th>
                <th>
                <div class="dropdown">
                    <p className="dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close='outside' aria-expanded='false'>
                      Status
                    </p>
                    <div className="dropdown-menu">
                      {
                        statusLabel.map((cb, index) => (
                            <div>
                              <input
                                key={`cb-${index}`}z
                                id={cb.id}
                                type='checkbox'
                                checked={checkedStatusState[index]}
                                onClick={() => handleCheckbox(cb.value, 'stats', index)}
                              /><label htmlFor={cb.id} style={{width:"90%"}}>{cb.name}</label><br/>
                            </div>
                          )
                        )
                    }
                  </div>
                </div>
                </th>
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
                <td colSpan={7}><p>Total Number of Release: {tableData.length}</p></td>
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
      </div>
    </div>
  );
}