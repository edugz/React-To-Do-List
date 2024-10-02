import React, { useState } from "react";

const ToDoItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const applyLine = () => {
    setIsChecked((prev) => !prev);
  };

  const customStyle = {
    textDecoration: isChecked ? "line-through" : "none",
  };

  return (
    <li>
      <input type="checkbox" onChange={applyLine} checked={isChecked} />
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
