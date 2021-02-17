import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './options.css'


export default class Option extends Component {
    
    render() {
        return (
            <Container fluid id='titleId' className="contArea d-flex justify-content-center align-items-center flex-column">
                <Row>
                    <Col>
                        <h1>Rules</h1>
                        <h2>1. Select a mode</h2>
                        <h2>2. Click an answer and then press next question</h2>
                        <h2>3. If you wish to skip it press next question</h2>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant='danger mt-5' size='lg' as={Link} to='/' block>
                            Main Menu
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
