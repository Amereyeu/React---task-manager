import React, { useState, useContext, useEffect } from "react";
import { TaskListContext } from "./contexts/TaskListContext";

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(
    TaskListContext
  );
  const [name, setName] = useState("");

  const FormSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(name);
      setName("");
    } else {
      editTask(name, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
      console.log(editItem);
    } else {
      setName("");
    }
  }, [editItem]);

  return (
    <form onSubmit={FormSubmit} className="col-8 mx-auto mt-4 ">
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="form-control mb-3"
        required
      />
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-outline-primary mr-5 form-btn">
          {editItem ? "Edit Task" : "Add Task"}
        </button>
        <button className="btn btn-outline-danger form-btn" onClick={clearList}>
          Clear All
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
