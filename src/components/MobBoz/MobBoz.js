import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { socialMed2, color8 } from '../../theme/variables';
import { Motion, spring } from 'react-motion';
import { open as openMenu, close as closeMenu } from '../../redux/modules/menu';
import SimpleStaggeredMotion from 'components/SimpleStaggeredMotion/SimpleStaggeredMotion';

const Line = styled.span`
  display: block;
  width: 30px;
  height: 2px;
  background-color: ${color8};
  margin-bottom: 5px;
`;

const Relative = styled.div`
  position: relative;
`;

const AbsoluteLine = styled(Line)`
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${socialMed2};
`;

const Container = styled.div`
  position: fixed;
  top: 53px;
  right: 40px;
  cursor: pointer;
  z-index: 99;
`;

class MobBoz extends Component {
  render() {
    const {menuOpen, progress, openMenu, closeMenu} = this.props;
    return (
      <Motion style={progress === 100 ? { opacity: spring(1) } : { opacity: (0) }}>
        {({ opacity }) =>
          <SimpleStaggeredMotion
            length={3}
            defaultStyle={{width: 100}}
            style={menuOpen ? { width: spring(100) } : {width: spring(0) }}>
            {styles =>
              <Container
                onClick={menuOpen ? closeMenu : openMenu}
                style={{
                  opacity,
                  pointerEvents: progress === 100 ? 'initial' : 'none'
                }}>
                {styles.map(({ width }, i) =>
                  <Relative key={i}>
                    <Line/>
                    <AbsoluteLine style={{
                      width: `${width}%`
                    }}/>
                  </Relative>
                )}
              </Container>
            }
          </SimpleStaggeredMotion>
        }
      </Motion>
    );
  }
}

export default connect(
  (state) => ({
    menuOpen: state.menu,
    progress: state.loadingProgress.data
  }),
  {
    openMenu,
    closeMenu
  }
)(MobBoz);
