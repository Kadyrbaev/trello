import { todoActions } from "../todoSlice"

export const fetchPost=(data)=>{
    return(dispatch)=>{
        fetch("https://trello-297fa-default-rtdb.firebaseio.com/items.json",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
    }
 }

export const FetchList=()=>{
    return(dispatch)=>{
        fetch("https://trello-297fa-default-rtdb.firebaseio.com/items.json")
        .then(response => response.json())
        .then(json => {
            console.log(json);
            dispatch(todoActions.fetchRequest(json))
        })
    }
}