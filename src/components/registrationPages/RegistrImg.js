import styled from "styled-components"


const RegistrImg=()=>{
    return(
        <GoogleDiv>
        <div className="section-google">
            <div className="brauzer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_qTdJYKTM3vRqERc4i7KlOcQXUAkv2TVGmWEf8sAEvMwvUeVT02f8qSWRxQILcQ-IwgY&usqp=CAU"></img>
            <h4>Войти через google</h4>
            </div>
        </div>
        <div className="section-google">
            <div className="brauzer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVFDi-lPV1n0VsyIqdjZ3RHpwtQL9tjTrHA&usqp=CAU"></img>
            <h4>Войти через Microsoft</h4> 
            </div>
        </div>
        <div className="section-google">
        <div className="brauzer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdEdZutLGhFalA274yXkte5G2gFp2ShGrOw&usqp=CAU"></img>
            <h4>Войти через Apple</h4>
            </div>
        </div>
    </GoogleDiv>
    )
}
export default RegistrImg


export const GoogleDiv = styled.div`
    margin: auto;
    width: 340px;
    margin-bottom:10px;
    .section-google{
        margin-top: 16px;
        box-shadow: 0px 0px 4px 0.80px grey;
        display: flex;
        border: grey;
        align-items: center;
        height: 40px;
        border-radius: 4px;
        cursor: pointer;
    }
    .brauzer{
        margin: auto;
        display: flex;
        align-items: center;
        height: 40px;
        color: rgb(88, 86, 86);
    }
    .brauzer img{
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
`