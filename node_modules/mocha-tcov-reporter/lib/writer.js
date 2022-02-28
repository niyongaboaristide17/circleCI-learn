'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportWriter = undefined;

var _mocha = require('mocha');

var _mocha2 = _interopRequireDefault(_mocha);

var _sprintfJs = require('sprintf-js');

var _object = require('lodash/object');

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var color = _mocha2.default.reporters.Base.color;

var writer = {
  write: function write(text) {
    process.stdout.write(text);
  },
  writeln: function writeln(text) {
    this.write(text);
    this.writeEOL();
  },
  writeEOL: function writeEOL() {
    this.write("\n");
  }
};

exports.default = writer;

var ReportWriter = exports.ReportWriter = function () {
  function ReportWriter(options) {
    _classCallCheck(this, ReportWriter);

    this.defaultOptions = {
      critical: 30.0,
      satisfactory: 70.0
    };
    this.mergeOptions(options);
  }

  _createClass(ReportWriter, [{
    key: 'mergeOptions',
    value: function mergeOptions(options) {
      this.options = _object2.default.merge({}, this.defaultOptions, options);
      this.options.critical = parseFloat(this.options.critical);
      this.options.satisfactory = parseFloat(this.options.satisfactory);
    }
  }, {
    key: 'writeReport',
    value: function writeReport(result) {
      writer.writeln("\nCode Coverage Results:\n");

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = result.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var file = _step.value;

          this.formatFileResult(file);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var coverage = this.colorize(result.coverage);

      writer.writeEOL();
      writer.writeln("Total Coverage: " + coverage);
      writer.writeEOL();
    }
  }, {
    key: 'formatFileResult',
    value: function formatFileResult(file) {
      var coverage = this.colorize(file.coverage);
      this.writeFileResult(coverage, file.executed, file.total, file.fileName);
    }
  }, {
    key: 'colorize',
    value: function colorize(coverage) {
      var percent = (0, _sprintfJs.vsprintf)('%6.2f%%', [coverage]);

      if (coverage >= this.options.satisfactory) {
        return color('green', percent);
      } else if (coverage < this.options.critical) {
        return color('fail', percent);
      } else {
        return color('bright yellow', percent);
      }
    }
  }, {
    key: 'writeFileResult',
    value: function writeFileResult() {
      for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      var output = (0, _sprintfJs.vsprintf)('%s (%2d/%2d) %s', values);
      writer.writeln(output);
    }
  }]);

  return ReportWriter;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93cml0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFJLFFBQVEsZ0JBQU0sU0FBTixDQUFnQixJQUFoQixDQUFxQixLQUFyQjs7QUFFWixJQUFJLFNBQVM7QUFDWCx3QkFBTSxNQUFNO0FBQ1YsWUFBUSxNQUFSLENBQWUsS0FBZixDQUFxQixJQUFyQixFQURVO0dBREQ7QUFJWCw0QkFBUSxNQUFNO0FBQ1osU0FBSyxLQUFMLENBQVcsSUFBWCxFQURZO0FBRVosU0FBSyxRQUFMLEdBRlk7R0FKSDtBQVFYLGdDQUFXO0FBQ1QsU0FBSyxLQUFMLENBQVcsSUFBWCxFQURTO0dBUkE7Q0FBVDs7a0JBYVc7O0lBRUY7QUFDWCxXQURXLFlBQ1gsQ0FBWSxPQUFaLEVBQXFCOzBCQURWLGNBQ1U7O0FBQ25CLFNBQUssY0FBTCxHQUFzQjtBQUNwQixnQkFBVSxJQUFWO0FBQ0Esb0JBQWMsSUFBZDtLQUZGLENBRG1CO0FBS25CLFNBQUssWUFBTCxDQUFrQixPQUFsQixFQUxtQjtHQUFyQjs7ZUFEVzs7aUNBUUcsU0FBUztBQUNyQixXQUFLLE9BQUwsR0FBZSxpQkFBRSxLQUFGLENBQVEsRUFBUixFQUFZLEtBQUssY0FBTCxFQUFxQixPQUFqQyxDQUFmLENBRHFCO0FBRXJCLFdBQUssT0FBTCxDQUFhLFFBQWIsR0FBd0IsV0FBVyxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBQW5DLENBRnFCO0FBR3JCLFdBQUssT0FBTCxDQUFhLFlBQWIsR0FBNEIsV0FBVyxLQUFLLE9BQUwsQ0FBYSxZQUFiLENBQXZDLENBSHFCOzs7O2dDQUtYLFFBQVE7QUFDbEIsYUFBTyxPQUFQLENBQWUsNEJBQWYsRUFEa0I7Ozs7Ozs7QUFHbEIsNkJBQWlCLE9BQU8sS0FBUCwwQkFBakIsb0dBQStCO2NBQXRCLG1CQUFzQjs7QUFDN0IsZUFBSyxnQkFBTCxDQUFzQixJQUF0QixFQUQ2QjtTQUEvQjs7Ozs7Ozs7Ozs7Ozs7T0FIa0I7O0FBTWxCLFVBQUksV0FBVyxLQUFLLFFBQUwsQ0FBYyxPQUFPLFFBQVAsQ0FBekIsQ0FOYzs7QUFRbEIsYUFBTyxRQUFQLEdBUmtCO0FBU2xCLGFBQU8sT0FBUCxDQUFlLHFCQUFxQixRQUFyQixDQUFmLENBVGtCO0FBVWxCLGFBQU8sUUFBUCxHQVZrQjs7OztxQ0FZSCxNQUFNO0FBQ3JCLFVBQUksV0FBVyxLQUFLLFFBQUwsQ0FBYyxLQUFLLFFBQUwsQ0FBekIsQ0FEaUI7QUFFckIsV0FBSyxlQUFMLENBQXFCLFFBQXJCLEVBQStCLEtBQUssUUFBTCxFQUFlLEtBQUssS0FBTCxFQUFZLEtBQUssUUFBTCxDQUExRCxDQUZxQjs7Ozs2QkFJZCxVQUFVO0FBQ2pCLFVBQUksVUFBVSx5QkFBUSxTQUFSLEVBQW1CLENBQUUsUUFBRixDQUFuQixDQUFWLENBRGE7O0FBR2pCLFVBQUksWUFBWSxLQUFLLE9BQUwsQ0FBYSxZQUFiLEVBQTJCO0FBQ3pDLGVBQU8sTUFBTSxPQUFOLEVBQWUsT0FBZixDQUFQLENBRHlDO09BQTNDLE1BRU8sSUFBSSxXQUFXLEtBQUssT0FBTCxDQUFhLFFBQWIsRUFBdUI7QUFDM0MsZUFBTyxNQUFNLE1BQU4sRUFBYyxPQUFkLENBQVAsQ0FEMkM7T0FBdEMsTUFFQTtBQUNMLGVBQU8sTUFBTSxlQUFOLEVBQXVCLE9BQXZCLENBQVAsQ0FESztPQUZBOzs7O3NDQU1rQjt3Q0FBUjs7T0FBUTs7QUFDekIsVUFBSSxTQUFTLHlCQUFPLGlCQUFQLEVBQTBCLE1BQTFCLENBQVQsQ0FEcUI7QUFFekIsYUFBTyxPQUFQLENBQWUsTUFBZixFQUZ5Qjs7OztTQXhDaEIiLCJmaWxlIjoid3JpdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vY2hhIGZyb20gJ21vY2hhJztcbmltcG9ydCB7IHZzcHJpbnRmIGFzIGZvcm1hdCB9IGZyb20gJ3NwcmludGYtanMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoL29iamVjdCc7XG5cbmxldCBjb2xvciA9IG1vY2hhLnJlcG9ydGVycy5CYXNlLmNvbG9yO1xuXG5sZXQgd3JpdGVyID0ge1xuICB3cml0ZSh0ZXh0KSB7XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUodGV4dCk7XG4gIH0sXG4gIHdyaXRlbG4odGV4dCkge1xuICAgIHRoaXMud3JpdGUodGV4dCk7XG4gICAgdGhpcy53cml0ZUVPTCgpO1xuICB9LFxuICB3cml0ZUVPTCgpIHtcbiAgICB0aGlzLndyaXRlKFwiXFxuXCIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3cml0ZXI7XG5cbmV4cG9ydCBjbGFzcyBSZXBvcnRXcml0ZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIGNyaXRpY2FsOiAzMC4wLFxuICAgICAgc2F0aXNmYWN0b3J5OiA3MC4wXG4gICAgfTtcbiAgICB0aGlzLm1lcmdlT3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuICBtZXJnZU9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBfLm1lcmdlKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICB0aGlzLm9wdGlvbnMuY3JpdGljYWwgPSBwYXJzZUZsb2F0KHRoaXMub3B0aW9ucy5jcml0aWNhbCk7XG4gICAgdGhpcy5vcHRpb25zLnNhdGlzZmFjdG9yeSA9IHBhcnNlRmxvYXQodGhpcy5vcHRpb25zLnNhdGlzZmFjdG9yeSk7XG4gIH1cbiAgd3JpdGVSZXBvcnQocmVzdWx0KSB7XG4gICAgd3JpdGVyLndyaXRlbG4oXCJcXG5Db2RlIENvdmVyYWdlIFJlc3VsdHM6XFxuXCIpO1xuXG4gICAgZm9yIChsZXQgZmlsZSBvZiByZXN1bHQuZmlsZXMpIHtcbiAgICAgIHRoaXMuZm9ybWF0RmlsZVJlc3VsdChmaWxlKTtcbiAgICB9XG4gICAgbGV0IGNvdmVyYWdlID0gdGhpcy5jb2xvcml6ZShyZXN1bHQuY292ZXJhZ2UpO1xuXG4gICAgd3JpdGVyLndyaXRlRU9MKCk7XG4gICAgd3JpdGVyLndyaXRlbG4oXCJUb3RhbCBDb3ZlcmFnZTogXCIgKyBjb3ZlcmFnZSk7XG4gICAgd3JpdGVyLndyaXRlRU9MKCk7XG4gIH1cbiAgZm9ybWF0RmlsZVJlc3VsdChmaWxlKSB7XG4gICAgbGV0IGNvdmVyYWdlID0gdGhpcy5jb2xvcml6ZShmaWxlLmNvdmVyYWdlKTtcbiAgICB0aGlzLndyaXRlRmlsZVJlc3VsdChjb3ZlcmFnZSwgZmlsZS5leGVjdXRlZCwgZmlsZS50b3RhbCwgZmlsZS5maWxlTmFtZSk7XG4gIH1cbiAgY29sb3JpemUoY292ZXJhZ2UpIHtcbiAgICBsZXQgcGVyY2VudCA9IGZvcm1hdCggJyU2LjJmJSUnLCBbIGNvdmVyYWdlIF0pO1xuXG4gICAgaWYgKGNvdmVyYWdlID49IHRoaXMub3B0aW9ucy5zYXRpc2ZhY3RvcnkpIHtcbiAgICAgIHJldHVybiBjb2xvcignZ3JlZW4nLCBwZXJjZW50KTtcbiAgICB9IGVsc2UgaWYgKGNvdmVyYWdlIDwgdGhpcy5vcHRpb25zLmNyaXRpY2FsKSB7XG4gICAgICByZXR1cm4gY29sb3IoJ2ZhaWwnLCBwZXJjZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbG9yKCdicmlnaHQgeWVsbG93JywgcGVyY2VudCk7XG4gICAgfVxuICB9XG4gIHdyaXRlRmlsZVJlc3VsdCguLi52YWx1ZXMpIHtcbiAgICBsZXQgb3V0cHV0ID0gZm9ybWF0KCclcyAoJTJkLyUyZCkgJXMnLCB2YWx1ZXMpO1xuICAgIHdyaXRlci53cml0ZWxuKG91dHB1dCk7XG4gIH1cbn1cbiJdfQ==