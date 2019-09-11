module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+GgV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        position: relative;\n        margin: 100px auto;\n        width: 200px;\n        height: 20px;\n        background-color: ', ';\n\n        &::after {\n            content: \'\';\n            width: 50px;\n            height: 20px;\n            position: absolute;\n            top: calc(50% - 10px);\n            left: calc(50% - 100px);\n            background-color: ', ';\n            animation: ', ' ', ' linear infinite alternate;\n        }\n    '], ['\n        position: relative;\n        margin: 100px auto;\n        width: 200px;\n        height: 20px;\n        background-color: ', ';\n\n        &::after {\n            content: \'\';\n            width: 50px;\n            height: 20px;\n            position: absolute;\n            top: calc(50% - 10px);\n            left: calc(50% - 100px);\n            background-color: ', ';\n            animation: ', ' ', ' linear infinite alternate;\n        }\n    ']);

var _preact = __webpack_require__("KM04");

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__("X5xa");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = __webpack_require__("ockL");

var _defaults = __webpack_require__("N9d+");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var Bar = function Bar(_ref) {
    var _ref$bgBar = _ref.bgBar,
        bgBar = _ref$bgBar === undefined ? '#efefef' : _ref$bgBar,
        color = _ref.color,
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? '0.5s' : _ref$duration;

    var PingPong = _styledComponents2.default.div(_templateObject, bgBar, (0, _defaults.getColor)(color), _animations.bar, duration);
    return (0, _preact.h)(PingPong, { bgBar: bgBar, color: color, duration: duration });
};
exports.default = Bar;

Bar.propTypes = {
    /**
     * Background or the bar
     * default is #CCC
     */
    bgBar: _propTypes2.default.string,

    /**
     * Background of the tab bar
     * default is #333
     */
    color: _propTypes2.default.string,

    /**
     * transition duration
     * default is 0.5s
     */
    duration: _propTypes2.default.string
};

/***/ }),

/***/ "/QC5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribers", function() { return subscribers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUrl", function() { return getCurrentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);


var EMPTY$1 = {};

function assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
	vnode.index = index;
	vnode.rank = rankChild(vnode);
	return vnode.attributes;
}

function segmentize(url) {
	return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
	return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
	return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
	return vnode.attributes.default ? 0 : rank(vnode.attributes.path);
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function isPreactElement(node) {
	return node.__preactattr_ != null || typeof Symbol !== 'undefined' && node[Symbol.for('preactattr')] != null;
}

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button == 0) {
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) {
			return this.canRoute(url);
		}

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
			var matches = exec(url, vnode.attributes.path, vnode.attributes);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					assign(newProps, matches);
					delete newProps.ref;
					delete newProps.key;
					return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

var Link = function Link(props) {
	return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('a', assign({ onClick: handleLinkClick }, props));
};

var Route = function Route(props) {
	return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(props.component, props);
};

Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;

/* harmony default export */ __webpack_exports__["default"] = (Router);
//# sourceMappingURL=preact-router.es.js.map

/***/ }),

/***/ "/aYh":
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__("UJE0");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "0421":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("b9XL");

var assertThisInitialized = __webpack_require__("E7HD");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "0fcM":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "2DKW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {}
            }
        }
    }

    return targetComponent;
};

/***/ }),

/***/ "3onB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5D9O":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("wVGV")();
}

/***/ }),

/***/ "5l4i":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"icon":"icon__2baNA"};

/***/ }),

/***/ "6dK+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__("U9d9");

function isObjectObject(o) {
  return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor, prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};

/***/ }),

/***/ "7/cg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = exports.ButtonIcon = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _preact = __webpack_require__("KM04");

var _MaterialComponent2 = _interopRequireDefault(__webpack_require__("uc5p"));

var _Icon2 = _interopRequireDefault(__webpack_require__("MeGi"));

var _generateThemeClass = _interopRequireDefault(__webpack_require__("QTRl"));

var ButtonIcon =
/*#__PURE__*/
function (_Icon) {
  (0, _inherits2.default)(ButtonIcon, _Icon);

  function ButtonIcon() {
    var _this;

    (0, _classCallCheck2.default)(this, ButtonIcon);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ButtonIcon).apply(this, arguments));
    _this.componentName = 'button__icon';
    return _this;
  }

  return ButtonIcon;
}(_Icon2.default);

exports.ButtonIcon = ButtonIcon;

var Button =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Button, _MaterialComponent);

  function Button() {
    var _this2;

    (0, _classCallCheck2.default)(this, Button);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Button).apply(this, arguments));
    _this2.componentName = 'button';
    _this2.mdcProps = ['dense', 'raised', 'unelevated', 'outlined'];
    _this2.themeProps = ['primary', 'secondary'];
    return _this2;
  }

  (0, _createClass2.default)(Button, [{
    key: "materialDom",
    value: function materialDom(props) {
      var ButtonElement = props.href ? 'a' : 'button';
      var className = '';
      this.themeProps.forEach(function (themeProp) {
        if (themeProp in props && props[themeProp] !== false) {
          className += (0, _generateThemeClass.default)(themeProp) + ' ';
        }
      });
      return (0, _preact.h)(ButtonElement, _extends({
        ref: this.setControlRef
      }, props, {
        className: className
      }), this.props.children);
    }
  }]);
  return Button;
}(_MaterialComponent2.default);

exports.Button = Button;

var default_1 =
/*#__PURE__*/
function (_Button) {
  (0, _inherits2.default)(default_1, _Button);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(Button);

exports.default = default_1;
default_1.Icon = ButtonIcon;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "AkAO":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "Asjh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "CGSF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
			value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t\tposition: relative;\n\t\tmargin: 100px auto;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t'], ['\n\t\tposition: relative;\n\t\tmargin: 100px auto;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tborder-radius: 50%;\n\t\tbackground-color: ', ';\n\t\topacity: 0.6;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tanimation: ', ' 2s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t'], ['\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tborder-radius: 50%;\n\t\tbackground-color: ', ';\n\t\topacity: 0.6;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tanimation: ', ' 2s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t']),
    _templateObject3 = _taggedTemplateLiteral([' animation-delay: -1s; '], [' animation-delay: -1s; ']);

var _preact = __webpack_require__("KM04");

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__("X5xa");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = __webpack_require__("ockL");

var _defaults = __webpack_require__("N9d+");

function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
			return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var Pulsate = function Pulsate(_ref) {
			var color = _ref.color,
			    duration = _ref.duration,
			    size = _ref.size;

			var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size));

			var DefaultBounce = _styledComponents2.default.div(_templateObject2, (0, _defaults.getColor)(color), _animations.pulsate, function (props) {
						return props.duration ? props.duration : '2.0s';
			});

			var Bounce2 = DefaultBounce.extend(_templateObject3);

			return (0, _preact.h)(Spinner, { size: size }, (0, _preact.h)(DefaultBounce, { color: color, duration: duration }), (0, _preact.h)(Bounce2, { color: color, duration: duration }));
};

exports.default = Pulsate;

Pulsate.propTypes = {

			/**
   * Background of the spinner
   * default is #333
   */
			color: _propTypes2.default.string,

			/**
   * Animation duration
   * default is 1.2s
   */
			duration: _propTypes2.default.string,

			/**
   * Size of the spinner
   * default is 40px
   */
			size: _propTypes2.default.string
};

/***/ }),

/***/ "Cv2I":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextField = exports.TextFieldInput = exports.Label = exports.HelperText = void 0;

var _get2 = _interopRequireDefault(__webpack_require__("J5U+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _textfield = __webpack_require__("VcCu");

var _preact = __webpack_require__("KM04");

var _MaterialComponent4 = _interopRequireDefault(__webpack_require__("uc5p"));

var _Icon = _interopRequireDefault(__webpack_require__("MeGi"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var HelperText =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(HelperText, _MaterialComponent);

  function HelperText() {
    var _this;

    (0, _classCallCheck2.default)(this, HelperText);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HelperText).apply(this, arguments));
    _this.componentName = 'text-field-helper-text';
    _this.mdcProps = ['persistent', 'validation-msg'];
    return _this;
  }

  (0, _createClass2.default)(HelperText, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("p", _extends({}, props, {
        "aria-hidden": "true"
      }), props.children);
    }
  }]);
  return HelperText;
}(_MaterialComponent4.default);

exports.HelperText = HelperText;

var Label =
/*#__PURE__*/
function (_MaterialComponent2) {
  (0, _inherits2.default)(Label, _MaterialComponent2);

  function Label() {
    var _this2;

    (0, _classCallCheck2.default)(this, Label);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Label).apply(this, arguments));
    _this2.componentName = 'floating-label';
    _this2.mdcProps = [];
    return _this2;
  }

  (0, _createClass2.default)(Label, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("label", _extends({}, props), props.children);
    }
  }]);
  return Label;
}(_MaterialComponent4.default);

exports.Label = Label;

var TextFieldInput =
/*#__PURE__*/
function (_MaterialComponent3) {
  (0, _inherits2.default)(TextFieldInput, _MaterialComponent3);

  function TextFieldInput() {
    var _this3;

    (0, _classCallCheck2.default)(this, TextFieldInput);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextFieldInput).apply(this, arguments));
    _this3.state = {
      jsComponentAttached: false
    };
    _this3.componentName = 'text-field';
    _this3.mdcProps = ['fullwidth', 'textarea', 'dense', 'disabled', 'box', 'outlined'];
    _this3.mdcNotifyProps = ['valid', 'disabled'];
    return _this3;
  }

  (0, _createClass2.default)(TextFieldInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      (0, _get2.default)((0, _getPrototypeOf2.default)(TextFieldInput.prototype), "componentDidMount", this).call(this);
      this.setState({
        jsComponentAttached: true
      }, function () {
        if (_this4.control) {
          _this4.MDComponent = new _textfield.MDCTextField(_this4.control);

          if (_this4.props.onInit) {
            _this4.props.onInit(_this4.MDComponent);
          }

          if (_this4.props.value) {
            _this4.MDComponent.value = _this4.props.value;
          }
        }

        _this4.afterComponentDidMount();
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(TextFieldInput.prototype), "componentWillReceiveProps", this).call(this, nextProps);

      if (this.MDComponent && nextProps.value && this.props.value !== nextProps.value && this.MDComponent.value !== nextProps.value) {
        this.MDComponent.value = nextProps.value;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(TextFieldInput.prototype), "componentWillUnmount", this).call(this);

      if (this.MDComponent) {
        this.MDComponent.destroy();
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.MDComponent ? this.MDComponent.value : null;
    }
  }, {
    key: "materialDom",
    value: function materialDom(allprops) {
      var className = allprops.className,
          outerStyle = allprops.outerStyle,
          outlined = allprops.outlined,
          props = __rest(allprops, ["className", "outerStyle", "outlined"]);

      className = className || '';

      if ('leadingIcon' in props) {
        className += ' mdc-text-field--box mdc-text-field--with-leading-icon';
      }

      if ('trailingIcon' in props) {
        className += ' mdc-text-field--box mdc-text-field--with-trailing-icon';
      }

      if ('value' in props && this.state.jsComponentAttached) {
        className = [className, 'mdc-text-field--upgraded'].join(' ');
      }

      if (props.label && props.fullwidth) {
        console.log('Passing a "label" prop is not supported when using a "fullwidth" text field.');
      } // noinspection RequiredAttributes


      return (0, _preact.h)("div", {
        className: className,
        ref: this.setControlRef,
        style: outerStyle
      }, props.leadingIcon ? (0, _preact.h)(_Icon.default, {
        className: "mdc-text-field__icon"
      }, props.leadingIcon) : null, props.textarea ? (0, _preact.h)("textarea", _extends({
        className: "mdc-text-field__input"
      }, props)) : (0, _preact.h)("input", _extends({
        type: props.type || 'text',
        className: "mdc-text-field__input",
        placeholder: this.state.jsComponentAttached ? undefined : props.label + this.props.required ? '*' : ''
      }, props)), props.label && this.state.jsComponentAttached && (0, _preact.h)(Label, {
        for: props.id
      }, props.label), props.trailingIcon ? (0, _preact.h)(_Icon.default, {
        className: "mdc-text-field__icon"
      }, props.trailingIcon) : null, props.textarea || outlined ? null : (0, _preact.h)("div", {
        class: "mdc-line-ripple"
      }), outlined ? (0, _preact.h)("div", {
        class: "mdc-notched-outline"
      }, (0, _preact.h)("svg", null, (0, _preact.h)("path", {
        className: "mdc-notched-outline__path"
      }))) : null, outlined ? (0, _preact.h)("div", {
        className: "mdc-notched-outline__idle"
      }) : null);
    }
  }, {
    key: "buildClassName",
    value: function buildClassName(props) {
      var cn = (0, _get2.default)((0, _getPrototypeOf2.default)(TextFieldInput.prototype), "buildClassName", this).call(this, props);

      if (this.MDComponent) {
        cn += ' mdc-text-field--upgraded';
      }

      return cn;
    }
  }]);
  return TextFieldInput;
}(_MaterialComponent4.default);

exports.TextFieldInput = TextFieldInput;
TextFieldInput.defaultProps = {
  valid: true
};

var TextField =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TextField, _Component);

  function TextField() {
    var _this5;

    (0, _classCallCheck2.default)(this, TextField);
    _this5 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextField).apply(this, arguments));
    _this5.id = TextField.uid();
    return _this5;
  }

  (0, _createClass2.default)(TextField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        jsComponentAttached: true
      });
    }
  }, {
    key: "render",
    value: function render(allprops) {
      var _this6 = this;

      var className = allprops.className,
          outerStyle = allprops.outerStyle,
          helperTextPersistent = allprops.helperTextPersistent,
          helperTextValidationMsg = allprops.helperTextValidationMsg,
          props = __rest(allprops, ["className", "outerStyle", "helperTextPersistent", "helperTextValidationMsg"]);

      var showDiv = props.helperText;

      if ((props.helperText || props.label) && !props.id) {
        props.id = "tf-".concat(this.id);
      } // Helper text


      var helperTextProps = {
        persistent: helperTextPersistent,
        'validation-msg': helperTextValidationMsg
      };
      return showDiv ? (0, _preact.h)("div", {
        className: className,
        style: outerStyle
      }, (0, _preact.h)(TextFieldInput, _extends({}, props, {
        onInit: function onInit(MDComponent) {
          _this6.MDComponent = MDComponent;
        },
        "aria-controls": props.helperText && "".concat(props.id, "-helper-text")
      })), props.helperText && (0, _preact.h)(HelperText, _extends({
        id: "".concat(props.id, "-helper-text")
      }, helperTextProps), props.helperText)) : (0, _preact.h)(TextFieldInput, _extends({}, props, {
        className: className,
        outerStyle: outerStyle,
        onInit: function onInit(MDComponent) {
          _this6.MDComponent = MDComponent;
        }
      }));
    }
  }], [{
    key: "uid",
    value: function uid() {
      return ++this.uidCounter;
    }
  }]);
  return TextField;
}(_preact.Component);

exports.TextField = TextField;
TextField.uidCounter = 0;

var default_1 =
/*#__PURE__*/
function (_TextField) {
  (0, _inherits2.default)(default_1, _TextField);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(TextField);

exports.default = default_1;
default_1.HelperText = HelperText;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "E7HD":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "EQDb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__("uJAj");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



/**
 * @template F
 */

var MDCComponent = function () {
  /**
   * @param {!Element} root
   * @return {!MDCComponent}
   */
  MDCComponent.attachTo = function attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
  };

  /**
   * @param {!Element} root
   * @param {F=} foundation
   * @param {...?} args
   */


  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.prototype.initialize = function initialize() /* ...args */{}
  // Subclasses can override this to do any additional setup work that would be considered part of a
  // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
  // initialized. Any additional arguments besides root and foundation will be passed in here.


  /**
   * @return {!F} foundation
   */
  ;

  MDCComponent.prototype.getDefaultFoundation = function getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  };

  /**
   * Wrapper method to add an event listener to the component's root element. This is most useful when
   * listening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCComponent.prototype.listen = function listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  };

  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCComponent.prototype.unlisten = function unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  };

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */


  MDCComponent.prototype.emit = function emit(evtType, evtData) {
    var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var evt = void 0;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  };

  return MDCComponent;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCComponent);

/***/ }),

/***/ "F1hR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
			value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t\tposition: relative;\n\t\tmargin: 100px auto;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t'], ['\n\t\tposition: relative;\n\t\tmargin: 100px auto;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\twidth: 33%;\n\t\theight: 33%;\n\t\tbackground-color: ', ';\n\t\tfloat: left;\n\t\tanimation: ', ' 1.3s infinite ease-in-out;\n\t'], ['\n\t\twidth: 33%;\n\t\theight: 33%;\n\t\tbackground-color: ', ';\n\t\tfloat: left;\n\t\tanimation: ', ' 1.3s infinite ease-in-out;\n\t']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t\tanimation-delay: 0.2s;\n\t'], ['\n\t\tanimation-delay: 0.2s;\n\t']),
    _templateObject4 = _taggedTemplateLiteral(['\n\t\tanimation-delay: 0.3s;\n\t'], ['\n\t\tanimation-delay: 0.3s;\n\t']),
    _templateObject5 = _taggedTemplateLiteral(['\n\t\tanimation-delay: 0.4s;\n\t'], ['\n\t\tanimation-delay: 0.4s;\n\t']),
    _templateObject6 = _taggedTemplateLiteral(['\n\t\tanimation-delay: 0.1s;\n\t'], ['\n\t\tanimation-delay: 0.1s;\n\t']),
    _templateObject7 = _taggedTemplateLiteral(['\n\t\tanimation-delay: 0s;\n\t'], ['\n\t\tanimation-delay: 0s;\n\t']);

var _preact = __webpack_require__("KM04");

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__("X5xa");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = __webpack_require__("ockL");

var _defaults = __webpack_require__("N9d+");

function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
			return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var CubeGrid = function CubeGrid(_ref) {
			var color = _ref.color,
			    size = _ref.size;

			var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size));

			var Cube = _styledComponents2.default.div(_templateObject2, (0, _defaults.getColor)(color), _animations.grid);

			var Cube1 = Cube.extend(_templateObject3);
			var Cube2 = Cube.extend(_templateObject4);
			var Cube3 = Cube.extend(_templateObject5);
			var Cube4 = Cube.extend(_templateObject6);
			var Cube5 = Cube.extend(_templateObject3);
			var Cube6 = Cube.extend(_templateObject4);
			var Cube7 = Cube.extend(_templateObject7);
			var Cube8 = Cube.extend(_templateObject6);
			var Cube9 = Cube.extend(_templateObject3);

			return (0, _preact.h)(Spinner, { size: size }, (0, _preact.h)(Cube1, { color: color }), (0, _preact.h)(Cube2, { color: color }), (0, _preact.h)(Cube3, { color: color }), (0, _preact.h)(Cube4, { color: color }), (0, _preact.h)(Cube5, { color: color }), (0, _preact.h)(Cube6, { color: color }), (0, _preact.h)(Cube7, { color: color }), (0, _preact.h)(Cube8, { color: color }), (0, _preact.h)(Cube9, { color: color }));
};

exports.default = CubeGrid;

CubeGrid.propTypes = {

			/**
   * Background of the spinner
   * default is #333
   */
			color: _propTypes2.default.string,

			/**
   * Size of the spinner
   * default is 40px
   */
			size: _propTypes2.default.string
};

/***/ }),

/***/ "J5U+":
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__("/aYh");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "JL9d":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./style/index.css
var style = __webpack_require__("rq4c");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./style/icons.css
var icons = __webpack_require__("hIuj");
var icons_default = /*#__PURE__*/__webpack_require__.n(icons);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/preact-router/dist/preact-router.es.js
var preact_router_es = __webpack_require__("/QC5");

// EXTERNAL MODULE: ../node_modules/preact-router/match.js
var match = __webpack_require__("sw5u");
var match_default = /*#__PURE__*/__webpack_require__.n(match);

// EXTERNAL MODULE: ./components/header/style.css
var header_style = __webpack_require__("u3et");
var header_style_default = /*#__PURE__*/__webpack_require__.n(header_style);

// CONCATENATED MODULE: ./components/header/index.js





var header__ref = Object(preact_min["h"])(
	'h1',
	null,
	'Pokedex'
);

var header_Header = function Header() {
	return Object(preact_min["h"])(
		'header',
		{ 'class': header_style_default.a.header },
		header__ref,
		Object(preact_min["h"])(
			'nav',
			null,
			Object(preact_min["h"])(
				match["Link"],
				{ activeClassName: header_style_default.a.active, href: '/' },
				'Home'
			)
		)
	);
};

/* harmony default export */ var header = (header_Header);
// EXTERNAL MODULE: ./routes/home/style.css
var home_style = __webpack_require__("ZAL5");
var home_style_default = /*#__PURE__*/__webpack_require__.n(home_style);

// EXTERNAL MODULE: ./components/filters/style.css
var filters_style = __webpack_require__("WotE");
var filters_style_default = /*#__PURE__*/__webpack_require__.n(filters_style);

// EXTERNAL MODULE: ../node_modules/preact-material-components/FormField/index.js
var FormField = __webpack_require__("rW9b");
var FormField_default = /*#__PURE__*/__webpack_require__.n(FormField);

// EXTERNAL MODULE: ../node_modules/preact-material-components/TextField/index.js
var TextField = __webpack_require__("Cv2I");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField);

// EXTERNAL MODULE: ../node_modules/preact-material-components/TextField/style.css
var TextField_style = __webpack_require__("qKn3");
var TextField_style_default = /*#__PURE__*/__webpack_require__.n(TextField_style);

// CONCATENATED MODULE: ./components/filters/index.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var filters__ref2 = Object(preact_min["h"])(
	'h2',
	null,
	'Filter'
);

var filters_Filters = function (_Component) {
	_inherits(Filters, _Component);

	function Filters() {
		_classCallCheck(this, Filters);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Filters.prototype.render = function render(_ref) {
		var filterPokemon = _ref.filterPokemon;

		return Object(preact_min["h"])(
			'div',
			{ id: 'filters', 'class': filters_style_default.a.filters },
			filters__ref2,
			Object(preact_min["h"])(
				'form',
				null,
				Object(preact_min["h"])(TextField["TextField"], {
					fullwidth: true,
					helperTextPersistent: true,
					'aria-label': 'filters',
					helperText: 'fire,electric,grass,bug,water&-251&!alola',
					onInput: function onInput(e) {
						return filterPokemon(e.target.value);
					}
				})
			)
		);
	};

	return Filters;
}(preact_min["Component"]);

/* harmony default export */ var filters = (filters_Filters);
// EXTERNAL MODULE: ./components/pokemon/style.css
var pokemon_style = __webpack_require__("sSiY");
var pokemon_style_default = /*#__PURE__*/__webpack_require__.n(pokemon_style);

// EXTERNAL MODULE: ./components/moves/style.css
var moves_style = __webpack_require__("5l4i");
var moves_style_default = /*#__PURE__*/__webpack_require__.n(moves_style);

// EXTERNAL MODULE: ./components/typeicon/style.css
var typeicon_style = __webpack_require__("ziGg");
var typeicon_style_default = /*#__PURE__*/__webpack_require__.n(typeicon_style);

// CONCATENATED MODULE: ./components/typeicon/index.js




var typeicon_TypeIcon = function TypeIcon(_ref) {
	var type = _ref.type;

	if (!type) return;

	var name = type.substr(13);
	return Object(preact_min["h"])(
		'span',
		{ className: typeicon_style_default.a.type + ' ' + typeicon_style_default.a[type] },
		name
	);
};

/* harmony default export */ var typeicon = (typeicon_TypeIcon);
// CONCATENATED MODULE: ./utilities/titlecase.js
var titleCase = function titleCase(text) {
	var replaced = [];
	for (var _iterator = text.split(' '), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
		var _ref;

		if (_isArray) {
			if (_i >= _iterator.length) break;
			_ref = _iterator[_i++];
		} else {
			_i = _iterator.next();
			if (_i.done) break;
			_ref = _i.value;
		}

		var word = _ref;

		replaced.push(word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
	}
	return replaced.join(' ');
};

/* harmony default export */ var titlecase = (titleCase);
// EXTERNAL MODULE: ../node_modules/preact-material-components/Icon/index.js
var Icon = __webpack_require__("MeGi");
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon);

// CONCATENATED MODULE: ./components/moves/index.js







var moves_QuickMove = function QuickMove(_ref) {
	var move = _ref.move,
	    onSelect = _ref.onSelect,
	    selected = _ref.selected;

	var displayName = moves_format(move.uniqueId),
	    power = move.power,
	    energy = move.energyDelta,
	    turns = 1;
	if (move.hasOwnProperty('durationTurns')) {
		turns = Number(move.durationTurns) + 1;
	}
	var iconName = selected ? 'check_box' : 'check_box_outline_blank';

	return Object(preact_min["h"])(
		'div',
		{ onClick: function onClick() {
				return onSelect({ move: move, fast: true });
			} },
		Object(preact_min["h"])(
			Icon_default.a,
			{ 'class': moves_style_default.a.icon },
			iconName
		),
		Object(preact_min["h"])(typeicon, { type: move.type }),
		displayName,
		': ',
		power,
		' / ',
		energy,
		' / ',
		turns,
		' / ',
		Math.round(power / turns * 100) / 100,
		' / ',
		Math.round(energy / turns * 100) / 100
	);
};

var moves_ChargeMove = function ChargeMove(_ref2) {
	var move = _ref2.move,
	    onSelect = _ref2.onSelect,
	    selected = _ref2.selected,
	    fastEnergy = _ref2.fastEnergy;

	var displayName = moves_format(move.uniqueId),
	    power = move.power,
	    energy = Math.abs(move.energyDelta);
	var iconName = selected ? 'check_box' : 'check_box_outline_blank';
	var turns = fastEnergy && " (" + Math.ceil(energy / fastEnergy) + ")";

	return Object(preact_min["h"])(
		'div',
		{ onClick: function onClick() {
				return onSelect({ move: move });
			} },
		Object(preact_min["h"])(
			Icon_default.a,
			{ 'class': moves_style_default.a.icon },
			iconName
		),
		Object(preact_min["h"])(typeicon, { type: move.type }),
		displayName,
		': ',
		power,
		' / ',
		energy,
		' / ',
		Math.round(power / energy * 100) / 100,
		turns
	);
};

var moves_format = function format(move) {
	if (move.endsWith('_FAST')) {
		move = move.substr(0, move.length - 5);
	}
	move = move.replace('_', ' ');
	return titlecase(move);
};


// EXTERNAL MODULE: ../node_modules/preact-material-components/Typography/index.js
var Typography = __webpack_require__("Ym6P");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Typography/style.css
var Typography_style = __webpack_require__("3onB");
var Typography_style_default = /*#__PURE__*/__webpack_require__.n(Typography_style);

// CONCATENATED MODULE: ./components/movelist/index.js


function movelist__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function movelist__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function movelist__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _ref4 = Object(preact_min["h"])(
	'h3',
	null,
	'Moves'
);

var movelist__ref5 = Object(preact_min["h"])(
	'h4',
	null,
	'Quick'
);

var _ref6 = Object(preact_min["h"])(
	Typography_default.a,
	{ caption: true },
	'damage / energy / turns / DPT / EPT'
);

var _ref7 = Object(preact_min["h"])(
	'h4',
	null,
	'Charge'
);

var movelist_MoveList = function (_Component) {
	movelist__inherits(MoveList, _Component);

	function MoveList() {
		var _temp, _this, _ret;

		movelist__classCallCheck(this, MoveList);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = movelist__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
			selectedFast: undefined,
			selectedCharge: []
		}, _this.onSelect = function (_ref) {
			var move = _ref.move,
			    fast = _ref.fast;

			if (fast) {
				if (move.uniqueId == _this.state.selectedFast) {
					_this.setState({ selectedFast: undefined });
				} else {
					_this.setState({ selectedFast: move.uniqueId });
				}
			} else {
				var charged = _this.state.selectedCharge;
				var i = charged.indexOf(move.uniqueId);
				if (i !== -1) {
					charged.splice(i, 1);
				} else {
					charged.push(move.uniqueId);
					if (charged.length > 2) {
						charged.shift();
					}
				}
				_this.setState({ selectedCharge: charged });
			}
		}, _temp), movelist__possibleConstructorReturn(_this, _ret);
	}

	MoveList.prototype.render = function render(_ref2, _ref3) {
		var _this2 = this;

		var list = _ref2.list,
		    quickMoves = _ref2.quickMoves,
		    chargeMoves = _ref2.chargeMoves;
		var selectedFast = _ref3.selectedFast,
		    selectedCharge = _ref3.selectedCharge;

		var fastMove = void 0;
		if (selectedFast) {
			fastMove = list[selectedFast];
		}

		return Object(preact_min["h"])(
			'div',
			{ 'class': 'moves' },
			_ref4,
			quickMoves && Object(preact_min["h"])(
				'div',
				{ 'class': 'quick' },
				movelist__ref5,
				quickMoves.map(function (move) {
					return Object(preact_min["h"])(moves_QuickMove, {
						move: list[move],
						onSelect: _this2.onSelect,
						selected: selectedFast && move === selectedFast
					});
				}),
				_ref6
			),
			chargeMoves && Object(preact_min["h"])(
				'div',
				{ 'class': 'charge' },
				_ref7,
				chargeMoves.map(function (move) {
					return Object(preact_min["h"])(moves_ChargeMove, {
						move: list[move],
						onSelect: _this2.onSelect,
						selected: selectedCharge.indexOf(move) !== -1,
						fastEnergy: fastMove && fastMove.energyDelta
					});
				}),
				Object(preact_min["h"])(
					Typography_default.a,
					{ caption: true },
					'damage / energy / DPE ',
					fastMove && " (quick moves required)"
				)
			)
		);
	};

	return MoveList;
}(preact_min["Component"]);

/* harmony default export */ var movelist = (movelist_MoveList);
// EXTERNAL MODULE: ./components/stats/style.css
var stats_style = __webpack_require__("xjId");
var stats_style_default = /*#__PURE__*/__webpack_require__.n(stats_style);

// EXTERNAL MODULE: ../node_modules/preact-material-components/LayoutGrid/index.js
var LayoutGrid = __webpack_require__("Q1yZ");
var LayoutGrid_default = /*#__PURE__*/__webpack_require__.n(LayoutGrid);

// EXTERNAL MODULE: ../node_modules/preact-material-components/LayoutGrid/style.css
var LayoutGrid_style = __webpack_require__("JL9d");
var LayoutGrid_style_default = /*#__PURE__*/__webpack_require__.n(LayoutGrid_style);

// CONCATENATED MODULE: ./components/stats/index.js








var stats__ref2 = Object(preact_min["h"])(
	Typography_default.a,
	{ caption: true },
	'attack'
);

var stats__ref3 = Object(preact_min["h"])(
	Typography_default.a,
	{ caption: true },
	'defense'
);

var stats__ref4 = Object(preact_min["h"])(
	Typography_default.a,
	{ caption: true },
	'stamina'
);

var stats_Stats = function Stats(_ref) {
	var stats = _ref.stats;
	return Object(preact_min["h"])(
		'div',
		{ 'class': 'stats' },
		Object(preact_min["h"])(
			LayoutGrid_default.a,
			null,
			Object(preact_min["h"])(
				LayoutGrid_default.a.Inner,
				null,
				Object(preact_min["h"])(
					LayoutGrid_default.a.Cell,
					{ className: stats_style_default.a.stat, desktopCols: '4', phoneCols: '1' },
					Object(preact_min["h"])(
						'div',
						null,
						stats.baseAttack
					),
					stats__ref2
				),
				Object(preact_min["h"])(
					LayoutGrid_default.a.Cell,
					{ className: stats_style_default.a.stat, desktopCols: '4', phoneCols: '1' },
					Object(preact_min["h"])(
						'div',
						null,
						stats.baseDefense
					),
					stats__ref3
				),
				Object(preact_min["h"])(
					LayoutGrid_default.a.Cell,
					{ className: stats_style_default.a.stat, desktopCols: '4', phoneCols: '1' },
					Object(preact_min["h"])(
						'div',
						null,
						stats.baseStamina
					),
					stats__ref4
				)
			)
		)
	);
};

/* harmony default export */ var components_stats = (stats_Stats);
// EXTERNAL MODULE: ../node_modules/preact-material-components/Card/index.js
var Card = __webpack_require__("sJaT");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Card/style.css
var Card_style = __webpack_require__("UlEV");
var Card_style_default = /*#__PURE__*/__webpack_require__.n(Card_style);

// CONCATENATED MODULE: ./components/pokemon/index.js









var pokemon__ref2 = Object(preact_min["h"])(
	'span',
	null,
	'(Alolan)'
);

var pokemon_Pokemon = function Pokemon(_ref) {
	var id = _ref.id,
	    types = _ref.types,
	    moveList = _ref.moveList,
	    quickMoves = _ref.quickMoves,
	    stats = _ref.stats,
	    chargeMoves = _ref.chargeMoves,
	    alolan = _ref.alolan,
	    onChoose = _ref.onChoose,
	    chooseIcon = _ref.chooseIcon;
	return Object(preact_min["h"])(
		Card_default.a,
		{ 'class': pokemon_style_default.a.card },
		Object(preact_min["h"])(
			'div',
			{ 'class': 'card-header' },
			Object(preact_min["h"])(
				'h2',
				{ 'class': 'mdc-typography--title' },
				id,
				' ',
				alolan && pokemon__ref2
			),
			Object(preact_min["h"])(
				'div',
				{ 'class': 'types' },
				Object(preact_min["h"])(typeicon, { type: types[0] }),
				Object(preact_min["h"])(typeicon, { type: types[1] })
			)
		),
		Object(preact_min["h"])(components_stats, { stats: stats }),
		Object(preact_min["h"])(movelist, { quickMoves: quickMoves, chargeMoves: chargeMoves, list: moveList }),
		Object(preact_min["h"])(
			Card_default.a.Actions,
			null,
			Object(preact_min["h"])(
				Card_default.a.ActionIcons,
				null,
				Object(preact_min["h"])(
					Card_default.a.ActionIcon,
					{ onClick: function onClick() {
							return onChoose(id);
						} },
					chooseIcon
				)
			)
		)
	);
};

/* harmony default export */ var components_pokemon = (pokemon_Pokemon);
// CONCATENATED MODULE: ./components/pokemonlist/index.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function pokemonlist__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pokemonlist__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pokemonlist__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var pokemonlist_PokemonList = function (_Component) {
	pokemonlist__inherits(PokemonList, _Component);

	function PokemonList() {
		pokemonlist__classCallCheck(this, PokemonList);

		return pokemonlist__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	PokemonList.prototype.render = function render(_ref, _) {
		var pokemon = _ref.pokemon,
		    moves = _ref.moves,
		    onChoose = _ref.onChoose,
		    chooseIcon = _ref.chooseIcon;

		var list = [];
		for (var id in pokemon) {
			var p = pokemon[id];
			var types = [p.type, p.type2];
			p.types = types;
			list.push(p);
		}

		return Object(preact_min["h"])(
			'div',
			{ id: 'pokemonlist' },
			Object(preact_min["h"])(
				LayoutGrid_default.a,
				null,
				Object(preact_min["h"])(
					LayoutGrid_default.a.Inner,
					null,
					list.map(function (p) {
						return Object(preact_min["h"])(
							LayoutGrid_default.a.Cell,
							{ desktopCols: '3', tabletCols: '4', phoneCols: '4' },
							Object(preact_min["h"])(components_pokemon, _extends({
								id: p.pokemonId,
								moveList: moves,
								chargeMoves: p.cinematicMoves,
								onChoose: onChoose,
								chooseIcon: chooseIcon
							}, p))
						);
					})
				)
			)
		);
	};

	return PokemonList;
}(preact_min["Component"]);

