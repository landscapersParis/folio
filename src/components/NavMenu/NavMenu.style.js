import styled from 'styled-components';
import { Fixed } from 'theme/grid';
import { Link } from 'react-router-dom';
import { pacman, socialMed2, ice, backdark} from 'theme/variables';
import { A } from 'theme/types';

export const Container = styled(Fixed)`
  padding-top: 0.4%;
  padding-left: 1%;
  padding-right: 1%;
  margin-left: 40%;
  width: 425px;
  height: 25px;
  font-size: 20px;
  top: 50px;
  right: 5%;
  z-index: 99;
  border-radius: 3px;
  background-color: ${backdark};
`;

export const StyledLink = styled(Link)`
  margin-left: 5px;
  margin-right: 8px;
  position: relative;
  color: ${ice};
  transition: color .3s;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: ${pacman};
  }
  &:after {
    content: ' ';
    z-index: -1;
    position: absolute;
    top: 0;
    left: -20px;
    width: calc(100% + 30px);
    height: 0;
    transition: height .3s;
  }

  &:hover::after {
    left: 5%;
    height: 70%;
    width: 90%;
    border-top: 1px solid ${ice};
    border-bottom: 1px solid ${ice};
    border-radius: 2px;
    transform: scale(1.4, 1.9);
  }
`;

export const StyledA = styled(A)`
  margin-left: 8px;
  position: relative;
  transition: color .3s;
  color: ${socialMed2};
  font-weight: bold;

  &:hover {
    color: ${pacman};
    background-color: transparent;
  
  &:after {
    content: ' ';
    z-index: -1;
    position: absolute;
    top: 0;
    left: -20px;
    width: calc(100% + 30px);
    height: 0;
    transition: height .3s;
  }

  &:hover::after {
    left: 5%;
    height: 70%;
    width: 90%;
    border-top: 1px solid ${ice};
    border-bottom: 1px solid ${ice};
    border-radius: 2px;
    transform: scale(1.4, 1.9);
    background-color: transparent;
    }
`;
