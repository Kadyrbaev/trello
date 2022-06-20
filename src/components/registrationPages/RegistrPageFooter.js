import styled from "styled-components"

const RegistrPageFooter=()=>{
    return(
        <FooterDiv>
            <div className="food-href">
                <a href="#">Политика конфиденциальность </a>
                <a href="#">
                    <ul>
                        <li>Условия использования</li>
                    </ul>
                </a>
            </div>
            <select>
                <option>Русский</option>
                <option>English</option>
                <option>Kyrgyz</option>
            </select>
            <hr/>
            <div>
                <img className="atlanta" src="https://www.timetoact.at/GROUP_Share/Logos/Technologie/Atlassian/Atlassian_logo_rand.png"></img>
            </div>
            <ul className="ulfooter">
                <li>Шаблоны</li>
                <li>Цены</li>
                <li>Приложения</li>
                <li>Вакансии</li>
                <li>Блок</li>
                <li>Разработчики</li>
                <li>О нас</li>
                <li>Помощь</li>
                <li>Настройки файлов cookie</li>
                <li></li>
            </ul>
        </FooterDiv>
    )
}
export default RegistrPageFooter

export const FooterDiv = styled.footer`
    .ulfooter li{
        list-style: none;
        font-size: 14px;
        color: grey;
    }
    .ulfooter{
        display: flex;
        flex-wrap:wrap;
        justify-content: space-evenly;
        width: 600px;
        margin: auto;
        cursor: pointer;
        
    }
    .ulfooter li:hover{
        text-decoration: underline;
    }
    .food-href{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 500px;
        margin: auto; 
        font-size: 12px;
        margin-bottom:16px;
        color: grey;
    }
    & a{
        text-decoration: none;
    }
    & a:hover{
        text-decoration: underline;
    }
    & hr{
        margin-top: 30px;
        width: 390px;
    }
    .atlanta{
        width: 180px;
    }
    & select{
        padding: 6px;
        color: grey;
    }
    & select:hover{
        cursor: pointer;
    }
`