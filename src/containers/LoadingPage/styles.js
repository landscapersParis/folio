import styled, { css } from 'styled-components';
import { green } from '../../theme/variables';
import media from 'theme/media';

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

  background-image: url(${require('assets/darkDefault16.png')});
  z-index: 99;
`;

export const P = styled.p`
  color: ${green};
  font-size: 100%;
  font-weight: bold;
`;

export const AbsoluteText = styled.p`
  position: absolute;
  ${({ top }) => top ? css`
    top: ${top};
  ` : ''}
  ${({ bottom }) => bottom ? css`
    bottom: ${bottom};
  ` : ''}
  ${({ left }) => left ? css`
    left: ${left};
  ` : ''}
  ${({ right }) => right ? css`
    right: ${right};
  ` : ''}
  ${({ fontSize }) => fontSize ? css`
    font-size: ${fontSize};
  ` : ''}
  ${({ margin }) => margin ? css`
    margin: ${margin};
  ` : ''}
  ${({ nowrap }) => nowrap ? css`white-space: nowrap;` : ''}

  ${media.tablet`
    font-size: 70%;
    margin: 20px;
  `}
`;

export const AbsoluteDiv = styled.div`
  position: absolute;
  ${({ top }) => top ? css`
    top: ${top};
  ` : ''}
  ${({ bottom }) => bottom ? css`
    bottom: ${bottom};
  ` : ''}
  ${({ left }) => left ? css`
    left: ${left};
  ` : ''}
  ${({ right }) => right ? css`
    right: ${right};
  ` : ''}
  ${({ fontSize }) => fontSize ? css`
    font-size: ${fontSize};
  ` : ''}
`;

export const RelativeDiv = styled.div`
  position: relative;
`;
