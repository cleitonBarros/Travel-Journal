import styled from "styled-components"

const Section = styled.section`
    transition: background 0.5s  ease-in-out;
    padding: 6rem 2.5rem 0 2.5rem ;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &#dark{
        background-color: #000;
        
        & ul li p,
        & ul li a,
        & ul li h2,
        & ul li.days,
        & ul li.description{
            color: #fff;
        }
    }
   
`;
export default Section