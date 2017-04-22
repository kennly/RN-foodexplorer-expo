import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

class FlatList extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    }

  };

  componentDidMount() {
    this.makeRemoteRequest()
  }

  makeRemoteRequest() {
    const { page, seed } = this.state;
    const url = ''
    this.setState({ loading : true});
    fetch(url)
      .then(res => res.json{})
      .then(res => {
        this.setState{(
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        )};
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  render(){

  }

}
