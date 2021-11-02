import React from "react";
import { Navbar,Nav, Container } from 'react-bootstrap';


function Navigation(props) {
    const {
        sections =[],
        setCurrentSection
    } = props;
    return (
        <Navbar bg="dark" variant="dark" style={{fontFamily:"monospace",fontSize:"Larger"}}>
            <Container className="container-fluid navfont">
                <Navbar.Brand>Ron Romero</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#" onClick={() => setCurrentSection(sections[0])}>About Me</Nav.Link>
                    <Nav.Link href="#" >Portfolio</Nav.Link>
                    <Nav.Link  onClick={() => setCurrentSection(sections[1])} >Contact</Nav.Link>
                    <Nav.Link href="#" >Resume</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;