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

const portuguese ={
    name: languageOptions[0].name,
    value : languageOptions[0].value,
}
const english ={
    name: languageOptions[1].name,
    value : languageOptions[1].value,
}
const isValid = lng => {
    if(languagePattern === lng){
        return portuguese
    }else if(languagePattern !== lng){
        return english
    }

}

console.log(isValid())


export default function Button(props){
    const { i18n} = useTranslation ()

    const [langToggle , setLangToggle]= useState('false')
      
      const toggleLang = () =>{
        langToggle ? setLangToggle(false) : setLangToggle(true)
    }
    console.log( langToggle)
    return(
           
     <Btn key={isValid(langToggle ? "pt-BR":"en-US").value}
     onClick={()=>{i18n.changeLanguage(isValid(toggleLang).value)}}
     >   
         <span><i class="fa-solid fa-language"></i>{isValid(langToggle ? "pt-BR":"en-US").name}</span>
      </Btn>
    )
}
console.log(isValid())