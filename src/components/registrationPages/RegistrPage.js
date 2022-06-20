import styled from "styled-components"
import RegistrPageFooter from "./RegistrPageFooter";
import RegistrPageSection from "./RegistrPageSection";



const RegistrPage=()=>{
    return (
        <RecommendItem >
            <div className="trello-img">
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1579793583114-Trello%20Alternatives.jpg"></img>
            </div>
            <Wrap>
            <Cont>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS97gxjjrCUUFLAXGfLDD4tfArCwMjwsyof77meD0_xuAX_RInojSD_0FvRtmsl5Qz3gA&usqp=CAU"></img>
            </Cont>
            <RegistrPageSection/>
            
            <RegistrPageFooter/>
            </Wrap>
            <div className="trello-img2">
                <img src="https://1361fotz2gc2yz52n1h6cjyb-wpengine.netdna-ssl.com/wp-content/uploads/2021/02/migration.svg"></img>
            </div>
        </RecommendItem>
        
    )
}
export default RegistrPage

const Wrap = styled.div`
     margin: auto;
    width: 640px;
`
const Cont = styled.div`
        width: 183px;
        display: flex;
        margin:30px auto;
     &   img{
        width: 180px;
        height: 50px;
    }
`

export const RecommendItem = styled.div`
    display: flex;
    align-items: flex-end;
    margin: auto;
    width: 96%;

    & h1{
        display: flex;
        font-size: 60px;
    }
    .trello-img2{
        width: auto;
        height: 280px;
        width: 336px;
     
    }
    .trello-img{
        width: auto;
        height: 280px;
        width: 336px;
        
    }
    .trello-img img{
        width: 335px;
        height: 280px;
        position: fixed;
        bottom: 0px;
        left: 2%;
    }
    .trello-img2 img{
        width: 335px;
        height: 280px;
        position: fixed;
        bottom: 0px;
        right: 2%;
    }
    @media(max-width: 700px){
        .trello-img img{
        width: 200px;
        height: 200px;
        position: fixed;
        bottom: 0px;
        left: -12px;
        z-index: -1;
    }
    .trello-img2 img{
        width: 200px;
        height: 200px;
        position: fixed;
        bottom: 0px;
        right: -12px;
        z-index: -1;
    }
    }
`