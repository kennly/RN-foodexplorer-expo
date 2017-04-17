import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import firebase from 'firebase';

import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types';

const config = {
    apiKey: "AIzaSyBMxI41c8SRsRcHbvizel7ZfC9mWht7OUA",
    authDomain: "rnfirebase-da851.firebaseapp.com",
    databaseURL: "https://rnfirebase-da851.firebaseio.com",
    projectId: "rnfirebase-da851",
    storageBucket: "rnfirebase-da851.appspot.com",
    messagingSenderId: "527699718313"
};
firebase.initializeApp(config);

//AsyncStorage store small pieces of data in phone.
//AsyncStorage.setItem('fb_token', token);
//AsyncStorage.getItem('fb_token');
//es6 reafactor-> removed outer {} in facebookLogin
export const facebookLogin = () =>
  async (dispatch) => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      //dispatch an action to FB Login is done
      dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
      // start fb login process.
      doFacebookLogin(dispatch);
    }
  }

const doFacebookLogin = async (dispatch) => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('1885915525026805', {
    permissions: ['public_profile','email']
  });

  if( type === 'cancel'){
    this.props.navigation.navigate('welcome')
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await firebaseSave(token)

  await dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });

}


const firebaseSave = async (token) => {
  try {
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    const user = await firebase.auth().signInWithCredential(credential);
    firebase.database().ref(`/users/${user.uid}/profile`).set({
      name: user.displayName,
      email: user.email,
      avatar: user.photoURL
    })

    alert('saved in firebase');

    } catch (error) {
        console.log(error.message);
        //do something here
    }
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
