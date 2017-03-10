/**
 * Created by joshjahans on 10/03/2017.
 */
import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Root from './Root'

export default class Setup extends PureComponent {
  render () {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}
