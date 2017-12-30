import React, { Component } from 'react';
import { Container, Relative, ProjectsContainer } from 'theme/grid';
import { AcxsContainer, Thumbnail, DescriptionContainer, SubTHead } from './KnowHow.styles';
import { light, socialMed3, pacman } from 'theme/variables';
import { A, P, FixedTitle } from 'theme/types';
import AsyncImage from 'components/AsyncImage/AsyncImage';

const acxs = [
  {
    index: 'August 2017',
    title: 'Webpack Acknowledge',
    thumbnail: require('assets/acxs/GrafikartThumb.png'),
    button: require('assets/GrafikartLogo.png'),
    url: 'https://youtu.be/_KXGVca8uXw',
    description: `
      <p>Un grand merci <A href="https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fcontinue_action%3DQUFFLUhqbDFib3JuMHBVWkcxek1uWGtIbnBRNm9XdExzUXxBQ3Jtc0ttU3VCanRIWXpQWU9oSmR0dWIxZ3QyZVNVRHZyc2U0c0FtYXNHRkpGWmVtQ0FISThTZ0ptQlhhU21uaVZwWUNGZDRLcFlxTlFtU2R1RXpKNzVBLW1ySmkxZEVmR08xaDJ5dEplbGRoUGRvSS14M21WOXhBNlRRU2RIa1ZDSUJ1ZVJIR2ZsV1RIZ2JfUHRPTFgzRjltcGVOVUE1ZTFsQW10di0teUVjNzZaX0ptOFJaMjhpR1p4VmMtN1VQT0hHV1o3Vm5KT01SV0FmNlFXMGhLV3Z4aXMxRTZnSTBR%26action_handle_signin%3Dtrue%26next%3D%252Fresults%253Fsearch_query%253Dgrafikart%2526sp%253D6gMA%26app%3Ddesktop%26hl%3Den&passive=true&service=youtube&uilel=3">Grafikart</A> for the unevitable webpack know-how</p>
      <p>Great added value to french engineering patrimony. We are a big country! 🙆🐓</p>
    `
  },
  {
    index: 'Mai 2017',
    title: 'React & styled-components',
    thumbnail: require('assets/acxs/FroDevThumb.png'),
    button: require('assets/FroDevLogo.png'),
    url: 'https://youtu.be/QR40RON4S-4',
    description: `
      <p>Thank you <A href="https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fapp%3Ddesktop%26action_handle_signin%3Dtrue%26hl%3Den%26next%3D%252Fresults%253Fsp%253D6gMA%2526search_query%253Dfrodev%26continue_action%3DQUFFLUhqbjh6cDlMVVpNSWEyNWFYWVBwZkQ3ODgyY0dVZ3xBQ3Jtc0traHd2cmNmTFBzSG1VOVVKMXQ4VkJJTUIta2hKYXlxbm13d1RGMUJ4WXVoOVRsWDZJUkExZHRoT2tfSFhEYTlINlBDVW85cU83VExOV0t5UG1TVVZEd0dRN09OMjh5ZkY2eEhUZkVKeHBPVjMtRk1FRnNNdDRLZ1piR3dvWTlTWkRSTkpnZ0lFNzJyamZqeWp5VEczRENxTXdIcVdhOUJ3b3ZCa1F3WUJfaktxN2l6RGsyZ1dIUWlYVUI5UW12NHBGN2xTQktPTDNKcEZXTi1aZG9mSW1WWUZzaUl3&passive=true">FroDev</A> for opening the gates of a great and smooth approach of front-end dev</p>
      <p>I surely got to another level thank to your channel 👍. This folio is dedicated to you.🇻🇳</p>
    `
  },
  {
    index: 'January 2017',
    title: 'Great tools and tips with React',
    thumbnail: require('assets/acxs/AnthonyWelcThumb.png'),
    button: require('assets/AnthonyWelcLogo.png'),
    url: 'https://youtu.be/CpYRr_t4AFc',
    description: `
      <p>Merci <A href="https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fhl%3Den%26app%3Ddesktop%26continue_action%3DQUFFLUhqbGxmM3E4UGxmUmhRWDNjbEVzck1jZ0lvUk1EQXxBQ3Jtc0tramhteEZOZ0l5aC1qNDVOS2xkMVZ0cU9JdzJZSE1qQjQwTE05cWpyMEk5NHZrN09zMC1FNEp3VXJzX3B0MEtnRkpEQTVJczlzRnFBZnI2c3pCcm1vXzNiWFpVZjhuclVqOW5nOXlqZFR0OW5kcnB6Rkg1b2lGdjgzVzR4S0M1bThnMmlHcm5EMzV4SW9LTEJEdDVLaWw5VDkxcGlya21wNjZPVF9kbU8tckRQbTRqOWJmY2JmT01IbS1RUDZiekNxNHd2UFA4Sktxc0xnel9kLXRCbDZiU25KYlFR%26action_handle_signin%3Dtrue%26next%3D%252Fresults%253Fsp%253D6gMA%2526search_query%253Danthony%252Bwelc&passive=true&service=youtube&uilel=3">Anthony Welc</A> la France et les frenchy techos!</p>
      <p>C'est toujours un plaisir de retrouver l'élite dans un si beau pays. Bosser, bosser, bosser et être surdimensionné 🐸</p>
    `
  },
  {
    index: 'December 2016',
    title: 'React, Redux and create-react-app',
    thumbnail: require('assets/acxs/RemZolotykhThumb.png'),
    button: require('assets/RemZolotykhLogo.png'),
    url: 'https://youtu.be/5oiXG9f6GO0',
    description: `
      <p>Check and subscribe to <A href="https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fnext%3D%252Fresults%253Fsp%253D6gMA%2526search_query%253Drem%252Bzolotykh%26app%3Ddesktop%26action_handle_signin%3Dtrue%26hl%3Den%26continue_action%3DQUFFLUhqbThwQmk1V2pFQlhHWlFrNXlCc1J6RloxT0E3QXxBQ3Jtc0tsUlJmTmtjekF0a193NXY5bE9fb01JdDlZdndWTk9JNUlybF9zNWluYzl5QlRSVVh2VFdjWW1xZ2haSE04N1Izc3lZUTY1dG9HcHNLU2JFR3hySmVsZTF6Tjg1ZktHZ0xMQzhvQWZXcm1YLXFwN19SOS1QalhNR0xVNHJHeXpkQnpRM2xaTXNLZXd5UWp6QmRDdXhQQ2hHcl9RN1o5ZnVQX1lFeGpGWWo3LXUzWVNvbXp3SmVNOGJWR0wybGFjaXoxcEsxaEJlUm9mY21kcS13eTl1M1VsY05VR3NB&uilel=3&service=youtube">Rem Zolothykh</A> and get fed with react engineering latest updates</p>
      <p>Great science. So much knowledge to be inspired with. 📐</p>
    `
  },
  {
    index: 'November 2016',
    title: 'Express and no-SQL App',
    thumbnail: require('assets/acxs/TraversymediaThumb.png'),
    button: require('assets/TraversymediaLogo.png'),
    url: 'https://youtu.be/R6LUMXrAoCE',
    description: `
      <p>Subscribe to <A href="https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fnext%3D%252Fresults%253Fsp%253D6gMA%2526search_query%253Dtraversy%252Bmedia%26hl%3Den%26app%3Ddesktop%26continue_action%3DQUFFLUhqbDRXRnJqNmhnbkFpalNDWW1PUWpuRXFhWHpHd3xBQ3Jtc0trMzZpTHoyWDdnbjB6bU9oTkN2clR6UUJ3MGRwNEhxbENXLWZ3STM2QTBoMFEwSUZlWEZNTWxQUjAtVHh2RHJBMXRIS29iYmJZbTBCOE1BdEVrZ21oTGZBYXdELWRLeVdzZWlyZWNfVm1hZm8zdHExWllWUDRUZlpFRC03YXlEekd6Rzd0YTg0RjVVZnVmLUZRekhiVENVbTZxc3V1Ym5uaEs2RzE1WkJEeTYyN0R5Mm5FUmMxNGZ0YzRWOFlQaGtZU3VZSkdNT3BkRTAwNzBGczgxUlNmUUduUUVR%26action_handle_signin%3Dtrue&passive=true">Traversy Media</A> and get the latest techs to understand</p>
      <p>Great close up on no-SQL DB solutions here! This is the Node drive injected for modern philosophies to take market parts... 🚄</p>
    `
  },
  {
    index: 'Octobre 2016',
    title: 'Angular & Ionic with php + sql backend',
    thumbnail: require('assets/acxs/HowtomaketutsThumb.png'),
    button: require('assets/HowtomaketutsLogo.png'),
    url: 'https://youtu.be/VybRm1GtibA',
    description: `
      <p>Great Tut <A href="https://accounts.google.com/ServiceLogin?service=youtube&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fhl%3Den%26continue_action%3DQUFFLUhqbGJTdy1sWGl6ZGdpRzdUSjU0ZmFyUW52Ym93d3xBQ3Jtc0tuNEhWQ0plX2NHVXNFd2pVY2lzUGFSazRGWUV5TTQ5SG84QXR0NzlZMHNHSWMtQXZVelRSYTFUYWR5T1lDcWplRTQ1SzEtWXZHamN6NS1SYklkN1hXS3l2c0VSa2dheWI2UGg4ckZBWWM1RjhZakM0THp6MVd5WDZvaU5UbTJqbE9fSlhyQnVocm05VkpqNXh6WXd3NnZyOWcxdWJyd2JKc3dDeFYzci1zd09YVDRpYjFEa2U0ZmFzY05RUkhRdWJXOWFzamJjM2tCQTVRQS0xUXZ6bGVpWElrczdR%26action_handle_signin%3Dtrue%26next%3D%252Fresults%253Fsearch_query%253DHow%252Bto%252BMake%252BTut%252527s%2526sp%253D6gMA%26app%3Ddesktop&uilel=3&passive=true">Howtomaketuts</A> Hihi!</p>
      <p>This was an important one for me to swap php versions and the sql queries changing for the latest releases.ℹ</p>
    `
  },
  {
    index: 'August 2016',
    title: 'E-commerce with React',
    thumbnail: require('assets/acxs/TarunSharmaThumb.png'),
    button: require('assets/TarunSharmaLogo.png'),
    url: 'https://youtu.be/Y8PlKB56iJg',
    description: `
      <p>I was desperetly looking for a model for e-commerce with the framework and I found <A href="https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fapp%3Ddesktop%26hl%3Den%26action_handle_signin%3Dtrue%26continue_action%3DQUFFLUhqbVotVjB2bG1oS01ua1JteWNDdGVZNHAzemgxZ3xBQ3Jtc0trdVpIbVZVeGNyS2RxaDFNR3lYaG0zSy1MUDNmVmVCSEgxTHd0ejEyV19keWg3QzdiYTRUWV9uWDZKaFRmRUtyMndfbS1tWmVYd2pqVnBrek5TR29TVUsxeDFPZjJBS3N0bWRjVTNuS3NRdEtKaXFrbWE4eTVNRllGM21MMGtnWlVVZWt3eGdlWWVlU0NTVmZTNTZ5ejBXSlpoR2doc21ZeUl4WWVMdTlJV01uMlRlYndGcDRjM1o1UWhGVmhjdFZMU2plMTMzZ3lYdkJybV94amJDaTdEMDVYQlhB%26next%3D%252Fresults%253Fsearch_query%253DTarun%252BSharma%2526sp%253D6gMA&passive=true">Tarun Sharma</A> channel, and really well explained videos on state and props within the virtual dom.</p>
      <p>A simple and efficient way to figure out the mutations of react-routers as well.⚛</p>
    `
  },
  {
    index: 'May 2016',
    title: 'Symfony Framework',
    thumbnail: require('assets/acxs/TraversymediaThumb1.png'),
    button: require('assets/TraversymediaLogo.png'),
    url: 'https://youtu.be/HchMW8EhWPU',
    description: `
      <p>This <A href="https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fnext%3D%252Fresults%253Fsp%253D6gMA%2526search_query%253DTraversy%252BMedia%26hl%3Den%26app%3Ddesktop%26continue_action%3DQUFFLUhqbjV3TWxfdXFTSTBEVTVLY2w2WUlwTmRhVmhFd3xBQ3Jtc0tubU5iczVTRER6ZV8taVZlS3hxc2t3RE91ajJuMWNqRS13dkJmb1U5U0tkRURkclA2MDFXaVlFcFp4WFVoTXpFYS1nWGg5Z0xLbFVlX053dHA5akVmSEZKdzVMSWhjR1I1WTNfQlU0ek4waVdiTGxBRS1uODRrR2o2T3NiY2NvWldvbXZmbHB6VDVsZEhZQy0zX2h6SG9WdEpIMFEwWDNuM3ZxWGZnMDZRT1Z0RkU4YkJWVDIwOVk3amFiZVBlSFJJOVNTWFJUN1RFT0lBZ3plTmxzWjBEUkVrdGJn%26action_handle_signin%3Dtrue&passive=true">Traversy Media</A> here, comes with my humble patriotic awakening, and the regular watch at PHP getting better annd better.</p>
      <p>It's the real framework I put interest in, or along side Python Django.🚀</p>
    `
  },
  {
    index: 'February 2016',
    title: 'React & Webpack Intro',
    thumbnail: require('assets/acxs/LearncodeacademyThumb.png'),
    button: require('assets/LearncodeacademyLogo.png'),
    url: 'https://youtu.be/MhkGQAoc7bc',
    description: `
      <p>Intro to the fb frame <A href="https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fnext%3D%252Fresults%253Fsearch_query%253DLearnCode.academy%2526sp%253D6gMA%26action_handle_signin%3Dtrue%26continue_action%3DQUFFLUhqblEzVW1DamNyem9VNExVWjRSU3gtcEcxQm5Ld3xBQ3Jtc0tuMWpZV0ZERDF6d0Vqb2dnZW1HQnRKLXkzTmNENUZ0aThXOGJPZndFMzIwMzlnZHBkY3dsU1JCWnpyNC00MXF1Qnd3a3hBWHpUeThRVGVjX0JXZkVtR2VEeG1oczNuamI4M1pETFgxRlp3aWZUNlhyNl9MN2FPMDVvYkZtRkZrUjJ3U2lvemdiZTBiTGUxdDNoanBGejFpZDlwMTJZNGZvaDRJQ2tPLXQ2ZlVUWFBpMi1sT3pQcG40dVJfRXNaRFNnWTJmQlc2aWRNbjlMOTFNWnY5RS1QVl9CNE9R%26hl%3Den%26app%3Ddesktop&uilel=3&service=youtube">LearnCode.academy</A> and a good head hake with webpack</p>
      <p>More on Node and npm for package manager better understanding.🈺</p>
    `
  },
  {
    index: 'January 2016',
    title: 'DavDev',
    thumbnail: require('assets/acxs/DavDevThumb.png'),
    button: require('assets/DavDevLogo.png'),
    url: 'https://youtu.be/jNOxPKHEJOs',
    description: `
      <p>Add to your sources <A href="https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fapp%3Ddesktop%26action_handle_signin%3Dtrue%26next%3D%252Fresults%253Fsearch_query%253DDaveDevTV%2526sp%253D6gMA%26continue_action%3DQUFFLUhqbHlDOHphTmYzeFo1WHZJaF9GN2l0S09WakJDd3xBQ3Jtc0tsd0FXYXBUcGhWUEJrOGtacC10THdBVGZWWFlSa04wTnJpZWpfWVlXcWNURm84ZVpZbUV5b0k2cTltUEFicTRaUXRCSk9ZeHFBbVBYMjcxeUFsb3B2d2hYV2pjd1ZILXhDNDBEbEE5b2RiTU1MVjZrUTVOLXVTX2FvTEF6bFF4dUFZa1hidUNYUmlpMFJRN2pRc1VtdTNpMWFwVWhKTjRQSFRWbHg0bW83WWRHd18wUlJnZTNPNmRhZ1JtS1dReDlyZEtjejAtX0k0VGZqaFJTcFJDbUNsb3Vsanpn%26hl%3Den&passive=true&service=youtube&uilel=3">Dav Dev TV</A> has been to me a great inibition in the modern apps pardigms.</p>
      <p>And a testing solution like heroku.com couldn't pass away anylonger from my research scope. Thank you Dav Dev. I feel lucky here! 🚚</p>
    `
  },
  {
    index: 'November 2015',
    title: 'Kudvenkat',
    thumbnail: require('assets/acxs/KudvenkatThumb.png'),
    button: require('assets/KudvenkatLogo.png'),
    url: 'https://youtu.be/zKkUN-mJtPQ',
    description: `
      <p>Thx <A href="https://accounts.google.com/ServiceLogin?uilel=3&service=youtube&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fhl%3Den%26continue_action%3DQUFFLUhqbkdGY1NFZldhbFQwbVp2aHJhTU1OTlpzWHV5Z3xBQ3Jtc0trTFdlS0dianNjQVVtYXFxMy10a1lWOERVZUVlN3ZCMFBuRWtBcTNtcFlYODdlTGRXd2FFaHR2VUJBcTBGSjZKNW9mekxtbkphd244UTQ2RnIyYmY4RlhJSG5iZnBsNVhxLVJuYy16eGNYQjVUWW1IR3g2aHRhUDJYazlIcUR2Y3dXUnp3ZGZjM1pQTUdRZ3g3c2R0dU5UalQ1RmNVSHktczRJNWR0cjN6ajM5c1FTb0xra0Rrb0V5TXhNT2ViaHg4c0Fwc19zS1hKSGF5UDlhcDRxVXpQSF9VNWZ3%26app%3Ddesktop%26action_handle_signin%3Dtrue%26next%3D%252Fresults%253Fsp%253D6gMA%2526search_query%253Dkrudvenkat">Krudvenkat</A> early enough Angular tutorial to step up the train of the marvelous framework</p>
      <p>We're Angular5 in a matter of 2 years and a half what the heck!?.🚅</p>
    `
  },
  {
    index: 'Novembre 2014',
    title: 'Acciocode',
    thumbnail: require('assets/acxs/AcciocodeThumb.png'),
    button: require('assets/AcciocodeLogo.png'),
    url: 'https://youtu.be/ofASsumsf7E',
    description: `
      <p>The massive channel <A href="https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fhl%3Den%26app%3Ddesktop%26next%3D%252Fresults%253Fsearch_query%253DAccio%252BCode%2526sp%253D6gMA%26continue_action%3DQUFFLUhqbWFFakYyTE53WWtGQzJvWi1fQ3pXNm5mWWZFd3xBQ3Jtc0trUVk0Uk9mUC1fRFU2YU9NU3BfbmxUZExuSVRmbDBiWGM0VHVPM3U5MFl5TUJIYVFBcnJ0R1ZfVjV4WlduWUFVaFo2dE5wNDVmVTUxTEdwMnBqNm1nOU1YNllLeDQ2OUVBcl8zeUtyYV8tLTRCbkhndkJhYWhfSUZ5SjZ2ekRUNThPU3ByTkRYUFZXZ2tkcU5BS1NyR3h6cE9MUnIycXRqdVVHVFpjTng3d00tSjJNMU8zZFVySVhJUnRBWE90TlVNX19aRG51Qk9TQzhXOUJPTmh5STg0b3plcDV3%26action_handle_signin%3Dtrue&uilel=3&service=youtube&passive=true">Accio Code</A> I headed to learn AngularJS Bootstrap, SCSS or LESS styling architechtures, Node and dev tools like  Git, NPM, Grunt, Gulp, Bower...</p>
      <p>This was a wordpress project I was given the chance to revamp, knowing therefore Angular was taking serious options on the development market places.📰</p>
    `
  },
  {
    index: 'September 2014',
    title: 'Drupal 7',
    thumbnail: require('assets/acxs/LevelUpTutsThumb.png'),
    button: require('assets/LevelUpTutsLogo.png'),
    url: 'https://youtu.be/-cUWFLBZU5I',
    description: `
      <p>To compare CMS, I had a look at <A href="https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fhl%3Den%26app%3Ddesktop%26continue_action%3DQUFFLUhqbFdLbmNzSUw1RU9nSGR2eVFHdzFTSnZzLURvZ3xBQ3Jtc0tuUUVuUC02QnMyVVE3c2ZkdUtMOWJZbS0zdDRCWlZfS0Y2czU2bXVEenVkNU5nZWY3UXk3cWNoMzFrRXB2a2ZpQlN6aFdHbk9xTUlGM1RuRTA1NF9qajNNSUtRLWlOell0bHl3dkExQ0trYmpZUWEzNS1HX2VyYVV0ODZGQ1JzeXVTY2lKYlFEMUdObXhMMWRkWjVKWktyOFBZbUhvSkRrVWN3SWpoSUhzb2pVUFdMLWhoUk1US3NMcmdGcXJRaGJPY2g4VkpvRXZDOFdLQUFzRWtCODN2MHAtcU1n%26action_handle_signin%3Dtrue%26next%3D%252Fresults%253Fsp%253D6gMA%2526search_query%253Dleveluptuts&passive=true&service=youtube&uilel=3">LevelUpTuts</A>. But Scott is like a mine of knowledge.</p>
      <p>And the complexity of the architecture would soon get me interested to different other frameworks.🖼</p>
    `
  },
  {
    index: 'April 2014',
    title: 'JS bascics',
    thumbnail: require('assets/acxs/ThenewbostonThumb1.png'),
    button: require('assets/ThenewbostonLogo.png'),
    url: 'https://youtu.be/yQaAGmHNn9s',
    description: `
      <p>Coming back to <A href="https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fnext%3D%252Fresults%253Fsp%253D6gMA%2526search_query%253Drem%252Bzolotykh%26app%3Ddesktop%26action_handle_signin%3Dtrue%26hl%3Den%26continue_action%3DQUFFLUhqbThwQmk1V2pFQlhHWlFrNXlCc1J6RloxT0E3QXxBQ3Jtc0tsUlJmTmtjekF0a193NXY5bE9fb01JdDlZdndWTk9JNUlybF9zNWluYzl5QlRSVVh2VFdjWW1xZ2haSE04N1Izc3lZUTY1dG9HcHNLU2JFR3hySmVsZTF6Tjg1ZktHZ0xMQzhvQWZXcm1YLXFwN19SOS1QalhNR0xVNHJHeXpkQnpRM2xaTXNLZXd5UWp6QmRDdXhQQ2hHcl9RN1o5ZnVQX1lFeGpGWWo3LXUzWVNvbXp3SmVNOGJWR0wybGFjaXoxcEsxaEJlUm9mY21kcS13eTl1M1VsY05VR3NB&uilel=3&service=youtube">thenewboston</A> and get serious bases for dynamic web dev was actually logical dialectic after my internship at pydio(anciently Ajaxplorer</p>
      <p>I was really understanding there was a cloud growing smooth.🌤</p>
    `
  },
  {
    index: 'March 2014',
    title: 'Jquery and css for Mobile devices',
    thumbnail: require('assets/acxs/SamCoganThumb.png'),
    button: require('assets/SamCoganLogo.png'),
    url: 'https://youtu.be/bsthKhTHguI',
    description: `
      <p>The first step with <A href="https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fhl%3Den%26app%3Ddesktop%26next%3D%252Fresults%253Fsearch_query%253DSam%252BCogan%2526sp%253D6gMA%26continue_action%3DQUFFLUhqa2d1aHdPaFM0WGd5QmR0Qmw2MVMtMi0tNjBkd3xBQ3Jtc0ttVFc2UzVrOGtCR0l4UTM3V0FRTVpfVHBocXQwNng2SVpKbVZYaWM3UlJBMlYxRGpXcHNDRzd4d2tsWDFvY3NpaW5BWWNJcXJZQlhNV3IyTllVSFl4Smc2OENiMUUxbG5ZRlg0YkNXdDE3aHB3ei1XTUZOMzBFblZOQWh5U255V05yd3FlbVBtak82cG1NTmN6WUZZaEdkMjcySUEyNzhFREZ1NnJWUzVoV0t4N3lSOFA2cDNBVUp2T09iOUM2Yk51T1E0cXBSNUM0TlBUWFdvMzQ2U3BROEI3ZmJR%26action_handle_signin%3Dtrue&uilel=3&service=youtube&passive=true">Sam Cogan</A> in responsive design matters generation.</p>
      <p>I would have chosen to work with cms more often before this course that I was inspired to follow from my JS teacher M. Azria(GRETA) at first.📵</p>
    `
  },
  {
    index: 'February 2014',
    title: 'Intro to JEE Programming',
    thumbnail: require('assets/acxs/ArthurVinThumb.png'),
    button: require('assets/ArthurVinLogo.png'),
    url: 'https://youtu.be/R0dogNWjqw8',
    description: `
      <p>This JEE series with <A href="https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fnext%3D%252Fresults%253Fsp%253D6gMA%2526search_query%253Drem%252Bzolotykh%26app%3Ddesktop%26action_handle_signin%3Dtrue%26hl%3Den%26continue_action%3DQUFFLUhqbThwQmk1V2pFQlhHWlFrNXlCc1J6RloxT0E3QXxBQ3Jtc0tsUlJmTmtjekF0a193NXY5bE9fb01JdDlZdndWTk9JNUlybF9zNWluYzl5QlRSVVh2VFdjWW1xZ2haSE04N1Izc3lZUTY1dG9HcHNLU2JFR3hySmVsZTF6Tjg1ZktHZ0xMQzhvQWZXcm1YLXFwN19SOS1QalhNR0xVNHJHeXpkQnpRM2xaTXNLZXd5UWp6QmRDdXhQQ2hHcl9RN1o5ZnVQX1lFeGpGWWo3LXUzWVNvbXp3SmVNOGJWR0wybGFjaXoxcEsxaEJlUm9mY21kcS13eTl1M1VsY05VR3NB&uilel=3&service=youtube">Arthur Vin</A> was a way for me to value even more java courses I was following.</p>
      <p>I really needed less abstract and get a tomcat server on the run and practice subversion.🕴</p>
    `
  },
  {
    index: 'December 2013',
    title: 'CMS Learning',
    thumbnail: require('assets/acxs/Concrete5Thumb.png'),
    button: require('assets/Concrete5Logo.png'),
    url: 'https://youtu.be/igRoV2EI92c',
    description: `
      <p>My CMS prior went to <A href="https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fnext%3D%252Fresults%253Fsp%253D6gMA%2526search_query%253Dconcrete5%26hl%3Den%26continue_action%3DQUFFLUhqbGZ2cjJJNXIwRkRkeklHSGN4Y05aZlFWaVFXZ3xBQ3Jtc0ttVGNyeWJkbzhDUF9RTXpiN250cTVIcEZoSGgyQjF3ajRKa19jR041aWdGZmZDNFh6U3RYSzFnbUxzejBETmoyc0tKQ2l0ZmNnSWViM0ROSDhza012T3FOR3lra1BkTWN4Yk9iZXo5N3A0Nkt3QWkzYXV1OHRkN0I5dDBWbGNqeENsRXQ5a3JPbGNmc0IxMlZvV3ZSQXJJREVEaXpBOEdyN0tSLXN1dkp5OXFYeTF6SXNPdW9vNTl0emFpbXRrNWFrM05xdDdfcUNQMllLcjNnNW9LMXZGWlB6SWd3%26app%3Ddesktop%26action_handle_signin%3Dtrue&passive=true&service=youtube&uilel=3">Concrete5</A> because I love to see a business grow.</p>
      <p>I did sell wordpress blogs and services around the beast, but Concrete5 was by the time a choice to personalize my business project. And being major PHP developped in the earlier versions, I found it more of my convinience.🛃</p>
    `
  },
  {
    index: 'November 2013',
    title: 'Cloud Computing | Business development',
    thumbnail: require('assets/acxs/ElithecomputerguyThumb.png'),
    button: require('assets/ElithecomputerguyLogo.png'),
    url: 'https://youtu.be/rL8RSFQG8do',
    description: `
      <p><A href="https://accounts.google.com/ServiceLogin?passive=true&uilel=3&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fnext%3D%252Fresults%253Fsp%253D6gMA%2526search_query%253Deveryman%252Bit%26action_handle_signin%3Dtrue%26continue_action%3DQUFFLUhqbEZIbXE2SFdudXROdEZjVmxjTWxmbE1mWi0zUXxBQ3Jtc0tuZ29yUzg1YnlqMzV4Q0FHT01kVE9QNm9vYmVUaElGd2owTkkwUEVvZ1NaUjRJZ1hNZ29HRTJSeVRJd1NkQWIxMUJLVnRxNTVsd1J3Q1Zjc2h5TG9GaWFRcUZQY2dydmpreThKSGlLRmgxUGJWVTJTQ3NmYUtWRFlkTWNzMWVnZVdmTkU4REZCbVQyT3BWeklMeGhBNk8tN21jdV9GN3JNQlc2N1hnT1pWeHM5YTRhSnFrUHRrXzNpNjM3X2M3TUg2SXA1cllEQkw1WlFlMEFXVEFiSTZBQkE2cmt3%26hl%3Den%26app%3Ddesktop&service=youtube">Eli the computer guy</A> is my first personal investment in cloud computing science.</p>
      <p>I also got to know about different infras following this big youtuber.💻</p>
    `
  },
  {
    index: 'October 2013',
    title: 'PHP bascics',
    thumbnail: require('assets/acxs/ThenewbostonThumb.png'),
    button: require('assets/ThenewbostonLogo.png'),
    url: 'https://youtu.be/EwJujkxYLZs',
    description: `
      <p>My first channel <A href="https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fnext%3D%252Fresults%253Fsp%253D6gMA%2526search_query%253Drem%252Bzolotykh%26app%3Ddesktop%26action_handle_signin%3Dtrue%26hl%3Den%26continue_action%3DQUFFLUhqbThwQmk1V2pFQlhHWlFrNXlCc1J6RloxT0E3QXxBQ3Jtc0tsUlJmTmtjekF0a193NXY5bE9fb01JdDlZdndWTk9JNUlybF9zNWluYzl5QlRSVVh2VFdjWW1xZ2haSE04N1Izc3lZUTY1dG9HcHNLU2JFR3hySmVsZTF6Tjg1ZktHZ0xMQzhvQWZXcm1YLXFwN19SOS1QalhNR0xVNHJHeXpkQnpRM2xaTXNLZXd5UWp6QmRDdXhQQ2hHcl9RN1o5ZnVQX1lFeGpGWWo3LXUzWVNvbXp3SmVNOGJWR0wybGFjaXoxcEsxaEJlUm9mY21kcS13eTl1M1VsY05VR3NB&uilel=3&service=youtube">thenewboston</A> is a straight look into programming and the great php community</p>
      <p>Force rudiments with my Mac back then, then.🖥</p>
    `
  }
];

