import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';
import { AppLoading } from 'expo';
import _ from 'lodash'

const SLIDE_DATA = [
  {text: 'Welcome to JobApp', color: '#03A9F4'},
  {text: 'This is screen two', color: '#A6E7B3'},
  {text: 'Set your location, then swipe away', color: '#DFE9E2'}
];


class WelcomeScreen extends Component {
  state = { token: null }

  constructor(props){
    super(props)
    this.onSlidesComplete = this.onSlidesComplete.bind(this);
  }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');
    AsyncStorage.removeItem('fb_token')
    if (token){
      this.props.navigation.navigate('map');
      this.setState({ token })
    }else {
      this.setState({ token: false });
    }

  }

  onSlidesComplete(){
    this.props.navigation.navigate('auth');
  }

  render() {
    if (_.isNull(this.state.token)){
      return <AppLoading />
    }
    return (
        <Slides
          data={SLIDE_DATA}
          onComplete={this.onSlidesComplete}
        />
    )
  }
}

export default WelcomeScreen;
