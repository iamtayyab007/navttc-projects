import React from "react";
import "../App.css";
import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const handleAddTask = () => {
    setTasks([...tasks, input]);
  };
  const handleDeleteTask = (item) => {
    setTasks(tasks.filter((index) => index !== item));
  };
  console.log("handle", tasks);
  return (
    <>
      <div className="container">
        <label htmlFor="input-text">Add New Task</label>{" "}
        <input
          type="text"
          style={{ padding: "11px" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button style={{ backgroundColor: "green" }} onClick={handleAddTask}>
          Add new Task
        </button>
        {/* <button
          style={{ backgroundColor: "red" }}
          onClick={() => handleDeleteTask(e)}
        >
          Delete
        </button> */}
      </div>
      <div>
        {tasks.map((item, index) => (
          <>
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "11px",
              }}
            >
              <h3>{item}</h3>
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => handleDeleteTask(item)}
              >
                Delete
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default TodoList;
