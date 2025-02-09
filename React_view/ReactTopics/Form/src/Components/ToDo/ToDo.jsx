import React from 'react'
import ToDOList from "./ToDoList/ToDoList"
import './style.css'
const ToDo = () => {
  return (
    <div>
       <ol>
       <ToDOList />
       <ToDOList />
       <ToDOList />
       </ol>
    </div>
  )
}

export default ToDo
