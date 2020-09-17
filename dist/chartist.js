(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define('Chartist', [], function () {
      return (root['Chartist'] = factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['Chartist'] = factory();
  }
}(this, function () {

/* Chartist.js 0.11.10
 * Copyright © 2020 Gion Kunz
 * Free to use under either the WTFPL license or the MIT license.
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.KldIntersections = {}));
}(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o) {
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var it,
        normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   *  Point2D.js
   *  @module Point2D
   *  @copyright 2001-2019 Kevin Lindsey
   */

  /**
   *  Point2D
   *
   *  @memberof module:kld-affine
   */
  var Point2D = /*#__PURE__*/function () {
    /**
     *  Point2D
     *
     *  @param {number} x
     *  @param {number} y
     *  @returns {module:kld-affine.Point2D}
     */
    function Point2D() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, Point2D);

      this.x = x;
      this.y = y;
    }
    /**
     *  clone
     *
     *  @returns {module:kld-affine.Point2D}
     */


    _createClass(Point2D, [{
      key: "clone",
      value: function clone() {
        return new this.constructor(this.x, this.y);
      }
      /**
       *  add
       *
       *  @param {module:kld-affine.Point2D} that
       *  @returns {module:kld-affine.Point2D}
       */

    }, {
      key: "add",
      value: function add(that) {
        return new this.constructor(this.x + that.x, this.y + that.y);
      }
      /**
       *  subtract
       *
       *  @param {module:kld-affine.Point2D} that
       *  @returns {module:kld-affine.Point2D}
       */

    }, {
      key: "subtract",
      value: function subtract(that) {
        return new this.constructor(this.x - that.x, this.y - that.y);
      }
      /**
       *  multiply
       *
       *  @param {number} scalar
       *  @returns {module:kld-affine.Point2D}
       */

    }, {
      key: "multiply",
      value: function multiply(scalar) {
        return new this.constructor(this.x * scalar, this.y * scalar);
      }
      /**
       *  divide
       *
       *  @param {number} scalar
       *  @returns {module:kld-affine.Point2D}
       */

    }, {
      key: "divide",
      value: function divide(scalar) {
        return new this.constructor(this.x / scalar, this.y / scalar);
      }
      /**
       *  equals
       *
       *  @param {module:kld-affine.Point2D} that
       *  @returns {boolean}
       */

    }, {
      key: "equals",
      value: function equals(that) {
        return this.x === that.x && this.y === that.y;
      }
      /**
       *  precisionEquals
       *
       *  @param {module:kld-affine.Point2D} that
       *  @param {number} precision
       *  @returns {boolean}
       */

    }, {
      key: "precisionEquals",
      value: function precisionEquals(that, precision) {
        return Math.abs(this.x - that.x) < precision && Math.abs(this.y - that.y) < precision;
      } // utility methods

      /**
       *  lerp
       *
       *  @param {module:kld-affine.Point2D} that
       *  @param {number} t
       *  @returns {module:kld-affine.Point2D}
       */

    }, {
      key: "lerp",
      value: function lerp(that, t) {
        var omt = 1.0 - t;
        return new this.constructor(this.x * omt + that.x * t, this.y * omt + that.y * t);
      }
      /**
       *  distanceFrom
       *
       *  @param {module:kld-affine.Point2D} that
       *  @returns {number}
       */

    }, {
      key: "distanceFrom",
      value: function distanceFrom(that) {
        var dx = this.x - that.x;
        var dy = this.y - that.y;
        return Math.sqrt(dx * dx + dy * dy);
      }
      /**
       *  min
       *
       *  @param {module:kld-affine.Point2D} that
       *  @returns {number}
       */

    }, {
      key: "min",
      value: function min(that) {
        return new this.constructor(Math.min(this.x, that.x), Math.min(this.y, that.y));
      }
      /**
       *  max
       *
       *  @param {module:kld-affine.Point2D} that
       *  @returns {number}
       */

    }, {
      key: "max",
      value: function max(that) {
        return new this.constructor(Math.max(this.x, that.x), Math.max(this.y, that.y));
      }
      /**
       *  transform
       *
       *  @param {module:kld-affine.Matrix2D} matrix
       *  @returns {module:kld-affine.Point2D}
       */

    }, {
      key: "transform",
      value: function transform(matrix) {
        return new this.constructor(matrix.a * this.x + matrix.c * this.y + matrix.e, matrix.b * this.x + matrix.d * this.y + matrix.f);
      }
      /**
       *  toString
       *
       *  @returns {string}
       */

    }, {
      key: "toString",
      value: function toString() {
        return "point(".concat(this.x, ",").concat(this.y, ")");
      }
    }]);

    return Point2D;
  }();

  /**
   *  Vector2D.js
   *  @module Vector2D
   *  @copyright 2001-2019 Kevin Lindsey
   */

  /**
   *  Vector2D
   *
   *  @memberof module:kld-affine
   */
  var Vector2D = /*#__PURE__*/function () {
    /**
     *  Vector2D
     *
     *  @param {number} x
     *  @param {number} y
     *  @returns {module:kld-affine.Vector2D}
     */
    function Vector2D() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, Vector2D);

      this.x = x;
      this.y = y;
    }
    /**
     *  fromPoints
     *
     *  @param {module:kld-affine.Point2D} p1
     *  @param {module:kld-affine.Point2D} p2
     *  @returns {module:kld-affine.Vector2D}
     */


    _createClass(Vector2D, [{
      key: "length",

      /**
       *  length
       *
       *  @returns {number}
       */
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
      /**
       *  magnitude
       *
       *  @returns {number}
       */

    }, {
      key: "magnitude",
      value: function magnitude() {
        return this.x * this.x + this.y * this.y;
      }
      /**
       *  dot
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {number}
       */

    }, {
      key: "dot",
      value: function dot(that) {
        return this.x * that.x + this.y * that.y;
      }
      /**
       *  cross
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {number}
       */

    }, {
      key: "cross",
      value: function cross(that) {
        return this.x * that.y - this.y * that.x;
      }
      /**
       *  determinant
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {number}
       */

    }, {
      key: "determinant",
      value: function determinant(that) {
        return this.x * that.y - this.y * that.x;
      }
      /**
       *  unit
       *
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "unit",
      value: function unit() {
        return this.divide(this.length());
      }
      /**
       *  add
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "add",
      value: function add(that) {
        return new this.constructor(this.x + that.x, this.y + that.y);
      }
      /**
       *  subtract
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "subtract",
      value: function subtract(that) {
        return new this.constructor(this.x - that.x, this.y - that.y);
      }
      /**
       *  multiply
       *
       *  @param {number} scalar
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "multiply",
      value: function multiply(scalar) {
        return new this.constructor(this.x * scalar, this.y * scalar);
      }
      /**
       *  divide
       *
       *  @param {number} scalar
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "divide",
      value: function divide(scalar) {
        return new this.constructor(this.x / scalar, this.y / scalar);
      }
      /**
       *  angleBetween
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {number}
       */

    }, {
      key: "angleBetween",
      value: function angleBetween(that) {
        var cos = this.dot(that) / (this.length() * that.length());
        cos = Math.max(-1, Math.min(cos, 1));
        var radians = Math.acos(cos);
        return this.cross(that) < 0.0 ? -radians : radians;
      }
      /**
       *  Find a vector is that is perpendicular to this vector
       *
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "perp",
      value: function perp() {
        return new this.constructor(-this.y, this.x);
      }
      /**
       *  Find the component of the specified vector that is perpendicular to
       *  this vector
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "perpendicular",
      value: function perpendicular(that) {
        return this.subtract(this.project(that));
      }
      /**
       *  project
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "project",
      value: function project(that) {
        var percent = this.dot(that) / that.dot(that);
        return that.multiply(percent);
      }
      /**
       *  transform
       *
       *  @param {module:kld-affine.Matrix2D} matrix
       *  @returns {module:kld-affine.Vector2D}
       */

    }, {
      key: "transform",
      value: function transform(matrix) {
        return new this.constructor(matrix.a * this.x + matrix.c * this.y, matrix.b * this.x + matrix.d * this.y);
      }
      /**
       *  equals
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @returns {boolean}
       */

    }, {
      key: "equals",
      value: function equals(that) {
        return this.x === that.x && this.y === that.y;
      }
      /**
       *  precisionEquals
       *
       *  @param {module:kld-affine.Vector2D} that
       *  @param {number} precision
       *  @returns {boolean}
       */

    }, {
      key: "precisionEquals",
      value: function precisionEquals(that, precision) {
        return Math.abs(this.x - that.x) < precision && Math.abs(this.y - that.y) < precision;
      }
      /**
       *  toString
       *
       *  @returns {string}
       */

    }, {
      key: "toString",
      value: function toString() {
        return "vector(".concat(this.x, ",").concat(this.y, ")");
      }
    }], [{
      key: "fromPoints",
      value: function fromPoints(p1, p2) {
        return new Vector2D(p2.x - p1.x, p2.y - p1.y);
      }
    }]);

    return Vector2D;
  }();

  /**
   *  Matrix2D.js
   *  @module Matrix2D
   *  @copyright 2001-2019 Kevin Lindsey
   */

  /**
   *  Matrix2D
   *
   *  @memberof module:kld-affine
   */
  var Matrix2D = /*#__PURE__*/function () {
    /**
     *  A 2D Matrix of the form:<br>
     *  [a c e]<br>
     *  [b d f]<br>
     *  [0 0 1]<br>
     *
     *  @param {number} a
     *  @param {number} b
     *  @param {number} c
     *  @param {number} d
     *  @param {number} e
     *  @param {number} f
     *  @returns {module:kld-affine.Matrix2D}
     */
    function Matrix2D() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

      _classCallCheck(this, Matrix2D);

      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.e = e;
      this.f = f;
    }
    /**
     *  translation
     *
     *  @param {number} tx
     *  @param {number} ty
     *  @returns {module:kld-affine.Matrix2D}
     */


    _createClass(Matrix2D, [{
      key: "multiply",

      /**
       *  multiply
       *
       *  @param {module:kld-affine.Matrix2D} that
       *  @returns {module:kld-affine.Matrix2D}
       */
      value: function multiply(that) {
        if (this.isIdentity()) {
          return that;
        }

        if (that.isIdentity()) {
          return this;
        }

        return new this.constructor(this.a * that.a + this.c * that.b, this.b * that.a + this.d * that.b, this.a * that.c + this.c * that.d, this.b * that.c + this.d * that.d, this.a * that.e + this.c * that.f + this.e, this.b * that.e + this.d * that.f + this.f);
      }
      /**
       *  inverse
       *
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "inverse",
      value: function inverse() {
        if (this.isIdentity()) {
          return this;
        }

        var det1 = this.a * this.d - this.b * this.c;

        if (det1 === 0.0) {
          throw new Error("Matrix is not invertible");
        }

        var idet = 1.0 / det1;
        var det2 = this.f * this.c - this.e * this.d;
        var det3 = this.e * this.b - this.f * this.a;
        return new this.constructor(this.d * idet, -this.b * idet, -this.c * idet, this.a * idet, det2 * idet, det3 * idet);
      }
      /**
       *  translate
       *
       *  @param {number} tx
       *  @param {number} ty
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "translate",
      value: function translate(tx, ty) {
        return new this.constructor(this.a, this.b, this.c, this.d, this.a * tx + this.c * ty + this.e, this.b * tx + this.d * ty + this.f);
      }
      /**
       *  scale
       *
       *  @param {number} scale
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "scale",
      value: function scale(_scale) {
        return new this.constructor(this.a * _scale, this.b * _scale, this.c * _scale, this.d * _scale, this.e, this.f);
      }
      /**
       *  scaleAt
       *
       *  @param {number} scale
       *  @param {module:kld-affine.Point2D} center
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "scaleAt",
      value: function scaleAt(scale, center) {
        var dx = center.x - scale * center.x;
        var dy = center.y - scale * center.y;
        return new this.constructor(this.a * scale, this.b * scale, this.c * scale, this.d * scale, this.a * dx + this.c * dy + this.e, this.b * dx + this.d * dy + this.f);
      }
      /**
       *  scaleNonUniform
       *
       *  @param {number} scaleX
       *  @param {number} scaleY
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "scaleNonUniform",
      value: function scaleNonUniform(scaleX, scaleY) {
        return new this.constructor(this.a * scaleX, this.b * scaleX, this.c * scaleY, this.d * scaleY, this.e, this.f);
      }
      /**
       *  scaleNonUniformAt
       *
       *  @param {number} scaleX
       *  @param {number} scaleY
       *  @param {module:kld-affine.Point2D} center
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "scaleNonUniformAt",
      value: function scaleNonUniformAt(scaleX, scaleY, center) {
        var dx = center.x - scaleX * center.x;
        var dy = center.y - scaleY * center.y;
        return new this.constructor(this.a * scaleX, this.b * scaleX, this.c * scaleY, this.d * scaleY, this.a * dx + this.c * dy + this.e, this.b * dx + this.d * dy + this.f);
      }
      /**
       *  rotate
       *
       *  @param {number} radians
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "rotate",
      value: function rotate(radians) {
        var c = Math.cos(radians);
        var s = Math.sin(radians);
        return new this.constructor(this.a * c + this.c * s, this.b * c + this.d * s, this.a * -s + this.c * c, this.b * -s + this.d * c, this.e, this.f);
      }
      /**
       *  rotateAt
       *
       *  @param {number} radians
       *  @param {module:kld-affine.Point2D} center
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "rotateAt",
      value: function rotateAt(radians, center) {
        var cos = Math.cos(radians);
        var sin = Math.sin(radians);
        var cx = center.x;
        var cy = center.y;
        var a = this.a * cos + this.c * sin;
        var b = this.b * cos + this.d * sin;
        var c = this.c * cos - this.a * sin;
        var d = this.d * cos - this.b * sin;
        return new this.constructor(a, b, c, d, (this.a - a) * cx + (this.c - c) * cy + this.e, (this.b - b) * cx + (this.d - d) * cy + this.f);
      }
      /**
       *  rotateFromVector
       *
       *  @param {module:kld-affine.Vector2D} vector
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "rotateFromVector",
      value: function rotateFromVector(vector) {
        var unit = vector.unit();
        var c = unit.x; // cos

        var s = unit.y; // sin

        return new this.constructor(this.a * c + this.c * s, this.b * c + this.d * s, this.a * -s + this.c * c, this.b * -s + this.d * c, this.e, this.f);
      }
      /**
       *  flipX
       *
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "flipX",
      value: function flipX() {
        return new this.constructor(-this.a, -this.b, this.c, this.d, this.e, this.f);
      }
      /**
       *  flipY
       *
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "flipY",
      value: function flipY() {
        return new this.constructor(this.a, this.b, -this.c, -this.d, this.e, this.f);
      }
      /**
       *  skewX
       *
       *  @param {number} radians
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "skewX",
      value: function skewX(radians) {
        var t = Math.tan(radians);
        return new this.constructor(this.a, this.b, this.c + this.a * t, this.d + this.b * t, this.e, this.f);
      } // TODO: skewXAt

      /**
       *  skewY
       *
       *  @param {number} radians
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "skewY",
      value: function skewY(radians) {
        var t = Math.tan(radians);
        return new this.constructor(this.a + this.c * t, this.b + this.d * t, this.c, this.d, this.e, this.f);
      } // TODO: skewYAt

      /**
       *  isIdentity
       *
       *  @returns {boolean}
       */

    }, {
      key: "isIdentity",
      value: function isIdentity() {
        return this.a === 1.0 && this.b === 0.0 && this.c === 0.0 && this.d === 1.0 && this.e === 0.0 && this.f === 0.0;
      }
      /**
       *  isInvertible
       *
       *  @returns {boolean}
       */

    }, {
      key: "isInvertible",
      value: function isInvertible() {
        return this.a * this.d - this.b * this.c !== 0.0;
      }
      /**
       *  getScale
       *
       *  @returns {{ scaleX: number, scaleY: number }}
       */

    }, {
      key: "getScale",
      value: function getScale() {
        return {
          scaleX: Math.sqrt(this.a * this.a + this.c * this.c),
          scaleY: Math.sqrt(this.b * this.b + this.d * this.d)
        };
      }
      /**
       *  Calculates matrix Singular Value Decomposition
       *
       *  The resulting matrices — translation, rotation, scale, and rotation0 — return
       *  this matrix when they are multiplied together in the listed order
       *
       *  @see Jim Blinn's article {@link http://dx.doi.org/10.1109/38.486688}
       *  @see {@link http://math.stackexchange.com/questions/861674/decompose-a-2d-arbitrary-transform-into-only-scaling-and-rotation}
       *
       *  @returns {{
       *    translation: module:kld-affine.Matrix2D,
       *    rotation: module:kld-affine.Matrix2D,
       *    scale: module:kld-affine.Matrix2D,
       *    rotation0: module:kld-affine.Matrix2D
       *  }}
       */

    }, {
      key: "getDecomposition",
      value: function getDecomposition() {
        var E = (this.a + this.d) * 0.5;
        var F = (this.a - this.d) * 0.5;
        var G = (this.b + this.c) * 0.5;
        var H = (this.b - this.c) * 0.5;
        var Q = Math.sqrt(E * E + H * H);
        var R = Math.sqrt(F * F + G * G);
        var scaleX = Q + R;
        var scaleY = Q - R;
        var a1 = Math.atan2(G, F);
        var a2 = Math.atan2(H, E);
        var theta = (a2 - a1) * 0.5;
        var phi = (a2 + a1) * 0.5;
        return {
          translation: this.constructor.translation(this.e, this.f),
          rotation: this.constructor.rotation(phi),
          scale: this.constructor.nonUniformScaling(scaleX, scaleY),
          rotation0: this.constructor.rotation(theta)
        };
      }
      /**
       *  equals
       *
       *  @param {module:kld-affine.Matrix2D} that
       *  @returns {boolean}
       */

    }, {
      key: "equals",
      value: function equals(that) {
        return this.a === that.a && this.b === that.b && this.c === that.c && this.d === that.d && this.e === that.e && this.f === that.f;
      }
      /**
       *  precisionEquals
       *
       *  @param {module:kld-affine.Matrix2D} that
       *  @param {number} precision
       *  @returns {boolean}
       */

    }, {
      key: "precisionEquals",
      value: function precisionEquals(that, precision) {
        return Math.abs(this.a - that.a) < precision && Math.abs(this.b - that.b) < precision && Math.abs(this.c - that.c) < precision && Math.abs(this.d - that.d) < precision && Math.abs(this.e - that.e) < precision && Math.abs(this.f - that.f) < precision;
      }
      /**
       *  toString
       *
       *  @returns {string}
       */

    }, {
      key: "toString",
      value: function toString() {
        return "matrix(".concat(this.a, ",").concat(this.b, ",").concat(this.c, ",").concat(this.d, ",").concat(this.e, ",").concat(this.f, ")");
      }
    }], [{
      key: "translation",
      value: function translation(tx, ty) {
        return new Matrix2D(1, 0, 0, 1, tx, ty);
      }
      /**
       *  scaling
       *
       *  @param {number} scale
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "scaling",
      value: function scaling(scale) {
        return new Matrix2D(scale, 0, 0, scale, 0, 0);
      }
      /**
       *  scalingAt
       *
       *  @param {number} scale
       *  @param {module:kld-affine.Point2D} center
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "scalingAt",
      value: function scalingAt(scale, center) {
        return new Matrix2D(scale, 0, 0, scale, center.x - center.x * scale, center.y - center.y * scale);
      }
      /**
       *  nonUniformScaling
       *
       *  @param {number} scaleX
       *  @param {number} scaleY
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "nonUniformScaling",
      value: function nonUniformScaling(scaleX, scaleY) {
        return new Matrix2D(scaleX, 0, 0, scaleY, 0, 0);
      }
      /**
       *  nonUniformScalingAt
       *
       *  @param {number} scaleX
       *  @param {number} scaleY
       *  @param {module:kld-affine.Point2D} center
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "nonUniformScalingAt",
      value: function nonUniformScalingAt(scaleX, scaleY, center) {
        return new Matrix2D(scaleX, 0, 0, scaleY, center.x - center.x * scaleX, center.y - center.y * scaleY);
      }
      /**
       *  rotation
       *
       *  @param {number} radians
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "rotation",
      value: function rotation(radians) {
        var c = Math.cos(radians);
        var s = Math.sin(radians);
        return new Matrix2D(c, s, -s, c, 0, 0);
      }
      /**
       *  rotationAt
       *
       *  @param {number} radians
       *  @param {module:kld-affine.Point2D} center
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "rotationAt",
      value: function rotationAt(radians, center) {
        var c = Math.cos(radians);
        var s = Math.sin(radians);
        return new Matrix2D(c, s, -s, c, center.x - center.x * c + center.y * s, center.y - center.y * c - center.x * s);
      }
      /**
       *  rotationFromVector
       *
       *  @param {module:kld-affine.Vector2D} vector
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "rotationFromVector",
      value: function rotationFromVector(vector) {
        var unit = vector.unit();
        var c = unit.x; // cos

        var s = unit.y; // sin

        return new Matrix2D(c, s, -s, c, 0, 0);
      }
      /**
       *  xFlip
       *
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "xFlip",
      value: function xFlip() {
        return new Matrix2D(-1, 0, 0, 1, 0, 0);
      }
      /**
       *  yFlip
       *
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "yFlip",
      value: function yFlip() {
        return new Matrix2D(1, 0, 0, -1, 0, 0);
      }
      /**
       *  xSkew
       *
       *  @param {number} radians
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "xSkew",
      value: function xSkew(radians) {
        var t = Math.tan(radians);
        return new Matrix2D(1, 0, t, 1, 0, 0);
      }
      /**
       *  ySkew
       *
       *  @param {number} radians
       *  @returns {module:kld-affine.Matrix2D}
       */

    }, {
      key: "ySkew",
      value: function ySkew(radians) {
        var t = Math.tan(radians);
        return new Matrix2D(1, t, 0, 1, 0, 0);
      }
    }]);

    return Matrix2D;
  }();
  /**
   *  Identity matrix
   *
   *  @returns {module:kld-affine.Matrix2D}
   */


  Matrix2D.IDENTITY = new Matrix2D();

  Matrix2D.IDENTITY.isIdentity = function () {
    return true;
  };

  /* eslint-disable camelcase */

  /**
   *  Polynomial.js
   *
   *  @module Polynomial
   *  @copyright 2002-2019 Kevin Lindsey<br>
   *  -<br>
   *  Contribution {@link http://github.com/Quazistax/kld-polynomial}<br>
   *  copyright 2015 Robert Benko (Quazistax) <quazistax@gmail.com><br>
   *  MIT license
   */

  /**
   *  Sign of a number (+1, -1, +0, -0).
   *
   *  @param {number} x
   *  @returns {number}
   */
  function sign(x) {
    // eslint-disable-next-line no-self-compare
    return typeof x === "number" ? x ? x < 0 ? -1 : 1 : x === x ? x : NaN : NaN;
  }
  /**
   *  Polynomial
   *
   *  @memberof module:kld-polynomial
   */


  var Polynomial = /*#__PURE__*/function () {
    /**
     *  Polynomial
     *
     *  @param {Array<number>} coefs
     *  @returns {module:kld-polynomial.Polynomial}
     */
    function Polynomial() {
      _classCallCheck(this, Polynomial);

      this.coefs = [];

      for (var i = arguments.length - 1; i >= 0; i--) {
        this.coefs.push(i < 0 || arguments.length <= i ? undefined : arguments[i]);
      }

      this._variable = "t";
      this._s = 0;
    }
    /**
     *  Based on polint in "Numerical Recipes in C, 2nd Edition", pages 109-110
     *
     *  @param {Array<number>} xs
     *  @param {Array<number>} ys
     *  @param {number} n
     *  @param {number} offset
     *  @param {number} x
     *
     *  @returns {{y: number, dy: number}}
     */


    _createClass(Polynomial, [{
      key: "clone",

      /**
       *  Clones this polynomial and return the clone.
       *
       *  @returns {module:kld-polynomial.Polynomial}
       */
      value: function clone() {
        var poly = new Polynomial();
        poly.coefs = this.coefs.slice();
        return poly;
      }
      /**
       *  eval
       *
       *  @param {number} x
       */

    }, {
      key: "eval",
      value: function _eval(x) {
        if (isNaN(x)) {
          throw new TypeError("Parameter must be a number. Found '".concat(x, "'"));
        }

        var result = 0;

        for (var i = this.coefs.length - 1; i >= 0; i--) {
          result = result * x + this.coefs[i];
        }

        return result;
      }
      /**
       *  add
       *
       *  @param {module:kld-polynomial.Polynomial} that
       *  @returns {module:kld-polynomial.Polynomial}
       */

    }, {
      key: "add",
      value: function add(that) {
        var result = new Polynomial();
        var d1 = this.getDegree();
        var d2 = that.getDegree();
        var dmax = Math.max(d1, d2);

        for (var i = 0; i <= dmax; i++) {
          var v1 = i <= d1 ? this.coefs[i] : 0;
          var v2 = i <= d2 ? that.coefs[i] : 0;
          result.coefs[i] = v1 + v2;
        }

        return result;
      }
      /**
       *  multiply
       *
       *  @param {module:kld-polynomial.Polynomial} that
       *  @returns {module:kld-polynomial.Polynomial}
       */

    }, {
      key: "multiply",
      value: function multiply(that) {
        var result = new Polynomial();

        for (var i = 0; i <= this.getDegree() + that.getDegree(); i++) {
          result.coefs.push(0);
        }

        for (var _i = 0; _i <= this.getDegree(); _i++) {
          for (var j = 0; j <= that.getDegree(); j++) {
            result.coefs[_i + j] += this.coefs[_i] * that.coefs[j];
          }
        }

        return result;
      }
      /**
       *  divideEqualsScalar
       *
       *  @deprecated To be replaced by divideScalar
       *  @param {number} scalar
       */

    }, {
      key: "divideEqualsScalar",
      value: function divideEqualsScalar(scalar) {
        for (var i = 0; i < this.coefs.length; i++) {
          this.coefs[i] /= scalar;
        }
      }
      /**
       *  simplifyEquals
       *
       *  @deprecated To be replaced by simplify
       *  @param {number} TOLERANCE
       */

    }, {
      key: "simplifyEquals",
      value: function simplifyEquals() {
        var TOLERANCE = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1e-12;

        for (var i = this.getDegree(); i >= 0; i--) {
          if (Math.abs(this.coefs[i]) <= TOLERANCE) {
            this.coefs.pop();
          } else {
            break;
          }
        }
      }
      /**
       *  Sets small coefficients to zero.
       *
       *  @deprecated To be replaced by removeZeros
       *  @param {number} TOLERANCE
       *  @returns {module:kld-polynomial.Polynomial}
       */

    }, {
      key: "removeZerosEquals",
      value: function removeZerosEquals() {
        var TOLERANCE = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1e-15;
        var c = this.coefs;
        var err = 10 * TOLERANCE * Math.abs(c.reduce(function (pv, cv) {
          return Math.abs(cv) > Math.abs(pv) ? cv : pv;
        }));

        for (var i = 0; i < c.length - 1; i++) {
          if (Math.abs(c[i]) < err) {
            c[i] = 0;
          }
        }

        return this;
      }
      /**
       *  Scales polynomial so that leading coefficient becomes 1.
       *
       *  @deprecated To be replaced by getMonic
       *  @returns {module:kld-polynomial.Polynomial}
       */

    }, {
      key: "monicEquals",
      value: function monicEquals() {
        var c = this.coefs;

        if (c[c.length - 1] !== 1) {
          this.divideEqualsScalar(c[c.length - 1]);
        }

        return this;
      }
      /**
       *  toString
       *
       *  @returns {string}
       */

    }, {
      key: "toString",
      value: function toString() {
        var coefs = [];
        var signs = [];

        for (var i = this.coefs.length - 1; i >= 0; i--) {
          var value = Math.round(this.coefs[i] * 1000) / 1000;

          if (value !== 0) {
            var signString = value < 0 ? " - " : " + ";
            value = Math.abs(value);

            if (i > 0) {
              if (value === 1) {
                value = this._variable;
              } else {
                value += this._variable;
              }
            }

            if (i > 1) {
              value += "^" + i;
            }

            signs.push(signString);
            coefs.push(value);
          }
        }

        signs[0] = signs[0] === " + " ? "" : "-";
        var result = "";

        for (var _i2 = 0; _i2 < coefs.length; _i2++) {
          result += signs[_i2] + coefs[_i2];
        }

        return result;
      }
      /**
       *  bisection
       *
       *  @param {number} min
       *  @param {number} max
       *  @param {number} [TOLERANCE]
       *  @param {number} [ACCURACY]
       *  @returns {number}
       */

    }, {
      key: "bisection",
      value: function bisection(min, max) {
        var TOLERANCE = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1e-6;
        var ACCURACY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 15;
        var minValue = this.eval(min);
        var maxValue = this.eval(max);
        var result;

        if (Math.abs(minValue) <= TOLERANCE) {
          result = min;
        } else if (Math.abs(maxValue) <= TOLERANCE) {
          result = max;
        } else if (minValue * maxValue <= 0) {
          var tmp1 = Math.log(max - min);
          var tmp2 = Math.LN10 * ACCURACY;
          var maxIterations = Math.ceil((tmp1 + tmp2) / Math.LN2);

          for (var i = 0; i < maxIterations; i++) {
            result = 0.5 * (min + max);
            var value = this.eval(result);

            if (Math.abs(value) <= TOLERANCE) {
              break;
            }

            if (value * minValue < 0) {
              max = result;
              maxValue = value;
            } else {
              min = result;
              minValue = value;
            }
          }
        }

        return result;
      }
      /**
       *  Based on trapzd in "Numerical Recipes in C, 2nd Edition", page 137
       *
       *  @param {number} min
       *  @param {number} max
       *  @param {number} n
       *  @returns {number}
       */

    }, {
      key: "trapezoid",
      value: function trapezoid(min, max, n) {
        if (isNaN(min) || isNaN(max) || isNaN(n)) {
          throw new TypeError("Parameters must be numbers");
        }

        var range = max - min;

        if (n === 1) {
          var minValue = this.eval(min);
          var maxValue = this.eval(max);
          this._s = 0.5 * range * (minValue + maxValue);
        } else {
          var iter = 1 << n - 2;
          var delta = range / iter;
          var x = min + 0.5 * delta;
          var sum = 0;

          for (var i = 0; i < iter; i++) {
            sum += this.eval(x);
            x += delta;
          }

          this._s = 0.5 * (this._s + range * sum / iter);
        }

        if (isNaN(this._s)) {
          throw new TypeError("this._s is NaN");
        }

        return this._s;
      }
      /**
       *  Based on trapzd in "Numerical Recipes in C, 2nd Edition", page 139
       *
       *  @param {number} min
       *  @param {number} max
       *  @returns {number}
       */

    }, {
      key: "simpson",
      value: function simpson(min, max) {
        if (isNaN(min) || isNaN(max)) {
          throw new TypeError("Parameters must be numbers");
        }

        var range = max - min;
        var st = 0.5 * range * (this.eval(min) + this.eval(max));
        var t = st;
        var s = 4.0 * st / 3.0;
        var os = s;
        var ost = st;
        var TOLERANCE = 1e-7;
        var iter = 1;

        for (var n = 2; n <= 20; n++) {
          var delta = range / iter;
          var x = min + 0.5 * delta;
          var sum = 0;

          for (var i = 1; i <= iter; i++) {
            sum += this.eval(x);
            x += delta;
          }

          t = 0.5 * (t + range * sum / iter);
          st = t;
          s = (4.0 * st - ost) / 3.0;

          if (Math.abs(s - os) < TOLERANCE * Math.abs(os)) {
            break;
          }

          os = s;
          ost = st;
          iter <<= 1;
        }

        return s;
      }
      /**
       *  romberg
       *
       *  @param {number} min
       *  @param {number} max
       *  @returns {number}
       */

    }, {
      key: "romberg",
      value: function romberg(min, max) {
        if (isNaN(min) || isNaN(max)) {
          throw new TypeError("Parameters must be numbers");
        }

        var MAX = 20;
        var K = 3;
        var TOLERANCE = 1e-6;
        var s = new Array(MAX + 1);
        var h = new Array(MAX + 1);
        var result = {
          y: 0,
          dy: 0
        };
        h[0] = 1.0;

        for (var j = 1; j <= MAX; j++) {
          s[j - 1] = this.trapezoid(min, max, j);

          if (j >= K) {
            result = Polynomial.interpolate(h, s, K, j - K, 0.0);

            if (Math.abs(result.dy) <= TOLERANCE * result.y) {
              break;
            }
          }

          s[j] = s[j - 1];
          h[j] = 0.25 * h[j - 1];
        }

        return result.y;
      }
      /**
       *  Estimate what is the maximum polynomial evaluation error value under which polynomial evaluation could be in fact 0.
       *
       *  @param {number} maxAbsX
       *  @returns {number}
       */

    }, {
      key: "zeroErrorEstimate",
      value: function zeroErrorEstimate(maxAbsX) {
        var poly = this;
        var ERRF = 1e-15;

        if (typeof maxAbsX === "undefined") {
          var rb = poly.bounds();
          maxAbsX = Math.max(Math.abs(rb.minX), Math.abs(rb.maxX));
        }

        if (maxAbsX < 0.001) {
          return 2 * Math.abs(poly.eval(ERRF));
        }

        var n = poly.coefs.length - 1;
        var an = poly.coefs[n];
        return 10 * ERRF * poly.coefs.reduce(function (m, v, i) {
          var nm = v / an * Math.pow(maxAbsX, i);
          return nm > m ? nm : m;
        }, 0);
      }
      /**
       *  Calculates upper Real roots bounds. <br/>
       *  Real roots are in interval [negX, posX]. Determined by Fujiwara method.
       *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
       *
       *  @returns {{ negX: number, posX: number }}
       */

    }, {
      key: "boundsUpperRealFujiwara",
      value: function boundsUpperRealFujiwara() {
        var a = this.coefs;
        var n = a.length - 1;
        var an = a[n];

        if (an !== 1) {
          a = this.coefs.map(function (v) {
            return v / an;
          });
        }

        var b = a.map(function (v, i) {
          return i < n ? Math.pow(Math.abs(i === 0 ? v / 2 : v), 1 / (n - i)) : v;
        });
        var coefSelectionFunc;

        var find2Max = function find2Max(acc, bi, i) {
          if (coefSelectionFunc(i)) {
            if (acc.max < bi) {
              acc.nearmax = acc.max;
              acc.max = bi;
            } else if (acc.nearmax < bi) {
              acc.nearmax = bi;
            }
          }

          return acc;
        };

        coefSelectionFunc = function coefSelectionFunc(i) {
          return i < n && a[i] < 0;
        }; // eslint-disable-next-line unicorn/no-fn-reference-in-iterator


        var max_nearmax_pos = b.reduce(find2Max, {
          max: 0,
          nearmax: 0
        });

        coefSelectionFunc = function coefSelectionFunc(i) {
          return i < n && (n % 2 === i % 2 ? a[i] < 0 : a[i] > 0);
        }; // eslint-disable-next-line unicorn/no-fn-reference-in-iterator


        var max_nearmax_neg = b.reduce(find2Max, {
          max: 0,
          nearmax: 0
        });
        return {
          negX: -2 * max_nearmax_neg.max,
          posX: 2 * max_nearmax_pos.max
        };
      }
      /**
       *  Calculates lower Real roots bounds. <br/>
       *  There are no Real roots in interval <negX, posX>. Determined by Fujiwara method.
       *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
       *
       *  @returns {{ negX: number, posX: number }}
       */

    }, {
      key: "boundsLowerRealFujiwara",
      value: function boundsLowerRealFujiwara() {
        var poly = new Polynomial();
        poly.coefs = this.coefs.slice().reverse();
        var res = poly.boundsUpperRealFujiwara();
        res.negX = 1 / res.negX;
        res.posX = 1 / res.posX;
        return res;
      }
      /**
       *  Calculates left and right Real roots bounds. <br/>
       *  Real roots are in interval [minX, maxX]. Combines Fujiwara lower and upper bounds to get minimal interval.
       *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
       *
       *  @returns {{ minX: number, maxX: number }}
      */

    }, {
      key: "bounds",
      value: function bounds() {
        var urb = this.boundsUpperRealFujiwara();
        var rb = {
          minX: urb.negX,
          maxX: urb.posX
        };

        if (urb.negX === 0 && urb.posX === 0) {
          return rb;
        }

        if (urb.negX === 0) {
          rb.minX = this.boundsLowerRealFujiwara().posX;
        } else if (urb.posX === 0) {
          rb.maxX = this.boundsLowerRealFujiwara().negX;
        }

        if (rb.minX > rb.maxX) {
          rb.minX = rb.maxX = 0;
        }

        return rb; // TODO: if sure that there are no complex roots
        // (maybe by using Sturm's theorem) use:
        // return this.boundsRealLaguerre();
      }
      /**
       *  Calculates absolute upper roots bound. <br/>
       *  All (Complex and Real) roots magnitudes are &lt;= result. Determined by Rouche method.
       *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
       *
       *  @returns {number}
       */

    }, {
      key: "boundUpperAbsRouche",
      value: function boundUpperAbsRouche() {
        var a = this.coefs;
        var n = a.length - 1;
        var max = a.reduce(function (prev, curr, i) {
          if (i !== n) {
            curr = Math.abs(curr);
            return prev < curr ? curr : prev;
          }

          return prev;
        }, 0);
        return 1 + max / Math.abs(a[n]);
      }
      /**
       *  Calculates absolute lower roots bound. <br/>
       *  All (Complex and Real) roots magnitudes are &gt;= result. Determined by Rouche method.
       *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
       *
       *  @returns {number}
       */

    }, {
      key: "boundLowerAbsRouche",
      value: function boundLowerAbsRouche() {
        var a = this.coefs;
        var max = a.reduce(function (prev, curr, i) {
          if (i !== 0) {
            curr = Math.abs(curr);
            return prev < curr ? curr : prev;
          }

          return prev;
        }, 0);
        return Math.abs(a[0]) / (Math.abs(a[0]) + max);
      }
      /**
       *  Calculates left and right Real roots bounds.<br/>
       *  WORKS ONLY if all polynomial roots are Real.
       *  Real roots are in interval [minX, maxX]. Determined by Laguerre method.
       *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
       *
       *  @returns {{ minX: number, maxX: number }}
       */

    }, {
      key: "boundsRealLaguerre",
      value: function boundsRealLaguerre() {
        var a = this.coefs;
        var n = a.length - 1;
        var p1 = -a[n - 1] / (n * a[n]);
        var undersqrt = a[n - 1] * a[n - 1] - 2 * n / (n - 1) * a[n] * a[n - 2];
        var p2 = (n - 1) / (n * a[n]) * Math.sqrt(undersqrt);

        if (p2 < 0) {
          p2 = -p2;
        }

        return {
          minX: p1 - p2,
          maxX: p1 + p2
        };
      }
      /**
       *  Root count by Descartes rule of signs. <br/>
       *  Returns maximum number of positive and negative real roots and minimum number of complex roots.
       *  @see {@link http://en.wikipedia.org/wiki/Descartes%27_rule_of_signs}
       *
       *  @returns {{maxRealPos: number, maxRealNeg: number, minComplex: number}}
       */

    }, {
      key: "countRootsDescartes",
      value: function countRootsDescartes() {
        var a = this.coefs;
        var n = a.length - 1;
        var accum = a.reduce(function (acc, ai, i) {
          if (acc.prev_a !== 0 && ai !== 0) {
            if (acc.prev_a < 0 === ai > 0) {
              acc.pos++;
            }

            if (i % 2 === 0 !== acc.prev_a < 0 === (i % 2 === 1 !== ai > 0)) {
              acc.neg++;
            }
          }

          acc.prev_a = ai;
          return acc;
        }, {
          pos: 0,
          neg: 0,
          prev_a: 0
        });
        return {
          maxRealPos: accum.pos,
          maxRealNeg: accum.neg,
          minComplex: n - (accum.pos + accum.neg)
        };
      } // getters and setters

      /**
       *  get degree
       *
       *  @returns {number}
       */

    }, {
      key: "getDegree",
      value: function getDegree() {
        return this.coefs.length - 1;
      }
      /**
       *  getDerivative
       *
       *  @returns {module:kld-polynomial.Polynomial}
       */

    }, {
      key: "getDerivative",
      value: function getDerivative() {
        var derivative = new Polynomial();

        for (var i = 1; i < this.coefs.length; i++) {
          derivative.coefs.push(i * this.coefs[i]);
        }

        return derivative;
      }
      /**
       *  getRoots
       *
       *  @returns {Array<number>}
       */

    }, {
      key: "getRoots",
      value: function getRoots() {
        var result;
        this.simplifyEquals();

        switch (this.getDegree()) {
          case 0:
            result = [];
            break;

          case 1:
            result = this.getLinearRoot();
            break;

          case 2:
            result = this.getQuadraticRoots();
            break;

          case 3:
            result = this.getCubicRoots();
            break;

          case 4:
            result = this.getQuarticRoots();
            break;

          default:
            result = [];
        }

        return result;
      }
      /**
       *  getRootsInInterval
       *
       *  @param {number} min
       *  @param {number} max
       *  @returns {Array<number>}
       */

    }, {
      key: "getRootsInInterval",
      value: function getRootsInInterval(min, max) {
        var roots = [];
        /**
         *  @param {number} value
         */

        function push(value) {
          if (typeof value === "number") {
            roots.push(value);
          }
        }

        if (this.getDegree() === 0) {
          throw new RangeError("Unexpected empty polynomial");
        } else if (this.getDegree() === 1) {
          push(this.bisection(min, max));
        } else {
          // get roots of derivative
          var deriv = this.getDerivative();
          var droots = deriv.getRootsInInterval(min, max);

          if (droots.length > 0) {
            // find root on [min, droots[0]]
            push(this.bisection(min, droots[0])); // find root on [droots[i],droots[i+1]] for 0 <= i <= count-2

            for (var i = 0; i <= droots.length - 2; i++) {
              push(this.bisection(droots[i], droots[i + 1]));
            } // find root on [droots[count-1],xmax]


            push(this.bisection(droots[droots.length - 1], max));
          } else {
            // polynomial is monotone on [min,max], has at most one root
            push(this.bisection(min, max));
          }
        }

        return roots;
      }
      /**
       *  getLinearRoot
       *
       *  @returns {number}
       */

    }, {
      key: "getLinearRoot",
      value: function getLinearRoot() {
        var result = [];
        var a = this.coefs[1];

        if (a !== 0) {
          result.push(-this.coefs[0] / a);
        }

        return result;
      }
      /**
       *  getQuadraticRoots
       *
       *  @returns {Array<number>}
       */

    }, {
      key: "getQuadraticRoots",
      value: function getQuadraticRoots() {
        var results = [];

        if (this.getDegree() === 2) {
          var a = this.coefs[2];
          var b = this.coefs[1] / a;
          var c = this.coefs[0] / a;
          var d = b * b - 4 * c;

          if (d > 0) {
            var e = Math.sqrt(d);
            results.push(0.5 * (-b + e));
            results.push(0.5 * (-b - e));
          } else if (d === 0) {
            // really two roots with same value, but we only return one
            results.push(0.5 * -b);
          } // else imaginary results

        }

        return results;
      }
      /**
       *  getCubicRoots
       *
       *  This code is based on MgcPolynomial.cpp written by David Eberly.  His
       *  code along with many other excellent examples are avaiable at his site:
       *  http://www.geometrictools.com
       *
       *  @returns {Array<number>}
       */

    }, {
      key: "getCubicRoots",
      value: function getCubicRoots() {
        var results = [];

        if (this.getDegree() === 3) {
          var c3 = this.coefs[3];
          var c2 = this.coefs[2] / c3;
          var c1 = this.coefs[1] / c3;
          var c0 = this.coefs[0] / c3;
          var a = (3 * c1 - c2 * c2) / 3;
          var b = (2 * c2 * c2 * c2 - 9 * c1 * c2 + 27 * c0) / 27;
          var offset = c2 / 3;
          var discrim = b * b / 4 + a * a * a / 27;
          var halfB = b / 2;
          var ZEROepsilon = this.zeroErrorEstimate();

          if (Math.abs(discrim) <= ZEROepsilon) {
            discrim = 0;
          }

          if (discrim > 0) {
            var e = Math.sqrt(discrim);
            var root; // eslint-disable-line no-shadow

            var tmp = -halfB + e;

            if (tmp >= 0) {
              root = Math.pow(tmp, 1 / 3);
            } else {
              root = -Math.pow(-tmp, 1 / 3);
            }

            tmp = -halfB - e;

            if (tmp >= 0) {
              root += Math.pow(tmp, 1 / 3);
            } else {
              root -= Math.pow(-tmp, 1 / 3);
            }

            results.push(root - offset);
          } else if (discrim < 0) {
            var distance = Math.sqrt(-a / 3);
            var angle = Math.atan2(Math.sqrt(-discrim), -halfB) / 3;
            var cos = Math.cos(angle);
            var sin = Math.sin(angle);
            var sqrt3 = Math.sqrt(3);
            results.push(2 * distance * cos - offset);
            results.push(-distance * (cos + sqrt3 * sin) - offset);
            results.push(-distance * (cos - sqrt3 * sin) - offset);
          } else {
            var _tmp;

            if (halfB >= 0) {
              _tmp = -Math.pow(halfB, 1 / 3);
            } else {
              _tmp = Math.pow(-halfB, 1 / 3);
            }

            results.push(2 * _tmp - offset); // really should return next root twice, but we return only one

            results.push(-_tmp - offset);
          }
        }

        return results;
      }
      /**
       *  Calculates roots of quartic polynomial. <br/>
       *  First, derivative roots are found, then used to split quartic polynomial
       *  into segments, each containing one root of quartic polynomial.
       *  Segments are then passed to newton's method to find roots.
       *
       *  @returns {Array<number>} roots
       */

    }, {
      key: "getQuarticRoots",
      value: function getQuarticRoots() {
        var results = [];
        var n = this.getDegree();

        if (n === 4) {
          var poly = new Polynomial();
          poly.coefs = this.coefs.slice();
          poly.divideEqualsScalar(poly.coefs[n]);
          var ERRF = 1e-15;

          if (Math.abs(poly.coefs[0]) < 10 * ERRF * Math.abs(poly.coefs[3])) {
            poly.coefs[0] = 0;
          }

          var poly_d = poly.getDerivative();
          var derrt = poly_d.getRoots().sort(function (a, b) {
            return a - b;
          });
          var dery = [];
          var nr = derrt.length - 1;
          var rb = this.bounds();
          var maxabsX = Math.max(Math.abs(rb.minX), Math.abs(rb.maxX));
          var ZEROepsilon = this.zeroErrorEstimate(maxabsX);

          for (var _i3 = 0; _i3 <= nr; _i3++) {
            dery.push(poly.eval(derrt[_i3]));
          }

          for (var _i4 = 0; _i4 <= nr; _i4++) {
            if (Math.abs(dery[_i4]) < ZEROepsilon) {
              dery[_i4] = 0;
            }
          }

          var i = 0;
          var dx = Math.max(0.1 * (rb.maxX - rb.minX) / n, ERRF);
          var guesses = [];
          var minmax = [];

          if (nr > -1) {
            if (dery[0] !== 0) {
              if (sign(dery[0]) !== sign(poly.eval(derrt[0] - dx) - dery[0])) {
                guesses.push(derrt[0] - dx);
                minmax.push([rb.minX, derrt[0]]);
              }
            } else {
              results.push(derrt[0], derrt[0]);
              i++;
            }

            for (; i < nr; i++) {
              if (dery[i + 1] === 0) {
                results.push(derrt[i + 1], derrt[i + 1]);
                i++;
              } else if (sign(dery[i]) !== sign(dery[i + 1])) {
                guesses.push((derrt[i] + derrt[i + 1]) / 2);
                minmax.push([derrt[i], derrt[i + 1]]);
              }
            }

            if (dery[nr] !== 0 && sign(dery[nr]) !== sign(poly.eval(derrt[nr] + dx) - dery[nr])) {
              guesses.push(derrt[nr] + dx);
              minmax.push([derrt[nr], rb.maxX]);
            }
          }
          /**
           *  @param {number} x
           *  @returns {number}
           */


          var f = function f(x) {
            return poly.eval(x);
          };
          /**
           *  @param {number} x
           *  @returns {number}
           */


          var df = function df(x) {
            return poly_d.eval(x);
          };

          if (guesses.length > 0) {
            for (i = 0; i < guesses.length; i++) {
              guesses[i] = Polynomial.newtonSecantBisection(guesses[i], f, df, 32, minmax[i][0], minmax[i][1]);
            }
          }

          results = results.concat(guesses);
        }

        return results;
      }
    }], [{
      key: "interpolate",
      value: function interpolate(xs, ys, n, offset, x) {
        if (xs.constructor !== Array || ys.constructor !== Array) {
          throw new TypeError("xs and ys must be arrays");
        }

        if (isNaN(n) || isNaN(offset) || isNaN(x)) {
          throw new TypeError("n, offset, and x must be numbers");
        }

        var i, y;
        var dy = 0;
        var c = new Array(n);
        var d = new Array(n);
        var ns = 0;
        var diff = Math.abs(x - xs[offset]);

        for (i = 0; i < n; i++) {
          var dift = Math.abs(x - xs[offset + i]);

          if (dift < diff) {
            ns = i;
            diff = dift;
          }

          c[i] = d[i] = ys[offset + i];
        }

        y = ys[offset + ns];
        ns--;

        for (var m = 1; m < n; m++) {
          for (i = 0; i < n - m; i++) {
            var ho = xs[offset + i] - x;
            var hp = xs[offset + i + m] - x;
            var w = c[i + 1] - d[i];
            var den = ho - hp;

            if (den === 0.0) {
              throw new RangeError("Unable to interpolate polynomial. Two numbers in n were identical (to within roundoff)");
            }

            den = w / den;
            d[i] = hp * den;
            c[i] = ho * den;
          }

          dy = 2 * (ns + 1) < n - m ? c[ns + 1] : d[ns--];
          y += dy;
        }

        return {
          y: y,
          dy: dy
        };
      }
      /**
       *  Newton's (Newton-Raphson) method for finding Real roots on univariate function. <br/>
       *  When using bounds, algorithm falls back to secant if newton goes out of range.
       *  Bisection is fallback for secant when determined secant is not efficient enough.
       *  @see {@link http://en.wikipedia.org/wiki/Newton%27s_method}
       *  @see {@link http://en.wikipedia.org/wiki/Secant_method}
       *  @see {@link http://en.wikipedia.org/wiki/Bisection_method}
       *
       *  @param {number} x0 - Initial root guess
       *  @param {Function} f - Function which root we are trying to find
       *  @param {Function} df - Derivative of function f
       *  @param {number} max_iterations - Maximum number of algorithm iterations
       *  @param {number} [min] - Left bound value
       *  @param {number} [max] - Right bound value
       *  @returns {number} root
       */

    }, {
      key: "newtonSecantBisection",
      value: function newtonSecantBisection(x0, f, df, max_iterations, min, max) {
        var x,
            prev_dfx = 0,
            dfx,
            prev_x_ef_correction = 0,
            x_correction,
            x_new;
        var y, y_atmin, y_atmax;
        x = x0;
        var ACCURACY = 14;
        var min_correction_factor = Math.pow(10, -ACCURACY);
        var isBounded = typeof min === "number" && typeof max === "number";

        if (isBounded) {
          if (min > max) {
            throw new RangeError("Min must be greater than max");
          }

          y_atmin = f(min);
          y_atmax = f(max);

          if (sign(y_atmin) === sign(y_atmax)) {
            throw new RangeError("Y values of bounds must be of opposite sign");
          }
        }

        var isEnoughCorrection = function isEnoughCorrection() {
          // stop if correction is too small or if correction is in simple loop
          return Math.abs(x_correction) <= min_correction_factor * Math.abs(x) || prev_x_ef_correction === x - x_correction - x;
        };

        for (var i = 0; i < max_iterations; i++) {
          dfx = df(x);

          if (dfx === 0) {
            if (prev_dfx === 0) {
              // error
              throw new RangeError("df(x) is zero");
            } else {
              // use previous derivation value
              dfx = prev_dfx;
            } // or move x a little?
            // dfx = df(x != 0 ? x + x * 1e-15 : 1e-15);

          }

          prev_dfx = dfx;
          y = f(x);
          x_correction = y / dfx;
          x_new = x - x_correction;

          if (isEnoughCorrection()) {
            break;
          }

          if (isBounded) {
            if (sign(y) === sign(y_atmax)) {
              max = x;
              y_atmax = y;
            } else if (sign(y) === sign(y_atmin)) {
              min = x;
              y_atmin = y;
            } else {
              x = x_new;
              break;
            }

            if (x_new < min || x_new > max) {
              if (sign(y_atmin) === sign(y_atmax)) {
                break;
              }

              var RATIO_LIMIT = 50;
              var AIMED_BISECT_OFFSET = 0.25; // [0, 0.5)

              var dy = y_atmax - y_atmin;
              var dx = max - min;

              if (dy === 0) {
                x_correction = x - (min + dx * 0.5);
              } else if (Math.abs(dy / Math.min(y_atmin, y_atmax)) > RATIO_LIMIT) {
                x_correction = x - (min + dx * (0.5 + (Math.abs(y_atmin) < Math.abs(y_atmax) ? -AIMED_BISECT_OFFSET : AIMED_BISECT_OFFSET)));
              } else {
                x_correction = x - (min - y_atmin / dy * dx);
              }

              x_new = x - x_correction;

              if (isEnoughCorrection()) {
                break;
              }
            }
          }

          prev_x_ef_correction = x - x_new;
          x = x_new;
        }

        return x;
      }
    }]);

    return Polynomial;
  }();

  /**
   *  PathLexeme.js
   *
   *  @copyright 2002, 2013 Kevin Lindsey
   *  @module PathLexeme
   */

  /**
   *  PathLexeme
   */
  var PathLexeme = /*#__PURE__*/function () {
    /**
     *  PathLexeme
     *
     *  @param {number} type
     *  @param {string} text
     */
    function PathLexeme(type, text) {
      _classCallCheck(this, PathLexeme);

      this.type = type;
      this.text = text;
    }
    /**
     *  Determine if this lexeme is of the given type
     *
     *  @param {number} type
     *  @returns {boolean}
     */


    _createClass(PathLexeme, [{
      key: "typeis",
      value: function typeis(type) {
        return this.type === type;
      }
    }]);

    return PathLexeme;
  }();
  /*
   * token type enumerations
   */


  PathLexeme.UNDEFINED = 0;
  PathLexeme.COMMAND = 1;
  PathLexeme.NUMBER = 2;
  PathLexeme.EOD = 3;

  /**
   *  Create a new instance of PathLexer
   */

  var PathLexer = /*#__PURE__*/function () {
    /**
     *  @param {string} [pathData]
     */
    function PathLexer(pathData) {
      _classCallCheck(this, PathLexer);

      if (pathData === null || pathData === undefined) {
        pathData = "";
      }

      this.setPathData(pathData);
    }
    /**
     *  setPathData
     *
     *  @param {string} pathData
     */


    _createClass(PathLexer, [{
      key: "setPathData",
      value: function setPathData(pathData) {
        if (typeof pathData !== "string") {
          throw new TypeError("The first parameter must be a string");
        }

        this._pathData = pathData;
      }
      /**
       *  getNextToken
       *
       *  @returns {PathLexeme}
       */

    }, {
      key: "getNextToken",
      value: function getNextToken() {
        var result = null;
        var d = this._pathData;

        while (result === null) {
          if (d === null || d === "") {
            result = new PathLexeme(PathLexeme.EOD, "");
          } else if (d.match(/^([ \t\r\n,]+)/)) {
            d = d.substr(RegExp.$1.length);
          } else if (d.match(/^([AaCcHhLlMmQqSsTtVvZz])/)) {
            result = new PathLexeme(PathLexeme.COMMAND, RegExp.$1);
            d = d.substr(RegExp.$1.length);
          }
          /* eslint-disable-next-line unicorn/no-unsafe-regex */
          else if (d.match(/^(([-+]?\d+(\.\d*)?|[-+]?\.\d+)([eE][-+]?\d+)?)/)) {
              result = new PathLexeme(PathLexeme.NUMBER, RegExp.$1);
              d = d.substr(RegExp.$1.length);
            } else {
              throw new SyntaxError("Unrecognized path data: ".concat(d));
            }
        }

        this._pathData = d;
        return result;
      }
    }]);

    return PathLexer;
  }();

  var BOP = "BOP";
  /**
   *  PathParser
   */

  var PathParser = /*#__PURE__*/function () {
    /**
     * constructor
     */
    function PathParser() {
      _classCallCheck(this, PathParser);

      this._lexer = new PathLexer();
      this._handler = null;
    }
    /**
     *  parseData
     *
     *  @param {string} pathData
     *  @throws {Error}
     */


    _createClass(PathParser, [{
      key: "parseData",
      value: function parseData(pathData) {
        if (typeof pathData !== "string") {
          throw new TypeError("The first parameter must be a string: ".concat(pathData));
        } // begin parse


        if (this._handler !== null && typeof this._handler.beginParse === "function") {
          this._handler.beginParse();
        } // pass the pathData to the lexer


        var lexer = this._lexer;
        lexer.setPathData(pathData); // set mode to signify new path - Beginning Of Path

        var mode = BOP; // Process all tokens

        var lastToken = null;
        var token = lexer.getNextToken();

        while (token.typeis(PathLexeme.EOD) === false) {
          var parameterCount = void 0;
          var params = []; // process current token

          switch (token.type) {
            case PathLexeme.COMMAND:
              if (mode === BOP && token.text !== "M" && token.text !== "m") {
                throw new SyntaxError("New paths must begin with a moveto command. Found '".concat(token.text, "'"));
              } // Set new parsing mode


              mode = token.text; // Get count of numbers that must follow this command

              parameterCount = PathParser.PARAMCOUNT[token.text.toUpperCase()]; // Advance past command token

              token = lexer.getNextToken();
              break;

            case PathLexeme.NUMBER:
              // Most commands allow you to keep repeating parameters
              // without specifying the command again.  We just assume
              // that is the case and do nothing since the mode remains
              // the same
              if (mode === BOP) {
                throw new SyntaxError("New paths must begin with a moveto command. Found '".concat(token.text, "'"));
              } else {
                parameterCount = PathParser.PARAMCOUNT[mode.toUpperCase()];
              }

              break;

            default:
              throw new SyntaxError("Unrecognized command type: ".concat(token.type));
          } // Get parameters


          for (var i = 0; i < parameterCount; i++) {
            switch (token.type) {
              case PathLexeme.COMMAND:
                throw new SyntaxError("Parameter must be a number. Found '".concat(token.text, "'"));

              case PathLexeme.NUMBER:
                // convert current parameter to a float and add to
                // parameter list
                params[i] = parseFloat(token.text);
                break;

              case PathLexeme.EOD:
                throw new SyntaxError("Unexpected end of string");

              default:
                throw new SyntaxError("Unrecognized parameter type. Found type '".concat(token.type, "'"));
            }

            token = lexer.getNextToken();
          } // fire handler


          if (this._handler !== null) {
            var handler = this._handler;
            var methodName = PathParser.METHODNAME[mode]; // convert types for arcs

            if (mode === "a" || mode === "A") {
              params[3] = params[3] !== 0;
              params[4] = params[4] !== 0;
            }

            if (handler !== null && typeof handler[methodName] === "function") {
              handler[methodName].apply(handler, params);
            }
          } // Lineto's follow moveto when no command follows moveto params.  Go
          // ahead and set the mode just in case no command follows the moveto
          // command


          switch (mode) {
            case "M":
              mode = "L";
              break;

            case "m":
              mode = "l";
              break;

            case "Z":
            case "z":
              mode = "BOP";
              break;

          }

          if (token === lastToken) {
            throw new SyntaxError("Parser stalled on '".concat(token.text, "'"));
          } else {
            lastToken = token;
          }
        } // end parse


        if (this._handler !== null && typeof this._handler.endParse === "function") {
          this._handler.endParse();
        }
      }
      /**
       *  setHandler
       *
       *  @param {Object} handler
       */

    }, {
      key: "setHandler",
      value: function setHandler(handler) {
        this._handler = handler;
      }
    }]);

    return PathParser;
  }();
  /*
   * class constants
   */


  PathParser.PARAMCOUNT = {
    A: 7,
    C: 6,
    H: 1,
    L: 2,
    M: 2,
    Q: 4,
    S: 4,
    T: 2,
    V: 1,
    Z: 0
  };
  PathParser.METHODNAME = {
    A: "arcAbs",
    a: "arcRel",
    C: "curvetoCubicAbs",
    c: "curvetoCubicRel",
    H: "linetoHorizontalAbs",
    h: "linetoHorizontalRel",
    L: "linetoAbs",
    l: "linetoRel",
    M: "movetoAbs",
    m: "movetoRel",
    Q: "curvetoQuadraticAbs",
    q: "curvetoQuadraticRel",
    S: "curvetoCubicSmoothAbs",
    s: "curvetoCubicSmoothRel",
    T: "curvetoQuadraticSmoothAbs",
    t: "curvetoQuadraticSmoothRel",
    V: "linetoVerticalAbs",
    v: "linetoVerticalRel",
    Z: "closePath",
    z: "closePath"
  };

  var TWO_PI = 2.0 * Math.PI;
  /**
   * Based on the SVG 1.1 specification, Appendix F: Implementation Requirements,
   * Section F.6 "Elliptical arc implementation notes"
   * {@see https://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes}
   *
   * @param {module:kld-affine.Point2D} startPoint
   * @param {module:kld-affine.Point2D} endPoint
   * @param {number} rx
   * @param {number} ry
   * @param {number} angle
   * @param {boolean} arcFlag
   * @param {boolean} sweepFlag
   * @returns {Array}
   */

  function getArcParameters(startPoint, endPoint, rx, ry, angle, arcFlag, sweepFlag) {
    angle = angle * Math.PI / 180;
    var c = Math.cos(angle);
    var s = Math.sin(angle);
    var TOLERANCE = 1e-6; // Section (F.6.5.1)

    var halfDiff = startPoint.subtract(endPoint).multiply(0.5);
    var x1p = halfDiff.x * c + halfDiff.y * s;
    var y1p = halfDiff.x * -s + halfDiff.y * c; // Section (F.6.6.1)

    rx = Math.abs(rx);
    ry = Math.abs(ry); // Section (F.6.6.2)

    var x1px1p = x1p * x1p;
    var y1py1p = y1p * y1p;
    var lambda = x1px1p / (rx * rx) + y1py1p / (ry * ry); // Section (F.6.6.3)

    if (lambda > 1) {
      var _factor = Math.sqrt(lambda);

      rx *= _factor;
      ry *= _factor;
    } // Section (F.6.5.2)


    var rxrx = rx * rx;
    var ryry = ry * ry;
    var rxy1 = rxrx * y1py1p;
    var ryx1 = ryry * x1px1p;
    var factor = (rxrx * ryry - rxy1 - ryx1) / (rxy1 + ryx1);

    if (Math.abs(factor) < TOLERANCE) {
      factor = 0;
    }

    var sq = Math.sqrt(factor);

    if (arcFlag === sweepFlag) {
      sq = -sq;
    } // Section (F.6.5.3)


    var mid = startPoint.add(endPoint).multiply(0.5);
    var cxp = sq * rx * y1p / ry;
    var cyp = sq * -ry * x1p / rx; // Section (F.6.5.5 - F.6.5.6)

    var xcr1 = (x1p - cxp) / rx;
    var xcr2 = (x1p + cxp) / rx;
    var ycr1 = (y1p - cyp) / ry;
    var ycr2 = (y1p + cyp) / ry;
    var theta1 = new Vector2D(1, 0).angleBetween(new Vector2D(xcr1, ycr1)); // let deltaTheta = normalizeAngle(new Vector2D(xcr1, ycr1).angleBetween(new Vector2D(-xcr2, -ycr2)));

    var deltaTheta = new Vector2D(xcr1, ycr1).angleBetween(new Vector2D(-xcr2, -ycr2));

    if (sweepFlag === false) {
      deltaTheta -= TWO_PI;
    }

    return [cxp * c - cyp * s + mid.x, cxp * s + cyp * c + mid.y, rx, ry, theta1, theta1 + deltaTheta];
  }
  /**
   *  PathHandler
   */


  var PathHandler = /*#__PURE__*/function () {
    /**
     * PathHandler
     *
     * @param {ShapeInfo} shapeCreator
     */
    function PathHandler(shapeCreator) {
      _classCallCheck(this, PathHandler);

      this.shapeCreator = shapeCreator;
      this.shapes = [];
      this.firstX = null;
      this.firstY = null;
      this.lastX = null;
      this.lastY = null;
      this.lastCommand = null;
    }
    /**
     * beginParse
     */


    _createClass(PathHandler, [{
      key: "beginParse",
      value: function beginParse() {
        // zero out the sub-path array
        this.shapes = []; // clear firstX, firstY, lastX, and lastY

        this.firstX = null;
        this.firstY = null;
        this.lastX = null;
        this.lastY = null; // need to remember last command type to determine how to handle the
        // relative Bezier commands

        this.lastCommand = null;
      }
      /**
       *  addShape
       *
       *  @param {ShapeInfo} shape
       */

    }, {
      key: "addShape",
      value: function addShape(shape) {
        this.shapes.push(shape);
      }
      /**
       *  arcAbs - A
       *
       *  @param {number} rx
       *  @param {number} ry
       *  @param {number} xAxisRotation
       *  @param {boolean} arcFlag
       *  @param {boolean} sweepFlag
       *  @param {number} x
       *  @param {number} y
       */

    }, {
      key: "arcAbs",
      value: function arcAbs(rx, ry, xAxisRotation, arcFlag, sweepFlag, x, y) {
        if (rx === 0 || ry === 0) {
          this.addShape(this.shapeCreator.line(this.lastX, this.lastY, x, y));
        } else {
          var _this$shapeCreator;

          var arcParameters = getArcParameters(new Point2D(this.lastX, this.lastY), new Point2D(x, y), rx, ry, xAxisRotation, arcFlag, sweepFlag);
          this.addShape((_this$shapeCreator = this.shapeCreator).arc.apply(_this$shapeCreator, _toConsumableArray(arcParameters)));
        }

        this.lastCommand = "A";
        this.lastX = x;
        this.lastY = y;
      }
      /**
       *  arcRel - a
       *
       *  @param {number} rx
       *  @param {number} ry
       *  @param {number} xAxisRotation
       *  @param {boolean} arcFlag
       *  @param {boolean} sweepFlag
       *  @param {number} x
       *  @param {number} y
       */

    }, {
      key: "arcRel",
      value: function arcRel(rx, ry, xAxisRotation, arcFlag, sweepFlag, x, y) {
        if (rx === 0 || ry === 0) {
          this.addShape(this.shapeCreator.line(this.lastX, this.lastY, this.lastX + x, this.lastY + y));
        } else {
          var _this$shapeCreator2;

          var arcParameters = getArcParameters(new Point2D(this.lastX, this.lastY), new Point2D(this.lastX + x, this.lastY + y), rx, ry, xAxisRotation, arcFlag, sweepFlag);
          this.addShape((_this$shapeCreator2 = this.shapeCreator).arc.apply(_this$shapeCreator2, _toConsumableArray(arcParameters)));
        }

        this.lastCommand = "a";
        this.lastX += x;
        this.lastY += y;
      }
      /**
       *  curvetoCubicAbs - C
       *
       *  @param {number} x1
       *  @param {number} y1
       *  @param {number} x2
       *  @param {number} y2
       *  @param {number} x
       *  @param {number} y
       */

    }, {
      key: "curvetoCubicAbs",
      value: function curvetoCubicAbs(x1, y1, x2, y2, x, y) {
        this.addShape(this.shapeCreator.cubicBezier(this.lastX, this.lastY, x1, y1, x2, y2, x, y));
        this.lastX = x;
        this.lastY = y;
        this.lastCommand = "C";
      }
      /**
       *  curvetoCubicRel - c
       *
       *  @param {number} x1
       *  @param {number} y1
       *  @param {number} x2
       *  @param {number} y2
       *  @param {number} x
       *  @param {number} y
       */

    }, {
      key: "curvetoCubicRel",
      value: function curvetoCubicRel(x1, y1, x2, y2, x, y) {
        this.addShape(this.shapeCreator.cubicBezier(this.lastX, this.lastY, this.lastX + x1, this.lastY + y1, this.lastX + x2, this.lastY + y2, this.lastX + x, this.lastY + y));
        this.lastX += x;
        this.lastY += y;
        this.lastCommand = "c";
      }
      /**
       *  linetoHorizontalAbs - H
       *
       *  @param {number} x
       */

    }, {
      key: "linetoHorizontalAbs",
      value: function linetoHorizontalAbs(x) {
        this.addShape(this.shapeCreator.line(this.lastX, this.lastY, x, this.lastY));
        this.lastX = x;
        this.lastCommand = "H";
      }
      /**
       *  linetoHorizontalRel - h
       *
       *  @param {number} x
       */

    }, {
      key: "linetoHorizontalRel",
      value: function linetoHorizontalRel(x) {
        this.addShape(this.shapeCreator.line(this.lastX, this.lastY, this.lastX + x, this.lastY));
        this.lastX += x;
        this.lastCommand = "h";
      }
      /**
       *  linetoAbs - L
       *
       *  @param {number} x
       *  @param {number} y
       */

    }, {
      key: "linetoAbs",
      value: function linetoAbs(x, y) {
        this.addShape(this.shapeCreator.line(this.lastX, this.lastY, x, y));
        this.lastX = x;
        this.lastY = y;
        this.lastCommand = "L";
      }
      /**
       *  linetoRel - l
       *
       *  @param {number} x
       *  @param {number} y
       */

    }, {
      key: "linetoRel",
      value: function linetoRel(x, y) {
        this.addShape(this.shapeCreator.line(this.lastX, this.lastY, this.lastX + x, this.lastY + y));
        this.lastX += x;
        this.lastY += y;
        this.lastCommand = "l";
      }
      /**
       *  movetoAbs - M
       *
       *  @param {number} x
       *  @param {number} y
       */

    }, {
      key: "movetoAbs",
      value: function movetoAbs(x, y) {
        this.firstX = x;
        this.firstY = y;
        this.lastX = x;
        this.lastY = y;
        this.lastCommand = "M";
      }
      /**
       *  movetoRel - m
       *
       *  @param {number} x
       *  @param {number} y
       */

    }, {
      key: "movetoRel",
      value: function movetoRel(x, y) {
        this.firstX += x;
        this.firstY += y;
        this.lastX += x;
        this.lastY += y;
        this.lastCommand = "m";
      }
      /**
       *  curvetoQuadraticAbs - Q
       *
       *  @param {number} x1
       *  @param {number} y1
       *  @param {number} x
       *  @param {number} y
       */

    }, {
      key: "curvetoQuadraticAbs",
      value: function curvetoQuadraticAbs(x1, y1, x, y) {
        this.addShape(this.shapeCreator.quadraticBezier(this.lastX, this.lastY, x1, y1, x, y));
        this.lastX = x;
        this.lastY = y;
        this.lastCommand = "Q";
      }
      /**
       *  curvetoQuadraticRel - q
       *
       *  @param {number} x1
       *  @param {number} y1
       *  @param {number} x
       *  @param {number} y
       */

    }, {
      key: "curvetoQuadraticRel",
      value: function curvetoQuadraticRel(x1, y1, x, y) {
        this.addShape(this.shapeCreator.quadraticBezier(this.lastX, this.lastY, this.lastX + x1, this.lastY + y1, this.lastX + x, this.lastY + y));
        this.lastX += x;
        this.lastY += y;
        this.lastCommand = "q";
      }
      /**
       *  curvetoCubicSmoothAbs - S
       *
       *  @param {number} x2
       *  @param {number} y2
       *  @param {number} x
       *  @param {number} y
       */

    }, {
      key: "curvetoCubicSmoothAbs",
      value: function curvetoCubicSmoothAbs(x2, y2, x, y) {
        var controlX, controlY;

        if (this.lastCommand.match(/^[SsCc]$/)) {
          var secondToLast = this.shapes[this.shapes.length - 1].args[2];
          controlX = 2 * this.lastX - secondToLast.x;
          controlY = 2 * this.lastY - secondToLast.y;
        } else {
          controlX = this.lastX;
          controlY = this.lastY;
        }

        this.addShape(this.shapeCreator.cubicBezier(this.lastX, this.lastY, controlX, controlY, x2, y2, x, y));
        this.lastX = x;
        this.lastY = y;
        this.lastCommand = "S";
      }
      /**
       *  curvetoCubicSmoothRel - s
       *
       *  @param {number} x2
       *  @param {number} y2
       *  @param {number} x
       *  @param {number} y
       */

    }, {
      key: "curvetoCubicSmoothRel",
      value: function curvetoCubicSmoothRel(x2, y2, x, y) {
        var controlX, controlY;

        if (this.lastCommand.match(/^[SsCc]$/)) {
          var secondToLast = this.shapes[this.shapes.length - 1].args[2];
          controlX = 2 * this.lastX - secondToLast.x;
          controlY = 2 * this.lastY - secondToLast.y;
        } else {
          controlX = this.lastX;
          controlY = this.lastY;
        }

        this.addShape(this.shapeCreator.cubicBezier(this.lastX, this.lastY, controlX, controlY, this.lastX + x2, this.lastY + y2, this.lastX + x, this.lastY + y));
        this.lastX += x;
        this.lastY += y;
        this.lastCommand = "s";
      }
      /**
       *  curvetoQuadraticSmoothAbs - T
       *
       *  @param {number} x
       *  @param {number} y
       */

    }, {
      key: "curvetoQuadraticSmoothAbs",
      value: function curvetoQuadraticSmoothAbs(x, y) {
        var controlX, controlY;

        if (this.lastCommand.match(/^[QqTt]$/)) {
          var secondToLast = this.shapes[this.shapes.length - 1].args[1];
          controlX = 2 * this.lastX - secondToLast.x;
          controlY = 2 * this.lastY - secondToLast.y;
        } else {
          controlX = this.lastX;
          controlY = this.lastY;
        }

        this.addShape(this.shapeCreator.quadraticBezier(this.lastX, this.lastY, controlX, controlY, x, y));
        this.lastX = x;
        this.lastY = y;
        this.lastCommand = "T";
      }
      /**
       *  curvetoQuadraticSmoothRel - t
       *
       *  @param {number} x
       *  @param {number} y
       */

    }, {
      key: "curvetoQuadraticSmoothRel",
      value: function curvetoQuadraticSmoothRel(x, y) {
        var controlX, controlY;

        if (this.lastCommand.match(/^[QqTt]$/)) {
          var secondToLast = this.shapes[this.shapes.length - 1].args[1];
          controlX = 2 * this.lastX - secondToLast.x;
          controlY = 2 * this.lastY - secondToLast.y;
        } else {
          controlX = this.lastX;
          controlY = this.lastY;
        }

        this.addShape(this.shapeCreator.quadraticBezier(this.lastX, this.lastY, controlX, controlY, this.lastX + x, this.lastY + y));
        this.lastX += x;
        this.lastY += y;
        this.lastCommand = "t";
      }
      /**
       *  linetoVerticalAbs - V
       *
       *  @param {number} y
       */

    }, {
      key: "linetoVerticalAbs",
      value: function linetoVerticalAbs(y) {
        this.addShape(this.shapeCreator.line(this.lastX, this.lastY, this.lastX, y));
        this.lastY = y;
        this.lastCommand = "V";
      }
      /**
       *  linetoVerticalRel - v
       *
       *  @param {number} y
       */

    }, {
      key: "linetoVerticalRel",
      value: function linetoVerticalRel(y) {
        this.addShape(this.shapeCreator.line(this.lastX, this.lastY, this.lastX, this.lastY + y));
        this.lastY += y;
        this.lastCommand = "v";
      }
      /**
       *  closePath - z or Z
       */

    }, {
      key: "closePath",
      value: function closePath() {
        this.addShape(this.shapeCreator.line(this.lastX, this.lastY, this.firstX, this.firstY));
        this.lastX = this.firstX;
        this.lastY = this.firstY;
        this.lastCommand = "z";
      }
    }]);

    return PathHandler;
  }();

  var degree90 = Math.PI * 0.5;
  var parser = new PathParser();
  /**
   * getValues
   *
   * @param {Array} types
   * @param {Array} args
   * @returns {Array}
   */

  function getValues(types, args) {
    var result = [];

    var _iterator = _createForOfIteratorHelper(types),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            names = _step$value[0],
            type = _step$value[1];

        var value = null;

        if (type === "Point2D") {
          value = parsePoint(names, args);
        } else if (type === "Number") {
          value = parseNumber(names, args);
        } else if (type === "Array<Point2D>" || type === "Point2D[]") {
          var values = [];

          while (args.length > 0) {
            values.push(parsePoint(names, args));
          }

          if (values.length > 0) {
            value = values;
          }
        } else if (type === "Optional<Number>" || type === "Number?") {
          value = parseNumber(names, args);

          if (value === null) {
            value = undefined;
          }
        } else {
          throw new TypeError("Unrecognized value type: ".concat(type));
        }

        if (value !== null) {
          result.push(value);
        } else {
          throw new TypeError("Unable to extract value for ".concat(names));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return result;
  }
  /**
   * parseNumber
   *
   * @param {Array} names
   * @param {Array} args
   * @returns {number}
   */

  function parseNumber(names, args) {
    var result = null;

    if (args.length > 0) {
      var item = args[0];

      var itemType = _typeof(item);

      if (itemType === "number") {
        return args.shift();
      } else if (itemType === "object") {
        var _iterator2 = _createForOfIteratorHelper(names),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var prop = _step2.value;

            if (prop in item && typeof item[prop] === "number") {
              result = item[prop];
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }

    return result;
  }
  /**
   * parsePoint
   *
   * @param {Array} names
   * @param {Array} args
   * @returns {Array}
   */

  function parsePoint(names, args) {
    var result = null;

    if (args.length > 0) {
      (function () {
        var item = args[0];

        var itemType = _typeof(item);

        if (itemType === "number") {
          if (args.length > 1) {
            var x = args.shift();
            var y = args.shift();
            result = new Point2D(x, y);
          }
        } else if (Array.isArray(item) && item.length > 1) {
          if (item.length === 2) {
            var _args$shift = args.shift(),
                _args$shift2 = _slicedToArray(_args$shift, 2),
                _x = _args$shift2[0],
                _y = _args$shift2[1];

            result = new Point2D(_x, _y);
          } else {
            throw new TypeError("Unhandled array of length ".concat(item.length));
          }
        } else if (itemType === "object") {
          if ("x" in item && "y" in item) {
            result = new Point2D(item.x, item.y);
            args.shift();
          } else {
            var _iterator3 = _createForOfIteratorHelper(names),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var props = _step3.value;

                if (Array.isArray(props)) {
                  if (props.every(function (p) {
                    return p in item;
                  })) {
                    result = new Point2D(item[props[0]], item[props[1]]);
                    break;
                  }
                } else if (props in item) {
                  result = parsePoint([], [item[props]]);
                  break;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      })();
    }

    return result;
  }
  /**
   *  ShapeInfo
   *  @memberof module:kld-intersections
   */

  var ShapeInfo = /*#__PURE__*/function () {
    /**
     *  @param {string} name
     *  @param {Array} args
     *  @returns {module:kld-intersections.ShapeInfo}
     */
    function ShapeInfo(name, args) {
      _classCallCheck(this, ShapeInfo);

      this.name = name;
      this.args = args;
    }

    _createClass(ShapeInfo, null, [{
      key: "arc",
      value: function arc() {
        var types = [[["center", ["centerX", "centerY"], ["cx", "cy"]], "Point2D"], [["radiusX", "rx"], "Number"], [["radiusY", "ry"], "Number"], [["startRadians"], "Number"], [["endRadians"], "Number"]];

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var values = getValues(types, args);
        return new ShapeInfo(ShapeInfo.ARC, values);
      }
    }, {
      key: "quadraticBezier",
      value: function quadraticBezier() {
        var types = [[["p1", ["p1x", "p1y"]], "Point2D"], [["p2", ["p2x", "p2y"]], "Point2D"], [["p3", ["p3x", "p3y"]], "Point2D"]];

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var values = getValues(types, args);
        return new ShapeInfo(ShapeInfo.QUADRATIC_BEZIER, values);
      }
    }, {
      key: "cubicBezier",
      value: function cubicBezier() {
        var types = [[["p1", ["p1x", "p1y"]], "Point2D"], [["p2", ["p2x", "p2y"]], "Point2D"], [["p3", ["p3x", "p3y"]], "Point2D"], [["p4", ["p4x", "p4y"]], "Point2D"]];

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        var values = getValues(types, args);
        return new ShapeInfo(ShapeInfo.CUBIC_BEZIER, values);
      }
    }, {
      key: "circle",
      value: function circle() {
        var types = [[["center", ["centerX", "centerY"], ["cx", "cy"]], "Point2D"], [["radius", "r"], "Number"]];

        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        var values = getValues(types, args);
        return new ShapeInfo(ShapeInfo.CIRCLE, values);
      }
    }, {
      key: "ellipse",
      value: function ellipse() {
        var types = [[["center", ["centerX", "centerY"], ["cx", "cy"]], "Point2D"], [["radiusX", "rx"], "Number"], [["radiusY", "ry"], "Number"]];

        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        var values = getValues(types, args);
        return new ShapeInfo(ShapeInfo.ELLIPSE, values);
      }
    }, {
      key: "line",
      value: function line() {
        var types = [[["p1", ["p1x", "p1y"], ["x1", "y1"]], "Point2D"], [["p2", ["p2x", "p2y"], ["x2", "y2"]], "Point2D"]];

        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }

        var values = getValues(types, args);
        return new ShapeInfo(ShapeInfo.LINE, values);
      }
    }, {
      key: "path",
      value: function path() {
        parser.parseData(arguments.length <= 0 ? undefined : arguments[0]);
        return new ShapeInfo(ShapeInfo.PATH, handler.shapes);
      }
    }, {
      key: "polygon",
      value: function polygon() {
        var types = [[[], "Array<Point2D>"]];

        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }

        var values = getValues(types, args.length === 1 && Array.isArray(args[0]) ? args[0] : args);
        return new ShapeInfo(ShapeInfo.POLYGON, values);
      }
    }, {
      key: "polyline",
      value: function polyline() {
        var types = [[[], "Array<Point2D>"]];

        for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          args[_key8] = arguments[_key8];
        }

        var values = getValues(types, args.length === 1 && Array.isArray(args[0]) ? args[0] : args);
        return new ShapeInfo(ShapeInfo.POLYLINE, values);
      }
    }, {
      key: "rectangle",
      value: function rectangle() {
        var types = [[["topLeft", ["x", "y"], ["left", "top"]], "Point2D"], [["size", ["width", "height"], ["w", "h"]], "Point2D"], [["radiusX", "rx"], "Optional<Number>"], [["radiusY", "ry"], "Optional<Number>"]];

        for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          args[_key9] = arguments[_key9];
        }

        var values = getValues(types, args); // fix up bottom-right point

        var p1 = values[0];
        var p2 = values[1];
        values[1] = new Point2D(p1.x + p2.x, p1.y + p2.y); // create shape info

        var result = new ShapeInfo(ShapeInfo.RECTANGLE, values); // handle possible rounded rectangle values

        var ry = result.args.pop();
        var rx = result.args.pop();
        rx = rx === undefined ? 0 : rx;
        ry = ry === undefined ? 0 : ry;

        if (rx === 0 && ry === 0) {
          return result;
        }

        var _result$args$ = result.args[0],
            p1x = _result$args$.x,
            p1y = _result$args$.y;
        var _result$args$2 = result.args[1],
            p2x = _result$args$2.x,
            p2y = _result$args$2.y;
        var width = p2x - p1x;
        var height = p2y - p1y;

        if (rx === 0) {
          rx = ry;
        }

        if (ry === 0) {
          ry = rx;
        }

        if (rx > width * 0.5) {
          rx = width * 0.5;
        }

        if (ry > height * 0.5) {
          ry = height * 0.5;
        }

        var x0 = p1x;
        var y0 = p1y;
        var x1 = p1x + rx;
        var y1 = p1y + ry;
        var x2 = p2x - rx;
        var y2 = p2y - ry;
        var x3 = p2x;
        var y3 = p2y;
        var segments = [ShapeInfo.arc(x1, y1, rx, ry, 2 * degree90, 3 * degree90), ShapeInfo.line(x1, y0, x2, y0), ShapeInfo.arc(x2, y1, rx, ry, 3 * degree90, 4 * degree90), ShapeInfo.line(x3, y1, x3, y2), ShapeInfo.arc(x2, y2, rx, ry, 0, degree90), ShapeInfo.line(x2, y3, x1, y3), ShapeInfo.arc(x1, y2, rx, ry, degree90, 2 * degree90), ShapeInfo.line(x0, y2, x0, y1)];
        return new ShapeInfo(ShapeInfo.PATH, segments);
      }
    }]);

    return ShapeInfo;
  }(); // define shape name constants
  ShapeInfo.ARC = "Arc";
  ShapeInfo.QUADRATIC_BEZIER = "Bezier2";
  ShapeInfo.CUBIC_BEZIER = "Bezier3";
  ShapeInfo.CIRCLE = "Circle";
  ShapeInfo.ELLIPSE = "Ellipse";
  ShapeInfo.LINE = "Line";
  ShapeInfo.PATH = "Path";
  ShapeInfo.POLYGON = "Polygon";
  ShapeInfo.POLYLINE = "Polyline";
  ShapeInfo.RECTANGLE = "Rectangle"; // setup path parser handler after ShapeInfo has been defined

  var handler = new PathHandler(ShapeInfo);
  parser.setHandler(handler);

  var TWO_PI$1 = 2.0 * Math.PI;
  var UNIT_X = new Vector2D(1, 0);
  /**
   * @memberof module:kld-intersections.Intersection
   * @param {*} o
   * @returns {boolean}
   */

  function isNullish(o) {
    return o === null || o === undefined;
  }
  /**
   *  bezout
   *
   *  This code is based on MgcIntr2DElpElp.cpp written by David Eberly.  His
   *  code along with many other excellent examples are avaiable at his site:
   *  http://www.magic-software.com
   *
   *  @param {Array<module:kld-intersections.Point2D>} e1
   *  @param {Array<module:kld-intersections.Point2D>} e2
   *  @returns {external:Polynomial}
   */


  function bezout(e1, e2) {
    var AB = e1[0] * e2[1] - e2[0] * e1[1];
    var AC = e1[0] * e2[2] - e2[0] * e1[2];
    var AD = e1[0] * e2[3] - e2[0] * e1[3];
    var AE = e1[0] * e2[4] - e2[0] * e1[4];
    var AF = e1[0] * e2[5] - e2[0] * e1[5];
    var BC = e1[1] * e2[2] - e2[1] * e1[2];
    var BE = e1[1] * e2[4] - e2[1] * e1[4];
    var BF = e1[1] * e2[5] - e2[1] * e1[5];
    var CD = e1[2] * e2[3] - e2[2] * e1[3];
    var DE = e1[3] * e2[4] - e2[3] * e1[4];
    var DF = e1[3] * e2[5] - e2[3] * e1[5];
    var BFpDE = BF + DE;
    var BEmCD = BE - CD;
    return new Polynomial(AB * BC - AC * AC, AB * BEmCD + AD * BC - 2 * AC * AE, AB * BFpDE + AD * BEmCD - AE * AE - 2 * AC * AF, AB * DF + AD * BFpDE - 2 * AE * AF, AD * DF - AF * AF);
  }
  /**
   * normalizeAngle
   *
   * @param {number} radians
   * @returns {number}
   */


  function normalizeAngle(radians) {
    var normal = radians % TWO_PI$1;
    return normal < 0.0 ? normal + TWO_PI$1 : normal;
  }
  /**
   * restrictPointsToArc
   *
   * @param {module:kld-intersections.Intersection} intersections
   * @param {module:kld-intersections.Point2D} center
   * @param {number} radiusX
   * @param {number} radiusY
   * @param {number} startRadians
   * @param {number} endRadians
   * @returns {module:kld-intersections.Intersection}
   */


  function restrictPointsToArc(intersections, center, radiusX, radiusY, startRadians, endRadians) {
    if (intersections.points.length === 0) {
      return intersections;
    }

    var result = new Intersection("No Intersection"); // swap if end is lower, so start is always the lower one

    if (endRadians < startRadians) {
      var _ref = [endRadians, startRadians];
      startRadians = _ref[0];
      endRadians = _ref[1];
    } // move everything to the positive domain, simultaneously


    if (startRadians < 0 || endRadians < 0) {
      startRadians += TWO_PI$1;
      endRadians += TWO_PI$1;
    }

    var _iterator = _createForOfIteratorHelper(intersections.points),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var p = _step.value;
        var a = normalizeAngle(UNIT_X.angleBetween(Vector2D.fromPoints(center, p))); // a angle smaller than start, it may still be between
        // this happens if end > TWO_PI

        if (a < startRadians) {
          a += TWO_PI$1;
        }

        if (startRadians <= a && a <= endRadians) {
          result.appendPoint(p);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (result.points.length > 0) {
      result.status = "Intersection";
    }

    return result;
  }
  /**
   *  closePolygon
   *  @memberof module:kld-intersections.Intersection
   *  @param {Array<module:kld-intersections.Point2D>} points
   *  @returns {Array<module:kld-intersections.Point2D>}
   */


  function closePolygon(points) {
    var copy = points.slice();
    copy.push(points[0]);
    return copy;
  }
  /**
   * Intersection
   * @memberof module:kld-intersections
   */


  var Intersection = /*#__PURE__*/function () {
    /**
     *  @param {string} status
     *  @returns {module:kld-intersections.Intersection}
     */
    function Intersection(status) {
      _classCallCheck(this, Intersection);

      this.init(status);
    }
    /**
     *  init
     *
     *  @param {string} status
     *  @returns {module:kld-intersections.Intersection}
     */


    _createClass(Intersection, [{
      key: "init",
      value: function init(status) {
        this.status = status;
        this.points = [];
      }
      /**
       *  intersect
       *
       *  @param {module:kld-intersections.ShapeInfo} shape1
       *  @param {module:kld-intersections.ShapeInfo} shape2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "appendPoint",

      /**
       *  appendPoint
       *
       *  @param {module:kld-intersections.Point2D} point
       */
      value: function appendPoint(point) {
        this.points.push(point);
      }
      /**
       *  appendPoints
       *
       *  @param {Array<module:kld-intersections.Point2D>} points
       */

    }, {
      key: "appendPoints",
      value: function appendPoints(points) {
        this.points = this.points.concat(points);
      }
    }], [{
      key: "intersect",
      value: function intersect(shape1, shape2) {
        var result;

        if (!isNullish(shape1) && !isNullish(shape2)) {
          if (shape1.name === "Path") {
            result = Intersection.intersectPathShape(shape1, shape2);
          } else if (shape2.name === "Path") {
            result = Intersection.intersectPathShape(shape2, shape1);
          } else if (shape1.name === "Arc") {
            result = Intersection.intersectArcShape(shape1, shape2);
          } else if (shape2.name === "Arc") {
            result = Intersection.intersectArcShape(shape2, shape1);
          } else {
            var method;
            var args;

            if (shape1.name < shape2.name) {
              method = "intersect" + shape1.name + shape2.name;
              args = shape1.args.concat(shape2.args);
            } else {
              method = "intersect" + shape2.name + shape1.name;
              args = shape2.args.concat(shape1.args);
            }

            if (!(method in Intersection)) {
              throw new TypeError("Intersection not available: " + method);
            }

            result = Intersection[method].apply(null, args);
          }
        } else {
          result = new Intersection("No Intersection");
        }

        return result;
      }
      /**
       *  intersectPathShape
       *
       *  @param {module:kld-intersections.ShapeInfo} path
       *  @param {module:kld-intersections.ShapeInfo} shape
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectPathShape",
      value: function intersectPathShape(path, shape) {
        var result = new Intersection("No Intersection");

        var _iterator2 = _createForOfIteratorHelper(path.args),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var segment = _step2.value;
            var inter = Intersection.intersect(segment, shape);
            result.appendPoints(inter.points);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       * intersectArcShape
       *
       * @param {module:kld-intersections.ShapeInfo} arc
       * @param {module:kld-intersections.ShapeInfo} shape
       * @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectArcShape",
      value: function intersectArcShape(arc, shape) {
        var _arc$args = _slicedToArray(arc.args, 5),
            center = _arc$args[0],
            radiusX = _arc$args[1],
            radiusY = _arc$args[2],
            startRadians = _arc$args[3],
            endRadians = _arc$args[4];

        var ellipse = new ShapeInfo(ShapeInfo.ELLIPSE, [center, radiusX, radiusY]);
        var ellipse_result = Intersection.intersect(ellipse, shape); // return ellipse_result;

        return restrictPointsToArc(ellipse_result, center, radiusX, radiusY, startRadians, endRadians);
      }
      /**
       *  intersectBezier2Bezier2
       *
       *  @param {module:kld-intersections.Point2D} a1
       *  @param {module:kld-intersections.Point2D} a2
       *  @param {module:kld-intersections.Point2D} a3
       *  @param {module:kld-intersections.Point2D} b1
       *  @param {module:kld-intersections.Point2D} b2
       *  @param {module:kld-intersections.Point2D} b3
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectBezier2Bezier2",
      value: function intersectBezier2Bezier2(a1, a2, a3, b1, b2, b3) {
        var a, b;
        var result = new Intersection("No Intersection");
        a = a2.multiply(-2);
        var c12 = a1.add(a.add(a3));
        a = a1.multiply(-2);
        b = a2.multiply(2);
        var c11 = a.add(b);
        var c10 = new Point2D(a1.x, a1.y);
        a = b2.multiply(-2);
        var c22 = b1.add(a.add(b3));
        a = b1.multiply(-2);
        b = b2.multiply(2);
        var c21 = a.add(b);
        var c20 = new Point2D(b1.x, b1.y); // bezout

        a = c12.x * c11.y - c11.x * c12.y;
        b = c22.x * c11.y - c11.x * c22.y;
        var c = c21.x * c11.y - c11.x * c21.y;
        var d = c11.x * (c10.y - c20.y) + c11.y * (-c10.x + c20.x);
        var e = c22.x * c12.y - c12.x * c22.y;
        var f = c21.x * c12.y - c12.x * c21.y;
        var g = c12.x * (c10.y - c20.y) + c12.y * (-c10.x + c20.x); // determinant

        var poly = new Polynomial(-e * e, -2 * e * f, a * b - f * f - 2 * e * g, a * c - 2 * f * g, a * d - g * g);
        var roots = poly.getRoots();

        var _iterator3 = _createForOfIteratorHelper(roots),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var s = _step3.value;

            if (0 <= s && s <= 1) {
              var xp = new Polynomial(c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x);
              xp.simplifyEquals();
              var xRoots = xp.getRoots();
              var yp = new Polynomial(c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y);
              yp.simplifyEquals();
              var yRoots = yp.getRoots();

              if (xRoots.length > 0 && yRoots.length > 0) {
                var TOLERANCE = 1e-4;

                var _iterator4 = _createForOfIteratorHelper(xRoots),
                    _step4;

                try {
                  checkRoots: for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var xRoot = _step4.value;

                    if (0 <= xRoot && xRoot <= 1) {
                      for (var k = 0; k < yRoots.length; k++) {
                        if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                          result.points.push(c22.multiply(s * s).add(c21.multiply(s).add(c20)));
                          break checkRoots;
                        }
                      }
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectBezier2Bezier3
       *
       *  @param {module:kld-intersections.Point2D} a1
       *  @param {module:kld-intersections.Point2D} a2
       *  @param {module:kld-intersections.Point2D} a3
       *  @param {module:kld-intersections.Point2D} b1
       *  @param {module:kld-intersections.Point2D} b2
       *  @param {module:kld-intersections.Point2D} b3
       *  @param {module:kld-intersections.Point2D} b4
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectBezier2Bezier3",
      value: function intersectBezier2Bezier3(a1, a2, a3, b1, b2, b3, b4) {
        var a, b, c, d;
        var result = new Intersection("No Intersection");
        a = a2.multiply(-2);
        var c12 = a1.add(a.add(a3));
        a = a1.multiply(-2);
        b = a2.multiply(2);
        var c11 = a.add(b);
        var c10 = new Point2D(a1.x, a1.y);
        a = b1.multiply(-1);
        b = b2.multiply(3);
        c = b3.multiply(-3);
        d = a.add(b.add(c.add(b4)));
        var c23 = new Point2D(d.x, d.y);
        a = b1.multiply(3);
        b = b2.multiply(-6);
        c = b3.multiply(3);
        d = a.add(b.add(c));
        var c22 = new Point2D(d.x, d.y);
        a = b1.multiply(-3);
        b = b2.multiply(3);
        c = a.add(b);
        var c21 = new Point2D(c.x, c.y);
        var c20 = new Point2D(b1.x, b1.y);
        var c10x2 = c10.x * c10.x;
        var c10y2 = c10.y * c10.y;
        var c11x2 = c11.x * c11.x;
        var c11y2 = c11.y * c11.y;
        var c12x2 = c12.x * c12.x;
        var c12y2 = c12.y * c12.y;
        var c20x2 = c20.x * c20.x;
        var c20y2 = c20.y * c20.y;
        var c21x2 = c21.x * c21.x;
        var c21y2 = c21.y * c21.y;
        var c22x2 = c22.x * c22.x;
        var c22y2 = c22.y * c22.y;
        var c23x2 = c23.x * c23.x;
        var c23y2 = c23.y * c23.y;
        var poly = new Polynomial(-2 * c12.x * c12.y * c23.x * c23.y + c12x2 * c23y2 + c12y2 * c23x2, -2 * c12.x * c12.y * c22.x * c23.y - 2 * c12.x * c12.y * c22.y * c23.x + 2 * c12y2 * c22.x * c23.x + 2 * c12x2 * c22.y * c23.y, -2 * c12.x * c21.x * c12.y * c23.y - 2 * c12.x * c12.y * c21.y * c23.x - 2 * c12.x * c12.y * c22.x * c22.y + 2 * c21.x * c12y2 * c23.x + c12y2 * c22x2 + c12x2 * (2 * c21.y * c23.y + c22y2), 2 * c10.x * c12.x * c12.y * c23.y + 2 * c10.y * c12.x * c12.y * c23.x + c11.x * c11.y * c12.x * c23.y + c11.x * c11.y * c12.y * c23.x - 2 * c20.x * c12.x * c12.y * c23.y - 2 * c12.x * c20.y * c12.y * c23.x - 2 * c12.x * c21.x * c12.y * c22.y - 2 * c12.x * c12.y * c21.y * c22.x - 2 * c10.x * c12y2 * c23.x - 2 * c10.y * c12x2 * c23.y + 2 * c20.x * c12y2 * c23.x + 2 * c21.x * c12y2 * c22.x - c11y2 * c12.x * c23.x - c11x2 * c12.y * c23.y + c12x2 * (2 * c20.y * c23.y + 2 * c21.y * c22.y), 2 * c10.x * c12.x * c12.y * c22.y + 2 * c10.y * c12.x * c12.y * c22.x + c11.x * c11.y * c12.x * c22.y + c11.x * c11.y * c12.y * c22.x - 2 * c20.x * c12.x * c12.y * c22.y - 2 * c12.x * c20.y * c12.y * c22.x - 2 * c12.x * c21.x * c12.y * c21.y - 2 * c10.x * c12y2 * c22.x - 2 * c10.y * c12x2 * c22.y + 2 * c20.x * c12y2 * c22.x - c11y2 * c12.x * c22.x - c11x2 * c12.y * c22.y + c21x2 * c12y2 + c12x2 * (2 * c20.y * c22.y + c21y2), 2 * c10.x * c12.x * c12.y * c21.y + 2 * c10.y * c12.x * c21.x * c12.y + c11.x * c11.y * c12.x * c21.y + c11.x * c11.y * c21.x * c12.y - 2 * c20.x * c12.x * c12.y * c21.y - 2 * c12.x * c20.y * c21.x * c12.y - 2 * c10.x * c21.x * c12y2 - 2 * c10.y * c12x2 * c21.y + 2 * c20.x * c21.x * c12y2 - c11y2 * c12.x * c21.x - c11x2 * c12.y * c21.y + 2 * c12x2 * c20.y * c21.y, -2 * c10.x * c10.y * c12.x * c12.y - c10.x * c11.x * c11.y * c12.y - c10.y * c11.x * c11.y * c12.x + 2 * c10.x * c12.x * c20.y * c12.y + 2 * c10.y * c20.x * c12.x * c12.y + c11.x * c20.x * c11.y * c12.y + c11.x * c11.y * c12.x * c20.y - 2 * c20.x * c12.x * c20.y * c12.y - 2 * c10.x * c20.x * c12y2 + c10.x * c11y2 * c12.x + c10.y * c11x2 * c12.y - 2 * c10.y * c12x2 * c20.y - c20.x * c11y2 * c12.x - c11x2 * c20.y * c12.y + c10x2 * c12y2 + c10y2 * c12x2 + c20x2 * c12y2 + c12x2 * c20y2);
        var roots = poly.getRootsInInterval(0, 1);

        var _iterator5 = _createForOfIteratorHelper(roots),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var s = _step5.value;
            var xRoots = new Polynomial(c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x - s * s * s * c23.x).getRoots();
            var yRoots = new Polynomial(c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y - s * s * s * c23.y).getRoots();

            if (xRoots.length > 0 && yRoots.length > 0) {
              var TOLERANCE = 1e-4;

              var _iterator6 = _createForOfIteratorHelper(xRoots),
                  _step6;

              try {
                checkRoots: for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var xRoot = _step6.value;

                  if (0 <= xRoot && xRoot <= 1) {
                    for (var k = 0; k < yRoots.length; k++) {
                      if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                        result.points.push(c23.multiply(s * s * s).add(c22.multiply(s * s).add(c21.multiply(s).add(c20))));
                        break checkRoots;
                      }
                    }
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectBezier2Circle
       *
       *  @param {module:kld-intersections.Point2D} p1
       *  @param {module:kld-intersections.Point2D} p2
       *  @param {module:kld-intersections.Point2D} p3
       *  @param {module:kld-intersections.Point2D} c
       *  @param {number} r
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectBezier2Circle",
      value: function intersectBezier2Circle(p1, p2, p3, c, r) {
        return Intersection.intersectBezier2Ellipse(p1, p2, p3, c, r, r);
      }
      /**
       *  intersectBezier2Ellipse
       *
       *  @param {module:kld-intersections.Point2D} p1
       *  @param {module:kld-intersections.Point2D} p2
       *  @param {module:kld-intersections.Point2D} p3
       *  @param {module:kld-intersections.Point2D} ec
       *  @param {number} rx
       *  @param {number} ry
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectBezier2Ellipse",
      value: function intersectBezier2Ellipse(p1, p2, p3, ec, rx, ry) {
        var a; // temporary variables
        // c2, c1, c0; // coefficients of quadratic

        var result = new Intersection("No Intersection");
        a = p2.multiply(-2);
        var c2 = p1.add(a.add(p3));
        a = p1.multiply(-2);
        var b = p2.multiply(2);
        var c1 = a.add(b);
        var c0 = new Point2D(p1.x, p1.y);
        var rxrx = rx * rx;
        var ryry = ry * ry;
        var roots = new Polynomial(ryry * c2.x * c2.x + rxrx * c2.y * c2.y, 2 * (ryry * c2.x * c1.x + rxrx * c2.y * c1.y), ryry * (2 * c2.x * c0.x + c1.x * c1.x) + rxrx * (2 * c2.y * c0.y + c1.y * c1.y) - 2 * (ryry * ec.x * c2.x + rxrx * ec.y * c2.y), 2 * (ryry * c1.x * (c0.x - ec.x) + rxrx * c1.y * (c0.y - ec.y)), ryry * (c0.x * c0.x + ec.x * ec.x) + rxrx * (c0.y * c0.y + ec.y * ec.y) - 2 * (ryry * ec.x * c0.x + rxrx * ec.y * c0.y) - rxrx * ryry).getRoots();

        var _iterator7 = _createForOfIteratorHelper(roots),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var t = _step7.value;

            if (0 <= t && t <= 1) {
              result.points.push(c2.multiply(t * t).add(c1.multiply(t).add(c0)));
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectBezier2Line
       *
       *  @param {module:kld-intersections.Point2D} p1
       *  @param {module:kld-intersections.Point2D} p2
       *  @param {module:kld-intersections.Point2D} p3
       *  @param {module:kld-intersections.Point2D} a1
       *  @param {module:kld-intersections.Point2D} a2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectBezier2Line",
      value: function intersectBezier2Line(p1, p2, p3, a1, a2) {
        var a; // temporary variables
        // let c2, c1, c0; // coefficients of quadratic
        // cl; // c coefficient for normal form of line
        // n; // normal for normal form of line

        var min = a1.min(a2); // used to determine if point is on line segment

        var max = a1.max(a2); // used to determine if point is on line segment

        var result = new Intersection("No Intersection");
        a = p2.multiply(-2);
        var c2 = p1.add(a.add(p3));
        a = p1.multiply(-2);
        var b = p2.multiply(2);
        var c1 = a.add(b);
        var c0 = new Point2D(p1.x, p1.y); // Convert line to normal form: ax + by + c = 0
        // Find normal to line: negative inverse of original line's slope

        var n = new Vector2D(a1.y - a2.y, a2.x - a1.x); // Determine new c coefficient

        var cl = a1.x * a2.y - a2.x * a1.y; // Transform cubic coefficients to line's coordinate system and find roots
        // of cubic

        var roots = new Polynomial(n.dot(c2), n.dot(c1), n.dot(c0) + cl).getRoots(); // Any roots in closed interval [0,1] are intersections on Bezier, but
        // might not be on the line segment.
        // Find intersections and calculate point coordinates

        var _iterator8 = _createForOfIteratorHelper(roots),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var t = _step8.value;

            if (0 <= t && t <= 1) {
              // We're within the Bezier curve
              // Find point on Bezier
              var p4 = p1.lerp(p2, t);
              var p5 = p2.lerp(p3, t);
              var p6 = p4.lerp(p5, t); // See if point is on line segment
              // Had to make special cases for vertical and horizontal lines due
              // to slight errors in calculation of p6

              if (a1.x === a2.x) {
                if (min.y <= p6.y && p6.y <= max.y) {
                  result.status = "Intersection";
                  result.appendPoint(p6);
                }
              } else if (a1.y === a2.y) {
                if (min.x <= p6.x && p6.x <= max.x) {
                  result.status = "Intersection";
                  result.appendPoint(p6);
                }
              } else if (min.x <= p6.x && p6.x <= max.x && min.y <= p6.y && p6.y <= max.y) {
                result.status = "Intersection";
                result.appendPoint(p6);
              }
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        return result;
      }
      /**
       *  intersectBezier2Polygon
       *
       *  @param {module:kld-intersections.Point2D} p1
       *  @param {module:kld-intersections.Point2D} p2
       *  @param {module:kld-intersections.Point2D} p3
       *  @param {Array<module:kld-intersections.Point2D>} points
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectBezier2Polygon",
      value: function intersectBezier2Polygon(p1, p2, p3, points) {
        return Intersection.intersectBezier2Polyline(p1, p2, p3, closePolygon(points));
      }
      /**
       *  intersectBezier2Polyline
       *
       *  @param {module:kld-intersections.Point2D} p1
       *  @param {module:kld-intersections.Point2D} p2
       *  @param {module:kld-intersections.Point2D} p3
       *  @param {Array<module:kld-intersections.Point2D>} points
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectBezier2Polyline",
      value: function intersectBezier2Polyline(p1, p2, p3, points) {
        var result = new Intersection("No Intersection");
        var len = points.length;

        for (var i = 0; i < len - 1; i++) {
          var a1 = points[i];
          var a2 = points[i + 1];
          var inter = Intersection.intersectBezier2Line(p1, p2, p3, a1, a2);
          result.appendPoints(inter.points);
        }

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectBezier2Rectangle
       *
       *  @param {module:kld-intersections.Point2D} p1
       *  @param {module:kld-intersections.Point2D} p2
       *  @param {module:kld-intersections.Point2D} p3
       *  @param {module:kld-intersections.Point2D} r1
       *  @param {module:kld-intersections.Point2D} r2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectBezier2Rectangle",
      value: function intersectBezier2Rectangle(p1, p2, p3, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Point2D(max.x, min.y);
        var bottomLeft = new Point2D(min.x, max.y);
        var inter1 = Intersection.intersectBezier2Line(p1, p2, p3, min, topRight);
        var inter2 = Intersection.intersectBezier2Line(p1, p2, p3, topRight, max);
        var inter3 = Intersection.intersectBezier2Line(p1, p2, p3, max, bottomLeft);
        var inter4 = Intersection.intersectBezier2Line(p1, p2, p3, bottomLeft, min);
        var result = new Intersection("No Intersection");
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectBezier3Bezier3
       *
       *  @param {module:kld-intersections.Point2D} a1
       *  @param {module:kld-intersections.Point2D} a2
       *  @param {module:kld-intersections.Point2D} a3
       *  @param {module:kld-intersections.Point2D} a4
       *  @param {module:kld-intersections.Point2D} b1
       *  @param {module:kld-intersections.Point2D} b2
       *  @param {module:kld-intersections.Point2D} b3
       *  @param {module:kld-intersections.Point2D} b4
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectBezier3Bezier3",
      value: function intersectBezier3Bezier3(a1, a2, a3, a4, b1, b2, b3, b4) {
        var a, b, c, d; // temporary variables
        // c13, c12, c11, c10; // coefficients of cubic
        // c23, c22, c21, c20; // coefficients of cubic

        var result = new Intersection("No Intersection"); // Calculate the coefficients of cubic polynomial

        a = a1.multiply(-1);
        b = a2.multiply(3);
        c = a3.multiply(-3);
        d = a.add(b.add(c.add(a4)));
        var c13 = new Point2D(d.x, d.y);
        a = a1.multiply(3);
        b = a2.multiply(-6);
        c = a3.multiply(3);
        d = a.add(b.add(c));
        var c12 = new Point2D(d.x, d.y);
        a = a1.multiply(-3);
        b = a2.multiply(3);
        c = a.add(b);
        var c11 = new Point2D(c.x, c.y);
        var c10 = new Point2D(a1.x, a1.y);
        a = b1.multiply(-1);
        b = b2.multiply(3);
        c = b3.multiply(-3);
        d = a.add(b.add(c.add(b4)));
        var c23 = new Point2D(d.x, d.y);
        a = b1.multiply(3);
        b = b2.multiply(-6);
        c = b3.multiply(3);
        d = a.add(b.add(c));
        var c22 = new Point2D(d.x, d.y);
        a = b1.multiply(-3);
        b = b2.multiply(3);
        c = a.add(b);
        var c21 = new Point2D(c.x, c.y);
        var c20 = new Point2D(b1.x, b1.y); // bezout

        a = c13.x * c12.y - c12.x * c13.y;
        b = c13.x * c11.y - c11.x * c13.y;
        var c0 = c13.x * c10.y - c10.x * c13.y + c20.x * c13.y - c13.x * c20.y;
        var c1 = c21.x * c13.y - c13.x * c21.y;
        var c2 = c22.x * c13.y - c13.x * c22.y;
        var c3 = c23.x * c13.y - c13.x * c23.y;
        d = c13.x * c11.y - c11.x * c13.y;
        var e0 = c13.x * c10.y + c12.x * c11.y - c11.x * c12.y - c10.x * c13.y + c20.x * c13.y - c13.x * c20.y;
        var e1 = c21.x * c13.y - c13.x * c21.y;
        var e2 = c22.x * c13.y - c13.x * c22.y;
        var e3 = c23.x * c13.y - c13.x * c23.y;
        var f0 = c12.x * c10.y - c10.x * c12.y + c20.x * c12.y - c12.x * c20.y;
        var f1 = c21.x * c12.y - c12.x * c21.y;
        var f2 = c22.x * c12.y - c12.x * c22.y;
        var f3 = c23.x * c12.y - c12.x * c23.y;
        var g0 = c13.x * c10.y - c10.x * c13.y + c20.x * c13.y - c13.x * c20.y;
        var g1 = c21.x * c13.y - c13.x * c21.y;
        var g2 = c22.x * c13.y - c13.x * c22.y;
        var g3 = c23.x * c13.y - c13.x * c23.y;
        var h0 = c12.x * c10.y - c10.x * c12.y + c20.x * c12.y - c12.x * c20.y;
        var h1 = c21.x * c12.y - c12.x * c21.y;
        var h2 = c22.x * c12.y - c12.x * c22.y;
        var h3 = c23.x * c12.y - c12.x * c23.y;
        var i0 = c11.x * c10.y - c10.x * c11.y + c20.x * c11.y - c11.x * c20.y;
        var i1 = c21.x * c11.y - c11.x * c21.y;
        var i2 = c22.x * c11.y - c11.x * c22.y;
        var i3 = c23.x * c11.y - c11.x * c23.y; // determinant

        var poly = new Polynomial(-c3 * e3 * g3, -c3 * e3 * g2 - c3 * e2 * g3 - c2 * e3 * g3, -c3 * e3 * g1 - c3 * e2 * g2 - c2 * e3 * g2 - c3 * e1 * g3 - c2 * e2 * g3 - c1 * e3 * g3, -c3 * e3 * g0 - c3 * e2 * g1 - c2 * e3 * g1 - c3 * e1 * g2 - c2 * e2 * g2 - c1 * e3 * g2 - c3 * e0 * g3 - c2 * e1 * g3 - c1 * e2 * g3 - c0 * e3 * g3 + b * f3 * g3 + c3 * d * h3 - a * f3 * h3 + a * e3 * i3, -c3 * e2 * g0 - c2 * e3 * g0 - c3 * e1 * g1 - c2 * e2 * g1 - c1 * e3 * g1 - c3 * e0 * g2 - c2 * e1 * g2 - c1 * e2 * g2 - c0 * e3 * g2 + b * f3 * g2 - c2 * e0 * g3 - c1 * e1 * g3 - c0 * e2 * g3 + b * f2 * g3 + c3 * d * h2 - a * f3 * h2 + c2 * d * h3 - a * f2 * h3 + a * e3 * i2 + a * e2 * i3, -c3 * e1 * g0 - c2 * e2 * g0 - c1 * e3 * g0 - c3 * e0 * g1 - c2 * e1 * g1 - c1 * e2 * g1 - c0 * e3 * g1 + b * f3 * g1 - c2 * e0 * g2 - c1 * e1 * g2 - c0 * e2 * g2 + b * f2 * g2 - c1 * e0 * g3 - c0 * e1 * g3 + b * f1 * g3 + c3 * d * h1 - a * f3 * h1 + c2 * d * h2 - a * f2 * h2 + c1 * d * h3 - a * f1 * h3 + a * e3 * i1 + a * e2 * i2 + a * e1 * i3, -c3 * e0 * g0 - c2 * e1 * g0 - c1 * e2 * g0 - c0 * e3 * g0 + b * f3 * g0 - c2 * e0 * g1 - c1 * e1 * g1 - c0 * e2 * g1 + b * f2 * g1 - c1 * e0 * g2 - c0 * e1 * g2 + b * f1 * g2 - c0 * e0 * g3 + b * f0 * g3 + c3 * d * h0 - a * f3 * h0 + c2 * d * h1 - a * f2 * h1 + c1 * d * h2 - a * f1 * h2 + c0 * d * h3 - a * f0 * h3 + a * e3 * i0 + a * e2 * i1 + a * e1 * i2 - b * d * i3 + a * e0 * i3, -c2 * e0 * g0 - c1 * e1 * g0 - c0 * e2 * g0 + b * f2 * g0 - c1 * e0 * g1 - c0 * e1 * g1 + b * f1 * g1 - c0 * e0 * g2 + b * f0 * g2 + c2 * d * h0 - a * f2 * h0 + c1 * d * h1 - a * f1 * h1 + c0 * d * h2 - a * f0 * h2 + a * e2 * i0 + a * e1 * i1 - b * d * i2 + a * e0 * i2, -c1 * e0 * g0 - c0 * e1 * g0 + b * f1 * g0 - c0 * e0 * g1 + b * f0 * g1 + c1 * d * h0 - a * f1 * h0 + c0 * d * h1 - a * f0 * h1 + a * e1 * i0 - b * d * i1 + a * e0 * i1, -c0 * e0 * g0 + b * f0 * g0 + c0 * d * h0 - a * f0 * h0 - b * d * i0 + a * e0 * i0);
        poly.simplifyEquals();
        var roots = poly.getRootsInInterval(0, 1);

        var _iterator9 = _createForOfIteratorHelper(roots),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var s = _step9.value;
            var xp = new Polynomial(c13.x, c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x - s * s * s * c23.x);
            xp.simplifyEquals();
            var xRoots = xp.getRoots();
            var yp = new Polynomial(c13.y, c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y - s * s * s * c23.y);
            yp.simplifyEquals();
            var yRoots = yp.getRoots();

            if (xRoots.length > 0 && yRoots.length > 0) {
              var TOLERANCE = 1e-4;

              var _iterator10 = _createForOfIteratorHelper(xRoots),
                  _step10;

              try {
                checkRoots: for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var xRoot = _step10.value;

                  if (0 <= xRoot && xRoot <= 1) {
                    for (var k = 0; k < yRoots.length; k++) {
                      if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                        result.points.push(c23.multiply(s * s * s).add(c22.multiply(s * s).add(c21.multiply(s).add(c20))));
                        break checkRoots;
                      }
                    }
                  }
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectBezier3Circle
       *
       *  @param {module:kld-intersections.Point2D} p1
       *  @param {module:kld-intersections.Point2D} p2
       *  @param {module:kld-intersections.Point2D} p3
       *  @param {module:kld-intersections.Point2D} p4
       *  @param {module:kld-intersections.Point2D} c
       *  @param {number} r
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectBezier3Circle",
      value: function intersectBezier3Circle(p1, p2, p3, p4, c, r) {
        return Intersection.intersectBezier3Ellipse(p1, p2, p3, p4, c, r, r);
      }
      /**
       *  intersectBezier3Ellipse
       *
       *  @param {module:kld-intersections.Point2D} p1
       *  @param {module:kld-intersections.Point2D} p2
       *  @param {module:kld-intersections.Point2D} p3
       *  @param {module:kld-intersections.Point2D} p4
       *  @param {module:kld-intersections.Point2D} ec
       *  @param {number} rx
       *  @param {number} ry
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectBezier3Ellipse",
      value: function intersectBezier3Ellipse(p1, p2, p3, p4, ec, rx, ry) {
        var a, b, c, d; // temporary variables
        // c3, c2, c1, c0; // coefficients of cubic

        var result = new Intersection("No Intersection"); // Calculate the coefficients of cubic polynomial

        a = p1.multiply(-1);
        b = p2.multiply(3);
        c = p3.multiply(-3);
        d = a.add(b.add(c.add(p4)));
        var c3 = new Point2D(d.x, d.y);
        a = p1.multiply(3);
        b = p2.multiply(-6);
        c = p3.multiply(3);
        d = a.add(b.add(c));
        var c2 = new Point2D(d.x, d.y);
        a = p1.multiply(-3);
        b = p2.multiply(3);
        c = a.add(b);
        var c1 = new Point2D(c.x, c.y);
        var c0 = new Point2D(p1.x, p1.y);
        var rxrx = rx * rx;
        var ryry = ry * ry;
        var poly = new Polynomial(c3.x * c3.x * ryry + c3.y * c3.y * rxrx, 2 * (c3.x * c2.x * ryry + c3.y * c2.y * rxrx), 2 * (c3.x * c1.x * ryry + c3.y * c1.y * rxrx) + c2.x * c2.x * ryry + c2.y * c2.y * rxrx, 2 * c3.x * ryry * (c0.x - ec.x) + 2 * c3.y * rxrx * (c0.y - ec.y) + 2 * (c2.x * c1.x * ryry + c2.y * c1.y * rxrx), 2 * c2.x * ryry * (c0.x - ec.x) + 2 * c2.y * rxrx * (c0.y - ec.y) + c1.x * c1.x * ryry + c1.y * c1.y * rxrx, 2 * c1.x * ryry * (c0.x - ec.x) + 2 * c1.y * rxrx * (c0.y - ec.y), c0.x * c0.x * ryry - 2 * c0.y * ec.y * rxrx - 2 * c0.x * ec.x * ryry + c0.y * c0.y * rxrx + ec.x * ec.x * ryry + ec.y * ec.y * rxrx - rxrx * ryry);
        var roots = poly.getRootsInInterval(0, 1);

        var _iterator11 = _createForOfIteratorHelper(roots),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var t = _step11.value;
            result.points.push(c3.multiply(t * t * t).add(c2.multiply(t * t).add(c1.multiply(t).add(c0))));
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectBezier3Line
       *
       *  Many thanks to Dan Sunday at SoftSurfer.com.  He gave me a very thorough
       *  sketch of the algorithm used here.  Without his help, I'm not sure when I
       *  would have figured out this intersection problem.
       *
       *  @param {module:kld-intersections.Point2D} p1
       *  @param {module:kld-intersections.Point2D} p2
       *  @param {module:kld-intersections.Point2D} p3
       *  @param {module:kld-intersections.Point2D} p4
       *  @param {module:kld-intersections.Point2D} a1
       *  @param {module:kld-intersections.Point2D} a2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectBezier3Line",
      value: function intersectBezier3Line(p1, p2, p3, p4, a1, a2) {
        var a, b, c, d; // temporary variables
        // c3, c2, c1, c0; // coefficients of cubic
        // cl; // c coefficient for normal form of line
        // n; // normal for normal form of line

        var min = a1.min(a2); // used to determine if point is on line segment

        var max = a1.max(a2); // used to determine if point is on line segment

        var result = new Intersection("No Intersection"); // Start with Bezier using Bernstein polynomials for weighting functions:
        //     (1-t^3)P1 + 3t(1-t)^2P2 + 3t^2(1-t)P3 + t^3P4
        //
        // Expand and collect terms to form linear combinations of original Bezier
        // controls.  This ends up with a vector cubic in t:
        //     (-P1+3P2-3P3+P4)t^3 + (3P1-6P2+3P3)t^2 + (-3P1+3P2)t + P1
        //             /\                  /\                /\       /\
        //             ||                  ||                ||       ||
        //             c3                  c2                c1       c0
        // Calculate the coefficients

        a = p1.multiply(-1);
        b = p2.multiply(3);
        c = p3.multiply(-3);
        d = a.add(b.add(c.add(p4)));
        var c3 = new Vector2D(d.x, d.y);
        a = p1.multiply(3);
        b = p2.multiply(-6);
        c = p3.multiply(3);
        d = a.add(b.add(c));
        var c2 = new Vector2D(d.x, d.y);
        a = p1.multiply(-3);
        b = p2.multiply(3);
        c = a.add(b);
        var c1 = new Vector2D(c.x, c.y);
        var c0 = new Vector2D(p1.x, p1.y); // Convert line to normal form: ax + by + c = 0
        // Find normal to line: negative inverse of original line's slope

        var n = new Vector2D(a1.y - a2.y, a2.x - a1.x); // Determine new c coefficient

        var cl = a1.x * a2.y - a2.x * a1.y; // ?Rotate each cubic coefficient using line for new coordinate system?
        // Find roots of rotated cubic

        var roots = new Polynomial(n.dot(c3), n.dot(c2), n.dot(c1), n.dot(c0) + cl).getRoots(); // Any roots in closed interval [0,1] are intersections on Bezier, but
        // might not be on the line segment.
        // Find intersections and calculate point coordinates

        var _iterator12 = _createForOfIteratorHelper(roots),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var t = _step12.value;

            if (0 <= t && t <= 1) {
              // We're within the Bezier curve
              // Find point on Bezier
              var p5 = p1.lerp(p2, t);
              var p6 = p2.lerp(p3, t);
              var p7 = p3.lerp(p4, t);
              var p8 = p5.lerp(p6, t);
              var p9 = p6.lerp(p7, t);
              var p10 = p8.lerp(p9, t); // See if point is on line segment
              // Had to make special cases for vertical and horizontal lines due
              // to slight errors in calculation of p10

              if (a1.x === a2.x) {
                if (min.y <= p10.y && p10.y <= max.y) {
                  result.status = "Intersection";
                  result.appendPoint(p10);
                }
              } else if (a1.y === a2.y) {
                if (min.x <= p10.x && p10.x <= max.x) {
                  result.status = "Intersection";
                  result.appendPoint(p10);
                }
              } else if (min.x <= p10.x && p10.x <= max.x && min.y <= p10.y && p10.y <= max.y) {
                result.status = "Intersection";
                result.appendPoint(p10);
              }
            }
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }

        return result;
      }
      /**
       *  intersectBezier3Polygon
       *
       *  @param {module:kld-intersections.Point2D} p1
       *  @param {module:kld-intersections.Point2D} p2
       *  @param {module:kld-intersections.Point2D} p3
       *  @param {module:kld-intersections.Point2D} p4
       *  @param {Array<module:kld-intersections.Point2D>} points
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectBezier3Polygon",
      value: function intersectBezier3Polygon(p1, p2, p3, p4, points) {
        return Intersection.intersectBezier3Polyline(p1, p2, p3, p4, closePolygon(points));
      }
      /**
       *  intersectBezier3Polyline
       *
       *  @param {module:kld-intersections.Point2D} p1
       *  @param {module:kld-intersections.Point2D} p2
       *  @param {module:kld-intersections.Point2D} p3
       *  @param {module:kld-intersections.Point2D} p4
       *  @param {Array<module:kld-intersections.Point2D>} points
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectBezier3Polyline",
      value: function intersectBezier3Polyline(p1, p2, p3, p4, points) {
        var result = new Intersection("No Intersection");
        var len = points.length;

        for (var i = 0; i < len - 1; i++) {
          var a1 = points[i];
          var a2 = points[i + 1];
          var inter = Intersection.intersectBezier3Line(p1, p2, p3, p4, a1, a2);
          result.appendPoints(inter.points);
        }

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectBezier3Rectangle
       *
       *  @param {module:kld-intersections.Point2D} p1
       *  @param {module:kld-intersections.Point2D} p2
       *  @param {module:kld-intersections.Point2D} p3
       *  @param {module:kld-intersections.Point2D} p4
       *  @param {module:kld-intersections.Point2D} r1
       *  @param {module:kld-intersections.Point2D} r2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectBezier3Rectangle",
      value: function intersectBezier3Rectangle(p1, p2, p3, p4, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Point2D(max.x, min.y);
        var bottomLeft = new Point2D(min.x, max.y);
        var inter1 = Intersection.intersectBezier3Line(p1, p2, p3, p4, min, topRight);
        var inter2 = Intersection.intersectBezier3Line(p1, p2, p3, p4, topRight, max);
        var inter3 = Intersection.intersectBezier3Line(p1, p2, p3, p4, max, bottomLeft);
        var inter4 = Intersection.intersectBezier3Line(p1, p2, p3, p4, bottomLeft, min);
        var result = new Intersection("No Intersection");
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectCircleCircle
       *
       *  @param {module:kld-intersections.Point2D} c1
       *  @param {number} r1
       *  @param {module:kld-intersections.Point2D} c2
       *  @param {number} r2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectCircleCircle",
      value: function intersectCircleCircle(c1, r1, c2, r2) {
        var result; // Determine minimum and maximum radii where circles can intersect

        var r_max = r1 + r2;
        var r_min = Math.abs(r1 - r2); // Determine actual distance between circle circles

        var c_dist = c1.distanceFrom(c2);

        if (c_dist > r_max) {
          result = new Intersection("Outside");
        } else if (c_dist < r_min) {
          result = new Intersection("Inside");
        } else {
          result = new Intersection("Intersection");
          var a = (r1 * r1 - r2 * r2 + c_dist * c_dist) / (2 * c_dist);
          var h = Math.sqrt(r1 * r1 - a * a);
          var p = c1.lerp(c2, a / c_dist);
          var b = h / c_dist;
          result.points.push(new Point2D(p.x - b * (c2.y - c1.y), p.y + b * (c2.x - c1.x)));
          result.points.push(new Point2D(p.x + b * (c2.y - c1.y), p.y - b * (c2.x - c1.x)));
        }

        return result;
      }
      /**
       *  intersectCircleEllipse
       *
       *  @param {module:kld-intersections.Point2D} cc
       *  @param {number} r
       *  @param {module:kld-intersections.Point2D} ec
       *  @param {number} rx
       *  @param {number} ry
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectCircleEllipse",
      value: function intersectCircleEllipse(cc, r, ec, rx, ry) {
        return Intersection.intersectEllipseEllipse(cc, r, r, ec, rx, ry);
      }
      /**
       *  intersectCircleLine
       *
       *  @param {module:kld-intersections.Point2D} c
       *  @param {number} r
       *  @param {module:kld-intersections.Point2D} a1
       *  @param {module:kld-intersections.Point2D} a2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectCircleLine",
      value: function intersectCircleLine(c, r, a1, a2) {
        var result;
        var a = (a2.x - a1.x) * (a2.x - a1.x) + (a2.y - a1.y) * (a2.y - a1.y);
        var b = 2 * ((a2.x - a1.x) * (a1.x - c.x) + (a2.y - a1.y) * (a1.y - c.y));
        var cc = c.x * c.x + c.y * c.y + a1.x * a1.x + a1.y * a1.y - 2 * (c.x * a1.x + c.y * a1.y) - r * r;
        var deter = b * b - 4 * a * cc;

        if (deter < 0) {
          result = new Intersection("Outside");
        } else if (deter === 0) {
          result = new Intersection("Tangent"); // NOTE: should calculate this point
        } else {
          var e = Math.sqrt(deter);
          var u1 = (-b + e) / (2 * a);
          var u2 = (-b - e) / (2 * a);

          if ((u1 < 0 || u1 > 1) && (u2 < 0 || u2 > 1)) {
            if (u1 < 0 && u2 < 0 || u1 > 1 && u2 > 1) {
              result = new Intersection("Outside");
            } else {
              result = new Intersection("Inside");
            }
          } else {
            result = new Intersection("Intersection");

            if (0 <= u1 && u1 <= 1) {
              result.points.push(a1.lerp(a2, u1));
            }

            if (0 <= u2 && u2 <= 1) {
              result.points.push(a1.lerp(a2, u2));
            }
          }
        }

        return result;
      }
      /**
       *  intersectCirclePolygon
       *
       *  @param {module:kld-intersections.Point2D} c
       *  @param {number} r
       *  @param {Array<module:kld-intersections.Point2D>} points
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectCirclePolygon",
      value: function intersectCirclePolygon(c, r, points) {
        return Intersection.intersectCirclePolyline(c, r, closePolygon(points));
      }
      /**
       *  intersectCirclePolyline
       *
       *  @param {module:kld-intersections.Point2D} c
       *  @param {number} r
       *  @param {Array<module:kld-intersections.Point2D>} points
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectCirclePolyline",
      value: function intersectCirclePolyline(c, r, points) {
        var result = new Intersection("No Intersection");
        var len = points.length;
        var inter;

        for (var i = 0; i < len - 1; i++) {
          var a1 = points[i];
          var a2 = points[i + 1];
          inter = Intersection.intersectCircleLine(c, r, a1, a2);
          result.appendPoints(inter.points);
        }

        if (result.points.length > 0) {
          result.status = "Intersection";
        } else {
          result.status = inter.status;
        }

        return result;
      }
      /**
       *  intersectCircleRectangle
       *
       *  @param {module:kld-intersections.Point2D} c
       *  @param {number} r
       *  @param {module:kld-intersections.Point2D} r1
       *  @param {module:kld-intersections.Point2D} r2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectCircleRectangle",
      value: function intersectCircleRectangle(c, r, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Point2D(max.x, min.y);
        var bottomLeft = new Point2D(min.x, max.y);
        var inter1 = Intersection.intersectCircleLine(c, r, min, topRight);
        var inter2 = Intersection.intersectCircleLine(c, r, topRight, max);
        var inter3 = Intersection.intersectCircleLine(c, r, max, bottomLeft);
        var inter4 = Intersection.intersectCircleLine(c, r, bottomLeft, min);
        var result = new Intersection("No Intersection");
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);

        if (result.points.length > 0) {
          result.status = "Intersection";
        } else {
          result.status = inter1.status;
        }

        return result;
      }
      /**
       *  intersectEllipseEllipse
       *
       *  This code is based on MgcIntr2DElpElp.cpp written by David Eberly.  His
       *  code along with many other excellent examples are avaiable at his site:
       *  http://www.magic-software.com
       *
       *  NOTE: Rotation will need to be added to this function
       *
       *  @param {module:kld-intersections.Point2D} c1
       *  @param {number} rx1
       *  @param {number} ry1
       *  @param {module:kld-intersections.Point2D} c2
       *  @param {number} rx2
       *  @param {number} ry2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectEllipseEllipse",
      value: function intersectEllipseEllipse(c1, rx1, ry1, c2, rx2, ry2) {
        var a = [ry1 * ry1, 0, rx1 * rx1, -2 * ry1 * ry1 * c1.x, -2 * rx1 * rx1 * c1.y, ry1 * ry1 * c1.x * c1.x + rx1 * rx1 * c1.y * c1.y - rx1 * rx1 * ry1 * ry1];
        var b = [ry2 * ry2, 0, rx2 * rx2, -2 * ry2 * ry2 * c2.x, -2 * rx2 * rx2 * c2.y, ry2 * ry2 * c2.x * c2.x + rx2 * rx2 * c2.y * c2.y - rx2 * rx2 * ry2 * ry2];
        var yPoly = bezout(a, b);
        var yRoots = yPoly.getRoots();
        var epsilon = 1e-3;
        var norm0 = (a[0] * a[0] + 2 * a[1] * a[1] + a[2] * a[2]) * epsilon;
        var norm1 = (b[0] * b[0] + 2 * b[1] * b[1] + b[2] * b[2]) * epsilon;
        var result = new Intersection("No Intersection");

        for (var y = 0; y < yRoots.length; y++) {
          var xPoly = new Polynomial(a[0], a[3] + yRoots[y] * a[1], a[5] + yRoots[y] * (a[4] + yRoots[y] * a[2]));
          var xRoots = xPoly.getRoots();

          for (var x = 0; x < xRoots.length; x++) {
            var tst = (a[0] * xRoots[x] + a[1] * yRoots[y] + a[3]) * xRoots[x] + (a[2] * yRoots[y] + a[4]) * yRoots[y] + a[5];

            if (Math.abs(tst) < norm0) {
              tst = (b[0] * xRoots[x] + b[1] * yRoots[y] + b[3]) * xRoots[x] + (b[2] * yRoots[y] + b[4]) * yRoots[y] + b[5];

              if (Math.abs(tst) < norm1) {
                result.appendPoint(new Point2D(xRoots[x], yRoots[y]));
              }
            }
          }
        }

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectEllipseLine
       *
       *  NOTE: Rotation will need to be added to this function
       *
       *  @param {module:kld-intersections.Point2D} c
       *  @param {number} rx
       *  @param {number} ry
       *  @param {module:kld-intersections.Point2D} a1
       *  @param {module:kld-intersections.Point2D} a2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectEllipseLine",
      value: function intersectEllipseLine(c, rx, ry, a1, a2) {
        var result;
        var orign = new Vector2D(a1.x, a1.y);
        var dir = Vector2D.fromPoints(a1, a2);
        var center = new Vector2D(c.x, c.y);
        var diff = orign.subtract(center);
        var mDir = new Vector2D(dir.x / (rx * rx), dir.y / (ry * ry));
        var mDiff = new Vector2D(diff.x / (rx * rx), diff.y / (ry * ry));
        var a = dir.dot(mDir);
        var b = dir.dot(mDiff);
        c = diff.dot(mDiff) - 1.0;
        var d = b * b - a * c;

        if (d < 0) {
          result = new Intersection("Outside");
        } else if (d > 0) {
          var root = Math.sqrt(d); // eslint-disable-line no-shadow

          var t_a = (-b - root) / a;
          var t_b = (-b + root) / a;

          if ((t_a < 0 || 1 < t_a) && (t_b < 0 || 1 < t_b)) {
            if (t_a < 0 && t_b < 0 || t_a > 1 && t_b > 1) {
              result = new Intersection("Outside");
            } else {
              result = new Intersection("Inside");
            }
          } else {
            result = new Intersection("Intersection");

            if (0 <= t_a && t_a <= 1) {
              result.appendPoint(a1.lerp(a2, t_a));
            }

            if (0 <= t_b && t_b <= 1) {
              result.appendPoint(a1.lerp(a2, t_b));
            }
          }
        } else {
          var t = -b / a;

          if (0 <= t && t <= 1) {
            result = new Intersection("Intersection");
            result.appendPoint(a1.lerp(a2, t));
          } else {
            result = new Intersection("Outside");
          }
        }

        return result;
      }
      /**
       *  intersectEllipsePolygon
       *
       *  @param {module:kld-intersections.Point2D} c
       *  @param {number} rx
       *  @param {number} ry
       *  @param {Array<module:kld-intersections.Point2D>} points
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectEllipsePolygon",
      value: function intersectEllipsePolygon(c, rx, ry, points) {
        return Intersection.intersectEllipsePolyline(c, rx, ry, closePolygon(points));
      }
      /**
       *  intersectEllipsePolyline
       *
       *  @param {module:kld-intersections.Point2D} c
       *  @param {number} rx
       *  @param {number} ry
       *  @param {Array<module:kld-intersections.Point2D>} points
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectEllipsePolyline",
      value: function intersectEllipsePolyline(c, rx, ry, points) {
        var result = new Intersection("No Intersection");
        var len = points.length;

        for (var i = 0; i < len - 1; i++) {
          var b1 = points[i];
          var b2 = points[i + 1];
          var inter = Intersection.intersectEllipseLine(c, rx, ry, b1, b2);
          result.appendPoints(inter.points);
        }

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectEllipseRectangle
       *
       *  @param {module:kld-intersections.Point2D} c
       *  @param {number} rx
       *  @param {number} ry
       *  @param {module:kld-intersections.Point2D} r1
       *  @param {module:kld-intersections.Point2D} r2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectEllipseRectangle",
      value: function intersectEllipseRectangle(c, rx, ry, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Point2D(max.x, min.y);
        var bottomLeft = new Point2D(min.x, max.y);
        var inter1 = Intersection.intersectEllipseLine(c, rx, ry, min, topRight);
        var inter2 = Intersection.intersectEllipseLine(c, rx, ry, topRight, max);
        var inter3 = Intersection.intersectEllipseLine(c, rx, ry, max, bottomLeft);
        var inter4 = Intersection.intersectEllipseLine(c, rx, ry, bottomLeft, min);
        var result = new Intersection("No Intersection");
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectLineLine
       *
       *  @param {module:kld-intersections.Point2D} a1
       *  @param {module:kld-intersections.Point2D} a2
       *  @param {module:kld-intersections.Point2D} b1
       *  @param {module:kld-intersections.Point2D} b2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectLineLine",
      value: function intersectLineLine(a1, a2, b1, b2) {
        var result;
        var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
        var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
        var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);

        if (u_b !== 0) {
          var ua = ua_t / u_b;
          var ub = ub_t / u_b;

          if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
            result = new Intersection("Intersection");
            result.points.push(new Point2D(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
          } else {
            result = new Intersection("No Intersection");
          }
        } else if (ua_t === 0 || ub_t === 0) {
          result = new Intersection("Coincident");
        } else {
          result = new Intersection("Parallel");
        }

        return result;
      }
      /**
       *  intersectLinePolygon
       *
       *  @param {module:kld-intersections.Point2D} a1
       *  @param {module:kld-intersections.Point2D} a2
       *  @param {Array<module:kld-intersections.Point2D>} points
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectLinePolygon",
      value: function intersectLinePolygon(a1, a2, points) {
        return Intersection.intersectLinePolyline(a1, a2, closePolygon(points));
      }
      /**
       *  intersectLinePolyline
       *
       *  @param {module:kld-intersections.Point2D} a1
       *  @param {module:kld-intersections.Point2D} a2
       *  @param {Array<module:kld-intersections.Point2D>} points
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectLinePolyline",
      value: function intersectLinePolyline(a1, a2, points) {
        var result = new Intersection("No Intersection");
        var len = points.length;

        for (var i = 0; i < len - 1; i++) {
          var b1 = points[i];
          var b2 = points[i + 1];
          var inter = Intersection.intersectLineLine(a1, a2, b1, b2);
          result.appendPoints(inter.points);
        }

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectLineRectangle
       *
       *  @param {module:kld-intersections.Point2D} a1
       *  @param {module:kld-intersections.Point2D} a2
       *  @param {module:kld-intersections.Point2D} r1
       *  @param {module:kld-intersections.Point2D} r2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectLineRectangle",
      value: function intersectLineRectangle(a1, a2, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Point2D(max.x, min.y);
        var bottomLeft = new Point2D(min.x, max.y);
        var inter1 = Intersection.intersectLineLine(min, topRight, a1, a2);
        var inter2 = Intersection.intersectLineLine(topRight, max, a1, a2);
        var inter3 = Intersection.intersectLineLine(max, bottomLeft, a1, a2);
        var inter4 = Intersection.intersectLineLine(bottomLeft, min, a1, a2);
        var result = new Intersection("No Intersection");
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectPolygonPolygon
       *
       *  @param {Array<module:kld-intersections.Point2D>} points1
       *  @param {Array<module:kld-intersections.Point2D>} points2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectPolygonPolygon",
      value: function intersectPolygonPolygon(points1, points2) {
        return Intersection.intersectPolylinePolyline(closePolygon(points1), closePolygon(points2));
      }
      /**
       *  intersectPolygonPolyline
       *
       *  @param {Array<module:kld-intersections.Point2D>} points1
       *  @param {Array<module:kld-intersections.Point2D>} points2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectPolygonPolyline",
      value: function intersectPolygonPolyline(points1, points2) {
        return Intersection.intersectPolylinePolyline(closePolygon(points1), points2);
      }
      /**
       *  intersectPolygonRectangle
       *
       *  @param {Array<module:kld-intersections.Point2D>} points
       *  @param {module:kld-intersections.Point2D} r1
       *  @param {module:kld-intersections.Point2D} r2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectPolygonRectangle",
      value: function intersectPolygonRectangle(points, r1, r2) {
        return Intersection.intersectPolylineRectangle(closePolygon(points), r1, r2);
      }
      /**
       *  intersectPolylinePolyline
       *
       *  @param {Array<module:kld-intersections.Point2D>} points1
       *  @param {Array<module:kld-intersections.Point2D>} points2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectPolylinePolyline",
      value: function intersectPolylinePolyline(points1, points2) {
        var result = new Intersection("No Intersection");
        var len = points1.length;

        for (var i = 0; i < len - 1; i++) {
          var a1 = points1[i];
          var a2 = points1[i + 1];
          var inter = Intersection.intersectLinePolyline(a1, a2, points2);
          result.appendPoints(inter.points);
        }

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectPolylineRectangle
       *
       *  @param {Array<module:kld-intersections.Point2D>} points
       *  @param {module:kld-intersections.Point2D} r1
       *  @param {module:kld-intersections.Point2D} r2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectPolylineRectangle",
      value: function intersectPolylineRectangle(points, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Point2D(max.x, min.y);
        var bottomLeft = new Point2D(min.x, max.y);
        var inter1 = Intersection.intersectLinePolyline(min, topRight, points);
        var inter2 = Intersection.intersectLinePolyline(topRight, max, points);
        var inter3 = Intersection.intersectLinePolyline(max, bottomLeft, points);
        var inter4 = Intersection.intersectLinePolyline(bottomLeft, min, points);
        var result = new Intersection("No Intersection");
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectRectangleRectangle
       *
       *  @param {module:kld-intersections.Point2D} a1
       *  @param {module:kld-intersections.Point2D} a2
       *  @param {module:kld-intersections.Point2D} b1
       *  @param {module:kld-intersections.Point2D} b2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectRectangleRectangle",
      value: function intersectRectangleRectangle(a1, a2, b1, b2) {
        var min = a1.min(a2);
        var max = a1.max(a2);
        var topRight = new Point2D(max.x, min.y);
        var bottomLeft = new Point2D(min.x, max.y);
        var inter1 = Intersection.intersectLineRectangle(min, topRight, b1, b2);
        var inter2 = Intersection.intersectLineRectangle(topRight, max, b1, b2);
        var inter3 = Intersection.intersectLineRectangle(max, bottomLeft, b1, b2);
        var inter4 = Intersection.intersectLineRectangle(bottomLeft, min, b1, b2);
        var result = new Intersection("No Intersection");
        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);

        if (result.points.length > 0) {
          result.status = "Intersection";
        }

        return result;
      }
      /**
       *  intersectRayRay
       *
       *  @param {module:kld-intersections.Point2D} a1
       *  @param {module:kld-intersections.Point2D} a2
       *  @param {module:kld-intersections.Point2D} b1
       *  @param {module:kld-intersections.Point2D} b2
       *  @returns {module:kld-intersections.Intersection}
       */

    }, {
      key: "intersectRayRay",
      value: function intersectRayRay(a1, a2, b1, b2) {
        var result;
        var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
        var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
        var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);

        if (u_b !== 0) {
          var ua = ua_t / u_b;
          result = new Intersection("Intersection");
          result.points.push(new Point2D(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
        } else if (ua_t === 0 || ub_t === 0) {
          result = new Intersection("Coincident");
        } else {
          result = new Intersection("Parallel");
        }

        return result;
      }
    }]);

    return Intersection;
  }();

  /**
   * Build shapes for intersection
   */

  var Shapes = /*#__PURE__*/function () {
    function Shapes() {
      _classCallCheck(this, Shapes);
    }

    _createClass(Shapes, null, [{
      key: "arc",

      /**
       *  arc
       *
       *  @deprecated use ShapeInfo.arc
       *  @param {number} centerX
       *  @param {number} centerY
       *  @param {number} radiusX
       *  @param {number} radiusY
       *  @param {number} startRadians
       *  @param {number} endRadians
       *  @returns {module:kld-intersections.ShapeInfo}
       */
      value: function arc(centerX, centerY, radiusX, radiusY, startRadians, endRadians) {
        return ShapeInfo.arc.apply(ShapeInfo, arguments);
      }
      /**
       *  quadraticBezier
       *
       *  @deprecated use ShapeInfo.quadraticBezier
       *  @param {number} p1x
       *  @param {number} p1y
       *  @param {number} p2x
       *  @param {number} p2y
       *  @param {number} p3x
       *  @param {number} p3y
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "quadraticBezier",
      value: function quadraticBezier(p1x, p1y, p2x, p2y, p3x, p3y) {
        return ShapeInfo.quadraticBezier.apply(ShapeInfo, arguments);
      }
      /**
       *  cubicBezier
       *
       *  @deprecated use ShapeInfo.cubicBezier
       *  @param {number} p1x
       *  @param {number} p1y
       *  @param {number} p2x
       *  @param {number} p2y
       *  @param {number} p3x
       *  @param {number} p3y
       *  @param {number} p4x
       *  @param {number} p4y
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "cubicBezier",
      value: function cubicBezier(p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
        return ShapeInfo.cubicBezier.apply(ShapeInfo, arguments);
      }
      /**
       *  circle
       *
       *  @deprecated use ShapeInfo.circle
       *  @param {number} centerX
       *  @param {number} centerY
       *  @param {number} radius
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "circle",
      value: function circle(centerX, centerY, radius) {
        return ShapeInfo.circle.apply(ShapeInfo, arguments);
      }
      /**
       *  ellipse
       *
       *  @deprecated use ShapeInfo.ellipse
       *  @param {number} centerX
       *  @param {number} centerY
       *  @param {number} radiusX
       *  @param {number} radiusY
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "ellipse",
      value: function ellipse(centerX, centerY, radiusX, radiusY) {
        return ShapeInfo.ellipse.apply(ShapeInfo, arguments);
      }
      /**
       *  line
       *
       *  @deprecated use ShapeInfo.line
       *  @param {number} p1x
       *  @param {number} p1y
       *  @param {number} p2x
       *  @param {number} p2y
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "line",
      value: function line(p1x, p1y, p2x, p2y) {
        return ShapeInfo.line.apply(ShapeInfo, arguments);
      }
      /**
       *  path
       *
       *  @deprecated use ShapeInfo.path
       *  @param {string} pathData
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "path",
      value: function path(pathData) {
        return ShapeInfo.path.apply(ShapeInfo, arguments);
      }
      /**
       *  polygon
       *
       *  @deprecated use ShapeInfo.polygon
       *  @param {Array<number>} coords
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "polygon",
      value: function polygon(coords) {
        return ShapeInfo.polygon.apply(ShapeInfo, arguments);
      }
      /**
       *  polyline
       *
       *  @deprecated use ShapeInfo.polyline
       *  @param {Array<number>} coords
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "polyline",
      value: function polyline(coords) {
        return ShapeInfo.polyline.apply(ShapeInfo, arguments);
      }
      /**
       *  rectangle
       *
       *  @deprecated use ShapeInfo.rectangle
       *  @param {number} x
       *  @param {number} y
       *  @param {number} width
       *  @param {number} height
       *  @param {number} [rx]
       *  @param {number} [ry]
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "rectangle",
      value: function rectangle(x, y, width, height) {
        return ShapeInfo.rectangle.apply(ShapeInfo, arguments);
      }
    }]);

    return Shapes;
  }();

  /**
   * Build shapes for intersection
   */

  var AffineShapes = /*#__PURE__*/function () {
    function AffineShapes() {
      _classCallCheck(this, AffineShapes);
    }

    _createClass(AffineShapes, null, [{
      key: "arc",

      /**
       *  arc
       *
       *  @deprecated use ShapeInfo.arc
       *  @param {module:kld-intersections.Point2D} center
       *  @param {number} radiusX
       *  @param {number} radiusY
       *  @param {number} startRadians
       *  @param {number} endRadians
       *  @returns {module:kld-intersections.ShapeInfo}
       */
      value: function arc(center, radiusX, radiusY, startRadians, endRadians) {
        return ShapeInfo.arc.apply(ShapeInfo, arguments);
      }
      /**
       *  quadraticBezier
       *
       *   @deprecated use ShapeInfo.quadraticBezier
       *  @param {module:kld-intersections.Point2D} p1
       *  @param {module:kld-intersections.Point2D} p2
       *  @param {module:kld-intersections.Point2D} p3
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "quadraticBezier",
      value: function quadraticBezier(p1, p2, p3) {
        return ShapeInfo.quadraticBezier.apply(ShapeInfo, arguments);
      }
      /**
       *  cubicBezier
       *
       *  @deprecated use ShapeInfo.cubicBezier
       *  @param {module:kld-intersections.Point2D} p1
       *  @param {module:kld-intersections.Point2D} p2
       *  @param {module:kld-intersections.Point2D} p3
       *  @param {module:kld-intersections.Point2D} p4
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "cubicBezier",
      value: function cubicBezier(p1, p2, p3, p4) {
        return ShapeInfo.cubicBezier.apply(ShapeInfo, arguments);
      }
      /**
       *  circle
       *
       *  @deprecated use ShapeInfo.circle
       *  @param {module:kld-intersections.Point2D} center
       *  @param {number} radius
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "circle",
      value: function circle(center, radius) {
        return ShapeInfo.circle.apply(ShapeInfo, arguments);
      }
      /**
       *  ellipse
       *
       *  @deprecated use ShapeInfo.ellipse
       *  @param {module:kld-intersections.Point2D} center
       *  @param {number} radiusX
       *  @param {number} radiusY
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "ellipse",
      value: function ellipse(center, radiusX, radiusY) {
        return ShapeInfo.ellipse.apply(ShapeInfo, arguments);
      }
      /**
       *  line
       *
       *  @deprecated use ShapeInfo.line
       *  @param {module:kld-intersections.Point2D} p1
       *  @param {module:kld-intersections.Point2D} p2
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "line",
      value: function line(p1, p2) {
        return ShapeInfo.line.apply(ShapeInfo, arguments);
      }
      /**
       *  path
       *
       *  @deprecated use ShapeInfo.path
       *  @param {string} pathData
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "path",
      value: function path(pathData) {
        return ShapeInfo.path.apply(ShapeInfo, arguments);
      }
      /**
       *  polygon
       *
       *  @deprecated use ShapeInfo.polygon
       *  @param {Array<module:kld-intersections.Point2D>} points
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "polygon",
      value: function polygon(points) {
        return ShapeInfo.polygon.apply(ShapeInfo, arguments);
      }
      /**
       *  polyline
       *
       *  @deprecated use ShapeInfo.polyline
       *  @param {Array<module:kld-intersections.Point2D>} points
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "polyline",
      value: function polyline(points) {
        return ShapeInfo.polyline.apply(ShapeInfo, arguments);
      }
      /**
       *  rectangle
       *
       *  @deprecated use ShapeInfo.rectangle
       *  @param {module:kld-intersections.Point2D} topLeft
       *  @param {module:kld-intersections.Vector2D} size
       *  @param {number} [rx]
       *  @param {number} [ry]
       *  @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "rectangle",
      value: function rectangle(topLeft, size) {
        return ShapeInfo.rectangle.apply(ShapeInfo, arguments);
      }
    }]);

    return AffineShapes;
  }();

  var SvgShapes = /*#__PURE__*/function () {
    function SvgShapes() {
      _classCallCheck(this, SvgShapes);
    }

    _createClass(SvgShapes, null, [{
      key: "circle",

      /**
       * circle
       *
       * @param {SVGCircleElement} circle
       * @returns {module:kld-intersections.ShapeInfo}
       */
      value: function circle(_circle) {
        if (_circle instanceof SVGCircleElement === false) {
          throw new TypeError("Expected SVGCircleElement, but found ".concat(_circle));
        }

        var center = new Point2D(_circle.cx.baseVal.value, _circle.cy.baseVal.value);
        var radius = _circle.r.baseVal.value;
        return ShapeInfo.circle(center, radius);
      }
      /**
       * ellipse
       *
       * @param {SVGEllipseElement} ellipse
       * @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "ellipse",
      value: function ellipse(_ellipse) {
        if (_ellipse instanceof SVGEllipseElement === false) {
          throw new TypeError("Expected SVGEllipseElement, but found ".concat(_ellipse));
        }

        var center = new Point2D(_ellipse.cx.baseVal.value, _ellipse.cy.baseVal.value);
        var radiusX = _ellipse.rx.baseVal.value;
        var radiusY = _ellipse.ry.baseVal.value;
        return ShapeInfo.ellipse(center, radiusX, radiusY);
      }
      /**
       * line
       *
       * @param {SVGLineElement} line
       * @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "line",
      value: function line(_line) {
        if (_line instanceof SVGLineElement === false) {
          throw new TypeError("Expected SVGLineElement, but found ".concat(_line));
        }

        var p1 = new Point2D(_line.x1.baseVal.value, _line.y1.baseVal.value);
        var p2 = new Point2D(_line.x2.baseVal.value, _line.y2.baseVal.value);
        return ShapeInfo.line(p1, p2);
      }
      /**
       * path
       *
       * @param {SVGPathElement} path
       * @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "path",
      value: function path(_path) {
        if (_path instanceof SVGPathElement === false) {
          throw new TypeError("Expected SVGPathElement, but found ".concat(_path));
        }

        var pathData = _path.getAttributeNS(null, "d");

        return ShapeInfo.path(pathData);
      }
      /**
       * polygon
       *
       * @param {SVGPolygonElement} polygon
       * @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "polygon",
      value: function polygon(_polygon) {
        if (_polygon instanceof SVGPolygonElement === false) {
          throw new TypeError("Expected SVGPolygonElement, but found ".concat(_polygon));
        }

        var points = [];

        for (var i = 0; i < _polygon.points.numberOfItems; i++) {
          var point = _polygon.points.getItem(i);

          points.push(new Point2D(point.x, point.y));
        }

        return ShapeInfo.polygon(points);
      }
      /**
       * polyline
       *
       * @param {SVGPolylineElement} polyline
       * @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "polyline",
      value: function polyline(_polyline) {
        if (_polyline instanceof SVGPolylineElement === false) {
          throw new TypeError("Expected SVGPolylineElement, but found ".concat(_polyline));
        }

        var points = [];

        for (var i = 0; i < _polyline.points.numberOfItems; i++) {
          var point = _polyline.points.getItem(i);

          points.push(new Point2D(point.x, point.y));
        }

        return ShapeInfo.polyline(points);
      }
      /**
       * rect
       *
       * @param {SVGRectElement} rect
       * @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "rect",
      value: function rect(_rect) {
        if (_rect instanceof SVGRectElement === false) {
          throw new TypeError("Expected SVGRectElement, but found ".concat(_rect));
        }

        return ShapeInfo.rectangle(_rect.x.baseVal.value, _rect.y.baseVal.value, _rect.width.baseVal.value, _rect.height.baseVal.value, _rect.rx.baseVal.value, _rect.ry.baseVal.value);
      }
      /**
       * element
       *
       * @param {SVGElement} element
       * @returns {module:kld-intersections.ShapeInfo}
       */

    }, {
      key: "element",
      value: function element(_element) {
        if (_element instanceof SVGElement === false) {
          throw new TypeError("Expected SVGElement, but found ".concat(_element));
        }
        /* eslint-disable-next-line prefer-destructuring */


        var tagName = _element.tagName;

        switch (tagName) {
          case "circle":
            return SvgShapes.circle(_element);

          case "ellipse":
            return SvgShapes.ellipse(_element);

          case "line":
            return SvgShapes.line(_element);

          case "path":
            return SvgShapes.path(_element);

          case "polygon":
            return SvgShapes.polygon(_element);

          case "polyline":
            return SvgShapes.polyline(_element);

          case "rect":
            return SvgShapes.rect(_element);

          default:
            throw new TypeError("Unrecognized element type: '".concat(tagName, "'"));
        }
      }
    }]);

    return SvgShapes;
  }();

  /**
   *
   *  IntersectionQuery.js
   *
   *  @copyright 2017 Kevin Lindsey
   * @module IntersectionQuery
   */
  /**
   * @namespace
   */

  var IntersectionQuery = {};
  /**
   *  pointInCircle
   *
   *  @param {module:kld-intersections.Point2D} point
   *  @param {module:kld-intersections.Point2D} center
   *  @param {number} radius
   *  @returns {boolean}
   */

  IntersectionQuery.pointInCircle = function (point, center, radius) {
    var v = Vector2D.fromPoints(center, point);
    return v.length() <= radius;
  };
  /**
   *  pointInEllipse
   *
   *  @param {module:kld-intersections.Point2D} point
   *  @param {module:kld-intersections.Point2D} center
   *  @param {number} radiusX
   *  @param {number} radiusY
   *  @returns {boolean}
   */


  IntersectionQuery.pointInEllipse = function (point, center, radiusX, radiusY) {
    var len = point.subtract(center);
    return len.x * len.x / (radiusX * radiusX) + len.y * len.y / (radiusY * radiusY) <= 1;
  };
  /**
   *  pointInPolyline
   *
   *  @param {module:kld-intersections.Point2D} point
   *  @param {Array<module:kld-intersections.Point2D>} points
   */


  IntersectionQuery.pointInPolyline = function (point, points) {
    var len = points.length;
    var counter = 0;
    var xInter;
    var p1 = points[0];

    for (var i = 1; i <= len; i++) {
      var p2 = points[i % len];
      var minY = Math.min(p1.y, p2.y);
      var maxY = Math.max(p1.y, p2.y);
      var maxX = Math.max(p1.x, p2.x);

      if (p1.y !== p2.y && minY < point.y && point.y <= maxY && point.x <= maxX) {
        xInter = (point.y - p1.y) * (p2.x - p1.x) / (p2.y - p1.y) + p1.x;

        if (p1.x === p2.x || point.x <= xInter) {
          counter++;
        }
      }

      p1 = p2;
    }

    return counter % 2 === 1;
  };
  /**
   *  pointInPolyline
   *
   *  @param {module:kld-intersections.Point2D} point
   *  @param {Array<module:kld-intersections.Point2D>} points
   */


  IntersectionQuery.pointInPolygon = IntersectionQuery.pointInPolyline;
  /**
   *  pointInRectangle
   *
   *  @param {module:kld-intersections.Point2D} point
   *  @param {module:kld-intersections.Point2D} topLeft
   *  @param {module:kld-intersections.Point2D} bottomRight
   *  @returns {boolean}
   */

  IntersectionQuery.pointInRectangle = function (point, topLeft, bottomRight) {
    return topLeft.x <= point.x && point.x < bottomRight.x && topLeft.y <= point.y && point.y < bottomRight.y;
  };

  exports.AffineShapes = AffineShapes;
  exports.Intersection = Intersection;
  exports.IntersectionArgs = ShapeInfo;
  exports.IntersectionQuery = IntersectionQuery;
  exports.Matrix2D = Matrix2D;
  exports.Point2D = Point2D;
  exports.ShapeInfo = ShapeInfo;
  exports.Shapes = Shapes;
  exports.SvgShapes = SvgShapes;
  exports.Vector2D = Vector2D;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
;/**
 * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
 *
 * @module Chartist.Core
 */
var Chartist = {
  version: '0.11.10'
};

(function (globalRoot, Chartist) {
  'use strict';

  var window = globalRoot.window;
  var document = globalRoot.document;

  /**
   * This object contains all namespaces used within Chartist.
   *
   * @memberof Chartist.Core
   * @type {{svg: string, xmlns: string, xhtml: string, xlink: string, ct: string}}
   */
  Chartist.namespaces = {
    svg: 'http://www.w3.org/2000/svg',
    xmlns: 'http://www.w3.org/2000/xmlns/',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xlink: 'http://www.w3.org/1999/xlink',
    ct: 'http://gionkunz.github.com/chartist-js/ct'
  };

  /**
   * Helps to simplify functional style code
   *
   * @memberof Chartist.Core
   * @param {*} n This exact value will be returned by the noop function
   * @return {*} The same value that was provided to the n parameter
   */
  Chartist.noop = function (n) {
    return n;
  };

  /**
   * Generates a-z from a number 0 to 26
   *
   * @memberof Chartist.Core
   * @param {Number} n A number from 0 to 26 that will result in a letter a-z
   * @return {String} A character from a-z based on the input number n
   */
  Chartist.alphaNumerate = function (n) {
    // Limit to a-z
    return String.fromCharCode(97 + n % 26);
  };

  /**
   * Simple recursive object extend
   *
   * @memberof Chartist.Core
   * @param {Object} target Target object where the source will be merged into
   * @param {Object...} sources This object (objects) will be merged into target and then target is returned
   * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
   */
  Chartist.extend = function (target) {
    var i, source, sourceProp;
    target = target || {};

    for (i = 1; i < arguments.length; i++) {
      source = arguments[i];
      for (var prop in source) {
        sourceProp = source[prop];
        if (typeof sourceProp === 'object' && sourceProp !== null && !(sourceProp instanceof Array)) {
          target[prop] = Chartist.extend(target[prop], sourceProp);
        } else {
          target[prop] = sourceProp;
        }
      }
    }

    return target;
  };

  /**
   * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
   *
   * @memberof Chartist.Core
   * @param {String} str
   * @param {String} subStr
   * @param {String} newSubStr
   * @return {String}
   */
  Chartist.replaceAll = function(str, subStr, newSubStr) {
    return str.replace(new RegExp(subStr, 'g'), newSubStr);
  };

  /**
   * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
   *
   * @memberof Chartist.Core
   * @param {Number} value
   * @param {String} unit
   * @return {String} Returns the passed number value with unit.
   */
  Chartist.ensureUnit = function(value, unit) {
    if(typeof value === 'number') {
      value = value + unit;
    }

    return value;
  };

  /**
   * Converts a number or string to a quantity object.
   *
   * @memberof Chartist.Core
   * @param {String|Number} input
   * @return {Object} Returns an object containing the value as number and the unit as string.
   */
  Chartist.quantity = function(input) {
    if (typeof input === 'string') {
      var match = (/^(\d+)\s*(.*)$/g).exec(input);
      return {
        value : +match[1],
        unit: match[2] || undefined
      };
    }
    return { value: input };
  };

  /**
   * This is a wrapper around document.querySelector that will return the query if it's already of type Node
   *
   * @memberof Chartist.Core
   * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
   * @return {Node}
   */
  Chartist.querySelector = function(query) {
    return query instanceof Node ? query : document.querySelector(query);
  };

  /**
   * Functional style helper to produce array with given length initialized with undefined values
   *
   * @memberof Chartist.Core
   * @param length
   * @return {Array}
   */
  Chartist.times = function(length) {
    return Array.apply(null, new Array(length));
  };

  /**
   * Sum helper to be used in reduce functions
   *
   * @memberof Chartist.Core
   * @param previous
   * @param current
   * @return {*}
   */
  Chartist.sum = function(previous, current) {
    return previous + (current ? current : 0);
  };

  /**
   * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
   *
   * @memberof Chartist.Core
   * @param {Number} factor
   * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
   */
  Chartist.mapMultiply = function(factor) {
    return function(num) {
      return num * factor;
    };
  };

  /**
   * Add helper to be used in `Array.map` for adding a addend to each value of an array.
   *
   * @memberof Chartist.Core
   * @param {Number} addend
   * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
   */
  Chartist.mapAdd = function(addend) {
    return function(num) {
      return num + addend;
    };
  };

  /**
   * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
   *
   * @memberof Chartist.Core
   * @param arr
   * @param cb
   * @return {Array}
   */
  Chartist.serialMap = function(arr, cb) {
    var result = [],
        length = Math.max.apply(null, arr.map(function(e) {
          return e.length;
        }));

    Chartist.times(length).forEach(function(e, index) {
      var args = arr.map(function(e) {
        return e[index];
      });

      result[index] = cb.apply(null, args);
    });

    return result;
  };

  /**
   * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
   *
   * @memberof Chartist.Core
   * @param {Number} value The value that should be rounded with precision
   * @param {Number} [digits] The number of digits after decimal used to do the rounding
   * @returns {number} Rounded value
   */
  Chartist.roundWithPrecision = function(value, digits) {
    var precision = Math.pow(10, digits || Chartist.precision);
    return Math.round(value * precision) / precision;
  };

  /**
   * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
   *
   * @memberof Chartist.Core
   * @type {number}
   */
  Chartist.precision = 8;

  /**
   * A map with characters to escape for strings to be safely used as attribute values.
   *
   * @memberof Chartist.Core
   * @type {Object}
   */
  Chartist.escapingMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#039;'
  };

  /**
   * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
   * If called with null or undefined the function will return immediately with null or undefined.
   *
   * @memberof Chartist.Core
   * @param {Number|String|Object} data
   * @return {String}
   */
  Chartist.serialize = function(data) {
    if(data === null || data === undefined) {
      return data;
    } else if(typeof data === 'number') {
      data = ''+data;
    } else if(typeof data === 'object') {
      data = JSON.stringify({data: data});
    }

    return Object.keys(Chartist.escapingMap).reduce(function(result, key) {
      return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
    }, data);
  };

  /**
   * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
   *
   * @memberof Chartist.Core
   * @param {String} data
   * @return {String|Number|Object}
   */
  Chartist.deserialize = function(data) {
    if(typeof data !== 'string') {
      return data;
    }

    data = Object.keys(Chartist.escapingMap).reduce(function(result, key) {
      return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
    }, data);

    try {
      data = JSON.parse(data);
      data = data.data !== undefined ? data.data : data;
    } catch(e) {}

    return data;
  };

  /**
   * Create or reinitialize the SVG element for the chart
   *
   * @memberof Chartist.Core
   * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
   * @param {String} width Set the width of the SVG element. Default is 100%
   * @param {String} height Set the height of the SVG element. Default is 100%
   * @param {String} className Specify a class to be added to the SVG element
   * @return {Object} The created/reinitialized SVG element
   */
  Chartist.createSvg = function (container, width, height, className) {
    var svg;

    width = width || '100%';
    height = height || '100%';

    // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
    // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/
    Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
      return svg.getAttributeNS(Chartist.namespaces.xmlns, 'ct');
    }).forEach(function removePreviousElement(svg) {
      container.removeChild(svg);
    });

    // Create svg object with width and height or use 100% as default
    svg = new Chartist.Svg('svg').attr({
      width: width,
      height: height
    }).addClass(className);

    svg._node.style.width = width;
    svg._node.style.height = height;

    // Add the DOM node to our container
    container.appendChild(svg._node);

    return svg;
  };

  /**
   * Ensures that the data object passed as second argument to the charts is present and correctly initialized.
   *
   * @param  {Object} data The data object that is passed as second argument to the charts
   * @return {Object} The normalized data object
   */
  Chartist.normalizeData = function(data, reverse, multi) {
    var labelCount;
    var output = {
      raw: data,
      normalized: {}
    };

    // Check if we should generate some labels based on existing series data
    output.normalized.series = Chartist.getDataArray({
      series: data.series || []
    }, reverse, multi);

    // If all elements of the normalized data array are arrays we're dealing with
    // multi series data and we need to find the largest series if they are un-even
    if (output.normalized.series.every(function(value) {
        return value instanceof Array;
      })) {
      // Getting the series with the the most elements
      labelCount = Math.max.apply(null, output.normalized.series.map(function(series) {
        return series.length;
      }));
    } else {
      // We're dealing with Pie data so we just take the normalized array length
      labelCount = output.normalized.series.length;
    }

    output.normalized.labels = (data.labels || []).slice();
    // Padding the labels to labelCount with empty strings
    Array.prototype.push.apply(
      output.normalized.labels,
      Chartist.times(Math.max(0, labelCount - output.normalized.labels.length)).map(function() {
        return '';
      })
    );

    if(reverse) {
      Chartist.reverseData(output.normalized);
    }

    return output;
  };

  /**
   * This function safely checks if an objects has an owned property.
   *
   * @param {Object} object The object where to check for a property
   * @param {string} property The property name
   * @returns {boolean} Returns true if the object owns the specified property
   */
  Chartist.safeHasProperty = function(object, property) {
    return object !== null &&
      typeof object === 'object' &&
      object.hasOwnProperty(property);
  };

  /**
   * Checks if a value is considered a hole in the data series.
   *
   * @param {*} value
   * @returns {boolean} True if the value is considered a data hole
   */
  Chartist.isDataHoleValue = function(value) {
    return value === null ||
      value === undefined ||
      (typeof value === 'number' && isNaN(value));
  };

  /**
   * Reverses the series, labels and series data arrays.
   *
   * @memberof Chartist.Core
   * @param data
   */
  Chartist.reverseData = function(data) {
    data.labels.reverse();
    data.series.reverse();
    for (var i = 0; i < data.series.length; i++) {
      if(typeof(data.series[i]) === 'object' && data.series[i].data !== undefined) {
        data.series[i].data.reverse();
      } else if(data.series[i] instanceof Array) {
        data.series[i].reverse();
      }
    }
  };

  /**
   * Convert data series into plain array
   *
   * @memberof Chartist.Core
   * @param {Object} data The series object that contains the data to be visualized in the chart
   * @param {Boolean} [reverse] If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
   * @param {Boolean} [multi] Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
   * @return {Array} A plain array that contains the data to be visualized in the chart
   */
  Chartist.getDataArray = function(data, reverse, multi) {
    // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
    // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
    function recursiveConvert(value) {
      if(Chartist.safeHasProperty(value, 'value')) {
        // We are dealing with value object notation so we need to recurse on value property
        return recursiveConvert(value.value);
      } else if(Chartist.safeHasProperty(value, 'data')) {
        // We are dealing with series object notation so we need to recurse on data property
        return recursiveConvert(value.data);
      } else if(value instanceof Array) {
        // Data is of type array so we need to recurse on the series
        return value.map(recursiveConvert);
      } else if(Chartist.isDataHoleValue(value)) {
        // We're dealing with a hole in the data and therefore need to return undefined
        // We're also returning undefined for multi value output
        return undefined;
      } else {
        // We need to prepare multi value output (x and y data)
        if(multi) {
          var multiValue = {};

          // Single series value arrays are assumed to specify the Y-Axis value
          // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
          // If multi is a string then it's assumed that it specified which dimension should be filled as default
          if(typeof multi === 'string') {
            multiValue[multi] = Chartist.getNumberOrUndefined(value);
          } else {
            multiValue.y = Chartist.getNumberOrUndefined(value);
          }

          multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
          multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;

          return multiValue;

        } else {
          // We can return simple data
          return Chartist.getNumberOrUndefined(value);
        }
      }
    }

    return data.series.map(recursiveConvert);
  };

  /**
   * Converts a number into a padding object.
   *
   * @memberof Chartist.Core
   * @param {Object|Number} padding
   * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
   * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
   */
  Chartist.normalizePadding = function(padding, fallback) {
    fallback = fallback || 0;

    return typeof padding === 'number' ? {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    } : {
      top: typeof padding.top === 'number' ? padding.top : fallback,
      right: typeof padding.right === 'number' ? padding.right : fallback,
      bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
      left: typeof padding.left === 'number' ? padding.left : fallback
    };
  };

  Chartist.getMetaData = function(series, index) {
    var value = series.data ? series.data[index] : series[index];
    return value ? value.meta : undefined;
  };

  /**
   * Calculate the order of magnitude for the chart scale
   *
   * @memberof Chartist.Core
   * @param {Number} value The value Range of the chart
   * @return {Number} The order of magnitude
   */
  Chartist.orderOfMagnitude = function (value) {
    return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
  };

  /**
   * Project a data length into screen coordinates (pixels)
   *
   * @memberof Chartist.Core
   * @param {Object} axisLength The svg element for the chart
   * @param {Number} length Single data value from a series array
   * @param {Object} bounds All the values to set the bounds of the chart
   * @return {Number} The projected data length in pixels
   */
  Chartist.projectLength = function (axisLength, length, bounds) {
    return length / bounds.range * axisLength;
  };

  /**
   * Get the height of the area in the chart for the data series
   *
   * @memberof Chartist.Core
   * @param {Object} svg The svg element for the chart
   * @param {Object} options The Object that contains all the optional values for the chart
   * @return {Number} The height of the area in the chart for the data series
   */
  Chartist.getAvailableHeight = function (svg, options) {
    return Math.max((Chartist.quantity(options.height).value || svg.height()) - (options.chartPadding.top +  options.chartPadding.bottom) - options.axisX.offset, 0);
  };

  /**
   * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
   *
   * @memberof Chartist.Core
   * @param {Array} data The array that contains the data to be visualized in the chart
   * @param {Object} options The Object that contains the chart options
   * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
   * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
   */
  Chartist.getHighLow = function (data, options, dimension) {
    // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
    options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});

    var highLow = {
        high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
        low: options.low === undefined ? Number.MAX_VALUE : +options.low
      };
    var findHigh = options.high === undefined;
    var findLow = options.low === undefined;

    // Function to recursively walk through arrays and find highest and lowest number
    function recursiveHighLow(data) {
      if(data === undefined) {
        return undefined;
      } else if(data instanceof Array) {
        for (var i = 0; i < data.length; i++) {
          recursiveHighLow(data[i]);
        }
      } else {
        var value = dimension ? +data[dimension] : +data;

        if (findHigh && value > highLow.high) {
          highLow.high = value;
        }

        if (findLow && value < highLow.low) {
          highLow.low = value;
        }
      }
    }

    // Start to find highest and lowest number recursively
    if(findHigh || findLow) {
      recursiveHighLow(data);
    }

    // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
    // used to generate the chart. This is useful when the chart always needs to contain the position of the
    // invisible reference value in the view i.e. for bipolar scales.
    if (options.referenceValue || options.referenceValue === 0) {
      highLow.high = Math.max(options.referenceValue, highLow.high);
      highLow.low = Math.min(options.referenceValue, highLow.low);
    }

    // If high and low are the same because of misconfiguration or flat data (only the same value) we need
    // to set the high or low to 0 depending on the polarity
    if (highLow.high <= highLow.low) {
      // If both values are 0 we set high to 1
      if (highLow.low === 0) {
        highLow.high = 1;
      } else if (highLow.low < 0) {
        // If we have the same negative value for the bounds we set bounds.high to 0
        highLow.high = 0;
      } else if (highLow.high > 0) {
        // If we have the same positive value for the bounds we set bounds.low to 0
        highLow.low = 0;
      } else {
        // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
        highLow.high = 1;
        highLow.low = 0;
      }
    }

    return highLow;
  };

  /**
   * Checks if a value can be safely coerced to a number. This includes all values except null which result in finite numbers when coerced. This excludes NaN, since it's not finite.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {Boolean}
   */
  Chartist.isNumeric = function(value) {
    return value === null ? false : isFinite(value);
  };

  /**
   * Returns true on all falsey values except the numeric value 0.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {boolean}
   */
  Chartist.isFalseyButZero = function(value) {
    return !value && value !== 0;
  };

  /**
   * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {*}
   */
  Chartist.getNumberOrUndefined = function(value) {
    return Chartist.isNumeric(value) ? +value : undefined;
  };

  /**
   * Checks if provided value object is multi value (contains x or y properties)
   *
   * @memberof Chartist.Core
   * @param value
   */
  Chartist.isMultiValue = function(value) {
    return typeof value === 'object' && ('x' in value || 'y' in value);
  };

  /**
   * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
   *
   * @memberof Chartist.Core
   * @param value
   * @param dimension
   * @param defaultValue
   * @returns {*}
   */
  Chartist.getMultiValue = function(value, dimension) {
    if(Chartist.isMultiValue(value)) {
      return Chartist.getNumberOrUndefined(value[dimension || 'y']);
    } else {
      return Chartist.getNumberOrUndefined(value);
    }
  };

  /**
   * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
   *
   * @memberof Chartist.Core
   * @param {Number} num An integer number where the smallest factor should be searched for
   * @returns {Number} The smallest integer factor of the parameter num.
   */
  Chartist.rho = function(num) {
    if(num === 1) {
      return num;
    }

    function gcd(p, q) {
      if (p % q === 0) {
        return q;
      } else {
        return gcd(q, p % q);
      }
    }

    function f(x) {
      return x * x + 1;
    }

    var x1 = 2, x2 = 2, divisor;
    if (num % 2 === 0) {
      return 2;
    }

    do {
      x1 = f(x1) % num;
      x2 = f(f(x2)) % num;
      divisor = gcd(Math.abs(x1 - x2), num);
    } while (divisor === 1);

    return divisor;
  };

  /**
   * Calculate and retrieve all the bounds for the chart and return them in one array
   *
   * @memberof Chartist.Core
   * @param {Number} axisLength The length of the Axis used for
   * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
   * @param {Number} scaleMinSpace The minimum projected length a step should result in
   * @param {Boolean} onlyInteger
   * @return {Object} All the values to set the bounds of the chart
   */
  Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
    var i,
      optimizationCounter = 0,
      newMin,
      newMax,
      bounds = {
        high: highLow.high,
        low: highLow.low
      };

    bounds.valueRange = bounds.high - bounds.low;
    bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
    bounds.step = Math.pow(10, bounds.oom);
    bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
    bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
    bounds.range = bounds.max - bounds.min;
    bounds.numberOfSteps = Math.round(bounds.range / bounds.step);

    // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
    // If we are already below the scaleMinSpace value we will scale up
    var length = Chartist.projectLength(axisLength, bounds.step, bounds);
    var scaleUp = length < scaleMinSpace;
    var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0;

    // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1
    if(onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
      bounds.step = 1;
    } else if(onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
      // If step 1 was too small, we can try the smallest factor of range
      // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
      // is larger than the scaleMinSpace we should go for it.
      bounds.step = smallestFactor;
    } else {
      // Trying to divide or multiply by 2 and find the best step value
      while (true) {
        if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
          bounds.step *= 2;
        } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
          bounds.step /= 2;
          if(onlyInteger && bounds.step % 1 !== 0) {
            bounds.step *= 2;
            break;
          }
        } else {
          break;
        }

        if(optimizationCounter++ > 1000) {
          throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
        }
      }
    }

    var EPSILON = 2.221E-16;
    bounds.step = Math.max(bounds.step, EPSILON);
    function safeIncrement(value, increment) {
      // If increment is too small use *= (1+EPSILON) as a simple nextafter
      if (value === (value += increment)) {
      	value *= (1 + (increment > 0 ? EPSILON : -EPSILON));
      }
      return value;
    }

    // Narrow min and max based on new step
    newMin = bounds.min;
    newMax = bounds.max;
    while (newMin + bounds.step <= bounds.low) {
    	newMin = safeIncrement(newMin, bounds.step);
    }
    while (newMax - bounds.step >= bounds.high) {
    	newMax = safeIncrement(newMax, -bounds.step);
    }
    bounds.min = newMin;
    bounds.max = newMax;
    bounds.range = bounds.max - bounds.min;

    var values = [];
    for (i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
      var value = Chartist.roundWithPrecision(i);
      if (value !== values[values.length - 1]) {
        values.push(value);
      }
    }
    bounds.values = values;
    return bounds;
  };

  /**
   * Calculate cartesian coordinates of polar coordinates
   *
   * @memberof Chartist.Core
   * @param {Number} centerX X-axis coordinates of center point of circle segment
   * @param {Number} centerY X-axis coordinates of center point of circle segment
   * @param {Number} radius Radius of circle segment
   * @param {Number} angleInDegrees Angle of circle segment in degrees
   * @return {{x:Number, y:Number}} Coordinates of point on circumference
   */
  Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  /**
   * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
   *
   * @memberof Chartist.Core
   * @param {Object} svg The svg element for the chart
   * @param {Object} options The Object that contains all the optional values for the chart
   * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
   * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
   */
  Chartist.createChartRect = function (svg, options, fallbackPadding) {
    var hasAxis = !!(options.axisX || options.axisY);
    var yAxisOffset = hasAxis ? options.axisY.offset : 0;
    var xAxisOffset = hasAxis ? options.axisX.offset : 0;
    // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0
    var width = svg.width() || Chartist.quantity(options.width).value || 0;
    var height = svg.height() || Chartist.quantity(options.height).value || 0;
    var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding);

    // If settings were to small to cope with offset (legacy) and padding, we'll adjust
    width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
    height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);

    var chartRect = {
      padding: normalizedPadding,
      width: function () {
        return this.x2 - this.x1;
      },
      height: function () {
        return this.y1 - this.y2;
      }
    };

    if(hasAxis) {
      if (options.axisX.position === 'start') {
        chartRect.y2 = normalizedPadding.top + xAxisOffset;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
      } else {
        chartRect.y2 = normalizedPadding.top;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
      }

      if (options.axisY.position === 'start') {
        chartRect.x1 = normalizedPadding.left + yAxisOffset;
        chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
      } else {
        chartRect.x1 = normalizedPadding.left;
        chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
      }
    } else {
      chartRect.x1 = normalizedPadding.left;
      chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
      chartRect.y2 = normalizedPadding.top;
      chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
    }

    return chartRect;
  };

  /**
   * Creates a grid line based on a projected value.
   *
   * @memberof Chartist.Core
   * @param position
   * @param index
   * @param axis
   * @param offset
   * @param length
   * @param group
   * @param classes
   * @param eventEmitter
   */
  Chartist.createGrid = function(position, index, axis, offset, length, group, classes, eventEmitter) {
    var positionalData = {};
    positionalData[axis.units.pos + '1'] = position;
    positionalData[axis.units.pos + '2'] = position;
    positionalData[axis.counterUnits.pos + '1'] = offset;
    positionalData[axis.counterUnits.pos + '2'] = offset + length;

    var gridElement = group.elem('line', positionalData, classes.join(' '));

    // Event for grid draw
    eventEmitter.emit('draw',
      Chartist.extend({
        type: 'grid',
        axis: axis,
        index: index,
        group: group,
        element: gridElement
      }, positionalData)
    );
  };

  /**
   * Creates a grid background rect and emits the draw event.
   *
   * @memberof Chartist.Core
   * @param gridGroup
   * @param chartRect
   * @param className
   * @param eventEmitter
   */
  Chartist.createGridBackground = function (gridGroup, chartRect, className, eventEmitter) {
    var gridBackground = gridGroup.elem('rect', {
        x: chartRect.x1,
        y: chartRect.y2,
        width: chartRect.width(),
        height: chartRect.height(),
      }, className, true);

      // Event for grid background draw
      eventEmitter.emit('draw', {
        type: 'gridBackground',
        group: gridGroup,
        element: gridBackground
      });
  };

  /**
   * Creates a label based on a projected value and an axis.
   *
   * @memberof Chartist.Core
   * @param position
   * @param length
   * @param index
   * @param labels
   * @param axis
   * @param axisOffset
   * @param labelOffset
   * @param group
   * @param classes
   * @param useForeignObject
   * @param eventEmitter
   */
  Chartist.createLabel = function(position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
    var labelElement;
    var positionalData = {};

    positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
    positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
    positionalData[axis.units.len] = length;
    positionalData[axis.counterUnits.len] = Math.max(0, axisOffset - 10);

    if(useForeignObject) {
      // We need to set width and height explicitly to px as span will not expand with width and height being
      // 100% in all browsers
      var content = document.createElement('span');
      content.className = classes.join(' ');
      content.setAttribute('xmlns', Chartist.namespaces.xhtml);
      content.innerText = labels[index];
      content.style[axis.units.len] = Math.round(positionalData[axis.units.len]) + 'px';
      content.style[axis.counterUnits.len] = Math.round(positionalData[axis.counterUnits.len]) + 'px';

      labelElement = group.foreignObject(content, Chartist.extend({
        style: 'overflow: visible;'
      }, positionalData));
    } else {
      labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
    }

    eventEmitter.emit('draw', Chartist.extend({
      type: 'label',
      axis: axis,
      index: index,
      group: group,
      element: labelElement,
      text: labels[index]
    }, positionalData));
  };

  /**
   * Helper to read series specific options from options object. It automatically falls back to the global option if
   * there is no option in the series options.
   *
   * @param {Object} series Series object
   * @param {Object} options Chartist options object
   * @param {string} key The options key that should be used to obtain the options
   * @returns {*}
   */
  Chartist.getSeriesOption = function(series, options, key) {
    if(series.name && options.series && options.series[series.name]) {
      var seriesOptions = options.series[series.name];
      return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
    } else {
      return options[key];
    }
  };

  /**
   * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
   *
   * @memberof Chartist.Core
   * @param {Object} options Options set by user
   * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
   * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
   * @return {Object} The consolidated options object from the defaults, base and matching responsive options
   */
  Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
    var baseOptions = Chartist.extend({}, options),
      currentOptions,
      mediaQueryListeners = [],
      i;

    function updateCurrentOptions(mediaEvent) {
      var previousOptions = currentOptions;
      currentOptions = Chartist.extend({}, baseOptions);

      if (responsiveOptions) {
        for (i = 0; i < responsiveOptions.length; i++) {
          var mql = window.matchMedia(responsiveOptions[i][0]);
          if (mql.matches) {
            currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
          }
        }
      }

      if(eventEmitter && mediaEvent) {
        eventEmitter.emit('optionsChanged', {
          previousOptions: previousOptions,
          currentOptions: currentOptions
        });
      }
    }

    function removeMediaQueryListeners() {
      mediaQueryListeners.forEach(function(mql) {
        mql.removeListener(updateCurrentOptions);
      });
    }

    if (!window.matchMedia) {
      throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
    } else if (responsiveOptions) {

      for (i = 0; i < responsiveOptions.length; i++) {
        var mql = window.matchMedia(responsiveOptions[i][0]);
        mql.addListener(updateCurrentOptions);
        mediaQueryListeners.push(mql);
      }
    }
    // Execute initially without an event argument so we get the correct options
    updateCurrentOptions();

    return {
      removeMediaQueryListeners: removeMediaQueryListeners,
      getCurrentOptions: function getCurrentOptions() {
        return Chartist.extend({}, currentOptions);
      }
    };
  };


  /**
   * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
   * valueData property describing the segment.
   *
   * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
   * points with undefined values are discarded.
   *
   * **Options**
   * The following options are used to determine how segments are formed
   * ```javascript
   * var options = {
   *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
   *   fillHoles: false,
   *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
   *   increasingX: false
   * };
   * ```
   *
   * @memberof Chartist.Core
   * @param {Array} pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
   * @param {Array} values List of associated point values in the form [v1, v2 .. vn]
   * @param {Object} options Options set by user
   * @return {Array} List of segments, each containing a pathCoordinates and valueData property.
   */
  Chartist.splitIntoSegments = function(pathCoordinates, valueData, options) {
    var defaultOptions = {
      increasingX: false,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    var segments = [];
    var hole = true;

    for(var i = 0; i < pathCoordinates.length; i += 2) {
      // If this value is a "hole" we set the hole flag
      if(Chartist.getMultiValue(valueData[i / 2].value) === undefined) {
      // if(valueData[i / 2].value === undefined) {
        if(!options.fillHoles) {
          hole = true;
        }
      } else {
        if(options.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i-2]) {
          // X is not increasing, so we need to make sure we start a new segment
          hole = true;
        }


        // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment
        if(hole) {
          segments.push({
            pathCoordinates: [],
            valueData: []
          });
          // As we have a valid value now, we are not in a "hole" anymore
          hole = false;
        }

        // Add to the segment pathCoordinates and valueData
        segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
        segments[segments.length - 1].valueData.push(valueData[i / 2]);
      }
    }

    return segments;
  };
}(this || global, Chartist));
;/**
 * Chartist path interpolation functions.
 *
 * @module Chartist.Interpolation
 */
/* global Chartist */
(function(globalRoot, Chartist) {
  'use strict';

  Chartist.Interpolation = {};

  /**
   * This interpolation function does not smooth the path and the result is only containing lines and no curves.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.none({
   *     fillHoles: false
   *   })
   * });
   *
   *
   * @memberof Chartist.Interpolation
   * @return {Function}
   */
  Chartist.Interpolation.none = function(options) {
    var defaultOptions = {
      fillHoles: false
    };
    options = Chartist.extend({}, defaultOptions, options);
    return function none(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();
      var hole = true;

      for(var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var currData = valueData[i / 2];

        if(Chartist.getMultiValue(currData.value) !== undefined) {

          if(hole) {
            path.move(currX, currY, false, currData);
          } else {
            path.line(currX, currY, false, currData);
          }

          hole = false;
        } else if(!options.fillHoles) {
          hole = true;
        }
      }

      return path;
    };
  };

  /**
   * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
   *
   * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.simple({
   *     divisor: 2,
   *     fillHoles: false
   *   })
   * });
   *
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the simple interpolation factory function.
   * @return {Function}
   */
  Chartist.Interpolation.simple = function(options) {
    var defaultOptions = {
      divisor: 2,
      fillHoles: false
    };
    options = Chartist.extend({}, defaultOptions, options);

    var d = 1 / Math.max(1, options.divisor);

    return function simple(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();
      var prevX, prevY, prevData;

      for(var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var length = (currX - prevX) * d;
        var currData = valueData[i / 2];

        if(currData.value !== undefined) {

          if(prevData === undefined) {
            path.move(currX, currY, false, currData);
          } else {
            path.curve(
              prevX + length,
              prevY,
              currX - length,
              currY,
              currX,
              currY,
              false,
              currData
            );
          }

          prevX = currX;
          prevY = currY;
          prevData = currData;
        } else if(!options.fillHoles) {
          prevX = currX = prevData = undefined;
        }
      }

      return path;
    };
  };

  /**
   * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
   *
   * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 1,
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the cardinal factory function.
   * @return {Function}
   */
  Chartist.Interpolation.cardinal = function(options) {
    var defaultOptions = {
      tension: 1,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    var t = Math.min(1, Math.max(0, options.tension)),
      c = 1 - t;

    return function cardinal(pathCoordinates, valueData) {
      // First we try to split the coordinates into segments
      // This is necessary to treat "holes" in line charts
      var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
        fillHoles: options.fillHoles
      });

      if(!segments.length) {
        // If there were no segments return 'Chartist.Interpolation.none'
        return Chartist.Interpolation.none()([]);
      } else if(segments.length > 1) {
        // If the split resulted in more that one segment we need to interpolate each segment individually and join them
        // afterwards together into a single path.
          var paths = [];
        // For each segment we will recurse the cardinal function
        segments.forEach(function(segment) {
          paths.push(cardinal(segment.pathCoordinates, segment.valueData));
        });
        // Join the segment path data into a single path and return
        return Chartist.Svg.Path.join(paths);
      } else {
        // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
        // segment
        pathCoordinates = segments[0].pathCoordinates;
        valueData = segments[0].valueData;

        // If less than two points we need to fallback to no smoothing
        if(pathCoordinates.length <= 4) {
          return Chartist.Interpolation.none()(pathCoordinates, valueData);
        }

        var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
          z;

        for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
          var p = [
            {x: +pathCoordinates[i - 2], y: +pathCoordinates[i - 1]},
            {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]},
            {x: +pathCoordinates[i + 2], y: +pathCoordinates[i + 3]},
            {x: +pathCoordinates[i + 4], y: +pathCoordinates[i + 5]}
          ];
          if (z) {
            if (!i) {
              p[0] = {x: +pathCoordinates[iLen - 2], y: +pathCoordinates[iLen - 1]};
            } else if (iLen - 4 === i) {
              p[3] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
            } else if (iLen - 2 === i) {
              p[2] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
              p[3] = {x: +pathCoordinates[2], y: +pathCoordinates[3]};
            }
          } else {
            if (iLen - 4 === i) {
              p[3] = p[2];
            } else if (!i) {
              p[0] = {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]};
            }
          }

          path.curve(
            (t * (-p[0].x + 6 * p[1].x + p[2].x) / 6) + (c * p[2].x),
            (t * (-p[0].y + 6 * p[1].y + p[2].y) / 6) + (c * p[2].y),
            (t * (p[1].x + 6 * p[2].x - p[3].x) / 6) + (c * p[2].x),
            (t * (p[1].y + 6 * p[2].y - p[3].y) / 6) + (c * p[2].y),
            p[2].x,
            p[2].y,
            false,
            valueData[(i + 2) / 2]
          );
        }

        return path;
      }
    };
  };

  /**
   * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
   *
   * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
   *
   * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.monotoneCubic({
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the monotoneCubic factory function.
   * @return {Function}
   */
  Chartist.Interpolation.monotoneCubic = function(options) {
    var defaultOptions = {
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    return function monotoneCubic(pathCoordinates, valueData) {
      // First we try to split the coordinates into segments
      // This is necessary to treat "holes" in line charts
      var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
        fillHoles: options.fillHoles,
        increasingX: true
      });

      if(!segments.length) {
        // If there were no segments return 'Chartist.Interpolation.none'
        return Chartist.Interpolation.none()([]);
      } else if(segments.length > 1) {
        // If the split resulted in more that one segment we need to interpolate each segment individually and join them
        // afterwards together into a single path.
          var paths = [];
        // For each segment we will recurse the monotoneCubic fn function
        segments.forEach(function(segment) {
          paths.push(monotoneCubic(segment.pathCoordinates, segment.valueData));
        });
        // Join the segment path data into a single path and return
        return Chartist.Svg.Path.join(paths);
      } else {
        // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
        // segment
        pathCoordinates = segments[0].pathCoordinates;
        valueData = segments[0].valueData;

        // If less than three points we need to fallback to no smoothing
        if(pathCoordinates.length <= 4) {
          return Chartist.Interpolation.none()(pathCoordinates, valueData);
        }

        var xs = [],
          ys = [],
          i,
          n = pathCoordinates.length / 2,
          ms = [],
          ds = [], dys = [], dxs = [],
          path;

        // Populate x and y coordinates into separate arrays, for readability

        for(i = 0; i < n; i++) {
          xs[i] = pathCoordinates[i * 2];
          ys[i] = pathCoordinates[i * 2 + 1];
        }

        // Calculate deltas and derivative

        for(i = 0; i < n - 1; i++) {
          dys[i] = ys[i + 1] - ys[i];
          dxs[i] = xs[i + 1] - xs[i];
          ds[i] = dys[i] / dxs[i];
        }

        // Determine desired slope (m) at each point using Fritsch-Carlson method
        // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation

        ms[0] = ds[0];
        ms[n - 1] = ds[n - 2];

        for(i = 1; i < n - 1; i++) {
          if(ds[i] === 0 || ds[i - 1] === 0 || (ds[i - 1] > 0) !== (ds[i] > 0)) {
            ms[i] = 0;
          } else {
            ms[i] = 3 * (dxs[i - 1] + dxs[i]) / (
              (2 * dxs[i] + dxs[i - 1]) / ds[i - 1] +
              (dxs[i] + 2 * dxs[i - 1]) / ds[i]);

            if(!isFinite(ms[i])) {
              ms[i] = 0;
            }
          }
        }

        // Now build a path from the slopes

        path = new Chartist.Svg.Path().move(xs[0], ys[0], false, valueData[0]);

        for(i = 0; i < n - 1; i++) {
          path.curve(
            // First control point
            xs[i] + dxs[i] / 3,
            ys[i] + ms[i] * dxs[i] / 3,
            // Second control point
            xs[i + 1] - dxs[i] / 3,
            ys[i + 1] - ms[i + 1] * dxs[i] / 3,
            // End point
            xs[i + 1],
            ys[i + 1],

            false,
            valueData[i + 1]
          );
        }

        return path;
      }
    };
  };

  /**
   * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.step({
   *     postpone: true,
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param options
   * @returns {Function}
   */
  Chartist.Interpolation.step = function(options) {
    var defaultOptions = {
      postpone: true,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    return function step(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();

      var prevX, prevY, prevData;

      for (var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var currData = valueData[i / 2];

        // If the current point is also not a hole we can draw the step lines
        if(currData.value !== undefined) {
          if(prevData === undefined) {
            path.move(currX, currY, false, currData);
          } else {
            if(options.postpone) {
              // If postponed we should draw the step line with the value of the previous value
              path.line(currX, prevY, false, prevData);
            } else {
              // If not postponed we should draw the step line with the value of the current value
              path.line(prevX, currY, false, currData);
            }
            // Line to the actual point (this should only be a Y-Axis movement
            path.line(currX, currY, false, currData);
          }

          prevX = currX;
          prevY = currY;
          prevData = currData;
        } else if(!options.fillHoles) {
          prevX = prevY = prevData = undefined;
        }
      }

      return path;
    };
  };

}(this || global, Chartist));
;/**
 * A very basic event module that helps to generate and catch events.
 *
 * @module Chartist.Event
 */
