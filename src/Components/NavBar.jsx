import {React} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    Container,
    Nav,
} from 'react-bootstrap';
import './Navbar.css';
// import {Link, } from 'react-router-dom';

const NavBar = () => {
    return <div>
        <Navbar variant="dark" bg="dark" expand="lg" sticky='top'>
            <Container fluid>
                <Navbar.Brand href="/">Umrah Test</Navbar.Brand>
                    <Nav className='NavLink'>
                        <Nav.Link href="/sales" >Sales</Nav.Link>
                        <Nav.Link href="/customer" >Customer</Nav.Link>
                        <Nav.Link href="/item" >Item</Nav.Link>
                        <Nav.Link href="/listsales" >List Sales</Nav.Link>
                </Nav>
                
            </Container>
        </Navbar>
    </div>;
};

export default NavBar;
