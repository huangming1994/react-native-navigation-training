/**
 * @flow
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

export default class InfoPage extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>这是InfoPage</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
