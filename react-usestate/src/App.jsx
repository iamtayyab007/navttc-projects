import TodoList from "./Component/TodoList";
import "./App.css";
import LikeButton from "./Component/LikeButton";

function App() {
  return (
    <>
      <div className="container-App">
        <TodoList />
        <LikeButton />
      </div>
    </>
  );
}

export default App;
