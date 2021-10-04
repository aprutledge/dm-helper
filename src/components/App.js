import { Col, Container, Row } from 'react-bootstrap';

import './App.css';

import { CharacterList } from './CharacterList';
import Sidebar from './Sidebar';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Container fluid className="ms-1">
        <Row>
          <Header />
        </Row>
        <Row>
          <Col lg="2" md="2" xs="2" className="py-2">
            <Sidebar />
          </Col>
          <Col lg="10" md="10" xs="10">
            <CharacterList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
