import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './login';
import ProgressPage from './progress';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <Route component={this.analyticsTracking} /> {/**/}
              <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/progress" component={ProgressPage}/>
                <Route path='/' component={Login}/>
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
  
}

export default App;