/* global Chartist */
(function (globalRoot, Chartist) {
  'use strict';

  Chartist.EventEmitter = function () {
    var handlers = [];

    /**
     * Add an event handler for a specific event
     *
     * @memberof Chartist.Event
     * @param {String} event The event name
     * @param {Function} handler A event handler function
     */
    function addEventHandler(event, handler) {
      handlers[event] = handlers[event] || [];
      handlers[event].push(handler);
    }

    /**
     * Remove an event handler of a specific event name or remove all event handlers for a specific event.
     *
     * @memberof Chartist.Event
     * @param {String} event The event name where a specific or all handlers should be removed
     * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
     */
    function removeEventHandler(event, handler) {
      // Only do something if there are event handlers with this name existing
      if(handlers[event]) {
        // If handler is set we will look for a specific handler and only remove this
        if(handler) {
          handlers[event].splice(handlers[event].indexOf(handler), 1);
          if(handlers[event].length === 0) {
            delete handlers[event];
          }
        } else {
          // If no handler is specified we remove all handlers for this event
          delete handlers[event];
        }
      }
    }

    /**
     * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
     *
     * @memberof Chartist.Event
     * @param {String} event The event name that should be triggered
     * @param {*} data Arbitrary data that will be passed to the event handler callback functions
     */
    function emit(event, data) {
      // Only do something if there are event handlers with this name existing
      if(handlers[event]) {
        handlers[event].forEach(function(handler) {
          handler(data);
        });
      }

      // Emit event to star event handlers
      if(handlers['*']) {
        handlers['*'].forEach(function(starHandler) {
          starHandler(event, data);
        });
      }
    }

    return {
      addEventHandler: addEventHandler,
      removeEventHandler: removeEventHandler,
      emit: emit
    };
  };

}(this || global, Chartist));
;/**
 * This module provides some basic prototype inheritance utilities.
 *
 * @module Chartist.Class
 */
