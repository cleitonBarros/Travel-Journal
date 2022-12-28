import Header from "../CStyled/Header"
import Paragraph from "../CStyled/Paragraph"
import worldImg from '../../assets/world.svg'
import Toggle from "../Button/Togglebtn"
import Switchlang from '../Button/ToggleLang'


function Nav (props){
     
    return(
        <Header id={props.sth ? '':'dark' }>
            <Toggle value={props.value} />
            <div>
            <img src={worldImg} alt="icon world" />
            <Paragraph>My travel journal.</Paragraph>     
            </div>
            <Switchlang id={props.sth ? '':'dark' } />
        </Header>
    )
}
export default Nav