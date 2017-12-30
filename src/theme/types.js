import styled, { css } from 'styled-components';
import { green, color8, color2, socialMed1, socialMed3, socialMed2, ice, light } from 'theme/variables';
import media from 'theme/media';

export const FixedTitle = styled.h1`
  position: fixed;
  font-size: 1.4em;
  top: 42px;
  left: 100px;
  color: ${socialMed1};
  ${media.tablet`
    left: 40px;
    font-size: 1.2em;
  `}

  margin: 0;
  z-index: 2;
`;

export const OrderNumber = styled.h1`
  font-size: 1.7em;
  color: ${socialMed3};
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const commonTextProps = css`
  ${({ textRight }) => textRight ? css`text-align: right;` : null}
  ${({ textCenter }) => textCenter ? css`text-align: center;` : null}
  ${({ textLeft }) => textLeft ? css`text-align: left;` : null}
`;

export const H1 = styled.h1`
  ${commonTextProps}
`;

export const H2 = styled.h2`
  ${commonTextProps}
`;

export const H3 = styled.h3`
  ${commonTextProps}
`

export const P = styled.p`
  ${({ textRight }) => textRight ? css`text-align: right;` : null}
  ${({ textCenter }) => textCenter ? css`text-align: center;` : null}
  ${({ textLeft }) => textLeft ? css`text-align: left;` : null}
`;

export const A = styled.a`
  text-decoration: none;
  position: relative;
  cursor: pointer;
  color: ${ice};
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
`;

const commonRevealProps = css`
  &.hide > span::after {
    width: 100%;
  }
  &.hide > span {
    transform: scale(0.95);
  }
  & > span {
    transform: scale(1);
    display: inline-block;
    color: ${light}; 
    position: relative;
    overflow: hidden;
    transition: 1s transform;
    &::after {
      content: ' ';
      background-color: ${({ color }) => color || green};
      position: absolute;
      right: 0;
      ${({ fromLeftToRight }) => fromLeftToRight ?
        css`right: 0; ` :
        css`left: 0;`
      }
      top: 0;
      width: 0%;
      height: 100%;
      transition: 1s width;
    }
  }
`;

export const RevealP = styled.p`
  ${commonRevealProps}
`;

export const RevealH1 = styled(H1)`
  ${commonRevealProps};
`;

export const RevealH2 = styled(H2)`
  ${commonRevealProps};
`;

export const RevealH3 = styled(H3)`
  ${commonRevealProps};
`;

export const RevealA = styled(A)`
  &.hide > span::after {
    width: 100%;
  }
  & > span {
    position: relative;
    overflow: hidden;
    &::after {
      content: ' ';
      background-color: ${({ color }) => color || color2};
      position: absolute;
      right: 0;
      ${({ fromLeftToRight }) => fromLeftToRight ?
        css`right: 0; ` :
        css`left: 0;`
      }
      top: 0;
      width: 100%;

      transition: 1s width;
    }
  }
`;

export const Blockquote = styled.blockquote`
  font-style: bold;
  color: ${light};
`
