import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import styled from 'styled-components';
import Login from './modules/user/Login'
import Register from './modules/user/Register'
import Posts from './modules/posts/Posts'

const Page = styled.div`
  align-items: center;
  background-color: rgb(98,104,189);
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 1.5rem;
`;

class App extends Component {
  render() {
    return (
      <Page>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/posts" component={Posts} />
          </Switch>
        </Router>
      </Page>
    )
  }
}

export default App;
