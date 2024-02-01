// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as s,isObject as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";function n(e){var t,n;return!!s(e)&&((t=r(i(e)+.5))*t===e&&(t=r(i(n=8*e+1)+.5))*t===n)}function m(e){var s,n;return!!t(e)&&(n=e.valueOf(),(s=r(i(n)+.5))*s===n&&(s=r(i(n=8*n+1)+.5))*s===n)}function d(e){return n(e)||m(e)}e(d,"isPrimitive",n),e(d,"isObject",m);export{d as default,m as isObject,n as isPrimitive};
//# sourceMappingURL=index.mjs.map