/* global Chartist */
(function(globalRoot, Chartist) {
  'use strict';

  function listToArray(list) {
    var arr = [];
    if (list.length) {
      for (var i = 0; i < list.length; i++) {
        arr.push(list[i]);
      }
    }
    return arr;
  }

  /**
   * Method to extend from current prototype.
   *
   * @memberof Chartist.Class
   * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
   * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
   * @return {Function} Constructor function of the new class
   *
   * @example
   * var Fruit = Class.extend({
     * color: undefined,
     *   sugar: undefined,
     *
     *   constructor: function(color, sugar) {
     *     this.color = color;
     *     this.sugar = sugar;
     *   },
     *
     *   eat: function() {
     *     this.sugar = 0;
     *     return this;
     *   }
     * });
   *
   * var Banana = Fruit.extend({
     *   length: undefined,
     *
     *   constructor: function(length, sugar) {
     *     Banana.super.constructor.call(this, 'Yellow', sugar);
     *     this.length = length;
     *   }
     * });
   *
   * var banana = new Banana(20, 40);
   * console.log('banana instanceof Fruit', banana instanceof Fruit);
   * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
   * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
   * console.log(banana.sugar);
   * console.log(banana.eat().sugar);
   * console.log(banana.color);
   */
  function extend(properties, superProtoOverride) {
    var superProto = superProtoOverride || this.prototype || Chartist.Class;
    var proto = Object.create(superProto);

    Chartist.Class.cloneDefinitions(proto, properties);

    var constr = function() {
      var fn = proto.constructor || function () {},
        instance;

      // If this is linked to the Chartist namespace the constructor was not called with new
      // To provide a fallback we will instantiate here and return the instance
      instance = this === Chartist ? Object.create(proto) : this;
      fn.apply(instance, Array.prototype.slice.call(arguments, 0));

      // If this constructor was not called with new we need to return the instance
      // This will not harm when the constructor has been called with new as the returned value is ignored
      return instance;
    };

    constr.prototype = proto;
    constr.super = superProto;
    constr.extend = this.extend;

    return constr;
  }

  // Variable argument list clones args > 0 into args[0] and retruns modified args[0]
  function cloneDefinitions() {
    var args = listToArray(arguments);
    var target = args[0];

    args.splice(1, args.length - 1).forEach(function (source) {
      Object.getOwnPropertyNames(source).forEach(function (propName) {
        // If this property already exist in target we delete it first
        delete target[propName];
        // Define the property with the descriptor from source
        Object.defineProperty(target, propName,
          Object.getOwnPropertyDescriptor(source, propName));
      });
    });

    return target;
  }

  Chartist.Class = {
    extend: extend,
    cloneDefinitions: cloneDefinitions
  };

}(this || global, Chartist));
;/**
 * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
 *
 * @module Chartist.Base
 */
