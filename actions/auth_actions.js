import { AsyncStorage } from 'react-native';

import {
  FACEBOOK_LOGIN_SUCCESS
} from './types';

  //AsyncStorage store small pieces of data in phone.
  //AsyncStorage.setItem('fb_token', token);
  //AsyncStorage.getItem('fb_token');

export const facebookLogin = () => {
  async (dispatch) => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      //dispatch an action to FB Login is done
    } else {
      //start fb login process.
    }
  }
};

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
