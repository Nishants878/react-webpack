import React, { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <h1>Nishant</h1>
      {new Date().getMilliseconds()}
      <div className="inputContainer">
        <input
          type="text"
          value={todo}
          placeholder="words"
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
    </div>
  );
}
