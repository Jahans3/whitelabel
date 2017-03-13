/**
 * Created by joshjahans on 11/03/2017.
 */
import React, { Component, PropTypes } from 'react'
import { Container, Header, Left, Body, Right, Title } from 'native-base'
import { HeaderButton } from '../subcomponents/Buttons'

export default class HeaderBar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    leftButtonText: PropTypes.string,
    rightButtonText: PropTypes.string,
    onPressLeft: PropTypes.func.isRequired,
    onPressRight: PropTypes.func.isRequired,
    leftButtonIcon: PropTypes.string.isRequired,
    rightButtonIcon: PropTypes.string.isRequired
  }

  render () {
    return (
      <Header>
        <Left>
          <HeaderButton
            textContent={this.props.leftButtonText}
            onPress={this.props.onPressLeft}
            iconName={this.props.leftButtonIcon}
          />
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          <HeaderButton
            textContent={this.props.rightButtonText}
            onPress={this.props.onPressRight}
            iconName={this.props.rightButtonIcon}
          />
        </Right>
      </Header>
    )
  }
}
