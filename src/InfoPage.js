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

  render() {
    const { navigation } = this.props
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>{`这是${this.props.page}`}</Text>
        </TouchableOpacity>
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
    infoPageAction: compose(dispatch, infoPageAction)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage)
