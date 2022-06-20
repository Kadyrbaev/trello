import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { FetchList, fetchPost } from "../../store/reducers/fetchfirebace/fetchActions"
import { todoActions } from "../../store/reducers/todoSlice"
import RegistrImg from "./RegistrImg"


const RegistrPageSection=()=>{
    
    let pass = useSelector(state=>state.todo.pass)
    let isLoaded = useSelector(state=>state.todo.isLoaded)

    
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[isValid,setIsValid]=useState('')

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPost({name:'sadyr@gmail.com', pass: "123456"}))
    },[])
    useEffect(()=>{
        dispatch(FetchList())
    },[name,password])

    function inpHand(e){
       setName(e.target.value)
    }
    function inpPass(e){
        setPassword(e.target.value)
    }
    
    let validation;
    if(password.length>0 && password.length<5){
        console.log(555);
        validation=<span>length != 0</span>
    }
    if(name.length >0 && name.length<5){
        validation=<span>length +5</span>
    }


        
    function subDataHandler(e){
        e.preventDefault()
        setPassword('')
        setName('')
        dispatch(todoActions.validation({name, password}))
        let a = <Valid>-Wrong login/password.</Valid>
        console.log(a);
        if(!isLoaded){
            setIsValid(a)
        }
    }

    return (
    <SectionPage>
        <div className="section-wrap">
            <h3>Вход в Trello</h3>
            {isValid}
            <form onSubmit={subDataHandler} className="secont-div">
                <input value={name} onChange={inpHand} placeholder="Укажите адрес электронной почты"></input>
                {validation}
                <input value={password} onChange={inpPass} placeholder="Введите пароль"></input>
                <button type="submit" className="form-btn">Войти</button>
            </form>
            <p>ИЛИ</p>
                <RegistrImg/>
            <a className="vhod-pomosh" href="#">Вход с помощью SSO</a>
            <hr/>
            <div className="hrefa">
                <a href="#">Не удается войти? </a>
                <a href="#">
                    <ul>
                        <li>Зарегистрировать аккаунт</li>
                    </ul>
                </a>
            </div>
        </div>
    </SectionPage>       
    )
}
export default RegistrPageSection




export const SectionPage = styled.section`

    & input{
        padding: 12px;
        margin-bottom: 14px;
        border-radius: 4px;
        border: 2px solid grey;
    }
    & input:hover{
        border: 2px solid  blue;
    }
    .form-btn{
        padding: 6px;
        font-weight: 800;
        background: #5AAC44;
        color: white;
        border: none;
        border-radius: 2px;
        cursor: pointer;
    }
    .form-btn:hover{
        background-color: rgb(123, 235, 132);
    }
    .section-wrap{
        padding-top: 6px;
        margin: auto;
        width: 400px;
        height: 546px;
        box-shadow: 0px 0px 4px 0.90px grey;
        background-color: white;

        & h3{
            color: rgb(88, 86, 86);
        }
    }
    .secont-div{
        margin: auto;
        display: flex;
        flex-direction: column;
        width: 340px;
        font-size: 12px;
    }


    & a{
        font-size: 12px;
        text-decoration: none;
    }
    & a:hover{
        text-decoration: underline;
    }

    .hrefa{
        margin: auto;
        display: flex;
        align-items: center;
        text-decoration: none;
        width: 74%;
        justify-content: space-between;
    }
    & hr{
        margin-top: 30px;
        width: 340px;
    }
    & span{
        margin: -10px 0px 6px 0px;
        color: red;
    }
    @media(max-width:700px){
        
    }
`
const Valid =styled.p`
        
        color: red;
        margin-top: 6px;
    
`

