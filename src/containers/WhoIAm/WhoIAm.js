/* globals emailjs */
import React, { Component } from 'react';
import { ProjectsContainer, Container, Relative, Flex } from 'theme/grid';
import { ThemeProvider } from 'styled-components';
import { A, P, FixedTitle } from 'theme/types';
import { connect } from 'react-redux';
import c from 'classnames';
import Video from 'components/Video/Video';
import Waypoint from 'react-waypoint';
import AudioPlayer from 'components/AudioPlayer/AudioPlayer';
import ImageZoomyParallax from 'components/ImageZoomyParallax/ImageZoomyParallax';
import ContactForm from 'components/ContactForm/ContactForm';
import WaypointShow from 'components/WaypointShow/WaypointShow';
import { color6, color5, light, blue, socialMed3, socialMed2 } from 'theme/variables';
import ReactPlayer from 'react-player';
import { MusicPlayerContainer, PlayButton, StyledClickHereCircle, ThumbnailWrapper, ThumbnailNumber, ThumbnailTitle, Thumbnail, StyledVideoBlock, LeftP, RightP, AudioLine, Pointer, NormalImageStuff, ThumbnailCanvas } from './WhoIAm.styles';
import { Motion, spring } from 'react-motion';
 
const NEXT_STEP = 'whoiam/NEXT_STEP';
const NEXT_PARTIAL_STEP = 'whoiam/NEXT_PARTIAL_STEP';
const PAUSE_VIDEO1 = 'whoiam/PAUSE_VIDEO1';
const PLAY_VIDEO1 = 'whoiam/PLAY_VIDEO1';
const PAUSE_VIDEO2 = 'whoiam/PAUSE_VIDEO2';
const PLAY_VIDEO2 = 'whoiam/PLAY_VIDEO2';
const SEND = 'whoiam/SEND';
const SEND_SUCCESS = 'whoiam/SEND_SUCCESS';
const SEND_FAIL = 'whoiam/SEND_FAIL';

export function nextStep() {
  return { type: NEXT_STEP };
}

export function nextPartialStep(amount) {
  return { type: NEXT_PARTIAL_STEP, amount };
}

export function pauseVideo1() {
  return { type: PAUSE_VIDEO1 };
}

export function playVideo1() {
  return { type: PLAY_VIDEO1 };
}

export function pauseVideo2() {
  return { type: PAUSE_VIDEO2 };
}

export function playVideo2() {
  return { type: PLAY_VIDEO2 };
}

export function sendForm(values) {
  return {
    types: [SEND, SEND_SUCCESS, SEND_FAIL],
    promise: () => emailjs.send('default_service', 'folio', {
      message_html: values.message,
      from_name: `${values.name} (${values.email})`,
    })
  };
}

const roundDecimal = (val) => Math.round(val * 10) / 10;

const initialState = {
  step: 1,
  video1Playing: false,
  video2Playing: false,
  sending: false
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case PAUSE_VIDEO1:
      return { ...state, video1Playing: false };
    case PLAY_VIDEO1:
      return { ...state, video1Playing: true };
    case PAUSE_VIDEO2:
      return { ...state, video2Playing: false };
    case PLAY_VIDEO2:
      return { ...state, video2Playing: true };
    case NEXT_STEP:
      return { ...state, step: Math.floor(state.step) + 1 }
    case NEXT_PARTIAL_STEP:
      return { ...state, step: roundDecimal(state.step + action.amount) }
    case SEND:
      return { ...state, sending: true };
    case SEND_SUCCESS:
      return { ...state, sending: false };
    case SEND_FAIL:
      return { ...state, sending: false };
    default:
      return state;
  }
}

