import React, { useEffect, useState } from "react";
import InputArea from "./InputArea";
import ToDoList from "./ToDoList";

function App() {
  const [items, setItems] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <h1>To-Do List</h1>
      <InputArea setItems={setItems} />
      <ToDoList items={items} setItems={setItems} />
    </div>
  );
}

export default App;
