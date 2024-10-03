import React, { useState } from "react";

const InputArea = (props) => {
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (userInput.trim().length > 0) {
            props.onAdd(userInput);
            setUserInput("");
          } else {
          }
        }}
      >
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
