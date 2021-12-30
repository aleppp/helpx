import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import React from 'react';
import React, { useState, useEffect } from "react";
import axios from "axios";

function FeedbackListCCRN() {

  const [FeedbackCCRNList, setFeedbackCCRNList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/feedbackccrn/sel")
      .then((res) => {
        if (res.status === 200) setFeedbackCCRNList(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  

  return (
    <div class = 'container'>
      <h2><b>Feedback</b></h2>
        <div class = "dropdown">
          <form name = "DropdownFeedbackCCRN">     
            <select name = "DropdownList" id = "selectDropdown">
                <option value = "All" name = "All" selected>All</option>
                <option value = "Newest" name = "newest">Newest</option>
                <option value = "Oldest" name = "oldest">Oldest</option>
            </select>
          </form>

        </div>

        {FeedbackCCRNList.map((fb,i) => {
        <div class = 'feedbackList'>
        
          <><table>
            <tbody>
                <tr key={i}>

                  <th>{fb.Rating}</th>
                  <div class="HeaderName">
                    <th>{fb.UserName}</th>
                  </div>
                </tr>

                <tr>
                  <td colSpan="2">{fb.Feedback}</td>
                </tr>
                </tbody>
              </table>
              <div class="read">
                  <table>
                    <tbody>
                    <tr>
                      <td class = "readdata"><button>{fb.Read}</button></td>
                      <td><p>{fb.Date}</p></td>
                      <td><img src={process.env.PUBLIC_URL + "/images/read_icon.png"}></img></td>
                    </tr>
                    </tbody>
                  </table>
                </div></>
        </div> 
          }
        )
        }      
        </div>
    )
}
export default FeedbackListCCRN;