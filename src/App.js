import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components';
import Nav from './modules/layout/nav/Nav'
import Login from './modules/user/Login'
import Register from './modules/user/Register'
import Posts from './modules/posts/Posts'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(98,104,189);
  }
`;

const Page = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 1.5rem;
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Page>
          <Router>
            <React.Fragment>
              <Nav />
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/posts" component={Posts} />
              </Switch>
            </React.Fragment>
          </Router>
        </Page>
      </React.Fragment>
    )
  }
}

export default App;
