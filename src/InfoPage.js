/**
 * @flow
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

export function infoPageReducer(state = '', action) {
  switch (action.type) {
    case 'INFO_PAGE':
      return action.payload
    default:
      return state
  }
}

export default class InfoPage extends Component {
  componentWillMount() {
    alert('InfoPage componentWillMount')
  }
  componentDidMount() {
    alert('InfoPage componentDidMount')
  }
  componentWillReceiveProps() {
    alert('InfoPage componentWillReceiveProps')
  }
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
