import { Container, Row, Col, Button } from 'react-bootstrap';
import './title.css'

const maintitle = () => {
    return (
        <Container fluid className="contArea d-flex justify-content-center align-items-center flex-column">
            <Row>
                <Col className="d-flex justify-content-center">
                    <h1 className="titleArea">Scuffed Trivia</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center flex-column">
                    <Button variant="success" className="mt-5"><h1>Easy</h1></Button>
                    <Button variant="warning" className="my-5"><h1>Medium</h1></Button>
                    <Button variant="danger"><h1>Hard</h1></Button>
                </Col>
            </Row>
        </Container>
    );
}

export default maintitle