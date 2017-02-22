import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import _ from 'lodash'
import db from '../db.js'

export default class ConcernForm extends Component {
  constructor(props) {
    super(props)
    this.state = {description: "Inspector fadget"}
  }

  render() {
    return (
      <View style={{marginTop: 30}}>
        <TextInput
          style={{height: 40, borderColor: 'orange', borderWidth: 1}}
          onChangeText={(text) => this.setState({description: text})}
          multiline={true}
          value={this.state.description}
        />
        <TouchableHighlight onPress={() => this.submitForm()}>
          <Text style={{color: '#1e90ff', fontSize: 20, width: 100, textAlign: 'center'}}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }

  submitForm() {
    attrs = _.pick(this.state, ['description'])
    if (this.props.id === undefined) {
      db.create('concerns', attrs)
    } else {
      db.concerns[this.props.id] = attrs
    }
    this.props.onClosed()
  }
}