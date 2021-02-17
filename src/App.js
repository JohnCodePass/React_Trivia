import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Quiz from './components/quizgame/quizgame'
import Mquiz from './components/medquiz/medquizgame'
import Hquiz from './components/hardquiz/hardquizgame'
import Option from './components/optionpage/options'
import Maintitle from './components/maintitle/title'
import Music from './components/music/music'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <Row>
          <Col className='d-flex justify-content-center'>
            <Music/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Switch>
              <Route path='/' exact component={Maintitle} />
              <Route path='/easygame' component={Quiz} />
              <Route path='/mediumgame' component={Mquiz} />
              <Route path='/hardgame' component={Hquiz} />
              <Route path='/options' component={Option} />
            </Switch>
          </Col>
        </Row>
      </div>
    </Router >
  );
}

export default App;
