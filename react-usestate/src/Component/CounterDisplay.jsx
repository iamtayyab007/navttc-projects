import React from "react";
import CounterButtons from "./CounterButtons";

const CounterDisplay = ({ counter }) => {
  return (
    <>
      <h1>Counter Display</h1>
      <h1>{counter}</h1>
      <div></div>
    </>
  );
};

export default CounterDisplay;
