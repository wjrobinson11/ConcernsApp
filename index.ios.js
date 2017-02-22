/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import ConcernsIndexPage from './src/components/ConcernsIndexPage';
import ConcernForm from './src/components/ConcernForm';
import db from './src/db.js'

export default class ConcernsApp extends Component {
  constructor(props) {
    super(props)
    this.state = {currentPage: 'ConcernsIndexPage'}
  }

  switchToConcernForm() {
    this.setState({currentPage: 'ConcernsCreatePage'})
  }

  switchToConcernsIndexPage() {
    this.setState({currentPage: 'ConcernsIndexPage'})
  }

  render() {
    if (this.state.currentPage === 'ConcernsIndexPage') {
      console.log(db.concerns)
      return (
        <ConcernsIndexPage onAddConcernButtonPressed={() => this.switchToConcernForm()} />
      )
    } else if (this.state.currentPage === 'ConcernsCreatePage') {
      return (
        <ConcernForm onClosed={() => this.switchToConcernsIndexPage()} />
      )
    } else {
      // uhh...
    }
  }
}

AppRegistry.registerComponent('ConcernsApp', () => ConcernsApp);