import React, { useContext } from "react";
import { TaskListContext } from "./contexts/TaskListContext";
import Task from "./Task";

function TaskList() {
  const { tasks } = useContext(TaskListContext);

  return (
    <div className="container">
      <div className="row">
        <ul className="list-unstyled col-8 mx-auto mt-5 border">
          {tasks.map((task) => {
            return <Task task={task} key={task.id}/>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
