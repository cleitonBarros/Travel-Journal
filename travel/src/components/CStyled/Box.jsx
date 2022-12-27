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
       
        img.profileImg{
            border-radius: 10px;
            width: 125px;
            height: 100%;
        }
        ul.listPlace{
            
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        ul li.local{
            display: flex;
            align-items: center;
            gap: .75rem;
            margin-bottom: 7px;


        }
        ul li.local div{
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: .313rem;
        }
        ul li.local div p{
            color: #2B283A;
            font-size: 10px;
            font-weight: 500;
            line-height: 12px;
            letter-spacing: 0.15em;
            text-transform: uppercase;
        }
        ul li.local a{
            color: #918E9B;
            font-size: 12px;
            font-weight: 400;
            line-height: 12px;
            letter-spacing: 0em;
        }
        ul li.title{

            font-weight: 700;
            font-size: 25px;
            line-height: 30px;

            color: #2B283A;
            margin-bottom: 1.2rem;
        }
        ul li.days{
            font-weight: 700;
            font-size: 10.24px;
            line-height: 12px;

            color: #2B283A;
            margin-bottom: 9px;

        }
        ul li.description{
            font-weight: 400;
            font-size: 12px;
            

            color: #2B283A
        }
        @media(min-width: 650px){
            width: 80%;

            ul li.description{
            font-weight: 500;
            font-size: 12px;
    
            }

        }
        @media(min-width: 750px){
            width: 65%;
            ul li.days{
            font-size: 12px
            
            }

            ul li.description{
            font-weight: 500;
            font-size: 14px;
    
            }
        }
        @media(min-width: 1024px){
            min-height: 290px;
            width: 60%;
            .boxImg{
                width: 100%;
            }
       
            img.profileImg{
                width: 100%;       
            }
            ul.listPlace{ 
                justify-content:space-around
            }

            ul li.local{
                gap: 1rem;
                margin-bottom: 12px;
            }
            ul li.local div{
                gap: .8rem;
            }
            ul li.local div img{
                width: 15px;
                
            }
            ul li.local div p{
                font-size: 18px;
                font-weight: 700;
                letter-spacing: 0.5em;
            }
            ul li.local a{
                font-size: 18px;
                font-weight: 500;
            }
           
            ul li.title{
                color: #2B283A;
                margin-bottom: 3rem;
                line-height: 35px;
            }
            ul li.days{
                font-weight: 900;
                font-size: 16px;
                line-height: 20px;
                margin-bottom: 18px;

            }
            ul li.description{
                font-weight: 500;
                font-size: 18px;
                line-height: 30px;
                color: #2B283A
            }
        }


        
`;
export default Box