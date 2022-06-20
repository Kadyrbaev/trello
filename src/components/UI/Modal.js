

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
                <h2>🕑  JS-5</h2>
            </div>
            <div>
                <h2>≢  Описание</h2>
                <BackColor>Добавить  более подробное описание...</BackColor>
            </div>
            <div>
                <h2>≋ Действия</h2>
                <p>Показать подробности</p>
            </div>
            <div>
                <Two>SU</Two>
                <input placeholder="Напишите коментарий"></input>
            </div>
        </div>
        
        <div  onClick={modalHandler}><span onClick={modalHandler}>✕</span>
            <div>
                <span>Действия со списком</span>
            </div>
            <h5>⨕ Участники</h5>
            <h5>® Метки</h5>
            <h5>© Чек Лист</h5>
            <h5>🕑 Даты</h5>
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
border: 1px solid red;
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
    display: flex;
    justify-content: space-between;
    color: black;
    width: 600px;
    padding: 26px;
    font-size: 14px;
  height: 550px;
  background: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    cursor: pointer;
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

  & input{
    width: 340px;
    padding: 8px;
  }

  & div{
    margin-top: 8px;
  }
  & button{
    border: none;
    background-color: white;
  }
`
// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
// `
const BackColor=styled.div`
    background-color: rgb(204, 200, 200);
    padding: 20px;
    width: 326px;

`
const Two=styled.div`
    background-color: green;
    padding: 6px;
    width: 20px;
    font-weight: 700;
    border-radius: 50%;
    color: white;
    margin-bottom: 10px;
`