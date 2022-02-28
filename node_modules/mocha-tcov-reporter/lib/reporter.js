'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _mocha = require('mocha');

var _mocha2 = _interopRequireDefault(_mocha);

var _result = require('./result');

var _writer = require('./writer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TextReporter
 *
 * options.reporterOptions
 * satisfactory - Satisfactory code coverage of value
 * critical - Critical code coverage of value
 */

var TextReporter = function (_mocha$reporters$Base) {
  _inherits(TextReporter, _mocha$reporters$Base);

  function TextReporter(runner, options) {
    _classCallCheck(this, TextReporter);

    var opts = options || {};

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextReporter).call(this, runner));

    _this.writer = new _writer.ReportWriter(opts);
    runner.on('end', _this.end.bind(_this));
    return _this;
  }

  _createClass(TextReporter, [{
    key: 'end',
    value: function end() {
      var coverages = this.getCoverages();
      var result = _result.Result.createFrom(coverages);
      result.sendTo(this.writer);
      this.result = result;
    }
  }, {
    key: 'getCoverages',
    value: function getCoverages() {
      return global._$jscoverage || {};
    }
  }, {
    key: 'getFiles',
    value: function getFiles() {
      return this.result.files;
    }
  }]);

  return TextReporter;
}(_mocha2.default.reporters.Base);

exports.default = TextReporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBvcnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFZcUI7OztBQUNuQixXQURtQixZQUNuQixDQUFZLE1BQVosRUFBb0IsT0FBcEIsRUFBNkI7MEJBRFYsY0FDVTs7QUFDM0IsUUFBSSxPQUFPLFdBQVcsRUFBWCxDQURnQjs7dUVBRFYseUJBR1gsU0FGcUI7O0FBRzNCLFVBQUssTUFBTCxHQUFjLHlCQUFpQixJQUFqQixDQUFkLENBSDJCO0FBSTNCLFdBQU8sRUFBUCxDQUFVLEtBQVYsRUFBaUIsTUFBSyxHQUFMLENBQVMsSUFBVCxPQUFqQixFQUoyQjs7R0FBN0I7O2VBRG1COzswQkFPYjtBQUNKLFVBQUksWUFBWSxLQUFLLFlBQUwsRUFBWixDQURBO0FBRUosVUFBSSxTQUFTLGVBQU8sVUFBUCxDQUFrQixTQUFsQixDQUFULENBRkE7QUFHSixhQUFPLE1BQVAsQ0FBYyxLQUFLLE1BQUwsQ0FBZCxDQUhJO0FBSUosV0FBSyxNQUFMLEdBQWMsTUFBZCxDQUpJOzs7O21DQU1TO0FBQ2IsYUFBTyxPQUFPLFlBQVAsSUFBdUIsRUFBdkIsQ0FETTs7OzsrQkFHSjtBQUNULGFBQU8sS0FBSyxNQUFMLENBQVksS0FBWixDQURFOzs7O1NBaEJRO0VBQXFCLGdCQUFNLFNBQU4sQ0FBZ0IsSUFBaEI7O2tCQUFyQiIsImZpbGUiOiJyZXBvcnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlsIGZyb20gJ3V0aWwnO1xuaW1wb3J0IG1vY2hhIGZyb20gJ21vY2hhJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJy4vcmVzdWx0JztcbmltcG9ydCB7IFJlcG9ydFdyaXRlciB9IGZyb20gJy4vd3JpdGVyJztcblxuLyoqXG4gKiBUZXh0UmVwb3J0ZXJcbiAqXG4gKiBvcHRpb25zLnJlcG9ydGVyT3B0aW9uc1xuICogc2F0aXNmYWN0b3J5IC0gU2F0aXNmYWN0b3J5IGNvZGUgY292ZXJhZ2Ugb2YgdmFsdWVcbiAqIGNyaXRpY2FsIC0gQ3JpdGljYWwgY29kZSBjb3ZlcmFnZSBvZiB2YWx1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0UmVwb3J0ZXIgZXh0ZW5kcyBtb2NoYS5yZXBvcnRlcnMuQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bm5lciwgb3B0aW9ucykge1xuICAgIGxldCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgICBzdXBlcihydW5uZXIpO1xuICAgIHRoaXMud3JpdGVyID0gbmV3IFJlcG9ydFdyaXRlcihvcHRzKTtcbiAgICBydW5uZXIub24oJ2VuZCcsIHRoaXMuZW5kLmJpbmQodGhpcykpO1xuICB9XG4gIGVuZCgpIHtcbiAgICBsZXQgY292ZXJhZ2VzID0gdGhpcy5nZXRDb3ZlcmFnZXMoKTtcbiAgICBsZXQgcmVzdWx0ID0gUmVzdWx0LmNyZWF0ZUZyb20oY292ZXJhZ2VzKTtcbiAgICByZXN1bHQuc2VuZFRvKHRoaXMud3JpdGVyKTtcbiAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgfVxuICBnZXRDb3ZlcmFnZXMoKSB7XG4gICAgcmV0dXJuIGdsb2JhbC5fJGpzY292ZXJhZ2UgfHwge307XG4gIH1cbiAgZ2V0RmlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0LmZpbGVzO1xuICB9XG59XG4iXX0=