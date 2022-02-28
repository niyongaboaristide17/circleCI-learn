'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Result = exports.FileResult = exports.LineResult = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LineResult = exports.LineResult = function () {
  function LineResult(results) {
    _classCallCheck(this, LineResult);

    this.calculate(results);
    Object.freeze(this);
  }

  _createClass(LineResult, [{
    key: 'calculate',
    value: function calculate(results) {
      this.total = 0;
      this.unused = 0;
      this.executed = 0;

      var calculator = this.append.bind(this);
      results.forEach(calculator);
    }
  }, {
    key: 'append',
    value: function append(result) {
      if (result === 0) {
        this.unused++;
        this.total++;
      } else if (result !== undefined) {
        this.executed++;
        this.total++;
      }
    }
  }]);

  return LineResult;
}();

var FileResult = exports.FileResult = function () {
  function FileResult(name, results) {
    _classCallCheck(this, FileResult);

    this._name = name;
    this._result = new LineResult(results);
  }

  _createClass(FileResult, [{
    key: 'fileName',
    get: function get() {
      return _path2.default.relative(process.cwd(), this._name);
    }
  }, {
    key: 'executed',
    get: function get() {
      return this._result.executed;
    }
  }, {
    key: 'unused',
    get: function get() {
      return this._result.unused;
    }
  }, {
    key: 'total',
    get: function get() {
      return this._result.total;
    }
  }, {
    key: 'coverage',
    get: function get() {
      var coverage = this.executed / this.total * 100;
      return parseFloat(coverage.toFixed(2));
    }
  }]);

  return FileResult;
}();

