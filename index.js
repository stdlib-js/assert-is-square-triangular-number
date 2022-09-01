// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,a=n.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,f,p,b;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(e,t)||a.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),p="get"in r,b="set"in r,f&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),b&&u&&u.call(e,t,r.set),e};function f(e,t,r){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(e){return"number"==typeof e}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return b&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,_=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol.toStringTag:"",d=y()?function(e){var t,r,n,o,i;if(null==e)return s.call(e);r=e[v],i=v,t=null!=(o=e)&&_.call(o,i);try{e[v]=void 0}catch(t){return s.call(e)}return n=s.call(e),t?e[v]=r:delete e[v],n}:function(e){return s.call(e)},m=Number,j=m.prototype.toString,g=y();function O(e){return"object"==typeof e&&(e instanceof m||(g?function(e){try{return j.call(e),!0}catch(e){return!1}}(e):"[object Number]"===d(e)))}function S(e){return p(e)||O(e)}f(S,"isPrimitive",p),f(S,"isObject",O);var h=Number.POSITIVE_INFINITY,P=m.NEGATIVE_INFINITY,T=Math.floor;function w(e){return e<h&&e>P&&T(t=e)===t;var t}function I(e){return p(e)&&w(e)}function N(e){return O(e)&&w(e.valueOf())}function E(e){return I(e)||N(e)}f(E,"isPrimitive",I),f(E,"isObject",N);var x=Math.sqrt;function V(e){var t,r;return!!I(e)&&(t=T(x(e)+.5))*t===e&&(t=T(x(r=8*e+1)+.5))*t===r}function A(e){var t,r;return!!N(e)&&(r=e.valueOf(),(t=T(x(r)+.5))*t===r&&(t=T(x(r=8*r+1)+.5))*t===r)}function F(e){return V(e)||A(e)}f(F,"isPrimitive",V),f(F,"isObject",A),e.default=F,e.isObject=A,e.isPrimitive=V,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).isSquareTriangularNumber={});
//# sourceMappingURL=index.js.map
