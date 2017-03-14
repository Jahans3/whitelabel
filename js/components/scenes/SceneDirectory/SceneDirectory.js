/**
 * Created by joshjahans on 10/03/2017.
 */
import React, { Component } from 'react'
import { TabBarIOS } from 'react-native'
import { Container } from 'native-base'
import VIcon from 'react-native-vector-icons/Ionicons'
import HeaderBar from '../../HeaderBar'

export default class SceneDirectory extends Component {
  state = {
    activeRoute: 'home'
  }

  static _mapIdToIconName ({ id }) {
    switch (id) {
      case 'home':
        return 'ios-home'
    }
  }

  _renderItems = () => {
    return this.props.routes.map(route => {
      const {
        component: Component,
        title,
        id,
        props = {},
        leftButtonComponent,
        leftProps,
        rightButtonComponent,
        rightProps
      } = route
      const icon = SceneDirectory._mapIdToIconName({ id })
      return (
        <VIcon.TabBarItemIOS
          title={title}
          selected={this.state.activeRoute === id}
          onPress={() => this.setState({ activeRoute: id })}
          iconName={icon}
          key={id}
        >
          <Container style={{ marginBottom: 50 }}>
            <HeaderBar
              title={title}
              leftButtonComponent={leftButtonComponent}
              rightButtonComponent={rightButtonComponent}
              leftProps={leftProps}
              rightProps={rightProps}
            />
            <Component {...props} />
          </Container>
        </VIcon.TabBarItemIOS>
      )
    })
  }

  render () {
    return (
      <TabBarIOS
        tintColor='#000000' // TODO - global styles
        unselectedItemTintColor='#b2b2b2'
        barTintColor='#ffffff'
      >
        {this._renderItems()}
      </TabBarIOS>
    )
  }
}
