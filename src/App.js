import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <div className="App">

    <Container fluid className="contArea d-flex justify-content-center align-items-center">
      <Row>
        <Col className="d-flex justify-content-center">
          <h1 className="titleArea">Scuffed Trivia</h1>
        </Col>
      </Row>
    </Container>

    </div>
  );
}

export default App;
