/**
 * Created by joshjahans on 15/03/2017.
 */
import React, { Component } from 'react'
import { Container, Grid, Row, Col, Text } from 'native-base'

export default class AccountScene extends Component {
  render () {
    return (
      <Container>
        <Grid>
          <Row>
            <Col style={{ backgroundColor: 'pink' }}>
              <Text>1</Text>
            </Col>
            <Col style={{ backgroundColor: 'yellow' }}>
              <Text>2</Text>
            </Col>
          </Row>
          <Row>
            <Col style={{ backgroundColor: 'yellow' }}>
              <Text>3</Text>
            </Col>
            <Col style={{ backgroundColor: 'pink' }}>
              <Text>4</Text>
            </Col>
          </Row>
        </Grid>
      </Container>
    )
  }
}
