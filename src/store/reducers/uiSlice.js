import { createSlice } from "@reduxjs/toolkit"


export const initialState ={
    isLoaded: false,
    formIsLoaded: false,
    modalIsValid: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers:{
        valid(state){
            state.isLoaded = true
        },
        formIsLoaded(state){
            state.formIsLoaded=!state.formIsLoaded
        },
        modal(state){
            state.modalIsValid = true
        },
        noModal(state){
            state.modalIsValid = false
        },
        exit(state,action){

        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice