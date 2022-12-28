import Home from './components/pages/Home'
import Container from './components/CStyled/Container'
import Nav from './components/layout/nav'
import Footer from './components/layout/footer'

function App() {
  return (
    <>
      <Nav />
      <Container> 
        <Home />
      </Container>
      <Footer />

    </>
  )
}
export default App
