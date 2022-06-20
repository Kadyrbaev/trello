import { useSelector } from "react-redux/es/exports"
import styled from "styled-components"
import RenderTrello from "./RenderTrello"

function NewComponent(){

    const newArr = useSelector(state=>state.todo.todos)
    return(
        <DivNew>
            {newArr.map((el)=>{
             return   <RenderTrello key={el.id} items={el.textarea} name={el.name} id={el.id} />
            })}
        </DivNew>
    )
}
export default NewComponent

const DivNew = styled.div`
    display: flex;
`