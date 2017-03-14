/**
 * Created by joshjahans on 10/03/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import SceneDirectory from './SceneDirectory'
import HomeScene from '../HomeScene'
import { Buttons } from '../../subcomponents'

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
      leftButtonComponent: Buttons.HeaderButton,
      leftProps: {
        iconName: 'ios-home',
        onPress: () => { console.log('go home kiddo') }
      },
      rightButtonComponent: Buttons.HeaderButton,
      rightProps: {
        iconName: 'ios-pin',
        onPress: () => { console.log('tappy tap') }
      }
    }
  ]
  return {
    ...ownProps,
    routes
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SceneDirectory)
