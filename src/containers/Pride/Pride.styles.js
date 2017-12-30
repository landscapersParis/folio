import styled, { css } from 'styled-components';
import { OrderNumber as _OrderNumber } from 'theme/types';
import { Relative } from 'theme/grid';
// import _Square from 'components/Square/Square';
import { color7, color5, color3, light, darklight } from 'theme/variables';
import media from 'theme/media';
import SketchyArrow from 'components/SketchyArrow/SketchyArrow';
import GlitchImage from 'react-glitch';
import Image8Bit from 'react-8bit';
import FoldImage from 'react-fold-image';

const easeFunction = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
const transitionDuration = '1s';

export const OrderNumber = styled(_OrderNumber)`
  margin-left: 4px;
  margin-right: 5px;
  opacity: 0.3;
  font-size: 2.5em;
  & > div {
    transform: translate(0, 0);
    display: inline-block;
    transition: transform ${transitionDuration} ${easeFunction};
  }
  ${media.tablet`
    font-size: 1.5em;
  `}
  ${({ hide }) => hide && css`
    & > div:first-child {
      transform: translate(0, -100%);
    }
    & > div:nth-child(2) {
      transform: translate(0, 100%);
    }
  `}
`;

export const InstallCode = styled.p`
  position: absolute;
  top: 50%;
  font-size: 1.6em;
  color: ${ light };
  ${media.tablet`
    font-size: 1em;
  `}
  ${({ right }) => right ? css`
    right: 0;
    margin: 0 0 0 0;
  ` : css`
    margin: 0 0 0 0;
  ` }
  transform: translate(0, 0);
  transition: transform ${transitionDuration} ${easeFunction};
  ${({ hide, right }) => hide && css`
    transform: translate(${right ? '100%' : '-100%'}, 0);
  `}
`;

export const Img1 = styled.img`
  border: 6px solid ${darklight};
  width: 40vw;
  display: inline-block;
  margin: 0 auto;

  ${media.tablet`
    width: 80%;
  `}
`;

export const Img2 = styled(Relative)`
  border: 6px solid ${darklight};
  width: 40vw;
`;

export const Img3 = styled(Relative)`
  border: 6px solid ${darklight};
  width: 60vw;
  ${media.tablet`
    width: 80%;
  `}
`;

export const VerticalGuideLine = styled.p`
  transform: rotate(-90deg) translate(-100%, -140%);
  position: absolute;
  top: 0;
  white-space: nowrap;
  color : ${color5};
  ${({ right }) => right ?
    css`
      right: 0;
      transform-origin: right top;
      transform: rotate(90deg) translate(100%, -140%);
    ` :
    css`
      left: 0;
      transform-origin: top left;
    `
  }

  margin: 0;
  font-size: 15px;
`;

// export const Square = styled(_Square)`
//   position: absolute;
//   top: 0;
//   left: 20px;
//   transform: translate(0, -50%);
//   z-index: 2;
// `;

export const Group = styled(Relative)`
  margin-bottom: 130px;
`;

export const StyledSketchyArrow = styled(SketchyArrow)`
  position: absolute;
  top: 5px;
  left: 60%;
  transform: translate(-50%, -100%) rotateY(180deg);
  z-index: -1;
`;

export const StyledGlitchImage = styled(GlitchImage)`
  border: 6px solid ${darklight};
  width: 400px;
  cursor: pointer;
  display: inline-block;
  ${media.tablet`
    width: 100%;
  `}
`;

export const StyledImageBefore8Bit = styled.img`
  border: 6px solid ${color3};
  width: 300px;
  display: block;
  ${media.tablet`
    width: 29vw;
  `}
`;

export const StyledImageAfter8Bit = styled(Image8Bit)`
  border: 6px solid ${color7};
  width: 300px;
  margin-left: 50px;
  display: block;
  ${media.tablet`
    margin-left: 50px;
    width: 29vw;
  `}
`;

export const StyledFoldImage = styled(FoldImage)`
  margin-left: 15%;
  border: 6px solid ${darklight};
  width: 600px;
  ${media.tablet`
    margin: 0;
    width: 100%;
  `}
`;
