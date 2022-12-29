import styled from "styled-components"

const Header = styled.header `
    transition: background 0.5s  ease-in-out;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #F55A5A;
    height: 55px;
    gap: 2rem;
    width: 100%;
    
    padding: 0.5rem 4rem;
    z-index: 9999;
    

    &#dark{
        background: #410e0e;
    }
    &#dark a  span {
        color: white
    } 

    div{
        display: flex;
        align-items: center;
        gap:  1rem;
    
    }
`;
export default Header 