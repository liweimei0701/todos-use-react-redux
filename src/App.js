import React from 'react'
import './App.css';
import AddToDo from './components/AddToDo'
import ChangeVisibility from './components/ChangeVisibility';
import ToDoList from './components/ToDoList'
const App = () => {
  return (
   <div className="container">
     <h1>todos</h1>
     <AddToDo/>
    <ToDoList/>
    <ChangeVisibility/>
   </div>
  )
}

export default App;