/* harmony default export */ var pokemonlist = (pokemonlist_PokemonList);
// EXTERNAL MODULE: ./components/effectivenessmatrix/style.css
var effectivenessmatrix_style = __webpack_require__("nYpU");
var effectivenessmatrix_style_default = /*#__PURE__*/__webpack_require__.n(effectivenessmatrix_style);

// CONCATENATED MODULE: ./components/effectiveness/index.js



var effectiveness_Effectiveness = function Effectiveness(_ref) {
	var values = _ref.values;

	var average = 1;
	if (values.length) {
		var total = 0;
		for (var _iterator = values, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref2;

			if (_isArray) {
				if (_i >= _iterator.length) break;
				_ref2 = _iterator[_i++];
			} else {
				_i = _iterator.next();
				if (_i.done) break;
				_ref2 = _i.value;
			}

			var v = _ref2;

			total += v;
		}
		average = total / values.length;
		average = Math.round(average * 1000) / 1000;
	}
	return Object(preact_min["h"])(
		'div',
		null,
		average
	);
};

/* harmony default export */ var components_effectiveness = (effectiveness_Effectiveness);
// CONCATENATED MODULE: ./components/effectivenessmatrix/index.js


function effectivenessmatrix__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function effectivenessmatrix__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function effectivenessmatrix__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var effectivenessmatrix__ref3 = Object(preact_min["h"])(
	'h2',
	null,
	'Effectiveness'
);

var effectivenessmatrix_EffectivenessMatrix = function (_Component) {
	effectivenessmatrix__inherits(EffectivenessMatrix, _Component);

	function EffectivenessMatrix() {
		var _temp, _this, _ret;

		effectivenessmatrix__classCallCheck(this, EffectivenessMatrix);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = effectivenessmatrix__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.order = ['POKEMON_TYPE_NORMAL', 'POKEMON_TYPE_FIRE', 'POKEMON_TYPE_WATER', 'POKEMON_TYPE_ELECTRIC', 'POKEMON_TYPE_GRASS', 'POKEMON_TYPE_ICE', 'POKEMON_TYPE_FIGHTING', 'POKEMON_TYPE_POISON', 'POKEMON_TYPE_GROUND', 'POKEMON_TYPE_FLYING', 'POKEMON_TYPE_PSYCHIC', 'POKEMON_TYPE_BUG', 'POKEMON_TYPE_ROCK', 'POKEMON_TYPE_GHOST', 'POKEMON_TYPE_DRAGON', 'POKEMON_TYPE_DARK', 'POKEMON_TYPE_STEEL', 'POKEMON_TYPE_FAIRY'], _this.mapped = {
			POKEMON_TYPE_NORMAL: 0,
			POKEMON_TYPE_FIGHTING: 1,
			POKEMON_TYPE_FLYING: 2,
			POKEMON_TYPE_POISON: 3,
			POKEMON_TYPE_GROUND: 4,
			POKEMON_TYPE_ROCK: 5,
			POKEMON_TYPE_BUG: 6,
			POKEMON_TYPE_GHOST: 7,
			POKEMON_TYPE_STEEL: 8,
			POKEMON_TYPE_FIRE: 9,
			POKEMON_TYPE_WATER: 10,
			POKEMON_TYPE_GRASS: 11,
			POKEMON_TYPE_ELECTRIC: 12,
			POKEMON_TYPE_PSYCHIC: 13,
			POKEMON_TYPE_ICE: 14,
			POKEMON_TYPE_DRAGON: 15,
			POKEMON_TYPE_DARK: 16,
			POKEMON_TYPE_FAIRY: 17
		}, _this.state = {
			effectiveness: {}
		}, _temp), effectivenessmatrix__possibleConstructorReturn(_this, _ret);
	}

	EffectivenessMatrix.prototype.render = function render(_ref) {
		var pokemon = _ref.pokemon,
		    effectiveness = _ref.effectiveness;

		var defender = {
			POKEMON_TYPE_NORMAL: [],
			POKEMON_TYPE_FIRE: [],
			POKEMON_TYPE_WATER: [],
			POKEMON_TYPE_ELECTRIC: [],
			POKEMON_TYPE_GRASS: [],
			POKEMON_TYPE_ICE: [],
			POKEMON_TYPE_FIGHTING: [],
			POKEMON_TYPE_POISON: [],
			POKEMON_TYPE_GROUND: [],
			POKEMON_TYPE_FLYING: [],
			POKEMON_TYPE_PSYCHIC: [],
			POKEMON_TYPE_BUG: [],
			POKEMON_TYPE_ROCK: [],
			POKEMON_TYPE_GHOST: [],
			POKEMON_TYPE_DRAGON: [],
			POKEMON_TYPE_DARK: [],
			POKEMON_TYPE_STEEL: [],
			POKEMON_TYPE_FAIRY: []
		};

		for (var name in pokemon) {
			var p = pokemon[name];
			for (var attacker in effectiveness) {
				var e = 1;
				for (var _iterator = p.types, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
					var _ref2;

					if (_isArray) {
						if (_i >= _iterator.length) break;
						_ref2 = _iterator[_i++];
					} else {
						_i = _iterator.next();
						if (_i.done) break;
						_ref2 = _i.value;
					}

					var type = _ref2;

					if (type == undefined) continue;
					e *= effectiveness[attacker].attackScalar[this.mapped[type]];
				}
				defender[attacker].push(e);
			}
		}

		return Object(preact_min["h"])(
			'div',
			{ 'class': 'effectiveness' },
			effectivenessmatrix__ref3,
			Object(preact_min["h"])(
				LayoutGrid_default.a,
				null,
				Object(preact_min["h"])(
					LayoutGrid_default.a.Inner,
					null,
					this.order.map(function (type) {
						return Object(preact_min["h"])(
							LayoutGrid_default.a.Cell,
							{ desktopCols: '4', tabletCols: '4', phoneCols: '1', className: effectivenessmatrix_style_default.a.effectiveness },
							Object(preact_min["h"])(typeicon, { type: type }),
							Object(preact_min["h"])(components_effectiveness, { values: defender[type] })
						);
					})
				)
			)
		);
	};

	return EffectivenessMatrix;
}(preact_min["Component"]);

/* harmony default export */ var effectivenessmatrix = (effectivenessmatrix_EffectivenessMatrix);
// EXTERNAL MODULE: ../node_modules/styled-loaders/lib/index.js
var lib = __webpack_require__("S3g6");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./components/pokedex/index.js


function pokedex__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pokedex__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pokedex__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var gmVersionURL = 'https://raw.githubusercontent.com/pokemongo-dev-contrib/pokemongo-game-master/master/versions/latest-version.txt';
var gmURL = 'https://raw.githubusercontent.com/pokemongo-dev-contrib/pokemongo-game-master/master/versions/%s/GAME_MASTER.json';

var pokedex__ref6 = Object(preact_min["h"])(lib["Circular"], null);

var pokedex_Pokedex = function (_Component) {
	pokedex__inherits(Pokedex, _Component);

	function Pokedex() {
		var _temp, _this, _ret;

		pokedex__classCallCheck(this, Pokedex);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = pokedex__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
			loading: true,
			filter: "",
			selected: {}
		}, _this.checkForUpdate = function (version) {
			_this.setState({ version: version });

			if (!localStorage.version || localStorage.version != version) {
				console.info('downloading new gamemaster.json...');
				fetch(gmURL.replace('%s', version)).then(function (data) {
					return data.json().then(function (j) {
						return _this.updateGamemaster(j);
					});
				});
			} else {
				_this.loadGamemaster();
			}
		}, _this.updateGamemaster = function (gm) {
			var pokemon = {},
			    moves = {},
			    effectiveness = {},
			    unknowns = [];

			for (var _iterator = gm.itemTemplates, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
				var _ref;

				if (_isArray) {
					if (_i >= _iterator.length) break;
					_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) break;
					_ref = _i.value;
				}

				var entry = _ref;

				var tid = entry.templateId;

				var _tid$split = tid.split('_'),
				    type = _tid$split[0];

				switch (type) {
					case 'AVATAR':
					case 'BACKGROUND':
					case 'BADGE':
					case 'BATTLE':
					case 'BELUGA':
					case 'CHARACTER':
					case 'ENCOUNTER':
					case 'EX':
					case 'FORMS':
					case 'FRIENDSHIP':
					case 'GYM':
					case 'IAP':
					case 'ITEM':
					case 'LUCKY':
					case 'ONBOARDING':
					case 'PARTY':
					case 'PLAYER':
					case 'POKECOIN':
					case 'QUEST':
					case 'SMEARGLE':
					case 'SPAWN':
					case 'TRAINER':
					case 'WEATHER':
					case 'adventure':
					case 'bundle.general1.large.1':
					case 'bundle.general3.large.1':
					case 'camera':
					case 'incenseordinary.8':
					case 'sequence':
						break;
					case 'COMBAT':
						if (tid.startsWith('COMBAT_LEAGUE')) break;
						if (tid.startsWith('COMBAT_POKEMON_TYPE')) break;
						if (tid.startsWith('COMBAT_SETTINGS')) break;
						if (tid.startsWith('COMBAT_STAT_STAGE_SETTINGS')) break;

						var combatMove = entry.combatMove;

						if (combatMove) {
							moves[combatMove.uniqueId] = combatMove;
						}
						break;
					case 'POKEMON':
						if (!tid.startsWith('POKEMON_TYPE')) break;
						var typeEffective = entry.typeEffective;

						if (typeEffective) {
							effectiveness[typeEffective.attackType] = typeEffective;
						}
						break;
					default:
						if (!tid.startsWith('V')) {
							unknowns.push(type);
							break;
						}
						var pokemonSettings = entry.pokemonSettings;

						if (pokemonSettings) {
							var _name = pokemonSettings.pokemonId;
							pokemonSettings.alolan = false;
							if (tid.endsWith('ALOLA')) {
								_name = tid.substr(14);
								pokemonSettings.alolan = true;
							}
							pokemonSettings.dexNumber = Number(type.substr(1));
							pokemonSettings.types = [pokemonSettings.type];
							if (pokemonSettings.hasOwnProperty('type2')) {
								pokemonSettings.types.push(pokemonSettings.type2);
							}
							pokemon[_name] = pokemonSettings;
						}
				}
			}

			if (unknowns.length != 0) {
				var set = [].concat(new Set(unknowns));
				console.error('there were errors!\n\nunknown types:\n' + set.join('\n'));
			}

			var parsedPokemon = JSON.stringify(pokemon);
			var parsedMoves = JSON.stringify(moves);
			var parsedEffectiveness = JSON.stringify(effectiveness);
			localStorage.setItem('pokemon', parsedPokemon);
			localStorage.setItem('moves', parsedMoves);
			localStorage.setItem('effectiveness', parsedEffectiveness);
			localStorage.setItem('version', _this.state.version);

			var filtered = pokemon;
			var selected = JSON.parse(localStorage.getItem('selected')) || {};
			for (var name in selected) {
				delete filtered[name];
			}

			_this.setState({
				pokemon: pokemon,
				filtered: pokemon,
				moves: moves,
				effectiveness: effectiveness,
				selected: selected,
				loading: false
			});
		}, _this.loadGamemaster = function () {
			var p = JSON.parse(localStorage.getItem('pokemon')),
			    selected = JSON.parse(localStorage.getItem('selected')) || {};
			var filtered = p;

			for (var name in selected) {
				delete filtered[name];
			}

			_this.setState({
				pokemon: p,
				filtered: p,
				selected: selected,
				moves: JSON.parse(localStorage.getItem('moves')),
				effectiveness: JSON.parse(localStorage.getItem('effectiveness')),
				loading: false
			});
		}, _this.idRegexp = /^(\d*)(-?)(\d*)$/, _this.filterPokemon = function (text) {
			_this.setState({ filter: text });
			_this.calculateFiltered();
		}, _this.calculateFiltered = function () {
			var filtered = {};

			/*
    * For each Pokemon, split a,b&c into a,b and c (two conditions)
    * For each condition, if any clause (ie a and b) are true, pass
    * and break.
    * If any condition fails, the Pokemon is filtered out. Otherwise,
    * it passes.
    */
			pokemonLoop: for (var name in _this.state.pokemon) {
				var pokemon = _this.state.pokemon[name],
				    conditions = _this.state.filter.split('&');

				for (var _iterator2 = conditions, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
					var _ref2;

					if (_isArray2) {
						if (_i2 >= _iterator2.length) break;
						_ref2 = _iterator2[_i2++];
					} else {
						_i2 = _iterator2.next();
						if (_i2.done) break;
						_ref2 = _i2.value;
					}

					var condition = _ref2;

					var clauses = condition.split(','),
					    passed = false;

					clauseLoop: for (var _iterator3 = clauses, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
						var _ref3;

						if (_isArray3) {
							if (_i3 >= _iterator3.length) break;
							_ref3 = _iterator3[_i3++];
						} else {
							_i3 = _iterator3.next();
							if (_i3.done) break;
							_ref3 = _i3.value;
						}

						var clause = _ref3;

						var not = false;

						if (clause.charAt(0) == '!') {
							not = true;
							clause = clause.substr(1);
						}

						// -151, 252-, etc
						var dexMatches = _this.idRegexp.exec(clause);
						if (dexMatches && dexMatches[0] != "") {
							var start = -1,
							    end = -1;

							if (dexMatches[1] != "") {
								start = Number(dexMatches[1]);
							}
							if (dexMatches[3] != "") {
								end = Number(dexMatches[3]);
							}

							if (dexMatches[2] == "-") {
								if (start == -1) {
									start = 1;
								}
								if (end == -1) {
									end = 9999;
								}
							}

							// looking for a specific entry
							if (dexMatches[2] == "") {
								if (start == pokemon.dexNumber) {
									if (not) {
										continue;
									}
									passed = true;
									break;
								}

								// if it didn't match but is a not, it's right!
								if (not) {
									passed = true;
									break;
								}
								continue;
							}

							if (start != -1) {
								if (pokemon.dexNumber < start && !not) {
									continue;
								}
								if (pokemon.dexNumber > start && not) {
									continue;
								}
							}

							if (end != -1) {
								if (pokemon.dexNumber > end && !not) {
									continue;
								}
								if (pokemon.dexNumber < end && not) {
									continue;
								}
							}

							passed = true;
							break;
						}

						clause = clause.toUpperCase();

						if (clause == 'ALOLA') {
							if (not) {
								if (pokemon.alolan) {
									continue;
								}
								passed = true;
								break;
							}

							if (pokemon.alolan) {
								passed = true;
								break;
							}
							continue;
						}

						// TODO: flying&!fire correctly excludes zard
						//       fire&!flying does not
						for (var _iterator4 = pokemon.types, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
							var _ref4;

							if (_isArray4) {
								if (_i4 >= _iterator4.length) break;
								_ref4 = _iterator4[_i4++];
							} else {
								_i4 = _iterator4.next();
								if (_i4.done) break;
								_ref4 = _i4.value;
							}

							var type = _ref4;

							var parsedType = 'POKEMON_TYPE_' + clause;
							if (type == parsedType) {
								if (not) {
									continue clauseLoop;
								}
								passed = true;
								break clauseLoop;
							} else if (not && _this.state.effectiveness.hasOwnProperty(parsedType)) {
								passed = true;
								break clauseLoop;
							}
						}

						// search by name (doesn't handle not)
						if (pokemon.pokemonId.indexOf(clause) != -1) {
							passed = true;
							break;
						}
					}

					if (!passed) {
						continue pokemonLoop;
					}
				}
				filtered[name] = pokemon;
			}
			_this.setState({ filtered: filtered });
		}, _this.hoist = function (id) {
			var _this$state = _this.state,
			    selected = _this$state.selected,
			    filtered = _this$state.filtered,
			    pokemon = _this$state.pokemon;

			selected[id] = pokemon[id];
			delete filtered[id];
			localStorage.setItem('selected', JSON.stringify(selected));
			_this.setState({ selected: selected, filtered: filtered });
		}, _this.unhoist = function (id) {
			var selected = _this.state.selected;

			delete selected[id];
			localStorage.setItem('selected', JSON.stringify(selected));
			_this.setState({ selected: selected });
			_this.calculateFiltered();
		}, _temp), pokedex__possibleConstructorReturn(_this, _ret);
	}

	Pokedex.prototype.componentDidMount = function componentDidMount() {
		var _this2 = this;

		fetch(gmVersionURL).then(function (data) {
			return data.text().then(function (v) {
				return _this2.checkForUpdate(v);
			});
		});
	};

	Pokedex.prototype.render = function render(_, _ref5) {
		var moves = _ref5.moves,
		    effectiveness = _ref5.effectiveness,
		    filtered = _ref5.filtered,
		    selected = _ref5.selected,
		    loading = _ref5.loading;

		return Object(preact_min["h"])(
			'div',
			null,
			Object(preact_min["h"])(
				LayoutGrid_default.a,
				null,
				Object(preact_min["h"])(
					LayoutGrid_default.a.Inner,
					null,
					Object(preact_min["h"])(
						LayoutGrid_default.a.Cell,
						{ desktopCols: '2', tabletCols: '2', phoneCols: '4' },
						Object(preact_min["h"])(effectivenessmatrix, { pokemon: selected, effectiveness: effectiveness })
					),
					Object(preact_min["h"])(
						LayoutGrid_default.a.Cell,
						{ desktopCols: '10', tabletCols: '6', phoneCols: '4' },
						Object.keys(selected).length > 0 && Object(preact_min["h"])(pokemonlist, { pokemon: selected, moves: moves, onChoose: this.unhoist, chooseIcon: 'remove_circle' }),
						Object(preact_min["h"])(filters, { filterPokemon: this.filterPokemon }),
						loading && pokedex__ref6 || Object(preact_min["h"])(pokemonlist, { pokemon: filtered, moves: moves, onChoose: this.hoist, chooseIcon: 'add_circle' })
					)
				)
			)
		);
	};

	return Pokedex;
}(preact_min["Component"]);

/* harmony default export */ var pokedex = (pokedex_Pokedex);
// CONCATENATED MODULE: ./routes/home/index.js





var home__ref = Object(preact_min["h"])(pokedex, null);

var home_Home = function Home() {
	return Object(preact_min["h"])(
		'div',
		{ 'class': home_style_default.a.home },
		home__ref
	);
};

/* harmony default export */ var home = (home_Home);
// CONCATENATED MODULE: ./components/app.js


function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






// Code-splitting is automated for routes


var app__ref = Object(preact_min["h"])(header, null);

var app__ref2 = Object(preact_min["h"])(home, { path: '/' });

var app_App = function (_Component) {
	app__inherits(App, _Component);

	function App() {
		var _temp, _this, _ret;

		app__classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = app__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleRoute = function (e) {
			_this.currentUrl = e.url;
		}, _temp), app__possibleConstructorReturn(_this, _ret);
	}
	/** Gets fired when the route changes.
  *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
  *	@param {string} event.url	The newly routed URL
  */


	App.prototype.render = function render() {
		return Object(preact_min["h"])(
			'div',
			{ id: 'app' },
			app__ref,
			Object(preact_min["h"])(
				preact_router_es["Router"],
				{ onChange: this.handleRoute },
				app__ref2
			)
		);
	};

	return App;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js




/* harmony default export */ var index = __webpack_exports__["default"] = (app_App);

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = W;for (i = arguments.length; i-- > 2;) {
      P.push(arguments[i]);
    }t && null != t.children && (P.length || P.push(t.children), delete t.children);while (P.length) {
      if ((o = P.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        P.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === W ? l = [o] : l.push(o), n = r;
    }var a = new T();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== M.vnode && M.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(e, t) {
    e && ("function" == typeof e ? e(t) : e.current = t);
  }function o(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == V.push(e) && (M.debounceRendering || D)(i);
  }function i() {
    var e;while (e = V.pop()) {
      e.__d && x(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function c(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function s(e, t, o, r, i) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n(o, null), n(r, e);else if ("class" !== t || i) {
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof o) for (var l in o) {
            l in r || (e.style[l] = "");
          }for (var l in r) {
            e.style[l] = "number" == typeof r[l] && !1 === E.test(l) ? r[l] + "px" : r[l];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var a = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, a) : e.removeEventListener(t, _, a), (e.__l || (e.__l = {}))[t] = r;
      } else if ("list" !== t && "type" !== t && !i && t in e) {
        try {
          e[t] = null == r ? "" : r;
        } catch (e) {}null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var u = i && t !== (t = t.replace(/^xlink:?/, ""));null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
      }
    } else e.className = r || "";
  }function _(e) {
    return this.__l[e.type](M.event && M.event(e) || e);
  }function f() {
    var e;while (e = A.shift()) {
      M.afterMount && M.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, B = null != e && !("__preactattr_" in e));var l = h(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (B = !1, i || f()), l;
  }function h(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return N(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = c(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0);
    }var p = i.firstChild,
        s = i.__preactattr_,
        _ = t.children;if (null == s) {
      s = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        s[f[d].name] = f[d].value;
      }
    }return !B && _ && 1 === _.length && "string" == typeof _[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != _[0] && (p.nodeValue = _[0]) : (_ && _.length || null != p) && m(i, _, n, o, B || null != s.dangerouslySetInnerHTML), y(i, t.attributes, s), R = l, i;
  }function m(e, t, n, o, r) {
    var i,
        a,
        u,
        c,
        s,
        _ = e.childNodes,
        f = [],
        d = {},
        m = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (m++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      c = t[C], s = null;var k = c.key;if (null != k) m && void 0 !== d[k] && (s = d[k], d[k] = void 0, m--);else if (b < g) for (i = b; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], c, r)) {
          s = a, f[i] = void 0, i === g - 1 && g--, i === b && b++;break;
        }
      }s = h(s, c, n, o), u = _[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u));
    }if (m) for (var C in d) {
      void 0 !== d[C] && v(d[C], !1);
    }while (b <= g) {
      void 0 !== (s = f[g--]) && v(s, !1);
    }
  }function v(e, t) {
    var o = e._component;o ? k(o) : (null != e.__preactattr_ && n(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || p(e), b(e));
  }function b(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;v(e, !0), e = t;
    }
  }function y(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || s(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || s(e, o, n[o], n[o] = t[o], R);
    }
  }function g(e, t, n) {
    var o,
        r = F.length;e.prototype && e.prototype.render ? (o = new e(t, n), U.call(o, t, n)) : (o = new U(t, n), o.constructor = e, o.render = w);while (r--) {
      if (F[r].constructor === e) return o.__b = F[r].__b, F.splice(r, 1), o;
    }return o;
  }function w(e, t, n) {
    return this.constructor(e, n);
  }function C(e, t, o, i, l) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || l ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.__c || (e.__c = e.context), e.context = i), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== o && (1 !== o && !1 === M.syncComponentUpdates && e.base ? r(e) : x(e, 1, l)), n(e.__r, e));
  }function x(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          c = e.props,
          p = e.state,
          s = e.context,
          _ = e.__p || c,
          h = e.__s || p,
          m = e.__c || s,
          b = e.base,
          y = e.__b,
          w = b || y,
          N = e._component,
          U = !1,
          S = m;if (e.constructor.getDerivedStateFromProps && (p = t(t({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), b && (e.props = _, e.state = h, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, s) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, s), e.props = c, e.state = p, e.context = s), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(c, p, s), e.getChildContext && (s = t(t({}, s), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(_, h));var L,
            T,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = u(i);l = N, l && l.constructor === P && W.key == l.__k ? C(l, W, 1, s, !1) : (L = l, e._component = l = g(P, W, s), l.__b = l.__b || y, l.__u = e, C(l, W, 0, s, !1), x(l, 1, o, !0)), T = l.base;
        } else a = w, L = N, L && (a = e._component = null), (w || 1 === n) && (a && (a._component = null), T = d(a, i, s, o || !b, w && w.parentNode, !0));if (w && T !== w && l !== N) {
          var D = w.parentNode;D && T !== D && (D.replaceChild(T, w), L || (w._component = null, v(w, !1)));
        }if (L && k(L), e.base = T, T && !r) {
          var E = e,
              V = e;while (V = V.__u) {
            (E = V).base = T;
          }T._component = E, T._componentConstructor = E.constructor;
        }
      }!b || o ? A.push(e) : U || (e.componentDidUpdate && e.componentDidUpdate(_, h, S), M.afterUpdate && M.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || f();
    }
  }function N(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        c = a,
        p = u(t);while (r && !c && (r = r.__u)) {
      c = r.constructor === t.nodeName;
    }return r && c && (!o || r._component) ? (C(r, p, 3, n, o), e = r.base) : (i && !a && (k(i), e = l = null), r = g(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), C(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, v(l, !1))), e;
  }function k(e) {
    M.beforeUnmount && M.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var o = e._component;o ? k(o) : t && (null != t.__preactattr_ && n(t.__preactattr_.ref, null), e.__b = t, p(t), F.push(e), b(t)), n(e.__r, null);
  }function U(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function S(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }function L() {
    return {};
  }var T = function T() {},
      M = {},
      P = [],
      W = [],
      D = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      V = [],
      A = [],
      H = 0,
      R = !1,
      B = !1,
      F = [];t(U.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), x(this, 2);
    }, render: function render() {} });var j = { h: e, createElement: e, cloneElement: o, createRef: L, Component: U, render: S, rerender: i, options: M }; true ? module.exports = j : self.preact = j;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "MeGi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Icon = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _preact = __webpack_require__("KM04");

var _MaterialComponent2 = _interopRequireDefault(__webpack_require__("uc5p"));

var Icon =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Icon, _MaterialComponent);

  function Icon() {
    var _this;

    (0, _classCallCheck2.default)(this, Icon);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
    _this.componentName = 'icon';
    _this.mdcProps = [];
    return _this;
  }

  (0, _createClass2.default)(Icon, [{
    key: "materialDom",
    value: function materialDom(props) {
      var classes = ['material-icons']; // CardActionIcon sends className

      if (props.className) {
        classes.push(props.className);
      }

      return (0, _preact.h)("i", _extends({}, props, {
        className: classes.join(' ')
      }), props.children);
    }
  }]);
  return Icon;
}(_MaterialComponent2.default);

exports.Icon = Icon;
var _default = Icon;
exports.default = _default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "N9d+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getSize = exports.getSize = function getSize(size) {
  return size || '40px';
};

var getColor = exports.getColor = function getColor(color) {
  return color || '#333';
};

/***/ }),

/***/ "P8NW":
/***/ (function(module, exports) {

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

module.exports = _createClass;

/***/ }),

/***/ "Q1yZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LayoutGrid = exports.LayoutGridCell = exports.LayoutGridInner = void 0;

var _get2 = _interopRequireDefault(__webpack_require__("J5U+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _preact = __webpack_require__("KM04");

var _MaterialComponent4 = _interopRequireDefault(__webpack_require__("uc5p"));

var LayoutGridInner =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(LayoutGridInner, _MaterialComponent);

  function LayoutGridInner() {
    var _this;

    (0, _classCallCheck2.default)(this, LayoutGridInner);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LayoutGridInner).apply(this, arguments));
    _this.componentName = 'layout-grid__inner';
    _this.mdcProps = [];
    return _this;
  }

  (0, _createClass2.default)(LayoutGridInner, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({
        ref: this.setControlRef
      }, props), props.children);
    }
  }]);
  return LayoutGridInner;
}(_MaterialComponent4.default);

exports.LayoutGridInner = LayoutGridInner;

var LayoutGridCell =
/*#__PURE__*/
function (_MaterialComponent2) {
  (0, _inherits2.default)(LayoutGridCell, _MaterialComponent2);

  function LayoutGridCell() {
    var _this2;

    (0, _classCallCheck2.default)(this, LayoutGridCell);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LayoutGridCell).apply(this, arguments));
    _this2.componentName = 'layout-grid__cell';
    _this2.mdcProps = [];
    return _this2;
  }

  (0, _createClass2.default)(LayoutGridCell, [{
    key: "render",
    value: function render(props) {
      var element = (0, _get2.default)((0, _getPrototypeOf2.default)(LayoutGridCell.prototype), "render", this).call(this, props); // remove the extra attributes used for customising this element - keep the DOM clean

      Object.keys(LayoutGridCell.propsDict).forEach(function (key) {
        return delete element.attributes[LayoutGridCell.propsDict[key]];
      });
      return element;
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({}, props, {
        className: LayoutGridCell.createClassName(props),
        ref: this.setControlRef
      }), props.children);
    }
  }], [{
    key: "createClassName",
    value: function createClassName(props) {
      var baseClass = 'mdc-layout-grid__cell--';
      var classes = [];

      if (props[LayoutGridCell.propsDict.cols]) {
        classes.push("".concat(baseClass, "span-").concat(props[LayoutGridCell.propsDict.cols]));
      }

      if (props[LayoutGridCell.propsDict.desktop]) {
        classes.push("".concat(baseClass, "span-").concat(props[LayoutGridCell.propsDict.desktop], "-desktop"));
      }

      if (props[LayoutGridCell.propsDict.tablet]) {
        classes.push("".concat(baseClass, "span-").concat(props[LayoutGridCell.propsDict.tablet], "-tablet"));
      }

      if (props[LayoutGridCell.propsDict.phone]) {
        classes.push("".concat(baseClass, "span-").concat(props[LayoutGridCell.propsDict.phone], "-phone"));
      }

      if (props[LayoutGridCell.propsDict.order]) {
        classes.push("".concat(baseClass, "order-").concat(props[LayoutGridCell.propsDict.order]));
      }

      if (props[LayoutGridCell.propsDict.align]) {
        classes.push("".concat(baseClass, "align-").concat(props[LayoutGridCell.propsDict.align]));
      }

      return classes.join(' ');
    }
  }]);
  return LayoutGridCell;
}(_MaterialComponent4.default);

exports.LayoutGridCell = LayoutGridCell;
LayoutGridCell.propsDict = {
  align: 'align',
  cols: 'cols',
  desktop: 'desktopCols',
  order: 'order',
  phone: 'phoneCols',
  tablet: 'tabletCols'
};

var LayoutGrid =
/*#__PURE__*/
function (_MaterialComponent3) {
  (0, _inherits2.default)(LayoutGrid, _MaterialComponent3);

  function LayoutGrid() {
    var _this3;

    (0, _classCallCheck2.default)(this, LayoutGrid);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LayoutGrid).apply(this, arguments));
    _this3.componentName = 'layout-grid';
    _this3.mdcProps = [];
    return _this3;
  }

  (0, _createClass2.default)(LayoutGrid, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({
        ref: this.setControlRef
      }, props), props.children);
    }
  }]);
  return LayoutGrid;
}(_MaterialComponent4.default);

exports.LayoutGrid = LayoutGrid;

var default_1 =
/*#__PURE__*/
function (_LayoutGrid) {
  (0, _inherits2.default)(default_1, _LayoutGrid);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(LayoutGrid);

exports.default = default_1;
default_1.Cell = LayoutGridCell;
default_1.Inner = LayoutGridInner;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "QTRl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(prop) {
  return "mdc-theme--".concat(prop, "-bg");
}
//# sourceMappingURL=generateThemeClass.js.map

/***/ }),

/***/ "RIGE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
			value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t\tmargin: 100px auto 0;\n\t\tposition: relative;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\ttext-align: center;\n\t'], ['\n\t\tmargin: 100px auto 0;\n\t\tposition: relative;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\ttext-align: center;\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\tborder-radius: 100%;\n\t\tdisplay: inline-block;\n\t\tbackground-color: ', ';\n\t\tanimation: ', ' 1.4s infinite ease-in-out both;\n\t\tanimation-duration: ', ';\n\t'], ['\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\tborder-radius: 100%;\n\t\tdisplay: inline-block;\n\t\tbackground-color: ', ';\n\t\tanimation: ', ' 1.4s infinite ease-in-out both;\n\t\tanimation-duration: ', ';\n\t']),
    _templateObject3 = _taggedTemplateLiteral([' animation-delay: -0.32s; '], [' animation-delay: -0.32s; ']),
    _templateObject4 = _taggedTemplateLiteral([' animation-delay: -0.16s; '], [' animation-delay: -0.16s; ']);

var _preact = __webpack_require__("KM04");

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__("X5xa");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = __webpack_require__("ockL");

var _defaults = __webpack_require__("N9d+");

function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
			return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var DotScale = function DotScale(_ref) {
			var color = _ref.color,
			    duration = _ref.duration,
			    size = _ref.size,
			    dotSize = _ref.dotSize;

			var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size));

			var DefaultDot = _styledComponents2.default.div(_templateObject2, function (props) {
						return props.dotSize ? props.dotSize : '18px';
			}, function (props) {
						return props.dotSize ? props.dotSize : '18px';
			}, (0, _defaults.getColor)(color), _animations.dots, function (props) {
						return props.duration ? props.duration : '1.4s';
			});

			var Dot1 = DefaultDot.extend(_templateObject3);

			var Dot2 = DefaultDot.extend(_templateObject4);

			return (0, _preact.h)(Spinner, { size: size }, (0, _preact.h)(Dot1, { color: color, duration: duration, dotSize: dotSize }), (0, _preact.h)(Dot2, { color: color, duration: duration, dotSize: dotSize }));
};

exports.default = DotScale;

DotScale.propTypes = {

			/**
   * Background of the spinner
   * default is #333
   */
			color: _propTypes2.default.string,

			/**
   * Animation duration
   * default is 1.2s
   */
			duration: _propTypes2.default.string,

			/**
   * Size of the spinner
   * default is 40px
   */
			size: _propTypes2.default.string,

			/**
   * Size of the dots
   * default is 18px
   */
			dotSize: _propTypes2.default.string
};

/***/ }),

/***/ "S3g6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Block = __webpack_require__("yZsP");

Object.defineProperty(exports, 'Block', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Block).default;
  }
});

var _Circular = __webpack_require__("sFuf");

Object.defineProperty(exports, 'Circular', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Circular).default;
  }
});

var _Cube = __webpack_require__("jRlo");

Object.defineProperty(exports, 'Cube', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Cube).default;
  }
});

var _CubeGrid = __webpack_require__("F1hR");

Object.defineProperty(exports, 'CubeGrid', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CubeGrid).default;
  }
});

var _DotScale = __webpack_require__("RIGE");

Object.defineProperty(exports, 'DotScale', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DotScale).default;
  }
});

var _Pulsate = __webpack_require__("CGSF");

Object.defineProperty(exports, 'Pulsate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Pulsate).default;
  }
});

var _RotateScale = __webpack_require__("YQHG");

Object.defineProperty(exports, 'RotateScale', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RotateScale).default;
  }
});

var _Scale = __webpack_require__("sdYp");

Object.defineProperty(exports, 'Scale', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Scale).default;
  }
});

var _Stretch = __webpack_require__("yarR");

Object.defineProperty(exports, 'Stretch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Stretch).default;
  }
});

var _Bar = __webpack_require__("+GgV");

Object.defineProperty(exports, 'Bar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Bar).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/***/ }),

/***/ "SpGf":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "U9d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

/***/ }),

/***/ "UJE0":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "UlEV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VcCu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/@material/base/component.js
var component = __webpack_require__("EQDb");

// EXTERNAL MODULE: ../node_modules/@material/ripple/index.js + 3 modules
var ripple = __webpack_require__("vkNc");

// EXTERNAL MODULE: ../node_modules/@material/ripple/util.js
var util = __webpack_require__("joOv");

// CONCATENATED MODULE: ../node_modules/@material/textfield/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var strings = {
  ARIA_CONTROLS: 'aria-controls',
  INPUT_SELECTOR: '.mdc-text-field__input',
  LABEL_SELECTOR: '.mdc-floating-label',
  ICON_SELECTOR: '.mdc-text-field__icon',
  OUTLINE_SELECTOR: '.mdc-notched-outline',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple'
};

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-text-field',
  DISABLED: 'mdc-text-field--disabled',
  DENSE: 'mdc-text-field--dense',
  FOCUSED: 'mdc-text-field--focused',
  INVALID: 'mdc-text-field--invalid',
  TEXTAREA: 'mdc-text-field--textarea',
  OUTLINED: 'mdc-text-field--outlined'
};

