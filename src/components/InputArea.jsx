import React, { useState } from "react";

const InputArea = (props) => {
  const [userInput, setUserInput] = useState("");

  const addItem = (userInput) => {
    props.setItems((prevItems) => {
      return [...prevItems, userInput];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim().length === 0) return;
    addItem(userInput);
    setUserInput("");
  };

  const deleteAll = () => {
    props.setItems([]);
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input
        className="input-task"
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          placeholder="Next task..."
          value={userInput}
        />
        <button className="add-button" type="submit">
          Add
        </button>
        <button
          className="delete-all-button"
          type="button"
          onClick={() => {
            deleteAll();
          }}
        >
          Delete All
        </button>
      </form>
    </div>
  );
};

export default InputArea;
