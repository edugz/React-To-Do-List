import React, { useState } from "react";
import useToggle from "./hooks/useToggle";

const ToDoItem = (props) => {
  const [value, toggleValue] = useToggle(false);

  const customStyle = {
    textDecoration: value ? "line-through" : "none",
  };

  const deleteItem = (id) => {
    props.setItems((prevItems) => {
      return prevItems.filter((_, index) => {
        return index !== id;
      });
    });
  };

  return (
    <li className="list-item">
      <div className="text-container">
        <input type="checkbox" onChange={toggleValue} checked={value} />
        <span style={customStyle} onClick={toggleValue}>
          {props.text}
        </span>
      </div>
      <button
        onClick={() => {
          deleteItem(props.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
