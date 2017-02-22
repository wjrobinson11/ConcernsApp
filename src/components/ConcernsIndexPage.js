import React, { Component } from 'react';
import { View } from 'react-native';
import _ from 'lodash'
import ConcernListItem from './ConcernListItem';
import AddConcernButton from './AddConcernButton';
import db from '../db';

export default class ConcernsIndexPage extends Component {
  render() {
    // TODO make list items
    let listItems = _.map(db.concerns, (v, k) => <ConcernListItem id={k} key={k} />)

    return (
      <View style={{marginTop: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 3}}>
          <AddConcernButton onPressed={this.props.onAddConcernButtonPressed} />
        </View>
        <View>{listItems}</View>
      </View>
    );
  }
}