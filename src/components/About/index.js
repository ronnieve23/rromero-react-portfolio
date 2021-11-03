import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from '../../assets/img/ronromero.jpeg'
import '../About/about.css'
function About() {
    return (
        <Container>
            <Row className= "mt-5">
                <Col>
                <img src={profilePic} style={{height: '500px'}} alt="Ron Romero"></img>
                </Col>
                <Col>
                <h1>About Me</h1>
                <p>I currently work as a Technical Support Specialist and I'm currently enrolled in Rutgers Coding Bootcamp hoping to do a career change after the program. This Portfolio showcases the projects we are working on through the course of the Bootcamp.</p>
                </Col>
            </Row>
            
        </Container>
    )
}

export default About