import React, { useState } from "react";
import useToggle from "./useToggle";

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
    <li>
      <input type="checkbox" onChange={toggleValue} checked={value} />
      <span style={customStyle} onClick={toggleValue}>
        {" "}
        {props.text}
      </span>
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
