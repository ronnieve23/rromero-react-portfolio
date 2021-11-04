import React from "react";
import { Container, Image, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NPT from '../../assets/img/NPT.png'
import deepBlue from '../../assets/img/deepblue.png';
import techBlog from '../../assets/img/the-tech-blog.png'
import weather from '../../assets/img/weatherlookup.png'
import workDayPlanner from '../../assets/img/WorkDayPlanner.png'
import noteTaker from '../../assets/img/notetaker.png'



function Portfolio() {
    return (
        <Container fluid className="mt-2">
            <Row>
                <Col className>
                    <Image src={deepBlue} thumbnail style={{objectFit:"cover" }} ></Image>
                    <h4 className="text-center" style={{ fontFamily: "monospace" }}>Deep Blue</h4>
                    <Container className="text-center">
                        <a href="https://deep-blue-project-2.herokuapp.com/" className="btn btn-outline-secondary btn-sm m-1" role="button" aria-pressed="true">Visit Deep Blue</a>
                        <a href="https://github.com/Chasetopher/deep-blue" className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">See Github Repo</a>
                    </Container>
                </Col>
                <Col >
                    <Image src={NPT} thumbnail style={{objectFit:'cover'}} ></Image>
                    <h4 className="text-center" style={{ fontFamily: "monospace" }}>National Park Trip Planner</h4>
                    <Container className="text-center">
                        <a href="https://miraj00.github.io/National-Park-Trip-Planner/" className="btn btn-outline-secondary btn-sm m-1" role="button" aria-pressed="true">Visit National Park Trip Planner</a>
                        <a href="https://github.com/miraj00/National-Park-Trip-Planner" className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">See Github Repo</a>
                    </Container>
                </Col>
                <Col >
                    <Image src={techBlog} thumbnail style={{objectFit:'cover'}} ></Image>
                    <h4 className="text-center" style={{ fontFamily: "monospace" }}>National Park Trip Planner</h4>
                    <Container className="text-center">
                        <a href="https://miraj00.github.io/National-Park-Trip-Planner/" className="btn btn-outline-secondary btn-sm m-1" role="button" aria-pressed="true">Visit National Park Trip Planner</a>
                        <a href="https://github.com/miraj00/National-Park-Trip-Planner" className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">See Github Repo</a>
                    </Container>
                </Col>
            </Row>
        </Container>


    )

}

export default Portfolio