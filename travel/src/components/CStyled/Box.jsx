import styled from "styled-components"

const Box = styled.div`
   
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    min-width: 380px;
    height: 10.5rem;
    margin-bottom: 36px;
        .boxImg{
            width: 140px;
            height: 100%;
        }
       
        @media(min-width: 650px){
            width: 80%;
        }
        @media(min-width: 750px){
            width: 65%;

        }
        @media(min-width: 1024px){
            min-height: 290px;
            width: 60%;
            .boxImg{
                width: 100%;
            }
       
        }
    
`;
export default Box