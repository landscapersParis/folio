import styled from 'styled-components';
import { Flex, Div, Absolute } from 'theme/grid';
import { green, color8, pacman, socialMed2 } from 'theme/variables';
import media from 'theme/media';

export const AcxsContainer = styled(Flex)`
  padding: 1em 0;
  ${media.phone`
    flex-direction: column;
  `}
`;

export const Thumbnail = styled.a`
  position: relative;
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
  width: 40%;
  ${media.phone`
    width: 100%;
  `}
  img.thumbnail {
    width: 100%;
  }
  img.button {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    opacity: 0.7;
    transition: opacity .3s;
  }
  &:hover {
    img.button {
      opacity: 1;
    }
  }
`;

export const DescriptionContainer = styled(Div)`
  margin-left: 1.5em;
  & > h4 {
    margin-top: 0;
  }
  & > .description > p:first-of-type {
    margin-top: 0;
  } & > .description > p > A {
  text-decoration: none;
  position: relative;
  cursor: pointer;
  color: ${pacman};
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    height: 0.1em;
    background-color: ${({ color }) => color || color8 };
    transition: .17s background-color, .17s height;
  }
  &:hover {
    &::after {
      background-color: ${({ toColor }) => toColor || socialMed2 };
      height: 0.5em;
      z-index: -1;
    }
  }
  ${media.tablet`
    &::after,
    &::before {
      display: none;
    }
  `}
  ${media.phone`
    margin-left: 0;
    margin-top: 1em;
  `}
`;

export const SubTHead = styled(Absolute)`
  font-size: 2<em;
  z-index: -1;
  opacity: 0.4;
  color: ${green};
  top: -40px;
  left: 4px;
  h1 {
    margin-top: 0;
  }
  ${media.phone`
    top: -20px;
  `}
`;
