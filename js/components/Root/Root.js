/**
 * Created by joshjahans on 10/03/2017.
 */
import React, { PropTypes } from 'react'
import { View, Text } from 'native-base'

const Root = ({ text }) => (
  <View>
    <Text>{ text }</Text>
  </View>
)

Root.propTypes = {
  text: PropTypes.string
}

export default Root
