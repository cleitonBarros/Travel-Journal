import styled from "styled-components"

const Footer = styled.footer `
    transition: background 0.5s  ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    padding: 0.5rem 4rem;
    background: #F55A5A;

    &#dark{
        background: #410e0e;
    }
`;

export default Footer