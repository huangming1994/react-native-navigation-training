/**
 * @flow
 */
import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import HomePage from './HomePage'
import InfoPage from './InfoPage'

const App = StackNavigator({
  Home: { screen: HomePage },
  Info: { screen: InfoPage },
})

export default class HMNavigator extends Component {
  render() {
    return (
      <App/>
    )
  }
}

