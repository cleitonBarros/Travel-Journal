import Footer from '../CStyled/Footer'
import Paragraph from "../CStyled/Paragraph"

function Customfooter( props){
    return(
        <Footer id={props.sth ? '' : 'dark'}>
            <p>Desenvolvido por KimEvery</p>
        </Footer>
    )
}

export default Customfooter