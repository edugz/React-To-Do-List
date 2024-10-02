import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (userInput) => {
    setItems((prevItems) => {
      return [...prevItems, userInput];
    });
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((_, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <InputArea onAdd={addItem} />
      <ul>
        {items.map((toDoItem, index) => {
          return (
            <ToDoItem
              key={index}
              id={index}
              text={toDoItem}
              toDelete={deleteItem}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
