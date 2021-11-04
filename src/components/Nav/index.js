import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';


function Navigation(props) {
    const {
        sections = [],
        setCurrentSection
    } = props;
    return (
        <Navbar bg="dark" variant="dark" style={{ fontFamily: "monospace", fontSize: "X-Large" }} expand="md" className="ml-auto">
            <Container className="container-fluid">
                <Navbar.Brand style={{ fontSize: "Larger" }} onClick={() => setCurrentSection(sections[0])}>Ron Romero</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href="#" onClick={() => setCurrentSection(sections[0])}>About Me</Nav.Link>
                        <Nav.Link href="#" onClick={() => setCurrentSection(sections[1])} >Portfolio</Nav.Link>
                        <Nav.Link href="#" onClick={() => setCurrentSection(sections[2])} >Contact</Nav.Link>
                        <Nav.Link href="#" >Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;