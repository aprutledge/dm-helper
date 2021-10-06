import { Col, Container, Row } from 'react-bootstrap'

import './App.css'

import Sidebar from './Sidebar'
import Header from './Header'
import CustomRouter from './CustomRouter'

function App() {
  return (
    <div className='App vh-95'>
      <Container fluid className='ms-1 h-100'>
        <Row>
          <Header />
        </Row>
        <Row className='h-100'>
          <Col lg='2' md='2' xs='2' className='py-2'>
            <Sidebar />
          </Col>
          <Col lg='10' md='10' xs='10'>
            <CustomRouter />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
