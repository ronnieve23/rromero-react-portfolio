import React from "react";
import { Container, Image, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NPT from '../../assets/img/NPT.png'
import deepBlue from '../../assets/img/deepblue.png';
import techBlog from '../../assets/img/the-tech-blog.png'
import weather from '../../assets/img/weatherlookup.png'
import workDayPlanner from '../../assets/img/WorkDayPlanner.png'
import noteTaker from '../../assets/img/notetaker.png'



function Portfolio() {
    return (
        <Container fluid className="mt-2 mb-5">
            <Row>
                <Col md={6}>
                    <Image src={deepBlue} thumbnail style={{ height: '500px', width: '100%' }} ></Image>
                    <h4 className="text-center" style={{ fontFamily: "monospace" }}>Deep Blue</h4>
                    <Container className="text-center mb-2">
                        <Button href="https://deep-blue-project-2.herokuapp.com/" variant="dark" className="m-1" target="_blank">Visit Deep Blue</Button>
                        <Button href="https://github.com/Chasetopher/deep-blue" variant="dark" target="_blank">See Github Repo</Button>
                    </Container>
                </Col>
                <Col md={6}>
                    <Image src={NPT} thumbnail style={{ height: '500px', width: '100%' }} ></Image>
                    <h4 className="text-center" style={{ fontFamily: "monospace" }}>National Park Trip Planner</h4>
                    <Container className="text-center mb-2">
                        <Button href="https://miraj00.github.io/National-Park-Trip-Planner/" variant="dark" className="m-1" target="_blank">Visit National Park Trip Planner</Button>
                        <Button href="https://github.com/miraj00/National-Park-Trip-Planner" variant="dark" target="_blank">See Github Repo</Button>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Image src={techBlog} thumbnail style={{ height: '500px', width: '100%' }} ></Image>
                    <h4 className="text-center" style={{ fontFamily: "monospace" }}>Techno Blog</h4>
                    <Container className="text-center mb-2">
                        <Button href="https://rromero-techno-blog.herokuapp.com/" variant="dark" className="m-1" target="_blank">Visit Techno Blog</Button>
                        <Button href="https://github.com/ronnieve23/Techno-Blog" variant="dark" target="_blank">See Github Repo</Button>
                    </Container>
                </Col>
                <Col md={6}>
                    <Image src={weather} thumbnail style={{ height: '500px', width: '100%' }} ></Image>
                    <h4 className="text-center" style={{ fontFamily: "monospace" }}>Weather LookUp</h4>
                    <Container className="text-center mb-2">
                        <Button href="https://ronnieve23.github.io/WeatherLookUp/" variant="dark" className="m-1" target="_blank">Visit Weather LookUp</Button>
                        <Button href="https://ronnieve23.github.io/WeatherLookUp/" variant="dark" target="_blank">See Github Repo</Button>
                    </Container>
                </Col>
            </Row>
            <Row style={{paddingBottom:'50px'}}>
                <Col md={6}>
                    <Image src={workDayPlanner} thumbnail style={{ height: '500px', width: '100%' }} ></Image>
                    <h4 className="text-center" style={{ fontFamily: "monospace" }}>WorkDay Planner</h4>
                    <Container className="text-center mb-2">
                        <Button href="https://ronnieve23.github.io/WorkDayPlanner/" variant="dark" className="m-1" target="_blank">Visit WorkDay Planner</Button>
                        <Button href="https://github.com/ronnieve23/WorkDayPlanner" variant="dark" target="_blank">See Github Repo</Button>
                    </Container>
                </Col>
                <Col md={6}>
                    <Image src={noteTaker} thumbnail style={{ height: '500px', width: '100%' }} ></Image>
                    <h4 className="text-center" style={{ fontFamily: "monospace" }}>MyNotes</h4>
                    <Container className="text-center mb-2">
                        <Button href="https://mynotes-rromero.herokuapp.com/" variant="dark" className="m-1" target="_blank">Visit MyNotes</Button>
                        <Button href="https://github.com/ronnieve23/MyNotes" variant="dark" target="_blank">See Github Repo</Button>
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}

export default Portfolio