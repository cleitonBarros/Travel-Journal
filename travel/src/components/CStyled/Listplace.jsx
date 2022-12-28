import styled from "styled-components"

const Listplace = styled.ul` 
    display: flex;
    flex-direction: column;
    justify-content: center;
        .local{
            display: flex;
            align-items: center;
            gap: .75rem;
            margin-bottom: 7px;
        }
        .local div{
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: .313rem;
        }
        .local div p{
            color: #2B283A;
            font-size: 10px;
            font-weight: 500;
            line-height: 12px;
            letter-spacing: 0.15em;
            text-transform: uppercase;
        }
        .local a{
            color: #918E9B;
            font-size: 12px;
            font-weight: 400;
            line-height: 12px;
            letter-spacing: 0em;
        }
        .days{
            font-weight: 700;
            font-size: 10.24px;
            line-height: 12px;

            color: #2B283A;
            margin-bottom: 9px;

        }
        .description{
            font-weight: 400;
            font-size: 12px;
            

            color: #2B283A
        }
        @media(min-width: 650px){
            
            .description{
            font-weight: 500;
            font-size: 12px;
            }

        }
        @media(min-width: 750px){
            .days{
                font-size: 12px
            
            }
            .description{
                font-weight: 500;
                font-size: 14px;
            }
        }
        @media(min-width: 1024px){
            justify-content:space-around;
            
            .local{
                gap: 1rem;
                margin-bottom: 12px;
            }
            .local div{
                gap: .8rem;
            }
             
            .local div p{
                font-size: 18px;
                font-weight: 700;
                letter-spacing: 0.5em;
            }
            .local a{
                font-size: 18px;
                font-weight: 500;
            }
            .days{
                font-weight: 900;
                font-size: 16px;
                line-height: 20px;
                margin-bottom: 18px;

            }
            .description{
                font-weight: 500;
                font-size: 18px;
                line-height: 30px;
                color: #2B283A
            }
        }


        
`;
export default Listplace