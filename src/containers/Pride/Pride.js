import React, { Component } from 'react';
import { A, P, FixedTitle, OrderNumber as _OrderNumber, Blockquote } from 'theme/types';
import { ProjectsContainer, Relative, Container, Flex, Div } from 'theme/grid';
import { connect } from 'react-redux';
import ReactZoomy from 'react-zoomy';
import asyncImageEnhance from 'helpers/asyncImageEnhance';
import ToggleState from 'components/ToggleState/ToggleState';
import {
  OrderNumber,
  InstallCode,
  Img1,
  Img2,
  Img3,
  VerticalGuideLine,
  Group,
  StyledSketchyArrow,
  StyledGlitchImage,
  StyledImageAfter8Bit,
  StyledImageBefore8Bit,
  StyledFoldImage
} from './Pride.styles';
import { Motion, spring } from 'react-motion';
import ImageParallax from 'react-image-parallax2';
import WaypointShow from 'components/WaypointShow/WaypointShow';

const IMG1_MOUSE_OVER = 'pride/IMG1_MOUSE_OVER';
const IMG1_MOUSE_LEAVE = 'pride/IMG1_MOUSE_LEAVE';

export function img1MouseOver() {
  return { type: IMG1_MOUSE_OVER };
}

export function img1MouseLeave() {
  return { type: IMG1_MOUSE_LEAVE };
}

const initialState = {
  image1: {
    hover: false
  },
  isGroup1Shown: false,
  isGroup2Shown: false,
  isGroup3Shown: false,
};

const Basketball1Image = asyncImageEnhance('pride/grav')(
  ({doneLoading, ...rest}) =>
    <Img1
      onLoad={doneLoading}
      {...rest}
      src={require('assets/grav.png')}
      alt="grav"/>
)

const Basketball2Image = asyncImageEnhance('pride/cloningChApp')(
  ({ doneLoading, ...rest }) =>
    <ImageParallax
      onLoad={doneLoading}
      {...rest}/>
);

const Basketball3Image = asyncImageEnhance('pride/ch-veraLogged')(
  ({ doneLoading, ...rest }) =>
    <ImageParallax
      onLoad={doneLoading}
      {...rest}/>
);

const Basketball4Image = asyncImageEnhance('pride/eclipseMan')(
  ({doneLoading, ...rest}) =>
    <Img1
      onLoad={doneLoading}
      {...rest}
      src={require('assets/launchEclipseOxygen1.png')}
      alt="eclipsOx"/>
);

const Basketball5Image = asyncImageEnhance('pride/SkillsWeb')(
  ({doneLoading, ...rest}) =>
    <Img1
      onLoad={doneLoading}
      {...rest}
      src={require('assets/SkillValue.png')}
      alt="WebTests"/>
);

const Image8BitBefore = asyncImageEnhance('pride/8bitmebefore')(
  ({ doneLoading, ...rest }) =>
    <StyledImageBefore8Bit
      onLoad={doneLoading}
      {...rest}/>
);

const Image8BitAfter = asyncImageEnhance('pride/8bitmeafter')(
  ({ doneLoading, ...rest }) =>
    <StyledImageAfter8Bit
      onLoad={doneLoading}
      {...rest}/>
);

export function reducer(state = initialState, action) {
  switch(action.type) {
    case IMG1_MOUSE_OVER:
      return {
        ...state,
        image1: { ...state.image1, hover: true }
      };
    case IMG1_MOUSE_LEAVE:
      return {
        ...state,
        image1: { ...state.image1, hover: false }
      };
    default:
      return state;
  }
}

