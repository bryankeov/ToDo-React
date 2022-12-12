import React, {useState} from "react";
import Header from "./components/Header";
import ActiveTasks from "./components/Tasklist";
import Footer from "./components/Footer";

function App() {
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
  
  return (
    <div className="App">
      <Header />
      <ActiveTasks 
      tasks = {tasks}
      setTasks = {setTasks}
      />
      <Footer />
    </div>
  );
}

export default App;