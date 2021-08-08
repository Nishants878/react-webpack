import React from "react";
import classes from "./_TodoCard.module.scss";
export default function TodoCard({
  key,
  id,
  val,
  isChecked,
  handleDelete,
  handleCheck,
}) {
  const checkingCheck = () => {
    handleCheck(id);
  };

  return (
    <div id={id} key={key} className={classes.main}>
      <input onClick={() => handleCheck(id)} type="checkbox" />
      <div>{val}</div>

      <button onClick={() => handleDelete(id)} className="btn">
        Delete
      </button>
    </div>
  );
}
