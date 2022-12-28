import Home from './components/pages/Home'
import Container from './components/CStyled/Container'
import Nav from './components/layout/nav'
import Footer from './components/layout/footer'

import { useState } from 'react'
function App() {
  const [switchToggle , setSwitchToggle]= useState('false')
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
