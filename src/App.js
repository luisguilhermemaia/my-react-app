import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Login from './modules/user/Login'
import Register from './modules/user/Register'
import Posts from './modules/posts/Posts'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/posts" component={Posts} />
          </Switch>
        </Router>
      </div >
    )
  }
}

export default App;
