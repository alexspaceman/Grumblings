import consts from './consts.js'
import dynamic from './dynamic.js'

export default {
  general: {
    padding: `0px`,
    margin: `0px`,
    backgroundColor: consts.GREY
  },

  header: {
    border: `1px orange solid`,
    height: consts.HEADER_HEIGHT
  },

  content: {
    border: `1px rgb(141, 232, 179) solid`,
    height: dynamic.CONTENT_HEIGHT
  },

  footer: {
    border: `1px rgb(107, 190, 211) solid`,
    height: consts.FOOTER_HEIGHT
  }
}