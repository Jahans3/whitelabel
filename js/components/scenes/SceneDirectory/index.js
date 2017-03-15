/**
 * Created by joshjahans on 10/03/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation'
import SceneDirectory from './SceneDirectory'

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({ dispatch })
const mergeProps = ({ state }, { dispatch }, ownProps) => {

  return {
    ...ownProps
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SceneDirectory)
