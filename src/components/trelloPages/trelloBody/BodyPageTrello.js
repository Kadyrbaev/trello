import TrelloHeaderPage from "../trelloHeaders/TrelloHeaderPage"
import styled, { createGlobalStyle } from "styled-components"
import NoLogicHeader from "../trelloHeaders/NoLogicHeader"
import FormTrello from "../TodoTrello/FormTrello"
import ModalForm from "./ModalForm"
import { useState } from "react"

import ocean from '../trelloBody/ocean.avif'


const BodyPageTrello=()=>{
    const[state,setState]=useState(true)

    function divHandler(){
        setState(state=>!state)
    }
    return(
        <BodyTrello>
            <TrelloHeaderPage/>
            <NoLogicHeader/>
            <DIv3 >
            
            <Div onClick={divHandler}>+
                <div className="fix" primary>
                    {!state && <ModalForm/>}
                </div>        
               
            </Div>
            <div className="ss">
            
            <FormTrello/>
            </div>
            </DIv3>
            <FonImage/>
            
        </BodyTrello>
    )
}
export default BodyPageTrello


const FonImage = createGlobalStyle`
    body{
        background-image: url(${ocean});
        background-repeat: no-repeat;
        background-size: cover;
    }
`

export const BodyTrello = styled.div`
width: 100%;
//height: 606px;

    
`
const Div = styled.div `
    margin-top: -20px;
    width: 30px;
    background-color: rgb(204, 200, 200);
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    height: 30px;
    padding: 4px;
    margin-left: -10px;
    position: fixed;
    .fix{
        background-color: hsla(0,1%,200%,0.16);
        height: 540px;
    }
`
const DIv3 = styled.div`
        display: flex;
        height: 556px;
        max-width: 1600px;
        overflow: auto;

        .modal{
            width: 160px;
            border: 2px solid red;
            height: 500px;
        }
`
