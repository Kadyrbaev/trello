import styled from "styled-components"

function ModalForm(){
    return(
        <Divv>
            <div>
            <h3>Рабочее пространство</h3>
            <h3>Trello</h3>
            <span>Бесплатно</span>
            </div>
            <hr/>
            <span>Доски</span>
            <span>Участники</span>
            <span>Настройки</span>
            <p>Режимы просмотра рабочего прос...</p>
            <hr/>
            <span>таблица</span>
            <span>Календарь</span>
            <h3>Мои доски</h3>
            <span>trello</span>
            <span>trello</span>
        </Divv>
    )
}
export default ModalForm


export const Divv = styled.div`
    position: fixed;
    z-index: 1;
    display: flex;
    flex-direction: column;
    /* background-color: rgba(17, 118, 169, 0.986); */
    background-color: rgba(17, 118, 169, 0.986);
    margin-top: -30px;
    margin-left: -4px;
    width: 200px;
    height: 570px;
    & span{
        margin-top: 20px;
        color: white;
        font-size: 12px;
    }
    & p{
        font-size: 12px;
        font-weight: 700;
        color: white;
    }
    & h3{
        font-size: 12px;
        color: white;
    }
    & hr{
        border: 1px solid white;
        width: 160px;
    }
`