/* global Chartist */
(function(globalRoot, Chartist) {
  'use strict';

  var window = globalRoot.window;

  // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
  // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
  // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
  // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
  // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
  // The problem is with the label offsets that can't be converted into percentage and affecting the chart container
  /**
   * Updates the chart which currently does a full reconstruction of the SVG DOM
   *
   * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
   * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
   * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
   * @memberof Chartist.Base
   */
  function update(data, options, override) {
    if(data) {
      this.data = data || {};
      this.data.labels = this.data.labels || [];
      this.data.series = this.data.series || [];
      // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
      this.eventEmitter.emit('data', {
        type: 'update',
        data: this.data
      });
    }

    if(options) {
      this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options);

      // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
      // Otherwise we re-create the optionsProvider at this point
      if(!this.initializeTimeoutId) {
        this.optionsProvider.removeMediaQueryListeners();
        this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
      }
    }

    // Only re-created the chart if it has been initialized yet
    if(!this.initializeTimeoutId) {
      this.createChart(this.optionsProvider.getCurrentOptions());
    }

    // Return a reference to the chart object to chain up calls
    return this;
  }

  /**
   * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
   *
   * @memberof Chartist.Base
   */
  function detach() {
    // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
    // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
    if(!this.initializeTimeoutId) {
      window.removeEventListener('resize', this.resizeListener);
      this.optionsProvider.removeMediaQueryListeners();
    } else {
      window.clearTimeout(this.initializeTimeoutId);
    }

    return this;
  }

  /**
   * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
   *
   * @memberof Chartist.Base
   * @param {String} event Name of the event. Check the examples for supported events.
   * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
   */
  function on(event, handler) {
    this.eventEmitter.addEventHandler(event, handler);
    return this;
  }

  /**
   * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
   *
   * @memberof Chartist.Base
   * @param {String} event Name of the event for which a handler should be removed
   * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
   */
  function off(event, handler) {
    this.eventEmitter.removeEventHandler(event, handler);
    return this;
  }

  function initialize() {
    // Add window resize listener that re-creates the chart
    window.addEventListener('resize', this.resizeListener);

    // Obtain current options based on matching media queries (if responsive options are given)
    // This will also register a listener that is re-creating the chart based on media changes
    this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
    // Register options change listener that will trigger a chart update
    this.eventEmitter.addEventHandler('optionsChanged', function() {
      this.update();
    }.bind(this));

    // Before the first chart creation we need to register us with all plugins that are configured
    // Initialize all relevant plugins with our chart object and the plugin options specified in the config
    if(this.options.plugins) {
      this.options.plugins.forEach(function(plugin) {
        if(plugin instanceof Array) {
          plugin[0](this, plugin[1]);
        } else {
          plugin(this);
        }
      }.bind(this));
    }

    // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
    this.eventEmitter.emit('data', {
      type: 'initial',
      data: this.data
    });

    // Create the first chart
    this.createChart(this.optionsProvider.getCurrentOptions());

    // As chart is initialized from the event loop now we can reset our timeout reference
    // This is important if the chart gets initialized on the same element twice
    this.initializeTimeoutId = undefined;
  }

  /**
   * Constructor of chart base class.
   *
   * @param query
   * @param data
   * @param defaultOptions
   * @param options
   * @param responsiveOptions
   * @constructor
   */
  function Base(query, data, defaultOptions, options, responsiveOptions) {
    this.container = Chartist.querySelector(query);
    this.data = data || {};
    this.data.labels = this.data.labels || [];
    this.data.series = this.data.series || [];
    this.defaultOptions = defaultOptions;
    this.options = options;
    this.responsiveOptions = responsiveOptions;
    this.eventEmitter = Chartist.EventEmitter();
    this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
    this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');
    this.resizeListener = function resizeListener(){
      this.update();
    }.bind(this);

    if(this.container) {
      // If chartist was already initialized in this container we are detaching all event listeners first
      if(this.container.__chartist__) {
        this.container.__chartist__.detach();
      }

      this.container.__chartist__ = this;
    }

    // Using event loop for first draw to make it possible to register event listeners in the same call stack where
    // the chart was created.
    this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
  }

  // Creating the chart base class
  Chartist.Base = Chartist.Class.extend({
    constructor: Base,
    optionsProvider: undefined,
    container: undefined,
    svg: undefined,
    eventEmitter: undefined,
    createChart: function() {
      throw new Error('Base chart type can\'t be instantiated!');
    },
    update: update,
    detach: detach,
    on: on,
    off: off,
    version: Chartist.version,
    supportsForeignObject: false
  });

}(this || global, Chartist));
;/**
 * Chartist SVG module for simple SVG DOM abstraction
 *
 * @module Chartist.Svg
 */
