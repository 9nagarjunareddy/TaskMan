
import React, { useEffect, useState } from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import ProgressTracker from './Components/ProgressTracker'
import './Components/Styles.css'

export default function App() {
  const[Tasks, setTasks] = useState([]);
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(Tasks));
  });

  const addTask = (task) => {
    setTasks([...Tasks,task]);
  }

  const  updateTask = (updatedTask, index) => {
    const newtask = [...Tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(Tasks.filter((_, i) => i != index))
  }

  const clearTasks = () => {
    setTasks([]);
  }


  return (
    <div>
      <header>
        <h1>TaskMan</h1>
        <p><i>Your friendly Task Manager</i></p>
      </header>
      <Taskform  addTask = {addTask}/>
      <Tasklist tasks = {Tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask} />
      <ProgressTracker  tasks = {Tasks}/>
      {Tasks.length>0 && (<button className='clear-btn'
      onClick={clearTasks}>Clear All Tasks</button>)}
      
    </div>
  )
}
