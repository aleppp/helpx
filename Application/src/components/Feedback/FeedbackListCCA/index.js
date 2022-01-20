import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import UserHeader from "../../ReleaseNotes/Navigation/UserHeader";
import UserNavigation from "../../ReleaseNotes/Navigation/UserNavigation";
import { Pagination } from "@mui/material";

export default function FeedbackListCCA() {
  const [FeedbackCCAList, setFeedbackCCAList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/feedbackcc/sel")
      .then((res) => {
        if (res.status === 200) setFeedbackCCAList(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  let [page, setPage] = useState(1);
  const PER_PAGE = 4;
  const count = Math.ceil(FeedbackCCAList.length / PER_PAGE);
  const BookmarkDataEU = usePagination(FeedbackCCAList, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    BookmarkDataEU.jump(p);
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
      <div className="Content-Nav">
        <UserNavigation></UserNavigation>
      </div>
      <div className="Content-Header">
        <UserHeader></UserHeader>
      </div>
      <div id="container">
        <div className="overall">
          <table className="table table-borderless text-center">
            <thead>
              <tr className="tdashboard">
                <td colSpan={6}>
                  <div className="title">Feedback List</div>
                </td>
              </tr>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Rating</th>
                <th>Feedback</th>
                <th>Title</th>
                <th>Time</th>
              </tr>
            </thead>

            <tbody>
              {FeedbackCCAList.map((fb, i) => (
                <tr key={i}>
                  <td>{fb.ID}</td>
                  <td>{fb.UserName}</td>
                  <td>
                    {(function () {
                      if (fb.Rating == "1") {
                        return (
                          <img
                            src={process.env.PUBLIC_URL + "/images/rate_1.png"}
                            alt="Very Dissatisfied"
                          />
                        );
                      } else if (fb.Rating == "2") {
                        return (
                          <img
                            src={process.env.PUBLIC_URL + "/images/rate_2.png"}
                            alt="Dissatisfied"
                          />
                        );
                      } else if (fb.Rating == "3") {
                        return (
                          <img
                            src={process.env.PUBLIC_URL + "/images/rate_3.png"}
                            alt="Neutral"
                          />
                        );
                      } else if (fb.Rating == "4") {
                        return (
                          <img
                            src={process.env.PUBLIC_URL + "/images/rate_4.png"}
                            alt="Satisfied"
                          />
                        );
                      } else {
                        return (
                          <img
                            src={process.env.PUBLIC_URL + "/images/rate_5.png"}
                            alt="Very Satisfied"
                          />
                        );
                      }
                    })()}
                  </td>
                  <td>{fb.Feedback}</td>
                  <td>
                    <a href="#">{fb.title}</a>
                  </td>
                  <td>{fb.DateCreated}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6}>
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
    </>
  );
}
