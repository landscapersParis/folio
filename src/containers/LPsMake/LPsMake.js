import React, { Component } from 'react';
import { Relative, Absolute, Container } from 'theme/grid';
// import { BreakParagraph } from 'react-break-paragraph';
import { RevealP, A, P, FixedTitle } from 'theme/types';
import { connect } from 'react-redux';
import c from 'classnames';
import WaypointShow from 'components/WaypointShow/WaypointShow';
import ScrollIndicator from 'components/ScrollIndicator/ScrollIndicator';
import { BackgroundDiv, Headline, SubHeadline, ImageContainer } from './LPsMake.styles';
import { whenLeaving, whenAppearing, whenEntering } from 'helpers/transitionFinalize';
import asyncImageEnhance from 'helpers/asyncImageEnhance';
import AsyncImage from 'components/AsyncImage/AsyncImage';

const ProgressBackgroundDiv = (asyncImageEnhance('briefAboutBackground')(
  ({doneLoading}) =>
    <BackgroundDiv
      onLoad={({ loading }) => { !loading && doneLoading() }}
      noOverflow
      textCenter
    />
  )
);

class LPsMake extends Component {
  componentWillReceiveProps(nextProps) {
    whenLeaving(this.props, nextProps)(() => {
      console.log('BriefAbout is leaving');
    })

    whenAppearing(this.props, nextProps)(() => {
      console.log('Brief About is appearing');
    })

    whenEntering(this.props, nextProps)(() => {
      console.log('Brief About is entering');
    })
  }

  render() {
    return (
      <div>
        <FixedTitle>LP's Make</FixedTitle>
        <WaypointShow>
          {({ show }) =>
            <Relative>
              <ProgressBackgroundDiv/>
              <Absolute center middle zIndex="2">
                <Headline
                  fromLeftToRight
                  className={c({ 'hide': !show })}
                  textCenter>
                  <span>nascVi</span>
                </Headline>
                <SubHeadline
                  fromLeftToRight
                  className={c({ 'hide': !show })}
                  textCenter>
                  <span>Webdesign</span>
                </SubHeadline>
              </Absolute>
              <Absolute center bottom="15px">
                <ScrollIndicator color={'transparent'} style={{
                  width: 29,
                  height: 100
                }}/>
              </Absolute>
            </Relative>
          }
        </WaypointShow>
        <Container>
            <div>
              <RevealP
                fromLeftToRight>
                <span>
                  "Deeper IT studies back to school, Autumn 2013, was early enough for a guy like me to make it in this business. 
                  And... Thank to a memorable <A href="https://dedicatedSpaceToMyInternship.io">internship</A> at <A href="https://pydio.com">pydio.com</A>, It came as a path ready packed
                  like spotting the detail on the picture further 📲
                </span>
                <br /><br />
                <span>
                Keeping an eye on the big picture really helped focusing on how cloud computing is growing now, and how I value it on a freelance level.
                <br />
                Passion..., patience... or the genesis of pride and devotion for the web sees and oceans ride."
                </span>
                <span>
                This poetry is also how I like to guard my work original, giving the best of my creativity, then. Concieve progress wisdom out of the dark. Basically all about programming to me. But it was just a "work for more" start, prelude to improving knowledge accurate .
                </span>
              </RevealP>
              <RevealP fromLeftToRight>
                <span>
                This dedicated to the pioneers, the believers, who kept their watch on their mind philosophers, brick well cut down a wall architects.<A target="_blank" href="http://"></A>
                </span>
              </RevealP>
              <ImageContainer
                fromLeftToRight
              >
                <a target="_blank" href="https://atelierdesfetes.fr">
                    <AsyncImage
                      width="100%"                
                      src={require('assets/gotThaGuy.png')}
                    />
                </a>
              </ImageContainer>
              <RevealP fromLeftToRight>
                <span>You might click Inky on the right hand side down the page, and get to my Pride page. THX giving us a look.</span>
              </RevealP>
            </div>
        </Container>
        <P textCenter>
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          width="71" height="87" viewBox="0 0 141 157">
              <image id="image0" width="71" height="87" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACdBAMAAAB7puYNAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEUAAAD/Kyv///8hOpUA AAA72kHjAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAH dElNRQfhCxcJMghHqNt8AAAAjklEQVRo3u3SQQ6CMBRFUdxBiysQVyDuf2/GoAn8lFAaR/bc4Uv/ GXUYJOl3XfK2xOE03OdGj9Ofc2TUWpz+nFrjyOL07YzT0i3cxZ3Dic737RRuSjuHs/cHa5zSX+Rw 7s+lOTilncNZO++un/ePvK20czjROROHw+FwOBzOvzjpxMbhrK3UsHE4kiTt9QLopcbQLZO8OAAA ACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0xMS0yM1QwOTo1MDowOC0wNzowMN5yzc0AAAAldEVYdGRh dGU6bW9kaWZ5ADIwMTctMTEtMjNUMDk6NTA6MDgtMDc6MDCvL3VxAAAAAElFTkSuQmCC"
              />
          </svg>
        </P>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    doneLoading: state.loadingProgress.data === 100
  })
)(LPsMake);
