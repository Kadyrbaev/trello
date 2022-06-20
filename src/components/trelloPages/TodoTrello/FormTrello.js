import { useState } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { todoActions } from "../../../store/reducers/todoSlice"
import { uiActions } from "../../../store/reducers/uiSlice"
import NewComponent from "./NewComponent"


function FormTrello(){
    const isLoaded=useSelector(state=>state.ui.isLoaded)
    const formIsLoaded=useSelector(state=>state.ui.formIsLoaded)


    const dispatch = useDispatch()
    const[data, setData] = useState('')

    function changeHandler(e){
        setData(e.target.value)
    }

    function submitHandler(e){
        e.preventDefault()
        if(data !== ''){
        dispatch(todoActions.todoLogic(data))
        }
        setData('')
        console.log(1);
    }

    function submitSpan(){
        dispatch(uiActions.formIsLoaded())
    }
    function submitHandlerFalse(e){
        e.preventDefault()
        console.log(9);
        dispatch(uiActions.formIsLoaded())
    }
    return(
        <FormCont>
            <NewComponent/>
            
                
                    {!formIsLoaded && <FormSpan onClick={submitSpan}>+ Добавить еще одну колонку</FormSpan>}
                    {formIsLoaded && <form>
                        <input value={data} onChange={changeHandler} placeholder="Ввести заголовок списка"></input>
                        <div className="btn-span">
                            <Button type="submit" onClick={submitHandler}>добавить список</Button>
                            <Button2 onClick={submitHandlerFalse} >✕</Button2>
                        </div>
                        
                    </form>}
              
                        
           
        </FormCont>
    )
}
export default FormTrello


export const FormCont = styled.div`
    height: ${(props)=>(props.formIsLoaded ? "80px" : "")};

    margin-top: 20px;
    display: flex;
    border-radius: 4px;
    justify-content: flex-end;
    gap: 5px;
    cursor: pointer;
    color: white;
    
    & form{
            
            margin-top: -22px;
            border-radius: 4px;
            height: 80px;
            width: 300px;
            background-color: hsla(0,1%,200%,0.16);
            margin-left:20px;
            padding: 10px;
            background-color: white;
        }

    .btn-span{
        display: flex;
    }

    input{
        border: none;
        width: 280px;
        padding: 8px;
        border-radius: 6px;
        border: 2px solid blue;
        &:focus{
            border: 2px solid white;
        }
    }
`
const Button = styled.button`
        padding: 8px;
        background-color: rgba(9, 104, 151, 0.986);
        border: none;
        color: white;
        font-size: 14px;
        margin-top: 4px;
        border-radius: 4px;
        width: 140px;
        &:hover{
            background-color: rgba(36, 50, 155, 0.784);
        }
`
const Button2 = styled.button`
    margin-left: 8px;
    border: none;
    background-color: white;
    font-weight: 900;
    cursor: pointer;
`
const FormSpan =styled.span`
        height: 20px;
        font-size: 16px;
        margin-top: -16px;
        background-color: hsla(0,1%,200%,0.16);
        padding: 10px;
        border-radius: 4px;
        box-shadow: 0px 0px 1px 0.30px grey;
        width: 260px;
        margin-left: 20px;
`