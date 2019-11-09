'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require('../../polyfills/extends');var _extends3=_interopRequireDefault(_extends2);var _objectWithoutProperties2=require('babel-runtime/helpers/objectWithoutProperties');var _objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2);var _objectGetPrototypeOf=require('../../polyfills/objectGetPrototypeOf');var _objectGetPrototypeOf2=_interopRequireDefault(_objectGetPrototypeOf);var _classCallCheck2=require('../../polyfills/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('../../polyfills/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('../../polyfills/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('../../polyfills/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var TouchableComponent=void 0;if(_reactNative.Platform.OS==='android'){TouchableComponent=_reactNative.TouchableNativeFeedback;}else{TouchableComponent=_reactNative.TouchableWithoutFeedback;}if(TouchableComponent!==_reactNative.TouchableNativeFeedback){TouchableComponent.SelectableBackground=function(){return{};};TouchableComponent.SelectableBackgroundBorderless=function(){return{};};TouchableComponent.Ripple=function(){return{};};TouchableComponent.canUseNativeForeground=function(){return false;};}var PlatformTouchable=function(_React$PureComponent){(0,_inherits3.default)(PlatformTouchable,_React$PureComponent);function PlatformTouchable(){(0,_classCallCheck3.default)(this,PlatformTouchable);return(0,_possibleConstructorReturn3.default)(this,(PlatformTouchable.__proto__||(0,_objectGetPrototypeOf2.default)(PlatformTouchable)).apply(this,arguments));}(0,_createClass3.default)(PlatformTouchable,[{key:'render',value:function render(){var _props=this.props;var children=_props.children;var style=_props.style;var foreground=_props.foreground;var background=_props.background;var useForeground=_props.useForeground;var props=(0,_objectWithoutProperties3.default)(_props,['children','style','foreground','background','useForeground']);children=_react2.default.Children.only(children);if(TouchableComponent===_reactNative.TouchableNativeFeedback){useForeground=foreground&&_reactNative.TouchableNativeFeedback.canUseNativeForeground();if(foreground&&background){console.warn('Specified foreground and background for Touchable, only one can be used at a time. Defaulted to foreground.');}return _react2.default.createElement(TouchableComponent,(0,_extends3.default)({},props,{useForeground:useForeground,background:useForeground&&foreground||background}),_react2.default.createElement(_reactNative.View,{style:style},children));}else if(TouchableComponent===_reactNative.TouchableWithoutFeedback){return _react2.default.createElement(_reactNative.TouchableWithoutFeedback,props,_react2.default.createElement(_reactNative.View,{style:style},children));}else{var TouchableFallback=this.props.fallback||TouchableComponent;return _react2.default.createElement(TouchableFallback,(0,_extends3.default)({},props,{style:style}),children);}}}]);return PlatformTouchable;}(_react2.default.PureComponent);PlatformTouchable.SelectableBackground=TouchableComponent.SelectableBackground;PlatformTouchable.SelectableBackgroundBorderless=TouchableComponent.SelectableBackgroundBorderless;PlatformTouchable.Ripple=TouchableComponent.Ripple;PlatformTouchable.canUseNativeForeground=TouchableComponent.canUseNativeForeground;exports.default=PlatformTouchable;