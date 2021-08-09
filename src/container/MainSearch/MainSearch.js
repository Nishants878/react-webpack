import React from "react";
import { Link } from "react-router-dom";
import classes from "./_MainSearch.module.scss";
export default function MainSearch() {
  return (
    <div className={classes.MainContainer}>
      Search
      <div>
        <Link to="/">To Todos</Link>
      </div>
    </div>
  );
}