class WhoIAm extends Component {
  render() {
    const { step, nextStep, pauseVideo1, playVideo1, video1Playing,video2Playing, sending, sendForm } = this.props;
    const onSubmit = (values) => {
      if (!sending) {
        sendForm(values).then(() => {
          alert('Sent');
        });
      }
    };

    return (
      <div>
        <FixedTitle>Who I Am</FixedTitle>
        <ProjectsContainer>
          <Container>
            <WaypointShow>
              {({ show }) => 
                <RightP className={c({ hide: !show })}>
                  <span 
                    style={{ color: color6 }}>
                    "Hey there!
                     <br/><br/>
                     Mabe you reached the page because you're likly to draw project lines with me, or simply you want to see a bit more... 
                     <br/>
                     It's very nice meeting you! How do you do!"
                    </span>
                </RightP>
              }
            </WaypointShow>
            <WaypointShow>
              {({ show }) =>
                <LeftP className={c({ hide: !show })}>
                  <span 
                    style={{ color: light }}>
                    - Nice to meet you to, hey!
                    <br/>
                    Vai... Vaiiho is your firstname, isn't it? 
                    <br/>
                    Am I spellin' it right?!.
                  </span>
                </LeftP>
              }
            </WaypointShow>

            { step >= 1 &&
              <WaypointShow>
              {({ show }) =>
                <Relative>
                  <RightP
                    className={c({ unanswered: step === 1, hide: !show })}
                    onClick={nextStep}
                  >
                    <span>
                      - Thanks alot fot asking! You can pronounce it -
                      <span 
                      >
                       <AudioPlayer trackId={4}>
                       {({ play, pause, playing, currentTime, duration }) =>
                        <Pointer onClick={playing ? pause : play} 
                        color={socialMed2}>
                          { !playing && <i className="fa fa-play"> </i>}
                          { playing && <i className="fa fa-pause"> </i>}
                        </Pointer>
                          }
                       </AudioPlayer> 
                      </span>-
                      <br />
                      I was born in Tahiti 🇵🇫.<br/>
                      It's a Maori name 🗿.
                    </span>
                  </RightP>
                  { step === 1 &&
                    <StyledClickHereCircle color={color6} />
                  }
                </Relative>
              }
              </WaypointShow>
            }
            { step >= 2 &&
              <div>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span 
                      style={{ color: light }}>
                       - Ok... What do you listen to?
                       <br />
                       Music is an importent factor to me
                       <br />
                       so I get to know you better,
                       <br />
                       what do you think?
                      </span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <RightP
                      inline
                      marginBottom="10px"
                      fromLeftToRight
                      className={c({ hide: !show })}>
                      <span 
                      style={{ display: 'block'}}>
                        <p>- Absolutly right! 
                        <br />
                        We are the things we like to listen at,
                        <br/>
                        These followings are on my playlist: 
                        </p>
                        <br />
                        <AudioPlayer trackId={0}>
                          {({ play, pause, playing, currentTime, duration }) =>
                            <MusicPlayerContainer
                            style={{ color: color5 }}>
                              <PlayButton onClick={playing ? pause : play}>
                                <p>
                                  { !playing && <i className="fa fa-play"></i>}
                                  { playing && <i className="fa fa-pause"></i>}
                                </p>
                              </PlayButton>
                              <div>
                                <p style={{ margin: '0 0 10px 0' }}>
                                  Pink - Try
                                </p>
                                <AudioLine>
                                  <span className="mainLine" style={{ width: `${currentTime / duration * 100}%` }}></span>
                                </AudioLine>
                              </div>
                            </MusicPlayerContainer>
                          }
                        </AudioPlayer>
                      </span>
                    </RightP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <RightP
                      inline
                      marginBottom="10px"
                      fromLeftToRight
                      className={c({ hide: !show })}>
                      <span 
                      style={{ display: 'block' }}>
                       <AudioPlayer trackId={1}>
                          {({ play, pause, playing, currentTime, duration }) =>
                            <MusicPlayerContainer
                            style={{ color: color5 }}>
                              <PlayButton onClick={playing ? pause : play}>
                                <p>
                                  { !playing && <i className="fa fa-play"></i>}
                                  { playing && <i className="fa fa-pause"></i>}
                                </p>
                              </PlayButton>
                              <div>
                                <p style={{ margin: '0 0 10px 0' }}>
                                  Lazerhawk - Star Hustler
                                </p>
                                <AudioLine>
                                  <span className="mainLine" style={{ width: `${currentTime / duration * 100}%` }}></span>
                                </AudioLine>
                              </div>
                            </MusicPlayerContainer>
                          }
                        </AudioPlayer>
                      </span>
                    </RightP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <RightP
                      inline
                      marginBottom="10px"
                      fromLeftToRight
                      className={c({ hide: !show })}>
                      <span 
                      style={{ display: 'block' }}
                      >
                        <AudioPlayer trackId={2}>
                          {({ play, pause, playing, currentTime, duration }) =>
                            <MusicPlayerContainer
                             style={{ color: color5 }}>
                              <PlayButton onClick={playing ? pause : play}>
                                <p>
                                  { !playing && <i className="fa fa-play"></i>}
                                  { playing && <i className="fa fa-pause"></i>}
                                </p>
                              </PlayButton>
                              <div>
                                <p style={{ margin: '0 0 10px 0' }}>
                                  Thomas Barrandon - The Quiet Earth
                                </p>
                                <AudioLine>
                                  <span className="mainLine" style={{ width: `${currentTime / duration * 100}%` }}></span>
                                </AudioLine>
                              </div>
                            </MusicPlayerContainer>
                          }
                        </AudioPlayer>
                      </span>
                    </RightP>
                    }
                  </WaypointShow>
                  <WaypointShow>
                  {({ show }) =>
                    <RightP
                      inline
                      marginBottom="10px"
                      fromLeftToRight
                      className={c({ hide: !show })}>
                      <span 
                      style={{ display: 'block' }}
                      >
                        <AudioPlayer trackId={3}>
                          {({ play, pause, playing, currentTime, duration }) =>
                            <MusicPlayerContainer
                             style={{ color: color5 }}>
                              <PlayButton onClick={playing ? pause : play}>
                                <p>
                                  { !playing && <i className="fa fa-play"></i>}
                                  { playing && <i className="fa fa-pause"></i>}
                                </p>
                              </PlayButton>
                              <div>
                                <p style={{ margin: '0 0 10px 0' }}>
                                  Avicii - Hey Brother
                                </p>
                                <AudioLine>
                                  <span className="mainLine" style={{ width: `${currentTime / duration * 100}%` }}></span>
                                </AudioLine>
                              </div>
                            </MusicPlayerContainer>
                          }
                        </AudioPlayer>
                      </span>
                    </RightP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span 
                      style={{ color: light }}>
                        - So you reside near Paris, in the east side.
                        <br />
                        What do you mostly spend your time at doing?
                      </span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <Relative>
                      <RightP
                        onClick={step === 2 && nextStep}
                        className={c({ unanswered: step === 2, hide: !show })}
                      >
                        <span>
                        - Well, I am a real family guy,
                        <br />
                        and I like to spend moments with my childrens,
                        <br />
                        or cooking for my people.</span>
                      </RightP>
                      { step === 2 &&
                        <StyledClickHereCircle color={color6} />
                      }
                    </Relative>
                  }
                </WaypointShow>
              </div>
            }
            { step >= 3 &&
              <div>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span
                      style={{ color: light }}>
                      - Are you out going as well?</span>
                    </LeftP>
                  }
                </WaypointShow>
                <Relative hideInTablet>
                  <WaypointShow>
                    {({ show }) =>
                      <StyledVideoBlock
                        marginBottom="30px"
                        className={c({ hide: !show })}
                      >
                        <Waypoint
                          bottomOffset={100}
                          onLeave={pauseVideo1}
                          onEnter={playVideo1}/>
                        <Video
                          playing={video1Playing}
                          videoUrl={require('assets/buzzRightFuture.mov')}/>
                      </StyledVideoBlock>
                    }
                  </WaypointShow>
                </Relative>
                <Relative showInTablet>
                  <ReactPlayer
                    width="100%"
                    height="auto"
                    videourl={require('assets/buzzRightFuture.mov')}
                    playing={false}
                  />
                </Relative>
                <RightP delay={'1s'}>
                  <span
                  style={{ color: color6 }}>
                  - We were at "<A href="http://www.cite-sciences.fr/">la Cité des Sciences</A>", that day,
                  <br />
                  Porte de la Vilette.</span>
                </RightP>
                <Relative>
                  <StyledVideoBlock delay={'1s'}>
                    <Waypoint
                      onLeave={pauseVideo2}
                      onEnter={playVideo2}/>
                    <Video
                      playing={video2Playing}
                      videoUrl={require('assets/machineWork.mov')}/>
                  </StyledVideoBlock>
                </Relative>
                <WaypointShow>
                  {({ show }) =>
                    <Relative>
                      <RightP
                        onClick={step === 3 && nextStep}
                        className={c({ unanswered: step === 3, hide: !show })}
                      >
                        <span>Yes! drawing for them and taking theme to the city is pure pleasure.</span>
                      </RightP>
                      { step === 3 &&
                        <StyledClickHereCircle color={color6} />
                      }
                    </Relative>
                  }
                </WaypointShow>
              </div>
            }
            { step >= 4 &&
              <div>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span
                      style={{ color: light }}>
                      - Great! well, I've seen you've got a <A target="_blank" href="https://www.youtube.com/channel/UCV0-XP_U_xJuP-qPxQSd2CA">youtube channel</A><br />
                      and you share your passion for handmade thangs as <A target="_blank" href="https://www.instagram.com/landscapersParis">landscapersParis</A> on Instagram.<br />
                      I'm sure sharing a vision with people also is a must for you, right!?</span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <Relative textCenter marginBottom="30px">
                      <a target="_blank" href="https://www.communitytodothread.fr">
                        <NormalImageStuff inline className={c({ hide: !show })}>
                          <img className="playButton" src={require('assets/socMeds.png')} alt="SocialToDoThread"/>
                        </NormalImageStuff>
                      </a>
                    </Relative>
                  }
                </WaypointShow>
                <br />
                <WaypointShow>
                  {({ show }) =>
                   <Relative>
                    <RightP className={c({ unanswered: step === 4, hide: !show })}
                     onClick={step === 4 && nextStep}>
                      <span
                      style={{ color: socialMed3 }}>
                      - My social meds really came with the flow to
                      <br />
                      take the most of a powerfull tools one can help,
                      <br />
                      inspire people with things one thinks he can never realize,
                      <br />
                      till he sees it desacralized.<br />
                      </span>
                    </RightP>
                    { step === 4 &&
                      <StyledClickHereCircle color={color6} />
                    }
                   </Relative>
                  }
                </WaypointShow>
              </div>
            }
            { step >= 5 &&
              <div>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span
                      style={{ color: light }}>
                      - I understand you cherish your creativity.
                      <br />
                      Where do you get your inspiration from?
                      </span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <RightP className={c({ hide: !show })}>
                      <span 
                      style={{ color: color6 }}>
                      - My design ideas usually come from the raw back of my head,
                      <br />
                      but I have to close up on mind sets I'll cary on with.
                      </span>
                    </RightP>
                  }
                </WaypointShow>
                <br /><br />
                <Flex marginBottom="2em" justifyContent="flex-end">
                  <ThemeProvider theme={{ align: 'right' }}>
                    <Relative>
                      <ThumbnailTitle>
                        Jules Verne 
                      </ThumbnailTitle>
                      <ThumbnailNumber theme={{ align: 'right'}}>
                      Elevating my creativity</ThumbnailNumber>
                      <ImageZoomyParallax
                        thumbnailUrl={require('assets/JulesVerne.jpg')}
                        imageUrl={require('assets/gd-JulesVerne.jpg')}
                        renderThumbnail={({ onImageLoad, thumbnailProps }) =>
                          <WaypointShow bottomOffset={250}>
                            {({ show }) =>
                              <ThumbnailWrapper
                                noOverflow>
                                <ThumbnailTitle style={{ color: blue }}>
                                  Jules Verne
                                </ThumbnailTitle>
                                <Thumbnail                              
                                  onLoad={onImageLoad}
                                  {...thumbnailProps}
                                  alt="Jules Verne" />
                                <Motion style={{scaleFactor: show ? spring(0.2, { stiffness: 47, damping: 20 }) : spring(20, { stiffness: 47, damping: 20 }) }}>
                                  {({ scaleFactor }) =>
                                    <ThumbnailCanvas
                                      src={require('assets/JulesVerne.jpg')}
                                      scaleFactor={100 / Math.floor(scaleFactor) / 5}
                                      style={{
                                        ...thumbnailProps.style
                                      }}
                                    />
                                  }
                                </Motion>
                              </ThumbnailWrapper>
                            }
                          </WaypointShow>
                        }
                      />
                    </Relative>
                  </ThemeProvider>
                </Flex>
              <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span 
                      style={{ color: light }}>
                      - Jules Verne surely a must for science fiction fans.
                      <br />
                      Also a pure source for the intellectual world.
                      <br />
                      Light out of a dark epoch, so ahead for his time.
                      </span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <RightP className={c({ hide: !show })}>
                      <span 
                      style={{ color: color6 }}>
                      - So true. And it is the beginning of "L'Ile Mystérieuse", 
                      <br />
                      as I was recently reading it to my kids, evening time...
                      <br /> 
                      That I understood why the author is so estimated
                      <br />
                      within the french litteracy. So is he appreciated,
                      <br />
                      being a gifted with great visions of our future
                      <br />
                      like wise he'd show is geny on various talents, 
                      <br />
                      such as illustrations print works.
                      </span>
                    </RightP>
                  }
                </WaypointShow>
                <WaypointShow>
                    {({ show }) =>
                      <LeftP className={c({ hide: !show })}>
                        <span 
                        style={{ color: light }}>
                        - The Mystérious Island, I am curious to read the part
                        <br />
                        that got you fillin' it still!
                        </span>
                      </LeftP>
                    }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <Relative>
                      <RightP
                        onClick={step === 5 && nextStep}
                        className={c({ unanswered: step === 5, hide: !show })}
                        delay="3s">
                        <span>
                        - Sample from
                        <br />
                        "Tom 2, Chapitre Second"
                        </span>
                      </RightP>
                      { step === 5 &&
                        <StyledClickHereCircle color={color6} />
                      }
                    </Relative>
                  }
                </WaypointShow>
              </div>
            }
            { step >= 6 &&
              <div>
              <br /><br />
                <Flex marginBottom="2em" justifyContent="flex-start">
                  <ThemeProvider theme={{ align: 'left' }}>
                    <Relative>
                      <ThumbnailTitle>
                        From Tom2
                      </ThumbnailTitle>
                      <ThumbnailNumber>☕</ThumbnailNumber>
                      <ImageZoomyParallax
                        thumbnailUrl={require('assets/ileMystérieuse.jpg')}
                        imageUrl={require('assets/gde-ileMystérieuse.png')}
                        renderThumbnail={({ onImageLoad, thumbnailProps }) =>
                          <WaypointShow bottomOffset={250}>
                            {({ show }) =>
                              <ThumbnailWrapper
                                noOverflow>
                                <ThumbnailTitle style={{ color: blue }}>
                                  From Tom2
                                </ThumbnailTitle>
                                <Thumbnail
                                  onLoad={onImageLoad}
                                  {...thumbnailProps}
                                  alt="From Tom2, The Mysterious Island" />
                                <Motion style={{scaleFactor: show ? spring(0.2, { stiffness: 47, damping: 20 }) : spring(20, { stiffness: 47, damping: 20 }) }}>
                                  {({ scaleFactor }) =>
                                    <ThumbnailCanvas
                                      src={require('assets/ileMystérieuse.jpg')}
                                      scaleFactor={100 / Math.floor(scaleFactor) / 5}
                                      style={{
                                        ...thumbnailProps.style
                                      }}
                                    />
                                  }
                                </Motion>
                              </ThumbnailWrapper>
                            }
                          </WaypointShow>
                        }
                      />
                    </Relative>
                  </ThemeProvider>
                </Flex>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span style={{ color: light }}>
                      - This part of the book is obviously a good exemple
                      <br />
                      of Jules Verne's gift he had to build our present or future.
                      <br />
                      What else do you recon, then?
                      </span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <Relative>
                      <RightP
                        className={c({ unanswered: step === 6, hide: !show })}
                        onClick={step === 6 && nextStep}
                        delay="1s">
                        <span>
                        - I am a big fan of J.R.R Tolkien also
                        </span>
                      </RightP>
                      { step === 6 &&
                        <StyledClickHereCircle color={color6} />
                      }
                    </Relative>
                  }
                </WaypointShow>
              </div>
            }
            { step >= 7 &&
              <div>
                <WaypointShow>
                  {({ show }) =>
                    <RightP className={c({ hide: !show })}>
                      <span
                      style={{ color: color6 }}>And Peter Jackson for keeping 
                      (<A target="_blank" href="http://lotr.wikia.com/wiki/Middle-earth">The Middle Earth</A>) fantasy contemporary.
                      As a Star Wars born and raised, I put today
                      <br />
                      Tolkien on top of my list, and untouchable from far far above.
                      <br />
                      When the time's given I'll code in the following language for sure!
                      </span>
                    </RightP>
                  }
                </WaypointShow>
                <br />
                <WaypointShow>
                  {({ show }) =>
                    <Relative textCenter marginBottom="2em">
                      <a target="_blank" href="https://fr.wikipedia.org/wiki/Cirth">
                        <NormalImageStuff textCenter inline className={c({ hide: !show })}>
                          <img className="playButton" src={require('assets/jrrrunes.png')} alt="ReduxButton"/>
                        </NormalImageStuff>
                      </a>
                    </Relative>
                  }
                </WaypointShow>
                <br />
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span
                      style={{ color: light }}>
                      - All right now, I see you're that kind of guy!
                      </span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <Relative>
                      <RightP
                        className={c({ unanswered: step === 7, hide: !show })}
                        onClick={step === 7 && nextStep}
                      >
                        <span>
                        - Definitly! Here's the man, I assume...
                        </span>
                      </RightP>
                      { step === 7 &&
                        <StyledClickHereCircle color={color6} />
                      }
                    </Relative>
                  }
                </WaypointShow>
               <br />
              </div>
            }
            { step >= 8 &&
              <div>
                <Flex marginBottom="2em" justifyContent="flex-end">
                  <ThemeProvider theme={{ align: 'right' }}>
                    <Relative>
                      <ThumbnailTitle>
                        J.R.R Tolkien 
                      </ThumbnailTitle>
                      <ThumbnailNumber>The Man of Centuries</ThumbnailNumber>
                      <ImageZoomyParallax
                        thumbnailUrl={require('assets/JRRTolkien.jpg')}
                        imageUrl={require('assets/JRRTolkien.jpg')}
                        renderThumbnail={({ onImageLoad, thumbnailProps }) =>
                          <WaypointShow bottomOffset={250}>
                            {({ show }) =>
                              <ThumbnailWrapper
                                noOverflow>
                                <ThumbnailTitle style={{ color: blue }}>
                                  J.R.R Tolkien
                                </ThumbnailTitle>
                                <Thumbnail                              
                                  onLoad={onImageLoad}
                                  {...thumbnailProps}
                                  alt="JRR Tolkien" />
                                <Motion style={{scaleFactor: show ? spring(0.2, { stiffness: 47, damping: 20 }) : spring(20, { stiffness: 47, damping: 20 }) }}>
                                  {({ scaleFactor }) =>
                                    <ThumbnailCanvas
                                      src={require('assets/JRRTolkien.jpg')}
                                      scaleFactor={100 / Math.floor(scaleFactor) / 5}
                                      style={{
                                        ...thumbnailProps.style
                                      }}
                                    />
                                  }
                                </Motion>
                              </ThumbnailWrapper>
                            }
                          </WaypointShow>
                        }
                      />
                    </Relative>
                  </ThemeProvider>
                </Flex>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span 
                      style={{ color: light }}>
                      - Oh I love The Lord Of The Rings, 
                      <br />
                      The Hobbit too.
                      <br />
                      I didn't read any other book from his artwork...
                      </span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                    {({ show }) =>
                      <RightP className={c({ hide: !show })}>
                        <span 
                        style={{ color: socialMed3 }}>
                        - people don't realize these days how important
                        <br />
                        these authors are in our socities History.
                        <br />
                        They really brought our minds out of the dark,
                        <br />
                        Tolkien symbolizes freedom questioning obscurantisms
                        <br />
                        even these days to me.
                        </span>
                      </RightP>
                    }
                  </WaypointShow>
                  <WaypointShow>
                    {({ show }) =>
                      <LeftP className={c({ hide: !show })}>
                        <span 
                        style={{ color: light }}>
                        - Rights!
                        <br />
                        What then!? Who of our times is showing
                        <br />
                        the most of this heritage, according to you?
                        </span>
                      </LeftP>
                    }
                  </WaypointShow>
                  <WaypointShow>
                    {({ show }) =>
                      <Relative>
                        <RightP
                          onClick={step === 8 && nextStep}
                          className={c({ unanswered: step === 8, hide: !show })}
                          delay="3s">
                          <span>
                          - Prince Harry is a great exemple of freedom
                          <br />
                          Inviting Jamaïca fiance the Royal
                          <br />
                          family. A great move for freedom.
                          <br />
                          Well done!
                          </span>
                        </RightP>
                        { step === 8 &&
                          <StyledClickHereCircle color={color6} />
                        }
                      </Relative>
                    }
                  </WaypointShow>
                </div>
              }
              { step >= 9 &&
                <div>
                <br /><br />
                  <Flex marginBottom="2em" justifyContent="flex-start">
                    <ThemeProvider theme={{ align: 'left' }}>
                      <Relative>
                        <ThumbnailTitle>
                          Prince Harry
                        </ThumbnailTitle>
                        <ThumbnailNumber>🇬🇧</ThumbnailNumber>
                        <ImageZoomyParallax
                          thumbnailUrl={require('assets/prince harry - meghan markle.png')}
                          imageUrl={require('assets/prince harry - meghan markle.png')}
                          renderThumbnail={({ onImageLoad, thumbnailProps }) =>
                            <WaypointShow bottomOffset={250}>
                              {({ show }) =>
                                <ThumbnailWrapper
                                  noOverflow>
                                  <ThumbnailTitle style={{ color: blue }}>
                                    Prince Harry
                                  </ThumbnailTitle>
                                  <Thumbnail
                                    onLoad={onImageLoad}
                                    {...thumbnailProps}
                                    alt="Prince Harry and Meghan Markle" />
                                  <Motion style={{scaleFactor: show ? spring(0.2, { stiffness: 47, damping: 20 }) : spring(20, { stiffness: 47, damping: 20 }) }}>
                                    {({ scaleFactor }) =>
                                      <ThumbnailCanvas
                                        src={require('assets/prince harry - meghan markle.png')}
                                        scaleFactor={100 / Math.floor(scaleFactor) / 5}
                                        style={{
                                          ...thumbnailProps.style
                                        }}
                                      />
                                    }
                                  </Motion>
                                </ThumbnailWrapper>
                              }
                            </WaypointShow>
                          }
                        />
                      </Relative>
                    </ThemeProvider>
                  </Flex>
                  <WaypointShow>
                    {({ show }) =>
                      <LeftP className={c({ hide: !show })}>
                        <span style={{ color: light }}>
                        - Yep, well! I'm not sure everybody share this opinion
                        <br />
                        But this is an undeniable sign of modernism.
                        </span>
                      </LeftP>
                    }
                  </WaypointShow>
                  <WaypointShow>
                    {({ show }) =>
                      <Relative>
                        <RightP
                          className={c({ unanswered: step === 9, hide: !show })}
                          onClick={step === 9 && nextStep}
                          delay="1s">
                          <span>
                          - Yeah many things are changing well
                          <br />
                          thank to all.
                          </span>
                        </RightP>
                        { step === 9 &&
                          <StyledClickHereCircle color={color6} />
                        }
                      </Relative>
                    }
                  </WaypointShow>
                </div>
              }
              { step >= 10 &&
                <div>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span style={{ color: light }}>
                      - Fair enough!
                      <br />
                      What would be your last word here?!
                      </span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <RightP className={c({ hide: !show })}>
                      <span
                      style={{ color: color6 }}
                      >
                        - Well Regarding these moments of greatestness in Mankind
                        fellowhood, and for fact We'll always come to a conclusion... 
                      </span>
                    </RightP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <Relative textCenter marginBottom="2em">
                      <NormalImageStuff textCenter inline className={c({ hide: !show })}>
                        <img src={require('assets/earthaside.gif')} alt="That's times to times close" className="thumbnailImage"/>
                      </NormalImageStuff>
                    </Relative>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <RightP className={c({ hide: !show })}>
                      <span style={{ color: color6 }}>
                        That was, times to times close to donut day!🍩<br />
                        We'll just easy go with what's<br />
                        far above our heads, Won't we?! 😮😓😱 
                      </span>
                    </RightP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <ContactForm.ContactForm
                      sending={sending}
                      className={c({ hide: !show })}
                      onSubmit={onSubmit}/>
                  }
                </WaypointShow>
              </div>
            }
          </Container>
        </ProjectsContainer>
        <P textCenter>
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          width="71" height="87" viewBox="0 0 141 157">
              <image id="image0" width="71" height="87" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACdBAMAAAB7puYNAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEUAAAD0t0khOpX///8A AADQSJ/zAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAH dElNRQfhCxcJNyl2tj9nAAAAg0lEQVRo3u3MUQrCMBBF0VY3MNUNVN2Amv3vrUIjxIGAlYI/536F x+QMgyTt1zh9FhzOFx2ua5fknOo+czidjqWUZ72/vd6PapzTfudwUmO9b2udvAeHw+Hs6LR/3sbU 2TmcbGwtOBwOh8PhcDgcDofD4fzNiQ0bh9Na8cPG4UiS1GsBGzTo0Mrsw3gAAAAldEVYdGRhdGU6 Y3JlYXRlADIwMTctMTEtMjNUMDk6NTU6NDEtMDc6MDApiU2gAAAAJXRFWHRkYXRlOm1vZGlmeQAy MDE3LTExLTIzVDA5OjU1OjQxLTA3OjAwWNT1HAAAAABJRU5ErkJggg=="
              />
          </svg>    
        </P>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    step: state.whoiam.step,
    video1Playing: state.whoiam.video1Playing,
    video2Playing: state.whoiam.video2Playing,
    sending: state.whoiam.sending
  }),
  {
    nextStep,
    nextPartialStep,
    pauseVideo1,
    playVideo1,
    pauseVideo2,
    playVideo2,
    sendForm,
  }
)(WhoIAm);