/** @enum {number} */
var numbers = {
  LABEL_SCALE: 0.75,
  DENSE_LABEL_SCALE: 0.923
};

// whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
// under section: `Validation-related attributes`
var VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];

// Label should always float for these types as they show some UI even if value is empty.
var ALWAYS_FLOAT_TYPES = ['color', 'date', 'datetime-local', 'month', 'range', 'time', 'week'];


// EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
var base_foundation = __webpack_require__("uJAj");

// CONCATENATED MODULE: ../node_modules/@material/textfield/helper-text/adapter.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Text Field Helper Text.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the TextField helper text into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTextFieldHelperTextAdapter = function () {
  function MDCTextFieldHelperTextAdapter() {
    _classCallCheck(this, MDCTextFieldHelperTextAdapter);
  }

  /**
   * Adds a class to the helper text element.
   * @param {string} className
   */
  MDCTextFieldHelperTextAdapter.prototype.addClass = function addClass(className) {};

  /**
   * Removes a class from the helper text element.
   * @param {string} className
   */


  MDCTextFieldHelperTextAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * Returns whether or not the helper text element contains the given class.
   * @param {string} className
   * @return {boolean}
   */


  MDCTextFieldHelperTextAdapter.prototype.hasClass = function hasClass(className) {};

  /**
   * Sets an attribute with a given value on the helper text element.
   * @param {string} attr
   * @param {string} value
   */


  MDCTextFieldHelperTextAdapter.prototype.setAttr = function setAttr(attr, value) {};

  /**
   * Removes an attribute from the helper text element.
   * @param {string} attr
   */


  MDCTextFieldHelperTextAdapter.prototype.removeAttr = function removeAttr(attr) {};

  /**
   * Sets the text content for the helper text element.
   * @param {string} content
   */


  MDCTextFieldHelperTextAdapter.prototype.setContent = function setContent(content) {};

  return MDCTextFieldHelperTextAdapter;
}();

/* harmony default export */ var helper_text_adapter = (MDCTextFieldHelperTextAdapter);
// CONCATENATED MODULE: ../node_modules/@material/textfield/helper-text/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var constants_strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role'
};

/** @enum {string} */
var constants_cssClasses = {
  HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg'
};


// CONCATENATED MODULE: ../node_modules/@material/textfield/helper-text/foundation.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCFoundation<!MDCTextFieldHelperTextAdapter>}
 * @final
 */

var foundation_MDCTextFieldHelperTextFoundation = function (_MDCFoundation) {
  _inherits(MDCTextFieldHelperTextFoundation, _MDCFoundation);

  _createClass(MDCTextFieldHelperTextFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return constants_cssClasses;
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return constants_strings;
    }

    /**
     * {@see MDCTextFieldHelperTextAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTextFieldHelperTextAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTextFieldHelperTextAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          setAttr: function setAttr() {},
          removeAttr: function removeAttr() {},
          setContent: function setContent() {}
        }
      );
    }

    /**
     * @param {!MDCTextFieldHelperTextAdapter} adapter
     */

  }]);

  function MDCTextFieldHelperTextFoundation(adapter) {
    foundation__classCallCheck(this, MDCTextFieldHelperTextFoundation);

    return _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)));
  }

  /**
   * Sets the content of the helper text field.
   * @param {string} content
   */


  MDCTextFieldHelperTextFoundation.prototype.setContent = function setContent(content) {
    this.adapter_.setContent(content);
  };

  /** @param {boolean} isPersistent Sets the persistency of the helper text. */


  MDCTextFieldHelperTextFoundation.prototype.setPersistent = function setPersistent(isPersistent) {
    if (isPersistent) {
      this.adapter_.addClass(constants_cssClasses.HELPER_TEXT_PERSISTENT);
    } else {
      this.adapter_.removeClass(constants_cssClasses.HELPER_TEXT_PERSISTENT);
    }
  };

  /**
   * @param {boolean} isValidation True to make the helper text act as an
   *   error validation message.
   */


  MDCTextFieldHelperTextFoundation.prototype.setValidation = function setValidation(isValidation) {
    if (isValidation) {
      this.adapter_.addClass(constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
    } else {
      this.adapter_.removeClass(constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
    }
  };

  /** Makes the helper text visible to the screen reader. */


  MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function showToScreenReader() {
    this.adapter_.removeAttr(constants_strings.ARIA_HIDDEN);
  };

  /**
   * Sets the validity of the helper text based on the input validity.
   * @param {boolean} inputIsValid
   */


  MDCTextFieldHelperTextFoundation.prototype.setValidity = function setValidity(inputIsValid) {
    var helperTextIsPersistent = this.adapter_.hasClass(constants_cssClasses.HELPER_TEXT_PERSISTENT);
    var helperTextIsValidationMsg = this.adapter_.hasClass(constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
    var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

    if (validationMsgNeedsDisplay) {
      this.adapter_.setAttr(constants_strings.ROLE, 'alert');
    } else {
      this.adapter_.removeAttr(constants_strings.ROLE);
    }

    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
      this.hide_();
    }
  };

  /**
   * Hides the help text from screen readers.
   * @private
   */


  MDCTextFieldHelperTextFoundation.prototype.hide_ = function hide_() {
    this.adapter_.setAttr(constants_strings.ARIA_HIDDEN, 'true');
  };

  return MDCTextFieldHelperTextFoundation;
}(base_foundation["a" /* default */]);

/* harmony default export */ var helper_text_foundation = (foundation_MDCTextFieldHelperTextFoundation);
// CONCATENATED MODULE: ../node_modules/@material/textfield/icon/adapter.js
function adapter__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Text Field Icon.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the text field icon into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTextFieldIconAdapter = function () {
  function MDCTextFieldIconAdapter() {
    adapter__classCallCheck(this, MDCTextFieldIconAdapter);
  }

  /**
   * Gets the value of an attribute on the icon element.
   * @param {string} attr
   * @return {string}
   */
  MDCTextFieldIconAdapter.prototype.getAttr = function getAttr(attr) {};

  /**
   * Sets an attribute on the icon element.
   * @param {string} attr
   * @param {string} value
   */


  MDCTextFieldIconAdapter.prototype.setAttr = function setAttr(attr, value) {};

  /**
   * Removes an attribute from the icon element.
   * @param {string} attr
   */


  MDCTextFieldIconAdapter.prototype.removeAttr = function removeAttr(attr) {};

  /**
   * Sets the text content of the icon element.
   * @param {string} content
   */


  MDCTextFieldIconAdapter.prototype.setContent = function setContent(content) {};

  /**
   * Registers an event listener on the icon element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */


  MDCTextFieldIconAdapter.prototype.registerInteractionHandler = function registerInteractionHandler(evtType, handler) {};

  /**
   * Deregisters an event listener on the icon element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */


  MDCTextFieldIconAdapter.prototype.deregisterInteractionHandler = function deregisterInteractionHandler(evtType, handler) {};

  /**
   * Emits a custom event "MDCTextField:icon" denoting a user has clicked the icon.
   */


  MDCTextFieldIconAdapter.prototype.notifyIconAction = function notifyIconAction() {};

  return MDCTextFieldIconAdapter;
}();

/* harmony default export */ var icon_adapter = (MDCTextFieldIconAdapter);
// CONCATENATED MODULE: ../node_modules/@material/textfield/icon/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var icon_constants_strings = {
  ICON_EVENT: 'MDCTextField:icon',
  ICON_ROLE: 'button'
};


// CONCATENATED MODULE: ../node_modules/@material/textfield/icon/foundation.js
var foundation__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var foundation__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function icon_foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function foundation__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function foundation__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCFoundation<!MDCTextFieldIconAdapter>}
 * @final
 */

var foundation_MDCTextFieldIconFoundation = function (_MDCFoundation) {
  foundation__inherits(MDCTextFieldIconFoundation, _MDCFoundation);

  foundation__createClass(MDCTextFieldIconFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return icon_constants_strings;
    }

    /**
     * {@see MDCTextFieldIconAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTextFieldIconAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTextFieldIconAdapter} */{
          getAttr: function getAttr() {},
          setAttr: function setAttr() {},
          removeAttr: function removeAttr() {},
          setContent: function setContent() {},
          registerInteractionHandler: function registerInteractionHandler() {},
          deregisterInteractionHandler: function deregisterInteractionHandler() {},
          notifyIconAction: function notifyIconAction() {}
        }
      );
    }

    /**
     * @param {!MDCTextFieldIconAdapter} adapter
     */

  }]);

  function MDCTextFieldIconFoundation(adapter) {
    icon_foundation__classCallCheck(this, MDCTextFieldIconFoundation);

    /** @private {string?} */
    var _this = foundation__possibleConstructorReturn(this, _MDCFoundation.call(this, foundation__extends(MDCTextFieldIconFoundation.defaultAdapter, adapter)));

    _this.savedTabIndex_ = null;

    /** @private {function(!Event): undefined} */
    _this.interactionHandler_ = function (evt) {
      return _this.handleInteraction(evt);
    };
    return _this;
  }

  MDCTextFieldIconFoundation.prototype.init = function init() {
    var _this2 = this;

    this.savedTabIndex_ = this.adapter_.getAttr('tabindex');

    ['click', 'keydown'].forEach(function (evtType) {
      _this2.adapter_.registerInteractionHandler(evtType, _this2.interactionHandler_);
    });
  };

  MDCTextFieldIconFoundation.prototype.destroy = function destroy() {
    var _this3 = this;

    ['click', 'keydown'].forEach(function (evtType) {
      _this3.adapter_.deregisterInteractionHandler(evtType, _this3.interactionHandler_);
    });
  };

  /** @param {boolean} disabled */


  MDCTextFieldIconFoundation.prototype.setDisabled = function setDisabled(disabled) {
    if (!this.savedTabIndex_) {
      return;
    }

    if (disabled) {
      this.adapter_.setAttr('tabindex', '-1');
      this.adapter_.removeAttr('role');
    } else {
      this.adapter_.setAttr('tabindex', this.savedTabIndex_);
      this.adapter_.setAttr('role', icon_constants_strings.ICON_ROLE);
    }
  };

  /** @param {string} label */


  MDCTextFieldIconFoundation.prototype.setAriaLabel = function setAriaLabel(label) {
    this.adapter_.setAttr('aria-label', label);
  };

  /** @param {string} content */


  MDCTextFieldIconFoundation.prototype.setContent = function setContent(content) {
    this.adapter_.setContent(content);
  };

  /**
   * Handles an interaction event
   * @param {!Event} evt
   */


  MDCTextFieldIconFoundation.prototype.handleInteraction = function handleInteraction(evt) {
    if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
      this.adapter_.notifyIconAction();
    }
  };

  return MDCTextFieldIconFoundation;
}(base_foundation["a" /* default */]);

/* harmony default export */ var icon_foundation = (foundation_MDCTextFieldIconFoundation);
// CONCATENATED MODULE: ../node_modules/@material/textfield/adapter.js
function textfield_adapter__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable no-unused-vars */



/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * @typedef {{
 *   value: string,
 *   disabled: boolean,
 *   badInput: boolean,
 *   validity: {
 *     badInput: boolean,
 *     valid: boolean,
 *   },
 * }}
 */
var NativeInputType = void 0;

/**
 * @typedef {{
 *   helperText: (!MDCTextFieldHelperTextFoundation|undefined),
 *   icon: (!MDCTextFieldIconFoundation|undefined),
 * }}
 */
var FoundationMapType = void 0;

/**
 * Adapter for MDC Text Field.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Text Field into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */

var MDCTextFieldAdapter = function () {
  function MDCTextFieldAdapter() {
    textfield_adapter__classCallCheck(this, MDCTextFieldAdapter);
  }

  /**
   * Adds a class to the root Element.
   * @param {string} className
   */
  MDCTextFieldAdapter.prototype.addClass = function addClass(className) {};

  /**
   * Removes a class from the root Element.
   * @param {string} className
   */


  MDCTextFieldAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * Returns true if the root element contains the given class name.
   * @param {string} className
   * @return {boolean}
   */


  MDCTextFieldAdapter.prototype.hasClass = function hasClass(className) {};

  /**
   * Registers an event handler on the root element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */


  MDCTextFieldAdapter.prototype.registerTextFieldInteractionHandler = function registerTextFieldInteractionHandler(type, handler) {};

  /**
   * Deregisters an event handler on the root element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */


  MDCTextFieldAdapter.prototype.deregisterTextFieldInteractionHandler = function deregisterTextFieldInteractionHandler(type, handler) {};

  /**
   * Registers an event listener on the native input element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */


  MDCTextFieldAdapter.prototype.registerInputInteractionHandler = function registerInputInteractionHandler(evtType, handler) {};

  /**
   * Deregisters an event listener on the native input element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */


  MDCTextFieldAdapter.prototype.deregisterInputInteractionHandler = function deregisterInputInteractionHandler(evtType, handler) {};

  /**
   * Registers a validation attribute change listener on the input element.
   * Handler accepts list of attribute names.
   * @param {function(!Array<string>): undefined} handler
   * @return {!MutationObserver}
   */


  MDCTextFieldAdapter.prototype.registerValidationAttributeChangeHandler = function registerValidationAttributeChangeHandler(handler) {};

  /**
   * Disconnects a validation attribute observer on the input element.
   * @param {!MutationObserver} observer
   */


  MDCTextFieldAdapter.prototype.deregisterValidationAttributeChangeHandler = function deregisterValidationAttributeChangeHandler(observer) {};

  /**
   * Returns an object representing the native text input element, with a
   * similar API shape. The object returned should include the value, disabled
   * and badInput properties, as well as the checkValidity() function. We never
   * alter the value within our code, however we do update the disabled
   * property, so if you choose to duck-type the return value for this method
   * in your implementation it's important to keep this in mind. Also note that
   * this method can return null, which the foundation will handle gracefully.
   * @return {?Element|?NativeInputType}
   */


  MDCTextFieldAdapter.prototype.getNativeInput = function getNativeInput() {};

  /**
   * Returns true if the textfield is focused.
   * We achieve this via `document.activeElement === this.root_`.
   * @return {boolean}
   */


  MDCTextFieldAdapter.prototype.isFocused = function isFocused() {};

  /**
   * Returns true if the direction of the root element is set to RTL.
   * @return {boolean}
   */


  MDCTextFieldAdapter.prototype.isRtl = function isRtl() {};

  /**
   * Activates the line ripple.
   */


  MDCTextFieldAdapter.prototype.activateLineRipple = function activateLineRipple() {};

  /**
   * Deactivates the line ripple.
   */


  MDCTextFieldAdapter.prototype.deactivateLineRipple = function deactivateLineRipple() {};

  /**
   * Sets the transform origin of the line ripple.
   * @param {number} normalizedX
   */


  MDCTextFieldAdapter.prototype.setLineRippleTransformOrigin = function setLineRippleTransformOrigin(normalizedX) {};

  /**
   * Only implement if label exists.
   * Shakes label if shouldShake is true.
   * @param {boolean} shouldShake
   */


  MDCTextFieldAdapter.prototype.shakeLabel = function shakeLabel(shouldShake) {};

  /**
   * Only implement if label exists.
   * Floats the label above the input element if shouldFloat is true.
   * @param {boolean} shouldFloat
   */


  MDCTextFieldAdapter.prototype.floatLabel = function floatLabel(shouldFloat) {};

  /**
   * Returns true if label element exists, false if it doesn't.
   * @return {boolean}
   */


  MDCTextFieldAdapter.prototype.hasLabel = function hasLabel() {};

  /**
   * Only implement if label exists.
   * Returns width of label in pixels.
   * @return {number}
   */


  MDCTextFieldAdapter.prototype.getLabelWidth = function getLabelWidth() {};

  /**
   * Returns true if outline element exists, false if it doesn't.
   * @return {boolean}
   */


  MDCTextFieldAdapter.prototype.hasOutline = function hasOutline() {};

  /**
   * Only implement if outline element exists.
   * Updates SVG Path and outline element based on the
   * label element width and RTL context.
   * @param {number} labelWidth
   * @param {boolean=} isRtl
   */


  MDCTextFieldAdapter.prototype.notchOutline = function notchOutline(labelWidth, isRtl) {};

  /**
   * Only implement if outline element exists.
   * Closes notch in outline element.
   */


  MDCTextFieldAdapter.prototype.closeOutline = function closeOutline() {};

  return MDCTextFieldAdapter;
}();


// CONCATENATED MODULE: ../node_modules/@material/textfield/foundation.js
var textfield_foundation__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var textfield_foundation__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function textfield_foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function textfield_foundation__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function textfield_foundation__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */



/**
 * @extends {MDCFoundation<!MDCTextFieldAdapter>}
 * @final
 */

var foundation_MDCTextFieldFoundation = function (_MDCFoundation) {
  textfield_foundation__inherits(MDCTextFieldFoundation, _MDCFoundation);

  textfield_foundation__createClass(MDCTextFieldFoundation, [{
    key: 'shouldShake',


    /** @return {boolean} */
    get: function get() {
      return !this.isValid() && !this.isFocused_ && !!this.getValue();
    }

    /**
     * @return {boolean}
     * @private
     */

  }, {
    key: 'shouldAlwaysFloat_',
    get: function get() {
      var type = this.getNativeInput_().type;
      return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
    }

    /** @return {boolean} */

  }, {
    key: 'shouldFloat',
    get: function get() {
      return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_();
    }

    /**
     * {@see MDCTextFieldAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTextFieldAdapter}
     */

  }], [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return cssClasses;
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return strings;
    }

    /** @return enum {string} */

  }, {
    key: 'numbers',
    get: function get() {
      return numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTextFieldAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {},
          deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {},
          registerInputInteractionHandler: function registerInputInteractionHandler() {},
          deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {},
          registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler() {},
          deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler() {},
          getNativeInput: function getNativeInput() {},
          isFocused: function isFocused() {},
          isRtl: function isRtl() {},
          activateLineRipple: function activateLineRipple() {},
          deactivateLineRipple: function deactivateLineRipple() {},
          setLineRippleTransformOrigin: function setLineRippleTransformOrigin() {},
          shakeLabel: function shakeLabel() {},
          floatLabel: function floatLabel() {},
          hasLabel: function hasLabel() {},
          getLabelWidth: function getLabelWidth() {},
          hasOutline: function hasOutline() {},
          notchOutline: function notchOutline() {},
          closeOutline: function closeOutline() {}
        }
      );
    }

    /**
     * @param {!MDCTextFieldAdapter} adapter
     * @param {!FoundationMapType=} foundationMap Map from subcomponent names to their subfoundations.
     */

  }]);

  function MDCTextFieldFoundation(adapter) {
    var foundationMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /** @type {!FoundationMapType} */{};

    textfield_foundation__classCallCheck(this, MDCTextFieldFoundation);

    /** @type {!MDCTextFieldHelperTextFoundation|undefined} */
    var _this = textfield_foundation__possibleConstructorReturn(this, _MDCFoundation.call(this, textfield_foundation__extends(MDCTextFieldFoundation.defaultAdapter, adapter)));

    _this.helperText_ = foundationMap.helperText;
    /** @type {!MDCTextFieldIconFoundation|undefined} */
    _this.icon_ = foundationMap.icon;

    /** @private {boolean} */
    _this.isFocused_ = false;
    /** @private {boolean} */
    _this.receivedUserInput_ = false;
    /** @private {boolean} */
    _this.useCustomValidityChecking_ = false;
    /** @private {boolean} */
    _this.isValid_ = true;

    /** @private {boolean} */
    _this.useNativeValidation_ = true;

    /** @private {function(): undefined} */
    _this.inputFocusHandler_ = function () {
      return _this.activateFocus();
    };
    /** @private {function(): undefined} */
    _this.inputBlurHandler_ = function () {
      return _this.deactivateFocus();
    };
    /** @private {function(): undefined} */
    _this.inputInputHandler_ = function () {
      return _this.autoCompleteFocus();
    };
    /** @private {function(!Event): undefined} */
    _this.setPointerXOffset_ = function (evt) {
      return _this.setTransformOrigin(evt);
    };
    /** @private {function(!Event): undefined} */
    _this.textFieldInteractionHandler_ = function () {
      return _this.handleTextFieldInteraction();
    };
    /** @private {function(!Array): undefined} */
    _this.validationAttributeChangeHandler_ = function (attributesList) {
      return _this.handleValidationAttributeChange(attributesList);
    };

    /** @private {!MutationObserver} */
    _this.validationObserver_;
    return _this;
  }

  MDCTextFieldFoundation.prototype.init = function init() {
    var _this2 = this;

    if (this.adapter_.isFocused()) {
      this.inputFocusHandler_();
    } else if (this.adapter_.hasLabel() && this.shouldFloat) {
      this.notchOutline(true);
      this.adapter_.floatLabel(true);
    }

    this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
    ['mousedown', 'touchstart'].forEach(function (evtType) {
      _this2.adapter_.registerInputInteractionHandler(evtType, _this2.setPointerXOffset_);
    });
    ['click', 'keydown'].forEach(function (evtType) {
      _this2.adapter_.registerTextFieldInteractionHandler(evtType, _this2.textFieldInteractionHandler_);
    });
    this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
  };

  MDCTextFieldFoundation.prototype.destroy = function destroy() {
    var _this3 = this;

    this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
    ['mousedown', 'touchstart'].forEach(function (evtType) {
      _this3.adapter_.deregisterInputInteractionHandler(evtType, _this3.setPointerXOffset_);
    });
    ['click', 'keydown'].forEach(function (evtType) {
      _this3.adapter_.deregisterTextFieldInteractionHandler(evtType, _this3.textFieldInteractionHandler_);
    });
    this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
  };

  /**
   * Handles user interactions with the Text Field.
   */


  MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function handleTextFieldInteraction() {
    if (this.adapter_.getNativeInput().disabled) {
      return;
    }
    this.receivedUserInput_ = true;
  };

  /**
   * Handles validation attribute changes
   * @param {!Array<string>} attributesList
   */


  MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function handleValidationAttributeChange(attributesList) {
    var _this4 = this;

    attributesList.some(function (attributeName) {
      if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
        _this4.styleValidity_(true);
        return true;
      }
    });
  };

  /**
   * Opens/closes the notched outline.
   * @param {boolean} openNotch
   */


  MDCTextFieldFoundation.prototype.notchOutline = function notchOutline(openNotch) {
    if (!this.adapter_.hasOutline()) {
      return;
    }

    if (openNotch) {
      var isDense = this.adapter_.hasClass(cssClasses.DENSE);
      var labelScale = isDense ? numbers.DENSE_LABEL_SCALE : numbers.LABEL_SCALE;
      var labelWidth = this.adapter_.getLabelWidth() * labelScale;
      var isRtl = this.adapter_.isRtl();
      this.adapter_.notchOutline(labelWidth, isRtl);
    } else {
      this.adapter_.closeOutline();
    }
  };

  /**
   * Activates the text field focus state.
   */


  MDCTextFieldFoundation.prototype.activateFocus = function activateFocus() {
    this.isFocused_ = true;
    this.styleFocused_(this.isFocused_);
    this.adapter_.activateLineRipple();
    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }
    if (this.helperText_) {
      this.helperText_.showToScreenReader();
    }
  };

  /**
   * Sets the line ripple's transform origin, so that the line ripple activate
   * animation will animate out from the user's click location.
   * @param {!Event} evt
   */


  MDCTextFieldFoundation.prototype.setTransformOrigin = function setTransformOrigin(evt) {
    var targetClientRect = evt.target.getBoundingClientRect();
    var evtCoords = { x: evt.clientX, y: evt.clientY };
    var normalizedX = evtCoords.x - targetClientRect.left;
    this.adapter_.setLineRippleTransformOrigin(normalizedX);
  };

  /**
   * Activates the Text Field's focus state in cases when the input value
   * changes without user input (e.g. programatically).
   */


  MDCTextFieldFoundation.prototype.autoCompleteFocus = function autoCompleteFocus() {
    if (!this.receivedUserInput_) {
      this.activateFocus();
    }
  };

  /**
   * Deactivates the Text Field's focus state.
   */


  MDCTextFieldFoundation.prototype.deactivateFocus = function deactivateFocus() {
    this.isFocused_ = false;
    this.adapter_.deactivateLineRipple();
    var isValid = this.isValid();
    this.styleValidity_(isValid);
    this.styleFocused_(this.isFocused_);
    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }
    if (!this.shouldFloat) {
      this.receivedUserInput_ = false;
    }
  };

  /**
   * @return {string} The value of the input Element.
   */


  MDCTextFieldFoundation.prototype.getValue = function getValue() {
    return this.getNativeInput_().value;
  };

  /**
   * @param {string} value The value to set on the input Element.
   */


  MDCTextFieldFoundation.prototype.setValue = function setValue(value) {
    this.getNativeInput_().value = value;
    var isValid = this.isValid();
    this.styleValidity_(isValid);
    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }
  };

  /**
   * @return {boolean} If a custom validity is set, returns that value.
   *     Otherwise, returns the result of native validity checks.
   */


  MDCTextFieldFoundation.prototype.isValid = function isValid() {
    return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_;
  };

  /**
   * @param {boolean} isValid Sets the validity state of the Text Field.
   */


  MDCTextFieldFoundation.prototype.setValid = function setValid(isValid) {
    this.isValid_ = isValid;
    this.styleValidity_(isValid);

    var shouldShake = !isValid && !this.isFocused_;
    if (this.adapter_.hasLabel()) {
      this.adapter_.shakeLabel(shouldShake);
    }
  };

  /**
   * Enables or disables the use of native validation. Use this for custom validation.
   * @param {boolean} useNativeValidation Set this to false to ignore native input validation.
   */


  MDCTextFieldFoundation.prototype.setUseNativeValidation = function setUseNativeValidation(useNativeValidation) {
    this.useNativeValidation_ = useNativeValidation;
  };

  /**
   * @return {boolean} True if the Text Field is disabled.
   */


  MDCTextFieldFoundation.prototype.isDisabled = function isDisabled() {
    return this.getNativeInput_().disabled;
  };

  /**
   * @param {boolean} disabled Sets the text-field disabled or enabled.
   */


  MDCTextFieldFoundation.prototype.setDisabled = function setDisabled(disabled) {
    this.getNativeInput_().disabled = disabled;
    this.styleDisabled_(disabled);
  };

  /**
   * @param {string} content Sets the content of the helper text.
   */


  MDCTextFieldFoundation.prototype.setHelperTextContent = function setHelperTextContent(content) {
    if (this.helperText_) {
      this.helperText_.setContent(content);
    }
  };

  /**
   * Sets the aria label of the icon.
   * @param {string} label
   */


  MDCTextFieldFoundation.prototype.setIconAriaLabel = function setIconAriaLabel(label) {
    if (this.icon_) {
      this.icon_.setAriaLabel(label);
    }
  };

  /**
   * Sets the text content of the icon.
   * @param {string} content
   */


  MDCTextFieldFoundation.prototype.setIconContent = function setIconContent(content) {
    if (this.icon_) {
      this.icon_.setContent(content);
    }
  };

  /**
   * @return {boolean} True if the Text Field input fails in converting the
   *     user-supplied value.
   * @private
   */


  MDCTextFieldFoundation.prototype.isBadInput_ = function isBadInput_() {
    return this.getNativeInput_().validity.badInput;
  };

  /**
   * @return {boolean} The result of native validity checking
   *     (ValidityState.valid).
   */


  MDCTextFieldFoundation.prototype.isNativeInputValid_ = function isNativeInputValid_() {
    return this.getNativeInput_().validity.valid;
  };

  /**
   * Styles the component based on the validity state.
   * @param {boolean} isValid
   * @private
   */


  MDCTextFieldFoundation.prototype.styleValidity_ = function styleValidity_(isValid) {
    var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;

    if (isValid) {
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.addClass(INVALID);
    }
    if (this.helperText_) {
      this.helperText_.setValidity(isValid);
    }
  };

  /**
   * Styles the component based on the focused state.
   * @param {boolean} isFocused
   * @private
   */


  MDCTextFieldFoundation.prototype.styleFocused_ = function styleFocused_(isFocused) {
    var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;

    if (isFocused) {
      this.adapter_.addClass(FOCUSED);
    } else {
      this.adapter_.removeClass(FOCUSED);
    }
  };

  /**
   * Styles the component based on the disabled state.
   * @param {boolean} isDisabled
   * @private
   */


  MDCTextFieldFoundation.prototype.styleDisabled_ = function styleDisabled_(isDisabled) {
    var _MDCTextFieldFoundati = MDCTextFieldFoundation.cssClasses,
        DISABLED = _MDCTextFieldFoundati.DISABLED,
        INVALID = _MDCTextFieldFoundati.INVALID;

    if (isDisabled) {
      this.adapter_.addClass(DISABLED);
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
    if (this.icon_) {
      this.icon_.setDisabled(isDisabled);
    }
  };

  /**
   * @return {!Element|!NativeInputType} The native text input from the
   * host environment, or a dummy if none exists.
   * @private
   */


  MDCTextFieldFoundation.prototype.getNativeInput_ = function getNativeInput_() {
    return this.adapter_.getNativeInput() ||
    /** @type {!NativeInputType} */{
      value: '',
      disabled: false,
      validity: {
        badInput: false,
        valid: true
      }
    };
  };

  return MDCTextFieldFoundation;
}(base_foundation["a" /* default */]);

/* harmony default export */ var textfield_foundation = (foundation_MDCTextFieldFoundation);
// CONCATENATED MODULE: ../node_modules/@material/line-ripple/adapter.js
function line_ripple_adapter__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC TextField Line Ripple.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the line ripple into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCLineRippleAdapter = function () {
  function MDCLineRippleAdapter() {
    line_ripple_adapter__classCallCheck(this, MDCLineRippleAdapter);
  }

  /**
   * Adds a class to the line ripple element.
   * @param {string} className
   */
  MDCLineRippleAdapter.prototype.addClass = function addClass(className) {};

  /**
   * Removes a class from the line ripple element.
   * @param {string} className
   */


  MDCLineRippleAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * @param {string} className
   * @return {boolean}
   */


  MDCLineRippleAdapter.prototype.hasClass = function hasClass(className) {};

  /**
   * Sets the style property with propertyName to value on the root element.
   * @param {string} propertyName
   * @param {string} value
   */


  MDCLineRippleAdapter.prototype.setStyle = function setStyle(propertyName, value) {};

  /**
   * Registers an event listener on the line ripple element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */


  MDCLineRippleAdapter.prototype.registerEventHandler = function registerEventHandler(evtType, handler) {};

  /**
   * Deregisters an event listener on the line ripple element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */


  MDCLineRippleAdapter.prototype.deregisterEventHandler = function deregisterEventHandler(evtType, handler) {};

  return MDCLineRippleAdapter;
}();

/* harmony default export */ var line_ripple_adapter = (MDCLineRippleAdapter);
// CONCATENATED MODULE: ../node_modules/@material/line-ripple/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var line_ripple_constants_cssClasses = {
  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
};


// CONCATENATED MODULE: ../node_modules/@material/line-ripple/foundation.js
var line_ripple_foundation__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var line_ripple_foundation__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function line_ripple_foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function line_ripple_foundation__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function line_ripple_foundation__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCFoundation<!MDCLineRippleAdapter>}
 * @final
 */

var foundation_MDCLineRippleFoundation = function (_MDCFoundation) {
  line_ripple_foundation__inherits(MDCLineRippleFoundation, _MDCFoundation);

  line_ripple_foundation__createClass(MDCLineRippleFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return line_ripple_constants_cssClasses;
    }

    /**
     * {@see MDCLineRippleAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCLineRippleAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCLineRippleAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          setStyle: function setStyle() {},
          registerEventHandler: function registerEventHandler() {},
          deregisterEventHandler: function deregisterEventHandler() {}
        }
      );
    }

    /**
     * @param {!MDCLineRippleAdapter=} adapter
     */

  }]);

  function MDCLineRippleFoundation(adapter) {
    line_ripple_foundation__classCallCheck(this, MDCLineRippleFoundation);

    /** @private {function(!Event): undefined} */
    var _this = line_ripple_foundation__possibleConstructorReturn(this, _MDCFoundation.call(this, line_ripple_foundation__extends(MDCLineRippleFoundation.defaultAdapter, adapter)));

    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd(evt);
    };
    return _this;
  }

  MDCLineRippleFoundation.prototype.init = function init() {
    this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
  };

  MDCLineRippleFoundation.prototype.destroy = function destroy() {
    this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
  };

  /**
   * Activates the line ripple
   */


  MDCLineRippleFoundation.prototype.activate = function activate() {
    this.adapter_.removeClass(line_ripple_constants_cssClasses.LINE_RIPPLE_DEACTIVATING);
    this.adapter_.addClass(line_ripple_constants_cssClasses.LINE_RIPPLE_ACTIVE);
  };

  /**
   * Sets the center of the ripple animation to the given X coordinate.
   * @param {number} xCoordinate
   */


  MDCLineRippleFoundation.prototype.setRippleCenter = function setRippleCenter(xCoordinate) {
    this.adapter_.setStyle('transform-origin', xCoordinate + 'px center');
  };

  /**
   * Deactivates the line ripple
   */


  MDCLineRippleFoundation.prototype.deactivate = function deactivate() {
    this.adapter_.addClass(line_ripple_constants_cssClasses.LINE_RIPPLE_DEACTIVATING);
  };

  /**
   * Handles a transition end event
   * @param {!Event} evt
   */


  MDCLineRippleFoundation.prototype.handleTransitionEnd = function handleTransitionEnd(evt) {
    // Wait for the line ripple to be either transparent or opaque
    // before emitting the animation end event
    var isDeactivating = this.adapter_.hasClass(line_ripple_constants_cssClasses.LINE_RIPPLE_DEACTIVATING);

    if (evt.propertyName === 'opacity') {
      if (isDeactivating) {
        this.adapter_.removeClass(line_ripple_constants_cssClasses.LINE_RIPPLE_ACTIVE);
        this.adapter_.removeClass(line_ripple_constants_cssClasses.LINE_RIPPLE_DEACTIVATING);
      }
    }
  };

  return MDCLineRippleFoundation;
}(base_foundation["a" /* default */]);

/* harmony default export */ var line_ripple_foundation = (foundation_MDCLineRippleFoundation);
// CONCATENATED MODULE: ../node_modules/@material/line-ripple/index.js
var line_ripple__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function line_ripple__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function line_ripple__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function line_ripple__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/**
 * @extends {MDCComponent<!MDCLineRippleFoundation>}
 * @final
 */

var line_ripple_MDCLineRipple = function (_MDCComponent) {
  line_ripple__inherits(MDCLineRipple, _MDCComponent);

  function MDCLineRipple() {
    line_ripple__classCallCheck(this, MDCLineRipple);

    return line_ripple__possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  /**
   * @param {!Element} root
   * @return {!MDCLineRipple}
   */
  MDCLineRipple.attachTo = function attachTo(root) {
    return new MDCLineRipple(root);
  };

  /**
   * Activates the line ripple
   */


  MDCLineRipple.prototype.activate = function activate() {
    this.foundation_.activate();
  };

  /**
   * Deactivates the line ripple
   */


  MDCLineRipple.prototype.deactivate = function deactivate() {
    this.foundation_.deactivate();
  };

  /**
   * Sets the transform origin given a user's click location. The `rippleCenter` is the
   * x-coordinate of the middle of the ripple.
   * @param {number} xCoordinate
   */


  MDCLineRipple.prototype.setRippleCenter = function setRippleCenter(xCoordinate) {
    this.foundation_.setRippleCenter(xCoordinate);
  };

  /**
   * @return {!MDCLineRippleFoundation}
   */


  MDCLineRipple.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new line_ripple_foundation( /** @type {!MDCLineRippleAdapter} */line_ripple__extends({
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this2.root_.classList.contains(className);
      },
      setStyle: function setStyle(propertyName, value) {
        return _this2.root_.style[propertyName] = value;
      },
      registerEventHandler: function registerEventHandler(evtType, handler) {
        return _this2.root_.addEventListener(evtType, handler);
      },
      deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
        return _this2.root_.removeEventListener(evtType, handler);
      }
    }));
  };

  return MDCLineRipple;
}(component["a" /* default */]);


