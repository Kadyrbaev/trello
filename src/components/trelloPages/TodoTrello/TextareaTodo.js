import { useDispatch } from "react-redux";
import styled from "styled-components";
import { uiActions } from "../../../store/reducers/uiSlice";

function TextareaTodo(props){
    const dispatch = useDispatch()

    function modalHandler(){
        dispatch(uiActions.modal())
    }

    return(
    <div>
        { <Areatext onClick={modalHandler}>
        {props.items.map((el)=>(
            <a key={el.id}>{el.name}</a>
        ))}
        </Areatext>}
    </div>
    )
}
export default TextareaTodo

const Areatext = styled.div`

    border: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    color: black;
    font-size: 14px;
    margin-left: -6px;
    margin-bottom: 8px;
    background-color: white;

    & a{
        margin-top: 6px;
        box-shadow: 0px 0px 2px 1px grey; 
        width: 100%;
        padding: 6px;
    }
`