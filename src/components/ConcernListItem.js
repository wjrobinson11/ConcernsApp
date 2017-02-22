import React, { Component } from 'react';
import { View, Text } from 'react-native';
import db from '../db'

export default ({id}) => {
  const concern = db.concerns[id]
  return (
    <View style={{height: 60, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: '#f5f5f5', padding: 10}}>
      <Text style={{flex: 9}}>{concern.description}</Text>
      <Text style={{flex: 1, textAlign:'right'}}>{concern.timeSensitivity}</Text>
    </View>
  )
}