import Header from "../CStyled/Header"
import worldImg from '../../assets/world.svg'
function Nav (){
    return(
        <Header>
            <img src={worldImg} alt="icon world" />
            <p>My travel journal.</p>
        </Header>
    )
}
export default Nav