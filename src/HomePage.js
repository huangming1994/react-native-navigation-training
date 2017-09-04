/**
 * @flow
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

export default class HomePage extends Component {
  render() {
    console.log('this.props', this.props)
    const { navigate } = this.props.navigation
    return (
      <View>
        <TouchableOpacity onPress={() => navigate('Info')}>
          <Text>这是HomePage</Text>
        </TouchableOpacity>
      </View>
    )
  }
}