var Result = exports.Result = function () {
  function Result(files) {
    _classCallCheck(this, Result);

    this._files = files;
  }

  _createClass(Result, [{
    key: 'sendTo',
    value: function sendTo(writer) {
      writer.writeReport(this);
    }
  }, {
    key: 'files',
    get: function get() {
      return this._files;
    }
  }, {
    key: 'coverage',
    get: function get() {
      var file = null;
      var total = 0;
      var executed = 0;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          file = _step.value;

          total += file.total;
          executed += file.executed;
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

      var coverage = executed / total * 100;
      return parseFloat(coverage.toFixed(2));
    }
  }], [{
    key: 'createFrom',
    value: function createFrom(coverages) {
      var files = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.keys(coverages)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var file = _step2.value;

          files.push(new FileResult(file, coverages[file]));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return new Result(files);
    }
  }]);

  return Result;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXN1bHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYTtBQUNYLFdBRFcsVUFDWCxDQUFZLE9BQVosRUFBcUI7MEJBRFYsWUFDVTs7QUFDbkIsU0FBSyxTQUFMLENBQWUsT0FBZixFQURtQjtBQUVuQixXQUFPLE1BQVAsQ0FBYyxJQUFkLEVBRm1CO0dBQXJCOztlQURXOzs4QkFLRCxTQUFTO0FBQ2pCLFdBQUssS0FBTCxHQUFhLENBQWIsQ0FEaUI7QUFFakIsV0FBSyxNQUFMLEdBQWMsQ0FBZCxDQUZpQjtBQUdqQixXQUFLLFFBQUwsR0FBZ0IsQ0FBaEIsQ0FIaUI7O0FBS2pCLFVBQUksYUFBYSxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBQWIsQ0FMYTtBQU1qQixjQUFRLE9BQVIsQ0FBZ0IsVUFBaEIsRUFOaUI7Ozs7MkJBUVosUUFBUTtBQUNiLFVBQUksV0FBVyxDQUFYLEVBQWM7QUFDaEIsYUFBSyxNQUFMLEdBRGdCO0FBRWhCLGFBQUssS0FBTCxHQUZnQjtPQUFsQixNQUdPLElBQUksV0FBVyxTQUFYLEVBQXNCO0FBQy9CLGFBQUssUUFBTCxHQUQrQjtBQUUvQixhQUFLLEtBQUwsR0FGK0I7T0FBMUI7Ozs7U0FqQkU7OztJQXdCQTtBQUNYLFdBRFcsVUFDWCxDQUFZLElBQVosRUFBa0IsT0FBbEIsRUFBMkI7MEJBRGhCLFlBQ2dCOztBQUN6QixTQUFLLEtBQUwsR0FBYSxJQUFiLENBRHlCO0FBRXpCLFNBQUssT0FBTCxHQUFlLElBQUksVUFBSixDQUFlLE9BQWYsQ0FBZixDQUZ5QjtHQUEzQjs7ZUFEVzs7d0JBS0k7QUFDYixhQUFPLGVBQUssUUFBTCxDQUFjLFFBQVEsR0FBUixFQUFkLEVBQTZCLEtBQUssS0FBTCxDQUFwQyxDQURhOzs7O3dCQUdBO0FBQ2IsYUFBTyxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBRE07Ozs7d0JBR0Y7QUFDWCxhQUFPLEtBQUssT0FBTCxDQUFhLE1BQWIsQ0FESTs7Ozt3QkFHRDtBQUNWLGFBQU8sS0FBSyxPQUFMLENBQWEsS0FBYixDQURHOzs7O3dCQUdHO0FBQ2IsVUFBSSxXQUFXLEtBQUssUUFBTCxHQUFnQixLQUFLLEtBQUwsR0FBYSxHQUE3QixDQURGO0FBRWIsYUFBTyxXQUFXLFNBQVMsT0FBVCxDQUFpQixDQUFqQixDQUFYLENBQVAsQ0FGYTs7OztTQWpCSjs7O0lBdUJBO0FBQ1gsV0FEVyxNQUNYLENBQVksS0FBWixFQUFtQjswQkFEUixRQUNROztBQUNqQixTQUFLLE1BQUwsR0FBYyxLQUFkLENBRGlCO0dBQW5COztlQURXOzsyQkFJSixRQUFRO0FBQ2IsYUFBTyxXQUFQLENBQW1CLElBQW5CLEVBRGE7Ozs7d0JBR0g7QUFDVixhQUFPLEtBQUssTUFBTCxDQURHOzs7O3dCQUdHO0FBQ2IsVUFBSSxPQUFPLElBQVAsQ0FEUztBQUViLFVBQUksUUFBUSxDQUFSLENBRlM7QUFHYixVQUFJLFdBQVcsQ0FBWCxDQUhTOzs7Ozs7O0FBS2IsNkJBQWEsS0FBSyxLQUFMLDBCQUFiLG9HQUF5QjtBQUFwQiw2QkFBb0I7O0FBQ3ZCLG1CQUFTLEtBQUssS0FBTCxDQURjO0FBRXZCLHNCQUFZLEtBQUssUUFBTCxDQUZXO1NBQXpCOzs7Ozs7Ozs7Ozs7OztPQUxhOztBQVNiLFVBQUksV0FBVyxXQUFXLEtBQVgsR0FBbUIsR0FBbkIsQ0FURjtBQVViLGFBQU8sV0FBVyxTQUFTLE9BQVQsQ0FBaUIsQ0FBakIsQ0FBWCxDQUFQLENBVmE7Ozs7K0JBWUcsV0FBVztBQUMzQixVQUFJLFFBQVEsRUFBUixDQUR1Qjs7Ozs7O0FBRTNCLDhCQUFpQixPQUFPLElBQVAsQ0FBWSxTQUFaLDRCQUFqQix3R0FBeUM7Y0FBaEMsb0JBQWdDOztBQUN2QyxnQkFBTSxJQUFOLENBQVksSUFBSSxVQUFKLENBQWUsSUFBZixFQUFxQixVQUFVLElBQVYsQ0FBckIsQ0FBWixFQUR1QztTQUF6Qzs7Ozs7Ozs7Ozs7Ozs7T0FGMkI7O0FBSzNCLGFBQU8sSUFBSSxNQUFKLENBQVcsS0FBWCxDQUFQLENBTDJCOzs7O1NBdEJsQiIsImZpbGUiOiJyZXN1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNsYXNzIExpbmVSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihyZXN1bHRzKSB7XG4gICAgdGhpcy5jYWxjdWxhdGUocmVzdWx0cyk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuICBjYWxjdWxhdGUocmVzdWx0cykge1xuICAgIHRoaXMudG90YWwgPSAwO1xuICAgIHRoaXMudW51c2VkID0gMDtcbiAgICB0aGlzLmV4ZWN1dGVkID0gMDtcblxuICAgIGxldCBjYWxjdWxhdG9yID0gdGhpcy5hcHBlbmQuYmluZCh0aGlzKTtcbiAgICByZXN1bHRzLmZvckVhY2goY2FsY3VsYXRvcik7XG4gIH1cbiAgYXBwZW5kKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQgPT09IDApIHtcbiAgICAgIHRoaXMudW51c2VkKys7XG4gICAgICB0aGlzLnRvdGFsKys7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5leGVjdXRlZCsrO1xuICAgICAgdGhpcy50b3RhbCsrO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHJlc3VsdHMpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9yZXN1bHQgPSBuZXcgTGluZVJlc3VsdChyZXN1bHRzKTtcbiAgfVxuICBnZXQgZmlsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVsYXRpdmUocHJvY2Vzcy5jd2QoKSwgdGhpcy5fbmFtZSk7XG4gIH1cbiAgZ2V0IGV4ZWN1dGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHQuZXhlY3V0ZWQ7XG4gIH1cbiAgZ2V0IHVudXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0LnVudXNlZDtcbiAgfVxuICBnZXQgdG90YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdC50b3RhbDtcbiAgfVxuICBnZXQgY292ZXJhZ2UoKSB7XG4gICAgbGV0IGNvdmVyYWdlID0gdGhpcy5leGVjdXRlZCAvIHRoaXMudG90YWwgKiAxMDA7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoY292ZXJhZ2UudG9GaXhlZCgyKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKGZpbGVzKSB7XG4gICAgdGhpcy5fZmlsZXMgPSBmaWxlcztcbiAgfVxuICBzZW5kVG8od3JpdGVyKSB7XG4gICAgd3JpdGVyLndyaXRlUmVwb3J0KHRoaXMpO1xuICB9XG4gIGdldCBmaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZXM7XG4gIH1cbiAgZ2V0IGNvdmVyYWdlKCkge1xuICAgIGxldCBmaWxlID0gbnVsbDtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGxldCBleGVjdXRlZCA9IDA7XG5cbiAgICBmb3IgKGZpbGUgb2YgdGhpcy5maWxlcykge1xuICAgICAgdG90YWwgKz0gZmlsZS50b3RhbDtcbiAgICAgIGV4ZWN1dGVkICs9IGZpbGUuZXhlY3V0ZWQ7XG4gICAgfVxuICAgIGxldCBjb3ZlcmFnZSA9IGV4ZWN1dGVkIC8gdG90YWwgKiAxMDA7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoY292ZXJhZ2UudG9GaXhlZCgyKSk7XG4gIH1cbiAgc3RhdGljIGNyZWF0ZUZyb20oY292ZXJhZ2VzKSB7XG4gICAgbGV0IGZpbGVzID0gW107XG4gICAgZm9yIChsZXQgZmlsZSBvZiBPYmplY3Qua2V5cyhjb3ZlcmFnZXMpKSB7XG4gICAgICBmaWxlcy5wdXNoKCBuZXcgRmlsZVJlc3VsdChmaWxlLCBjb3ZlcmFnZXNbZmlsZV0pICk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVzdWx0KGZpbGVzKTtcbiAgfVxufVxuIl19