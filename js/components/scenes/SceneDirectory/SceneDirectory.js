/**
 * Created by joshjahans on 10/03/2017.
 */
import React, { Component } from 'react'
import { TabBarIOS } from 'react-native'
import { Container } from 'native-base'
import VIcon from 'react-native-vector-icons/Ionicons'

export default class SceneDirectory extends Component {
  constructor () {
    super()
    this._renderItems = this._renderItems.bind(this)
    this.state = {
      activeRoute: 'home'
    }
  }

  _renderItems () {
    return this.props.routes.map(route => {
      const { component: Component, title, id, props } = route
      return (
        <VIcon.TabBarIOSItem
          title={title}
          selected={() => this.setState({ activeRoute: id })}
          iconName={'ios-home'}
          key={id}
        >
          <Container>
            <Component {...props} />
          </Container>
        </VIcon.TabBarIOSItem>
      )
    })
  }

  render () {
    return (
      <Container>
        <TabBarIOS
          tintColor='#000000' // TODO - global styles
          unselectedItemTintColor='#b2b2b2'
          barTintColor='#ffffff'
        >
          {this._renderItems()}
        </TabBarIOS>
      </Container>
    )
  }
}
