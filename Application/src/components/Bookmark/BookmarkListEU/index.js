import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserHeader from "../../ReleaseNotes/Navigation/UserHeader";
import UserNavigation from "../../ReleaseNotes/Navigation/UserNavigation";
import { Pagination } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function BookmarkListEU() {
  const [BookmarkEUList, setBookmarkListEU] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8080/bookmarks/sel_user", {
        book: {
          userid: 1,
        },
      })
      .then((res) => {
        if (res.status === 200) setBookmarkListEU(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  let [page, setPage] = useState(1);
  const PER_PAGE = 4;
  const count = Math.ceil(BookmarkEUList.length / PER_PAGE);
  const BookmarkDataEU = usePagination(BookmarkEUList, PER_PAGE);
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
      <div className="BookmarkList-EU">
        <div className="overall">
          <h1>
            <b>{"Bookmark"}</b>
          </h1>
          <table className="table table-borderless text-center">
            <thead>
              <tr>
                <td colSpan={4}></td>
              </tr>

              <tr style={{}}>
                <th>Date</th>
                <th>Title</th>
                <th>Link (url)</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {BookmarkEUList.map((bm, i) => (
                <tr key={i}>
                  <td>{bm.DateCreated}</td>
                  <td>
                    <TextField
                      id="outlined-basic"
                      defaultValue={bm.BookmarkName}
                      variant="outlined"
                    />
                  </td>
                  <td>
                    <a href={bm.URL}>{bm.URL}</a>
                  </td>
                  <td>
                    <button1 type="button" class="btn btn-info">
                      Save
                    </button1>{" "}
                    <button2 type="button" class="btn btn-danger">
                      Delete
                    </button2>
                  </td>
                </tr>
              ))}
            </tbody>
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
