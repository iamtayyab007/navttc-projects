import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PractiseTask from "./component/PractiseTask";
import Practise from "./component/Practise";

function App() {
  return (
    <>
      <div>
        <PractiseTask />
        <Practise />
      </div>
    </>
  );
}

export default App;
