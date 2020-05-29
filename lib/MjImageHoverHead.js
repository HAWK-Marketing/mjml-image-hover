'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _mjmlCore = require('mjml-core');

var _conditionalTag = require('mjml-core/lib/helpers/conditionalTag');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MjImageHoverHead = (_temp = _class = function (_HeadComponent) {
  _inherits(MjImageHoverHead, _HeadComponent);

  function MjImageHoverHead() {
    _classCallCheck(this, MjImageHoverHead);

    return _possibleConstructorReturn(this, (MjImageHoverHead.__proto__ || Object.getPrototypeOf(MjImageHoverHead)).apply(this, arguments));
  }

  _createClass(MjImageHoverHead, [{
    key: 'getStyles',
    value: function getStyles() {
      return ['<style type="text/css">', '.' + this.getAttribute('hover-name') + ':hover .hover {display: none !important;}', '.' + this.getAttribute('hover-name') + ':hover .hovered {display: block !important;}', '* [title="' + this.getAttribute('hover-name') + 'img"]:hover .hover {display: none !important;}',
      // eslint-disable-next-line max-len
      '* [title="' + this.getAttribute('hover-name') + 'img"]:hover .hovered {display: block !important;}',
      // eslint-disable-next-line max-len
      'body[data-outlook-cycle] .' + this.getAttribute('hover-name') + ' .hover {display: none !important;}',
      // eslint-disable-next-line max-len
      'body[data-outlook-cycle] .' + this.getAttribute('hover-name') + ' .hovered {display: block !important;}', '</style>'];
    }
  }, {
    key: 'render',
    value: function render() {
      // const { add } = this.context

      // eslint-disable-next-line max-len
      return '' + this.getStyles().join('\n') + (0, _conditionalTag.msoConditionalTag)('<style>.' + this.getAttribute('hover-name') + ' .hover{display:none !important}.' + this.getAttribute('hover-name') + ' .hovered{display:block !important}</style>', false);
    }
  }]);

  return MjImageHoverHead;
}(_mjmlCore.HeadComponent), _class.endingTag = true, _class.allowedAttributes = {
  'hover-name': 'string'
}, _temp);
exports.default = MjImageHoverHead;