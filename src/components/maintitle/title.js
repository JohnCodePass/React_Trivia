import { Container, Row, Col, Button } from 'react-bootstrap';
import Optionpage from '../options/optionpage'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './title.css'

const maintitle = () => {
    return (

        <Router>

            <Container fluid id='titleId' className="contArea d-flex justify-content-center align-items-center flex-column">
                <Row>
                    <Col className="d-flex justify-content-center">
                        <h1 className="titleArea">Scuffed Trivia</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center flex-column">
                        <Button variant="success" className="mt-5"><h1>Easy</h1></Button>
                        <Button variant="warning" className="my-5"><h1>Hard</h1></Button>
                    </Col>
                    <Col className="d-flex justify-content-center flex-column">
                        <Button variant="danger" className="mb-5"><h1>Medium</h1></Button>
                        <Button variant="dark" as={Link} to='/options'><h1>Options</h1></Button>
                    </Col>
                </Row>
            </Container>

            <Switch>
                <Route path='/options'>
                    <Optionpage/>
                </Route>
            </Switch>

        </Router>
    );
}

export default maintitle