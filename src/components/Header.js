import { Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar>
            <Container fluid>
                <Navbar.Brand>DMHelper</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;