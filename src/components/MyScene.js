import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

export default class MyScene extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  render() {
    return (
      <View>
        <Text style={{bottom: -100}}>
          <Text style={{padding: 50}}>Hi! My name is {this.props.title}.</Text>
        </Text>
      </View>
    )
  }
}