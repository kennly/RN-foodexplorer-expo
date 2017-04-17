import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import * as actions from '../actions'

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    // this temporary code will remove the storage token
    AsyncStorage.removeItem('fb_token')
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps){
    //user successfully complete authentication.
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if(props.token){
      this.props.navigation.navigate('map')
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
