import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Maintitle from './components/maintitle/title'
import Optionpage from './components/options/optionpage.js'
import Easygame from './components/easymode/easygame'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Maintitle} />
          <Route path='/easygame' component={Easygame} />
          <Route path='/options' component={Optionpage} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