/* global Chartist */
(function(globalRoot, Chartist) {
  'use strict';

  var document = globalRoot.document;

  /**
   * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
   *
   * @memberof Chartist.Svg
   * @constructor
   * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
   * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param {String} className This class or class list will be added to the SVG element
   * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
   * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   */
  function Svg(name, attributes, className, parent, insertFirst) {
    // If Svg is getting called with an SVG element we just return the wrapper
    if(name instanceof Element) {
      this._node = name;
    } else {
      this._node = document.createElementNS(Chartist.namespaces.svg, name);

      // If this is an SVG element created then custom namespace
      if(name === 'svg') {
        this.attr({
          'xmlns:ct': Chartist.namespaces.ct
        });
      }
    }

    if(attributes) {
      this.attr(attributes);
    }

    if(className) {
      this.addClass(className);
    }

    if(parent) {
      if (insertFirst && parent._node.firstChild) {
        parent._node.insertBefore(this._node, parent._node.firstChild);
      } else {
        parent._node.appendChild(this._node);
      }
    }
  }

  /**
   * Set attributes on the current SVG element of the wrapper you're currently working on.
   *
   * @memberof Chartist.Svg
   * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
   * @param {String} [ns] If specified, the attribute will be obtained using getAttributeNs. In order to write namepsaced attributes you can use the namespace:attribute notation within the attributes object.
   * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
   */
  function attr(attributes, ns) {
    if(typeof attributes === 'string') {
      if(ns) {
        return this._node.getAttributeNS(ns, attributes);
      } else {
        return this._node.getAttribute(attributes);
      }
    }

    Object.keys(attributes).forEach(function(key) {
      // If the attribute value is undefined we can skip this one
      if(attributes[key] === undefined) {
        return;
      }

      if (key.indexOf(':') !== -1) {
        var namespacedAttribute = key.split(':');
        this._node.setAttributeNS(Chartist.namespaces[namespacedAttribute[0]], key, attributes[key]);
      } else {
        this._node.setAttribute(key, attributes[key]);
      }
    }.bind(this));

    return this;
  }

  /**
   * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
   *
   * @memberof Chartist.Svg
   * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
   * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param {String} [className] This class or class list will be added to the SVG element
   * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
   */
  function elem(name, attributes, className, insertFirst) {
    return new Chartist.Svg(name, attributes, className, this, insertFirst);
  }

  /**
   * Returns the parent Chartist.SVG wrapper object
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
   */
  function parent() {
    return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
  }

  /**
   * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
   */
  function root() {
    var node = this._node;
    while(node.nodeName !== 'svg') {
      node = node.parentNode;
    }
    return new Chartist.Svg(node);
  }

  /**
   * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} selector A CSS selector that is used to query for child SVG elements
   * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
   */
  function querySelector(selector) {
    var foundNode = this._node.querySelector(selector);
    return foundNode ? new Chartist.Svg(foundNode) : null;
  }

  /**
   * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} selector A CSS selector that is used to query for child SVG elements
   * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
   */
  function querySelectorAll(selector) {
    var foundNodes = this._node.querySelectorAll(selector);
    return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
  }

  /**
   * Returns the underlying SVG node for the current element.
   *
   * @memberof Chartist.Svg
   * @returns {Node}
   */
  function getNode() {
    return this._node;
  }

  /**
   * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
   *
   * @memberof Chartist.Svg
   * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
   * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
   * @param {String} [className] This class or class list will be added to the SVG element
   * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
   * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
   */
  function foreignObject(content, attributes, className, insertFirst) {
    // If content is string then we convert it to DOM
    // TODO: Handle case where content is not a string nor a DOM Node
    if(typeof content === 'string') {
      var container = document.createElement('div');
      container.innerHTML = content;
      content = container.firstChild;
    }

    // Adding namespace to content element
    content.setAttribute('xmlns', Chartist.namespaces.xmlns);

    // Creating the foreignObject without required extension attribute (as described here
    // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)
    var fnObj = this.elem('foreignObject', attributes, className, insertFirst);

    // Add content to foreignObjectElement
    fnObj._node.appendChild(content);

    return fnObj;
  }

  /**
   * This method adds a new text element to the current Chartist.Svg wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} t The text that should be added to the text element that is created
   * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
   */
  function text(t) {
    this._node.appendChild(document.createTextNode(t));
    return this;
  }

  /**
   * This method will clear all child nodes of the current wrapper object.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The same wrapper object that got emptied
   */
  function empty() {
    while (this._node.firstChild) {
      this._node.removeChild(this._node.firstChild);
    }

    return this;
  }

  /**
   * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The parent wrapper object of the element that got removed
   */
  function remove() {
    this._node.parentNode.removeChild(this._node);
    return this.parent();
  }

  /**
   * This method will replace the element with a new element that can be created outside of the current DOM.
   *
   * @memberof Chartist.Svg
   * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
   * @return {Chartist.Svg} The wrapper of the new element
   */
  function replace(newElement) {
    this._node.parentNode.replaceChild(newElement._node, this._node);
    return newElement;
  }

  /**
   * This method will append an element to the current element as a child.
   *
   * @memberof Chartist.Svg
   * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
   * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
   * @return {Chartist.Svg} The wrapper of the appended object
   */
  function append(element, insertFirst) {
    if(insertFirst && this._node.firstChild) {
      this._node.insertBefore(element._node, this._node.firstChild);
    } else {
      this._node.appendChild(element._node);
    }

    return this;
  }

  /**
   * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
   *
   * @memberof Chartist.Svg
   * @return {Array} A list of classes or an empty array if there are no classes on the current element
   */
  function classes() {
    return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
  }

  /**
   * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
   *
   * @memberof Chartist.Svg
   * @param {String} names A white space separated list of class names
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function addClass(names) {
    this._node.setAttribute('class',
      this.classes(this._node)
        .concat(names.trim().split(/\s+/))
        .filter(function(elem, pos, self) {
          return self.indexOf(elem) === pos;
        }).join(' ')
    );

    return this;
  }

  /**
   * Removes one or a space separated list of classes from the current element.
   *
   * @memberof Chartist.Svg
   * @param {String} names A white space separated list of class names
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function removeClass(names) {
    var removedClasses = names.trim().split(/\s+/);

    this._node.setAttribute('class', this.classes(this._node).filter(function(name) {
      return removedClasses.indexOf(name) === -1;
    }).join(' '));

    return this;
  }

  /**
   * Removes all classes from the current element.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function removeAllClasses() {
    this._node.setAttribute('class', '');

    return this;
  }

  /**
   * Get element height using `getBoundingClientRect`
   *
   * @memberof Chartist.Svg
   * @return {Number} The elements height in pixels
   */
  function height() {
    return this._node.getBoundingClientRect().height;
  }

  /**
   * Get element width using `getBoundingClientRect`
   *
   * @memberof Chartist.Core
   * @return {Number} The elements width in pixels
   */
  function width() {
    return this._node.getBoundingClientRect().width;
  }

  /**
   * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
   * **An animations object could look like this:**
   * ```javascript
   * element.animate({
   *   opacity: {
   *     dur: 1000,
   *     from: 0,
   *     to: 1
   *   },
   *   x1: {
   *     dur: '1000ms',
   *     from: 100,
   *     to: 200,
   *     easing: 'easeOutQuart'
   *   },
   *   y1: {
   *     dur: '2s',
   *     from: 0,
   *     to: 100
   *   }
   * });
   * ```
   * **Automatic unit conversion**
   * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
   * **Guided mode**
   * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
   * If guided mode is enabled the following behavior is added:
   * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
   * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
   * - The animate element will be forced to use `fill="freeze"`
   * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
   * - After the animation the element attribute value will be set to the `to` value of the animation
   * - The animate element is deleted from the DOM
   *
   * @memberof Chartist.Svg
   * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
   * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
   * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
   * @return {Chartist.Svg} The current element where the animation was added
   */
  function animate(animations, guided, eventEmitter) {
    if(guided === undefined) {
      guided = true;
    }

    Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {

      function createAnimate(animationDefinition, guided) {
        var attributeProperties = {},
          animate,
          timeout,
          easing;

        // Check if an easing is specified in the definition object and delete it from the object as it will not
        // be part of the animate element attributes.
        if(animationDefinition.easing) {
          // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
          easing = animationDefinition.easing instanceof Array ?
            animationDefinition.easing :
            Chartist.Svg.Easing[animationDefinition.easing];
          delete animationDefinition.easing;
        }

        // If numeric dur or begin was provided we assume milli seconds
        animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
        animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

        if(easing) {
          animationDefinition.calcMode = 'spline';
          animationDefinition.keySplines = easing.join(' ');
          animationDefinition.keyTimes = '0;1';
        }

        // Adding "fill: freeze" if we are in guided mode and set initial attribute values
        if(guided) {
          animationDefinition.fill = 'freeze';
          // Animated property on our element should already be set to the animation from value in guided mode
          attributeProperties[attribute] = animationDefinition.from;
          this.attr(attributeProperties);

          // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
          // which needs to be in ms aside
          timeout = Chartist.quantity(animationDefinition.begin || 0).value;
          animationDefinition.begin = 'indefinite';
        }

        animate = this.elem('animate', Chartist.extend({
          attributeName: attribute
        }, animationDefinition));

        if(guided) {
          // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
          setTimeout(function() {
            // If beginElement fails we set the animated attribute to the end position and remove the animate element
            // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
            // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
            try {
              animate._node.beginElement();
            } catch(err) {
              // Set animated attribute to current animated value
              attributeProperties[attribute] = animationDefinition.to;
              this.attr(attributeProperties);
              // Remove the animate element as it's no longer required
              animate.remove();
            }
          }.bind(this), timeout);
        }

        if(eventEmitter) {
          animate._node.addEventListener('beginEvent', function handleBeginEvent() {
            eventEmitter.emit('animationBegin', {
              element: this,
              animate: animate._node,
              params: animationDefinition
            });
          }.bind(this));
        }

        animate._node.addEventListener('endEvent', function handleEndEvent() {
          if(eventEmitter) {
            eventEmitter.emit('animationEnd', {
              element: this,
              animate: animate._node,
              params: animationDefinition
            });
          }

          if(guided) {
            // Set animated attribute to current animated value
            attributeProperties[attribute] = animationDefinition.to;
            this.attr(attributeProperties);
            // Remove the animate element as it's no longer required
            animate.remove();
          }
        }.bind(this));
      }

      // If current attribute is an array of definition objects we create an animate for each and disable guided mode
      if(animations[attribute] instanceof Array) {
        animations[attribute].forEach(function(animationDefinition) {
          createAnimate.bind(this)(animationDefinition, false);
        }.bind(this));
      } else {
        createAnimate.bind(this)(animations[attribute], guided);
      }

    }.bind(this));

    return this;
  }

  Chartist.Svg = Chartist.Class.extend({
    constructor: Svg,
    attr: attr,
    elem: elem,
    parent: parent,
    root: root,
    querySelector: querySelector,
    querySelectorAll: querySelectorAll,
    getNode: getNode,
    foreignObject: foreignObject,
    text: text,
    empty: empty,
    remove: remove,
    replace: replace,
    append: append,
    classes: classes,
    addClass: addClass,
    removeClass: removeClass,
    removeAllClasses: removeAllClasses,
    height: height,
    width: width,
    animate: animate
  });

  /**
   * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
   *
   * @memberof Chartist.Svg
   * @param {String} feature The SVG 1.1 feature that should be checked for support.
   * @return {Boolean} True of false if the feature is supported or not
   */
  Chartist.Svg.isSupported = function(feature) {
    return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
  };

  /**
   * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
   *
   * @memberof Chartist.Svg
   */
  var easingCubicBeziers = {
    easeInSine: [0.47, 0, 0.745, 0.715],
    easeOutSine: [0.39, 0.575, 0.565, 1],
    easeInOutSine: [0.445, 0.05, 0.55, 0.95],
    easeInQuad: [0.55, 0.085, 0.68, 0.53],
    easeOutQuad: [0.25, 0.46, 0.45, 0.94],
    easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
    easeInCubic: [0.55, 0.055, 0.675, 0.19],
    easeOutCubic: [0.215, 0.61, 0.355, 1],
    easeInOutCubic: [0.645, 0.045, 0.355, 1],
    easeInQuart: [0.895, 0.03, 0.685, 0.22],
    easeOutQuart: [0.165, 0.84, 0.44, 1],
    easeInOutQuart: [0.77, 0, 0.175, 1],
    easeInQuint: [0.755, 0.05, 0.855, 0.06],
    easeOutQuint: [0.23, 1, 0.32, 1],
    easeInOutQuint: [0.86, 0, 0.07, 1],
    easeInExpo: [0.95, 0.05, 0.795, 0.035],
    easeOutExpo: [0.19, 1, 0.22, 1],
    easeInOutExpo: [1, 0, 0, 1],
    easeInCirc: [0.6, 0.04, 0.98, 0.335],
    easeOutCirc: [0.075, 0.82, 0.165, 1],
    easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
    easeInBack: [0.6, -0.28, 0.735, 0.045],
    easeOutBack: [0.175, 0.885, 0.32, 1.275],
    easeInOutBack: [0.68, -0.55, 0.265, 1.55]
  };

  Chartist.Svg.Easing = easingCubicBeziers;

  /**
   * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
   * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
   *
   * @memberof Chartist.Svg
   * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
   * @constructor
   */
  function SvgList(nodeList) {
    var list = this;

    this.svgElements = [];
    for(var i = 0; i < nodeList.length; i++) {
      this.svgElements.push(new Chartist.Svg(nodeList[i]));
    }

    // Add delegation methods for Chartist.Svg
    Object.keys(Chartist.Svg.prototype).filter(function(prototypeProperty) {
      return ['constructor',
          'parent',
          'querySelector',
          'querySelectorAll',
          'replace',
          'append',
          'classes',
          'height',
          'width'].indexOf(prototypeProperty) === -1;
    }).forEach(function(prototypeProperty) {
      list[prototypeProperty] = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        list.svgElements.forEach(function(element) {
          Chartist.Svg.prototype[prototypeProperty].apply(element, args);
        });
        return list;
      };
    });
  }

  Chartist.Svg.List = Chartist.Class.extend({
    constructor: SvgList
  });
}(this || global, Chartist));
;/**
 * Chartist SVG path module for SVG path description creation and modification.
 *
 * @module Chartist.Svg.Path
 */
