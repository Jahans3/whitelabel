/**
 * Created by joshjahans on 15/03/2017.
 */
import { Navigation } from 'react-native-navigation'
import { iconsMap } from '../../icons'
import { palette } from '../../style'
import AccountScene from './AccountScene'
import HomeScene from './HomeScene'

export const registerNavigation = (store, Provider) => {
  Navigation.registerComponent('whitelabel.HomeScene', () => HomeScene, store, Provider)
  Navigation.registerComponent('whitelabel.AccountScene', () => AccountScene, store, Provider)
}

const tabs = [
  {
    label: 'Home',
    screen: 'whitelabel.HomeScene',
    icon: iconsMap['ios-home'],
    selectedIcon: iconsMap['ios-home'],
    title: 'Home',
    navigatorStyle
  },
  {
    label: 'Account',
    screen: 'whitelabel.AccountScene',
    icon: iconsMap['ios-person'],
    selectedIon: iconsMap['ios-person'],
    title: 'Account',
    navigatorStyle
  }
]

const navigatorStyle = {
  statusBarColor: palette.red,
  navigationBarColor: palette.blue,
  navBarBackgroundColor: palette.blue,
  navBarTextColor: palette.white,
  navBarButtonColor: palette.white,
  statusBarTextColorScheme: 'light',
  navBarHidden: false,
  tabBarButtonColor: palette.red,
  tabBarSelectedButtonColor: palette.red,
  tabBarBackgroundColor: palette.red
}

// TODO
const drawer = {
  left: {
    screen: 'whitelabel.LeftDrawerScreen'
  },
  right: {
    screen: 'whitelabel.RightDrawerScreen'
  }
}

const animationType = 'slide-down'

export default {
  tabs,
  drawer,
  animationType
}
