import './index.css';
import * as React from 'react';
import SearchIcon from '..public/images/search.png';
import MockData from './mockdata.json';
import {useState} from 'react';


function RNSearchVertical() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  //filtering keywords
  const handleChange = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = MockData.filter((value) => {
      return value.Description.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };


  return (
     <div class = "content" id = "content">
    <div className="BodySearchVertical">
      <div class="VerticalLine"></div>
      <div className="Search">
        <form class="SearchBar">
          <button type="submit" class="searchIcon"><img src={SearchIcon}></img></button>
          <input type="text" placeholder="Search.." value = {wordEntered} name="search" onChange={handleChange}/>
          {filteredData.length != 0 && (
            <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={value.Link} target="_blank">
                  <p>{value.ReleaseNote} </p>
                </a>
              );
            })}
          </div>
          )}
        </form>
      </div>
      <div className="releaseNoteList">
        {MockData.map(MockData => {
          return (
            <ul>
              <li><a href = {MockData.Link} >{MockData.ReleaseNote}</a></li>
            </ul>

          );
        }
        )}
      </div>
    </div></div>
  );
}

export default RNSearchVertical;

