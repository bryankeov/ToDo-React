import React, {useCallback} from "react";

function ActiveTasks({tasks, setTasks}) {

  const addTask = useCallback(() => {
    let taskInput = document.getElementsByClassName("taskInput")[0]
    setTasks((t) => [...t, {title: taskInput.value, completed: false}]);
    taskInput.value = "";
  },[setTasks])

  return (
    <div className="task-list">
      <input type="text" className="taskInput" placeholder="Add new task"></input>
      <button type="submit" className="addButton" htmlFor="taskInput" onClick={addTask}>+</button>
      <div className="active-tasks">
        {tasks.map((item, i) => {
          return (
            <div key={i}>
              <input type="checkbox" className={item.title}></input>
              <label htmlFor={item.title}>{item.title}</label>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default ActiveTasks;