import React, { useState } from "react";

const InputArea = (props) => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setUserInput(newValue);
  };

  return (
    <div>
      <div>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Next task..."
          value={userInput}
        />
        <button
          onClick={() => {
            if (userInput.trim().length > 0) {
              props.onAdd(userInput);
              setUserInput("");
            } else {
            }
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default InputArea;
