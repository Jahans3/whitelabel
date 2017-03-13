/**
 * Created by joshjahans on 10/03/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import SceneDirectory from './SceneDirectory'
import HomeScene from '../HomeScene'

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({ dispatch })
const mergeProps = ({ state }, { dispatch }, ownProps) => {
  const routes = [
    {
      title: 'Home',
      id: 'home',
      index: 0,
      component: HomeScene,
      props: {},
      leftButtonIcon: 'ios-menu',
      rightButtonIcon: 'ios-pin'
    }
  ]
  return {
    ...ownProps,
    routes
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SceneDirectory)
