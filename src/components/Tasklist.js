import React, {useCallback, useState, useEffect} from "react";

function Tasklist() {
  const [tasks, setTasks] = useState([
    {
      title: "Wash Car",
      completed: false
    },
    {
      title: "Vacuum Car",
      completed: false
    },
    {
      title: "Wax Car",
      completed: false
    },
    {
      title: "Walk the dog",
      completed: true
    }
    ]);

  const addTask = useCallback(() => {
    const taskInput = document.getElementsByClassName("taskInput")[0];
    setTasks((t) => [...t, {title: taskInput.value, completed: false}]);
    taskInput.value = "";
  },[setTasks])

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  }

  const delTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1)
    setTasks(newTasks);
  };

  return (
    <div className="taskContainer">
      <input type="text" className="taskInput" placeholder="Add new task" required></input>
      <button type="submit" className="addBtn" htmlFor="taskInput" onClick={addTask}>+</button>
      
      <div className="taskList">
        {tasks.map((item, index) => {
          return (
            <div key={index} className={tasks[index].completed ? "completed" : "active"}>
              <label htmlFor={item.title} className="taskLabel">{item.title}</label>
              <button className="completeBtn" index={index} onClick={() => completeTask(index)}>√</button>
              <button className="deleteBtn" index={index} onClick={delTask}>x</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Tasklist;