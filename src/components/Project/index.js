import React from "react";
import { Container, Image, Col, Row, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Project/project.css'
import NPT from '../../assets/img/NPT.png'
import deepBlue from '../../assets/img/deepblue.png';
import techBlog from '../../assets/img/the-tech-blog.png'
import weather from '../../assets/img/weatherlookup.png'
import workDayPlanner from '../../assets/img/WorkDayPlanner.png'
import onlybans from '../../assets/img/OnlyBans.png'
function Portfolio() {
    return (
        <Container fluid className="mt-2 mb-5">
            <Row>
                <Col className="6 mb-2">
                    <Card className="border-0">
                        <Card.Img variant="top" src={deepBlue} className="cardImage"></Card.Img>
                        <Card.Body className="text-center" style={{ fontFamily: "monospace", backgroundColor: "#AFAFAF" }}>
                            <Card.Title style={{ fontSize: "30px" }}>Deep Blue</Card.Title>
                            <Container fluid>
                                <Button href="https://deep-blue-project-2.herokuapp.com/" variant="dark" className="m-1" target="_blank" style={{ fontSize: "20px" }}>Visit Deep Blue</Button>
                                <Button href="https://github.com/Chasetopher/deep-blue" variant="dark" target="_blank" style={{ fontSize: "20px" }}>See Github Repo</Button>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="6">
                    <Card className="border-0">
                        <Card.Img variant="top" src={NPT} className="cardImage"></Card.Img>
                        <Card.Body className="text-center" style={{ fontFamily: "monospace", backgroundColor: "#AFAFAF" }}>
                            <Card.Title style={{ fontSize: "30px" }}>Deep Blue</Card.Title>
                            <Container>
                                <Button href="https://deep-blue-project-2.herokuapp.com/" variant="dark" className="m-1" target="_blank" style={{ fontSize: "20px" }}>Visit Deep Blue</Button>
                                <Button href="https://github.com/Chasetopher/deep-blue" variant="dark" target="_blank" style={{ fontSize: "20px" }}>See Github Repo</Button>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="6 mb-2">
                    <Card className="border-0">
                        <Card.Img variant="top" src={techBlog} className="cardImage"></Card.Img>
                        <Card.Body className="text-center" style={{ fontFamily: "monospace", backgroundColor: "#AFAFAF" }}>
                            <Card.Title style={{ fontSize: "30px" }}>Deep Blue</Card.Title>
                            <Container fluid>
                                <Button href="https://deep-blue-project-2.herokuapp.com/" variant="dark" className="m-1" target="_blank" style={{ fontSize: "20px" }}>Visit Deep Blue</Button>
                                <Button href="https://github.com/Chasetopher/deep-blue" variant="dark" target="_blank" style={{ fontSize: "20px" }}>See Github Repo</Button>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="6">
                    <Card className="border-0">
                        <Card.Img variant="top" src={weather} className="cardImage"></Card.Img>
                        <Card.Body className="text-center" style={{ fontFamily: "monospace", backgroundColor: "#AFAFAF" }}>
                            <Card.Title style={{ fontSize: "30px" }}>Deep Blue</Card.Title>
                            <Container>
                                <Button href="https://deep-blue-project-2.herokuapp.com/" variant="dark" className="m-1" target="_blank" style={{ fontSize: "20px" }}>Visit Deep Blue</Button>
                                <Button href="https://github.com/Chasetopher/deep-blue" variant="dark" target="_blank" style={{ fontSize: "20px" }}>See Github Repo</Button>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="6 mb-2">
                    <Card className="border-0">
                        <Card.Img variant="top" src={workDayPlanner} className="cardImage"></Card.Img>
                        <Card.Body className="text-center" style={{ fontFamily: "monospace", backgroundColor: "#AFAFAF" }}>
                            <Card.Title style={{ fontSize: "30px" }}>Deep Blue</Card.Title>
                            <Container fluid>
                                <Button href="https://deep-blue-project-2.herokuapp.com/" variant="dark" className="m-1" target="_blank" style={{ fontSize: "20px" }}>Visit Deep Blue</Button>
                                <Button href="https://github.com/Chasetopher/deep-blue" variant="dark" target="_blank" style={{ fontSize: "20px" }}>See Github Repo</Button>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="6">
                    <Card className="border-0">
                        <Card.Img variant="top" src={onlybans} className="cardImage"></Card.Img>
                        <Card.Body className="text-center" style={{ fontFamily: "monospace", backgroundColor: "#AFAFAF" }}>
                            <Card.Title style={{ fontSize: "30px" }}>Deep Blue</Card.Title>
                            <Container>
                                <Button href="https://only-bans.herokuapp.com/" variant="dark" className="m-1" target="_blank" style={{ fontSize: "20px" }}>Visit Only Bans</Button>
                                <Button href="https://github.com/zacktmiller92/only-bans" variant="dark" target="_blank" style={{ fontSize: "20px" }}>See Github Repo</Button>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Portfolio


