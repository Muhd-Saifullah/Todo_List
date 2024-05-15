import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo} from "../app/features/TodoSlice"
import TodoList from './TodoList'
const Todoinput = () => {
  const dispatch=useDispatch()
  const todos=useSelector((state)=>state.todo.todos)
  const [inputval,setInputval]=useState("")
  const HandleAddTodo = (e) => {
    e.preventDefault();
    if (!inputval.trim()) { // Check if input value is empty or contains only whitespace
      return; // Exit early if input value is empty
    }
    dispatch(addTodo(inputval));
    setInputval(""); // Clear input field after adding todo
  }

  
  return (
   
    <section className="grid justify-center  h-full p-16 ">
      <div className="flex justify-center gap-2">
        
        <input className="h-12 min-w-[25rem]  rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600" type="text" placeholder="Todo here" value={inputval} onChange={(e)=> setInputval(e.target.value) } />
       
        <button className="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600" onClick={HandleAddTodo}>Add</button>
      </div>
      {
        todos && todos.map((tod)=><TodoList
        key={tod.id}
        text={tod.text}
        id={tod.id}
        />)
      }
      
      
    </section>
  )
}

export default Todoinput