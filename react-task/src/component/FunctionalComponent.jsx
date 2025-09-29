import React from "react";

export default function FunctionalComponet({ name, secondName }) {
  return (
    <div>
      <h1>FunctionalComponent</h1>
      <h2>
        My name is {name} and my second name is {secondName}
      </h2>
    </div>
  );
}
