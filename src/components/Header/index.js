import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Nav';

function Header() {


    return (
        <Container>
            <Row>
                <Col>
                    <h1>Ron Romero</h1>
                </Col>
                <Col>
                <Navbar></Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;