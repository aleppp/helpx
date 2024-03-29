import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
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
  const FeedbackCCAData = usePagination(FeedbackCCAList, PER_PAGE);

  const handleChange = (event, page) => {
    setPage(page);
    FeedbackCCAData.jump(page);
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

  function ratingSelector(selectedRating) {
    switch (selectedRating) {
      case 1:
        return (
          <img
            src={process.env.PUBLIC_URL + "/images/rate_1.png"}
            alt="Very Dissatisfied"
          />
        );
      case 2:
        return (
          <img
            src={process.env.PUBLIC_URL + "/images/rate_2.png"}
            alt="Dissatisfied"
          />
        );
      case 3:
        return (
          <img
            src={process.env.PUBLIC_URL + "/images/rate_3.png"}
            alt="Neutral"
          />
        );
      case 4:
        return (
          <img
            src={process.env.PUBLIC_URL + "/images/rate_4.png"}
            alt="Satisfied"
          />
        );
      case 5:
        return (
          <img
            src={process.env.PUBLIC_URL + "/images/rate_5.png"}
            alt="Very Satisfied"
          />
        );
    }
  }

  return (
    <>
      <div className="container-fluid" id="FeedbackLCCA">
        <div className="row g-0 d-flex">
          <div className="d-line flex d-sm-flex-column">
            <div className="col-lg-12">
              <table>
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
                  {FeedbackCCAData.currentData().map((fb, i) => (
                    <tr key={i}>
                      <td>{fb.ID}</td>
                      <td>{fb.UserName}</td>
                      <td>{ratingSelector(fb.Rating)} </td>
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
        </div>
      </div>
    </>
  );
}
