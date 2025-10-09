import React from "react";

const ResetButton = ({ updateCounter }) => {
  return (
    <div>
      <button onClick={() => updateCounter(0)}>Reset Button</button>
    </div>
  );
};

export default ResetButton;
