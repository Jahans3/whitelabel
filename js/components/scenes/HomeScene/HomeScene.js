/**
 * Created by joshjahans on 10/03/2017.
 */
import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'

export default class HomeScene extends Component {
  render () {
    return (
      <Container>
        <Content>
          <Grid>
            <Row>
              <Col style={{ backgroundColor: 'red' }}>
                <Text>1</Text>
              </Col>
              <Col style={{ backgroundColor: 'blue' }}>
                <Text>2</Text>
              </Col>
            </Row>
            <Row>
              <Col style={{ backgroundColor: 'yellow' }}>
                <Text>3</Text>
              </Col>
              <Col style={{ backgroundColor: 'green' }}>
                <Text>4</Text>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    )
  }
}