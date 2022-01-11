import "./style.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function RNSearchVertical() {
  const [filteredData, setFilteredData] = useState([]);
  const [SearchRNVertical, setSearchRNVertical] = useState([]);
  const [ListReleaseNotes, setListReleaseNotes] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/searchterm/sel")
      .then((res) => {
        if (res.status === 200) setSearchRNVertical(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/releasenotes/list")
      .then((res) => {
        if (res.status === 200) setListReleaseNotes(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  //filtering keywords
  const handleChange = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = SearchRNVertical.filter((content) => {
      return content.Body.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="content" id="content">
      <div className="BodySearchVertical">
        <div className="VerticalLine"></div>
        <div className="Search">
          <form className="SearchBar">
            <button type="submit" className="searchIcon">
              <img src={process.env.PUBLIC_URL + "/images/search.png"}></img>
            </button>
            <input
              type="text"
              placeholder="Search.."
              value={wordEntered}
              name="search"
              onChange={handleChange}
            />
            {filteredData.length != 0 && (
              <div className="dataResult">
                {filteredData.slice(0, 15).map((SearchRNVertical) => {
                  return (
                    <a className="dataItem" href="#" target="_blank">
                      <p>{SearchRNVertical.Title} </p>
                    </a>
                  );
                })}
              </div>
            )}
          </form>
        </div>
        <div className="releaseNoteList">
          {ListReleaseNotes.map((ListReleaseNotes) => {
            return (
              <ul>
                <li>
                  <a href="#">{ListReleaseNotes.Title}</a>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RNSearchVertical;
