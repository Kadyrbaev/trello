

import ReactDOM  from "react-dom"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { todoActions } from "../../store/reducers/todoSlice"
import { uiActions } from "../../store/reducers/uiSlice"

 const Overlay = ()=>{
    return <Over></Over>
}

 const ModalOverlay =(props)=>{
    const {modalIsValid}=useSelector(state=>state.ui)
    const dispatch=useDispatch()
    function modalHandler(){
        dispatch(uiActions.noModal())
    }
    function deleteHandler(id){
        dispatch(todoActions.modal())
    }

    return(
    <OverlayModal>
        
        <div>
            <div>
                <span>Действия со списком</span>
                <span onClick={modalHandler}>✕</span>
            </div>
            <hr></hr>
            <div>Добавить карточку...</div>
            <div>Копировать список...</div>
            <div>Переместить список</div>
            <hr/>
            <h4>Автоматизация</h4>
            <div>Добавлено карточку в колонку</div>
            <div>Каждый день</div>
            <h4>Автоматизация</h4>
            <div>Добавлено карточку в колонку</div>
            <div>Каждый день</div>
            <hr/>
            <button onClick={()=>deleteHandler(props.props)}>Архивировать список</button>
        </div>
    </OverlayModal>
    )
}

function Modal(props){
    return(
        <>
        {ReactDOM.createPortal(<Overlay/>, document.getElementById("over"))}
        {ReactDOM.createPortal(<ModalOverlay props={props}/>, document.getElementById("over-modal"))}    
        </>
    )
}
export default Modal

const Over = styled.div`
background-color: rgba(0, 0, 0, 0.20);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute; 
`
const OverlayModal = styled.div`
color: black;
      width: 200px;
      padding: 16px;
      font-size: 14px;
  height: 400px;
  background: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    cursor: pointer;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & div{
    margin-top: 8px;
  }
  & button{
    border: none;
    background-color: white;
  }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
`