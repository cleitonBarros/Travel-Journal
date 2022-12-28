import styled from "styled-components"


const Btn = styled.a`
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    span{
        transition: color 0.3s  ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
        gap:  1rem;

        font-size: 16px;
        font-weight: 700;
    }
    .fa-language{
        transform: scale(1.5); 
    }
        
    
`;

export default function Button(props){
    return(
     <Btn>   
         <span><i class="fa-solid fa-language"></i>Português</span>
      </Btn>
    )
}