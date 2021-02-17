import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'



export default class Option extends Component {
    
    render() {
        return (
            <Container fluid id='titleId' className="contArea d-flex justify-content-center align-items-center flex-column">
                <Row>
                    <Col>
                        <h1>This is the options page</h1>
                        
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
