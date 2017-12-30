import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { socialMed3, pacman, socialMed1, backdark } from 'theme/variables';
import { connect } from 'react-redux';
import media from 'theme/media';
import { Flex } from 'theme/grid';

const Container = styled(Flex)`
  color: ${({ theme: { color }}) => color};
  align-content: center;
  font-size: 0.9em;
  height: 28px;
  transition: color .2s;
  z-index: 99;

  i {
    margin: 0 15px;
    padding-top: 5px;
    margin-bottom: 2px;
  }

  ${({ horizontal }) => !horizontal && css`
    transform: rotate(-90deg);
    transform-origin: left top;
    i {
      transform: rotate(90deg);
      height: 32,5%;
    }
  `}

  p {
    margin: 0 10px 0 0;
  }

  a {
    /*light color;*/
    color: ${({ theme: { color }}) => color};
  }
  a:hover {
    position: relative;
    color: ${pacman};
    border-top: 1px solid ${socialMed1};
    border-bottom: 1px solid ${socialMed3};
    border-radius: 5px;
    transform: scale(1.2, 1.2);
    transition: .2s;
    background-color: ${backdark};
  }
`;

class SocialMedia extends Component {
  render() {
    const { menuOpen, horizontal, ...others } = this.props;
    return (
      <Container horizontal={horizontal} {...others}>
        <a
          target="_blank"
          href="https://www.github.com/nascvi">
          <i className="fa fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/vaiihonascimbene">
          <i className="fa fa-facebook"></i>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/landscapersParis/">
          <i className="fa fa-instagram"></i>
        </a>
      </Container>
    );
  }
}

export default connect()(SocialMedia);