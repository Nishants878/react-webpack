import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./_MainSearch.module.scss";
export default function MainSearch() {
  const data = [
    { country: "USA", capital: "Washington DC" },
    {
      country: "India",
      capital: "New Delhi",
    },
  ];
  const [val, setVal] = useState("");
  return (
    <div className={classes.MainContainer}>
      Search
      <div>
        <Link to="/">To Todos</Link>
        <select
          defaultValue=""
          value={val}
          onChange={(e) => setVal(e.target.value)}
        >
          {data.map((item) => (
            <option value={item.capital}>{item.country}</option>
          ))}
        </select>
        <input type="text" value={val} />
      </div>
    </div>
  );
}
