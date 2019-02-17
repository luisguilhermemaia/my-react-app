import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../../logo.svg';
import { NavContainer, Logo } from '../../theme';

const hasNav = ['/posts'];

const Nav = ({ location }) => {
  if (!hasNav.includes(location.pathname)) {
    return null;
  }
  return (
    <NavContainer>
      <div>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
      </div>
    </NavContainer>
  );
};

export default withRouter(Nav);