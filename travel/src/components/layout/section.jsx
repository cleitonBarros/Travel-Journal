import { useTranslation } from "react-i18next"

import Section from "../CStyled/Section"
import Image from "../CStyled/Image"
import Box from "../CStyled/Box"
import Title from "../CStyled/Title"
import Point from "../CStyled/Point"
import Listplace from "../CStyled/Listplace"


import pointImg from "../../assets/point.svg"
import Arrowimg from "../../assets/arrow.svg"

import Data from '../../data/data'
import Aos,{AosRefresh}from '../../lib/aos/aos'
import { useState,useEffect } from "react"
import ScrollToTop from "react-scroll-to-top";

function Sec(props){
    const {t,ready} = useTranslation();
    if(!ready) return 'loading translations...'
    const local =  t('locale',{ returnObjects: true });
    const description =  t('description',{ returnObjects: true });

    useEffect(()=>{
        Aos,
        AosRefresh()
    },[])
   
   
    return(

        <Section id={props.value ? "": 'dark'}>
           
        {
            Data.map((item,index) =>{
                return(
                    <Box key={index}  data-aos="fade-up">
                        <div className="boxImg">
                            <Image src={item.imageUrl} alt={item.title} />
                        </div>
                        <Listplace data-aos="fade-down" data-aos-delay="500"  >
                            <li className="local">
                                <div>
                                    <Point src={pointImg} />
                                    <p>{local[index]}</p>
                                </div>
                                <a href={item.googleMapsUrl}>{t('view')}</a>
                            </li>
                            <li >
                                <Title>{item.title}</Title>
                            </li>
                            <li className="days">{item.startDate}-{item.endDate}</li>
                            <li className="description">{description[index]}</li>
                        </Listplace>
                    </Box>
                   
                )
            })

        }

        <ScrollToTop 
        id={props.value ? "": 'dark'}
        smooth 
        style={{ background: "transparent" }}
        width="20" 
        height="15"
        viewBox="0 -30 448 512"
        svgPath="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"
        />

    </Section>
    )
}
export default Sec