import styled from "styled-components"
import lang from '../../assets/lang.svg'

const Btn = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;

    &#dark{
        color: #fff;
    }

    img svg:hover path {
        fill: blue;
    }


    
`;

export default function Button(props){
    return(
     <Btn>   
        <img src={lang} alt="" />
      </Btn>
    )
}