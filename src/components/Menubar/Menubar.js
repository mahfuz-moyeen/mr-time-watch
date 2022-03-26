import logo from '../../image/logo.png';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
const Menubar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt='Mr Time watch shop logo' width={50} height={50} className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home"><span className='link-title'>Home</span></Nav.Link>
                            <Nav.Link href="#question"><span className='link-title'>Question</span></Nav.Link>
                            <Nav.Link href="#selected-watch"><span className='link-title'>Selected Watch</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Menubar;