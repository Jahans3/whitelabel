/**
 * Created by joshjahans on 11/03/2017.
 */
import React, { Component, PropTypes } from 'react'
import { Container, Icon, Header, Left, Body, Right, Button, Title, Text } from 'native-base'
import { HeaderButton } from '../subcomponents/Buttons'

export default class HeaderBar extends Component {

  propTypes = {
    title: PropTypes.string.isRequired,
    leftButtonText: PropTypes.string,
    rightButtonText: PropTypes.string,
    onPressLeft: PropTypes.func,
    onPressRight: PropTypes.func,
    leftButtonIcon: PropTypes.string,
    rightButtonIcon: PropTypes.string
  }

  render () {
    return (
      <Container>
        <Header>
          <Left>
            <HeaderButton
              textContent={this.props.leftButtonText}
              onPress={this.props.onPressLeft}
              iconName={this.props.leftButtonicon}
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
      </Container>
    )
  }
}
