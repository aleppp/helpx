import "./Search.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/searchterm/sel");
        //let filteredData = result.data[0].filter();
        //setData(filteredData);
        setData(res.data[0]);
        setFiltered(res.data[0]);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchData();
  }, []);

  // students.filter((student) => student.id === 3);
  useEffect(() => {
    const results = filtered.filter((res) =>
      res.Title.toLowerCase().includes(result)
    );
    setData(results);
  }, [result]);
  //console.log(data)

  const onChange = (e) => {
    setResult(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Here .."
        value={result}
        onChange={onChange}
      />
      {data.map((content, index) => (
        <ul key={index}>
          <li>{content.Title}</li>
        </ul>
      ))}
    </div>
  );
}
