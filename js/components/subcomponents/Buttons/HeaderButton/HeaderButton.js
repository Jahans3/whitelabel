/**
 * Created by joshjahans on 13/03/2017.
 */
import React, { PropTypes } from 'react'
import { Button, Icon, Text } from 'native-base'

const HeaderButton = ({ title = false, textContent, iconName, onPress }) => (
  <Button title={title} transparent onPress={onPress}>
    {
      textContent
      ? <Text>{textContent}</Text>
      : <Icon name={iconName} />
    }
  </Button>
)

HeaderButton.propTypes = {
  iconName: PropTypes.string,
  textContent: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  onPress: PropTypes.func.isRequired
}

export default HeaderButton
