/**
 * Created by joshjahans on 15/03/2017.
 */
import { Navigation } from 'react-native-navigation'
import HomeScene from '../HomeScene'
import AccountScene from '../AccountScene'

export default (store, Provider) => {
  Navigation.registerComponent('whitelabel.HomeScene', () => HomeScene, store, Provider)
}
