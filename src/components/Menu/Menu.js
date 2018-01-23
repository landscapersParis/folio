import React, { Component } from "react";
import styled, { css, keyframes, ThemeProvider } from "styled-components";
import {
  menuTextColor,
  menuBackground,
  color8,
  Ice,
  socialMed1,
  socialMed2,
  socialMed3,
  ice,
  socialMediaInverseColor
} from "theme/variables";
import { A } from "theme/types";
import media from "theme/media";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { open as openMenu, close as closeMenu } from "redux/modules/menu";
import { Flex, Div, Relative } from "theme/grid";
import SocialMedia from "components/SocialMedia/SocialMedia";
import { easeLinearQuart, easeInOutQuart } from "theme/easeFunctions";

const Container = styled(Flex)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  font-size: 16px;

  justify-content: center;
  flex-direction: column;
  background-color: ${menuBackground};
  z-index: 98;

  text-align: center;

  // p {
  //   color: white;
  // }

  h1 {
    margin: 0;
    margin-top: 25px;
  }

  ${media.tablet`
    h1 {
      font-size: 1.5em;
    }
  `}
  transition: transform 0.6s ${easeInOutQuart};
  ${({ hide }) => hide && css`
    transform: translateY(-100%);
    animation-fill-mode: backwards;
  `}
`;

const Content = styled(Relative)`
  padding-top: 20px;
  padding-left: 100px;
  padding-right: 100px;
  ${media.tablet`
    padding-top: 0;
    padding-left: 40px;
    padding-right: 40px;
  `}
`;

const Background = styled.div`
  position: fixed;
  background-image: url(${require("assets/MAMBackgnd.png")});
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  opacity: 0.2;
  pointer-events: none;
  transition: opacity .4s;
`;

const revealUpKeyframes = keyframes`
  from { transform: translateY(105%); }
  to { transform: translateY(0); }
`;

const RevealUp = styled(Div)`
  overflow: hidden;
  & > * {
    ${({ show }) => show && css`
      transform: translateY(105%);
      animation: ${revealUpKeyframes} .7s ${easeLinearQuart};
      animation-delay: 0.7s;
      animation-fill-mode: forwards;
    `}
  }
`;

class Menu extends Component {
  render() {
    const { menuOpen, push, closeMenu,openMenu } = this.props;

    const goTo = to => {
      push(to);
      closeMenu();
    };

    return (
      <Div>
        <Background style={menuOpen ? null : { opacity: 0 }} />
        <Container hide={!menuOpen}>
          <Content>
            <Div marginBottom="50px">
              <RevealUp show={menuOpen}>
                <h1 style={{ marginTop: 0 }}>
                  <A
                  style={{color: socialMed3}}
                    onClick={() => goTo("/")}
                  >
                    LP's Make
                  </A>
                </h1>
              </RevealUp>
              <RevealUp show={menuOpen}>
                <h1>
                  <A
                  style={{color: socialMed1}}
                    onClick={() => goTo("/pride")}
                  >
                    Pride
                  </A>
                </h1>
              </RevealUp>
              <RevealUp show={menuOpen}>
                <h1>
                  <A
                  style={{color: socialMed2}}
                    onClick={() => goTo("/knowhow")}
                  >
                    Know How
                  </A>
                </h1>
              </RevealUp>
              <RevealUp show={menuOpen}>
                <h1>
                  <A
                  style={{color: color8}}
                    onClick={() => goTo("/whoiam")}
                  >
                    Who I Am
                  </A>
                </h1>
              </RevealUp>
              <RevealUp show={menuOpen}>
                <h1>
                  <A
                  style={{color: ice}}
                    href={'https://docs.google.com/viewer?url=https%3A%2F%2Fres.cloudinary.com%2Fprovideup%2Fimage%2Fupload%2Ff_pdf%2Fv1%2Fprovider%2Ftkus29irgsgpxr3elsni.pdf'}
                  >
                    Resume
                  </A>
                </h1>
              </RevealUp>
            </Div>
            <RevealUp show={menuOpen}>
              <Div>
                <ThemeProvider theme={{ color: socialMediaInverseColor }}>
                  <SocialMedia
                  theme={{color: socialMed1}}
                  horizontal justifyContent="center" />
                </ThemeProvider>
              </Div>
            </RevealUp>
            <RevealUp show={menuOpen}>
              <p style={{ marginBottom: 0 }}>
                <A
                  style={{ color: Ice }}
                  href="mailto:vaiiho.nascimbene@gmail.com"
                >
                  nascVi📧Mailbox
                </A>
              </p>
            </RevealUp>
          </Content>
        </Container>
      </Div>
    );
  }
}

export default connect(
  state => ({
    menuOpen: state.menu
  }),
  {
    push,

    openMenu,
    closeMenu
  }
)(Menu);
