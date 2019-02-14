import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Login from './modules/user/Login'
import Register from './modules/user/Register'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Router>
      </div >
    )
  }
}

export default App;
