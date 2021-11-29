import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand href='/home'>DMHelper</Navbar.Brand>
        <Nav className='justify-content-end'>
          <Nav.Link href='/login'>Login</Nav.Link>
          <Nav.Link href='/register'>Register</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
