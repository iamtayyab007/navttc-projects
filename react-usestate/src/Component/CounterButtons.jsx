import React from "react";

const CounterButtons = ({ updateCounter, counter }) => {
  return (
    <div>
      <button onClick={() => updateCounter(counter + 1)}>+</button>
      <button onClick={() => updateCounter(counter - 1)}>-</button>
    </div>
  );
};

export default CounterButtons;
