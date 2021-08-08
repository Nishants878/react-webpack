import React from "react";
import TodoCard from "../TodoCard/TodoCard";
import classes from "./_TodoList.module.scss";
export default function TodoList({ store, handleDelete, handleCheck }) {
  return (
    <div>
      {store.map((item) => (
        <TodoCard
          key={item.id}
          id={item.id}
          val={item.todo}
          isChecked={item.checked}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ))}
    </div>
  );
}
