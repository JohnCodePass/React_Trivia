import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './options.css';


const optionspage = () => {
    return (
        <Container className="contArea">
            <Row>
                <Col>
                    <p>This is going to be the options page</p>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center flex-column">
                    <Button variant="success" as={Link} to='/' className="mt-5"><h1>Main Menu</h1></Button>
                </Col>
            </Row>
        </Container>
    );
}

export default optionspage;