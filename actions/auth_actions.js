import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types';

  //AsyncStorage store small pieces of data in phone.
  //AsyncStorage.setItem('fb_token', token);
  //AsyncStorage.getItem('fb_token');

export const facebookLogin = () => {
  async (dispatch) => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      //dispatch an action to FB Login is done
      dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
      //start fb login process.
      doFacebookLogin(dispatch);
    }
  }
};

const doFacebookLogin = async (dispatch) => {
  let { type, token } = await Facebook.logInWithReadPermissionAysnc('1885915525026805', {
    permissions: ['public_profile']
  });

  if( type === 'cancel'){
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
}

//code above can be refactor like this in ES6

// export const facebookLogin = () =>  async dispatch => {
//   let token = await AsyncStorage.getItem('fb_token');
//   if (token) {
//     //dispatch an action to FB Login is done
//   } else {
//     //start fb login process.
//   }
// }
//
