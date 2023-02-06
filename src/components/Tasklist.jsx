/* eslint-disable arrow-body-style */
import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from "uuid";

function Tasklist() {
  const [newTask, setNewTask] = useState("");

  const [tasks, setTasks] = useState([
    {
      title: "Wash Car",
      completed: false,
    },
    {
      title: "Vacuum Car",
      completed: false,
    },
    {
      title: "Wax Car",
      completed: false,
    },
    {
      title: "Walk the dog",
      completed: true,
    },
  ]);

  const addTask = () => {
    if (!newTask) return;

    setTasks([...tasks, { title: newTask, completed: false }]);
    setNewTask("");
  };

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const delTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <div className="inputContainer">
        <input
          type="text"
          className="taskInput"
          placeholder="Add new task"
          onChange={handleNewTaskChange}
          value={newTask}
          required
        />
        <button
          type="submit"
          className="addBtn"
          htmlFor="taskInput"
          onClick={addTask}
        >
          +
        </button>
      </div>
      <div className="taskContainer">
        {tasks.map((item, index) => {
          return (
            <div
              key={uuidv4()}
              className={tasks[index].completed ? "completed" : "active"}
            >
              <div className="taskLabel">{item.title}</div>
              <div className="edit">
                <button
                  type="button"
                  className="completeBtn"
                  onClick={() => completeTask(index)}
                >
                  √
                </button>
                <button
                  type="button"
                  className="deleteBtn"
                  onClick={() => delTask(index)}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tasklist;
