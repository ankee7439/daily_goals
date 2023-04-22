// import { useState, useReducer } from "react";
import { useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // console.log(title, desc);
  // handler for form
  const submitHandler = (e) => {
    e.preventDefault();

    // setOur Task
    setTask([
      ...task,
      {
        title,
        desc,
      },
    ]);
  };
  // to handle delete
  const deleteTask = (index) => {
    // pic only which is not clicked by using the filter method
    const filteredArr = task.filter((val, i) => {
      return i !== index;
    });
    setTask(filteredArr);
  };
  return (
    <div className="home">
      <h2>Daily Goals</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name=""
          cols="45"
          rows="8"
          placeholder="Descriptions"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      {/* <Task /> */}
      {task.map((item, index) => {
        return (
          <Task
            key={index}
            title={item.title}
            description={desc}
            deleteTask={deleteTask}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default App;