// CONCATENATED MODULE: ../node_modules/@material/textfield/helper-text/index.js
var helper_text__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var helper_text__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function helper_text__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function helper_text__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function helper_text__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/**
 * @extends {MDCComponent<!MDCTextFieldHelperTextFoundation>}
 * @final
 */

var helper_text_MDCTextFieldHelperText = function (_MDCComponent) {
  helper_text__inherits(MDCTextFieldHelperText, _MDCComponent);

  function MDCTextFieldHelperText() {
    helper_text__classCallCheck(this, MDCTextFieldHelperText);

    return helper_text__possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  /**
   * @param {!Element} root
   * @return {!MDCTextFieldHelperText}
   */
  MDCTextFieldHelperText.attachTo = function attachTo(root) {
    return new MDCTextFieldHelperText(root);
  };

  /**
   * @return {!MDCTextFieldHelperTextFoundation}
   */


  /**
   * @return {!MDCTextFieldHelperTextFoundation}
   */
  MDCTextFieldHelperText.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new helper_text_foundation( /** @type {!MDCTextFieldHelperTextAdapter} */helper_text__extends({
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this2.root_.classList.contains(className);
      },
      setAttr: function setAttr(attr, value) {
        return _this2.root_.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this2.root_.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this2.root_.textContent = content;
      }
    }));
  };

  helper_text__createClass(MDCTextFieldHelperText, [{
    key: 'foundation',
    get: function get() {
      return this.foundation_;
    }
  }]);

  return MDCTextFieldHelperText;
}(component["a" /* default */]);


// CONCATENATED MODULE: ../node_modules/@material/textfield/icon/index.js
var icon__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var icon__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function icon__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function icon__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function icon__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/**
 * @extends {MDCComponent<!MDCTextFieldIconFoundation>}
 * @final
 */

var icon_MDCTextFieldIcon = function (_MDCComponent) {
  icon__inherits(MDCTextFieldIcon, _MDCComponent);

  function MDCTextFieldIcon() {
    icon__classCallCheck(this, MDCTextFieldIcon);

    return icon__possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  /**
   * @param {!Element} root
   * @return {!MDCTextFieldIcon}
   */
  MDCTextFieldIcon.attachTo = function attachTo(root) {
    return new MDCTextFieldIcon(root);
  };

  /**
   * @return {!MDCTextFieldIconFoundation}
   */


  /**
   * @return {!MDCTextFieldIconFoundation}
   */
  MDCTextFieldIcon.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new icon_foundation( /** @type {!MDCTextFieldIconAdapter} */icon__extends({
      getAttr: function getAttr(attr) {
        return _this2.root_.getAttribute(attr);
      },
      setAttr: function setAttr(attr, value) {
        return _this2.root_.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this2.root_.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this2.root_.textContent = content;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this2.root_.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this2.root_.removeEventListener(evtType, handler);
      },
      notifyIconAction: function notifyIconAction() {
        return _this2.emit(icon_foundation.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */);
      }
    }));
  };

  icon__createClass(MDCTextFieldIcon, [{
    key: 'foundation',
    get: function get() {
      return this.foundation_;
    }
  }]);

  return MDCTextFieldIcon;
}(component["a" /* default */]);


// CONCATENATED MODULE: ../node_modules/@material/floating-label/adapter.js
function floating_label_adapter__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Floating Label.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the floating label into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCFloatingLabelAdapter = function () {
  function MDCFloatingLabelAdapter() {
    floating_label_adapter__classCallCheck(this, MDCFloatingLabelAdapter);
  }

  /**
   * Adds a class to the label element.
   * @param {string} className
   */
  MDCFloatingLabelAdapter.prototype.addClass = function addClass(className) {};

  /**
   * Removes a class from the label element.
   * @param {string} className
   */


  MDCFloatingLabelAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * Returns the width of the label element.
   * @return {number}
   */


  MDCFloatingLabelAdapter.prototype.getWidth = function getWidth() {};

  /**
   * Registers an event listener on the root element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */


  MDCFloatingLabelAdapter.prototype.registerInteractionHandler = function registerInteractionHandler(evtType, handler) {};

  /**
   * Deregisters an event listener on the root element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */


  MDCFloatingLabelAdapter.prototype.deregisterInteractionHandler = function deregisterInteractionHandler(evtType, handler) {};

  return MDCFloatingLabelAdapter;
}();

/* harmony default export */ var floating_label_adapter = (MDCFloatingLabelAdapter);
// CONCATENATED MODULE: ../node_modules/@material/floating-label/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var floating_label_constants_cssClasses = {
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_SHAKE: 'mdc-floating-label--shake'
};


// CONCATENATED MODULE: ../node_modules/@material/floating-label/foundation.js
var floating_label_foundation__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var floating_label_foundation__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function floating_label_foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function floating_label_foundation__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function floating_label_foundation__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCFoundation<!MDCFloatingLabelAdapter>}
 * @final
 */

var foundation_MDCFloatingLabelFoundation = function (_MDCFoundation) {
  floating_label_foundation__inherits(MDCFloatingLabelFoundation, _MDCFoundation);

  floating_label_foundation__createClass(MDCFloatingLabelFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return floating_label_constants_cssClasses;
    }

    /**
     * {@see MDCFloatingLabelAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCFloatingLabelAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCFloatingLabelAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          getWidth: function getWidth() {},
          registerInteractionHandler: function registerInteractionHandler() {},
          deregisterInteractionHandler: function deregisterInteractionHandler() {}
        }
      );
    }

    /**
     * @param {!MDCFloatingLabelAdapter} adapter
     */

  }]);

  function MDCFloatingLabelFoundation(adapter) {
    floating_label_foundation__classCallCheck(this, MDCFloatingLabelFoundation);

    /** @private {function(!Event): undefined} */
    var _this = floating_label_foundation__possibleConstructorReturn(this, _MDCFoundation.call(this, floating_label_foundation__extends(MDCFloatingLabelFoundation.defaultAdapter, adapter)));

    _this.shakeAnimationEndHandler_ = function () {
      return _this.handleShakeAnimationEnd_();
    };
    return _this;
  }

  MDCFloatingLabelFoundation.prototype.init = function init() {
    this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };

  MDCFloatingLabelFoundation.prototype.destroy = function destroy() {
    this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };

  /**
   * Returns the width of the label element.
   * @return {number}
   */


  MDCFloatingLabelFoundation.prototype.getWidth = function getWidth() {
    return this.adapter_.getWidth();
  };

  /**
   * Styles the label to produce the label shake for errors.
   * @param {boolean} shouldShake adds shake class if true,
   * otherwise removes shake class.
   */


  MDCFloatingLabelFoundation.prototype.shake = function shake(shouldShake) {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

    if (shouldShake) {
      this.adapter_.addClass(LABEL_SHAKE);
    } else {
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  };

  /**
   * Styles the label to float or dock.
   * @param {boolean} shouldFloat adds float class if true, otherwise remove
   * float and shake class to dock label.
   */


  MDCFloatingLabelFoundation.prototype.float = function float(shouldFloat) {
    var _MDCFloatingLabelFoun = MDCFloatingLabelFoundation.cssClasses,
        LABEL_FLOAT_ABOVE = _MDCFloatingLabelFoun.LABEL_FLOAT_ABOVE,
        LABEL_SHAKE = _MDCFloatingLabelFoun.LABEL_SHAKE;

    if (shouldFloat) {
      this.adapter_.addClass(LABEL_FLOAT_ABOVE);
    } else {
      this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  };

  /**
   * Handles an interaction event on the root element.
   */


  MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function handleShakeAnimationEnd_() {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

    this.adapter_.removeClass(LABEL_SHAKE);
  };

  return MDCFloatingLabelFoundation;
}(base_foundation["a" /* default */]);

/* harmony default export */ var floating_label_foundation = (foundation_MDCFloatingLabelFoundation);
// CONCATENATED MODULE: ../node_modules/@material/floating-label/index.js
function floating_label__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function floating_label__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function floating_label__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCComponent<!MDCFloatingLabelFoundation>}
 * @final
 */

var floating_label_MDCFloatingLabel = function (_MDCComponent) {
  floating_label__inherits(MDCFloatingLabel, _MDCComponent);

  function MDCFloatingLabel() {
    floating_label__classCallCheck(this, MDCFloatingLabel);

    return floating_label__possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  /**
   * @param {!Element} root
   * @return {!MDCFloatingLabel}
   */
  MDCFloatingLabel.attachTo = function attachTo(root) {
    return new MDCFloatingLabel(root);
  };

  /**
   * Styles the label to produce the label shake for errors.
   * @param {boolean} shouldShake styles the label to shake by adding shake class
   * if true, otherwise will stop shaking by removing shake class.
   */


  MDCFloatingLabel.prototype.shake = function shake(shouldShake) {
    this.foundation_.shake(shouldShake);
  };

  /**
   * Styles label to float/dock.
   * @param {boolean} shouldFloat styles the label to float by adding float class
   * if true, otherwise docks the label by removing the float class.
   */


  MDCFloatingLabel.prototype.float = function float(shouldFloat) {
    this.foundation_.float(shouldFloat);
  };

  /**
   * @return {number}
   */


  MDCFloatingLabel.prototype.getWidth = function getWidth() {
    return this.foundation_.getWidth();
  };

  /**
   * @return {!MDCFloatingLabelFoundation}
   */


  MDCFloatingLabel.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new floating_label_foundation({
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      getWidth: function getWidth() {
        return _this2.root_.offsetWidth;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this2.root_.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this2.root_.removeEventListener(evtType, handler);
      }
    });
  };

  return MDCFloatingLabel;
}(component["a" /* default */]);


// CONCATENATED MODULE: ../node_modules/@material/notched-outline/adapter.js
function notched_outline_adapter__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Notched Outline.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Notched Outline into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCNotchedOutlineAdapter = function () {
  function MDCNotchedOutlineAdapter() {
    notched_outline_adapter__classCallCheck(this, MDCNotchedOutlineAdapter);
  }

  /**
   * Returns the width of the root element.
   * @return {number}
   */
  MDCNotchedOutlineAdapter.prototype.getWidth = function getWidth() {};

  /**
   * Returns the height of the root element.
   * @return {number}
   */


  MDCNotchedOutlineAdapter.prototype.getHeight = function getHeight() {};

  /**
   * Adds a class to the root element.
   * @param {string} className
   */


  MDCNotchedOutlineAdapter.prototype.addClass = function addClass(className) {};

  /**
   * Removes a class from the root element.
   * @param {string} className
   */


  MDCNotchedOutlineAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * Sets the "d" attribute of the outline element's SVG path.
   * @param {string} value
   */


  MDCNotchedOutlineAdapter.prototype.setOutlinePathAttr = function setOutlinePathAttr(value) {};

  /**
   * Returns the idle outline element's computed style value of the given css property `propertyName`.
   * We achieve this via `getComputedStyle(...).getPropertyValue(propertyName)`.
   * @param {string} propertyName
   * @return {string}
   */


  MDCNotchedOutlineAdapter.prototype.getIdleOutlineStyleValue = function getIdleOutlineStyleValue(propertyName) {};

  return MDCNotchedOutlineAdapter;
}();

/* harmony default export */ var notched_outline_adapter = (MDCNotchedOutlineAdapter);
// CONCATENATED MODULE: ../node_modules/@material/notched-outline/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var notched_outline_constants_strings = {
  PATH_SELECTOR: '.mdc-notched-outline__path',
  IDLE_OUTLINE_SELECTOR: '.mdc-notched-outline__idle'
};

/** @enum {string} */
var notched_outline_constants_cssClasses = {
  OUTLINE_NOTCHED: 'mdc-notched-outline--notched'
};


// CONCATENATED MODULE: ../node_modules/@material/notched-outline/foundation.js
var notched_outline_foundation__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var notched_outline_foundation__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function notched_outline_foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function notched_outline_foundation__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function notched_outline_foundation__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCFoundation<!MDCNotchedOutlineAdapter>}
 * @final
 */

var foundation_MDCNotchedOutlineFoundation = function (_MDCFoundation) {
  notched_outline_foundation__inherits(MDCNotchedOutlineFoundation, _MDCFoundation);

  notched_outline_foundation__createClass(MDCNotchedOutlineFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return notched_outline_constants_strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return notched_outline_constants_cssClasses;
    }

    /**
     * {@see MDCNotchedOutlineAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCNotchedOutlineAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCNotchedOutlineAdapter} */{
          getWidth: function getWidth() {},
          getHeight: function getHeight() {},
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          setOutlinePathAttr: function setOutlinePathAttr() {},
          getIdleOutlineStyleValue: function getIdleOutlineStyleValue() {}
        }
      );
    }

    /**
     * @param {!MDCNotchedOutlineAdapter} adapter
     */

  }]);

  function MDCNotchedOutlineFoundation(adapter) {
    notched_outline_foundation__classCallCheck(this, MDCNotchedOutlineFoundation);

    return notched_outline_foundation__possibleConstructorReturn(this, _MDCFoundation.call(this, notched_outline_foundation__extends(MDCNotchedOutlineFoundation.defaultAdapter, adapter)));
  }

  /**
   * Adds the outline notched selector and updates the notch width
   * calculated based off of notchWidth and isRtl.
   * @param {number} notchWidth
   * @param {boolean=} isRtl
   */


  MDCNotchedOutlineFoundation.prototype.notch = function notch(notchWidth) {
    var isRtl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

    this.adapter_.addClass(OUTLINE_NOTCHED);
    this.updateSvgPath_(notchWidth, isRtl);
  };

  /**
   * Removes notched outline selector to close the notch in the outline.
   */


  MDCNotchedOutlineFoundation.prototype.closeNotch = function closeNotch() {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

    this.adapter_.removeClass(OUTLINE_NOTCHED);
  };

  /**
   * Updates the SVG path of the focus outline element based on the notchWidth
   * and the RTL context.
   * @param {number} notchWidth
   * @param {boolean=} isRtl
   * @private
   */


  MDCNotchedOutlineFoundation.prototype.updateSvgPath_ = function updateSvgPath_(notchWidth, isRtl) {
    // Fall back to reading a specific corner's style because Firefox doesn't report the style on border-radius.
    var radiusStyleValue = this.adapter_.getIdleOutlineStyleValue('border-radius') || this.adapter_.getIdleOutlineStyleValue('border-top-left-radius');
    var radius = parseFloat(radiusStyleValue);
    var width = this.adapter_.getWidth();
    var height = this.adapter_.getHeight();
    var cornerWidth = radius + 1.2;
    var leadingStrokeLength = Math.abs(12 - cornerWidth);

    // If the notchWidth is 0, the the notched outline doesn't need to add padding.
    var paddedNotchWidth = 0;
    if (notchWidth > 0) {
      paddedNotchWidth = notchWidth + 8;
    }

    // The right, bottom, and left sides of the outline follow the same SVG path.
    var pathMiddle = 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + radius + 'v' + (height - 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + radius + 'h' + (-width + 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + -radius + 'v' + (-height + 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + -radius;

    var path = void 0;
    if (!isRtl) {
      path = 'M' + (cornerWidth + leadingStrokeLength + paddedNotchWidth) + ',' + 1 + 'h' + (width - 2 * cornerWidth - paddedNotchWidth - leadingStrokeLength) + pathMiddle + 'h' + leadingStrokeLength;
    } else {
      path = 'M' + (width - cornerWidth - leadingStrokeLength) + ',' + 1 + 'h' + leadingStrokeLength + pathMiddle + 'h' + (width - 2 * cornerWidth - paddedNotchWidth - leadingStrokeLength);
    }

    this.adapter_.setOutlinePathAttr(path);
  };

  return MDCNotchedOutlineFoundation;
}(base_foundation["a" /* default */]);

/* harmony default export */ var notched_outline_foundation = (foundation_MDCNotchedOutlineFoundation);
// CONCATENATED MODULE: ../node_modules/@material/notched-outline/index.js
function notched_outline__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function notched_outline__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function notched_outline__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







/**
 * @extends {MDCComponent<!MDCNotchedOutlineFoundation>}
 * @final
 */

var notched_outline_MDCNotchedOutline = function (_MDCComponent) {
  notched_outline__inherits(MDCNotchedOutline, _MDCComponent);

  function MDCNotchedOutline() {
    notched_outline__classCallCheck(this, MDCNotchedOutline);

    return notched_outline__possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  /**
   * @param {!Element} root
   * @return {!MDCNotchedOutline}
   */
  MDCNotchedOutline.attachTo = function attachTo(root) {
    return new MDCNotchedOutline(root);
  };

  /**
    * Updates outline selectors and SVG path to open notch.
    * @param {number} notchWidth The notch width in the outline.
    * @param {boolean=} isRtl Determines if outline is rtl. If rtl is true, notch
    * will be right justified in outline path, otherwise left justified.
    */


  MDCNotchedOutline.prototype.notch = function notch(notchWidth, isRtl) {
    this.foundation_.notch(notchWidth, isRtl);
  };

  /**
   * Updates the outline selectors to close notch and return it to idle state.
   */


  MDCNotchedOutline.prototype.closeNotch = function closeNotch() {
    this.foundation_.closeNotch();
  };

  /**
   * @return {!MDCNotchedOutlineFoundation}
   */


  MDCNotchedOutline.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new notched_outline_foundation({
      getWidth: function getWidth() {
        return _this2.root_.offsetWidth;
      },
      getHeight: function getHeight() {
        return _this2.root_.offsetHeight;
      },
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      setOutlinePathAttr: function setOutlinePathAttr(value) {
        var path = _this2.root_.querySelector(notched_outline_constants_strings.PATH_SELECTOR);
        path.setAttribute('d', value);
      },
      getIdleOutlineStyleValue: function getIdleOutlineStyleValue(propertyName) {
        var idleOutlineElement = _this2.root_.parentNode.querySelector(notched_outline_constants_strings.IDLE_OUTLINE_SELECTOR);
        return window.getComputedStyle(idleOutlineElement).getPropertyValue(propertyName);
      }
    });
  };

  return MDCNotchedOutline;
}(component["a" /* default */]);


// CONCATENATED MODULE: ../node_modules/@material/textfield/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextField", function() { return textfield_MDCTextField; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function() { return textfield_foundation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() { return helper_text_MDCTextFieldHelperText; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() { return helper_text_foundation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() { return icon_MDCTextFieldIcon; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() { return icon_foundation; });
var textfield__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var textfield__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function textfield__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function textfield__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function textfield__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */





/* eslint-disable no-unused-vars */





/* eslint-enable no-unused-vars */

/**
 * @extends {MDCComponent<!MDCTextFieldFoundation>}
 * @final
 */

var textfield_MDCTextField = function (_MDCComponent) {
  textfield__inherits(MDCTextField, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCTextField() {
    textfield__classCallCheck(this, MDCTextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?Element} */
    var _this = textfield__possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.input_;
    /** @type {?MDCRipple} */
    _this.ripple;
    /** @private {?MDCLineRipple} */
    _this.lineRipple_;
    /** @private {?MDCTextFieldHelperText} */
    _this.helperText_;
    /** @private {?MDCTextFieldIcon} */
    _this.icon_;
    /** @private {?MDCFloatingLabel} */
    _this.label_;
    /** @private {?MDCNotchedOutline} */
    _this.outline_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCTextField}
   */


  MDCTextField.attachTo = function attachTo(root) {
    return new MDCTextField(root);
  };

  /**
   * @param {(function(!Element): !MDCRipple)=} rippleFactory A function which
   * creates a new MDCRipple.
   * @param {(function(!Element): !MDCLineRipple)=} lineRippleFactory A function which
   * creates a new MDCLineRipple.
   * @param {(function(!Element): !MDCTextFieldHelperText)=} helperTextFactory A function which
   * creates a new MDCTextFieldHelperText.
   * @param {(function(!Element): !MDCTextFieldIcon)=} iconFactory A function which
   * creates a new MDCTextFieldIcon.
   * @param {(function(!Element): !MDCFloatingLabel)=} labelFactory A function which
   * creates a new MDCFloatingLabel.
   * @param {(function(!Element): !MDCNotchedOutline)=} outlineFactory A function which
   * creates a new MDCNotchedOutline.
   */


  MDCTextField.prototype.initialize = function initialize() {
    var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el, foundation) {
      return new ripple["MDCRipple"](el, foundation);
    };
    var lineRippleFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
      return new line_ripple_MDCLineRipple(el);
    };
    var helperTextFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (el) {
      return new helper_text_MDCTextFieldHelperText(el);
    };
    var iconFactory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (el) {
      return new icon_MDCTextFieldIcon(el);
    };

    var _this2 = this;

    var labelFactory = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (el) {
      return new floating_label_MDCFloatingLabel(el);
    };
    var outlineFactory = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function (el) {
      return new notched_outline_MDCNotchedOutline(el);
    };

    this.input_ = this.root_.querySelector(strings.INPUT_SELECTOR);
    var labelElement = this.root_.querySelector(strings.LABEL_SELECTOR);
    if (labelElement) {
      this.label_ = labelFactory(labelElement);
    }
    var lineRippleElement = this.root_.querySelector(strings.LINE_RIPPLE_SELECTOR);
    if (lineRippleElement) {
      this.lineRipple_ = lineRippleFactory(lineRippleElement);
    }
    var outlineElement = this.root_.querySelector(strings.OUTLINE_SELECTOR);
    if (outlineElement) {
      this.outline_ = outlineFactory(outlineElement);
    }
    if (this.input_.hasAttribute(strings.ARIA_CONTROLS)) {
      var helperTextElement = document.getElementById(this.input_.getAttribute(strings.ARIA_CONTROLS));
      if (helperTextElement) {
        this.helperText_ = helperTextFactory(helperTextElement);
      }
    }
    var iconElement = this.root_.querySelector(strings.ICON_SELECTOR);
    if (iconElement) {
      this.icon_ = iconFactory(iconElement);
    }

    this.ripple = null;
    if (!this.root_.classList.contains(cssClasses.TEXTAREA) && !this.root_.classList.contains(cssClasses.OUTLINED)) {
      var MATCHES = Object(util["getMatchesProperty"])(HTMLElement.prototype);
      var adapter = textfield__extends(ripple["MDCRipple"].createAdapter( /** @type {!RippleCapableSurface} */this), {
        isSurfaceActive: function isSurfaceActive() {
          return _this2.input_[MATCHES](':active');
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.input_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.input_.removeEventListener(type, handler);
        }
      });
      var foundation = new ripple["MDCRippleFoundation"](adapter);
      this.ripple = rippleFactory(this.root_, foundation);
    }
  };

  MDCTextField.prototype.destroy = function destroy() {
    if (this.ripple) {
      this.ripple.destroy();
    }
    if (this.lineRipple_) {
      this.lineRipple_.destroy();
    }
    if (this.helperText_) {
      this.helperText_.destroy();
    }
    if (this.icon_) {
      this.icon_.destroy();
    }
    if (this.label_) {
      this.label_.destroy();
    }
    if (this.outline_) {
      this.outline_.destroy();
    }
    _MDCComponent.prototype.destroy.call(this);
  };

  /**
   * Initiliazes the Text Field's internal state based on the environment's
   * state.
   */


  MDCTextField.prototype.initialSyncWithDom = function initialSyncWithDom() {
    this.disabled = this.input_.disabled;
  };

  /**
   * @return {string} The value of the input.
   */


  /**
   * Recomputes the outline SVG path for the outline element.
   */
  MDCTextField.prototype.layout = function layout() {
    var openNotch = this.foundation_.shouldFloat;
    this.foundation_.notchOutline(openNotch);
  };

  /**
   * @return {!MDCTextFieldFoundation}
   */


  MDCTextField.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this3 = this;

    return new textfield_foundation(
    /** @type {!MDCTextFieldAdapter} */textfield__extends({
      addClass: function addClass(className) {
        return _this3.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this3.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this3.root_.classList.contains(className);
      },
      registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
        return _this3.root_.addEventListener(evtType, handler);
      },
      deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
        return _this3.root_.removeEventListener(evtType, handler);
      },
      registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler(handler) {
        var getAttributesList = function getAttributesList(mutationsList) {
          return mutationsList.map(function (mutation) {
            return mutation.attributeName;
          });
        };
        var observer = new MutationObserver(function (mutationsList) {
          return handler(getAttributesList(mutationsList));
        });
        var targetNode = _this3.root_.querySelector(strings.INPUT_SELECTOR);
        var config = { attributes: true };
        observer.observe(targetNode, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {
        return observer.disconnect();
      },
      isFocused: function isFocused() {
        return document.activeElement === _this3.root_.querySelector(strings.INPUT_SELECTOR);
      },
      isRtl: function isRtl() {
        return window.getComputedStyle(_this3.root_).getPropertyValue('direction') === 'rtl';
      }
    }, this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_()), this.getFoundationMap_());
  };

  /**
   * @return {!{
   *   shakeLabel: function(boolean): undefined,
   *   floatLabel: function(boolean): undefined,
   *   hasLabel: function(): boolean,
   *   getLabelWidth: function(): number,
   * }}
   */


  MDCTextField.prototype.getLabelAdapterMethods_ = function getLabelAdapterMethods_() {
    var _this4 = this;

    return {
      shakeLabel: function shakeLabel(shouldShake) {
        return _this4.label_.shake(shouldShake);
      },
      floatLabel: function floatLabel(shouldFloat) {
        return _this4.label_.float(shouldFloat);
      },
      hasLabel: function hasLabel() {
        return !!_this4.label_;
      },
      getLabelWidth: function getLabelWidth() {
        return _this4.label_.getWidth();
      }
    };
  };

  /**
   * @return {!{
   *   activateLineRipple: function(): undefined,
   *   deactivateLineRipple: function(): undefined,
   *   setLineRippleTransformOrigin: function(number): undefined,
   * }}
   */


  MDCTextField.prototype.getLineRippleAdapterMethods_ = function getLineRippleAdapterMethods_() {
    var _this5 = this;

    return {
      activateLineRipple: function activateLineRipple() {
        if (_this5.lineRipple_) {
          _this5.lineRipple_.activate();
        }
      },
      deactivateLineRipple: function deactivateLineRipple() {
        if (_this5.lineRipple_) {
          _this5.lineRipple_.deactivate();
        }
      },
      setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
        if (_this5.lineRipple_) {
          _this5.lineRipple_.setRippleCenter(normalizedX);
        }
      }
    };
  };

  /**
   * @return {!{
   *   notchOutline: function(number, boolean): undefined,
   *   hasOutline: function(): boolean,
   * }}
   */


  MDCTextField.prototype.getOutlineAdapterMethods_ = function getOutlineAdapterMethods_() {
    var _this6 = this;

    return {
      notchOutline: function notchOutline(labelWidth, isRtl) {
        return _this6.outline_.notch(labelWidth, isRtl);
      },
      closeOutline: function closeOutline() {
        return _this6.outline_.closeNotch();
      },
      hasOutline: function hasOutline() {
        return !!_this6.outline_;
      }
    };
  };

  /**
   * @return {!{
   *   registerInputInteractionHandler: function(string, function()): undefined,
   *   deregisterInputInteractionHandler: function(string, function()): undefined,
   *   getNativeInput: function(): ?Element,
   * }}
   */


  MDCTextField.prototype.getInputAdapterMethods_ = function getInputAdapterMethods_() {
    var _this7 = this;

    return {
      registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
        return _this7.input_.addEventListener(evtType, handler);
      },
      deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
        return _this7.input_.removeEventListener(evtType, handler);
      },
      getNativeInput: function getNativeInput() {
        return _this7.input_;
      }
    };
  };

  /**
   * Returns a map of all subcomponents to subfoundations.
   * @return {!FoundationMapType}
   */


  MDCTextField.prototype.getFoundationMap_ = function getFoundationMap_() {
    return {
      helperText: this.helperText_ ? this.helperText_.foundation : undefined,
      icon: this.icon_ ? this.icon_.foundation : undefined
    };
  };

  textfield__createClass(MDCTextField, [{
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /**
     * @param {string} value The value to set on the input.
     */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }

    /**
     * @return {boolean} True if the Text Field is disabled.
     */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /**
     * @param {boolean} disabled Sets the Text Field disabled or enabled.
     */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }

    /**
     * @return {boolean} valid True if the Text Field is valid.
     */

  }, {
    key: 'valid',
    get: function get() {
      return this.foundation_.isValid();
    }

    /**
     * @param {boolean} valid Sets the Text Field valid or invalid.
     */
    ,
    set: function set(valid) {
      this.foundation_.setValid(valid);
    }

    /**
     * @return {boolean} True if the Text Field is required.
     */

  }, {
    key: 'required',
    get: function get() {
      return this.input_.required;
    }

    /**
     * @param {boolean} required Sets the Text Field to required.
     */
    ,
    set: function set(required) {
      this.input_.required = required;
    }

    /**
     * @return {string} The input element's validation pattern.
     */

  }, {
    key: 'pattern',
    get: function get() {
      return this.input_.pattern;
    }

    /**
     * @param {string} pattern Sets the input element's validation pattern.
     */
    ,
    set: function set(pattern) {
      this.input_.pattern = pattern;
    }

    /**
     * @return {number} The input element's minLength.
     */

  }, {
    key: 'minLength',
    get: function get() {
      return this.input_.minLength;
    }

    /**
     * @param {number} minLength Sets the input element's minLength.
     */
    ,
    set: function set(minLength) {
      this.input_.minLength = minLength;
    }

    /**
     * @return {number} The input element's maxLength.
     */

  }, {
    key: 'maxLength',
    get: function get() {
      return this.input_.maxLength;
    }

    /**
     * @param {number} maxLength Sets the input element's maxLength.
     */
    ,
    set: function set(maxLength) {
      // Chrome throws exception if maxLength is set < 0
      if (maxLength < 0) {
        this.input_.removeAttribute('maxLength');
      } else {
        this.input_.maxLength = maxLength;
      }
    }

    /**
     * @return {string} The input element's min.
     */

  }, {
    key: 'min',
    get: function get() {
      return this.input_.min;
    }

    /**
     * @param {string} min Sets the input element's min.
     */
    ,
    set: function set(min) {
      this.input_.min = min;
    }

    /**
     * @return {string} The input element's max.
     */

  }, {
    key: 'max',
    get: function get() {
      return this.input_.max;
    }

    /**
     * @param {string} max Sets the input element's max.
     */
    ,
    set: function set(max) {
      this.input_.max = max;
    }

    /**
     * @return {string} The input element's step.
     */

  }, {
    key: 'step',
    get: function get() {
      return this.input_.step;
    }

    /**
     * @param {string} step Sets the input element's step.
     */
    ,
    set: function set(step) {
      this.input_.step = step;
    }

    /**
     * Sets the helper text element content.
     * @param {string} content
     */

  }, {
    key: 'helperTextContent',
    set: function set(content) {
      this.foundation_.setHelperTextContent(content);
    }

    /**
     * Sets the aria label of the icon.
     * @param {string} label
     */

  }, {
    key: 'iconAriaLabel',
    set: function set(label) {
      this.foundation_.setIconAriaLabel(label);
    }

    /**
     * Sets the text content of the icon.
     * @param {string} content
     */

  }, {
    key: 'iconContent',
    set: function set(content) {
      this.foundation_.setIconContent(content);
    }

    /**
     * Enables or disables the use of native validation. Use this for custom validation.
     * @param {boolean} useNativeValidation Set this to false to ignore native input validation.
     */

  }, {
    key: 'useNativeValidation',
    set: function set(useNativeValidation) {
      this.foundation_.setUseNativeValidation(useNativeValidation);
    }
  }]);

  return MDCTextField;
}(component["a" /* default */]);



/***/ }),

/***/ "WotE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"filters":"filters__26zC5"};

/***/ }),

/***/ "X5xa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return wrapWithTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object__ = __webpack_require__("6dK+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stylis__ = __webpack_require__("YOxv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stylis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_stylis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("eW0v");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("5D9O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hoist_non_react_statics__ = __webpack_require__("2DKW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hoist_non_react_statics__);






/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate$2(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

var hyphenate_1 = hyphenate$2;

var hyphenate = hyphenate_1;

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var hyphenateStyleName_1 = hyphenateStyleName;

//      
var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).filter(function (key) {
    var chunk = obj[key];
    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
  }).map(function (key) {
    if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(obj[key])) return objToCss(obj[key], key);
    return hyphenateStyleName_1(key) + ': ' + obj[key] + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

var flatten = function flatten(chunks, executionContext) {
  return chunks.reduce(function (ruleSet, chunk) {
    /* Remove falsey values */
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') {
      return ruleSet;
    }
    /* Flatten ruleSet */
    if (Array.isArray(chunk)) {
      return [].concat(ruleSet, flatten(chunk, executionContext));
    }

    /* Handle other components */
    if (chunk.hasOwnProperty('styledComponentId')) {
      // $FlowFixMe not sure how to make this pass
      return [].concat(ruleSet, ['.' + chunk.styledComponentId]);
    }

    /* Either execute or defer the function */
    if (typeof chunk === 'function') {
      return executionContext ? ruleSet.concat.apply(ruleSet, flatten([chunk(executionContext)], executionContext)) : ruleSet.concat(chunk);
    }

    /* Handle objects */
    return ruleSet.concat(
    // $FlowFixMe have to add %checks somehow to isPlainObject
    __WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(chunk) ? objToCss(chunk) : chunk.toString());
  }, []);
};

//      
var stylis = new __WEBPACK_IMPORTED_MODULE_1_stylis___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: true
});

var stringifyRules = function stringifyRules(rules, selector, prefix) {
  var flatCSS = rules.join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  return stylis(prefix || !selector ? '' : selector, cssStr);
};

//      
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var charsLength = chars.length;

/* Some high number, usually 9-digit base-10. Map it to base-😎 */
var generateAlphabeticName = function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = chars[x % charsLength] + name;
  }

  return chars[x % charsLength] + name;
};

//      


var interleave = function interleave(strings, interpolations) {
  return interpolations.reduce(function (array, interp, i) {
    return array.concat(interp, strings[i + 1]);
  }, [strings[0]]);
};

//      
var css = function css(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  return flatten(interleave(strings, interpolations));
};

//      
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s+(\S+)\s+\*\//gm;

var extractCompsFromCSS = function extractCompsFromCSS(maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
};

//      
/* eslint-disable camelcase, no-undef */

var getNonce = function getNonce() {
  return  true ? __webpack_require__.nc : null;
};

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

//      
/* eslint-disable no-underscore-dangle */
/*
 * Browser Style Sheet with Rehydration
 *
 * <style data-styled-components="x y z"
 *        data-styled-components-is-local="true">
 *   /· sc-component-id: a ·/
 *   .sc-a { ... }
 *   .x { ... }
 *   /· sc-component-id: b ·/
 *   .sc-b { ... }
 *   .y { ... }
 *   .z { ... }
 * </style>
 *
 * Note: replace · with * in the above snippet.
 * */
var COMPONENTS_PER_TAG = 40;

