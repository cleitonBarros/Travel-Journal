import Footer from '../CStyled/Footer'
import Paragraph from "../CStyled/Paragraph"

function Customfooter( props){
    return(
        <Footer id={props.sth ? '' : 'dark'}>
            <Paragraph>Desenvolvido por KimEvery</Paragraph>
        </Footer>
    )
}

export default Customfooter