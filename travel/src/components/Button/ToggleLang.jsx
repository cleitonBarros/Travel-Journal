import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { languageOptions } from "../../data/languagesOptions"
import {languagePattern} from "../../lib/i18n/i18n"

import { useState,  } from 'react'
const Btn = styled.a`
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    span{
        transition: color 0.3s  linear;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        font-size: 14px;
        font-weight: 700;
    }
    .fa-language{
        transform: scale(1.5); 
    }
        
    
`;


export default function Button(props){
    const { 
        t,
        i18n:{changeLanguage, Language =languagePattern },
        ready,
    } = useTranslation ()

    
    const [currentlanguage , setCurrentLanguage]= useState(Language)
    const handleChangeLangauge = () =>{
        const newLanguage = currentlanguage === 'en' ? 'pt': 'en'
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }
    return(
           
     <Btn onClick={handleChangeLangauge}>   
         <span><i class="fa-solid fa-language"></i>{t('lang')}</span>
      </Btn>
    )
}
