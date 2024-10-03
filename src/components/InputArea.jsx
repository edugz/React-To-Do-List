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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          placeholder="Next task..."
          value={userInput}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default InputArea;
