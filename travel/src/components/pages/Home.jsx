import Section from "../CStyled/Section"
import Box from "../CStyled/Box"



import point from "../../assets/point.svg"

import Data from '../../data/data'
function Home(){
    return(
    <>
    
    
        <Section>
            {
                Data.map((item,index) =>{
                    return(
                        <Box key={index}>
                            <div className="boxImg">
                                <img className="profileImg"src={item.imageUrl} alt={item.title} />
                            </div>
                            <ul className="listPlace">
                                <li className="local">
                                    <div>
                                        <img src={point} />
                                        <p>{item.location}</p>
                                    </div>
                                    <a href={item.googleMapsUrl}>View on Google Maps</a>
                                </li>
                                <li className="title">
                                    <h2>{item.title}</h2>
                                </li>
                                <li className="days">{item.startDate}-{item.endDate}</li>
                                <li className="description">{item.description}</li>
                            </ul>

                            
                        </Box>
                       
                    )
                })

            }


        </Section>
    </>
    )
}

export default Home