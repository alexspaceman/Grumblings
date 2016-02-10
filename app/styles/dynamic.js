import consts from './consts.js'

export default {
  CONTENT_HEIGHT: window.innerHeight - consts.HEADER_HEIGHT - consts.FOOTER_HEIGHT - (consts.BORDER_WIDTH * 6),
}