import { HeadComponent } from 'mjml-core'
import {
  msoConditionalTag,
} from 'mjml-core/lib/helpers/conditionalTag'

export default class MjImageHoverHead extends HeadComponent {
  static endingTag = true

  static allowedAttributes = {
    'hover-name': 'string',
  }

  getStyles() {
    return [
      '<style type="text/css">',
      `.${this.getAttribute('hover-name')}:hover .hover {display: none !important;}`,
      `.${this.getAttribute('hover-name')}:hover .hovered {display: block !important;}`,
      `* [title="${this.getAttribute('hover-name')}img"]:hover .hover {display: none !important;}`,
      // eslint-disable-next-line max-len
      `* [title="${this.getAttribute('hover-name')}img"]:hover .hovered {display: block !important;}`,
      // eslint-disable-next-line max-len
      `body[data-outlook-cycle] .${this.getAttribute('hover-name')} .hover {display: none !important;}`,
      // eslint-disable-next-line max-len
      `body[data-outlook-cycle] .${this.getAttribute('hover-name')} .hovered {display: block !important;}`,
      '</style>',
    ]
  }

  render() {
    // const { add } = this.context

    // eslint-disable-next-line max-len
    return `${this.getStyles().join('\n')}${msoConditionalTag(`<style>.${this.getAttribute('hover-name')} .hover{display:none !important}.${this.getAttribute('hover-name')} .hovered{display:block !important}</style>`, false)}`
  }
}
