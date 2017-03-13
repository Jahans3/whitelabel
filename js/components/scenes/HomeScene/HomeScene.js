/**
 * Created by joshjahans on 10/03/2017.
 */
import React, { Component } from 'react'
import { Container, Text } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'

export default class HomeScene extends Component {
  render () {
    return (
      <Container>
        <Grid>
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
              <Text style={{ alignSelf: 'center' }}>4</Text>
            </Col>
          </Row>
        </Grid>
      </Container>
    )
  }
}