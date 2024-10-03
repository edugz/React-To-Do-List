import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <ul>
      {props.items.map((toDoItem, index) => {
        return (
          <ToDoItem
            key={index}
            id={index}
            text={toDoItem}
            toDelete={props.toDelete}
            setItems={props.setItems}
          />
        );
      })}
    </ul>
  );
};

export default ToDoList;