/**
 * @flow
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { homePageAction } from './HomePage'


export function infoPageReducer(state = '', action) {
  switch (action.type) {
    case 'INFO_PAGE':
      return action.payload
    default:
      return state
  }
}

function infoPageAction() {
  return { type: 'INFO_PAGE', payload: 'infoPage' }
}

class InfoPage extends Component {
  componentWillMount() {
  }
  componentDidMount() {
    this.props.infoPageAction()
  }
  componentWillReceiveProps() {
    alert('InfoPage componentWillReceiveProps')
  }
  componentWillUnmount() {
    alert('InfoPage componentWillUnmount')
  }
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Button
          title="不改变props返回"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="改变props返回"
          onPress={() => {
            this.props.homePageAction('homePage props改变')
            navigation.goBack()
          }}
        />
        <Text>{`这是${this.props.page}`}</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.infoPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    infoPageAction: compose(dispatch, infoPageAction),
    homePageAction: compose(dispatch, homePageAction),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage)
