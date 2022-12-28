import Home from './components/pages/Home'
import Container from './components/CStyled/Container'
import Nav from './components/layout/nav'
import Footer from './components/layout/footer'
import './lib/i18n/i18n'

import { useState, useEffect } from 'react'
function App() {


      const getSwichToggle = () => { 
        return JSON.parse(localStorage.getItem('switchToggle')) || false
      }

      const [switchToggle , setSwitchToggle]= useState(getSwichToggle())
      
      useEffect(()=>{
       localStorage.setItem("switchToggle", JSON.stringify(switchToggle))
    
      },[switchToggle])

      const toggleSwitch = () =>{
        switchToggle ? setSwitchToggle(false) : setSwitchToggle(true)
      }

  return (
    <>
      <Nav value={toggleSwitch} sth={switchToggle}/>
      <Container  id={switchToggle ? '':'dark' }  > 
        <Home sth={switchToggle} />
      </Container>
      <Footer   sth={switchToggle} />

    </>
  )
}
export default App
