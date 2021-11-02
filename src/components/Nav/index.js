import React from "react";
import { Navbar,Nav, Container } from 'react-bootstrap';


function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="container-fluid">
                <Navbar.Brand href="#">Ron Romero</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#">About Me</Nav.Link>
                    <Nav.Link href="#">Portfolio</Nav.Link>
                    <Nav.Link href="#">Resume</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;