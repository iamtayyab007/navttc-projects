import TodoList from "./Component/TodoList";
import "./App.css";
import LikeButton from "./Component/LikeButton";
import CounterDisplay from "./Component/CounterDisplay";
import CounterButtons from "./Component/CounterButtons";
import ResetButton from "./Component/ResetButton";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="container-App">
        {/* <TodoList />
        <LikeButton /> */}

        <CounterDisplay counter={counter} />
        <CounterButtons updateCounter={setCounter} counter={counter} />
        <ResetButton updateCounter={setCounter} />
      </div>
    </>
  );
}

export default App;