class KnowHow extends Component {
  render() {
    return (
      <div>
        <FixedTitle>Know How</FixedTitle>
          <ProjectsContainer>
            <Container>
              <h3
              style={{ color: light }}>Here resides a pannel of my knowledge base.</h3>
              <p
              style={{ color: light }}>
              It's with great honor I've established a sample archive of main tutorials that got me fullstack in 3 years understanding different languages, paradigms and philosophies. 
              <br /><br />This is Youtube, because Youtube rocks and gives you a concrete idea in less time in general, but I may have followed as many docs and blog tutorials during this periode too 📚.</p>
              <p
              style={{ color: light }}>
              Like these pages underneath ie:</p>
              <ul>
                <li
                style={{ color: light }}>
                <A href="https://www.codereviewvideos.com/course/symfony2-tutorial-for-beginners">Symfony</A>
                </li>
                <li 
                style={{ color: light }}>
                <A href="https://reactjs.net/getting-started/tutorial.html">ReactJS.NET</A></li>
                <li
                style={{ color: light }}>
                <A href="http://yeoman.io/generators/">Yeoman</A> Angular, Backbone, React project solutions builder</li>
                <li
                style={{ color: light }}>
                <A href="https://jenkins.io/">Jenkins CI</A> for OSX.
                </li>
              </ul>
              <p 
              style={{ color: light }}>
                 Here's a special one to the guys I mansion here. without you I could not make it. Your generousity surely will get you reach wisdom, all the best on that one 🙏.<br />
                 I'll be seing you around, don't hesitate to join me, any time. 
                 <br />
                 Cheers!
              </p>
              {acxs.map(({ url, thumbnail, button, description, title, index }, i) =>
                <AcxsContainer key={i}>
                  <Thumbnail target="_blank" href={url}>
                    <Relative>
                      <AsyncImage className="thumbnail" src={thumbnail} alt="thumbnail"/>
                      <AsyncImage className="button" src={button} alt="button"/>
                    </Relative>
                  </Thumbnail>
                  <Relative>
                    <DescriptionContainer>
                      <SubTHead>
                        <h1
                        style={{ color: socialMed3 }}>{ index }</h1>
                      </SubTHead>
                      <h4
                      style={{ color: pacman }}>{title}</h4>
                      <div
                      style={{ color: light }} className="description" dangerouslySetInnerHTML={{ __html: description }}/>
                    </DescriptionContainer>
                  </Relative>
                </AcxsContainer>
              )}
              <p
              style={{ color: light }}>
              You're more than welcome to check up my repositories and references on my <A href="https://github.com/nascvi">Github</A> account and reach me on the social meds of course.</p>
            </Container>
          </ProjectsContainer>
          <P textCenter>
            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            width="71" height="87" viewBox="0 0 141 157">
                <image id="image0" width="71" height="87" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACdBAMAAAB7puYNAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEUAAAD/tM7///8hOpUA AACg/oJEAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAH dElNRQfhCxcJNwFDA5edAAAAi0lEQVRo3u3UQQ6CMBRFUdANFF0BLAH3vzdjGpNPQxEaZz13+Pg9 Q4ZBkv7XOG1LHE7D+6nR4/Tn/DLOWpz+nI/xWHJz8W5vTxxO6LZsmwuj3Dmc2P2VW4v7Z2XncL6N B/e1fc/i9OvEf1a8Pdo5nOhcjcPhcDgcDofD4eTvZzcOJ1qpYeNwJEmq9QYOPcbQiderHAAAACV0 RVh0ZGF0ZTpjcmVhdGUAMjAxNy0xMS0yM1QwOTo1NTowMS0wNzowMK3DQ1oAAAAldEVYdGRhdGU6 bW9kaWZ5ADIwMTctMTEtMjNUMDk6NTU6MDEtMDc6MDDcnvvmAAAAAElFTkSuQmCC"
                />
            </svg>
          </P>
      </div>
    );
  }
}

export default KnowHow;