var BrowserTag = function () {
  function BrowserTag(el, isLocal) {
    var existingSource = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    classCallCheck(this, BrowserTag);

    this.el = el;
    this.isLocal = isLocal;
    this.ready = false;

    var extractedComps = extractCompsFromCSS(existingSource);

    this.size = extractedComps.length;
    this.components = extractedComps.reduce(function (acc, obj) {
      acc[obj.componentId] = obj; // eslint-disable-line no-param-reassign
      return acc;
    }, {});
  }

  BrowserTag.prototype.isFull = function isFull() {
    return this.size >= COMPONENTS_PER_TAG;
  };

  BrowserTag.prototype.addComponent = function addComponent(componentId) {
    if (!this.ready) this.replaceElement();
    if (false) {
      throw new Error('Trying to add Component \'' + componentId + '\' twice!');
    }

    var comp = { componentId: componentId, textNode: document.createTextNode('') };
    this.el.appendChild(comp.textNode);

    this.size += 1;
    this.components[componentId] = comp;
  };

  BrowserTag.prototype.inject = function inject(componentId, css, name) {
    if (!this.ready) this.replaceElement();
    var comp = this.components[componentId];

    if (false) {
      throw new Error('Must add a new component before you can inject css into it');
    }
    if (comp.textNode.data === '') {
      comp.textNode.appendData('\n/* sc-component-id: ' + componentId + ' */\n');
    }

    comp.textNode.appendData(css);
    if (name) {
      var existingNames = this.el.getAttribute(SC_ATTR);
      this.el.setAttribute(SC_ATTR, existingNames ? existingNames + ' ' + name : name);
    }

    var nonce = getNonce();

    if (nonce) {
      this.el.setAttribute('nonce', nonce);
    }
  };

  BrowserTag.prototype.toHTML = function toHTML() {
    return this.el.outerHTML;
  };

  BrowserTag.prototype.toReactElement = function toReactElement() {
    throw new Error("BrowserTag doesn't implement toReactElement!");
  };

  BrowserTag.prototype.clone = function clone() {
    throw new Error('BrowserTag cannot be cloned!');
  };

  /* Because we care about source order, before we can inject anything we need to
   * create a text node for each component and replace the existing CSS. */

  BrowserTag.prototype.replaceElement = function replaceElement() {
    var _this = this;

    this.ready = true;
    // We have nothing to inject. Use the current el.
    if (this.size === 0) return;

    // Build up our replacement style tag
    var newEl = this.el.cloneNode();
    newEl.appendChild(document.createTextNode('\n'));

    Object.keys(this.components).forEach(function (key) {
      var comp = _this.components[key];

      // eslint-disable-next-line no-param-reassign
      comp.textNode = document.createTextNode(comp.cssFromDOM);
      newEl.appendChild(comp.textNode);
    });

    if (!this.el.parentNode) {
      throw new Error("Trying to replace an element that wasn't mounted!");
    }

    // The ol' switcheroo
    this.el.parentNode.replaceChild(newEl, this.el);
    this.el = newEl;
  };

  return BrowserTag;
}();

/* Factory function to separate DOM operations from logical ones*/

var BrowserStyleSheet = {
  create: function create() {
    var tags = [];
    var names = {};

    /* Construct existing state from DOM */
    var nodes = document.querySelectorAll('[' + SC_ATTR + ']');
    var nodesLength = nodes.length;

    for (var i = 0; i < nodesLength; i += 1) {
      var el = nodes[i];

      tags.push(new BrowserTag(el, el.getAttribute(LOCAL_ATTR) === 'true', el.innerHTML));

      var attr = el.getAttribute(SC_ATTR);
      if (attr) {
        attr.trim().split(/\s+/).forEach(function (name) {
          names[name] = true;
        });
      }
    }

    /* Factory for making more tags */
    var tagConstructor = function tagConstructor(isLocal) {
      var el = document.createElement('style');
      el.type = 'text/css';
      el.setAttribute(SC_ATTR, '');
      el.setAttribute(LOCAL_ATTR, isLocal ? 'true' : 'false');
      if (!document.head) throw new Error('Missing document <head>');
      document.head.appendChild(el);
      return new BrowserTag(el, isLocal);
    };

    return new StyleSheet(tagConstructor, tags, names);
  }
};

//      
var SC_ATTR = 'data-styled-components';
var LOCAL_ATTR = 'data-styled-components-is-local';
var CONTEXT_KEY = '__styled-components-stylesheet__';

/* eslint-disable flowtype/object-type-delimiter */

/* eslint-enable flowtype/object-type-delimiter */

var instance = null;
// eslint-disable-next-line no-use-before-define
var clones = [];

var StyleSheet = function () {
  function StyleSheet(tagConstructor) {
    var tags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var names = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, StyleSheet);
    this.hashes = {};
    this.deferredInjections = {};
    this.stylesCacheable = typeof document !== 'undefined';

    this.tagConstructor = tagConstructor;
    this.tags = tags;
    this.names = names;
    this.constructComponentTagMap();
  }

  // helper for `ComponentStyle` to know when it cache static styles.
  // staticly styled-component can not safely cache styles on the server
  // without all `ComponentStyle` instances saving a reference to the
  // the styleSheet instance they last rendered with,
  // or listening to creation / reset events. otherwise you might create
  // a component with one stylesheet and render it another api response
  // with another, losing styles on from your server-side render.


  StyleSheet.prototype.constructComponentTagMap = function constructComponentTagMap() {
    var _this = this;

    this.componentTags = {};

    this.tags.forEach(function (tag) {
      Object.keys(tag.components).forEach(function (componentId) {
        _this.componentTags[componentId] = tag;
      });
    });
  };

  /* Best level of caching—get the name from the hash straight away. */

  StyleSheet.prototype.getName = function getName(hash) {
    return this.hashes[hash.toString()];
  };

  /* Second level of caching—if the name is already in the dom, don't
   * inject anything and record the hash for getName next time. */

  StyleSheet.prototype.alreadyInjected = function alreadyInjected(hash, name) {
    if (!this.names[name]) return false;

    this.hashes[hash.toString()] = name;
    return true;
  };

  /* Third type of caching—don't inject components' componentId twice. */

  StyleSheet.prototype.hasInjectedComponent = function hasInjectedComponent(componentId) {
    return !!this.componentTags[componentId];
  };

  StyleSheet.prototype.deferredInject = function deferredInject(componentId, isLocal, css) {
    if (this === instance) {
      clones.forEach(function (clone) {
        clone.deferredInject(componentId, isLocal, css);
      });
    }

    this.getOrCreateTag(componentId, isLocal);
    this.deferredInjections[componentId] = css;
  };

  StyleSheet.prototype.inject = function inject(componentId, isLocal, css, hash, name) {
    if (this === instance) {
      clones.forEach(function (clone) {
        clone.inject(componentId, isLocal, css);
      });
    }

    var tag = this.getOrCreateTag(componentId, isLocal);

    var deferredInjection = this.deferredInjections[componentId];
    if (deferredInjection) {
      tag.inject(componentId, deferredInjection);
      delete this.deferredInjections[componentId];
    }

    tag.inject(componentId, css, name);

    if (hash && name) {
      this.hashes[hash.toString()] = name;
    }
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    return this.tags.map(function (tag, i) {
      return tag.toReactElement('sc-' + i);
    });
  };

  StyleSheet.prototype.getOrCreateTag = function getOrCreateTag(componentId, isLocal) {
    var existingTag = this.componentTags[componentId];
    if (existingTag) {
      return existingTag;
    }

    var lastTag = this.tags[this.tags.length - 1];
    var componentTag = !lastTag || lastTag.isFull() || lastTag.isLocal !== isLocal ? this.createNewTag(isLocal) : lastTag;
    this.componentTags[componentId] = componentTag;
    componentTag.addComponent(componentId);
    return componentTag;
  };

  StyleSheet.prototype.createNewTag = function createNewTag(isLocal) {
    var newTag = this.tagConstructor(isLocal);
    this.tags.push(newTag);
    return newTag;
  };

  StyleSheet.reset = function reset(isServer) {
    instance = StyleSheet.create(isServer);
  };

  /* We can make isServer totally implicit once Jest 20 drops and we
   * can change environment on a per-test basis. */

  StyleSheet.create = function create() {
    var isServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : typeof document === 'undefined';

    return (isServer ? ServerStyleSheet : BrowserStyleSheet).create();
  };

  StyleSheet.clone = function clone(oldSheet) {
    var newSheet = new StyleSheet(oldSheet.tagConstructor, oldSheet.tags.map(function (tag) {
      return tag.clone();
    }), _extends({}, oldSheet.names));

    newSheet.hashes = _extends({}, oldSheet.hashes);
    newSheet.deferredInjections = _extends({}, oldSheet.deferredInjections);
    clones.push(newSheet);

    return newSheet;
  };

  createClass(StyleSheet, null, [{
    key: 'instance',
    get: function get$$1() {
      return instance || (instance = StyleSheet.create());
    }
  }]);
  return StyleSheet;
}();

var _StyleSheetManager$ch;

//      
var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager() {
    classCallCheck(this, StyleSheetManager);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  StyleSheetManager.prototype.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[CONTEXT_KEY] = this.props.sheet, _ref;
  };

  StyleSheetManager.prototype.render = function render() {
    /* eslint-disable react/prop-types */
    // Flow v0.43.1 will report an error accessing the `children` property,
    // but v0.47.0 will not. It is necessary to use a type cast instead of
    // a "fixme" comment to satisfy both Flow versions.
    return __WEBPACK_IMPORTED_MODULE_2_react__["c" /* default */].Children.only(this.props.children);
  };

  return StyleSheetManager;
}(__WEBPACK_IMPORTED_MODULE_2_react__["a" /* Component */]);

StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[CONTEXT_KEY] = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(ServerStyleSheet)]).isRequired, _StyleSheetManager$ch);

StyleSheetManager.propTypes = {
  sheet: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(ServerStyleSheet)]).isRequired
};

//      
/* eslint-disable no-underscore-dangle */
var ServerTag = function () {
  function ServerTag(isLocal) {
    classCallCheck(this, ServerTag);

    this.isLocal = isLocal;
    this.components = {};
    this.size = 0;
    this.names = [];
  }

  ServerTag.prototype.isFull = function isFull() {
    return false;
  };

  ServerTag.prototype.addComponent = function addComponent(componentId) {
    if (false) {
      throw new Error('Trying to add Component \'' + componentId + '\' twice!');
    }
    this.components[componentId] = { componentId: componentId, css: '' };
    this.size += 1;
  };

  ServerTag.prototype.concatenateCSS = function concatenateCSS() {
    var _this = this;

    return Object.keys(this.components).reduce(function (styles, k) {
      return styles + _this.components[k].css;
    }, '');
  };

  ServerTag.prototype.inject = function inject(componentId, css, name) {
    var comp = this.components[componentId];

    if (false) {
      throw new Error('Must add a new component before you can inject css into it');
    }
    if (comp.css === '') comp.css = '/* sc-component-id: ' + componentId + ' */\n';

    comp.css += css.replace(/\n*$/, '\n');

    if (name) this.names.push(name);
  };

  ServerTag.prototype.toHTML = function toHTML() {
    var attrs = ['type="text/css"', SC_ATTR + '="' + this.names.join(' ') + '"', LOCAL_ATTR + '="' + (this.isLocal ? 'true' : 'false') + '"'];

    var nonce = getNonce();

    if (nonce) {
      attrs.push('nonce="' + nonce + '"');
    }

    return '<style ' + attrs.join(' ') + '>' + this.concatenateCSS() + '</style>';
  };

  ServerTag.prototype.toReactElement = function toReactElement(key) {
    var _attrs;

    var attrs = (_attrs = {}, _attrs[SC_ATTR] = this.names.join(' '), _attrs[LOCAL_ATTR] = this.isLocal.toString(), _attrs);

    var nonce = getNonce();

    if (nonce) {
      attrs.nonce = nonce;
    }

    return __WEBPACK_IMPORTED_MODULE_2_react__["c" /* default */].createElement('style', _extends({
      key: key,
      type: 'text/css'
    }, attrs, {
      dangerouslySetInnerHTML: { __html: this.concatenateCSS() }
    }));
  };

  ServerTag.prototype.clone = function clone() {
    var _this2 = this;

    var copy = new ServerTag(this.isLocal);
    copy.names = [].concat(this.names);
    copy.size = this.size;
    copy.components = Object.keys(this.components).reduce(function (acc, key) {
      acc[key] = _extends({}, _this2.components[key]); // eslint-disable-line no-param-reassign
      return acc;
    }, {});

    return copy;
  };

  return ServerTag;
}();

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    this.instance = StyleSheet.clone(StyleSheet.instance);
  }

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.closed) {
      throw new Error("Can't collect styles once you've called getStyleTags!");
    }
    return __WEBPACK_IMPORTED_MODULE_2_react__["c" /* default */].createElement(StyleSheetManager, { sheet: this.instance }, children);
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    if (!this.closed) {
      clones.splice(clones.indexOf(this.instance), 1);
      this.closed = true;
    }

    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    if (!this.closed) {
      clones.splice(clones.indexOf(this.instance), 1);
      this.closed = true;
    }

    return this.instance.toReactElements();
  };

  ServerStyleSheet.create = function create() {
    return new StyleSheet(function (isLocal) {
      return new ServerTag(isLocal);
    });
  };

  return ServerStyleSheet;
}();

//      

var LIMIT = 200;

var createWarnTooManyClasses = function createWarnTooManyClasses(displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
};

//      
/* eslint-disable max-len */
/**
 * Trying to avoid the unknown-prop errors on styled components by filtering by
 * React's attribute whitelist.
 *
 * To regenerate this regex:
 *
 * 1. `npm i -g regexgen` (https://github.com/devongovett/regexgen)
 * 2. Run `regexgen` with the list of space-separated words below as input
 * 3. Surround the emitted regex with this: `/^(GENERATED_REGEX)$/` -- this will ensure a full string match
 *    and no false positives from partials
 **/
/*
children dangerouslySetInnerHTML key ref autoFocus defaultValue valueLink defaultChecked checkedLink innerHTML suppressContentEditableWarning onFocusIn onFocusOut className onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onReset onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd onCopyCapture onCutCapture onPasteCapture onCompositionEndCapture onCompositionStartCapture onCompositionUpdateCapture onKeyDownCapture onKeyPressCapture onKeyUpCapture onFocusCapture onBlurCapture onChangeCapture onInputCapture onSubmitCapture onResetCapture onClickCapture onContextMenuCapture onDoubleClickCapture onDragCapture onDragEndCapture onDragEnterCapture onDragExitCapture onDragLeaveCapture onDragOverCapture onDragStartCapture onDropCapture onMouseDownCapture onMouseEnterCapture onMouseLeaveCapture onMouseMoveCapture onMouseOutCapture onMouseOverCapture onMouseUpCapture onSelectCapture onTouchCancelCapture onTouchEndCapture onTouchMoveCapture onTouchStartCapture onScrollCapture onWheelCapture onAbortCapture onCanPlayCapture onCanPlayThroughCapture onDurationChangeCapture onEmptiedCapture onEncryptedCapture onEndedCapture onErrorCapture onLoadedDataCapture onLoadedMetadataCapture onLoadStartCapture onPauseCapture onPlayCapture onPlayingCapture onProgressCapture onRateChangeCapture onSeekedCapture onSeekingCapture onStalledCapture onSuspendCapture onTimeUpdateCapture onVolumeChangeCapture onWaitingCapture onLoadCapture onAnimationStartCapture onAnimationEndCapture onAnimationIterationCapture onTransitionEndCapture accept acceptCharset accessKey action allowFullScreen allowTransparency alt as async autoComplete autoPlay capture cellPadding cellSpacing charSet challenge checked cite classID className cols colSpan content contentEditable contextMenu controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name nonce noValidate open optimum pattern placeholder playsInline poster preload profile radioGroup readOnly referrerPolicy rel required reversed role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable accentHeight accumulate additive alignmentBaseline allowReorder alphabetic amplitude arabicForm ascent attributeName attributeType autoReverse azimuth baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight clip clipPath clipRule clipPathUnits colorInterpolation colorInterpolationFilters colorProfile colorRendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground end exponent externalResourcesRequired fill fillOpacity fillRule filter filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor limitingConeAngle local markerEnd markerMid markerStart markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode numOctaves offset opacity operator order orient orientation origin overflow overlinePosition overlineThickness paintOrder panose1 pathLength patternContentUnits patternTransform patternUnits pointerEvents points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shapeRendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stopColor stopOpacity strikethroughPosition strikethroughThickness string stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor textDecoration textRendering textLength to transform u1 u2 underlinePosition underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic vHanging vIdeographic vMathematical values vectorEffect version vertAdvY vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing writingMode x xHeight x1 x2 xChannelSelector xlinkActuate xlinkArcrole xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlBase xmlns xmlnsXlink xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan
*/
/* eslint-enable max-len */

var ATTRIBUTE_REGEX = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|(?:attribute|glyph)Nam|playsInlin|(?:formE|e)ncTyp|(?:writing|input|edge)Mod|(?:xlinkTy|itemSco|keyTy|slo)p|(?:amplitu|mo)d|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ntrol|ord)s|o(?:lor(?:Interpolation)?|ntent)|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|o(?:ntextMenu|ls)|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|(?:rossOrigi|olSpa)n|apHeight|lip(?:Path)?|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|autoFocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|formActio|zoomAndPa|onFocusI|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)|rient)|p(?:reserveA(?:spectRatio|lpha)|ointsAt[X-Z]|anose1)|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:gradientT|patternT|t)ransform|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:strokeMiterlimi|(?:specularConsta|repeatCou|fontVaria)n|(?:(?:specularE|e)xpon|renderingInt|asc)en|d(?:iffuseConsta|esce)n|(?:fontSizeAdju|lengthAdju|manife)s|baselineShif|vectorEffec|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|a(?:utoCorrec|bou)|markerStar|onFocusOu|in(?:tercep|lis)|restar|forma|heigh|lis)t|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|m(?:arkerMi|etho)|preloa|kin)d|k(?:ernel(?:UnitLength|Matrix)|[1-4])|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:allowFullScre|hidd)en|strokeDasharray|systemLanguage|(?:strokeLineca|itemPro|useMa|wra|loo)p|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|(?:pointerEve|keyPoi)nts|unicodeRange|(?:(?:allowReord|placehold|frameBord|paintOrd|post|ord)e|repeatDu|d(?:efe|u))r|mathematical|(?:vI|i)deographic|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|vAlphabetic|mediaGroup|spellCheck|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|(?:xmlnsXl|valueL)ink|a(?:rabicForm|l(?:phabetic|t)|sync)|pathLength|(?:text|m(?:in|ax))Length|innerHTML|xlinkShow|(?:xlinkHr|glyphR)ef|r(?:e(?:quired|sult|f))?|o(?:verflow|pen)|(?:tabInde|(?:sand|b)bo|viewBo)x|(?:(?:href|xml|src)La|kerni)ng|f(?:o(?:ntSize|rm)|il(?:ter|l))|autoPlay|unicode|p(?:attern|oints)|t(?:arget[XY]|o)|i(?:temRef|n2|s)|divisor|d(?:efault|ata|ir)?|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|(?:width|size)s|(?:stri|la)ng|prefix|itemID|s(?:t(?:roke|art)|hape|cope|rc)|a(?:ccept|s)|t(?:arget|ype)|typeof|width|value|x(?:mlns)?|label|m(?:edia|a(?:sk|x)|in)|size|href|k(?:ey)?|end|low|x[12]|i[dn]|y[12]|g[12]|by|f[xy]|[yz])$/;

/* From DOMProperty */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

var validAttr = function validAttr(name) {
  return ATTRIBUTE_REGEX.test(name) || isCustomAttribute(name.toLowerCase());
};

//      


function isTag(target) /* : %checks */{
  return typeof target === 'string';
}

//      


function isStyledComponent(target) /* : %checks */{
  return typeof target === 'function' && typeof target.styledComponentId === 'string';
}

//      

/* eslint-disable no-undef */
function getComponentName(target) {
  return target.displayName || target.name || 'Component';
}

//      


var determineTheme = function determineTheme(props, fallbackTheme, defaultProps) {
  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types */
  var isDefaultTheme = defaultProps && props.theme === defaultProps.theme;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme;
  /* eslint-enable */

  return theme;
};

//      
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

//      
/**
 * Creates a broadcast that can be listened to, i.e. simple event emitter
 *
 * @see https://github.com/ReactTraining/react-broadcast
 */

var createBroadcast = function createBroadcast(initialState) {
  var listeners = {};
  var id = 0;
  var state = initialState;

  function publish(nextState) {
    state = nextState;

    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in listeners) {
      var listener = listeners[key];
      if (listener === undefined) {
        // eslint-disable-next-line no-continue
        continue;
      }

      listener(state);
    }
  }

  function subscribe(listener) {
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    listener(state);
    return currentId;
  }

  function unsubscribe(unsubID) {
    listeners[unsubID] = undefined;
  }

  return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe };
};

//      
// Helper to call a given function, only once
var once = function once(cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb();
    }
  };
};

var _ThemeProvider$childC;
var _ThemeProvider$contex;

//      
/* globals React$Element */
// NOTE: DO NOT CHANGE, changing this is a semver major change!
var CHANNEL = '__styled-components__';
var CHANNEL_NEXT = CHANNEL + 'next__';

var CONTEXT_CHANNEL_SHAPE = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
  getTheme: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  subscribe: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  unsubscribe: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
});

var warnChannelDeprecated = void 0;
if (false) {
  warnChannelDeprecated = once(function () {
    // eslint-disable-next-line no-console
    console.error('Warning: Usage of `context.' + CHANNEL + '` as a function is deprecated. It will be replaced with the object on `.context.' + CHANNEL_NEXT + '` in a future version.');
  });
}

var isFunction = function isFunction(test) {
  return typeof test === 'function';
};

/**
 * Provide a theme to an entire react component tree via context and event listeners (have to do
 * both context and event emitter as pure components block context updates)
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.unsubscribeToOuterId = -1;

    _this.getTheme = _this.getTheme.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
    // with the outer theme
    var outerContext = this.context[CHANNEL_NEXT];
    if (outerContext !== undefined) {
      this.unsubscribeToOuterId = outerContext.subscribe(function (theme) {
        _this2.outerTheme = theme;
      });
    }
    this.broadcast = createBroadcast(this.getTheme());
  };

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    var _this3 = this,
        _babelHelpers$extends;

    return _extends({}, this.context, (_babelHelpers$extends = {}, _babelHelpers$extends[CHANNEL_NEXT] = {
      getTheme: this.getTheme,
      subscribe: this.broadcast.subscribe,
      unsubscribe: this.broadcast.unsubscribe
    }, _babelHelpers$extends[CHANNEL] = function (subscriber) {
      if (false) {
        warnChannelDeprecated();
      }

      // Patch the old `subscribe` provide via `CHANNEL` for older clients.
      var unsubscribeId = _this3.broadcast.subscribe(subscriber);
      return function () {
        return _this3.broadcast.unsubscribe(unsubscribeId);
      };
    }, _babelHelpers$extends));
  };

  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) {
      this.broadcast.publish(this.getTheme(nextProps.theme));
    }
  };

  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribeToOuterId !== -1) {
      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId);
    }
  };

  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation


  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
    var theme = passedTheme || this.props.theme;
    if (isFunction(theme)) {
      var mergedTheme = theme(this.outerTheme);
      if (false) {
        throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
      }
      return mergedTheme;
    }
    if (!__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(theme)) {
      throw new Error('[ThemeProvider] Please make your theme prop a plain object');
    }
    return _extends({}, this.outerTheme, theme);
  };

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) {
      return null;
    }
    return __WEBPACK_IMPORTED_MODULE_2_react__["c" /* default */].Children.only(this.props.children);
  };

  return ThemeProvider;
}(__WEBPACK_IMPORTED_MODULE_2_react__["a" /* Component */]);

ThemeProvider.childContextTypes = (_ThemeProvider$childC = {}, _ThemeProvider$childC[CHANNEL] = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, _ThemeProvider$childC[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$childC);
ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$contex);

//      

// HACK for generating all static styles without needing to allocate
// an empty execution context every single time...
var STATIC_EXECUTION_CONTEXT = {};

var _StyledComponent = function _StyledComponent(ComponentStyle, constructWithOptions) {
  var identifiers = {};

  /* We depend on components having unique IDs */
  var generateId = function generateId(_displayName, parentComponentId) {
    var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

    var componentId = void 0;

    /**
     * only fall back to hashing the component injection order if
     * a proper displayName isn't provided by the babel plugin
     */
    if (!_displayName) {
      var nr = (identifiers[displayName] || 0) + 1;
      identifiers[displayName] = nr;

      componentId = displayName + '-' + ComponentStyle.generateName(displayName + nr);
    } else {
      componentId = displayName + '-' + ComponentStyle.generateName(displayName);
    }

    return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
  };

  var BaseStyledComponent = function (_Component) {
    inherits(BaseStyledComponent, _Component);

    function BaseStyledComponent() {
      var _temp, _this, _ret;

      classCallCheck(this, BaseStyledComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
        theme: null,
        generatedClassName: ''
      }, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
      var attrs = this.constructor.attrs;

      var context = _extends({}, props, { theme: theme });
      if (attrs === undefined) {
        return context;
      }

      this.attrs = Object.keys(attrs).reduce(function (acc, key) {
        var attr = attrs[key];
        // eslint-disable-next-line no-param-reassign
        acc[key] = typeof attr === 'function' ? attr(context) : attr;
        return acc;
      }, {});

      return _extends({}, context, this.attrs);
    };

    BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
      var _constructor = this.constructor,
          attrs = _constructor.attrs,
          componentStyle = _constructor.componentStyle,
          warnTooManyClasses = _constructor.warnTooManyClasses;

      var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.instance;

      // staticaly styled-components don't need to build an execution context object,
      // and shouldn't be increasing the number of class names
      if (componentStyle.isStatic && attrs === undefined) {
        return componentStyle.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, styleSheet);
      } else {
        var executionContext = this.buildExecutionContext(theme, props);
        var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);

        if (false) {
          warnTooManyClasses(className);
        }

        return className;
      }
    };

    BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var componentStyle = this.constructor.componentStyle;

      var styledContext = this.context[CHANNEL_NEXT];

      // If this is a staticaly-styled component, we don't need to the theme
      // to generate or build styles.
      if (componentStyle.isStatic) {
        var generatedClassName = this.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, this.props);
        this.setState({ generatedClassName: generatedClassName });
        // If there is a theme in the context, subscribe to the event emitter. This
        // is necessary due to pure components blocking context updates, this circumvents
        // that by updating when an event is emitted
      } else if (styledContext !== undefined) {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          // This will be called once immediately
          var theme = determineTheme(_this2.props, nextTheme, _this2.constructor.defaultProps);
          var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);

          _this2.setState({ theme: theme, generatedClassName: generatedClassName });
        });
      } else {
        // eslint-disable-next-line react/prop-types
        var theme = this.props.theme || {};
        var _generatedClassName = this.generateAndInjectStyles(theme, this.props);
        this.setState({ theme: theme, generatedClassName: _generatedClassName });
      }
    };

    BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      // If this is a staticaly-styled component, we don't need to listen to
      // props changes to update styles
      var componentStyle = this.constructor.componentStyle;

      if (componentStyle.isStatic) {
        return;
      }

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, _this3.constructor.defaultProps);
        var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

        return { theme: theme, generatedClassName: generatedClassName };
      });
    };

    BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this.unsubscribeFromContext();
    };

    BaseStyledComponent.prototype.render = function render() {
      var _this4 = this;

      // eslint-disable-next-line react/prop-types
      var innerRef = this.props.innerRef;
      var generatedClassName = this.state.generatedClassName;
      var _constructor2 = this.constructor,
          styledComponentId = _constructor2.styledComponentId,
          target = _constructor2.target;

      var isTargetTag = isTag(target);

      var className = [
      // eslint-disable-next-line react/prop-types
      this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');

      var baseProps = _extends({}, this.attrs, {
        className: className
      });

      if (isStyledComponent(target)) {
        baseProps.innerRef = innerRef;
      } else {
        baseProps.ref = innerRef;
      }

      var propsForElement = Object.keys(this.props).reduce(function (acc, propName) {
        // Don't pass through non HTML tags through to HTML elements
        // always omit innerRef
        if (propName !== 'innerRef' && propName !== 'className' && (!isTargetTag || validAttr(propName))) {
          // eslint-disable-next-line no-param-reassign
          acc[propName] = _this4.props[propName];
        }

        return acc;
      }, baseProps);

      return Object(__WEBPACK_IMPORTED_MODULE_2_react__["b" /* createElement */])(target, propsForElement);
    };

    return BaseStyledComponent;
  }(__WEBPACK_IMPORTED_MODULE_2_react__["a" /* Component */]);

  var createStyledComponent = function createStyledComponent(target, options, rules) {
    var _StyledComponent$cont;

    var _options$displayName = options.displayName,
        displayName = _options$displayName === undefined ? isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')' : _options$displayName,
        _options$componentId = options.componentId,
        componentId = _options$componentId === undefined ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
        _options$ParentCompon = options.ParentComponent,
        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
        extendingRules = options.rules,
        attrs = options.attrs;

    var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : componentId;

    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), attrs, styledComponentId);

    var StyledComponent = function (_ParentComponent) {
      inherits(StyledComponent, _ParentComponent);

      function StyledComponent() {
        classCallCheck(this, StyledComponent);
        return possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
      }

      StyledComponent.withComponent = function withComponent(tag) {
        var previousComponentId = options.componentId,
            optionsToCopy = objectWithoutProperties(options, ['componentId']);

        var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

        var newOptions = _extends({}, optionsToCopy, {
          componentId: newComponentId,
          ParentComponent: StyledComponent
        });

        return createStyledComponent(tag, newOptions, rules);
      };

      createClass(StyledComponent, null, [{
        key: 'extend',
        get: function get$$1() {
          var rulesFromOptions = options.rules,
              parentComponentId = options.componentId,
              optionsToCopy = objectWithoutProperties(options, ['rules', 'componentId']);

          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);

          var newOptions = _extends({}, optionsToCopy, {
            rules: newRules,
            parentComponentId: parentComponentId,
            ParentComponent: StyledComponent
          });

          return constructWithOptions(createStyledComponent, target, newOptions);
        }
      }]);
      return StyledComponent;
    }(ParentComponent);

    StyledComponent.contextTypes = (_StyledComponent$cont = {}, _StyledComponent$cont[CHANNEL] = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, _StyledComponent$cont[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _StyledComponent$cont[CONTEXT_KEY] = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(ServerStyleSheet)]), _StyledComponent$cont);
    StyledComponent.displayName = displayName;
    StyledComponent.styledComponentId = styledComponentId;
    StyledComponent.attrs = attrs;
    StyledComponent.componentStyle = componentStyle;
    StyledComponent.target = target;

    if (false) {
      StyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
    }

    return StyledComponent;
  };

  return createStyledComponent;
};

// murmurhash2 via https://gist.github.com/raycmorgan/588423

function doHash(str, seed) {
  var m = 0x5bd1e995;
  var r = 24;
  var h = seed ^ str.length;
  var length = str.length;
  var currentIndex = 0;

  while (length >= 4) {
    var k = UInt32(str, currentIndex);

    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);

    h = Umul32(h, m);
    h ^= k;

    currentIndex += 4;
    length -= 4;
  }

  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;

    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;

    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }

  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;

  return h >>> 0;
}

function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}

function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}

function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  var nlo = n & 0xffff;
  var nhi = n >>> 16;
  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
  return res;
}

//      
var isStaticRules = function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule)) {
      return false;
    } else if (typeof rule === 'function' && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled copmonent
      return false;
    }
  }

  if (attrs !== undefined) {
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in attrs) {
      var value = attrs[key];
      if (typeof value === 'function') {
        return false;
      }
    }
  }

  return true;
};

var isHRMEnabled = typeof module !== 'undefined' && module.hot && "production" !== 'production';

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
var _ComponentStyle = function _ComponentStyle(nameGenerator, flatten, stringifyRules) {
  var ComponentStyle = function () {
    function ComponentStyle(rules, attrs, componentId) {
      classCallCheck(this, ComponentStyle);

      this.rules = rules;
      this.isStatic = !isHRMEnabled && isStaticRules(rules, attrs);
      this.componentId = componentId;
      if (!StyleSheet.instance.hasInjectedComponent(this.componentId)) {
        var placeholder =  false ? '.' + componentId + ' {}' : '';
        StyleSheet.instance.deferredInject(componentId, true, placeholder);
      }
    }

    /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */

    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
      var isStatic = this.isStatic,
          lastClassName = this.lastClassName;

      if (isStatic && lastClassName !== undefined) {
        return lastClassName;
      }

      var flatCSS = flatten(this.rules, executionContext);
      var hash = doHash(this.componentId + flatCSS.join(''));

      var existingName = styleSheet.getName(hash);
      if (existingName !== undefined) {
        if (styleSheet.stylesCacheable) {
          this.lastClassName = existingName;
        }
        return existingName;
      }

      var name = nameGenerator(hash);
      if (styleSheet.stylesCacheable) {
        this.lastClassName = existingName;
      }
      if (styleSheet.alreadyInjected(hash, name)) {
        return name;
      }

      var css = '\n' + stringifyRules(flatCSS, '.' + name);
      // NOTE: this can only be set when we inject the class-name.
      // For some reason, presumably due to how css is stringifyRules behaves in
      // differently between client and server, styles break.
      styleSheet.inject(this.componentId, true, css, hash, name);
      return name;
    };

    ComponentStyle.generateName = function generateName(str) {
      return nameGenerator(doHash(str));
    };

    return ComponentStyle;
  }();

  return ComponentStyle;
};

//      
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

//      

var _styled = function _styled(styledComponent, constructWithOptions) {
  var styled = function styled(tag) {
    return constructWithOptions(styledComponent, tag);
  };

  // Shorthands for all valid HTML Elements
  domElements.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  return styled;
};

//      
var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

var _keyframes = function _keyframes(nameGenerator, stringifyRules, css) {
  return function (strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    var rules = css.apply(undefined, [strings].concat(interpolations));
    var hash = doHash(replaceWhitespace(JSON.stringify(rules)));

    var existingName = StyleSheet.instance.getName(hash);
    if (existingName) return existingName;

    var name = nameGenerator(hash);
    if (StyleSheet.instance.alreadyInjected(hash, name)) return name;

    var generatedCSS = stringifyRules(rules, name, '@keyframes');
    StyleSheet.instance.inject('sc-keyframes-' + name, true, generatedCSS, hash, name);
    return name;
  };
};

//      
var _injectGlobal = function _injectGlobal(stringifyRules, css) {
  var injectGlobal = function injectGlobal(strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    var rules = css.apply(undefined, [strings].concat(interpolations));
    var hash = doHash(JSON.stringify(rules));

    var componentId = 'sc-global-' + hash;
    if (StyleSheet.instance.hasInjectedComponent(componentId)) return;

    StyleSheet.instance.inject(componentId, false, stringifyRules(rules));
  };

  return injectGlobal;
};

//      


var _constructWithOptions = function _constructWithOptions(css) {
  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (false) {
      // $FlowInvalidInputTest
      throw new Error('Cannot create styled-component for component: ' + tag);
    }

    /* This is callable directly as a template function */
    var templateFunction = function templateFunction(strings) {
      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key];
      }

      return componentConstructor(tag, options, css.apply(undefined, [strings].concat(interpolations)));
    };

    /* If config methods are called, wrap up a new template function and merge options */
    templateFunction.withConfig = function (config) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
    };
    templateFunction.attrs = function (attrs) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
        attrs: _extends({}, options.attrs || {}, attrs)
      }));
    };

    return templateFunction;
  };

  return constructWithOptions;
};

//      
/* globals ReactClass */

