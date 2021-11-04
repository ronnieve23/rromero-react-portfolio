import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import '../../components/Resume/resume.css'

function Resume() {
    return (
        <Container>
            <Row className="mb-4 mt-2">
                <Col>
                    <h2>My Resume: 
                    </h2>
                    <Button variant="dark"href="https://drive.google.com/uc?export=download&id=1-2kZHguybqsyLIrz91ErkOHR_e14faCO" size ="lg"> Download </Button>

                </Col>
            </Row>
            <Row>
                <Col className="col-6">
                    <h3> Front End Proficiencies</h3>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li">HTML</ListGroup.Item>
                        <ListGroup.Item as="li">CSS</ListGroup.Item>
                        <ListGroup.Item as="li">Javascript</ListGroup.Item>
                        <ListGroup.Item as="li">jQuery</ListGroup.Item>
                        <ListGroup.Item as="li">React</ListGroup.Item>
                        <ListGroup.Item as="li">Materialize</ListGroup.Item>
                        <ListGroup.Item as="li">Bootstrap</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col className="col-6">
                    <h3> Back End Proficiencies</h3>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li">MySQL,Sequelize</ListGroup.Item>
                        <ListGroup.Item as="li">Mongoose, MongoDB</ListGroup.Item>
                        <ListGroup.Item as="li">APIs</ListGroup.Item>
                        <ListGroup.Item as="li">REST</ListGroup.Item>
                        <ListGroup.Item as="li">Node</ListGroup.Item>
                        <ListGroup.Item as="li">Express</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}


export default Resume;