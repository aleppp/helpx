import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import "./index.js";
import VeryBad from "./images/rate_1.png";
import Bad from "./images/rate_2.png";
import Average from "./images/rate_3.png";
import Good from "./images/rate_4.png";
import VeryGood from "./images/rate_5.png";


function FeedbackListCCRN() {

  const FeedbackData = [
    {
      UserName: "Anna Park",
      Rating: <img src={VeryGood} alt="Excellent" />,
      Feedback: "The release note is so helpful",
      Read: <button id = "MarkRead" >Mark As Unread</button>,
      Date: '09/03/2021 09:08PM'
    },

    {
      UserName: "Sarah binti Abdullah",
      Rating: <img src={Average} alt="Good" />,
      Feedback: "I don't really understand about this release note. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      Read: <button id = "MarkRead">Mark As Read</button>,
      Date: '09/03/2021 09:08PM'
    },

    {
      UserName: "Ali",
      Rating: <img src={VeryBad} alt=" Very Bad" />,
      Feedback: "The release note is too complicated to understand!",
      Read: <button id = "MarkRead">Mark As Unread</button>,
      Date: '09/03/2021 09:08PM'
    },

    {
      UserName: "Wiwawu",
      Rating: <img src={Bad} alt="Bad" />,
      Feedback: "So many things to read.",
      Read: <button id = "MarkRead">Mark As Read</button>,
      Date: '09/03/2021 09:08PM'
    }

  ];

  return (
    <div class = 'container'>
      <h2><b>Feedback</b></h2>
        <div class = "dropdown">
          <form id = "DropdownFeedbackCCRN">     
            <select>
                <option id = "All" name = "All" selected>All</option>
                <option id = "Newest" name = "newest">Newest</option>
                <option id = "Oldest" name = "oldest">Oldest</option>
            </select>
          </form>

        </div>

        {FeedbackData.map(FeedbackData => {
            return(
        <div class = 'feedbackList'>
        
          <><table>
                <tr>

                  <th>{FeedbackData.Rating}</th>
                  <div class="HeaderName">
                    <th>{FeedbackData.UserName}</th>
                  </div>
                </tr>

                <tr>
                  <td colspan="2">{FeedbackData.Feedback}</td>
                </tr>
              </table>
              <div class="read">
                  <table>
                    <tr>
                      <td>{FeedbackData.Read}</td>
                      <td><p>{FeedbackData.Date}</p></td>
                      <td><img src="read_icon.svg"></img></td>
                    </tr>
                  </table>
                </div></>
           
        </div> 
        );
          }
        )
        }      
        </div>
    )
}


export default FeedbackListCCRN;
