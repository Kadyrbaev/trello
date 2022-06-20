import { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import styled, { css } from "styled-components"
import TextareaTodo from "./TextareaTodo"
import { todoActions } from "../../../store/reducers/todoSlice"
import ReactTextareaAutosize from "react-textarea-autosize"
import { uiActions } from "../../../store/reducers/uiSlice"
import Modal from "../../UI/Modal"



const RenderTrello=(props)=>{
    const {modalIsValid}=useSelector(state=>state.ui)
    const todo=useSelector(state=>state.todo.todos)
    console.log(todo);
    const [state,setState]=useState(false)
    
    
    const[value,setValue]=useState('')
    const dispatch=useDispatch()

    function onResize(e){

        setValue(e.target.value)
    }
    function saveCartHandler(id){
        setValue('')
        dispatch(todoActions.textareaTodo({value,id}))
    }
    function deleteHandler(){
        dispatch(todoActions.deleteCart(props.id))
        console.log(props.id);
    }

    return(
        <Fragment>
               {modalIsValid && <Modal id={props.id}/>}
            <RendCont>
                <RenderDiv key={props.id} >
                    <BackDiv>
                    <CartDiv>
                    <span className="span-todo">{props.name}</span>
                    <span onClick={deleteHandler} className="icon-span">...</span>
                    </CartDiv>    
                    
                    <TextareaTodo items={props.items}/>             
                    {state && <ReactTextareaAutosize value={value} minRows={3} onChange={onResize}/>}
              
                    {!state && <CartDob >
                    <Span onClick={()=> setState(true)}>+..добавить карточку</Span>
                    <Span primary>🚏</Span>
                    </CartDob>}
                    
                    {state &&<ButtonDIv>
                        <ButtonCart onClick={()=>saveCartHandler(props.id)}>добавить карточку</ButtonCart>
                        <Button onClick={()=> setState(false)}>✕</Button>
                        <Button primary>⋯</Button>
                    </ButtonDIv>}    
                    </BackDiv>     
                        
                </RenderDiv>
                </RendCont>
        </Fragment>
    )
}
export default RenderTrello

const RendCont = styled.div`
    margin-top: -16px;
    display: flex;
    flex-direction: row;
 
`

export const RenderDiv = styled.div`
    margin-left:20px;
    display: flex;
    flex-direction: column;
    height: 540px;
    border-radius: 4px;

`
const BackDiv=styled.div`
        margin-top: -8px;
        padding: 10px;
        width: 240px;
        background-color: azure;
        display: flex;
        flex-direction: column;
        border-radius: 0px;
`
const ButtonDIv = styled.div`
    margin-top: 6px;
    display: flex;
    justify-content: space-between;
`
const CartDob = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -20px;
`
const Button = styled.button`
    border: none;
    cursor: pointer;
`
const ButtonCart = styled(Button)`
     background-color: rgba(9, 104, 151, 0.986);
     color: white;
     border: none;
     padding: 8px;
     width: 140px;
     border-radius: 4px;
`


export const CartDiv = styled.div`
    //margin-top: -22px;
    display: flex;
    height: 30px;
    justify-content: space-between;
    cursor: pointer;
    color: black;
    font-weight: 600;
    &span{
        margin-top: -8px;
    }
`
export const Span = styled.span` 
        color: grey;
        margin-top: 20px;
        padding-top: 0px;
        padding-left: 4px;
        padding-right: 4px;
       

    &:hover{
        background-color: rgb(193, 192, 192)
    }
`


