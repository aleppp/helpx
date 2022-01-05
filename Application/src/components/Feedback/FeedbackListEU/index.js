import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Button from "../../Buttons/Buttons";
import { Pagination } from "@mui/material";
import UserHeader from "../../ReleaseNotes/Navigation/UserHeader";
import UserNavigation from "../../ReleaseNotes/Navigation/UserNavigation";

export default function FeedbackListEU() {
  const [FeedbackListEU, setFeedbackListEU] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/feedback/sel")
      .then((res) => {
        if (res.status === 200) setFeedbackListEU(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  let [page, setPage] = useState(1);
  const PER_PAGE = 4;

  const count = Math.ceil(FeedbackListEU.length / PER_PAGE);
  const FeedbackDataEU = usePagination(FeedbackListEU, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    FeedbackDataEU.jump(p);
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

  const button = [
    {
      type: "button-green-center",
      text: "Edit",
    },
  ];

  return (
    <>
      <div className="Content-Nav">
        <UserNavigation></UserNavigation>
      </div>
      <div className="Content-Header">
        <UserHeader></UserHeader>
      </div>
      <div className="FeedbackList-EU">
        <div className="overall">
          <table className="table table-borderless">
            <thead>
              <tr className="tdashboard">
                <td colSpan={4}>
                  <div className="title">Feedback List</div>
                </td>
              </tr>
              <tr>
                <th>Content</th>
                <th>Date</th>
                <th>Rating</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {FeedbackDataEU.currentData().map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <a href={item.title}>{item.title}</a>
                    </td>
                    <td>{item.DateCreated}</td>
                    <td>
                      {(function () {
                        if (item.Rating == "1") {
                          return (
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/rate_1.png"
                              }
                              alt="Very Dissatisfied"
                            />
                          );
                        } else if (item.Rating == "2") {
                          return (
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/rate_2.png"
                              }
                              alt="Very Dissatisfied"
                            />
                          );
                        } else if (item.Rating == "3") {
                          return (
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/rate_3.png"
                              }
                              alt="Neutral"
                            />
                          );
                        } else if (item.Rating == "4") {
                          return (
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/rate_4.png"
                              }
                              alt="Satisfied"
                            />
                          );
                        } else {
                          return (
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/rate_5.png"
                              }
                              alt="Very Satisfied"
                            />
                          );
                        }
                      })()}
                    </td>
                    <td>{item.Feedback}</td>
                    <td>
                      <Button button={button[0]}></Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5}>
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