/* global Chartist */
(function(globalRoot, Chartist) {
  'use strict';

  /**
   * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
   *
   * @memberof Chartist.Svg.Path
   * @type {Object}
   */
  var elementDescriptions = {
    m: ['x', 'y'],
    l: ['x', 'y'],
    c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
    a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
  };

  /**
   * Default options for newly created SVG path objects.
   *
   * @memberof Chartist.Svg.Path
   * @type {Object}
   */
  var defaultOptions = {
    // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
    accuracy: 3
  };

  function element(command, params, pathElements, pos, relative, data) {
    var pathElement = Chartist.extend({
      command: relative ? command.toLowerCase() : command.toUpperCase()
    }, params, data ? { data: data } : {} );

    pathElements.splice(pos, 0, pathElement);
  }

  function forEachParam(pathElements, cb) {
    pathElements.forEach(function(pathElement, pathElementIndex) {
      elementDescriptions[pathElement.command.toLowerCase()].forEach(function(paramName, paramIndex) {
        cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      });
    });
  }

  /**
   * Used to construct a new path object.
   *
   * @memberof Chartist.Svg.Path
   * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
   * @param {Object} options Options object that overrides the default objects. See default options for more details.
   * @constructor
   */
  function SvgPath(close, options) {
    this.pathElements = [];
    this.pos = 0;
    this.close = close;
    this.options = Chartist.extend({}, defaultOptions, options);
  }

  /**
   * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
   * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
   */
  function position(pos) {
    if(pos !== undefined) {
      this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
      return this;
    } else {
      return this.pos;
    }
  }

  /**
   * Removes elements from the path starting at the current position.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} count Number of path elements that should be removed from the current position.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function remove(count) {
    this.pathElements.splice(this.pos, count);
    return this;
  }

  /**
   * Use this function to add a new move SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The x coordinate for the move element.
   * @param {Number} y The y coordinate for the move element.
   * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function move(x, y, relative, data) {
    element('M', {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new line SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The x coordinate for the line element.
   * @param {Number} y The y coordinate for the line element.
   * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function line(x, y, relative, data) {
    element('L', {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new curve SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
   * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
   * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
   * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
   * @param {Number} x The x coordinate for the target point of the curve element.
   * @param {Number} y The y coordinate for the target point of the curve element.
   * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function curve(x1, y1, x2, y2, x, y, relative, data) {
    element('C', {
      x1: +x1,
      y1: +y1,
      x2: +x2,
      y2: +y2,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new non-bezier curve SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} rx The radius to be used for the x-axis of the arc.
   * @param {Number} ry The radius to be used for the y-axis of the arc.
   * @param {Number} xAr Defines the orientation of the arc
   * @param {Number} lAf Large arc flag
   * @param {Number} sf Sweep flag
   * @param {Number} x The x coordinate for the target point of the curve element.
   * @param {Number} y The y coordinate for the target point of the curve element.
   * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
    element('A', {
      rx: +rx,
      ry: +ry,
      xAr: +xAr,
      lAf: +lAf,
      sf: +sf,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
   *
   * @memberof Chartist.Svg.Path
   * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function parse(path) {
    // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
    var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2')
      .replace(/([0-9])([A-Za-z])/g, '$1 $2')
      .split(/[\s,]+/)
      .reduce(function(result, element) {
        if(element.match(/[A-Za-z]/)) {
          result.push([]);
        }

        result[result.length - 1].push(element);
        return result;
      }, []);

    // If this is a closed path we remove the Z at the end because this is determined by the close option
    if(chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
      chunks.pop();
    }

    // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
    // For example {command: 'M', x: '10', y: '10'}
    var elements = chunks.map(function(chunk) {
        var command = chunk.shift(),
          description = elementDescriptions[command.toLowerCase()];

        return Chartist.extend({
          command: command
        }, description.reduce(function(result, paramName, index) {
          result[paramName] = +chunk[index];
          return result;
        }, {}));
      });

    // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position
    var spliceArgs = [this.pos, 0];
    Array.prototype.push.apply(spliceArgs, elements);
    Array.prototype.splice.apply(this.pathElements, spliceArgs);
    // Increase the internal position by the element count
    this.pos += elements.length;

    return this;
  }

  /**
   * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
   *
   * @memberof Chartist.Svg.Path
   * @return {String}
   */
  function stringify() {
    var accuracyMultiplier = Math.pow(10, this.options.accuracy);

    return this.pathElements.reduce(function(path, pathElement) {
        var params = elementDescriptions[pathElement.command.toLowerCase()].map(function(paramName) {
          return this.options.accuracy ?
            (Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier) :
            pathElement[paramName];
        }.bind(this));

        return path + pathElement.command + params.join(',');
      }.bind(this), '') + (this.close ? 'Z' : '');
  }

  /**
   * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
   * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function scale(x, y) {
    forEachParam(this.pathElements, function(pathElement, paramName) {
      pathElement[paramName] *= paramName[0] === 'x' ? x : y;
    });
    return this;
  }

  /**
   * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
   * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function translate(x, y) {
    forEachParam(this.pathElements, function(pathElement, paramName) {
      pathElement[paramName] += paramName[0] === 'x' ? x : y;
    });
    return this;
  }

  /**
   * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
   * The method signature of the callback function looks like this:
   * ```javascript
   * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
   * ```
   * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function transform(transformFnc) {
    forEachParam(this.pathElements, function(pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
      var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      if(transformed || transformed === 0) {
        pathElement[paramName] = transformed;
      }
    });
    return this;
  }

  /**
   * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
   *
   * @memberof Chartist.Svg.Path
   * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
   * @return {Chartist.Svg.Path}
   */
  function clone(close) {
    var c = new Chartist.Svg.Path(close || this.close);
    c.pos = this.pos;
    c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
      return Chartist.extend({}, pathElement);
    });
    c.options = Chartist.extend({}, this.options);
    return c;
  }

  /**
   * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
   *
   * @memberof Chartist.Svg.Path
   * @param {String} command The command you'd like to use to split the path
   * @return {Array<Chartist.Svg.Path>}
   */
  function splitByCommand(command) {
    var split = [
      new Chartist.Svg.Path()
    ];

    this.pathElements.forEach(function(pathElement) {
      if(pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
        split.push(new Chartist.Svg.Path());
      }

      split[split.length - 1].pathElements.push(pathElement);
    });

    return split;
  }

  /**
   * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
   *
   * @memberof Chartist.Svg.Path
   * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
   * @param {boolean} close If the newly created path should be a closed path
   * @param {Object} options Path options for the newly created path.
   * @return {Chartist.Svg.Path}
   */

  function join(paths, close, options) {
    var joinedPath = new Chartist.Svg.Path(close, options);
    for(var i = 0; i < paths.length; i++) {
      var path = paths[i];
      for(var j = 0; j < path.pathElements.length; j++) {
        joinedPath.pathElements.push(path.pathElements[j]);
      }
    }
    return joinedPath;
  }

  Chartist.Svg.Path = Chartist.Class.extend({
    constructor: SvgPath,
    position: position,
    remove: remove,
    move: move,
    line: line,
    curve: curve,
    arc: arc,
    scale: scale,
    translate: translate,
    transform: transform,
    parse: parse,
    stringify: stringify,
    clone: clone,
    splitByCommand: splitByCommand
  });

  Chartist.Svg.Path.elementDescriptions = elementDescriptions;
  Chartist.Svg.Path.join = join;
}(this || global, Chartist));
;/* global Chartist */
(function (globalRoot, Chartist) {
  'use strict';

  var window = globalRoot.window;
  var document = globalRoot.document;

  var axisUnits = {
    x: {
      pos: 'x',
      len: 'width',
      dir: 'horizontal',
      rectStart: 'x1',
      rectEnd: 'x2',
      rectOffset: 'y2'
    },
    y: {
      pos: 'y',
      len: 'height',
      dir: 'vertical',
      rectStart: 'y2',
      rectEnd: 'y1',
      rectOffset: 'x1'
    }
  };

  function Axis(units, chartRect, ticks, options) {
    this.units = units;
    this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
    this.chartRect = chartRect;
    this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
    this.gridOffset = chartRect[units.rectOffset];
    this.ticks = ticks;
    this.options = options;
  }

  function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
    var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
    var projectedValues = this.ticks.map(this.projectValue.bind(this));
    var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);

    projectedValues.forEach(function(projectedValue, index) {
      var labelOffset = {
        x: 0,
        y: 0
      };

      // TODO: Find better solution for solving this problem
      // Calculate how much space we have available for the label
      var labelLength;
      if(projectedValues[index + 1]) {
        // If we still have one label ahead, we can calculate the distance to the next tick / label
        labelLength = projectedValues[index + 1] - projectedValue;
      } else {
        // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
        // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
        // still be visible inside of the chart padding.
        labelLength = Math.max(this.axisLength - projectedValue, 30);
      }

      // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)
      if(Chartist.isFalseyButZero(labelValues[index]) && labelValues[index] !== '') {
        return;
      }

      // Transform to global coordinates using the chartRect
      // We also need to set the label offset for the createLabel function
      if(this.units.pos === 'x') {
        projectedValue = this.chartRect.x1 + projectedValue;
        labelOffset.x = chartOptions.axisX.labelOffset.x;

        // If the labels should be positioned in start position (top side for vertical axis) we need to set a
        // different offset as for positioned with end (bottom)
        if(chartOptions.axisX.position === 'start') {
          labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
        } else {
          labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
        }
      } else {
        projectedValue = this.chartRect.y1 - projectedValue;
        labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0);

        // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
        // different offset as for positioned with end (right side)
        if(chartOptions.axisY.position === 'start') {
          labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
        } else {
          labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
        }
      }

      if(axisOptions.showGrid) {
        Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [
          chartOptions.classNames.grid,
          chartOptions.classNames[this.units.dir]
        ], eventEmitter);
      }

      if(axisOptions.showLabel) {
        Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [
          chartOptions.classNames.label,
          chartOptions.classNames[this.units.dir],
          (axisOptions.position === 'start' ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames['end'])
        ], useForeignObject, eventEmitter);
      }
    }.bind(this));
  }

  Chartist.Axis = Chartist.Class.extend({
    constructor: Axis,
    createGridAndLabels: createGridAndLabels,
    projectValue: function (value, index, data) {
      throw new Error("Base axis can't be instantiated!");
    },
    invert: function invert(coord) {
      const percent =
        (coord - this.chartRect[this.units.rectStart]) / this.axisLength;
      const value =
        percent * (this.range.max - this.range.min) + this.range.min;
      return value;
    },
  });

  Chartist.Axis.units = axisUnits;

}(this || global, Chartist));
;/**
 * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
 *   high: 100,
 *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
 *   low: 0,
 *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
 *   scaleMinSpace: 20,
 *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
 *   onlyInteger: true,
 *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
 *   referenceValue: 5
 * };
 * ```
 *
 * @module Chartist.AutoScaleAxis
 */
