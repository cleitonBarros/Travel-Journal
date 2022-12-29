import Header from "../CStyled/Header"
import Paragraph from "../CStyled/Paragraph"
import worldImg from '../../assets/world.svg'
import Toggle from "../Button/Togglebtn"
import Switchlang from '../Button/ToggleLang'

import { useTranslation } from "react-i18next"


function Nav (props){
    const {t} = useTranslation();
    return(
        <Header id={props.sth ? '':'dark' }>
            <Toggle chk={props.sth} value={props.value} />
            <div>
            <img src={worldImg} alt="icon world" />
            <Paragraph>{t('title')}</Paragraph>     
            </div>
            <Switchlang id={props.sth ? '':'dark' } />
        </Header>
    )
}
export default Nav