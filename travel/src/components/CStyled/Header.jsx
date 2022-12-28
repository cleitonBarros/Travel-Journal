import styled from "styled-components"

const Header = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #F55A5A;
    height: 55px;
    width: 100%;
    position: fixed;
    padding: 0.5rem 4rem;

    &#dark{
        background: #410e0e;
    }

    div{
        display: flex;
        align-items: center;
        gap:  1rem;
    
    }
`;
export default Header 