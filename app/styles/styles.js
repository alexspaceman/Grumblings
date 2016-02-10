import consts from './consts.js'
import dynamic from './dynamic.js'

export default {
  // main
  general: {
    padding: `0px`,
    margin: `0px`,
    backgroundColor: consts.GREY,
  },

  // header
  header: {
    border: `${ consts.BORDER_WIDTH }px ${ consts.ORANGE } solid`,
    height: consts.HEADER_HEIGHT,
  },

  headerLink: {
    minHeight: `20px`,
    minWidth: `60px`,
    border: `2px red solid`,
    textDecoration: `none`,
  },

  // content
  content: {
    border: `${ consts.BORDER_WIDTH }px ${ consts.GREEN } solid`,
    height: dynamic.CONTENT_HEIGHT,
  },

  // footer
  footer: {
    border: `${ consts.BORDER_WIDTH }px ${ consts.BLUE } solid`,
    height: consts.FOOTER_HEIGHT,
  },
}