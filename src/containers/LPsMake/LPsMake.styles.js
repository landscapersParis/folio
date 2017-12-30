import styled from 'styled-components';
import { RevealH1, RevealH2 } from 'theme/types';
import { RevealDiv } from 'theme/grid';
import media from 'theme/media';
import { socialMed1, socialMed2, darklight, darkgreen, light, green } from 'theme/variables';
import DivWithBgImage from 'components/DivWithBgImage/DivWithBgImage';

export const Headline = styled(RevealH1)`
  font-size: 2.5em;
  white-space: nowrap;
  margin-bottom: 0;

  ${media.tablet`
    font-size: 1.5em;
  `}
`;

export const BackgroundDiv = styled(DivWithBgImage).attrs({
  backgroundImageUrl: require('assets/meDamCols.png')
})`
  margin-top: 30px;
  width: 100%;
  height: 100vh;
  background-image: url(${require('assets/meDamCols.png')});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.7;
  border-bottom: 2px solid ${socialMed2}; 
  border-top: 2px solid ${socialMed2};

  ${media.tablet`
    margin-top: 0px;
  `}
`;

export const SubHeadline = styled(RevealH2)`
  color: ${darkgreen};
  margin-top: 10px;

  ${media.tablet`
    font-size: 1.3em;
  `}
`;

export const ImageContainer = styled(RevealDiv)`
  border: 3px solid ${darkgreen};
  background-size: cover;
  opacity: 0.9;
`;
