import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <Container fluid className="contArea">
      <Row>
        <Col className="d-flex justify-content-center">
          <h1 className="titleArea">In the center</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
