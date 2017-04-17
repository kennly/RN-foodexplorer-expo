import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  {text: 'Welcome to JobApp', color: '#03A9F4'},
  {text: 'This is screen two', color: '#A6E7B3'},
  {text: 'Set your location, then swipe away', color: '#DFE9E2'}
];


class WelcomeScreen extends Component {
  constructor(props){
    super(props)
    this.onSlidesComplete = this.onSlidesComplete.bind(this);
  }

  onSlidesComplete(){
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
        <Slides
          data={SLIDE_DATA}
          onComplete={this.onSlidesComplete}
        />
    )
  }
}

export default WelcomeScreen;
