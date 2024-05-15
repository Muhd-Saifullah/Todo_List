import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{
        id:1,
        text:"hello world",
        
    }]
}

export const TodoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
                }
                state.todos.push(todo)
                
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todoId)=>todoId.id !== action.payload.id)
        },
        UpdateTodo:(state,action)=>{
            const {id,newText}=action.payload
            const UpdateToTodo=state.todos.find((todo)=>todo.id===id)
            if(UpdateToTodo){
                const updateTodo=state.todos.map((todo)=>todo.id===id ? {...todo,text:newText}: todo)
                console.log("id",id)
             
                return {...state,todos:updateTodo}
               
            }

           

        },
        
     }
})
export const {removeTodo,UpdateTodo, addTodo}=TodoSlice.actions
export default TodoSlice.reducer

// updateTodo: (state, action) => {
//     const { id, newText } = action.payload;
//     const updatedTodoIndex = state.todos.findIndex(todo => todo.id === id);
//     if (updatedTodoIndex !== -1) {
//         state.todos[updatedTodoIndex].text = newText;
//     }
// }
// }