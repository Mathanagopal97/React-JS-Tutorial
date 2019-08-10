"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Clicker =
    /*#__PURE__*/
    function (_Component) {
        _inherits(Clicker, _Component);

        function Clicker(props) {
            var _this;

            _classCallCheck(this, Clicker);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(Clicker).call(this, props));
            _this.state = {
                number: 1,
                isWinner: false
            };
            _this.getNumber = _this.getNumber.bind(_assertThisInitialized(_this));
            return _this;
        }

        _createClass(Clicker, [{
            key: "getNumber",
            value: function getNumber(e) {
                console.log(e);
                var randNumber = Math.floor(Math.random() * 10) + 1;
                if (randNumber === 7) this.setState({
                    isWinner: true
                });
                this.setState({
                    number: randNumber
                });
            }
        }, {
            key: "render",
            value: function render() {
                var button = _react.default.createElement("button", {
                    onClick: this.getNumber
                }, "Click Me");

                var message = _react.default.createElement("h1", null, "\"You Win!!!\"");

                return _react.default.createElement("div", null, _react.default.createElement("h1", null, "The number is ", this.state.number), _react.default.createElement("div", null, !this.state.isWinner ? button : message));
            }
        }]);

        return Clicker;
    }(_react.Component);

var _default = Clicker;
exports.default = _default;