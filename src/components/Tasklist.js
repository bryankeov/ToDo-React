let newTasks = [
  {title: "wash car"},
  {title: "vacuum car"}
]

function Tasklist() {
  return (
    <div>
      <input type="text" className="newTask" placeholder="Add new task"></input>

    </div>
  );
}

export default Tasklist;