/**
 * Created by joshjahans on 10/03/2017.
 */
import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Root from './Root'

export default () => (
  <Provider store={store}>
    <Root />
  </Provider>
)
