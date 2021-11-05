import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';


function Navigation(props) {
    const {
        sections = [],
        setCurrentSection
    } = props;
    return (
        <Navbar bg="dark" variant="dark" style={{ fontFamily: "monospace", fontSize:'xx-large'}} expand="lg" className="">
        <Navbar.Brand style={{ fontSize: "35px"}} onClick={() => setCurrentSection(sections[0])} className="mx-3">Ron Romero</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href="#" onClick={() => setCurrentSection(sections[0])} >About Me</Nav.Link>
                        <Nav.Link href="#" onClick={() => setCurrentSection(sections[1])}>Portfolio</Nav.Link>
                        <Nav.Link href="#" onClick={() => setCurrentSection(sections[2])}>Contact</Nav.Link>
                        <Nav.Link href="#" onClick={() => setCurrentSection(sections[3])}>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;