/**
 * Created by joshjahans on 15/03/2017.
 */
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScene from './HomeScene'
import AccountScene from './AccountScene'

export {
  HomeScene,
  AccountScene
}

export default [
  {
    label: 'Home',
    screen: 'whitelabel.HomeScene',
    icon: Icon.getImageSource('ios-home')
  }
]