var wrapWithTheme = function wrapWithTheme(Component$$1) {
  var _WithTheme$contextTyp;

  var componentName = Component$$1.displayName || Component$$1.name || 'Component';

  var shouldSetInnerRef = isStyledComponent(Component$$1) ||
  // NOTE: We can't pass a ref to a stateless functional component
  typeof Component$$1 === 'function' && !(Component$$1.prototype && 'isReactComponent' in Component$$1.prototype);

  var WithTheme = function (_React$Component) {
    inherits(WithTheme, _React$Component);

    function WithTheme() {
      var _temp, _this, _ret;

      classCallCheck(this, WithTheme);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping


    WithTheme.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var defaultProps = this.constructor.defaultProps;

      var styledContext = this.context[CHANNEL_NEXT];
      var themeProp = determineTheme(this.props, undefined, defaultProps);
      if (styledContext === undefined && themeProp === undefined && "production" !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps');
      } else if (styledContext === undefined && themeProp !== undefined) {
        this.setState({ theme: themeProp });
      } else {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          var theme = determineTheme(_this2.props, nextTheme, defaultProps);
          _this2.setState({ theme: theme });
        });
      }
    };

    WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var defaultProps = this.constructor.defaultProps;

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, defaultProps);

        return { theme: theme };
      });
    };

    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    WithTheme.prototype.render = function render() {
      // eslint-disable-next-line react/prop-types
      var innerRef = this.props.innerRef;
      var theme = this.state.theme;

      return __WEBPACK_IMPORTED_MODULE_2_react__["c" /* default */].createElement(Component$$1, _extends({
        theme: theme
      }, this.props, {
        innerRef: shouldSetInnerRef ? innerRef : undefined,
        ref: shouldSetInnerRef ? undefined : innerRef
      }));
    };

    return WithTheme;
  }(__WEBPACK_IMPORTED_MODULE_2_react__["c" /* default */].Component);

  WithTheme.displayName = 'WithTheme(' + componentName + ')';
  WithTheme.styledComponentId = 'withTheme';
  WithTheme.contextTypes = (_WithTheme$contextTyp = {}, _WithTheme$contextTyp[CHANNEL] = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, _WithTheme$contextTyp[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _WithTheme$contextTyp);

  return __WEBPACK_IMPORTED_MODULE_4_hoist_non_react_statics___default()(WithTheme, Component$$1);
};

//      

/* Import singletons */
/* Import singleton constructors */
/* Import components */
/* Import Higher Order Components */
/* Instantiate singletons */
var ComponentStyle = _ComponentStyle(generateAlphabeticName, flatten, stringifyRules);
var constructWithOptions = _constructWithOptions(css);
var StyledComponent = _StyledComponent(ComponentStyle, constructWithOptions);

/* Instantiate exported singletons */
var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css);
var injectGlobal = _injectGlobal(stringifyRules, css);
var styled = _styled(StyledComponent, constructWithOptions);

/* harmony default export */ __webpack_exports__["default"] = (styled);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("pv+l")(module)))

/***/ }),

/***/ "YOxv":
/***/ (function(module, exports, __webpack_require__) {

/*
 *          __        ___
 *    _____/ /___  __/ (_)____
 *   / ___/ __/ / / / / / ___/
 *  (__  ) /_/ /_/ / / (__  )
 * /____/\__/\__, /_/_/____/
 *          /____/
 *
 * light - weight css preprocessor @licence MIT
 */
(function (factory) {
	/* eslint-disable */
	 true ? module['exports'] = factory(null) : typeof define === 'function' && define['amd'] ? define(factory(null)) : window['stylis'] = factory(null);
})( /** @param {*=} options */function factory(options) {
	/* eslint-disable */

	'use strict';

	/**
  * Notes
  *
  * The ['<method name>'] pattern is used to support closure compiler
  * the jsdoc signatures are also used to the same effect
  *
  * ----
  *
  * int + int + int === n4 [faster]
  *
  * vs
  *
  * int === n1 && int === n2 && int === n3
  *
  * ----
  *
  * switch (int) { case ints...} [faster]
  *
  * vs
  *
  * if (int == 1 && int === 2 ...)
  *
  * ----
  *
  * The (first*n1 + second*n2 + third*n3) format used in the property parser
  * is a simple way to hash the sequence of characters
  * taking into account the index they occur in
  * since any number of 3 character sequences could produce duplicates.
  *
  * On the other hand sequences that are directly tied to the index of the character
  * resolve a far more accurate measure, it's also faster
  * to evaluate one condition in a switch statement
  * than three in an if statement regardless of the added math.
  *
  * This allows the vendor prefixer to be both small and fast.
  */

	var nullptn = /^\0+/g; /* matches leading null characters */
	var formatptn = /[\0\r\f]/g; /* matches new line, null and formfeed characters */
	var colonptn = /: */g; /* splits animation rules */
	var cursorptn = /zoo|gra/; /* assert cursor varient */
	var transformptn = /([,: ])(transform)/g; /* vendor prefix transform, older webkit */
	var animationptn = /,+\s*(?![^(]*[)])/g; /* splits multiple shorthand notation animations */
	var propertiesptn = / +\s*(?![^(]*[)])/g; /* animation properties */
	var elementptn = / *[\0] */g; /* selector elements */
	var selectorptn = /,\r+?/g; /* splits selectors */
	var andptn = /([\t\r\n ])*\f?&/g; /* match & */
	var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g; /* matches :global(.*) */
	var invalidptn = /\W+/g; /* removes invalid characters from keyframes */
	var keyframeptn = /@(k\w+)\s*(\S*)\s*/; /* matches @keyframes $1 */
	var plcholdrptn = /::(place)/g; /* match ::placeholder varient */
	var readonlyptn = /:(read-only)/g; /* match :read-only varient */
	var beforeptn = /\s+(?=[{\];=:>])/g; /* matches \s before ] ; = : */
	var afterptn = /([[}=:>])\s+/g; /* matches \s after characters [ } = : */
	var tailptn = /(\{[^{]+?);(?=\})/g; /* matches tail semi-colons ;} */
	var whiteptn = /\s{2,}/g; /* matches repeating whitespace */
	var pseudoptn = /([^\(])(:+) */g; /* pseudo element */
	var writingptn = /[svh]\w+-[tblr]{2}/; /* match writing mode property values */
	var gradientptn = /([\w-]+t\()/g; /* match *gradient property */
	var supportsptn = /\(\s*(.*)\s*\)/g; /* match supports (groups) */
	var propertyptn = /([\s\S]*?);/g; /* match properties leading semicolon */
	var selfptn = /-self|flex-/g; /* match flex- and -self in align-self: flex-*; */
	var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/; /* extrats :readonly or :placholder from selector */
	var trimptn = /[ \t]+$/; /* match tail whitspace */
	var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/; /* match max/min/fit-content, fill-available */
	var imgsrcptn = /([^-])(image-set\()/;

	/* vendors */
	var webkit = '-webkit-';
	var moz = '-moz-';
	var ms = '-ms-';

	/* character codes */
	var SEMICOLON = 59; /* ; */
	var CLOSEBRACES = 125; /* } */
	var OPENBRACES = 123; /* { */
	var OPENPARENTHESES = 40; /* ( */
	var CLOSEPARENTHESES = 41; /* ) */
	var OPENBRACKET = 91; /* [ */
	var CLOSEBRACKET = 93; /* ] */
	var NEWLINE = 10; /* \n */
	var CARRIAGE = 13; /* \r */
	var TAB = 9; /* \t */
	var AT = 64; /* @ */
	var SPACE = 32; /*   */
	var AND = 38; /* & */
	var DASH = 45; /* - */
	var UNDERSCORE = 95; /* _ */
	var STAR = 42; /* * */
	var COMMA = 44; /* , */
	var COLON = 58; /* : */
	var SINGLEQUOTE = 39; /* ' */
	var DOUBLEQUOTE = 34; /* " */
	var FOWARDSLASH = 47; /* / */
	var GREATERTHAN = 62; /* > */
	var PLUS = 43; /* + */
	var TILDE = 126; /* ~ */
	var NULL = 0; /* \0 */
	var FORMFEED = 12; /* \f */
	var VERTICALTAB = 11; /* \v */

	/* special identifiers */
	var KEYFRAME = 107; /* k */
	var MEDIA = 109; /* m */
	var SUPPORTS = 115; /* s */
	var PLACEHOLDER = 112; /* p */
	var READONLY = 111; /* o */
	var IMPORT = 105; /* <at>i */
	var CHARSET = 99; /* <at>c */
	var DOCUMENT = 100; /* <at>d */
	var PAGE = 112; /* <at>p */

	var column = 1; /* current column */
	var line = 1; /* current line numebr */
	var pattern = 0; /* :pattern */

	var cascade = 1; /* #id h1 h2 vs h1#id h2#id  */
	var prefix = 1; /* vendor prefix */
	var escape = 1; /* escape :global() pattern */
	var compress = 0; /* compress output */
	var semicolon = 0; /* no/semicolon option */
	var preserve = 0; /* preserve empty selectors */

	/* empty reference */
	var array = [];

	/* plugins */
	var plugins = [];
	var plugged = 0;
	var should = null;

	/* plugin context */
	var POSTS = -2;
	var PREPS = -1;
	var UNKWN = 0;
	var PROPS = 1;
	var BLCKS = 2;
	var ATRUL = 3;

	/* plugin newline context */
	var unkwn = 0;

	/* keyframe animation */
	var keyed = 1;
	var key = '';

	/* selector namespace */
	var nscopealt = '';
	var nscope = '';

	/**
  * Compile
  *
  * @param {Array<string>} parent
  * @param {Array<string>} current
  * @param {string} body
  * @param {number} id
  * @param {number} depth
  * @return {string}
  */
	function compile(parent, current, body, id, depth) {
		var bracket = 0; /* brackets [] */
		var comment = 0; /* comments /* // or /* */
		var parentheses = 0; /* functions () */
		var quote = 0; /* quotes '', "" */

		var first = 0; /* first character code */
		var second = 0; /* second character code */
		var code = 0; /* current character code */
		var tail = 0; /* previous character code */
		var trail = 0; /* character before previous code */
		var peak = 0; /* previous non-whitespace code */

		var counter = 0; /* count sequence termination */
		var context = 0; /* track current context */
		var atrule = 0; /* track @at-rule context */
		var pseudo = 0; /* track pseudo token index */
		var caret = 0; /* current character index */
		var format = 0; /* control character formating context */
		var insert = 0; /* auto semicolon insertion */
		var invert = 0; /* inverted selector pattern */
		var length = 0; /* generic length address */
		var eof = body.length; /* end of file(length) */
		var eol = eof - 1; /* end of file(characters) */

		var char = ''; /* current character */
		var chars = ''; /* current buffer of characters */
		var child = ''; /* next buffer of characters */
		var out = ''; /* compiled body */
		var children = ''; /* compiled children */
		var flat = ''; /* compiled leafs */
		var selector; /* generic selector address */
		var result; /* generic address */

		// ...build body
		while (caret < eof) {
			code = body.charCodeAt(caret);

			// eof varient
			if (caret === eol) {
				// last character + noop context, add synthetic padding for noop context to terminate
				if (comment + quote + parentheses + bracket !== 0) {
					if (comment !== 0) {
						code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH;
					}

					quote = parentheses = bracket = 0;
					eof++;
					eol++;
				}
			}

			if (comment + quote + parentheses + bracket === 0) {
				// eof varient
				if (caret === eol) {
					if (format > 0) {
						chars = chars.replace(formatptn, '');
					}

					if (chars.trim().length > 0) {
						switch (code) {
							case SPACE:
							case TAB:
							case SEMICOLON:
							case CARRIAGE:
							case NEWLINE:
								{
									break;
								}
							default:
								{
									chars += body.charAt(caret);
								}
						}

						code = SEMICOLON;
					}
				}

				// auto semicolon insertion
				if (insert === 1) {
					switch (code) {
						// false flags
						case OPENBRACES:
						case CLOSEBRACES:
						case SEMICOLON:
						case DOUBLEQUOTE:
						case SINGLEQUOTE:
						case OPENPARENTHESES:
						case CLOSEPARENTHESES:
						case COMMA:
							{
								insert = 0;
							}
						// ignore
						case TAB:
						case CARRIAGE:
						case NEWLINE:
						case SPACE:
							{
								break;
							}
						// valid
						default:
							{
								insert = 0;
								length = caret;
								first = code;
								caret--;
								code = SEMICOLON;

								while (length < eof) {
									switch (body.charCodeAt(length++)) {
										case NEWLINE:
										case CARRIAGE:
										case SEMICOLON:
											{
												++caret;
												code = first;
												length = eof;
												break;
											}
										case COLON:
											{
												if (format > 0) {
													++caret;
													code = first;
												}
											}
										case OPENBRACES:
											{
												length = eof;
											}
									}
								}
							}
					}
				}

				// token varient
				switch (code) {
					case OPENBRACES:
						{
							chars = chars.trim();
							first = chars.charCodeAt(0);
							counter = 1;
							length = ++caret;

							while (caret < eof) {
								switch (code = body.charCodeAt(caret)) {
									case OPENBRACES:
										{
											counter++;
											break;
										}
									case CLOSEBRACES:
										{
											counter--;
											break;
										}
									case FOWARDSLASH:
										{
											switch (second = body.charCodeAt(caret + 1)) {
												// /*, //
												case STAR:
												case FOWARDSLASH:
													{
														caret = delimited(second, caret, eol, body);
													}
											}
											break;
										}
									// given "[" === 91 & "]" === 93 hence forth 91 + 1 + 1 === 93
									case OPENBRACKET:
										{
											code++;
										}
									// given "(" === 40 & ")" === 41 hence forth 40 + 1 === 41
									case OPENPARENTHESES:
										{
											code++;
										}
									// quote tail delimiter is identical to the head delimiter hence noop,
									// fallthrough clauses have been shifted to the correct tail delimiter
									case DOUBLEQUOTE:
									case SINGLEQUOTE:
										{
											while (caret++ < eol) {
												if (body.charCodeAt(caret) === code) {
													break;
												}
											}
										}
								}

								if (counter === 0) {
									break;
								}

								caret++;
							}

							child = body.substring(length, caret);

							if (first === NULL) {
								first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0);
							}

							switch (first) {
								// @at-rule
								case AT:
									{
										if (format > 0) {
											chars = chars.replace(formatptn, '');
										}

										second = chars.charCodeAt(1);

										switch (second) {
											case DOCUMENT:
											case MEDIA:
											case SUPPORTS:
											case DASH:
												{
													selector = current;
													break;
												}
											default:
												{
													selector = array;
												}
										}

										child = compile(current, selector, child, second, depth + 1);
										length = child.length;

										// preserve empty @at-rule
										if (preserve > 0 && length === 0) {
											length = chars.length;
										}

										// execute plugins, @at-rule context
										if (plugged > 0) {
											selector = select(array, chars, invert);
											result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id);
											chars = selector.join('');

											if (result !== void 0) {
												if ((length = (child = result.trim()).length) === 0) {
													second = 0;
													child = '';
												}
											}
										}

										if (length > 0) {
											switch (second) {
												case SUPPORTS:
													{
														chars = chars.replace(supportsptn, supports);
													}
												case DOCUMENT:
												case MEDIA:
												case DASH:
													{
														child = chars + '{' + child + '}';
														break;
													}
												case KEYFRAME:
													{
														chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''));
														child = chars + '{' + child + '}';

														if (prefix === 1 || prefix === 2 && vendor('@' + child, 3)) {
															child = '@' + webkit + child + '@' + child;
														} else {
															child = '@' + child;
														}
														break;
													}
												default:
													{
														child = chars + child;

														if (id === PAGE) {
															child = (out += child, '');
														}
													}
											}
										} else {
											child = '';
										}

										break;
									}
								// selector
								default:
									{
										child = compile(current, select(current, chars, invert), child, id, depth + 1);
									}
							}

							children += child;

							// reset
							context = 0;
							insert = 0;
							pseudo = 0;
							format = 0;
							invert = 0;
							atrule = 0;
							chars = '';
							child = '';
							code = body.charCodeAt(++caret);
							break;
						}
					case CLOSEBRACES:
					case SEMICOLON:
						{
							chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim();

							if ((length = chars.length) > 1) {
								// monkey-patch missing colon
								if (pseudo === 0) {
									first = chars.charCodeAt(0);

									// first character is a letter or dash, buffer has a space character
									if (first === DASH || first > 96 && first < 123) {
										length = (chars = chars.replace(' ', ':')).length;
									}
								}

								// execute plugins, property context
								if (plugged > 0) {
									if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
										if ((length = (chars = result.trim()).length) === 0) {
											chars = '\0\0';
										}
									}
								}

								first = chars.charCodeAt(0);
								second = chars.charCodeAt(1);

								switch (first) {
									case NULL:
										{
											break;
										}
									case AT:
										{
											if (second === IMPORT || second === CHARSET) {
												flat += chars + body.charAt(caret);
												break;
											}
										}
									default:
										{
											if (chars.charCodeAt(length - 1) === COLON) {
												break;
											}

											out += property(chars, first, second, chars.charCodeAt(2));
										}
								}
							}

							// reset
							context = 0;
							insert = 0;
							pseudo = 0;
							format = 0;
							invert = 0;
							chars = '';
							code = body.charCodeAt(++caret);
							break;
						}
				}
			}

			// parse characters
			switch (code) {
				case CARRIAGE:
				case NEWLINE:
					{
						// auto insert semicolon
						if (comment + quote + parentheses + bracket + semicolon === 0) {
							// valid non-whitespace characters that
							// may precede a newline
							switch (peak) {
								case CLOSEPARENTHESES:
								case SINGLEQUOTE:
								case DOUBLEQUOTE:
								case AT:
								case TILDE:
								case GREATERTHAN:
								case STAR:
								case PLUS:
								case FOWARDSLASH:
								case DASH:
								case COLON:
								case COMMA:
								case SEMICOLON:
								case OPENBRACES:
								case CLOSEBRACES:
									{
										break;
									}
								default:
									{
										// current buffer has a colon
										if (pseudo > 0) {
											insert = 1;
										}
									}
							}
						}

						// terminate line comment
						if (comment === FOWARDSLASH) {
							comment = 0;
						} else if (cascade + context === 0 && id !== KEYFRAME && chars.length > 0) {
							format = 1;
							chars += '\0';
						}

						// execute plugins, newline context
						if (plugged * unkwn > 0) {
							proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id);
						}

						// next line, reset column position
						column = 1;
						line++;
						break;
					}
				case SEMICOLON:
				case CLOSEBRACES:
					{
						if (comment + quote + parentheses + bracket === 0) {
							column++;
							break;
						}
					}
				default:
					{
						// increment column position
						column++;

						// current character
						char = body.charAt(caret);

						// remove comments, escape functions, strings, attributes and prepare selectors
						switch (code) {
							case TAB:
							case SPACE:
								{
									if (quote + bracket + comment === 0) {
										switch (tail) {
											case COMMA:
											case COLON:
											case TAB:
											case SPACE:
												{
													char = '';
													break;
												}
											default:
												{
													if (code !== SPACE) {
														char = ' ';
													}
												}
										}
									}
									break;
								}
							// escape breaking control characters
							case NULL:
								{
									char = '\\0';
									break;
								}
							case FORMFEED:
								{
									char = '\\f';
									break;
								}
							case VERTICALTAB:
								{
									char = '\\v';
									break;
								}
							// &
							case AND:
								{
									// inverted selector pattern i.e html &
									if (quote + comment + bracket === 0 && cascade > 0) {
										invert = 1;
										format = 1;
										char = '\f' + char;
									}
									break;
								}
							// ::p<l>aceholder, l
							// :read-on<l>y, l
							case 108:
								{
									if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
										switch (caret - pseudo) {
											// ::placeholder
											case 2:
												{
													if (tail === PLACEHOLDER && body.charCodeAt(caret - 3) === COLON) {
														pattern = tail;
													}
												}
											// :read-only
											case 8:
												{
													if (trail === READONLY) {
														pattern = trail;
													}
												}
										}
									}
									break;
								}
							// :<pattern>
							case COLON:
								{
									if (quote + comment + bracket === 0) {
										pseudo = caret;
									}
									break;
								}
							// selectors
							case COMMA:
								{
									if (comment + parentheses + quote + bracket === 0) {
										format = 1;
										char += '\r';
									}
									break;
								}
							// quotes
							case DOUBLEQUOTE:
							case SINGLEQUOTE:
								{
									if (comment === 0) {
										quote = quote === code ? 0 : quote === 0 ? code : quote;
									}
									break;
								}
							// attributes
							case OPENBRACKET:
								{
									if (quote + comment + parentheses === 0) {
										bracket++;
									}
									break;
								}
							case CLOSEBRACKET:
								{
									if (quote + comment + parentheses === 0) {
										bracket--;
									}
									break;
								}
							// functions
							case CLOSEPARENTHESES:
								{
									if (quote + comment + bracket === 0) {
										parentheses--;
									}
									break;
								}
							case OPENPARENTHESES:
								{
									if (quote + comment + bracket === 0) {
										if (context === 0) {
											switch (tail * 2 + trail * 3) {
												// :matches
												case 533:
													{
														break;
													}
												// :global, :not, :nth-child etc...
												default:
													{
														counter = 0;
														context = 1;
													}
											}
										}

										parentheses++;
									}
									break;
								}
							case AT:
								{
									if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
										atrule = 1;
									}
									break;
								}
							// block/line comments
							case STAR:
							case FOWARDSLASH:
								{
									if (quote + bracket + parentheses > 0) {
										break;
									}

									switch (comment) {
										// initialize line/block comment context
										case 0:
											{
												switch (code * 2 + body.charCodeAt(caret + 1) * 3) {
													// //
													case 235:
														{
															comment = FOWARDSLASH;
															break;
														}
													// /*
													case 220:
														{
															length = caret;
															comment = STAR;
															break;
														}
												}
												break;
											}
										// end block comment context
										case STAR:
											{
												if (code === FOWARDSLASH && tail === STAR && length + 2 !== caret) {
													// /*<!> ... */, !
													if (body.charCodeAt(length + 2) === 33) {
														out += body.substring(length, caret + 1);
													}
													char = '';
													comment = 0;
												}
											}
									}
								}
						}

						// ignore comment blocks
						if (comment === 0) {
							// aggressive isolation mode, divide each individual selector
							// including selectors in :not function but excluding selectors in :global function
							if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
								switch (code) {
									case COMMA:
									case TILDE:
									case GREATERTHAN:
									case PLUS:
									case CLOSEPARENTHESES:
									case OPENPARENTHESES:
										{
											if (context === 0) {
												// outside of an isolated context i.e nth-child(<...>)
												switch (tail) {
													case TAB:
													case SPACE:
													case NEWLINE:
													case CARRIAGE:
														{
															char = char + '\0';
															break;
														}
													default:
														{
															char = '\0' + char + (code === COMMA ? '' : '\0');
														}
												}
												format = 1;
											} else {
												// within an isolated context, sleep untill it's terminated
												switch (code) {
													case OPENPARENTHESES:
														{
															// :globa<l>(
															if (pseudo + 7 === caret && tail === 108) {
																pseudo = 0;
															}
															context = ++counter;
															break;
														}
													case CLOSEPARENTHESES:
														{
															if ((context = --counter) === 0) {
																format = 1;
																char += '\0';
															}
															break;
														}
												}
											}
											break;
										}
									case TAB:
									case SPACE:
										{
											switch (tail) {
												case NULL:
												case OPENBRACES:
												case CLOSEBRACES:
												case SEMICOLON:
												case COMMA:
												case FORMFEED:
												case TAB:
												case SPACE:
												case NEWLINE:
												case CARRIAGE:
													{
														break;
													}
												default:
													{
														// ignore in isolated contexts
														if (context === 0) {
															format = 1;
															char += '\0';
														}
													}
											}
										}
								}
							}

							// concat buffer of characters
							chars += char;

							// previous non-whitespace character code
							if (code !== SPACE && code !== TAB) {
								peak = code;
							}
						}
					}
			}

			// tail character codes
			trail = tail;
			tail = code;

			// visit every character
			caret++;
		}

		length = out.length;

		// preserve empty selector
		if (preserve > 0) {
			if (length === 0 && children.length === 0 && current[0].length === 0 === false) {
				if (id !== MEDIA || current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0]) {
					length = current.join(',').length + 2;
				}
			}
		}

		if (length > 0) {
			// cascade isolation mode?
			selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current;

			// execute plugins, block context
			if (plugged > 0) {
				result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id);

				if (result !== void 0 && (out = result).length === 0) {
					return flat + out + children;
				}
			}

			out = selector.join(',') + '{' + out + '}';

			if (prefix * pattern !== 0) {
				if (prefix === 2 && !vendor(out, 2)) pattern = 0;

				switch (pattern) {
					// ::read-only
					case READONLY:
						{
							out = out.replace(readonlyptn, ':' + moz + '$1') + out;
							break;
						}
					// ::placeholder
					case PLACEHOLDER:
						{
							out = out.replace(plcholdrptn, '::' + webkit + 'input-$1') + out.replace(plcholdrptn, '::' + moz + '$1') + out.replace(plcholdrptn, ':' + ms + 'input-$1') + out;
							break;
						}
				}

				pattern = 0;
			}
		}

		return flat + out + children;
	}

	/**
  * Select
  *
  * @param {Array<string>} parent
  * @param {string} current
  * @param {number} invert
  * @return {Array<string>}
  */
	function select(parent, current, invert) {
		var selectors = current.trim().split(selectorptn);
		var out = selectors;

		var length = selectors.length;
		var l = parent.length;

		switch (l) {
			// 0-1 parent selectors
			case 0:
			case 1:
				{
					for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
						out[i] = scope(selector, out[i], invert, l).trim();
					}
					break;
				}
			// >2 parent selectors, nested
			default:
				{
					for (var i = 0, j = 0, out = []; i < length; ++i) {
						for (var k = 0; k < l; ++k) {
							out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim();
						}
					}
				}
		}

		return out;
	}

	/**
  * Scope
  *
  * @param {string} parent
  * @param {string} current
  * @param {number} invert
  * @param {number} level
  * @return {string}
  */
	function scope(parent, current, invert, level) {
		var selector = current;
		var code = selector.charCodeAt(0);

		// trim leading whitespace
		if (code < 33) {
			code = (selector = selector.trim()).charCodeAt(0);
		}

		switch (code) {
			// &
			case AND:
				{
					switch (cascade + level) {
						case 0:
						case 1:
							{
								if (parent.trim().length === 0) {
									break;
								}
							}
						default:
							{
								return selector.replace(andptn, '$1' + parent.trim());
							}
					}
					break;
				}
			// :
			case COLON:
				{
					switch (selector.charCodeAt(1)) {
						// g in :global
						case 103:
							{
								if (escape > 0 && cascade > 0) {
									return selector.replace(escapeptn, '$1').replace(andptn, '$1' + nscope);
								}
								break;
							}
						default:
							{
								// :hover
								return parent.trim() + selector.replace(andptn, '$1' + parent.trim());
							}
					}
				}
			default:
				{
					// html &
					if (invert * cascade > 0 && selector.indexOf('\f') > 0) {
						return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1') + parent.trim());
					}
				}
		}

		return parent + selector;
	}

	/**
  * Property
  *
  * @param {string} input
  * @param {number} first
  * @param {number} second
  * @param {number} third
  * @return {string}
  */
	function property(input, first, second, third) {
		var index = 0;
		var out = input + ';';
		var hash = first * 2 + second * 3 + third * 4;
		var cache;

		// animation: a, n, i characters
		if (hash === 944) {
			return animation(out);
		} else if (prefix === 0 || prefix === 2 && !vendor(out, 1)) {
			return out;
		}

		// vendor prefix
		switch (hash) {
			// text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
			case 1015:
				{
					// text-shadow/text-align/text-transform, a
					return out.charCodeAt(10) === 97 ? webkit + out + out : out;
				}
			// filter/fill f, i, l
			case 951:
				{
					// filter, t
					return out.charCodeAt(3) === 116 ? webkit + out + out : out;
				}
			// color/column, c, o, l
			case 963:
				{
					// column, n
					return out.charCodeAt(5) === 110 ? webkit + out + out : out;
				}
			// box-decoration-break, b, o, x
			case 1009:
				{
					if (out.charCodeAt(4) !== 100) {
						break;
					}
				}
			// mask, m, a, s
			// clip-path, c, l, i
			case 969:
			case 942:
				{
					return webkit + out + out;
				}
			// appearance: a, p, p
			case 978:
				{
					return webkit + out + moz + out + out;
				}
			// hyphens: h, y, p
			// user-select: u, s, e
			case 1019:
			case 983:
				{
					return webkit + out + moz + out + ms + out + out;
				}
			// background/backface-visibility, b, a, c
			case 883:
				{
					// backface-visibility, -
					if (out.charCodeAt(8) === DASH) {
						return webkit + out + out;
					}

					// image-set(...)
					if (out.indexOf('image-set(', 11) > 0) {
						return out.replace(imgsrcptn, '$1' + webkit + '$2') + out;
					}

					return out;
				}
			// flex: f, l, e
			case 932:
				{
					if (out.charCodeAt(4) === DASH) {
						switch (out.charCodeAt(5)) {
							// flex-grow, g
							case 103:
								{
									return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out;
								}
							// flex-shrink, s
							case 115:
								{
									return webkit + out + ms + out.replace('shrink', 'negative') + out;
								}
							// flex-basis, b
							case 98:
								{
									return webkit + out + ms + out.replace('basis', 'preferred-size') + out;
								}
						}
					}

					return webkit + out + ms + out + out;
				}
			// order: o, r, d
			case 964:
				{
					return webkit + out + ms + 'flex' + '-' + out + out;
				}
			// justify-items/justify-content, j, u, s
			case 1023:
				{
					// justify-content, c
					if (out.charCodeAt(8) !== 99) {
						break;
					}

					cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
					return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out;
				}
			// cursor, c, u, r
			case 1005:
				{
					return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out;
				}
			// writing-mode, w, r, i
			case 1000:
				{
					cache = out.substring(13).trim();
					index = cache.indexOf('-') + 1;

					switch (cache.charCodeAt(0) + cache.charCodeAt(index)) {
						// vertical-lr
						case 226:
							{
								cache = out.replace(writingptn, 'tb');
								break;
							}
						// vertical-rl
						case 232:
							{
								cache = out.replace(writingptn, 'tb-rl');
								break;
							}
						// horizontal-tb
						case 220:
							{
								cache = out.replace(writingptn, 'lr');
								break;
							}
						default:
							{
								return out;
							}
					}

					return webkit + out + ms + cache + out;
				}
			// position: sticky
			case 1017:
				{
					if (out.indexOf('sticky', 9) === -1) {
						return out;
					}
				}
			// display(flex/inline-flex/inline-box): d, i, s
			case 975:
				{
					index = (out = input).length - 10;
					cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim();

					switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7) | 0)) {
						// inline-
						case 203:
							{
								// inline-box
								if (cache.charCodeAt(8) < 111) {
									break;
								}
							}
						// inline-box/sticky
						case 115:
							{
								out = out.replace(cache, webkit + cache) + ';' + out;
								break;
							}
						// inline-flex
						// flex
						case 207:
						case 102:
							{
								out = out.replace(cache, webkit + (hash > 102 ? 'inline-' : '') + 'box') + ';' + out.replace(cache, webkit + cache) + ';' + out.replace(cache, ms + cache + 'box') + ';' + out;
							}
					}

					return out + ';';
				}
			// align-items, align-center, align-self: a, l, i, -
			case 938:
				{
					if (out.charCodeAt(5) === DASH) {
						switch (out.charCodeAt(6)) {
							// align-items, i
							case 105:
								{
									cache = out.replace('-items', '');
									return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out;
								}
							// align-self, s
							case 115:
								{
									return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out;
								}
							// align-content
							default:
								{
									return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out;
								}
						}
					}
					break;
				}
			// min/max
			case 973:
			case 989:
				{
					// min-/max- height/width/block-size/inline-size
					if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
						break;
					}
				}
			// height/width: min-content / width: max-content
			case 931:
			case 953:
				{
					if (dimensionptn.test(input) === true) {
						// stretch
						if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115) return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch');else return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out;
					}
					break;
				}
			// transform, transition: t, r, a
			case 962:
				{
					out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out;

					// transitions
					if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
						return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out;
					}

					break;
				}
		}

		return out;
	}

	/**
  * Vendor
  *
  * @param {string} content
  * @param {number} context
  * @return {boolean}
  */
	function vendor(content, context) {
		var index = content.indexOf(context === 1 ? ':' : '{');
		var key = content.substring(0, context !== 3 ? index : 10);
		var value = content.substring(index + 1, content.length - 1);

		return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context);
	}

	/**
  * Supports
  *
  * @param {string} match
  * @param {string} group
  * @return {string}
  */
	function supports(match, group) {
		var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2));

		return out !== group + ';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '(' + group + ')';
	}

	/**
  * Animation
  *
  * @param {string} input
  * @return {string}
  */
	function animation(input) {
		var length = input.length;
		var index = input.indexOf(':', 9) + 1;
		var declare = input.substring(0, index).trim();
		var out = input.substring(index, length - 1).trim();

		switch (input.charCodeAt(9) * keyed) {
			case 0:
				{
					break;
				}
			// animation-*, -
			case DASH:
				{
					// animation-name, n
					if (input.charCodeAt(10) !== 110) {
						break;
					}
				}
			// animation/animation-name
			default:
				{
					// split in case of multiple animations
					var list = out.split((out = '', animationptn));

					for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
						var value = list[i];
						var items = value.split(propertiesptn);

						while (value = items[index]) {
							var peak = value.charCodeAt(0);

							if (keyed === 1 && (
							// letters
							peak > AT && peak < 90 || peak > 96 && peak < 123 || peak === UNDERSCORE ||
							// dash but not in sequence i.e --
							peak === DASH && value.charCodeAt(1) !== DASH)) {
								// not a number/function
								switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
									case 1:
										{
											switch (value) {
												// not a valid reserved keyword
												case 'infinite':case 'alternate':case 'backwards':case 'running':
												case 'normal':case 'forwards':case 'both':case 'none':case 'linear':
												case 'ease':case 'ease-in':case 'ease-out':case 'ease-in-out':
												case 'paused':case 'reverse':case 'alternate-reverse':case 'inherit':
												case 'initial':case 'unset':case 'step-start':case 'step-end':
													{
														break;
													}
												default:
													{
														value += key;
													}
											}
										}
								}
							}

							items[index++] = value;
						}

						out += (i === 0 ? '' : ',') + items.join(' ');
					}
				}
		}

		out = declare + out + ';';

		if (prefix === 1 || prefix === 2 && vendor(out, 1)) return webkit + out + out;

		return out;
	}

	/**
  * Isolate
  *
  * @param {Array<string>} current
  */
	function isolate(current) {
		for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
			// split individual elements in a selector i.e h1 h2 === [h1, h2]
			var elements = current[i].split(elementptn);
			var out = '';

			for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
				// empty element
				if ((size = (element = elements[j]).length) === 0 && l > 1) {
					continue;
				}

				tail = out.charCodeAt(out.length - 1);
				code = element.charCodeAt(0);
				padding = '';

				if (j !== 0) {
					// determine if we need padding
					switch (tail) {
						case STAR:
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case OPENPARENTHESES:
							{
								break;
							}
						default:
							{
								padding = ' ';
							}
					}
				}

				switch (code) {
					case AND:
						{
							element = padding + nscopealt;
						}
					case TILDE:
					case GREATERTHAN:
					case PLUS:
					case SPACE:
					case CLOSEPARENTHESES:
					case OPENPARENTHESES:
						{
							break;
						}
					case OPENBRACKET:
						{
							element = padding + element + nscopealt;
							break;
						}
					case COLON:
						{
							switch (element.charCodeAt(1) * 2 + element.charCodeAt(2) * 3) {
								// :global
								case 530:
									{
										if (escape > 0) {
											element = padding + element.substring(8, size - 1);
											break;
										}
									}
								// :hover, :nth-child(), ...
								default:
									{
										if (j < 1 || elements[j - 1].length < 1) {
											element = padding + nscopealt + element;
										}
									}
							}
							break;
						}
					case COMMA:
						{
							padding = '';
						}
					default:
						{
							if (size > 1 && element.indexOf(':') > 0) {
								element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2');
							} else {
								element = padding + element + nscopealt;
							}
						}
				}

				out += element;
			}

			selector[i] = out.replace(formatptn, '').trim();
		}

		return selector;
	}

	/**
  * Proxy
  *
  * @param {number} context
  * @param {string} content
  * @param {Array<string>} selectors
  * @param {Array<string>} parents
  * @param {number} line
  * @param {number} column
  * @param {number} length
  * @param {number} id
  * @param {number} depth
  * @param {number} at
  * @return {(string|void|*)}
  */
	function proxy(context, content, selectors, parents, line, column, length, id, depth, at) {
		for (var i = 0, out = content, next; i < plugged; ++i) {
			switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
				case void 0:
				case false:
				case true:
				case null:
					{
						break;
					}
				default:
					{
						out = next;
					}
			}
		}
		if (out !== content) {
			return out;
		}
	}

	/**
  * @param {number} code
  * @param {number} index
  * @param {number} length
  * @param {string} body
  * @return {number}
  */
	function delimited(code, index, length, body) {
		for (var i = index + 1; i < length; ++i) {
			switch (body.charCodeAt(i)) {
				// /*
				case FOWARDSLASH:
					{
						if (code === STAR) {
							if (body.charCodeAt(i - 1) === STAR && index + 2 !== i) {
								return i + 1;
							}
						}
						break;
					}
				// //
				case NEWLINE:
					{
						if (code === FOWARDSLASH) {
							return i + 1;
						}
					}
			}
		}

		return i;
	}

	/**
  * @param {number} type
  * @param {number} index
  * @param {number} length
  * @param {number} find
  * @param {string} body
  * @return {number}
  */
	function match(type, index, length, body) {
		for (var i = index + 1; i < length; ++i) {
			switch (body.charCodeAt(i)) {
				case type:
					{
						return i;
					}
			}
		}

		return i;
	}

	/**
  * Minify
  *
  * @param {(string|*)} output
  * @return {string}
  */
	function minify(output) {
		return output.replace(formatptn, '').replace(beforeptn, '').replace(afterptn, '$1').replace(tailptn, '$1').replace(whiteptn, ' ');
	}

	/**
  * Use
  *
  * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
  */
	function use(plugin) {
		switch (plugin) {
			case void 0:
			case null:
				{
					plugged = plugins.length = 0;
					break;
				}
			default:
				{
					if (typeof plugin === 'function') {
						plugins[plugged++] = plugin;
					} else if (typeof plugin === 'object') {
						for (var i = 0, length = plugin.length; i < length; ++i) {
							use(plugin[i]);
						}
					} else {
						unkwn = !!plugin | 0;
					}
				}
		}

		return use;
	}

	/**
  * Set
  *
  * @param {*} options
  */
	function set(options) {
		for (var name in options) {
			var value = options[name];
			switch (name) {
				case 'keyframe':
					keyed = value | 0;break;
				case 'global':
					escape = value | 0;break;
				case 'cascade':
					cascade = value | 0;break;
				case 'compress':
					compress = value | 0;break;
				case 'semicolon':
					semicolon = value | 0;break;
				case 'preserve':
					preserve = value | 0;break;
				case 'prefix':
					should = null;

					if (!value) {
						prefix = 0;
					} else if (typeof value !== 'function') {
						prefix = 1;
					} else {
						prefix = 2;
						should = value;
					}
			}
		}

		return set;
	}

	/**
  * Stylis
  *
  * @param {string} selector
  * @param {string} input
  * @return {*}
  */
	function stylis(selector, input) {
		if (this !== void 0 && this.constructor === stylis) {
			return factory(selector);
		}

		// setup
		var ns = selector;
		var code = ns.charCodeAt(0);

		// trim leading whitespace
		if (code < 33) {
			code = (ns = ns.trim()).charCodeAt(0);
		}

		// keyframe/animation namespace
		if (keyed > 0) {
			key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-');
		}

		// reset, used to assert if a plugin is moneky-patching the return value
		code = 1;

		// cascade/isolate
		if (cascade === 1) {
			nscope = ns;
		} else {
			nscopealt = ns;
		}

		var selectors = [nscope];
		var result;

		// execute plugins, pre-process context
		if (plugged > 0) {
			result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0);

			if (result !== void 0 && typeof result === 'string') {
				input = result;
			}
		}

		// build
		var output = compile(array, selectors, input, 0, 0);

		// execute plugins, post-process context
		if (plugged > 0) {
			result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0);

			// bypass minification
			if (result !== void 0 && typeof (output = result) !== 'string') {
				code = 0;
			}
		}

		// reset
		key = '';
		nscope = '';
		nscopealt = '';
		pattern = 0;
		line = 1;
		column = 1;

		return compress * code === 0 ? output : minify(output);
	}

	stylis['use'] = use;
	stylis['set'] = set;

	if (options !== void 0) {
		set(options);
	}

	return stylis;
});

