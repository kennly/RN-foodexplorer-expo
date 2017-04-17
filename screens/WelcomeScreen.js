import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';
import { AppLoading } from 'expo';
import _ from 'lodash'
import firebase from 'firebase';

const SLIDE_DATA = [
  {text: 'Welcome to this demo App', color: '#03A9F4'},
  {text: 'This is screen two', color: '#A6E7B3'},
  {text: 'This is screen three', color: '#DFE9E2'}
];

class WelcomeScreen extends Component {
  state = { token: null, loggedIn: false }

  constructor(props){
    super(props)
    this.onSlidesComplete = this.onSlidesComplete.bind(this);
  }

  async componentWillMount() {
    await firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ loggedIn: true})
        this.props.navigation.navigate('map');
      }else {
        this.setState({ loggedIn: false})
      }
      console.log(this.state);
    });
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
