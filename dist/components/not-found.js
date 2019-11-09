'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require('../polyfills/extends');var _extends3=_interopRequireDefault(_extends2);var _objectGetPrototypeOf=require('../polyfills/objectGetPrototypeOf');var _objectGetPrototypeOf2=_interopRequireDefault(_objectGetPrototypeOf);var _classCallCheck2=require('../polyfills/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('../polyfills/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('../polyfills/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('../polyfills/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _nimbleEmoji=require('./emoji/nimble-emoji');var _nimbleEmoji2=_interopRequireDefault(_nimbleEmoji);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var emojiIcon=require('../assets/emoji-icon.png');var styles=_reactNative.StyleSheet.create({labelText:{fontSize:15,fontWeight:'bold'},notFound:{flex:1,alignSelf:'center',flexDirection:'column',alignItems:'center',justifyContent:'center'}});var NotFound=function(_React$PureComponent){(0,_inherits3.default)(NotFound,_React$PureComponent);function NotFound(){(0,_classCallCheck3.default)(this,NotFound);return(0,_possibleConstructorReturn3.default)(this,(NotFound.__proto__||(0,_objectGetPrototypeOf2.default)(NotFound)).apply(this,arguments));}(0,_createClass3.default)(NotFound,[{key:'render',value:function render(){var _props=this.props;var data=_props.data;var emojiProps=_props.emojiProps;var i18n=_props.i18n;var notFound=_props.notFound;var notFoundEmoji=_props.notFoundEmoji;var style=_props.style;var component=_react2.default.createElement(_reactNative.View,{style:[style?style:null,styles.notFound]},notFound&&notFound()||_react2.default.createElement(_reactNative.View,{style:styles.notFound},_react2.default.createElement(_reactNative.View,null,_react2.default.createElement(_nimbleEmoji2.default,(0,_extends3.default)({data:data},emojiProps,{emoji:notFoundEmoji,onPress:null,onLongPress:null}))),_react2.default.createElement(_reactNative.View,null,_react2.default.createElement(_reactNative.Text,{style:styles.labelText},i18n.notfound))));return component;}}]);return NotFound;}(_react2.default.PureComponent);exports.default=NotFound;