import Header from "../CStyled/Header"
import Paragraph from "../CStyled/Paragraph"
import worldImg from '../../assets/world.svg'
function Nav (){
    return(
        <Header>
            <img src={worldImg} alt="icon world" />
            <Paragraph>My travel journal.</Paragraph>     
        </Header>
    )
}
export default Nav