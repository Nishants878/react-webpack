import React, { useState } from "react";

import TodoList from "../../components/TodoList/TodoList";
import { Link } from "react-router-dom";
export default function MainTodo() {
  const [todo, setTodo] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [store, setStore] = useState([]);

  const handleInput = (e) => setTodo(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setStore([
      ...store,
      {
        id: new Date().getMilliseconds(),
        todo: todo,
        checked: false,
      },
    ]);
    setTodo("");
  };

  const handleCheck = (id) => {
    console.log(id + "ip");
    const updateTodo = store.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setStore(updateTodo);
  };

  const handleDelete = (id) => {
    let newStore = store.filter((item) => item.id !== id);

    setStore(newStore);
  };

  console.log(store);
  return (
    <div className="TodoMain">
      <h1>Todo</h1>
      <Link to="/search">Search</Link>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          type="text"
          className="inputField"
          value={todo}
          placeholder="write your todos"
        />
        <input className="btn" type="submit" value="Submit" />
      </form>
      <TodoList
        handleDelete={handleDelete}
        store={store}
        handleCheck={handleCheck}
      />
    </div>
  );
}
