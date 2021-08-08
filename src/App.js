import React, { useState } from "react";
import TodoCard from "./components/TodoCard/TodoCard";
import TodoList from "./components/TodoList/TodoList";
export default function App() {
  const [todo, setTodo] = useState("");

  const [store, setStore] = useState([]);

  const handleInput = (e) => setTodo(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setStore([
      ...store,
      {
        id: new Date().getMilliseconds(),
        todo: todo,
        checked: true,
      },
    ]);
    setTodo("");
  };

  const handleCheck = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    let newStore = store.filter((item) => item.id !== id);

    setStore(newStore);
  };

  console.log(store);
  return (
    <div className="MainContainer">
      <h1>Todo</h1>
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
