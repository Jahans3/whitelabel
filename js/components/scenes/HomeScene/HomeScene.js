/**
 * Created by joshjahans on 15/03/2017.
 */
import React, { Component } from 'react'
import { Container, Grid, Row, Col, View } from 'native-base'
import { palette } from '../../../style'

export default class HomeScene extends Component {
  render () {
    return (
      <Container>
        <Grid>
          <Row>
            <Col>
              <View style={{ backgroundColor: palette.red }} />
            </Col>
            <Col>
              <View style={{ backgroundColor: palette.yellow }} />
            </Col>
          </Row>
          <Row>
            <Col>
              <View style={{ backgroundColor: palette.blue }} />
            </Col>
          </Row>
        </Grid>
      </Container>
    )
  }
}