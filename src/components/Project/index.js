import React from "react";
import { Container, Image, Col, Row } from 'react-bootstrap';

import deepBlue from '../../assets/img/deepblue.png';


function Portfolio() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Image src={deepBlue} thumbnail style={{ height: '200px' }}></Image>
                    <h4 className="text-center" style={{fontFamily:"monospace"}}>Deep Blue</h4>
                </Col>
                <Col>
                    <Image src={deepBlue} thumbnail style={{ height: '200px' }}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={deepBlue} thumbnail style={{ height: '200px' }}></Image>
                </Col>
                <Col>
                    <Image src={deepBlue} thumbnail style={{ height: '200px' }}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={deepBlue} thumbnail style={{ height: '200px' }}></Image>
                </Col>
                <Col>
                    <Image src={deepBlue} thumbnail style={{ height: '200px' }}></Image>
                </Col>
            </Row>
        </Container>


    )

}

export default Portfolio