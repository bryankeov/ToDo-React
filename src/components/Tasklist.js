import React, { useState } from "react";

function Tasklist() {
const [newTask, setNewTask] = useState('');

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

  // const addTask = useCallback(() => {
  //   const taskInput = document.getElementsByClassName("taskInput")[0];
  //   setTasks((t) => [...t, {title: taskInput.value, completed: false}]);
  // },[setTasks])

  const addTask = () => {
    if (!newTask) return;

    setTasks([...tasks, { title: newTask, completed: false }])
    setNewTask('');
  }

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value)
  }

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  }

  const delTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1)
    setTasks(newTasks);
  };

  return (
    <div>
      <div className="inputContainer">
        <input type="text" className="taskInput" placeholder="Add new task" onChange={handleNewTaskChange} value={newTask} required></input>
        <button type="submit" className="addBtn" htmlFor="taskInput" onClick={addTask}>+</button>
      </div>
      <div className="taskContainer">
        {tasks.map((item, index) => {
          return (
            <div key={index} className={tasks[index].completed ? "completed" : "active"}>
              <div className="taskLabel">{item.title}</div>
              <div className="edit">
                <button className="completeBtn" index={index} onClick={() => completeTask(index)}>√</button>
                <button className="deleteBtn" index={index} onClick={() => delTask(index)}>x</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Tasklist;