class Pride extends Component {
  render() {
    const { image1Hover, img1MouseOver, img1MouseLeave } = this.props;
    // const springPreset = {damping: 35};

    return (
      <div>
        <FixedTitle>Pride</FixedTitle>
        <ProjectsContainer>
          <Container>
            <Blockquote>"This page is the very pride of how I made right choices facing the high expectations of Web Development in France.<br /><br />
            Must be a reason why I would feel olympic out of such a historical spot on a map, and the only way I'll justify is hours of work, no matter what."
            <br /><br />
            English is not my mother tong, but I had to go look for youtubers and documentations 
            so I can give a good shape for a project.
            <br /><br />
            And there we go! I could just see through the scholar modal in our country, that I wouldn't stick to it. My time had gone.
            But the diversity already designed, stepping forward for some earthqwake in higher-learning opportunities was a must, even if it came first as a back to school to get a degree.
            Growing up within pro envirement, culture and Aesthetics wealth background, I thought too sad the communication would sit and talk money, just for the sake of most significant vectors of some economical wisdom.
            <br /><br />
            Then came a good management of my bank on my personals, and I realised plainly the world was happening to change.
            At what cost!? But of course wherever we stand, well obliged to join now.
            <br />
            Register as a freelancer was a good move, unless few would recommend here. It's a real achievement to gather and expose today the different communities and technologies experimented 
            and keep growing my vision based then on sustainable development."
            </Blockquote>
            <WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative noOverflow>
                    <Relative noOverflow>
                      <OrderNumber hide={!show}>
                        <Div>Nginx</Div>
                        📗
                        <Div>PHP 7</Div>
                      </OrderNumber>
                    </Relative>
                    <br /><br />
                    <InstallCode hide={!show}><A target="_blank" href="http://varela-electricite.com">varela-electricite.com</A> a <A target="_blank" href="https://getgrav.org">grav cms</A> made project</InstallCode>
                  </Relative>
                  <ReactZoomy
                    imageUrl={require('assets/grav-bigger.png')}
                    renderThumbnail={({ showImage }) =>
                      <Flex justifyContent="center">
                        <Relative
                          style={{ cursor: 'pointer' }}
                          inline
                          onMouseOver={img1MouseOver}
                          onMouseLeave={img1MouseLeave}>
                          <Motion style={{ y: image1Hover ? spring(10) : spring(0)}}>
                            {({ y }) =>
                              <VerticalGuideLine style={{
                                transform: `rotate(-90deg) translate(-${110 - y}%, -140%)`
                              }}>
                                &#169;lp' nascVi since 2014
                              </VerticalGuideLine>
                            }
                          </Motion>
                          <Motion style={{ scale: image1Hover ? spring(1.1) : spring(1) }}>
                            {({ scale }) =>
                              <Relative noOverflow>
                                <Basketball1Image
                                  style={{
                                    transform: `scale(${scale})`
                                  }}
                                  onClick={showImage}/>
                              </Relative>
                            }
                          </Motion>                         
                        </Relative>
                      </Flex>
                    }
                    scale={[1.1, 1.1]}
                    imageProps={{
                      style: {
                        width: '100vw',
                        height: 'auto'
                      }
                    }}
                  />
                  <Blockquote>"Meeting great entreprenors such as varela was the opportunity to manipulate a technology called GRAV.
                  The flat file CMS, that can be handled by <A target="_blank" href="http://nginx.org">Nginx</A> or <A target="_blank" href="http://apache.org">Apache</A> along side <A target="_blank" href="http://php.net">PHP7</A> and the admin easy <A target="_blank" href="http://serverpilot.io">serverpilot</A> are inspiring I have learned alot with theme:<br />
                  <A href="http://myraisefundsapro.tech">I raise funds a pro</A>".</Blockquote>
                </Group>
              }
            </WaypointShow>

            <WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative textRight noOverflow>
                    <OrderNumber hide={!show}>
                      <Div>NodeJS</Div>
                      🔺
                      <Div>Angular</Div>
                    </OrderNumber>
                    <br /><br /><br />
                    <InstallCode right hide={!show}>An <A target="_blank" href="https://expressjs.com/">ExpressJS</A> RESTful api for <A target="_blank" href="https://casual-high.com/">Casual-High</A></InstallCode>
                  </Relative>
                  <Flex justifyContent="flex-start" marginBottom="70px">
                    <Relative>
                      <VerticalGuideLine right style={{
                          transform: `rotate(90deg) translate(100%, -140%)`
                        }}>
                        cloning datas🐚
                      </VerticalGuideLine>
                      <Img2>
                      <Basketball2Image
                        src={require('assets/cloningChApp.png')}
                        reduceHeight={1/2}
                      />
                      </Img2>
                    </Relative>
                  </Flex>
                  <Flex justifyContent="flex-end">
                    <Relative>
                      <VerticalGuideLine style={{
                          transform: `rotate(-90deg) translate(-100%, -140%)`
                        }}>
                        mLAB Tests 🍃
                      </VerticalGuideLine>
                      <StyledSketchyArrow/>
                      <Img3>
                        <Basketball3Image reduceHeight={1/3} src={require('assets/ch-veraLogged.png')}/>
                      </Img3>
                    </Relative>
                  </Flex>
                  <Blockquote>"A former project I was in as a lead developer got me understand backend and UI MEAN Stack from <A target="_blank" href="https://www.youtube.com/channel/UCWDE9dOdbaZy9HY23XGtBfg">DavDev TV</A> and other sources.
                  I then built with <A target="_blank" href="https://angularjs.org/">Angular</A> and <A target="_blank" href="https://www.mongodb.com/">MongoDB</A> testing on <A target="_blank" href="https://heroku.com">Heroku</A> getting to know the no-sql alternatives <A target="_blank" href="https://cloudant.com/sign-up/">cloudant</A>, or <A target="_blank" href="http://couchdb.apache.org/">couchDB</A> for local dev env".</Blockquote>
                </Group>
              }
            </WaypointShow>
            <WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative textRight noOverflow>
                     <OrderNumber hide={!show}>
                      <Div>SEO</Div>
                      🕵
                      <Div>TLS</Div>
                     </OrderNumber>
                     <InstallCode right hide={!show}>
                      <A target="_blank" href="https://letsencrypt.org">Sec. Protocols</A> and <A target="_blank" href="https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/robertadams/2016/11/29/seo-2017-8-crucial-rules-for-dominating-googles-search-results/&refURL=https://www.google.fr/&referrer=https://www.google.fr/">Search Engines Opt.</A>
                     </InstallCode>
                    <br />
                  </Relative>
                  <br />
                  <Relative textRight noOverflow>
                    <Relative inline>
                      <VerticalGuideLine right>
                       No TLS
                      </VerticalGuideLine>
                      <Image8BitBefore
                        src={require('assets/noLetsencrypt.png')}
                        alt={'The Web App'}
                      />
                    </Relative>
                    <Relative inline>
                      <VerticalGuideLine right>
                        TLS Cert 🔒
                      </VerticalGuideLine>
                      <Image8BitAfter
                        scaleFactor={4}
                        src={require('assets/Letsencrypt.png')}
                      />
                    </Relative>
                  </Relative>
                  <Blockquote>
                  Studying security for my clients and <A href="https://builtvisible.com/react-js-seo/">SEO friendly apps</A> led me to
                  the <A href="https://hstspreload.org">HTST</A> Domain protocole encryption.
                  that gives an enough secure production envirment for an e-commerce demand for exemple.
                  </Blockquote>
                </Group>
              }
            </WaypointShow>
            <WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative noOverflow>
                    <Relative noOverflow>
                      <OrderNumber hide={!show}>
                        <Div>Eclipse</Div>
                        ♨
                        <Div>JEE</Div>
                      </OrderNumber>
                    </Relative>
                    <br /><br />
                    <InstallCode hide={!show}><A target="_blank" href="http://lesvieuxrepasmodernes.fr">lesvieuxrepasmodernes.fr</A> my personal foody blog, that came with my veggie diet🍲</InstallCode>
                    <br />
                  </Relative>
                  <ReactZoomy
                    imageUrl={require('assets/runtimeTomcatServerConf.png')}
                    renderThumbnail={({ showImage }) =>
                      <Flex justifyContent="center">
                        <Relative
                          style={{ cursor: 'pointer' }}
                          inline
                          onMouseOver={img1MouseOver}
                          onMouseLeave={img1MouseLeave}>
                          <Motion style={{ y: image1Hover ? spring(10) : spring(0)}}>
                            {({ y }) =>
                              <VerticalGuideLine style={{
                                transform: `rotate(-90deg) translate(-${110 - y}%, -140%)`
                              }}>
                                &#169;lp's since 2017
                              </VerticalGuideLine>
                            }
                          </Motion>
                          <Motion style={{ scale: image1Hover ? spring(1.1) : spring(1) }}>
                            {({ scale }) =>
                              <Relative noOverflow>
                                <Basketball4Image
                                  style={{
                                    transform: `scale(${scale})`
                                  }}
                                  onClick={showImage}/>
                              </Relative>
                            }
                          </Motion>                         
                        </Relative>
                      </Flex>
                    }
                    scale={[1.1, 1.1]}
                    imageProps={{
                      style: {
                        width: '100vw',
                        height: 'auto'
                      }
                    }}
                  />
                  <Blockquote>"Joining the hyperactive manjaro community dev, that I came to test <A href="https://www.eclipse.org">Eclipse Oxygen 1</A> and The JEE dev environment.
                  I thought it's the opportunity and the right time to grow my cooking passion, deliverying my concept on a <A href="http://tomcat.apache.org">Tomcat</A> Server or <A href="https://jenkins.io">Jenkins CI</A> my vision of a good diet".
                  </Blockquote>
                </Group>
              }
            </WaypointShow>

            <WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative textRight noOverflow>
                    <OrderNumber hide={!show}>
                      <Div>Manjaro</Div>
                      🐧
                      <Div>AUR</Div>
                    </OrderNumber>
                    <InstallCode right hide={!show}>contribution to the <A target="_blank" href="https://manjaro.io">Manjaro Linux</A> community</InstallCode>
                   <br />
                  </Relative>
                  <ToggleState defaultState>
                    {({ state, turnTrue, turnFalse }) =>
                      <Relative block textCenter>
                        <WaypointShow topOffset={200} bottomOffset={-100} defaultBehavior>
                          {({ show: show2 }) =>
                            <Relative inline>
                              <VerticalGuideLine right>
                                Linux stable { show && state ? 'before' : 'now'}!
                              </VerticalGuideLine>
                              <StyledGlitchImage
                                onClick={state ? turnFalse : turnTrue}
                                src={require('assets/manjadev.jpg')}
                                alt="Linux"
                                glitching={show && show2 && state}
                                glitchOptions={{
                                  seed: [0, 30, 60],
                                  quality: 99,
                                  amount: 0,
                                  iterations: [1, 5, 10, 20]
                                }}
                                speed={[50, 200]}
                              />
                            </Relative>
                          }
                        </WaypointShow>
                      </Relative>
                    }
                  </ToggleState>
                  <Blockquote>"Manjaro is an <A href="https://www.eclipse.org">Arch Linux</A> based distro.
                  It is really gui orientated. <A href="http://aur.io">AUR</A> makes it better and up to date for the best features a web dev desk can expect".
                  </Blockquote>
                </Group>
              }
            </WaypointShow>


            <WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative noOverflow>
                    <OrderNumber hide={!show}>
                      <Div>Tests</Div>
                      🏅
                      <Div>Certificats</Div>
                    </OrderNumber>
                    <InstallCode hide={!show}>
                    <A target="_blank" href="https://expertrating.com">Expert Rating</A>
                    <span> & </span>
                    <A target="_blank" href="https://skillvalue.com">Skill Value</A>
                    </InstallCode>
                   <br />
                  </Relative>
                  <ReactZoomy
                    imageUrl={require('assets/codeacademy.png')}
                    renderThumbnail={({ showImage }) =>
                      <Flex justifyContent="left">
                        <Relative
                          style={{ cursor: 'pointer' }}
                          inline
                          onMouseOver={img1MouseOver}
                          onMouseLeave={img1MouseLeave}>
                          <Motion style={{ y: image1Hover ? spring(10) : spring(0)}}>
                            {({ y }) =>
                              <VerticalGuideLine style={{
                                transform: `rotate(-90deg) translate(-${110 - y}%, -140%)`
                              }}>
                                &#169;lp's since 2014
                              </VerticalGuideLine>
                            }
                          </Motion>
                          <Motion style={{ scale: image1Hover ? spring(1.1) : spring(1) }}>
                            {({ scale }) =>
                              <Relative noOverflow>
                                <Basketball5Image
                                  style={{
                                    transform: `scale(${scale})`
                                  }}
                                  onClick={showImage}/>
                              </Relative>
                            }
                          </Motion>                         
                        </Relative>
                      </Flex>
                    }
                    scale={[1.1, 1.1]}
                    imageProps={{
                      style: {
                        width: '100vw',
                        height: 'auto'
                      }
                    }}
                  />
                  <Blockquote>
                   Expert rated me reliable HTML, CSS, Javascript, 
                   and I got a react intermediate over average at skill Value.
                  </Blockquote>
                </Group>
              }
            </WaypointShow>

            <WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative textRight noOverflow>
                    <OrderNumber hide={!show}>
                      <Div>Autodidact</Div>
                      📈
                      <Div>Training</Div>
                    </OrderNumber>
                    <br />
                    <InstallCode right hide={!show}>my Meet ups, and Trainings</InstallCode>
                  </Relative>
                  <Relative block>
                    <WaypointShow bottomOffset={400}>
                      {({ show: show2 }) =>
                        <ToggleState defaultState>
                          {({ state, turnTrue, turnFalse }) =>
                            <StyledFoldImage
                              noCol={4}
                              noRow={4}
                              earlyRatio={0.3}
                              startingPoint={3}
                              startingDirection={'down'}
                              hide={!show2}
                              src={require('assets/myDeskMob.png')}
                              />
                          }
                        </ToggleState>
                      }
                    </WaypointShow>
                  </Relative>
                 <Blockquote>"Thank to the open source wave I had a vision of freelance spread in our country joining the hello worldly move. And growing my know-how I get closer and closer to the from scratch web orientated languages.
                  If I don't try as a freelancer, by the moment I registered, I don't see my self shine at programming. And the link is crystal clear now specifying this last pride on a page".</Blockquote>
                </Group>
              }
            </WaypointShow>
          <P textCenter>
            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              width="71" height="87" viewBox="0 0 141 157">
                  <image id="image0" width="71" height="87" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACdBAMAAAB7puYNAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEUAAAA06dH///8hOpUA AADkR7QcAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAH dElNRQfhCxcJNhrQfW8wAAAAh0lEQVRo3u3UQQ6DIBRFUbsD7Aqq3YDG/e+tA9KEEhAknXnu8Mk/ Q6dJkv7XY/4tcDgD9/Ogx7mf0zJ6Lc79nNR4rrElu0/3wOEUnO/bNbPy/cXhnDjvI7ZX9o3DyYwr zl74l3E46c3S2DmcktMbh8PhcDgcDofDid97Nw4ntcLAxuFIklTrA94BxtCDWXB9AAAAJXRFWHRk YXRlOmNyZWF0ZQAyMDE3LTExLTIzVDA5OjU0OjI2LTA3OjAwxYMRlwAAACV0RVh0ZGF0ZTptb2Rp ZnkAMjAxNy0xMS0yM1QwOTo1NDoyNi0wNzowMLTeqSsAAAAASUVORK5CYII="
                  />
              </svg>
          </P>
          </Container>
        </ProjectsContainer>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    image1Hover: state.pride.image1.hover,
  }),
  {
    img1MouseOver,
    img1MouseLeave,
  }
)(Pride);
