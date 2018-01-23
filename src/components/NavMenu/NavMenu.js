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
        <StyledA href={'https://docs.google.com/viewer?url=https%3A%2F%2Fres.cloudinary.com%2Fprovideup%2Fimage%2Fupload%2Ff_pdf%2Fv1%2Fprovider%2Ftkus29irgsgpxr3elsni.pdf'}>Resume</StyledA>
      </Container>
    );
  }
}

export default NavMenu;
