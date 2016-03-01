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

  headerLinks: {
    textAlign: `center`,
  },

  headerLink: {
    display: `inline-block`,
    height: consts.HEADER_LINKS_HEIGHT,
    width: consts.HEADER_LINKS_WIDTH,
    border: `${ consts.BORDER_WIDTH }px red solid`,
    textDecoration: `none`,
  },

  // content
  content: {
    border: `${ consts.BORDER_WIDTH }px ${ consts.GREEN } solid`,
    height: window.innerHeight - consts.HEADER_HEIGHT - consts.FOOTER_HEIGHT - (consts.BORDER_WIDTH * 6),
  },

  // footer
  footer: {
    border: `${ consts.BORDER_WIDTH }px ${ consts.BLUE } solid`,
    height: consts.FOOTER_HEIGHT,
  },
}