
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { todoActions } from "../../../store/reducers/todoSlice"


const TrelloHeaderPage=()=>{
    const dispatch=useDispatch()

    function searchHandler(e){
        dispatch(todoActions.search(e.target.value))
    }

    return(
        <TrelloHeader>
            <div className="container">
            <div className="cont-head">
                <div className="wrap-head">
                    <img src="data:image/png;base64,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"></img>
                    <h2> Trello</h2>
                </div>
                <span>Рабочие пространства</span>
                <span>Недавние ▽</span>
                <span>В избранном ▽</span>
                <span>Шаблоны ▽</span>
                <span className="sozdat">Создать ▽</span>
            </div>
            <div className="inp-div">
                <div className="poisk-inp">
                <InputHeader onChange={searchHandler} type="text" placeholder="Поиск..."></InputHeader>
                </div>
                <div className="icons">
                    <h3>🔍</h3>
                    <h3>🔕</h3>
                    <h3>🎛️</h3>
                </div>
                
               
            </div>
            </div>

        </TrelloHeader>
    )
}
export default TrelloHeaderPage

export const TrelloHeader=styled.div`
margin-top: -10px;
     background-color: rgba(17, 118, 169, 0.986);
    height: 60px;
    align-items: center;

    & h2{
        color: white;
    }
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 98%;
        margin: auto;
    }
    .v-span{
        margin-top: 24px;
    }
    .cont-head{
        display: flex;
        align-items: center;
        width: 50%;
        justify-content: space-between;
    }
    .wrap-head{
        display: flex;
        align-items: center;
    }
    .wrap-head img{
        width: 22px;
        height: 20px;
    }
    .inp-div{
        width: 44%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .sozdat{
        background-color: rgba(117, 190, 218, 0.7);
        padding: 6px;
    }
    & span{
        font-size: 14px;
        color: white;
    }
    & span:hover{
        background-color: rgba(117, 190, 218, 0.7);
        padding: 6px;
        border-radius: 4px;
        cursor: pointer;
    }
    .icons{
        display: flex;
        width: 90px;
        justify-content: space-between;
    }
    .poisk-inp{
        width: 480px;
        display: flex;
        justify-content: flex-end;
    }
`

 const InputHeader = styled.input`
         background-color: rgba(117, 190, 218, 0.7);
        padding: 6px;
        color: white;
        border-radius: 4px;
        border: 1px solid white;
        &:focus{
            width: 500px;
            background-color: white;
            color: black;
            border: 2px solid blue;
        }
        &::placeholder{
            color: white;
        }
   

    
`