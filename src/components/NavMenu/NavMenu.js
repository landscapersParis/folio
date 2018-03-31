import React, { Component } from 'react';
import { Container, StyledLink, StyledA } from './NavMenu.style';

class NavMenu extends Component {
  render() {
    return (
      <Container>
        <StyledLink to={'/'}>LP's Make</StyledLink>
        <StyledLink to={'/pride'}>Pride</StyledLink>
        <StyledLink to={'/knowhow'}>Know How</StyledLink>
        <StyledLink to={'/whoiam'}>Who I Am</StyledLink>
        <StyledLink to={'/resume'}>Resume</StyledA>
      </Container>
    );
  }
}

export default NavMenu;