/* global Chartist */
(function (globalRoot, Chartist) {
  'use strict';

  var window = globalRoot.window;
  var document = globalRoot.document;

  function AutoScaleAxis(axisUnit, data, chartRect, options) {
    // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
    var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
    this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
    this.range = {
      min: this.bounds.min,
      max: this.bounds.max
    };

    Chartist.AutoScaleAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      this.bounds.values,
      options);
  }

  function projectValue(value) {
    return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
  }

  Chartist.AutoScaleAxis = Chartist.Axis.extend({
    constructor: AutoScaleAxis,
    projectValue: projectValue
  });

}(this || global, Chartist));
;/**
 * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
 *   high: 100,
 *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
 *   low: 0,
 *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
 *   divisor: 4,
 *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
 *   ticks: [1, 10, 20, 30]
 * };
 * ```
 *
 * @module Chartist.FixedScaleAxis
 */
/* global Chartist */
(function (globalRoot, Chartist) {
  ("use strict");

  var window = globalRoot.window;
  var document = globalRoot.document;

  function FixedScaleAxis(axisUnit, data, chartRect, options) {
    var highLow =
      options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
    this.divisor = options.divisor || 1;
    this.ticks =
      options.ticks ||
      Chartist.times(this.divisor).map(
        function (value, index) {
          return (
            highLow.low + ((highLow.high - highLow.low) / this.divisor) * index
          );
        }.bind(this)
      );
    this.ticks.sort(function (a, b) {
      return a - b;
    });
    this.range = {
      min: highLow.low,
      max: highLow.high,
    };
    this.rangeValue = this.range.max - this.range.min;

    Chartist.FixedScaleAxis.super.constructor.call(
      this,
      axisUnit,
      chartRect,
      this.ticks,
      options
    );

    this.stepLength = this.axisLength / this.divisor;
  }

  function projectValue(value) {
    return (
      (this.axisLength *
        (+Chartist.getMultiValue(value, this.units.pos) - this.range.min)) /
      this.rangeValue
    );
  }

  Chartist.FixedScaleAxis = Chartist.Axis.extend({
    constructor: FixedScaleAxis,
    projectValue: projectValue,
  });
}(this || global, Chartist));
;/**
 * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
 *   ticks: ['One', 'Two', 'Three'],
 *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
 *   stretch: true
 * };
 * ```
 *
 * @module Chartist.StepAxis
 */
