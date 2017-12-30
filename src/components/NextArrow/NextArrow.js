import React, {Component} from 'react';
import styled from 'styled-components';
import { Relative } from 'theme/grid';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import c from 'classnames';
import { arrowColor, arrowColor2, arrowColor3, socialMed3 } from 'theme/variables';
import media from 'theme/media';

const MOUSE_OVER = 'nextArrow/MOUSE_OVER';
const MOUSE_LEAVE = 'nextArrow/MOUSE_LEAVE';

function mouseOver() {
  return { type: MOUSE_OVER };
}

function mouseLeave() {
  return { type: MOUSE_LEAVE };
}

export function reducer(state = { hover: false }, action) {
  switch (action.type) {
    case MOUSE_OVER:
      return { hover: true };
    case MOUSE_LEAVE:
      return { hover: false };
    default:
      return state;
  }
}

const Text = styled.p`
  font-size: 0.7em;
  position: absolute;
  top: -10px;
  margin: 0;
  right: 50%;
  white-space: nowrap;
  color: ${socialMed3};
  font-weight: bold;

  transition: .5s opacity, .5s transform;
  &.hover {
    transform: translate(-10px, 0);
  }

  &.enter {
    opacity: 0;
    transform: translate(100%, 0);
  }
  &.enterActive {
    opacity: 1;
    transform: translate(0, 0);
  }
  &.leave {
    opacity: 1;
    transform: translate(0, 0);
  }
  &.leaveActive {
    opacity: 0;
    transform: translate(-100%, 0);
  }
`;

const SVG = styled.svg`
  transition: .5s opacity, .5s transform;

  &.hover {
    transform: translate(10px, 0);
  }

  &.enter {
    opacity: 0;
    transform: translate(-100%, 0);
  }
  &.enterActive {
    opacity: 1;
    transform: translate(0, 0);
  }
  &.leave {
    opacity: 1;
    transform: translate(0, 0);
    position: absolute;
    right: 0;
    top: 0;
  }
  &.leaveActive {
    opacity: 0;
    transform: translate(100%, 0);
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const Wrapper = styled(Relative)`
  display: inline-block;
  position: fixed;
  bottom: 20px;
  right: 5vw;
  ${media.tablet`
    right: 40px;
  `}
  width: 75px;
  height: 33px;

  cursor: pointer;

  transform: opacity 1s;
`;

class NextArrow extends Component {
  render() {
    const { push, location: { pathname }, mouseOver, mouseLeave, hover, loadingProgress} = this.props;
    let text, onClick = () => {};
    switch (pathname) {
      case '/':
        text = '( *< • • • Inky';
        onClick = () => push('/pride');
        break;
      case '/pride':
        text = '( *< • • • Pinky';
        onClick = () => push('/knowhow');
        break;
      case '/knowhow':
        text = '( *< • • •  Clyde';
        onClick = () => push('/whoiam');
        break;
      default:
        break;
    }

    return (
      <Wrapper
        onClick={text && onClick}
        style={{ opacity: loadingProgress === 100 ? 1 : 0 }}
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}>
        <Relative>
          <ReactCSSTransitionGroup
            transitionName={{
              enter: 'enter',
              enterActive: 'enterActive',
              leave: 'leave',
              leaveActive: 'leaveActive'
            }}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {text && <Text
              key={text}
              className={c({ hover: hover })}
            >{text}</Text>}
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
            transitionName={{
              enter: 'enter',
              enterActive: 'enterActive',
              leave: 'leave',
              leaveActive: 'leaveActive'
            }}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {text &&
              <SVG
                key={text}
                className={c({ hover: hover })}
                width="75px"
                height="33px"
                viewBox="-2 -2 110 48">
                <path d="M0,22 L104.5,22" id="Line" stroke={arrowColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                <path d="M105.299988,22 L84.4340455,0.181462389" stroke={arrowColor2} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                <path d="M105.299988,43.7852408 L84.4340458,21.9667036" stroke={arrowColor3} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(94.867017, 32.875972) scale(1, -1) translate(-94.867017, -32.875972) "></path>
              </SVG>
            }
          </ReactCSSTransitionGroup>
        </Relative>
      </Wrapper>
    );
  }
}

export default connect(
  (state) => ({
    hover: state.nextArrow.hover,
    loadingProgress: state.loadingProgress.data,
    location: state.routing.location
  }),
  {
    mouseOver,
    mouseLeave,
    push
  }
)(NextArrow);
