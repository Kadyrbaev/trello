import { createSlice } from "@reduxjs/toolkit"
import { useEffect } from "react";

const initialState = {
    todos: [],
    searchName:"",
    name:'sadyr@gmail.com',
    pass: '123456',
    isLoaded: false,
    renderTextareaIsLoaded: false
}
const cartSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        todoLogic(state,action){
            
            state.todos.push({
                name: action.payload,
                id: Math.random().toString(),
                textarea: [],
            })
        },

        validation(state,action){
            console.log(action);
            console.log(state.name);
            if(state.name === action.payload.name && state.pass === action.payload.password){
                console.log(3);
                state.isLoaded=true
                
            }
        },
        textareaTodo(state,action){
            console.log(action);
            if(action.payload.value !==""){
            const id = action.payload.id
            const newItem = state.todos.find((el)=>el.id ===id)
            newItem.textarea.push({
            name: action.payload.value,
            id: Math.random().toString()
          })  
        }    
        },
        deleteCart(state,action){
            console.log(action.payload);
            const newTodos = state.todos.filter((el)=>{
                if(el.id !== action.payload){
                    return el
                }
            })
            state.todos = newTodos
        },
        search(state,action){
            state.searchName = action.payload
        }
    }
})

export const todoActions = cartSlice.actions
export default cartSlice