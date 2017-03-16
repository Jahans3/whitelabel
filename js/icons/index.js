/**
 * Created by joshjahans on 15/03/2017.
 */
import Icon from 'react-native-vector-icons/Ionicons'
import icons from './icons'

const iconsMap = {}
const iconSuffixPattern = /--(active|small|large|extra-large)/g

/**
 * Extract icon image source and map result to icon name
 * @returns {Promise}
 */
const loadIcons = () => {
  return new Promise(resolve => {
    Promise.all(Object.keys(icons).map(iconName => Icon.getImageSource(
      iconName.replace(iconSuffixPattern, ''),
      icons[iconName][0],
      icons[iconName][1]
    )))
      .then(sources => {
        Object.keys(icons).map((iconName, i) => {
          iconsMap[iconName] = sources[i]
        })
        resolve(true)
      })
  })
}

export {
  loadIcons,
  iconsMap
}
