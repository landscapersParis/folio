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
        <StyledA href={'https://res.cloudinary.com/provideup/image/upload/f_pdf/v1/provider/usgit3hgdpqyplhorsl0.pdf'}>Resume</StyledA>
      </Container>
    );
  }
}

export default NavMenu;
