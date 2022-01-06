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

        setData(res.data[0]);
        setFiltered(res.data[0]);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const results = filtered.filter((res) =>
      res.Title.toLowerCase().includes(result)
    );
    setData(results);
  }, [result]);

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
