import React, { useEffect, useState } from 'react'
import {UpdateTodo,removeTodo} from "../app/features/TodoSlice"
import { useDispatch } from 'react-redux'
import { CiEdit } from "react-icons/ci";
import { CiSaveUp1 } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const TodoList = ({text,id}) => {
    const dispatch = useDispatch();
    const [editable, setEditable] = useState(false);
    const [newText, setNewtext] = useState("");

    const handleUpdate = () => {
        dispatch(UpdateTodo({ id, newText:newText}));
        setEditable(false);
    };

    const handleDelete = () => {
        dispatch(removeTodo({ id }));
    };
    
    
  return (
    <>
    <div className='flex w-[700px] mt-6 px-4 py-2 mx-auto justify-between bg-[#75E6DA] rounded-lg'>
    {editable ? (
        <input
            type='text'
            value={newText}
            onChange={(e) =>setNewtext(e.target.value)}
            className='focus:outline-none'
            
        />
    ) : (
        <h1 className='text-xl text-gray-800'>{text}</h1>
    )}

    <div className='inline-flex gap-x-2'>
        {editable ? (
           
            <CiSaveUp1  className='text-2xl text-gray-800' onClick={handleUpdate} />
        ) : (
            
            <CiEdit className='text-2xl text-gray-800 hover:text-orange-800' onClick={() => {
            setEditable(true);
            setNewtext(text)}}/>
            
        )}
        
        <MdDelete className='text-2xl text-gray-800 hover:text-red-600' onClick={handleDelete} />
    </div>
</div>
</>
  )
}

export default TodoList