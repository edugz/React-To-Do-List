import React, { useState } from "react";
import useToggle from "./useToggle";

const ToDoItem = (props) => {
  const [value, toggleValue] = useToggle(false);

  const customStyle = {
    textDecoration: value ? "line-through" : "none",
  };

  return (
    <li>
      <input type="checkbox" onChange={toggleValue} checked={value} />
      <span style={customStyle}> {props.text}</span>
      <button
        onClick={() => {
          props.toDelete(props.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
