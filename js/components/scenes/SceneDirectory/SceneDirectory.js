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

  _renderItems = () => {
    return this.props.routes.map(route => {
      const {
        component: Component,
        title,
        id,
        props = {},
        onPressLeft = () => {},
        onPressRight = () => {},
        leftButtonIcon,
        rightButtonIcon,
        leftButtonText,
        rightButtonText
      } = route
      return (
        <VIcon.TabBarItemIOS
          title={title}
          selected={this.state.activeRoute === id}
          onPress={() => this.setState({ activeRoute: id })}
          iconName={'ios-home'}
          key={id}
        >
          <Container style={{ marginBottom: 50 }}>
            <HeaderBar
              title={title}
              onPressLeft={onPressLeft}
              onPressRight={onPressRight}
              leftButtonIcon={leftButtonIcon}
              rightButtonIcon={rightButtonIcon}
              leftButtonText={leftButtonText}
              rightButtonText={rightButtonText}
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
