import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { Pagination } from "@material-ui/lab";
import Button from "../../Buttons/Buttons";
import { EditFAQButton } from "../FAQEdit/EditFAQButton";

export default function FAQListCC() {
  //store data and render in dom
  const [FAQList, setFAQList] = useState([]);

  //fetch data for faq list
  useEffect(() => {
    axios
      .get("http://localhost:8080/faq/sel")
      .then((res) => {
        if (res.status === 200) setFAQList(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  //for mui pagination
  let [page, setPage] = useState(1);
  const PER_PAGE = 4;

  const count = Math.ceil(FAQList.length / PER_PAGE);
  const FAQCCData = usePagination(FAQList, PER_PAGE);

  const handleChange = (event, page) => {
    setPage(page);
    FAQCCData.jump(page);
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
      <div className="container-fluid" id="FAQListCC">
        <div className="row g-0 d-flex">
          <div className="d-line flex d-sm-flex-column">
            <div className="col-lg-12">
              <table className="table table-borderless">
                <thead>
                  <tr className="tdashboard">
                    <td colSpan={8}>
                      <div className="title">Frequently Asked Questions</div>
                      <div className="desc">
                        <button className="button-blue">Add New</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>FAQ ID</th>
                    <th>FAQ Section</th>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Order</th>
                    <th>Visibility</th>
                    <th>Action</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {FAQList.map((fql, i) => (
                    <EditFAQButton fql={fql} i={i} />
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={8}>
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
