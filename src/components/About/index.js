import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import profilePic from '../../assets/img/ronromero.jpeg'
import '../About/about.css'

function About() {
    return (    
        <Card className="border-0" style={{ fontFamily: "monospace", backgroundColor: "#AFAFAF" }} >
            <Row className="no-gutters">
                <Col className="" align="center">
                    <Card.Img src={profilePic} className="mt-3" style={{height:"500px", width:"300px"}}></Card.Img>
                </Col>
            </Row>    
            <Row>
            <Col className="mb-5">
                <Card style={{ fontFamily: "monospace", backgroundColor: "#AFAFAF" }} className="border-0 m-3">
                    <Card.Body>
                        <Card.Title style={{fontSize:'50px'}} className="text-center">About Me</Card.Title>
                        <Card.Text>
                        I currently work as a Technical Support Specialist and I'm currently enrolled in Rutgers Coding Bootcamp hoping to do a career change after the program. This Portfolio showcases the projects we are working on through the course of the Bootcamp.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            </Row>   
        </Card>
         
    )
}

export default About