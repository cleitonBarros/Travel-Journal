import Home from './components/pages/Home'
import Container from './components/CStyled/Container'
import Nav from './components/layout/nav'

function App() {
  return (
    <>
      <Nav />
      <Container> 
        <Home />
      </Container>
    </>
  )
}
export default App
