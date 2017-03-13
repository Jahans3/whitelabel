/**
 * Created by joshjahans on 11/03/2017.
 */
import React, { Component } from 'react'
import { Container, Icon, Header, Left, Body, Right, Button, Title, Text } from 'native-base'

export default class HeaderBar extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={this.props.onPressleft}>
              <Icon name={this.props.leftButtonIcon} />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right>
            {
              this.props.rightButtonText
              ? <Text>{this.props.rightButtonText}</Text> // TODO - subcomponents, text => headerTextButton
              : <Button onPress={this.props.onPressRight}> // TODO - subcomponents, (iconName, onPress) => headerIconButton
                <Icon name={this.props.rightButtonIcon} />
              </Button>
            }
          </Right>
        </Header>
      </Container>
    )
  }
}