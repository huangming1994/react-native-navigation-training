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

export function homePageAction(payload) {
  return { type: 'HOME_PAGE', payload }
}

class HomePage extends Component {
  componentWillMount() {
  }
  componentDidMount() {
    this.props.homePageAction('homePage')
  }
  componentWillReceiveProps() {
    alert('homePage componentWillReceiveProps')
  }
  componentWillUnmount() {
    alert('homePage componentWillUnmount')
  }
  render() {
    console.log('this.props--------------->', this.props)
    const { navigate } = this.props.navigation
    return (
      <View>
        <TouchableOpacity onPress={() => navigate('Info')}>
          <Text>{`这是${this.props.page}`}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.homePage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    homePageAction: compose(dispatch, homePageAction)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)