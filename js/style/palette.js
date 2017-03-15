/**
 * Created by joshjahans on 15/03/2017.
 */

// Spread chosen colour palette into export object
const palette = {
  default: {
    grey: 'grey',
    purple: 'purple',
    red: 'red',
    green: 'green',
    yellow: 'yellow',
    white: 'white',
    black: 'black'
  },
  pastel: {
    grey: '#8e8e8e',
    purple: '#3a3064',
    red: '#ff6360',
    green: '#bdecb6',
    yellow: '#ffe19c',
    white: '#fcfcfc',
    black: '#141414'
  }
}

export default {
  ...palette.pastel
}
