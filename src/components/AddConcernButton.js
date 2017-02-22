import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';

export default class AddConcernButton extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPressed}>
        <Text style={{color: '#1e90ff', fontSize: 20, width: 40, textAlign: 'center'}}>Add</Text>
      </TouchableHighlight>
    )
  }
}