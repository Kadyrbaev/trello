import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [],
    name:'sadyr',
    pass: '12345',
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
        
        fetchRequest(state, action){
            let obj;
            let pass
            for(let key in action.payload){
               obj=action.payload[key].name
               pass=action.payload[key].pass
            }
            state.name= obj
            state.pass = pass
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
            const id = action.payload.id
            const newItem = state.todos.find((el)=>el.id ===id)
            newItem.textarea.push({
            name: action.payload.value,
            id: Math.random().toString()
          })      
        },
        deleteCart(state,action){
            console.log(action.payload);
            const newTodos = state.todos.filter((el)=>{
                if(el.id !== action.payload){
                    return el
                }
            })
            state.todos = newTodos
        }
    }
})

export const todoActions = cartSlice.actions
export default cartSlice