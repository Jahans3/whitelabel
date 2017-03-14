/**
 * Created by joshjahans on 10/03/2017.
 */
import React, { Component } from 'react'
import { TabBarIOS, Navigator } from 'react-native'
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

  _renderScene = ({ route, navigator }) => {
    const {
      title,
      component: Component,
      props,
      leftButtonComponent,
      rightButtonComponent,
      leftButtonProps,
      rightButtonProps
    } = route
    return (
      <Container style={{ marginBottom: 50 }}>
        <HeaderBar
          title={title}
          leftComponent={leftButtonComponent}
          rightComponent={rightButtonComponent}
          leftProps={leftButtonProps}
          rightProps={rightButtonProps}
        />
        <Component {...props} />
      </Container>
    )
  }

  _renderItems = () => {
    return this.props.tabs.map(tab => {
      const {
        index,
        component,
        title,
        id,
        props = {},
        leftButtonComponent,
        leftButtonProps,
        rightButtonComponent,
        rightButtonProps
      } = tab
      const route = {
        title,
        component,
        props,
        leftButtonComponent,
        rightButtonComponent,
        leftButtonProps,
        rightButtonProps
      }
      const icon = SceneDirectory._mapIdToIconName({ id })
      return (
        <VIcon.TabBarItemIOS
          title={title}
          selected={this.state.activeRoute === id}
          onPress={() => this.setState({ activeRoute: id })}
          iconName={icon}
          key={id}
        >
          <Navigator
            initialRoute={route}
            renderScene={(route, navigator) => {
              return this._renderScene({ route, navigator })
            }}
          />
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
