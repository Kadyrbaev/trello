import { useEffect, useState } from "react"
import { useSelector } from "react-redux/es/exports"
import styled from "styled-components"
import RenderTrello from "./RenderTrello"

function NewComponent(){

    const newArr = useSelector(state=>state.todo.todos)
    const {searchName} = useSelector(state=>state.todo)
    const[search,setSearch]=useState([])
    console.log(searchName);

    useEffect(()=>{
        let filter = [...newArr]
        console.log(filter);
        filter = filter.filter((el)=>{
            console.log(el);
            let item = el.name.toLowerCase()
            console.log(item);
            return item.includes(searchName.toLowerCase())
        })
        console.log(filter);
        setSearch(filter)
    },[searchName,newArr])

    return(
        <DivNew>
            {search.map((el)=>{
             return   <RenderTrello key={el.id} items={el.textarea} name={el.name} id={el.id} />
            })}
        </DivNew>
    )
}
export default NewComponent

const DivNew = styled.div`
    display: flex;
`