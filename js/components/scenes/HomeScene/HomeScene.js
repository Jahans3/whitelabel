/**
 * Created by joshjahans on 10/03/2017.
 */
import React, { Component, PropTypes } from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Text } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'

class TestComponent extends Component {
  render() {
    return <Text>Literally your mum</Text>
  }
}

export default class HomeScene extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  _onForward = () => {
    this.props.navigator.push({
      title: 'Next Scene',
      component: TestComponent
    })
  }

  render () {
    return (
      <Container>
        <Grid style={{ marginTop: 64, marginBottom: 50 }}>
          <Row>
            <Col style={{ backgroundColor: 'red', justifyContent: 'center' }}>
              <Text style={{ alignSelf: 'center' }}>1</Text>
            </Col>
            <Col style={{ backgroundColor: 'blue', justifyContent: 'center' }}>
              <Text style={{ alignSelf: 'center' }}>2</Text>
            </Col>
          </Row>
          <Row>
            <Col style={{ backgroundColor: 'yellow', justifyContent: 'center' }}>
              <Text style={{ alignSelf: 'center' }}>3</Text>
            </Col>
            <Col style={{ backgroundColor: 'green', justifyContent: 'center' }}>
              <TouchableOpacity onPress={this._onForward}>
                <Text style={{ alignSelf: 'center' }}>4</Text>
              </TouchableOpacity>
            </Col>
          </Row>
        </Grid>
      </Container>
    )
  }
}