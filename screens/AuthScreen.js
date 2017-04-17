import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import * as actions from '../actions'
import firebase from 'firebase'

class AuthScreen extends Component {

  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps){
    //user successfully complete authentication.
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    console.log(props, 'Auth props')
    if(props.token){
      this.props.navigation.navigate('map');
    }else {
      console.log('in cancel mode')
      this.props.navigation.navigate('welcome');
    }
  }

  render() {
    return (
      <View />
    )
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token }
}

export default connect(mapStateToProps, actions)(AuthScreen);
