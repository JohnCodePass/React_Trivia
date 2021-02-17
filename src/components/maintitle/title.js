import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { animate__bounceOut } from 'animate.css';
import './title.css'

const maintitle = () => {
    return (
        <Container fluid id='titleId' className="contArea d-flex justify-content-center align-items-center flex-column">
            <Row>
                <Col className="d-flex justify-content-center">
                    <h1 className="titleArea animate__bounceOut"><em>Scuffed </em>Trivia</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center flex-column">
                    <Button variant="success" as={Link} to='/easygame' className="mt-5"><h1>Easy</h1></Button>
                    <Button variant="danger" as={Link} to='/hardgame' className="my-5"><h1>Hard</h1></Button>
                </Col>
                <Col className="d-flex justify-content-center flex-column">
                    <Button variant="warning" as={Link} to='/mediumgame' className="mb-5"><h1>Medium</h1></Button>
                    <Button variant="dark" as={Link} to='/options'><h1>Options</h1></Button>
                </Col>
            </Row>
        </Container>
    );
}

export default maintitle