/***/ }),

/***/ "YQHG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
			value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t\tmargin: 100px auto;\n\t\tposition: relative;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\ttext-align: center;\n\t\tanimation: ', ' 2s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t'], ['\n\t\tmargin: 100px auto;\n\t\tposition: relative;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\ttext-align: center;\n\t\tanimation: ', ' 2s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\twidth: 60%;\n\t\theight: 60%;\n\t\tdisplay: inline-block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tborder-radius: 100%;\n\t\tbackground-color: ', ';\n\t\tanimation: ', ' 2s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t'], ['\n\t\twidth: 60%;\n\t\theight: 60%;\n\t\tdisplay: inline-block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tborder-radius: 100%;\n\t\tbackground-color: ', ';\n\t\tanimation: ', ' 2s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t\ttop: auto;\n\t\tbottom: 0;\n\t\tanimation-delay: -1s;\n\t'], ['\n\t\ttop: auto;\n\t\tbottom: 0;\n\t\tanimation-delay: -1s;\n\t']);

var _preact = __webpack_require__("KM04");

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__("X5xa");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = __webpack_require__("ockL");

var _defaults = __webpack_require__("N9d+");

function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
			return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var RotateScale = function RotateScale(_ref) {
			var color = _ref.color,
			    duration = _ref.duration,
			    size = _ref.size;

			var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size), _animations.rotate, function (props) {
						return props.duration ? props.duration : '2s';
			});

			var DefaultCube = _styledComponents2.default.div(_templateObject2, (0, _defaults.getColor)(color), _animations.bounce, function (props) {
						return props.duration ? props.duration : '2s';
			});

			var Cube = DefaultCube.extend(_templateObject3);

			return (0, _preact.h)(Spinner, { size: size, duration: duration }, (0, _preact.h)(DefaultCube, { color: color, duration: duration }), (0, _preact.h)(Cube, { color: color, duration: duration }));
};

exports.default = RotateScale;

RotateScale.propTypes = {

			/**
   * Background of the spinner
   * default is #333
   */
			color: _propTypes2.default.string,

			/**
   * Animation duration
   * default is 1.2s
   */
			duration: _propTypes2.default.string,

			/**
   * Size of the spinner
   * default is 40px
   */
			size: _propTypes2.default.string
};

/***/ }),

/***/ "Ym6P":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Typography = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _preact = __webpack_require__("KM04");

var _MaterialComponent2 = _interopRequireDefault(__webpack_require__("uc5p"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var Typography =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Typography, _MaterialComponent);

  function Typography() {
    var _this;

    (0, _classCallCheck2.default)(this, Typography);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Typography).apply(this, arguments));
    _this.componentName = 'typography';
    _this.mdcProps = ['headline1', 'headline2', 'headline3', 'headline4', 'headline5', 'headline6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline', 'title'];
    return _this;
  }

  (0, _createClass2.default)(Typography, [{
    key: "materialDom",
    value: function materialDom(allprops) {
      var tag = allprops.tag,
          props = __rest(allprops, ["tag"]);

      var Tag = tag ? tag : 'span';
      return (0, _preact.h)(Tag, _extends({}, props, {
        ref: this.setControlRef
      }), props.children);
    }
  }]);
  return Typography;
}(_MaterialComponent2.default);

exports.Typography = Typography;
var _default = Typography;
exports.default = _default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "ZAL5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home__MseGd"};

/***/ }),

/***/ "b9XL":
/***/ (function(module, exports) {

function _typeof2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof2 = function _typeof2(obj) {
      return typeof obj;
    };
  } else {
    _typeof2 = function _typeof2(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }return _typeof2(obj);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "d4H2":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("AkAO");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "eW0v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// CONCATENATED MODULE: ../node_modules/preact-context/dist/esm/context-value-emitter.js
function createEmitter(initialValue, bitmaskFactory) {
    var registeredUpdaters = [];
    var value = initialValue;
    var diff = function diff(newValue) {
        return bitmaskFactory(value, newValue) | 0;
    };
    return {
        register: function register(updater) {
            registeredUpdaters.push(updater);
            updater(value, diff(value));
        },
        unregister: function unregister(updater) {
            registeredUpdaters = registeredUpdaters.filter(function (i) {
                return i !== updater;
            });
        },
        val: function val(newValue) {
            if (newValue === undefined || newValue == value) {
                return value;
            }
            var bitmask = diff(newValue);
            value = newValue;
            registeredUpdaters.forEach(function (up) {
                return up(newValue, bitmask);
            });
            return value;
        }
    };
}
var noopEmitter = {
    register: function register(_) {
        console.warn("Consumer used without a Provider");
    },
    unregister: function unregister(_) {
        // do nothing
    },
    val: function val(_) {
        //do nothing;
    }
};
// CONCATENATED MODULE: ../node_modules/preact-context/dist/esm/utils.js
/*
 * Extracts the children from the props and returns an object containing the
 * only element of the given array (preact always passes children as an array)
 * or null otherwise. The result contains always a reference to the original
 * array of children
 *
 * @param {RenderableProps<*>} props - the component's properties
 * @return {{ child: JSX.Element | null, children: JSX.Element[]}}
 */
function getOnlyChildAndChildren(props) {
  var children = props.children;
  var child = children.length === 1 ? children[0] : null;
  return { child: child, children: children };
}
// CONCATENATED MODULE: ../node_modules/preact-context/dist/esm/context.js
var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();



function getRenderer(props) {
    var child = getOnlyChildAndChildren(props).child;
    // TODO: "render" in props check is only done to make TS happy
    return child || "render" in props && props.render;
}
var MAX_SIGNED_31_BIT_INT = 1073741823;
var defaultBitmaskFactory = function defaultBitmaskFactory() {
    return MAX_SIGNED_31_BIT_INT;
};
var ids = 0;
function _createContext(value, bitmaskFactory) {
    var key = "_preactContextProvider-" + ids++;
    var Provider = /** @class */function (_super) {
        __extends(Provider, _super);
        function Provider(props) {
            var _this = _super.call(this, props) || this;
            _this._emitter = createEmitter(props.value, bitmaskFactory || defaultBitmaskFactory);
            return _this;
        }
        Provider.prototype.getChildContext = function () {
            var _a;
            return _a = {}, _a[key] = this._emitter, _a;
        };
        Provider.prototype.componentDidUpdate = function () {
            this._emitter.val(this.props.value);
        };
        Provider.prototype.render = function () {
            var _a = getOnlyChildAndChildren(this.props),
                child = _a.child,
                children = _a.children;
            if (child) {
                return child;
            }
            // preact does not support fragments,
            // therefore we wrap the children in a span
            return Object(preact_min["h"])("span", null, children);
        };
        return Provider;
    }(preact_min["Component"]);
    var Consumer = /** @class */function (_super) {
        __extends(Consumer, _super);
        function Consumer(props, ctx) {
            var _this = _super.call(this, props, ctx) || this;
            _this._updateContext = function (value, bitmask) {
                var unstable_observedBits = _this.props.unstable_observedBits;
                var observed = unstable_observedBits === undefined || unstable_observedBits === null ? MAX_SIGNED_31_BIT_INT : unstable_observedBits;
                observed = observed | 0;
                if ((observed & bitmask) === 0) {
                    return;
                }
                _this.setState({ value: value });
            };
            _this.state = { value: _this._getEmitter().val() || value };
            return _this;
        }
        Consumer.prototype.componentDidMount = function () {
            this._getEmitter().register(this._updateContext);
        };
        Consumer.prototype.shouldComponentUpdate = function (nextProps, nextState) {
            return this.state.value !== nextState.value || getRenderer(this.props) !== getRenderer(nextProps);
        };
        Consumer.prototype.componentWillUnmount = function () {
            this._getEmitter().unregister(this._updateContext);
        };
        Consumer.prototype.componentDidUpdate = function (_, __, prevCtx) {
            var previousProvider = prevCtx[key];
            if (previousProvider === this.context[key]) {
                return;
            }
            (previousProvider || noopEmitter).unregister(this._updateContext);
            this.componentDidMount();
        };
        Consumer.prototype.render = function () {
            // TODO: "render" in props check is only done to make TS happy
            var render = "render" in this.props && this.props.render;
            var r = getRenderer(this.props);
            if (render && render !== r) {
                console.warn("Both children and a render function are defined. Children will be used");
            }
            if (typeof r === "function") {
                return r(this.state.value);
            }
            console.warn("Consumer is expecting a function as one and only child but didn't find any");
        };
        Consumer.prototype._getEmitter = function () {
            return this.context[key] || noopEmitter;
        };
        return Consumer;
    }(preact_min["Component"]);
    return {
        Provider: Provider,
        Consumer: Consumer
    };
}
// named and default export in order to have less problems with bundlers
/* harmony default export */ var esm_context = (_createContext);
var createContext = _createContext;
// CONCATENATED MODULE: ../node_modules/preact-compat/dist/preact-compat.es.js
/* unused harmony export version */
/* unused harmony export DOM */
/* unused harmony export Children */
/* unused harmony export render */
/* unused harmony export hydrate */
/* unused harmony export createClass */
/* unused harmony export createPortal */
/* unused harmony export createFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createElement; });
/* unused harmony export cloneElement */
/* unused harmony export isValidElement */
/* unused harmony export findDOMNode */
/* unused harmony export unmountComponentAtNode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Component$1; });
/* unused harmony export PureComponent */
/* unused harmony export unstable_renderSubtreeIntoContainer */
/* unused harmony export unstable_batchedUpdates */
/* unused harmony export __spread */
/* unused concated harmony import PropTypes */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return prop_types_default.a; });
/* unused concated harmony import createRef */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return preact_min["createRef"]; });
/* unused concated harmony import createContext */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return createContext; });







var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = typeof Symbol !== 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol !== 'undefined' && Symbol.for ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};

var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;

var BYPASS_HOOK = {};

/*global process*/
var DEV = false;
try {
	DEV = "production" !== 'production';
} catch (e) {}

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() {
	return null;
}

// make react think we're react.
var VNode = Object(preact_min["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function get() {
		return this.nodeName;
	},
	set: function set(v) {
		this.nodeName = v;
	},
	configurable: true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function get() {
		return this.attributes;
	},
	set: function set(v) {
		this.attributes = v;
	},
	configurable: true
});

var oldEventHook = preact_min["options"].event;
preact_min["options"].event = function (e) {
	if (oldEventHook) {
		e = oldEventHook(e);
	}
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};

var oldVnodeHook = preact_min["options"].vnode;
preact_min["options"].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
		    attrs = vnode.attributes = vnode.attributes == null ? {} : extend({}, vnode.attributes);

		if (typeof tag === 'function') {
			if (tag[COMPONENT_WRAPPER_KEY] === true || tag.prototype && 'isReactComponent' in tag.prototype) {
				if (vnode.children && String(vnode.children) === '') {
					vnode.children = undefined;
				}
				if (vnode.children) {
					attrs.children = vnode.children;
				}

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		} else {
			if (vnode.children && String(vnode.children) === '') {
				vnode.children = undefined;
			}
			if (vnode.children) {
				attrs.children = vnode.children;
			}

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value !== 0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) {
		oldVnodeHook(vnode);
	}
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
	    a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) {
		extend(vnode.attributes, tag.defaultProps);
	}
	if (a) {
		extend(vnode.attributes, a);
	}
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) {
			if (shouldSanitize = CAMEL_PROPS.test(i)) {
				break;
			}
		}
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i] = a[i];
				}
			}
		}
	}
}

// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode !== parent) {
		prev = null;
	}

	// default to first Element child
	if (!prev && parent) {
		prev = parent.firstElementChild;
	}

	// remove unaffected siblings
	for (var i = parent.childNodes.length; i--;) {
		if (parent.childNodes[i] !== prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = Object(preact_min["render"])(vnode, parent, prev);
	if (parent) {
		parent._preactCompatRendered = out && (out._component || { base: out });
	}
	if (typeof callback === 'function') {
		callback();
	}
	return out && out._component || out;
}

var ContextProvider = function ContextProvider() {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = Object(preact_min["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var renderContainer = render$1(wrap, container);
	var component = renderContainer._component || renderContainer.base;
	if (callback) {
		callback.call(component, renderContainer);
	}
	return component;
}

function Portal(props) {
	renderSubtreeIntoContainer(this, props.vnode, props.container);
}

function createPortal(vnode, container) {
	return Object(preact_min["h"])(Portal, { vnode: vnode, container: container });
}

function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode === container) {
		Object(preact_min["render"])(Object(preact_min["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}

var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function map(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		return children.map(fn);
	},
	forEach: function forEach(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		children.forEach(fn);
	},
	count: function count(children) {
		return children && children.length || 0;
	},
	only: function only(children) {
		children = Children.toArray(children);
		if (children.length !== 1) {
			throw new Error('Children.only() expects only one child.');
		}
		return children[0];
	},
	toArray: function toArray(children) {
		if (children == null) {
			return [];
		}
		return ARR.concat(children);
	}
};

/** Track current render() component for ref assignment */
var currentComponent;

function createFactory(type) {
	return createElement.bind(null, type);
}

var DOM = {};
for (var preact_compat_es_i = ELEMENTS.length; preact_compat_es_i--;) {
	DOM[ELEMENTS[preact_compat_es_i]] = createFactory(ELEMENTS[preact_compat_es_i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i = offset || 0; i < arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		} else if (obj && typeof obj === 'object' && !isValidElement(obj) && (obj.props && obj.type || obj.attributes && obj.nodeName || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c === 'function' && !(c.prototype && c.prototype.render);
}

// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function render() {
			return WrappedComponent(this.props, this.context);
		}
	});
}

function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) {
		return Wrapped === true ? Ctor : Wrapped;
	}

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable: true, value: true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable: true, value: Wrapped });

	return Wrapped;
}

function createElement() {
	var args = [],
	    len = arguments.length;
	while (len--) {
		args[len] = arguments[len];
	}upgradeToVNodes(args, 2);
	return normalizeVNode(preact_min["h"].apply(void 0, args));
}

function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
	    type = ref && typeof ref;
	if (currentComponent && (type === 'string' || type === 'number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}

function cloneElement$1(element, props) {
	var children = [],
	    len = arguments.length - 2;
	while (len-- > 0) {
		children[len] = arguments[len + 2];
	}if (!isValidElement(element)) {
		return element;
	}
	var elementProps = element.attributes || element.props;
	var node = Object(preact_min["h"])(element.nodeName || element.type, extend({}, elementProps), element.children || elementProps && elementProps.children);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	} else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(preact_min["cloneElement"].apply(void 0, cloneArgs));
}

function isValidElement(element) {
	return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
}

function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved === null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}

function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName !== 'string') {
		return;
	}
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName === 'textarea' || nodeName.toLowerCase() === 'input' && !/^fil|che|rad/i.test(attributes.type))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}

function applyClassName(vnode) {
	var a = vnode.attributes || (vnode.attributes = {});
	classNameDescriptor.enumerable = 'className' in a;
	if (a.className) {
		a.class = a.className;
	}
	Object.defineProperty(a, 'className', classNameDescriptor);
}

var classNameDescriptor = {
	configurable: true,
	get: function get() {
		return this.class;
	},
	set: function set(v) {
		this.class = v;
	}
};

function extend(base, props) {
	var arguments$1 = arguments;

	for (var i = 1, obj = void 0; i < arguments.length; i++) {
		if (obj = arguments$1[i]) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					base[key] = obj[key];
				}
			}
		}
	}
	return base;
}

function shallowDiffers(a, b) {
	for (var i in a) {
		if (!(i in b)) {
			return true;
		}
	}
	for (var i$1 in b) {
		if (a[i$1] !== b[i$1]) {
			return true;
		}
	}
	return false;
}

function findDOMNode(component) {
	return component && (component.base || component.nodeType === 1 && component) || null;
}

function F() {}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps.call(cl);
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}

// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i = 0; i < mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
				(keyed[key] || (keyed[key] = [])).push(mixin[key]);
			}
		}
	}
	return keyed;
}

// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) {
		if (mixins.hasOwnProperty(key)) {
			proto[key] = multihook(mixins[key].concat(proto[key] || ARR), key === 'getDefaultProps' || key === 'getInitialState' || key === 'getChildContext');
		}
	}
}

function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}

function callMethod(ctx, m, args) {
	if (typeof m === 'string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m === 'function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function () {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i = 0; i < hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r != null) {
				if (!ret) {
					ret = {};
				}
				for (var key in r) {
					if (r.hasOwnProperty(key)) {
						ret[key] = r[key];
					}
				}
			} else if (typeof r !== 'undefined') {
				ret = r;
			}
		}
		return ret;
	};
}

function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}

function propsHook(props, context) {
	if (!props) {
		return;
	}

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length === 1 && (typeof c[0] === 'string' || typeof c[0] === 'function' || c[0] instanceof VNode)) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children === 'object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this === 'function' ? this : this.constructor,
		    propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			prop_types_default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}

function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent === this) {
		currentComponent = null;
	}
}

function Component$1(props, context, opts) {
	preact_min["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts !== BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new preact_min["Component"](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function replaceState(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function getDOMNode() {
		return this.base;
	},

	isMounted: function isMounted() {
		return !!this.base;
	}
});

function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function (props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

function unstable_batchedUpdates(callback) {
	callback();
}

var index = {
	version: version,
	DOM: DOM,
	PropTypes: prop_types_default.a,
	Children: Children,
	render: render$1,
	hydrate: render$1,
	createClass: createClass,
	createContext: createContext,
	createPortal: createPortal,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	createRef: preact_min["createRef"],
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
	unstable_batchedUpdates: unstable_batchedUpdates,
	__spread: extend
};

/* harmony default export */ var preact_compat_es = __webpack_exports__["c"] = (index);

//# sourceMappingURL=preact-compat.es.js.map

/***/ }),

/***/ "gKs0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var constants;
(function (constants) {
    constants.typeOfFunction = 'function';
    constants.boolTrue = true;
})(constants || (constants = {}));
function bind(target, propertyKey, descriptor) {
    if (!descriptor || typeof descriptor.value !== constants.typeOfFunction) {
        throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
    }
    return {
        configurable: constants.boolTrue,
        get: function get() {
            var bound = descriptor.value.bind(this);
            // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: constants.boolTrue,
                writable: constants.boolTrue
            });
            return bound;
        }
    };
}
exports.bind = bind;
exports.default = bind;

/***/ }),

/***/ "hIuj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jRlo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
			value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t\tmargin: 100px auto;\n\t\tposition: relative;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t'], ['\n\t\tmargin: 100px auto;\n\t\tposition: relative;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbackground-color: ', ';\n\t\tanimation: ', ' 2s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t'], ['\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbackground-color: ', ';\n\t\tanimation: ', ' 2s infinite ease-in-out;\n\t\tanimation-duration: ', ';\n\t']),
    _templateObject3 = _taggedTemplateLiteral([' animation-delay: -0.9s; '], [' animation-delay: -0.9s; ']);

var _preact = __webpack_require__("KM04");

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__("X5xa");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = __webpack_require__("ockL");

var _defaults = __webpack_require__("N9d+");

function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
			return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var Cube = function Cube(_ref) {
			var color = _ref.color,
			    duration = _ref.duration,
			    size = _ref.size,
			    cubeSize = _ref.cubeSize;

			var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size));

			var DefaultCube = _styledComponents2.default.div(_templateObject2, function (props) {
						return props.cubeSize ? props.cubeSize : '15px';
			}, function (props) {
						return props.cubeSize ? props.cubeSize : '15px';
			}, (0, _defaults.getColor)(color), _animations.cube, function (props) {
						return props.duration ? props.duration : '1.8s';
			});

			var StyledCube = DefaultCube.extend(_templateObject3);

			return (0, _preact.h)(Spinner, { size: size }, (0, _preact.h)(DefaultCube, { color: color, cubeSize: cubeSize, duration: duration }), (0, _preact.h)(StyledCube, { color: color, cubeSize: cubeSize, duration: duration }));
};

exports.default = Cube;

Cube.propTypes = {

			/**
   * Background of the spinner
   * default is #333
   */
			color: _propTypes2.default.string,

			/**
   * Animation duration
   * default is 1.2s
   */
			duration: _propTypes2.default.string,

			/**
   * Size of the spinner
   * default is 40px
   */
			size: _propTypes2.default.string,

			/**
   * Size of the each cube
   * default is 15
   */
			cubeSize: _propTypes2.default.string
};

/***/ }),

/***/ "joOv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPassive", function() { return applyPassive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatchesProperty", function() { return getMatchesProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function() { return getNormalizedEventCoords; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
var supportsCssVariables_ = void 0;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
var supportsPassive_ = void 0;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var supportsCssVariables = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }
  return supportsCssVariables;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

/**
 * @param {!Event} ev
 * @param {{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}



/***/ }),

/***/ "nYpU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"effectiveness":"effectiveness__1qp7Z"};

/***/ }),

/***/ "ockL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bar = exports.grid = exports.circular = exports.dots = exports.bounce = exports.rotate = exports.scale = exports.cube = exports.stretch = exports.pulsate = exports.rotateplane = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }\n\n\t50% {\n\t\ttransform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  }\n\n\t100% {\n\t\ttransform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n\t}\n'], ['\n  0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }\n\n\t50% {\n\t\ttransform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  }\n\n\t100% {\n\t\ttransform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n\t}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0%,\n  100% {\n    transform: scale(0);\n  }\n\n  50% {\n    transform: scale(1);\n  }\n'], ['\n  0%,\n  100% {\n    transform: scale(0);\n  }\n\n  50% {\n    transform: scale(1);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n  }\n\n  20% {\n    transform: scaleY(1);\n\t}\n'], ['\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n  }\n\n  20% {\n    transform: scaleY(1);\n\t}\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  25% {\n    transform: translateX(42px) rotate(-90deg) scale(0.5);\n  }\n\n  50% {\n    transform: translateX(42px) translateY(42px) rotate(-179deg);\n  }\n\n  50.1% {\n    transform: translateX(42px) translateY(42px) rotate(-180deg);\n  }\n\n  75% {\n    transform: translateX(0) translateY(42px) rotate(-270deg) scale(0.5);\n  }\n\n  100% {\n    transform: rotate(-360deg);\n  }\n'], ['\n  25% {\n    transform: translateX(42px) rotate(-90deg) scale(0.5);\n  }\n\n  50% {\n    transform: translateX(42px) translateY(42px) rotate(-179deg);\n  }\n\n  50.1% {\n    transform: translateX(42px) translateY(42px) rotate(-180deg);\n  }\n\n  75% {\n    transform: translateX(0) translateY(42px) rotate(-270deg) scale(0.5);\n  }\n\n  100% {\n    transform: rotate(-360deg);\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n'], ['\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n   100% { transform: rotate(360deg); }\n'], ['\n   100% { transform: rotate(360deg); }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n  }\n\n  40% {\n    transform: scale(1);\n  }\n'], ['\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n  }\n\n  40% {\n    transform: scale(1);\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  0%,\n  70%,\n  100% {\n    transform: scale3D(1, 1, 1);\n  }\n\n  35% {\n    transform: scale3D(0, 0, 1);\n  }\n'], ['\n  0%,\n  70%,\n  100% {\n    transform: scale3D(1, 1, 1);\n  }\n\n  35% {\n    transform: scale3D(0, 0, 1);\n  }\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n\t0% {\n\t\tleft: calc(50% - 100px);\n\t}\n\n\t100% {\n\t\tleft: calc(50% - -50px);\n\t}\n'], ['\n\t0% {\n\t\tleft: calc(50% - 100px);\n\t}\n\n\t100% {\n\t\tleft: calc(50% - -50px);\n\t}\n']);

var _styledComponents = __webpack_require__("X5xa");

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var rotateplane = exports.rotateplane = (0, _styledComponents.keyframes)(_templateObject);

var pulsate = exports.pulsate = (0, _styledComponents.keyframes)(_templateObject2);

var stretch = exports.stretch = (0, _styledComponents.keyframes)(_templateObject3);

var cube = exports.cube = (0, _styledComponents.keyframes)(_templateObject4);

var scale = exports.scale = (0, _styledComponents.keyframes)(_templateObject5);

var rotate = exports.rotate = (0, _styledComponents.keyframes)(_templateObject6);

var bounce = exports.bounce = (0, _styledComponents.keyframes)(_templateObject2);

var dots = exports.dots = (0, _styledComponents.keyframes)(_templateObject7);

var circular = exports.circular = (0, _styledComponents.keyframes)(_templateObject7);

var grid = exports.grid = (0, _styledComponents.keyframes)(_templateObject8);

var bar = exports.bar = (0, _styledComponents.keyframes)(_templateObject9);

/***/ }),

/***/ "pv+l":
/***/ (function(module, exports) {

module.exports = function (originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "qKn3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rW9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Formfield = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _preact = __webpack_require__("KM04");

var _MaterialComponent2 = _interopRequireDefault(__webpack_require__("uc5p"));

var Formfield =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Formfield, _MaterialComponent);

  function Formfield() {
    var _this;

    (0, _classCallCheck2.default)(this, Formfield);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Formfield).apply(this, arguments));
    _this.componentName = 'form-field';
    _this.mdcProps = ['align-end'];
    return _this;
  }

  (0, _createClass2.default)(Formfield, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({}, props), this.props.children);
    }
  }]);
  return Formfield;
}(_MaterialComponent2.default);

exports.Formfield = Formfield;
var _default = Formfield;
exports.default = _default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "rq4c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sFuf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t\tposition: relative;\n\t\tmargin: 100px auto;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\t'], ['\n\t\tposition: relative;\n\t\tmargin: 100px auto;\n\t\twidth: ', ';\n\t\theight: ', ';\n\t\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\n\t\t&::before {\n\t\t\tcontent: \'\';\n\t\t\tdisplay: block;\n\t\t\tmargin: 0 auto;\n\t\t\twidth: 15%;\n\t\t\theight: 15%;\n\t\t\tbackground-color: ', ';\n\t\t\tborder-radius: 100%;\n\t\t\tanimation: ', ' 1.2s infinite ease-in-out both;\n\t\t}\n\t'], ['\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\n\t\t&::before {\n\t\t\tcontent: \'\';\n\t\t\tdisplay: block;\n\t\t\tmargin: 0 auto;\n\t\t\twidth: 15%;\n\t\t\theight: 15%;\n\t\t\tbackground-color: ', ';\n\t\t\tborder-radius: 100%;\n\t\t\tanimation: ', ' 1.2s infinite ease-in-out both;\n\t\t}\n\t']),
    _templateObject3 = _taggedTemplateLiteral(['\n        transform: rotate(30deg);\n        &::before { animation-delay: -1.1s; }\n    '], ['\n        transform: rotate(30deg);\n        &::before { animation-delay: -1.1s; }\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        transform: rotate(60deg);\n        &::before { animation-delay: -1s; }\n    '], ['\n        transform: rotate(60deg);\n        &::before { animation-delay: -1s; }\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n        transform: rotate(90deg);\n        &::before { animation-delay: -0.9s; }\n    '], ['\n        transform: rotate(90deg);\n        &::before { animation-delay: -0.9s; }\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n        transform: rotate(120deg);\n        &::before { animation-delay: -0.8s; }\n    '], ['\n        transform: rotate(120deg);\n        &::before { animation-delay: -0.8s; }\n    ']),
    _templateObject7 = _taggedTemplateLiteral(['\n        transform: rotate(150deg);\n        &::before { animation-delay: -0.7s; }\n    '], ['\n        transform: rotate(150deg);\n        &::before { animation-delay: -0.7s; }\n    ']),
    _templateObject8 = _taggedTemplateLiteral(['\n        transform: rotate(180deg);\n        &::before { animation-delay: -0.6s; }\n    '], ['\n        transform: rotate(180deg);\n        &::before { animation-delay: -0.6s; }\n    ']),
    _templateObject9 = _taggedTemplateLiteral(['\n        transform: rotate(210deg);\n        &::before { animation-delay: -0.5s; }\n    '], ['\n        transform: rotate(210deg);\n        &::before { animation-delay: -0.5s; }\n    ']),
    _templateObject10 = _taggedTemplateLiteral(['\n        transform: rotate(240deg);\n        &::before { animation-delay: -0.4s; }\n    '], ['\n        transform: rotate(240deg);\n        &::before { animation-delay: -0.4s; }\n    ']),
    _templateObject11 = _taggedTemplateLiteral(['\n        transform: rotate(270deg);\n        &::before { animation-delay: -0.3s; }\n    '], ['\n        transform: rotate(270deg);\n        &::before { animation-delay: -0.3s; }\n    ']),
    _templateObject12 = _taggedTemplateLiteral(['\n        transform: rotate(300deg);\n        &::before { animation-delay: -0.2s; }\n    '], ['\n        transform: rotate(300deg);\n        &::before { animation-delay: -0.2s; }\n    ']),
    _templateObject13 = _taggedTemplateLiteral(['\n        transform: rotate(330deg);\n        &::before { animation-delay: -0.1s; }\n    '], ['\n        transform: rotate(330deg);\n        &::before { animation-delay: -0.1s; }\n    ']);

var _preact = __webpack_require__("KM04");

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__("X5xa");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = __webpack_require__("ockL");

var _defaults = __webpack_require__("N9d+");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var Circular = function Circular(_ref) {
    var color = _ref.color,
        size = _ref.size;

    var Spinner = _styledComponents2.default.div(_templateObject, (0, _defaults.getSize)(size), (0, _defaults.getSize)(size));
    var Circle = _styledComponents2.default.div(_templateObject2, (0, _defaults.getColor)(color), _animations.circular);

    var Circle2 = Circle.extend(_templateObject3);
    var Circle3 = Circle.extend(_templateObject4);
    var Circle4 = Circle.extend(_templateObject5);
    var Circle5 = Circle.extend(_templateObject6);
    var Circle6 = Circle.extend(_templateObject7);
    var Circle7 = Circle.extend(_templateObject8);
    var Circle8 = Circle.extend(_templateObject9);
    var Circle9 = Circle.extend(_templateObject10);
    var Circle10 = Circle.extend(_templateObject11);
    var Circle11 = Circle.extend(_templateObject12);
    var Circle12 = Circle.extend(_templateObject13);

    return (0, _preact.h)(Spinner, { size: size }, (0, _preact.h)(Circle, { color: color }), (0, _preact.h)(Circle2, { color: color }), (0, _preact.h)(Circle3, { color: color }), (0, _preact.h)(Circle4, { color: color }), (0, _preact.h)(Circle5, { color: color }), (0, _preact.h)(Circle6, { color: color }), (0, _preact.h)(Circle7, { color: color }), (0, _preact.h)(Circle8, { color: color }), (0, _preact.h)(Circle9, { color: color }), (0, _preact.h)(Circle10, { color: color }), (0, _preact.h)(Circle11, { color: color }), (0, _preact.h)(Circle12, { color: color }));
};

exports.default = Circular;

