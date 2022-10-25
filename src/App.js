import React, {useState} from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(
  [
    {name: "Walk the Dog", priority: "high"},
    {name: "Shopping", priority: "low"}, 
    {name: "Dishes", priority: "low"}
  ]
 )

 const [newTask, setNewTask] = useState("");  
 
 const taskNodes = tasks.map((task, index) => {
  return (
    <li key={index} className={task.priority ? "high" : "low"}>
    <span>{task.name}</span>
    {task.priority ? <span> High Priority! </span> : <button onClick={() => addPriorityToTask(index)}>Low Priority</button>}
    </li>
  )
 })

 const handleTaskInput = (event) => {
  setNewTask(event.target.value);
 }

 const saveNewTask = (event) => {
  event.preventDefault()
  const copyTasks = [...tasks]
  copyTasks.push({name: newTask})
  setTasks(copyTasks)
  setNewTask("")
 }

 function addPriorityToTask(index) {
  const copyTasks = [...tasks]
  copyTasks[index].priority = "high"
  setTasks(copyTasks)

 }



  return (
    <div className='App'>
     <h1>ToDo's List</h1>
     <hr></hr>
     
     <ul>
      {taskNodes}
     </ul>

     <form onSubmit={saveNewTask}>
     <label htmlFor='new-task'> Add a new task: </label>
     <input type="text" id="new-task" value={newTask} onChange={handleTaskInput}></input>
     High: <input type="radio" id="high-priority"></input> 
     Low: <input type="radio" id="low-priority"></input> 
     <input type='submit' value="Add new task"/>

     </form>


    </div>
  );
}

export default App;
