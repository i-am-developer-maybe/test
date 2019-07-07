import { combineReducers } from 'redux';
import gallery from './gallery';
import communication from './communication';

export default combineReducers({
  gallery,
  communication
});
