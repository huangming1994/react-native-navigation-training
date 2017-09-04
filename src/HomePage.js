/**
 * @flow
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'redux'

export function homePageReducer(state = '', action) {
  switch (action.type) {
    case 'HOME_PAGE':
      return action.payload
    default:
      return state
  }
}

function homePageAction() {
  return { type: 'HOME_PAGE', payload: 111 }
}

class HomePage extends Component {
  componentWillMount() {
  }
  componentDidMount() {
    this.props.homePageAction()
  }
  render() {
    console.log('this.props', this.props)
    const { navigate } = this.props.navigation
    return (
      <View>
        <TouchableOpacity onPress={() => navigate('Info')}>
          <Text>这是HomePage</Text>
          <Text>{this.props.stuff}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    stuff: state.homePage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    homePageAction: compose(dispatch, homePageAction)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)