import { combineReducers } from 'redux';
import auth from './auth_reducer';
import foursquare from './foursquare_reducers'

export default combineReducers({
  //es6 auth: auth
  auth,
  foursquare
});
