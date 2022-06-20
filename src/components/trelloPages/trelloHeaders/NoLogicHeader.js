import styled from "styled-components"

const NoLogicHeader=()=>{
    return(
        <Header>
            <div className="logic-cont">
            <div className="logic-head">
                <span>Рабочие пространства</span>
                <span>Недавние</span>
                <span>В избранном</span>
                <span>Шаблоны</span>
                <h4>Aa</h4>
                <button className="bnt-head">δ Поделиться</button>
            </div>
            <div className="second-head">
                <span>Улучшения</span>
                <span>Автоматизация</span>
                <span>Фильтр</span>
                <span>Меню</span>
            </div>
            </div>
        </Header>
    )
}
export default NoLogicHeader

export const Header = styled.div`
    width: 100%;
    padding: -4px;
    .logic-cont{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 98%;
        margin: auto;
    }
    .logic-head{
        display: flex;
        align-items: center;
        width: 52%;
        justify-content: space-between;

        & h4{
            
            border-radius: 50%;
            padding: 2px;
            background-color: blue;
        }
    }
    .bnt-head{
        background-color: white;
        border: none;
        padding: 7px;
        border-radius: 4px;
    }
    .logic-head span{
        background-color: hsla(0,1%,200%,0.16);
        /* background-color: rgba(117, 190, 218, 0.7); */
        color: white;
        padding: 4px;
        padding-bottom: 6px;
        border-radius: 6px;
    }
    & span:hover{
        background-color: hsla(0,1%,200%,0.16);
        /* background-color: rgba(117, 190, 218, 0.7); */
        padding: 4px;
        border-radius: 4px;
        cursor: pointer;
    }
    .second-head{
        margin-top: 0px;
        display: flex;
        justify-content: space-between;
        
        width: 26%;
    }
    .second-head span{
        background-color: hsla(0,1%,200%,0.16);
        /* background-color: rgba(117, 190, 218, 0.5); */
        color: white;
        padding: 4px;
        border-radius: 6px;
    }
 
`