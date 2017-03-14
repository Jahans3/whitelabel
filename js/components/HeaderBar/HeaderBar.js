/**
 * Created by joshjahans on 11/03/2017.
 */
import React, { Component, PropTypes } from 'react'
import { Header, Left, Body, Right, Title } from 'native-base'

export default class HeaderBar extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    leftButtonComponent: PropTypes.func,
    rightButtonComponent: PropTypes.func,
    leftProps: PropTypes.object,
    rightProps: PropTypes.object
  }

  render () {
    const {
      leftButtonComponent: LeftComponent,
      rightButtonComponent: RightComponent
    } = this.props
    return (
      <Header>
        <Left>
          {
            LeftComponent && <LeftComponent {...this.props.leftProps} />
          }
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          {
            RightComponent && <RightComponent {...this.props.rightProps} />
          }
        </Right>
      </Header>
    )
  }
}
