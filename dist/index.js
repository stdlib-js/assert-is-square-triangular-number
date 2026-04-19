"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=t(function(d,v){
var x=require('@stdlib/assert-is-integer/dist').isPrimitive,n=require('@stdlib/math-base-special-sqrt/dist'),q=require('@stdlib/math-base-special-floor/dist');function O(e){var r,i;return!x(e)||(r=q(n(e)+.5),r*r!==e)?!1:(i=8*e+1,r=q(n(i)+.5),r*r===i)}v.exports=O
});var u=t(function(y,o){
var g=require('@stdlib/assert-is-integer/dist').isObject,f=require('@stdlib/math-base-special-sqrt/dist'),c=require('@stdlib/math-base-special-floor/dist');function j(e){var r,i;return!g(e)||(i=e.valueOf(),r=c(f(i)+.5),r*r!==i)?!1:(i=8*i+1,r=c(f(i)+.5),r*r===i)}o.exports=j
});var b=t(function(R,m){
var p=s(),P=u();function N(e){return p(e)||P(e)}m.exports=N
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),a=b(),S=s(),T=u();l(a,"isPrimitive",S);l(a,"isObject",T);module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
