import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PractiseTask from "./component/PractiseTask";
import RandomUserApi from "./component/RandomUserApi";
import SecondApiKey from "./component/SecondApiKey";
import ThirdApiKey from "./component/ThirdApiKey";
import FourthApiKey from "./component/FourthApiKey";
import FifthAPi from "./component/FifthAPi";

function App() {
  return (
    <>
      <div>
        {/* <PractiseTask /> */}
        <RandomUserApi />
        <SecondApiKey />
        <ThirdApiKey />
        <FourthApiKey />
        <FifthAPi />
      </div>
    </>
  );
}

export default App;
