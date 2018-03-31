import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import loadingProgress from './loadingProgress';
import menu from './menu';
import { reducer as nextArrowReducer } from 'components/NextArrow/NextArrow';
import { reducer as previousArrowReducer } from 'components/PreviousArrow/PreviousArrow';
import { reducer as prideReducer } from 'containers/Pride/Pride';
import { reducer as whoiamReducer } from 'containers/WhoIAm/WhoIAm';
import { reducer as scrollReducer } from 'scroll';
import audiosReducer from './audios';
import loadingStatus from './loadingStatus';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  loadingProgress,
  menu,
  loadingStatus,
  audios: audiosReducer,
  // scroll
  scroll: scrollReducer,
  // components/containers reducers
  nextArrow: nextArrowReducer,
  previousArrow: previousArrowReducer,
  pride: prideReducer,
  whoiam: whoiamReducer
});
