import React from "react";
import { Navbar,Nav, Container } from 'react-bootstrap';


function Navigation(props) {
    const {
        pages =[],
        setCurrentSection
    } = props;
    return (
        <Navbar bg="dark" variant="dark" style={{fontFamily:"monospace",fontSize:"Larger"}}>
            <Container className="container-fluid navfont">
                <Navbar.Brand>Ron Romero</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#" onClick={() => setCurrentSection(pages[0])}>About Me</Nav.Link>
                    <Nav.Link href="#" >Portfolio</Nav.Link>
                    <Nav.Link  href="#" onClick={() => setCurrentSection(pages[1])} >Contact Me</Nav.Link>
                    <Nav.Link href="#" >Resume</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;