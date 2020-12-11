import { min } from 'lodash'
import { BodyComponent } from 'mjml-core'
import widthParser from 'mjml-core/lib/helpers/widthParser'
import {
  msoConditionalTag,
} from 'mjml-core/lib/helpers/conditionalTag'
import { registerDependencies } from 'mjml-validator'

registerDependencies({
  'mj-image-hover': [],
  'mj-body': ['mj-image-hover'],
  'mj-wrapper': ['mj-image-hover'],
  'mj-column': ['mj-image-hover'],
  'mj-group': ['mj-image-hover']
})

export default class MjImageHover extends BodyComponent {
  static tagOmission = true

  static allowedAttributes = {
    alt: 'string',
    href: 'string',
    'hover-name': 'string',
    name: 'string',
    src: 'string',
    'src-hover': 'string',
    srcset: 'string',
    sizes: 'string',
    title: 'string',
    rel: 'string',
    align: 'enum(left,center,right)',
    border: 'string',
    'border-bottom': 'string',
    'border-left': 'string',
    'border-right': 'string',
    'border-top': 'string',
    'border-radius': 'unit(px,%){1,4}',
    'container-background-color': 'color',
    'fluid-on-mobile': 'boolean',
    padding: 'unit(px,%){1,4}',
    'padding-bottom': 'unit(px,%)',
    'padding-left': 'unit(px,%)',
    'padding-right': 'unit(px,%)',
    'padding-top': 'unit(px,%)',
    target: 'string',
    width: 'unit(px)',
    height: 'unit(px,auto)',
    'max-height': 'unit(px,%)',
    'font-size': 'unit(px)',
    usemap: 'string',
  }

  static defaultAttributes = {
    align: 'center',
    border: '0',
    height: 'auto',
    padding: '10px 25px',
    target: '_blank',
    'font-size': '13px',
  }

  getStyles() {
    const width = this.getContentWidth()
    const fullWidth = this.getAttribute('full-width') === 'full-width'

    const { parsedWidth, unit } = widthParser(width)

    return {
      img: {
        border: this.getAttribute('border'),
        'border-left': this.getAttribute('left'),
        'border-right': this.getAttribute('right'),
        'border-top': this.getAttribute('top'),
        'border-bottom': this.getAttribute('bottom'),
        'border-radius': this.getAttribute('border-radius'),
        display: 'block',
        outline: 'none',
        'text-decoration': 'none',
        height: this.getAttribute('height'),
        'max-height': this.getAttribute('max-height'),
        'min-width': fullWidth ? '100%' : null,
        width: '100%',
        'max-width': fullWidth ? '100%' : null,
        'font-size': this.getAttribute('font-size'),
      },
      imgHover: {
        border: this.getAttribute('border'),
        'border-left': this.getAttribute('left'),
        'border-right': this.getAttribute('right'),
        'border-top': this.getAttribute('top'),
        'border-bottom': this.getAttribute('bottom'),
        'border-radius': this.getAttribute('border-radius'),
        display: 'none',
        'mso-hide': 'all',
        outline: 'none',
        'text-decoration': 'none',
        height: this.getAttribute('height'),
        'max-height': this.getAttribute('max-height'),
        'min-width': fullWidth ? '100%' : null,
        width: '100%',
        'max-width': fullWidth ? '100%' : null,
        'font-size': this.getAttribute('font-size'),
      },
      td: {
        width: fullWidth ? null : `${parsedWidth}${unit}`,
      },
      table: {
        'min-width': fullWidth ? '100%' : null,
        'max-width': fullWidth ? '100%' : null,
        width: fullWidth ? `${parsedWidth}${unit}` : null,
        'border-collapse': 'collapse',
        'border-spacing': '0px',
      },
    }
  }

  getContentWidth() {
    const width = this.getAttribute('width')
      ? parseInt(this.getAttribute('width'), 10)
      : Infinity

    const { box } = this.getBoxWidths()

    return min([box, width])
  }

  renderImage() {
    const height = this.getAttribute('height')

    const img = `
      <img
        ${this.htmlAttributes({
          alt: this.getAttribute('alt'),
          height: height && (height === 'auto' ? height : parseInt(height, 10)),
          src: this.getAttribute('src'),
          srcset: this.getAttribute('srcset'),
          sizes: this.getAttribute('sizes'),
          style: 'img',
          title: this.getAttribute('title'),
          width: this.getContentWidth(),
          usemap: this.getAttribute('usemap'),
          class: 'hover',
        })}
      />
    `

    const imgHover = `
      ${msoConditionalTag(`<img
        ${this.htmlAttributes({
          alt: '',
          height: height && (height === 'auto' ? height : parseInt(height, 10)),
          src: this.getAttribute('src-hover'),
          srcset: this.getAttribute('srcset'),
          sizes: this.getAttribute('sizes'),
          style: 'imgHover',
          title: this.getAttribute('title'),
          width: this.getContentWidth(),
          usemap: this.getAttribute('usemap'),
          class: 'hovered',
        })}
      />`, true)}
    `

    if (this.getAttribute('href')) {
      return `
        <a
          ${this.htmlAttributes({
            href: this.getAttribute('href'),
            target: this.getAttribute('target'),
            rel: this.getAttribute('rel'),
            name: this.getAttribute('name'),
          })}
        >
          ${img}${imgHover}
        </a>
      `
    }

    return img + imgHover
  }

  componentHeadStyle = () => `
      .${this.getAttribute('hover-name')}:hover .hover {display: none !important;}
      .${this.getAttribute('hover-name')}:hover .hovered {display: block !important;}
      * [title="${this.getAttribute('hover-name')}img"]:hover .hover {display: none !important;}
      * [title="${this.getAttribute('hover-name')}img"]:hover .hovered {display: block !important;}
      body[data-outlook-cycle] .${this.getAttribute('hover-name')} .hover {display: block !important;}
      body[data-outlook-cycle] .${this.getAttribute('hover-name')} .hovered {display: none !important;}
    </style>
    <!--[if mso]>
    <style type="text/css">
    .${this.getAttribute('hover-name')} .hover{display:none !important}
    .${this.getAttribute('hover-name')} .hovered{display:block !important}
    </style>
    <![endif]-->
    <style type="text/css">
  `

  render() {
    return `
      <table
        ${this.htmlAttributes({
          border: '0',
          cellpadding: '0',
          cellspacing: '0',
          role: 'presentation',
          style: 'table',
          class: this.getAttribute('fluid-on-mobile')
            ? 'mj-full-width-mobile'
            : null,
        })}
      >
        <tbody>
          <tr>
            <td ${this.htmlAttributes({
              style: 'td',
              title: `${this.getAttribute('hover-name')}img`,
              class: this.getAttribute('fluid-on-mobile')
                ? `mj-full-width-mobile ${this.getAttribute('hover-name')}`
                : this.getAttribute('hover-name'),
            })}>
              ${this.renderImage()}
            </td>
          </tr>
        </tbody>
      </table>
    `
  }
}
