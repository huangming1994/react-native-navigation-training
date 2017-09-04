/**
 * @flow
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { StackNavigator } from 'react-navigation'
import HomePage, { homePageReducer } from './HomePage'
import InfoPage, { infoPageReducer } from './InfoPage'

const reducers = combineReducers({
  homePage: homePageReducer,
  infoPage: infoPageReducer,
})

const App = StackNavigator({
  Home: { screen: HomePage },
  Info: { screen: InfoPage },
})

const store = createStore(reducers)

export default class HMNavigator extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}

