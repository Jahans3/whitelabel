/**
 * Created by joshjahans on 15/03/2017.
 */
import React, { Component } from 'react'
import { loadIcons } from './icons'
import { Navigation } from 'react-native-navigation'
import config from './components/scenes'

export default class App extends Component {
  constructor () {
    super()
    loadIcons().then(() => {
      this.begin()
    })
  }

  begin () {
    Navigation.startTabBasedApp(config)
  }
}
