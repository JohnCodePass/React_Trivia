import { Container, Row, Col, Button } from 'react-bootstrap';
import './easygame.css'
import { Link } from 'react-router-dom'

let counter = 1;

let easyQs = [
    {
        Question: "Who is swore in as president in 2021?",
        Ans1: 'JT',
        Ans2: 'Joseph',
        Ans3: 'Trump',
        Ans4: 'Biden',
        corAns: 'Biden'
    },
    {
        Question: "What is the highest rank in league of legends?",
        Ans1: 'Master',
        Ans2: 'GrandMaster',
        Ans3: 'Challenger',
        Ans4: 'Iron',
        corAns: 'Challenger'
    },
    {
        Question: "As of December 2020, what is the latest series of iphone?",
        Ans1: 'iphone 10',
        Ans2: 'iphone 12',
        Ans3: 'iphone 11',
        Ans4: 'iphone 13',
        corAns: 'iphone 12'
    },
    {
        Question: "Who is the ceo of Tesla?",
        Ans1: 'Bill Gates',
        Ans2: 'Warren Buffet',
        Ans3: 'Elon Musk',
        Ans4: 'Jeff Bezos',
        corAns: 'Elon Musk'
    }
].sort(() => Math.random() - 0.5);

const easygame = () => {
    return (
        <Container id='easyCont' className="d-flex justify-content-center align-items-center flex-column">
            <Row>
                <Col>
                    <h2>Score {counter}/20</h2>
                </Col>
            </Row>
            <Row id="qArea">
                <Col>
                    <h1>{easyQs[1].Question}</h1>
                    {console.log(easyQs[1])}
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center flex-column">
                    <Button variant="success" className="mt-5"><h1>{easyQs[1].Ans1}</h1></Button>
                    <Button variant="success" className="my-5"><h1>{easyQs[1].Ans3}</h1></Button>
                </Col>
                <Col className="d-flex justify-content-center flex-column">
                    <Button variant="success" className="mb-5"><h1>{easyQs[1].Ans2}</h1></Button>
                    <Button variant="success"><h1>{easyQs[1].Ans4}</h1></Button>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>
                    <Button variant="danger" as={Link} to='/'><h1>Main Menu</h1></Button>
                </Col>
            </Row>


        </Container>

    );
}

export default easygame;