import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import LoadingPage from 'containers/LoadingPage/LoadingPage';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import MobBoz from 'components/MobBoz/MobBoz';
import Menu from 'components/Menu/Menu';
import { Fixed } from 'theme/grid';
import { ice, color6 } from 'theme/variables';
import media from 'theme/media';
import NavMenu from 'components/NavMenu/NavMenu';
import { Tablet, NonTablet } from 'components/Media/Media';
import DivWithBgImage from 'components/DivWithBgImage/DivWithBgImage';
import {connect} from 'react-redux';
import {isLoading} from 'redux/modules/loadingStatus';
import { registerItem, doneLoading } from 'redux/modules/loadingStatus';
import { withRouter } from 'react-router';
import NextArrow from 'components/NextArrow/NextArrow';
import PreviousArrow from 'components/PreviousArrow/PreviousArrow';

const Body = styled.div`
  // background: ${color6};
  min-height: 100vh;
`;

const Background = styled(DivWithBgImage).attrs({
  backgroundImageUrl: require('assets/AMBackgnd.png')
})`
  position: fixed;
  background-image: url(${require('assets/AMBackgnd.png')});
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: -99;
  opacity: 0.1;
  top: 10vh;
  left: 10vw;
  width: 76vw;
  height: 76vh;
  ${media.tablet`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  `}
`;

class App extends Component {
  state = {
    waitingToFinishLoading: true
  }

  componentDidMount() {
    this.props.registerItem('appBackground');
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.state.waitingToFinishLoading && !nextProps.loading) {
      this.setState({ waitingToFinishLoading: false });
    }

    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setState({
        waitingToFinishLoading: true
      });
    }
  }

  render() {
    const { loading, doneLoading } = this.props;
    const { waitingToFinishLoading } = this.state;
    return (
      <Body>
        <Tablet>
          <MobBoz/>
        </Tablet>
        <NonTablet>
          <NavMenu/>
        </NonTablet>
        <Fixed bottom="60px" left="40px" hideInTablet>
          <ThemeProvider theme={{ color: ice }}>
            <SocialMedia/>
          </ThemeProvider>
        </Fixed>
        <Menu/>
        <Background onLoad={({ loading }) => {
          if (!loading) doneLoading('appBackground');
        }}/>
        <LoadingPage loading={waitingToFinishLoading && loading}/>
        {this.props.children}
       <PreviousArrow/>
       <NextArrow/>
      </Body>
    );
  }
}

export default withRouter(connect(
  (state) => ({
    loading: isLoading(state)
  }),
  {
    registerItem, doneLoading
  }
)(App));
