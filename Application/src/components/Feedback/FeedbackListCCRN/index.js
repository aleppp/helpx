import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import React from 'react';

function FeedbackListCCRN() {

  const FeedbackData = [
    {
      UserName: "Anna Park",
      Rating: <img src={process.env.PUBLIC_URL + "/images/rate_5.png"}/>,
      Feedback: "The release note is so helpful",
      Read: "Mark as Read",
      Date: '01/12/2021'
    },

    {
      UserName: "Sarah binti Abdullah",
      Rating: <img src={process.env.PUBLIC_URL + "/images/rate_3.png"}/>,
      Feedback: "I don't really understand about this release note. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      Read: "Mark as Unread",
      Date: '09/03/2021'
    },

    {
      UserName: "Ali",
      Rating: <img src={process.env.PUBLIC_URL + "/images/rate_1.png"}/>,
      Feedback: "The release note is too complicated to understand!",
      Read: "Mark as Read",
      Date: '18/05/2021'
    },

    {
      UserName: "Aaron",
      Rating: <img src={process.env.PUBLIC_URL + "/images/rate_2.png"}/>,
      Feedback: "So many things to read.",
      Read: "Mark as Read",
      Date: '30/10/2021'
    }

  ];
  

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

        {FeedbackData.map(FeedbackData => {
            return(
        <div class = 'feedbackList'>
        
          <><table>
            <tbody>
                <tr>

                  <th>{FeedbackData.Rating}</th>
                  <div class="HeaderName">
                    <th>{FeedbackData.UserName}</th>
                  </div>
                </tr>

                <tr>
                  <td colSpan="2">{FeedbackData.Feedback}</td>
                </tr>
                </tbody>
              </table>
              <div class="read">
                  <table>
                    <tbody>
                    <tr>
                      <td class = "readdata"><button>{FeedbackData.Read}</button></td>
                      <td><p>{FeedbackData.Date}</p></td>
                      <td><img src={process.env.PUBLIC_URL + "/images/read_icon.png"}></img></td>
                    </tr>
                    </tbody>
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