/* global Chartist */
(function (globalRoot, Chartist) {
  'use strict';

  var window = globalRoot.window;
  var document = globalRoot.document;

  function StepAxis(axisUnit, data, chartRect, options) {
    Chartist.StepAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      options.ticks,
      options);

    var calc = Math.max(1, options.ticks.length - (options.stretch ? 1 : 0));
    this.stepLength = this.axisLength / calc;
  }

  function projectValue(value, index) {
    return this.stepLength * index;
  }

  Chartist.StepAxis = Chartist.Axis.extend({
    constructor: StepAxis,
    projectValue: projectValue
  });

}(this || global, Chartist));
;/**
 * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
 *
 * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
 *
 * @module Chartist.Line
 */
/* global Chartist */
(function(globalRoot, Chartist){
  'use strict';

  var window = globalRoot.window;
  var document = globalRoot.document;

  var ShapeInfo = exports.ShapeInfo;
  var Intersection = exports.Intersection;

  /**
   * Default options in line charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Line
   */
  var defaultOptions = {
    // Options for X-Axis
    axisX: {
      // The offset of the labels to the chart area
      offset: 30,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'end',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
      type: undefined
    },
    // Options for Y-Axis
    axisY: {
      // The offset of the labels to the chart area
      offset: 40,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'start',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
      type: undefined,
      // This value specifies the minimum height in pixel of the scale steps
      scaleMinSpace: 20,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // If the line should be drawn or not
    showLine: true,
    // If dots should be drawn or not
    showPoint: true,
    // Radius of points
    pointRadius: 4,
    // If the line chart should draw an area
    showArea: false,
    // The base for the area chart that will be used to close the area shape (is normally 0)
    areaBase: 0,
    // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
    lineSmooth: true,
    // If the line chart should add a background fill to the .ct-grids group.
    showGridBackground: false,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: {
      top: 15,
      right: 15,
      bottom: 5,
      left: 10
    },
    // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
    fullWidth: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-line',
      label: 'ct-label',
      labelGroup: 'ct-labels',
      series: 'ct-series',
      line: 'ct-line',
      point: 'ct-point',
      area: 'ct-area',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      gridBackground: 'ct-grid-background',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal',
      start: 'ct-start',
      end: 'ct-end'
    }
  };

  /**
   * Creates a new chart
   *
   */
  function createChart(options) {
    var data = Chartist.normalizeData(this.data, options.reverseData, true);

    // Create new svg object
    this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart);
    // Create groups for labels, grid and series
    var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
    var seriesGroup = this.svg.elem('g');
    var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

    var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
    var axisX, axisY;

    if(options.axisX.type === undefined) {
      axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
        ticks: data.normalized.labels,
        stretch: options.fullWidth
      }));
    } else {
      axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
    }

    if(options.axisY.type === undefined) {
      axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
        high: Chartist.isNumeric(options.high) ? options.high : options.axisY.high,
        low: Chartist.isNumeric(options.low) ? options.low : options.axisY.low
      }));
    } else {
      axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
    }

    axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
    axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

    if (options.showGridBackground) {
      Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }

    var seriesPaths = {};

    // Draw the series
    data.raw.series.forEach(function(series, seriesIndex) {
      var seriesElement = seriesGroup.elem('g');

      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      seriesElement.attr({
        'ct:series-name': series.name,
        'ct:meta': Chartist.serialize(series.meta)
      });

      // Use series class from series data or if not set generate one
      seriesElement.addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
      ].join(' '));

      var pathCoordinates = [],
        pathData = [];

      data.normalized.series[seriesIndex].forEach(function(value, valueIndex) {
        var p = {
          x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized.series[seriesIndex]),
          y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized.series[seriesIndex])
        };
        pathCoordinates.push(p.x, p.y);
        pathData.push({
          value: value,
          valueIndex: valueIndex,
          meta: Chartist.getMetaData(series, valueIndex)
        });
      }.bind(this));

      var seriesOptions = {
        lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
        showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
        pointRadius: Chartist.getSeriesOption(series, options, 'pointRadius'),
        showLine: Chartist.getSeriesOption(series, options, 'showLine'),
        showArea: Chartist.getSeriesOption(series, options, 'showArea'),
        areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
      };

      var smoothing = typeof seriesOptions.lineSmooth === 'function' ?
        seriesOptions.lineSmooth : (seriesOptions.lineSmooth ? Chartist.Interpolation.monotoneCubic() : Chartist.Interpolation.none());
      // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
      // index, value and meta data
      var path = smoothing(pathCoordinates, pathData);

      // If we should show points we need to create them now to avoid secondary loop
      // Points are drawn from the pathElements returned by the interpolation function
      // Small offset for Firefox to render squares correctly
      if (seriesOptions.showPoint) {

        path.pathElements.forEach(function(pathElement) {
          var point = seriesElement.elem('circle', {
            cx: pathElement.x,
            cy: pathElement.y,
            r: seriesOptions.pointRadius
          }, options.classNames.point).attr({
            'ct:value': [pathElement.data.value.x, pathElement.data.value.y].filter(Chartist.isNumeric).join(','),
            'ct:meta': Chartist.serialize(pathElement.data.meta)
          });

          this.eventEmitter.emit('draw', {
            type: 'point',
            value: pathElement.data.value,
            index: pathElement.data.valueIndex,
            meta: pathElement.data.meta,
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            group: seriesElement,
            element: point,
            x: pathElement.x,
            y: pathElement.y
          });
        }.bind(this));
      }

      if(seriesOptions.showLine) {
        var line = seriesElement.elem('path', {
          d: path.stringify()
        }, options.classNames.line, true);

        this.eventEmitter.emit('draw', {
          type: 'line',
          values: data.normalized.series[seriesIndex],
          path: path.clone(),
          chartRect: chartRect,
          index: seriesIndex,
          series: series,
          seriesIndex: seriesIndex,
          seriesMeta: series.meta,
          axisX: axisX,
          axisY: axisY,
          group: seriesElement,
          element: line
        });
      }

      // Area currently only works with axes that support a range!
      if(seriesOptions.showArea && axisY.range) {
        // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
        // the area is not drawn outside the chart area.
        var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min);

        // We project the areaBase value into screen coordinates
        var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase);

        // In order to form the area we'll first split the path by move commands so we can chunk it up into segments
        path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
          // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
          return pathSegment.pathElements.length > 1;
        }).map(function convertToArea(solidPathSegments) {
          // Receiving the filtered solid path segments we can now convert those segments into fill areas
          var firstElement = solidPathSegments.pathElements[0];
          var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1];

          // Cloning the solid path segment with closing option and removing the first move command from the clone
          // We then insert a new move that should start at the area base and draw a straight line up or down
          // at the end of the path we add an additional straight line to the projected area base value
          // As the closing option is set our path will be automatically closed
          return solidPathSegments.clone(true)
            .position(0)
            .remove(1)
            .move(firstElement.x, areaBaseProjected)
            .line(firstElement.x, firstElement.y)
            .position(solidPathSegments.pathElements.length + 1)
            .line(lastElement.x, areaBaseProjected);

        }).forEach(function createArea(areaPath) {
          // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
          // and adding the created DOM elements to the correct series group
          var area = seriesElement.elem('path', {
            d: areaPath.stringify()
          }, options.classNames.area, true);

          // Emit an event for each area that was drawn
          this.eventEmitter.emit('draw', {
            type: 'area',
            values: data.normalized.series[seriesIndex],
            path: areaPath.clone(),
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            chartRect: chartRect,
            index: seriesIndex,
            group: seriesElement,
            element: area
          });
        }.bind(this));
      }

      seriesPaths[series.name] = path;

    }.bind(this));

    if (options.band) {
      drawBand(seriesGroup, seriesPaths[options.band.top], seriesPaths[options.band.bottom]);
    }

    this.eventEmitter.emit('created', {
      bounds: axisY.bounds,
      chartRect: chartRect,
      axisX: axisX,
      axisY: axisY,
      svg: this.svg,
      options: options
    });
  }

  function drawBand(seriesGroup, topPath, bottomPath) {
    var seriesElement = seriesGroup.elem('g');

    var topPathShape = ShapeInfo.path(topPath.stringify());
    var bottomPathShape = ShapeInfo.path(bottomPath.stringify());
    var intersections = Intersection.intersect(topPathShape, bottomPathShape);

    if (!intersections.points) {
      // handle this case!
      return;
    }

    var topElements = topPath.pathElements;
    var botElements = bottomPath.pathElements;

    var topIndex = 0;
    var botIndex = 0;

    for (var i = 0; i < intersections.points.length; i++) {
      var intersection = intersections.points[i];

      var topSegment = [];
      while (topIndex < topElements.length) {
        var currTopElement = topElements[topIndex];
        if (currTopElement.x > intersection.x) {
          break;
        }
        topSegment.push(currTopElement);
        topIndex++;
      }

      var botSegment = [];
      while (botIndex < botElements.length) {
        var currBotElement = botElements[botIndex];
        if (currBotElement.x > intersection.x) {
          break;
        }
        botSegment.push(currBotElement);
        botIndex++;
      }

      var fillPath = new Chartist.Svg.Path();

      // Draw the part of the band tracing the top series.
      if (i > 0) {
        var prevIntersection = intersections.points[i - 1];
        fillPath.move(prevIntersection.x, prevIntersection.y);
        fillPath.line(topSegment[0].x, topSegment[0].y);
      } else {
        fillPath.move(topSegment[0].x, topSegment[0].y);
      }

      for (var j = 1; j < topSegment.length; j++) {
        fillPath.pathElements.push(topSegment[j]);
        fillPath.pos++;
      }

      fillPath.line(intersection.x, intersection.y);

      // Draw the part of the band tracing the bottom series.
      fillPath.line(botSegment[botSegment.length - 1].x, botSegment[botSegment.length - 1].y);

      for (var j = botSegment.length - 1; j >= 1; j--) {
        var prevSegment = botSegment[j - 1];
        fillPath.curve(botSegment[j].x2, botSegment[j].y2, botSegment[j].x1, botSegment[j].y1, prevSegment.x, prevSegment.y);
      }

      if (i > 0) {
        // is there a cleaner way to describe what's happening here?
        // we are using the end point of the last curve from the previous
        // fillPath to determine the destination point of this (reverse) curve.
        var prevSegment = botElements[botIndex - botSegment.length - 1];
        fillPath.curve(botSegment[0].x2, botSegment[0].y2, botSegment[0].x1, botSegment[0].y1, prevSegment.x, prevSegment.y);

        var prevIntersection = intersections.points[i - 1];
        fillPath.line(prevIntersection.x, prevIntersection.y);
      } else {
        fillPath.line(topSegment[0].x, topSegment[0].y);
      }

      var color = topSegment[0].y > botSegment[0].y ? 'green' : 'red';

      seriesElement.elem('path', {
        fill: color,
        d: fillPath.stringify()
      });

      // emit draw event maybe?
    }
  }

  /**
   * This method creates a new line chart.
   *
   * @memberof Chartist.Line
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object that needs to consist of a labels and a series array
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object which exposes the API for the created chart
   *
   * @example
   * // Create a simple line chart
   * var data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // As options we currently only set a static size of 300x200 px
   * var options = {
   *   width: '300px',
   *   height: '200px'
   * };
   *
   * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
   * new Chartist.Line('.ct-chart', data, options);
   *
   * @example
   * // Use specific interpolation function with configuration from the Chartist.Interpolation module
   *
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [
   *     [1, 1, 8, 1, 7]
   *   ]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 0.2
   *   })
   * });
   *
   * @example
   * // Create a line chart with responsive options
   *
   * var data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
   * var responsiveOptions = [
   *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
   *     showPoint: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return Mon, Tue, Wed etc. on medium screens
   *         return value.slice(0, 3);
   *       }
   *     }
   *   }],
   *   ['screen and (max-width: 640px)', {
   *     showLine: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return M, T, W etc. on small screens
   *         return value[0];
   *       }
   *     }
   *   }]
   * ];
   *
   * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
   *
   */
  function Line(query, data, options, responsiveOptions) {
    Chartist.Line.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating line chart type in Chartist namespace
  Chartist.Line = Chartist.Base.extend({
    constructor: Line,
    createChart: createChart
  });

}(this || global, Chartist));
;/**
 * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
 *
 * @module Chartist.Bar
 */
/* global Chartist */
(function(globalRoot, Chartist){
  'use strict';

  var window = globalRoot.window;
  var document = globalRoot.document;

  /**
   * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Bar
   */
  var defaultOptions = {
    // Options for X-Axis
    axisX: {
      // The offset of the chart drawing area to the border of the container
      offset: 30,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'end',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum width in pixel of the scale steps
      scaleMinSpace: 30,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Options for Y-Axis
    axisY: {
      // The offset of the chart drawing area to the border of the container
      offset: 40,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'start',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum height in pixel of the scale steps
      scaleMinSpace: 20,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
    referenceValue: 0,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: {
      top: 15,
      right: 15,
      bottom: 5,
      left: 10
    },
    // Specify the distance in pixel of bars in a group
    seriesBarDistance: 15,
    // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
    stackBars: false,
    // If set to 'overlap' this property will force the stacked bars to draw from the zero line.
    // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
    stackMode: 'accumulate',
    // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
    horizontalBars: false,
    // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
    distributeSeries: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // If the bar chart should add a background fill to the .ct-grids group.
    showGridBackground: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-bar',
      horizontalBars: 'ct-horizontal-bars',
      label: 'ct-label',
      labelGroup: 'ct-labels',
      series: 'ct-series',
      bar: 'ct-bar',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      gridBackground: 'ct-grid-background',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal',
      start: 'ct-start',
      end: 'ct-end'
    }
  };

  /**
   * Creates a new chart
   *
   */
  function createChart(options) {
    var data;
    var highLow;

    if(options.distributeSeries) {
      data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
      data.normalized.series = data.normalized.series.map(function(value) {
        return [value];
      });
    } else {
      data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
    }

    // Create new svg element
    this.svg = Chartist.createSvg(
      this.container,
      options.width,
      options.height,
      options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')
    );

    // Drawing groups in correct order
    var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
    var seriesGroup = this.svg.elem('g');
    var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

    if(options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode) && data.normalized.series.length !== 0) {

      // If stacked bars we need to calculate the high low from stacked values from each series
      var serialSums = Chartist.serialMap(data.normalized.series, function serialSums() {
        return Array.prototype.slice.call(arguments).map(function(value) {
          return value;
        }).reduce(function(prev, curr) {
          return {
            x: prev.x + (curr && curr.x) || 0,
            y: prev.y + (curr && curr.y) || 0
          };
        }, {x: 0, y: 0});
      });

      highLow = Chartist.getHighLow([serialSums], options, options.horizontalBars ? 'x' : 'y');

    } else {

      highLow = Chartist.getHighLow(data.normalized.series, options, options.horizontalBars ? 'x' : 'y');
    }

    // Overrides of high / low from settings
    highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
    highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);

    var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);

    var valueAxis,
      labelAxisTicks,
      labelAxis,
      axisX,
      axisY;

    // We need to set step count based on some options combinations
    if(options.distributeSeries && options.stackBars) {
      // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
      // use only the first label for the step axis
      labelAxisTicks = data.normalized.labels.slice(0, 1);
    } else {
      // If distributed series are enabled but stacked bars aren't, we should use the series labels
      // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
      // as the bars are normalized
      labelAxisTicks = data.normalized.labels;
    }

    // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.
    if(options.horizontalBars) {
      if(options.axisX.type === undefined) {
        valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          highLow: highLow,
          referenceValue: 0
        }));
      } else {
        valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          highLow: highLow,
          referenceValue: 0
        }));
      }

      if(options.axisY.type === undefined) {
        labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
      }
    } else {
      if(options.axisX.type === undefined) {
        labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
      }

      if(options.axisY.type === undefined) {
        valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          highLow: highLow,
          referenceValue: 0
        }));
      } else {
        valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          highLow: highLow,
          referenceValue: 0
        }));
      }
    }

    // Projected 0 point
    var zeroPoint = options.horizontalBars ? (chartRect.x1 + valueAxis.projectValue(0)) : (chartRect.y1 - valueAxis.projectValue(0));
    // Used to track the screen coordinates of stacked bars
    var stackedBarValues = [];

    labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
    valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

    if (options.showGridBackground) {
      Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }

    // Draw the series
    data.raw.series.forEach(function(series, seriesIndex) {
      // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
      var biPol = seriesIndex - (data.raw.series.length - 1) / 2;
      // Half of the period width between vertical grid lines used to position bars
      var periodHalfLength;
      // Current series SVG element
      var seriesElement;

      // We need to set periodHalfLength based on some options combinations
      if(options.distributeSeries && !options.stackBars) {
        // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
        // which is the series count and divide by 2
        periodHalfLength = labelAxis.axisLength / data.normalized.series.length / 2;
      } else if(options.distributeSeries && options.stackBars) {
        // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
        // length by 2
        periodHalfLength = labelAxis.axisLength / 2;
      } else {
        // On regular bar charts we should just use the series length
        periodHalfLength = labelAxis.axisLength / data.normalized.series[seriesIndex].length / 2;
      }

      // Adding the series group to the series element
      seriesElement = seriesGroup.elem('g');

      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      seriesElement.attr({
        'ct:series-name': series.name,
        'ct:meta': Chartist.serialize(series.meta)
      });

      // Use series class from series data or if not set generate one
      seriesElement.addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
      ].join(' '));

      data.normalized.series[seriesIndex].forEach(function(value, valueIndex) {
        var projected,
          bar,
          previousStack,
          labelAxisValueIndex;

        // We need to set labelAxisValueIndex based on some options combinations
        if(options.distributeSeries && !options.stackBars) {
          // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
          // on the step axis for label positioning
          labelAxisValueIndex = seriesIndex;
        } else if(options.distributeSeries && options.stackBars) {
          // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
          // 0 for projection on the label step axis
          labelAxisValueIndex = 0;
        } else {
          // On regular bar charts we just use the value index to project on the label step axis
          labelAxisValueIndex = valueIndex;
        }

        // We need to transform coordinates differently based on the chart layout
        if(options.horizontalBars) {
          projected = {
            x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized.series[seriesIndex])
          };
        } else {
          projected = {
            x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized.series[seriesIndex])
          }
        }

        // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
        // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
        // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
        // add any automated positioning.
        if(labelAxis instanceof Chartist.StepAxis) {
          // Offset to center bar between grid lines, but only if the step axis is not stretched
          if(!labelAxis.options.stretch) {
            projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
          }
          // Using bi-polar offset for multiple series if no stacked bars or series distribution is used
          projected[labelAxis.units.pos] += (options.stackBars || options.distributeSeries) ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
        }

        // Enter value in stacked bar values used to remember previous screen value for stacking up bars
        previousStack = stackedBarValues[valueIndex] || zeroPoint;
        stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]);

        // Skip if value is undefined
        if(value === undefined) {
          return;
        }

        var positions = {};
        positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
        positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];

        if(options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode)) {
          // Stack mode: accumulate (default)
          // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
          // We want backwards compatibility, so the expected fallback without the 'stackMode' option
          // to be the original behaviour (accumulate)
          positions[labelAxis.counterUnits.pos + '1'] = previousStack;
          positions[labelAxis.counterUnits.pos + '2'] = stackedBarValues[valueIndex];
        } else {
          // Draw from the zero line normally
          // This is also the same code for Stack mode: overlap
          positions[labelAxis.counterUnits.pos + '1'] = zeroPoint;
          positions[labelAxis.counterUnits.pos + '2'] = projected[labelAxis.counterUnits.pos];
        }

        // Limit x and y so that they are within the chart rect
        positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
        positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
        positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
        positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);

        var metaData = Chartist.getMetaData(series, valueIndex);

        // Create bar element
        bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
          'ct:value': [value.x, value.y].filter(Chartist.isNumeric).join(','),
          'ct:meta': Chartist.serialize(metaData)
        });

        this.eventEmitter.emit('draw', Chartist.extend({
          type: 'bar',
          value: value,
          index: valueIndex,
          meta: metaData,
          series: series,
          seriesIndex: seriesIndex,
          axisX: axisX,
          axisY: axisY,
          chartRect: chartRect,
          group: seriesElement,
          element: bar
        }, positions));
      }.bind(this));
    }.bind(this));

    this.eventEmitter.emit('created', {
      bounds: valueAxis.bounds,
      chartRect: chartRect,
      axisX: axisX,
      axisY: axisY,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new bar chart and returns API object that you can use for later changes.
   *
   * @memberof Chartist.Bar
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object that needs to consist of a labels and a series array
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object which exposes the API for the created chart
   *
   * @example
   * // Create a simple bar chart
   * var data = {
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
   * new Chartist.Bar('.ct-chart', data);
   *
   * @example
   * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
   * new Chartist.Bar('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5, 6, 7],
   *   series: [
   *     [1, 3, 2, -5, -3, 1, -6],
   *     [-5, -2, -4, -1, 2, -3, 1]
   *   ]
   * }, {
   *   seriesBarDistance: 12,
   *   low: -10,
   *   high: 10
   * });
   *
   */
  function Bar(query, data, options, responsiveOptions) {
    Chartist.Bar.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating bar chart type in Chartist namespace
  Chartist.Bar = Chartist.Base.extend({
    constructor: Bar,
    createChart: createChart
  });

}(this || global, Chartist));
;/**
 * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
 *
 * @module Chartist.Pie
 */
/* global Chartist */
(function(globalRoot, Chartist) {
  'use strict';

  var window = globalRoot.window;
  var document = globalRoot.document;

  /**
   * Default options in line charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Pie
   */
  var defaultOptions = {
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: 5,
    // Override the class names that are used to generate the SVG structure of the chart
    classNames: {
      chartPie: 'ct-chart-pie',
      chartDonut: 'ct-chart-donut',
      series: 'ct-series',
      slicePie: 'ct-slice-pie',
      sliceDonut: 'ct-slice-donut',
      sliceDonutSolid: 'ct-slice-donut-solid',
      label: 'ct-label'
    },
    // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
    startAngle: 0,
    // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
    total: undefined,
    // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
    donut: false,
    // If specified the donut segments will be drawn as shapes instead of strokes.
    donutSolid: false,
    // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
    // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
    donutWidth: 60,
    // If a label should be shown or not
    showLabel: true,
    // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
    labelOffset: 0,
    // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
    labelPosition: 'inside',
    // An interpolation function for the label value
    labelInterpolationFnc: Chartist.noop,
    // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
    labelDirection: 'neutral',
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // If true empty values will be ignored to avoid drawing unncessary slices and labels
    ignoreEmptyValues: false
  };

  /**
   * Determines SVG anchor position based on direction and center parameter
   *
   * @param center
   * @param label
   * @param direction
   * @return {string}
   */
  function determineAnchorPosition(center, label, direction) {
    var toTheRight = label.x > center.x;

    if(toTheRight && direction === 'explode' ||
      !toTheRight && direction === 'implode') {
      return 'start';
    } else if(toTheRight && direction === 'implode' ||
      !toTheRight && direction === 'explode') {
      return 'end';
    } else {
      return 'middle';
    }
  }

  /**
   * Creates the pie chart
   *
   * @param options
   */
  function createChart(options) {
    var data = Chartist.normalizeData(this.data);
    var seriesGroups = [],
      labelsGroup,
      chartRect,
      radius,
      labelRadius,
      totalDataSum,
      startAngle = options.startAngle;

    // Create SVG.js draw
    this.svg = Chartist.createSvg(this.container, options.width, options.height,options.donut ? options.classNames.chartDonut : options.classNames.chartPie);
    // Calculate charting rect
    chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
    // Get biggest circle radius possible within chartRect
    radius = Math.min(chartRect.width() / 2, chartRect.height() / 2);
    // Calculate total of all series to get reference value or use total reference from optional options
    totalDataSum = options.total || data.normalized.series.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);

    var donutWidth = Chartist.quantity(options.donutWidth);
    if (donutWidth.unit === '%') {
      donutWidth.value *= radius / 100;
    }

    // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
    // Unfortunately this is not possible with the current SVG Spec
    // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html
    radius -= options.donut && !options.donutSolid ? donutWidth.value / 2  : 0;

    // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
    // if regular pie chart it's half of the radius
    if(options.labelPosition === 'outside' || options.donut && !options.donutSolid) {
      labelRadius = radius;
    } else if(options.labelPosition === 'center') {
      // If labelPosition is center we start with 0 and will later wait for the labelOffset
      labelRadius = 0;
    } else if(options.donutSolid) {
      labelRadius = radius - donutWidth.value / 2;
    } else {
      // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
      // slice
      labelRadius = radius / 2;
    }
    // Add the offset to the labelRadius where a negative offset means closed to the center of the chart
    labelRadius += options.labelOffset;

    // Calculate end angle based on total sum and current data value and offset with padding
    var center = {
      x: chartRect.x1 + chartRect.width() / 2,
      y: chartRect.y2 + chartRect.height() / 2
    };

    // Check if there is only one non-zero value in the series array.
    var hasSingleValInSeries = data.raw.series.filter(function(val) {
      return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
    }).length === 1;

    // Creating the series groups
    data.raw.series.forEach(function(series, index) {
      seriesGroups[index] = this.svg.elem('g', null, null);
    }.bind(this));
    //if we need to show labels we create the label group now
    if(options.showLabel) {
      labelsGroup = this.svg.elem('g', null, null);
    }

    // Draw the series
    // initialize series groups
    data.raw.series.forEach(function(series, index) {
      // If current value is zero and we are ignoring empty values then skip to next value
      if (data.normalized.series[index] === 0 && options.ignoreEmptyValues) return;

      // If the series is an object and contains a name or meta data we add a custom attribute
      seriesGroups[index].attr({
        'ct:series-name': series.name
      });

      // Use series class from series data or if not set generate one
      seriesGroups[index].addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(index))
      ].join(' '));

      // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.
      var endAngle = (totalDataSum > 0 ? startAngle + data.normalized.series[index] / totalDataSum * 360 : 0);

      // Use slight offset so there are no transparent hairline issues
      var overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));

      // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
      // with Z and use 359.99 degrees
      if(endAngle - overlappigStartAngle >= 359.99) {
        endAngle = overlappigStartAngle + 359.99;
      }

      var start = Chartist.polarToCartesian(center.x, center.y, radius, overlappigStartAngle),
        end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);

      var innerStart,
        innerEnd,
        donutSolidRadius;

      // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke
      var path = new Chartist.Svg.Path(!options.donut || options.donutSolid)
        .move(end.x, end.y)
        .arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y);

      // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie
      if(!options.donut) {
        path.line(center.x, center.y);
      } else if (options.donutSolid) {
        donutSolidRadius = radius - donutWidth.value;
        innerStart = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
        innerEnd = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, endAngle);
        path.line(innerStart.x, innerStart.y);
        path.arc(donutSolidRadius, donutSolidRadius, 0, endAngle - startAngle  > 180, 1, innerEnd.x, innerEnd.y);
      }

      // Create the SVG path
      // If this is a donut chart we add the donut class, otherwise just a regular slice
      var pathClassName = options.classNames.slicePie;
      if (options.donut) {
        pathClassName = options.classNames.sliceDonut;
        if (options.donutSolid) {
          pathClassName = options.classNames.sliceDonutSolid;
        }
      }
      var pathElement = seriesGroups[index].elem('path', {
        d: path.stringify()
      }, pathClassName);

      // Adding the pie series value to the path
      pathElement.attr({
        'ct:value': data.normalized.series[index],
        'ct:meta': Chartist.serialize(series.meta)
      });

      // If this is a donut, we add the stroke-width as style attribute
      if(options.donut && !options.donutSolid) {
        pathElement._node.style.strokeWidth = donutWidth.value + 'px';
      }

      // Fire off draw event
      this.eventEmitter.emit('draw', {
        type: 'slice',
        value: data.normalized.series[index],
        totalDataSum: totalDataSum,
        index: index,
        meta: series.meta,
        series: series,
        group: seriesGroups[index],
        element: pathElement,
        path: path.clone(),
        center: center,
        radius: radius,
        startAngle: startAngle,
        endAngle: endAngle
      });

      // If we need to show labels we need to add the label for this slice now
      if(options.showLabel) {
        var labelPosition;
        if(data.raw.series.length === 1) {
          // If we have only 1 series, we can position the label in the center of the pie
          labelPosition = {
            x: center.x,
            y: center.y
          };
        } else {
          // Position at the labelRadius distance from center and between start and end angle
          labelPosition = Chartist.polarToCartesian(
            center.x,
            center.y,
            labelRadius,
            startAngle + (endAngle - startAngle) / 2
          );
        }

        var rawValue;
        if(data.normalized.labels && !Chartist.isFalseyButZero(data.normalized.labels[index])) {
          rawValue = data.normalized.labels[index];
        } else {
          rawValue = data.normalized.series[index];
        }

        var interpolatedValue = options.labelInterpolationFnc(rawValue, index);

        if(interpolatedValue || interpolatedValue === 0) {
          var labelElement = labelsGroup.elem('text', {
            dx: labelPosition.x,
            dy: labelPosition.y,
            'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
          }, options.classNames.label).text('' + interpolatedValue);

          // Fire off draw event
          this.eventEmitter.emit('draw', {
            type: 'label',
            index: index,
            group: labelsGroup,
            element: labelElement,
            text: '' + interpolatedValue,
            x: labelPosition.x,
            y: labelPosition.y
          });
        }
      }

      // Set next startAngle to current endAngle.
      // (except for last slice)
      startAngle = endAngle;
    }.bind(this));

    this.eventEmitter.emit('created', {
      chartRect: chartRect,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new pie chart and returns an object that can be used to redraw the chart.
   *
   * @memberof Chartist.Pie
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object with a version and an update method to manually redraw the chart
   *
   * @example
   * // Simple pie chart example with four series
   * new Chartist.Pie('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * });
   *
   * @example
   * // Drawing a donut chart
   * new Chartist.Pie('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * }, {
   *   donut: true
   * });
   *
   * @example
   * // Using donut, startAngle and total to draw a gauge chart
   * new Chartist.Pie('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   donut: true,
   *   donutWidth: 20,
   *   startAngle: 270,
   *   total: 200
   * });
   *
   * @example
   * // Drawing a pie chart with padding and labels that are outside the pie
   * new Chartist.Pie('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   chartPadding: 30,
   *   labelOffset: 50,
   *   labelDirection: 'explode'
   * });
   *
   * @example
   * // Overriding the class names for individual series as well as a name and meta data.
   * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
   * // to a ct:meta attribute.
   * new Chartist.Pie('.ct-chart', {
   *   series: [{
   *     value: 20,
   *     name: 'Series 1',
   *     className: 'my-custom-class-one',
   *     meta: 'Meta One'
   *   }, {
   *     value: 10,
   *     name: 'Series 2',
   *     className: 'my-custom-class-two',
   *     meta: 'Meta Two'
   *   }, {
   *     value: 70,
   *     name: 'Series 3',
   *     className: 'my-custom-class-three',
   *     meta: 'Meta Three'
   *   }]
   * });
   */
  function Pie(query, data, options, responsiveOptions) {
    Chartist.Pie.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating pie chart type in Chartist namespace
  Chartist.Pie = Chartist.Base.extend({
    constructor: Pie,
    createChart: createChart,
    determineAnchorPosition: determineAnchorPosition
  });

}(this || global, Chartist));

return Chartist;

}));
