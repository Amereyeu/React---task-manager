import React from "react";
import TaskListContextProvider from "./contexts/TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

import "./App.css";

function App() {
  return (
    <TaskListContextProvider>
      <div className="App m-5 container">
        <div className="row">
        <TaskList />
        <TaskForm />

        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
