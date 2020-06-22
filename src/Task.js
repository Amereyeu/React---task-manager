import React, { useContext, useState } from "react";
import { TaskListContext } from "./contexts/TaskListContext";

function Task({ task }) {
  const { removeTask, findItem } = useContext(TaskListContext);

  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };


  return (
    <li className="d-flex p-2">
      <span
        className={`col-10 text-left ${isChecked ? "checked" : ""}`}
        onClick={toggle}
      >
        {task.name}
      </span>

      <div className="col-2 d-flex">
        <button className="btn btn-sm" onClick={() => findItem(task.id)}>
          <i className="fa fa-pencil"></i>
        </button>

        <button className="btn btn-sm" onClick={() => removeTask(task.id)}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default Task;
