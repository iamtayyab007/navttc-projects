import React from "react";
import { useState } from "react";

const PractiseTask = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <div>
        <h1>{inputValue}</h1>
      </div>
    </>
  );
};

export default PractiseTask;
