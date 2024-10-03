import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoList from "./ToDoList";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div>
      <h1>To-Do List</h1>
      <InputArea setItems={setItems} />
      <ToDoList items={items} setItems={setItems} />
    </div>
  );
}

export default App;
