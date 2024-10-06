import React, { useEffect, useState } from "react";
import InputArea from "./InputArea";
import ToDoList from "./ToDoList";
import Header from "./Header";
import Footer from "./Footer";

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
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="todo-bloc">
          <h2>To-Do List</h2>
          <InputArea setItems={setItems} />
          <ToDoList items={items} setItems={setItems} />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

export default App;
