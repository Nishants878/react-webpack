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
      <select>
        <option value="lime">Lime</option>
        <option value="soda">Soda</option>
      </select>
    </div>
  );
}
