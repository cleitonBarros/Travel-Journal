import styled from "styled-components"

const Image = styled.img `
    border-radius: 10px;
    width: 125px;
    height: 100%;
    
    @media(min-width: 1024px){
        width: 100%;       
    }
`;
export default Image