Circular.propTypes = {

    /**
    * Background of the spinner
    * default is #333
    */
    color: _propTypes2.default.string,

    /**
    * Size of the spinner
    * default is 40px
    */
    size: _propTypes2.default.string
};

/***/ }),

/***/ "sJaT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Card = exports.CardMediaContent = exports.CardActionIcon = exports.CardActionButtons = exports.CardActionIcons = exports.CardActionButton = exports.CardMedia = exports.CardActions = void 0;

var _get2 = _interopRequireDefault(__webpack_require__("J5U+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _preact = __webpack_require__("KM04");

var _MaterialComponent6 = _interopRequireDefault(__webpack_require__("uc5p"));

var _Button2 = _interopRequireDefault(__webpack_require__("7/cg"));

var _Icon2 = _interopRequireDefault(__webpack_require__("MeGi"));

var CardActions =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(CardActions, _MaterialComponent);

  function CardActions() {
    var _this;

    (0, _classCallCheck2.default)(this, CardActions);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CardActions).apply(this, arguments));
    _this.componentName = 'card__actions';
    _this.mdcProps = ['full-bleed'];
    return _this;
  }

  (0, _createClass2.default)(CardActions, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({}, props), this.props.children);
    }
  }]);
  return CardActions;
}(_MaterialComponent6.default);

exports.CardActions = CardActions;

var CardMedia =
/*#__PURE__*/
function (_MaterialComponent2) {
  (0, _inherits2.default)(CardMedia, _MaterialComponent2);

  function CardMedia() {
    var _this2;

    (0, _classCallCheck2.default)(this, CardMedia);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CardMedia).apply(this, arguments));
    _this2.componentName = 'card__media';
    _this2.mdcProps = ['square', '16-9'];
    return _this2;
  }

  (0, _createClass2.default)(CardMedia, [{
    key: "materialDom",
    value: function materialDom(props) {
      if (props.sixteenByNine) {
        props.className = 'mdc-card__media--16-9';
      }

      return (0, _preact.h)("div", _extends({}, props), this.props.children);
    }
  }]);
  return CardMedia;
}(_MaterialComponent6.default);

exports.CardMedia = CardMedia;

var CardActionButton =
/*#__PURE__*/
function (_Button) {
  (0, _inherits2.default)(CardActionButton, _Button);

  function CardActionButton() {
    var _this3;

    (0, _classCallCheck2.default)(this, CardActionButton);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CardActionButton).apply(this, arguments));
    _this3.componentName = 'card__action';
    _this3.mdcProps = [];
    return _this3;
  }

  (0, _createClass2.default)(CardActionButton, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("button", _extends({
        className: "mdc-button mdc-card__action--button"
      }, props, {
        ref: this.setControlRef
      }), props.children);
    }
  }]);
  return CardActionButton;
}(_Button2.default);

exports.CardActionButton = CardActionButton;

var CardActionIcons =
/*#__PURE__*/
function (_MaterialComponent3) {
  (0, _inherits2.default)(CardActionIcons, _MaterialComponent3);

  function CardActionIcons() {
    var _this4;

    (0, _classCallCheck2.default)(this, CardActionIcons);
    _this4 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CardActionIcons).apply(this, arguments));
    _this4.componentName = 'card__action-icons';
    _this4.mdcProps = [];
    return _this4;
  }

  (0, _createClass2.default)(CardActionIcons, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({}, props), this.props.children);
    }
  }]);
  return CardActionIcons;
}(_MaterialComponent6.default);

exports.CardActionIcons = CardActionIcons;

var CardActionButtons =
/*#__PURE__*/
function (_CardActionIcons) {
  (0, _inherits2.default)(CardActionButtons, _CardActionIcons);

  function CardActionButtons() {
    var _this5;

    (0, _classCallCheck2.default)(this, CardActionButtons);
    _this5 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CardActionButtons).apply(this, arguments));
    _this5.componentName = 'card__action-buttons';
    return _this5;
  }

  return CardActionButtons;
}(CardActionIcons);

exports.CardActionButtons = CardActionButtons;

var CardActionIcon =
/*#__PURE__*/
function (_Icon) {
  (0, _inherits2.default)(CardActionIcon, _Icon);

  function CardActionIcon() {
    var _this6;

    (0, _classCallCheck2.default)(this, CardActionIcon);
    _this6 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CardActionIcon).apply(this, arguments));
    _this6.componentName = 'card__action';
    _this6.mdcProps = [];
    return _this6;
  }

  (0, _createClass2.default)(CardActionIcon, [{
    key: "materialDom",
    value: function materialDom(props) {
      if (props.className) {
        props.className += ' mdc-card__action--icon';
      } else {
        props.className = 'mdc-card__action--icon';
      }

      return (0, _get2.default)((0, _getPrototypeOf2.default)(CardActionIcon.prototype), "materialDom", this).call(this, props);
    }
  }]);
  return CardActionIcon;
}(_Icon2.default);

exports.CardActionIcon = CardActionIcon;

var CardMediaContent =
/*#__PURE__*/
function (_MaterialComponent4) {
  (0, _inherits2.default)(CardMediaContent, _MaterialComponent4);

  function CardMediaContent() {
    var _this7;

    (0, _classCallCheck2.default)(this, CardMediaContent);
    _this7 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CardMediaContent).apply(this, arguments));
    _this7.componentName = 'card__media-content';
    _this7.mdcProps = [];
    return _this7;
  }

  (0, _createClass2.default)(CardMediaContent, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({}, props), this.props.children);
    }
  }]);
  return CardMediaContent;
}(_MaterialComponent6.default);

exports.CardMediaContent = CardMediaContent;

var Card =
/*#__PURE__*/
function (_MaterialComponent5) {
  (0, _inherits2.default)(Card, _MaterialComponent5);

  function Card() {
    var _this8;

    (0, _classCallCheck2.default)(this, Card);
    _this8 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Card).apply(this, arguments));
    _this8.componentName = 'card';
    _this8.mdcProps = ['outlined'];
    return _this8;
  }

  (0, _createClass2.default)(Card, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({}, props), this.props.children);
    }
  }]);
  return Card;
}(_MaterialComponent6.default);

exports.Card = Card;

var default_1 =
/*#__PURE__*/
function (_Card) {
  (0, _inherits2.default)(default_1, _Card);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(Card);

exports.default = default_1;
default_1.Actions = CardActions;
default_1.ActionButtons = CardActionButtons;
default_1.ActionButton = CardActionButton;
default_1.ActionIcons = CardActionIcons;
default_1.ActionIcon = CardActionIcon;
default_1.Media = CardMedia;
default_1.CardMediaContent = CardMediaContent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "sSiY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"card":"card__20V6Y"};

/***/ }),

/***/ "sdYp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        margin: 100px auto;\n        animation: ', ' 1.2s infinite ease-in-out;\n        background: ', ';\n        width: ', ';\n        height: ', ';\n        border-radius: 100%;\n        animation-duration: ', ';\n    '], ['\n        margin: 100px auto;\n        animation: ', ' 1.2s infinite ease-in-out;\n        background: ', ';\n        width: ', ';\n        height: ', ';\n        border-radius: 100%;\n        animation-duration: ', ';\n    ']);

var _preact = __webpack_require__("KM04");

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__("X5xa");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = __webpack_require__("ockL");

var _defaults = __webpack_require__("N9d+");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
}

var Scale = function Scale(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    /* eslint-disable */
    var Spinner = _styledComponents2.default.div(_templateObject, _animations.scale, (0, _defaults.getColor)(props.color), (0, _defaults.getSize)(props.size), (0, _defaults.getSize)(props.size), function (props) {
        return props.duration ? props.duration : '1.0s';
    });
    /* eslint-enable */

    return (0, _preact.h)(Spinner, props);
};

exports.default = Scale;

Scale.propTypes = {
    /**
    * Background of the spinner
    * default is #333
    */
    color: _propTypes2.default.string,

    /**
    * Animation duration
    * default is 1.2s
    */
    duration: _propTypes2.default.string,

    /**
    * Size of the spinner
    * default is 40px
    */
    size: _propTypes2.default.string
};

/***/ }),

/***/ "sw5u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Link = exports.Match = undefined;

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _preact = __webpack_require__("KM04");

var _preactRouter = __webpack_require__("/QC5");

function _objectWithoutProperties(obj, keys) {
	var target = {};for (var i in obj) {
		if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	}return target;
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Match = exports.Match = function (_Component) {
	_inherits(Match, _Component);

	function Match() {
		var _temp, _this, _ret;

		_classCallCheck(this, Match);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function (url) {
			_this.nextUrl = url;
			_this.setState({});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	Match.prototype.componentDidMount = function componentDidMount() {
		_preactRouter.subscribers.push(this.update);
	};

	Match.prototype.componentWillUnmount = function componentWillUnmount() {
		_preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
	};

	Match.prototype.render = function render(props) {
		var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(),
		    path = url.replace(/\?.+$/, '');
		this.nextUrl = null;
		return props.children[0] && props.children[0]({
			url: url,
			path: path,
			matches: path === props.path
		});
	};

	return Match;
}(_preact.Component);

var Link = function Link(_ref) {
	var activeClassName = _ref.activeClassName,
	    path = _ref.path,
	    props = _objectWithoutProperties(_ref, ['activeClassName', 'path']);

	return (0, _preact.h)(Match, { path: path || props.href }, function (_ref2) {
		var matches = _ref2.matches;
		return (0, _preact.h)(_preactRouter.Link, _extends({}, props, { 'class': [props.class || props.className, matches && activeClassName].filter(Boolean).join(' ') }));
	});
};

exports.Link = Link;
exports.default = Match;

Match.Link = Link;

/***/ }),

/***/ "u3et":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"header__3QGkI","active":"active__3gItZ"};

/***/ }),

/***/ "uJAj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @template A
 */
var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",

    /** @return enum{cssClasses} */
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }

    /** @return enum{strings} */

  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }

    /** @return enum{numbers} */

  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }

    /** @return {!Object} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }

    /**
     * @param {A=} adapter
     */

  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  MDCFoundation.prototype.init = function init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  };

  MDCFoundation.prototype.destroy = function destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };

  return MDCFoundation;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCFoundation);

/***/ }),

/***/ "uc5p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MaterialComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _typeof2 = _interopRequireDefault(__webpack_require__("b9XL"));

var _ripple = __webpack_require__("vkNc");

var _bindDecorator = __webpack_require__("gKs0");

var _preact = __webpack_require__("KM04");

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var doNotRemoveProps = ['disabled'];
/**
 * Base class for every Material component in this package
 * NOTE: every component should add a ref by the name of `control` to its root dom for autoInit Properties
 *
 * @export
 * @class MaterialComponent
 * @extends {Component}
 */

var MaterialComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(MaterialComponent, _Component);

  function MaterialComponent() {
    (0, _classCallCheck2.default)(this, MaterialComponent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MaterialComponent).apply(this, arguments));
  }

  (0, _createClass2.default)(MaterialComponent, [{
    key: "render",
    value: function render(props) {
      if (!this.classText) {
        this.classText = this.buildClassName(props);
      } // Fetch a VNode


      var componentProps = props;
      var userDefinedClasses = componentProps.className || componentProps.class || ''; // We delete class props and add them later in the final
      // step so every component does not need to handle user specified classes.

      if (componentProps.class) {
        delete componentProps.class;
      }

      if (componentProps.className) {
        delete componentProps.className;
      }

      var element = this.materialDom(componentProps);
      element.attributes = element.attributes || {};
      element.attributes.className = "".concat(userDefinedClasses, " ").concat(this.getClassName(element)).split(' ').filter(function (value, index, self) {
        return self.indexOf(value) === index && value !== '';
      }) // Unique + exclude empty class names
      .join(' '); // Clean this shit of proxy attributes

      this.mdcProps.forEach(function (prop) {
        // TODO: Fix this better
        if (prop in doNotRemoveProps) {
          return;
        }

        delete element.attributes[prop];
      });
      return element;
    }
    /** Attach the ripple effect */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.ripple && this.control) {
        this.ripple = new _ripple.MDCRipple(this.control);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.MDComponent && this.mdcNotifyProps) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.mdcNotifyProps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var prop = _step.value;

            if (this.props[prop] !== nextProps[prop]) {
              this.MDComponent[prop] = nextProps[prop];
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.mdcProps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _prop = _step2.value;

          if (this.props[_prop] !== nextProps[_prop]) {
            this.classText = this.buildClassName(nextProps);
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.ripple) {
        this.ripple.destroy();
      }
    }
  }, {
    key: "afterComponentDidMount",
    value: function afterComponentDidMount() {
      if (this.MDComponent && this.mdcNotifyProps) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.mdcNotifyProps[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var prop = _step3.value;
            this.MDComponent[prop] = this.props[prop];
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    } // Shared setter for the root element ref

  }, {
    key: "setControlRef",
    value: function setControlRef(control) {
      this.control = control;
    }
    /** Build the className based on component names and mdc props */

  }, {
    key: "buildClassName",
    value: function buildClassName(props) {
      // Class name based on component name
      var classText = 'mdc-' + this.componentName; // Loop over mdcProps to turn them into classNames

      for (var propKey in props) {
        if (props.hasOwnProperty(propKey)) {
          var prop = props[propKey];

          if (typeof prop === 'boolean' && prop) {
            if (this.mdcProps.indexOf(propKey) !== -1) {
              classText += " mdc-".concat(this.componentName, "--").concat(propKey);
            }
          }
        }
      }

      return classText;
    }
    /** Returns the class name for element */

  }, {
    key: "getClassName",
    value: function getClassName(element) {
      if (!element) {
        return '';
      }

      var attrs = element.attributes = element.attributes || {};
      var classText = this.classText;

      if (attrs.class) {
        classText += ' ' + attrs.class;
      }

      if (attrs.className && attrs.className !== attrs.class) {
        classText += ' ' + attrs.className;
      }

      return classText;
    }
  }]);
  return MaterialComponent;
}(_preact.Component);

exports.MaterialComponent = MaterialComponent;

__decorate([_bindDecorator.bind], MaterialComponent.prototype, "setControlRef", null);

var _default = MaterialComponent;
exports.default = _default;
//# sourceMappingURL=MaterialComponent.js.map

/***/ }),

/***/ "vkNc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/@material/base/component.js
var component = __webpack_require__("EQDb");

// CONCATENATED MODULE: ../node_modules/@material/ripple/adapter.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCRippleAdapter = function () {
  function MDCRippleAdapter() {
    _classCallCheck(this, MDCRippleAdapter);
  }

  /** @return {boolean} */
  MDCRippleAdapter.prototype.browserSupportsCssVars = function browserSupportsCssVars() {};

  /** @return {boolean} */


  MDCRippleAdapter.prototype.isUnbounded = function isUnbounded() {};

  /** @return {boolean} */


  MDCRippleAdapter.prototype.isSurfaceActive = function isSurfaceActive() {};

  /** @return {boolean} */


  MDCRippleAdapter.prototype.isSurfaceDisabled = function isSurfaceDisabled() {};

  /** @param {string} className */


  MDCRippleAdapter.prototype.addClass = function addClass(className) {};

  /** @param {string} className */


  MDCRippleAdapter.prototype.removeClass = function removeClass(className) {};

  /** @param {!EventTarget} target */


  MDCRippleAdapter.prototype.containsEventTarget = function containsEventTarget(target) {};

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.registerInteractionHandler = function registerInteractionHandler(evtType, handler) {};

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.deregisterInteractionHandler = function deregisterInteractionHandler(evtType, handler) {};

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.registerDocumentInteractionHandler = function registerDocumentInteractionHandler(evtType, handler) {};

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.deregisterDocumentInteractionHandler = function deregisterDocumentInteractionHandler(evtType, handler) {};

  /**
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.registerResizeHandler = function registerResizeHandler(handler) {};

  /**
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.deregisterResizeHandler = function deregisterResizeHandler(handler) {};

  /**
   * @param {string} varName
   * @param {?number|string} value
   */


  MDCRippleAdapter.prototype.updateCssVariable = function updateCssVariable(varName, value) {};

  /** @return {!ClientRect} */


  MDCRippleAdapter.prototype.computeBoundingRect = function computeBoundingRect() {};

  /** @return {{x: number, y: number}} */


  MDCRippleAdapter.prototype.getWindowPageOffset = function getWindowPageOffset() {};

  return MDCRippleAdapter;
}();

/* harmony default export */ var adapter = (MDCRippleAdapter);
// EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
var foundation = __webpack_require__("uJAj");

// CONCATENATED MODULE: ../node_modules/@material/ripple/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
};


// EXTERNAL MODULE: ../node_modules/@material/ripple/util.js
var util = __webpack_require__("joOv");

// CONCATENATED MODULE: ../node_modules/@material/ripple/foundation.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/**
 * @typedef {{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
var ActivationStateType = void 0;

/**
 * @typedef {{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
var ListenerInfoType = void 0;

/**
 * @typedef {{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
var ListenersType = void 0;

/**
 * @typedef {{
 *   x: number,
 *   y: number
 * }}
 */
var PointType = void 0;

// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
var activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */

var foundation_MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    foundation__classCallCheck(this, MDCRippleFoundation);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    _this.activationState_ = _this.defaultActivationState_();

    /** @private {number} */
    _this.initialSize_ = 0;

    /** @private {number} */
    _this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    /** @private {function(!Event)} */
    _this.deactivateHandler_ = function (e) {
      return _this.deactivate_(e);
    };

    /** @private {function(?Event=)} */
    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    /** @private {function(?Event=)} */
    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    /** @private {!Function} */
    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    /** @private {{left: number, top:number}} */
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    _this.fgScale_ = 0;

    /** @private {number} */
    _this.activationTimer_ = 0;

    /** @private {number} */
    _this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    _this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };

    /** @private {?Event} */
    _this.previousActivationEvent_ = null;
    return _this;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */


  MDCRippleFoundation.prototype.supportsPressRipple_ = function supportsPressRipple_() {
    return this.adapter_.browserSupportsCssVars();
  };

  /**
   * @return {!ActivationStateType}
   */


  MDCRippleFoundation.prototype.defaultActivationState_ = function defaultActivationState_() {
    return {
      isActivated: false,
      hasDeactivationUXRun: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false,
      activationEvent: null,
      isProgrammatic: false
    };
  };

  /** @override */


  MDCRippleFoundation.prototype.init = function init() {
    var _this2 = this;

    var supportsPressRipple = this.supportsPressRipple_();

    this.registerRootHandlers_(supportsPressRipple);

    if (supportsPressRipple) {
      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
          // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
          _this2.layoutInternal_();
        }
      });
    }
  };

  /** @override */


  MDCRippleFoundation.prototype.destroy = function destroy() {
    var _this3 = this;

    if (this.supportsPressRipple_()) {
      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }

      if (this.fgDeactivationRemovalTimer_) {
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.fgDeactivationRemovalTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
      }

      var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$2.ROOT,
          UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

      requestAnimationFrame(function () {
        _this3.adapter_.removeClass(ROOT);
        _this3.adapter_.removeClass(UNBOUNDED);
        _this3.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();
  };

  /**
   * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
   * @private
   */


  MDCRippleFoundation.prototype.registerRootHandlers_ = function registerRootHandlers_(supportsPressRipple) {
    var _this4 = this;

    if (supportsPressRipple) {
      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
      });
      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
  };

  /**
   * @param {!Event} e
   * @private
   */


  MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function registerDeactivationHandlers_(e) {
    var _this5 = this;

    if (e.type === 'keydown') {
      this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
      });
    }
  };

  /** @private */


  MDCRippleFoundation.prototype.deregisterRootHandlers_ = function deregisterRootHandlers_() {
    var _this6 = this;

    ACTIVATION_EVENT_TYPES.forEach(function (type) {
      _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
    });
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

    if (this.adapter_.isUnbounded()) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  };

  /** @private */


  MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function deregisterDeactivationHandlers_() {
    var _this7 = this;

    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
      _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
    });
  };

  /** @private */


  MDCRippleFoundation.prototype.removeCssVars_ = function removeCssVars_() {
    var _this8 = this;

    var strings = MDCRippleFoundation.strings;

    Object.keys(strings).forEach(function (k) {
      if (k.indexOf('VAR_') === 0) {
        _this8.adapter_.updateCssVariable(strings[k], null);
      }
    });
  };

  /**
   * @param {?Event} e
   * @private
   */


  MDCRippleFoundation.prototype.activate_ = function activate_(e) {
    var _this9 = this;

    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    var activationState = this.activationState_;
    if (activationState.isActivated) {
      return;
    }

    // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
    var previousActivationEvent = this.previousActivationEvent_;
    var isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = e === null;
    activationState.activationEvent = e;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

    var hasActivatedChild = e && activatedTargets.length > 0 && activatedTargets.some(function (target) {
      return _this9.adapter_.containsEventTarget(target);
    });
    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (e) {
      activatedTargets.push( /** @type {!EventTarget} */e.target);
      this.registerDeactivationHandlers_(e);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(function () {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && (e.key === ' ' || e.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
        if (activationState.wasElementMadeActive) {
          _this9.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        _this9.activationState_ = _this9.defaultActivationState_();
      }
    });
  };

  /**
   * @param {?Event} e
   * @private
   */


  MDCRippleFoundation.prototype.checkElementMadeActive_ = function checkElementMadeActive_(e) {
    return e && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
  };

  /**
   * @param {?Event=} event Optional event containing position information.
   */


  MDCRippleFoundation.prototype.activate = function activate() {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    this.activate_(event);
  };

  /** @private */


  MDCRippleFoundation.prototype.animateActivation_ = function animateActivation_() {
    var _this10 = this;

    var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
        VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
        VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
    var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
        FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
        FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


    this.layoutInternal_();

    var translateStart = '';
    var translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
          startPoint = _getFgTranslationCoor.startPoint,
          endPoint = _getFgTranslationCoor.endPoint;

      translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
      translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    // Cancel any ongoing activation/deactivation animations
    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION);

    // Force layout in order to re-trigger the animation.
    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(function () {
      return _this10.activationTimerCallback_();
    }, DEACTIVATION_TIMEOUT_MS);
  };

  /**
   * @private
   * @return {{startPoint: PointType, endPoint: PointType}}
   */


  MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function getFgTranslationCoordinates_() {
    var _activationState_ = this.activationState_,
        activationEvent = _activationState_.activationEvent,
        wasActivatedByPointer = _activationState_.wasActivatedByPointer;


    var startPoint = void 0;
    if (wasActivatedByPointer) {
      startPoint = Object(util["getNormalizedEventCoords"])(
      /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2
      };
    }
    // Center the element around the start point.
    startPoint = {
      x: startPoint.x - this.initialSize_ / 2,
      y: startPoint.y - this.initialSize_ / 2
    };

    var endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };

    return { startPoint: startPoint, endPoint: endPoint };
  };

  /** @private */


  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function runDeactivationUXLogicIfReady_() {
    var _this11 = this;

    // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.
    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
    var _activationState_2 = this.activationState_,
        hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
        isActivated = _activationState_2.isActivated;

    var activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(function () {
        _this11.adapter_.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  };

  /** @private */


  MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function rmBoundedActivationClasses_() {
    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  };

  MDCRippleFoundation.prototype.resetActivationState_ = function resetActivationState_() {
    var _this12 = this;

    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_();
    // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.
    setTimeout(function () {
      return _this12.previousActivationEvent_ = null;
    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  };

  /**
   * @param {?Event} e
   * @private
   */


  MDCRippleFoundation.prototype.deactivate_ = function deactivate_(e) {
    var _this13 = this;

    var activationState = this.activationState_;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.
    if (!activationState.isActivated) {
      return;
    }

    var state = /** @type {!ActivationStateType} */_extends({}, activationState);

    if (activationState.isProgrammatic) {
      var evtObject = null;
      requestAnimationFrame(function () {
        return _this13.animateDeactivation_(evtObject, state);
      });
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(function () {
        _this13.activationState_.hasDeactivationUXRun = true;
        _this13.animateDeactivation_(e, state);
        _this13.resetActivationState_();
      });
    }
  };

  /**
   * @param {?Event=} event Optional event containing position information.
   */


  MDCRippleFoundation.prototype.deactivate = function deactivate() {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    this.deactivate_(event);
  };

  /**
   * @param {Event} e
   * @param {!ActivationStateType} options
   * @private
   */


  MDCRippleFoundation.prototype.animateDeactivation_ = function animateDeactivation_(e, _ref) {
    var wasActivatedByPointer = _ref.wasActivatedByPointer,
        wasElementMadeActive = _ref.wasElementMadeActive;

    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  };

  MDCRippleFoundation.prototype.layout = function layout() {
    var _this14 = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }
    this.layoutFrame_ = requestAnimationFrame(function () {
      _this14.layoutInternal_();
      _this14.layoutFrame_ = 0;
    });
  };

  /** @private */


  MDCRippleFoundation.prototype.layoutInternal_ = function layoutInternal_() {
    var _this15 = this;

    this.frame_ = this.adapter_.computeBoundingRect();
    var maxDim = Math.max(this.frame_.height, this.frame_.width);

    // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.
    var getBoundedRadius = function getBoundedRadius() {
      var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

    // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
    this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
    this.fgScale_ = this.maxRadius_ / this.initialSize_;

    this.updateLayoutCssVars_();
  };

  /** @private */


  MDCRippleFoundation.prototype.updateLayoutCssVars_ = function updateLayoutCssVars_() {
    var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
        VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
        VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
        VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
        VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;


    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };

      this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
      this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
    }
  };

  /** @param {boolean} unbounded */


  MDCRippleFoundation.prototype.setUnbounded = function setUnbounded(unbounded) {
    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  };

  MDCRippleFoundation.prototype.handleFocus = function handleFocus() {
    var _this16 = this;

    requestAnimationFrame(function () {
      return _this16.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };

  MDCRippleFoundation.prototype.handleBlur = function handleBlur() {
    var _this17 = this;

    requestAnimationFrame(function () {
      return _this17.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };

  return MDCRippleFoundation;
}(foundation["a" /* default */]);

/* harmony default export */ var ripple_foundation = (foundation_MDCRippleFoundation);
// CONCATENATED MODULE: ../node_modules/@material/ripple/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return ripple_MDCRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleCapableSurface", function() { return RippleCapableSurface; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return ripple_foundation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "util", function() { return util; });
var ripple__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function ripple__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ripple__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function ripple__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */

var ripple_MDCRipple = function (_MDCComponent) {
  ripple__inherits(MDCRipple, _MDCComponent);

  /** @param {...?} args */
  function MDCRipple() {
    ripple__classCallCheck(this, MDCRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {boolean} */
    var _this = ripple__possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.disabled = false;

    /** @private {boolean} */
    _this.unbounded_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */


  MDCRipple.attachTo = function attachTo(root) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$isUnbounded = _ref.isUnbounded,
        isUnbounded = _ref$isUnbounded === undefined ? undefined : _ref$isUnbounded;

    var ripple = new MDCRipple(root);
    // Only override unbounded behavior if option is explicitly specified
    if (isUnbounded !== undefined) {
      ripple.unbounded = /** @type {boolean} */isUnbounded;
    }
    return ripple;
  };

  /**
   * @param {!RippleCapableSurface} instance
   * @return {!MDCRippleAdapter}
   */


  MDCRipple.createAdapter = function createAdapter(instance) {
    var MATCHES = util["getMatchesProperty"](HTMLElement.prototype);

    return {
      browserSupportsCssVars: function browserSupportsCssVars() {
        return util["supportsCssVariables"](window);
      },
      isUnbounded: function isUnbounded() {
        return instance.unbounded;
      },
      isSurfaceActive: function isSurfaceActive() {
        return instance.root_[MATCHES](':active');
      },
      isSurfaceDisabled: function isSurfaceDisabled() {
        return instance.disabled;
      },
      addClass: function addClass(className) {
        return instance.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return instance.root_.classList.remove(className);
      },
      containsEventTarget: function containsEventTarget(target) {
        return instance.root_.contains(target);
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return instance.root_.addEventListener(evtType, handler, util["applyPassive"]());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return instance.root_.removeEventListener(evtType, handler, util["applyPassive"]());
      },
      registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, util["applyPassive"]());
      },
      deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, util["applyPassive"]());
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        return instance.root_.style.setProperty(varName, value);
      },
      computeBoundingRect: function computeBoundingRect() {
        return instance.root_.getBoundingClientRect();
      },
      getWindowPageOffset: function getWindowPageOffset() {
        return { x: window.pageXOffset, y: window.pageYOffset };
      }
    };
  };

  /** @return {boolean} */


  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   * @private
   */
  MDCRipple.prototype.setUnbounded_ = function setUnbounded_() {
    this.foundation_.setUnbounded(this.unbounded_);
  };

  MDCRipple.prototype.activate = function activate() {
    this.foundation_.activate();
  };

  MDCRipple.prototype.deactivate = function deactivate() {
    this.foundation_.deactivate();
  };

  MDCRipple.prototype.layout = function layout() {
    this.foundation_.layout();
  };

  /**
   * @return {!MDCRippleFoundation}
   * @override
   */


  MDCRipple.prototype.getDefaultFoundation = function getDefaultFoundation() {
    return new ripple_foundation(MDCRipple.createAdapter(this));
  };

  /** @override */


  MDCRipple.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
  };

  ripple__createClass(MDCRipple, [{
    key: 'unbounded',
    get: function get() {
      return this.unbounded_;
    }

    /** @param {boolean} unbounded */
    ,
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    }
  }]);

  return MDCRipple;
}(component["a" /* default */]);

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */


var RippleCapableSurface = function RippleCapableSurface() {
  ripple__classCallCheck(this, RippleCapableSurface);
};

/** @protected {!Element} */


RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;



/***/ }),

/***/ "wVGV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("Asjh");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "xjId":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"stat":"stat__2IBkB"};

/***/ }),

/***/ "yZsP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        margin: 100px auto;\n        animation: ', ' 1.2s infinite ease-in-out;\n        background: ', ';\n        width: ', ';\n        height: ', ';\n        animation-duration: ', ';\n    '], ['\n        margin: 100px auto;\n        animation: ', ' 1.2s infinite ease-in-out;\n        background: ', ';\n        width: ', ';\n        height: ', ';\n        animation-duration: ', ';\n    ']);

var _preact = __webpack_require__("KM04");

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__("X5xa");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = __webpack_require__("ockL");

var _defaults = __webpack_require__("N9d+");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
}

var Block = function Block(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    /* eslint-disable */
    var Spinner = _styledComponents2.default.div(_templateObject, _animations.rotateplane, (0, _defaults.getColor)(props.color), (0, _defaults.getSize)(props.size), (0, _defaults.getSize)(props.size), function (props) {
        return props.duration ? props.duration : '1.2s';
    });
    /* eslint-enable */

    return (0, _preact.h)(Spinner, props);
};

exports.default = Block;

Block.propTypes = {
    /**
    * Background of the spinner
    * default is #333
    */
    color: _propTypes2.default.string,

    /**
    * Animation duration
    * default is 1.2s
    */
    duration: _propTypes2.default.string,

    /**
    * Size of the spinner
    * default is 40px
    */
    size: _propTypes2.default.string
};

/***/ }),

/***/ "yarR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
			value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t\tmargin: 100px auto;\n\t\twidth: ', ';\n\t\ttext-align: center;\n\t\tfont-size: 10px;\n\t\theight: ', ';\n\t'], ['\n\t\tmargin: 100px auto;\n\t\twidth: ', ';\n\t\ttext-align: center;\n\t\tfont-size: 10px;\n\t\theight: ', ';\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\tbackground-color: ', ';\n\t\theight: 100%;\n\t\twidth: ', ';\n\t\tdisplay: inline-block;\n\t\tanimation: ', ' 1.2s infinite ease-in-out;\n\t\tanimation-duration: ', 's;\n\t'], ['\n\t\tbackground-color: ', ';\n\t\theight: 100%;\n\t\twidth: ', ';\n\t\tdisplay: inline-block;\n\t\tanimation: ', ' 1.2s infinite ease-in-out;\n\t\tanimation-duration: ', 's;\n\t']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t\tanimation-delay: -', 's;\n\t'], ['\n\t\tanimation-delay: -', 's;\n\t']);

var _preact = __webpack_require__("KM04");

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__("X5xa");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = __webpack_require__("ockL");

var _defaults = __webpack_require__("N9d+");

function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
			return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var Stretch = function Stretch(_ref) {
			var color = _ref.color,
			    duration = _ref.duration,
			    size = _ref.size;

			var durationTime = function durationTime(durationT) {
						return durationT ? parseInt(durationT, 10) : 1.2;
			};
			var Spinner = _styledComponents2.default.div(_templateObject, function (props) {
						return props.size ? props.size : '50px';
			}, (0, _defaults.getSize)(size));

			var DefaultRect = _styledComponents2.default.div(_templateObject2, (0, _defaults.getColor)(color), function (props) {
						return props.rectWidth ? props.rectWidth : '6px';
			}, _animations.stretch, durationTime(duration));

			var Rect2 = DefaultRect.extend(_templateObject3, durationTime(duration) - 0.1);
			var Rect3 = DefaultRect.extend(_templateObject3, durationTime(duration) - 0.2);
			var Rect4 = DefaultRect.extend(_templateObject3, durationTime(duration) - 0.3);
			var Rect5 = DefaultRect.extend(_templateObject3, durationTime(duration) - 0.4);

			return (0, _preact.h)(Spinner, { size: size }, (0, _preact.h)(DefaultRect, null), (0, _preact.h)(Rect2, null), (0, _preact.h)(Rect3, null), (0, _preact.h)(Rect4, null), (0, _preact.h)(Rect5, null));
};

exports.default = Stretch;

Stretch.propTypes = {

			/**
   * Background of the spinner
   * default is #333
   */
			color: _propTypes2.default.string,

			/**
   * Width of each rectangle
   * default is 6px
   */
			rectWidth: _propTypes2.default.string,

			/**
   * Animation duration
   * default is 1.2s
   */
			duration: _propTypes2.default.string,

			/**
   * Size of the spinner
   * default is 40px
   */
			size: _propTypes2.default.string
};

/***/ }),

/***/ "ziGg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"type":"type__wvU7D","POKEMON_TYPE_NORMAL":"POKEMON_TYPE_NORMAL__34B_B","POKEMON_TYPE_FIRE":"POKEMON_TYPE_FIRE__3PYbw","POKEMON_TYPE_WATER":"POKEMON_TYPE_WATER___cgM5","POKEMON_TYPE_ELECTRIC":"POKEMON_TYPE_ELECTRIC__tM8xu","POKEMON_TYPE_GRASS":"POKEMON_TYPE_GRASS__382pf","POKEMON_TYPE_ICE":"POKEMON_TYPE_ICE__3cBUM","POKEMON_TYPE_FIGHTING":"POKEMON_TYPE_FIGHTING__3chbJ","POKEMON_TYPE_POISON":"POKEMON_TYPE_POISON__1nEOF","POKEMON_TYPE_GROUND":"POKEMON_TYPE_GROUND__3j8yB","POKEMON_TYPE_FLYING":"POKEMON_TYPE_FLYING__32k7b","POKEMON_TYPE_PSYCHIC":"POKEMON_TYPE_PSYCHIC__XGQtG","POKEMON_TYPE_BUG":"POKEMON_TYPE_BUG__2rNn4","POKEMON_TYPE_ROCK":"POKEMON_TYPE_ROCK__lcbuh","POKEMON_TYPE_GHOST":"POKEMON_TYPE_GHOST__3fzt3","POKEMON_TYPE_DRAGON":"POKEMON_TYPE_DRAGON__Gq1gX","POKEMON_TYPE_DARK":"POKEMON_TYPE_DARK__21HFM","POKEMON_TYPE_STEEL":"POKEMON_TYPE_STEEL__TU-5l","POKEMON_TYPE_FAIRY":"POKEMON_TYPE_FAIRY__2fWpc"};

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map