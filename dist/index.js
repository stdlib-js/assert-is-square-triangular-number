"use strict";var t=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=t(function(d,v){
var x=require('@stdlib/assert-is-integer/dist').isPrimitive,n=require('@stdlib/math-base-special-sqrt/dist'),q=require('@stdlib/math-base-special-floor/dist');function O(i){var r,e;return!x(i)||(r=q(n(i)+.5),r*r!==i)?!1:(e=8*i+1,r=q(n(e)+.5),r*r===e)}v.exports=O
});var u=t(function(y,o){
var g=require('@stdlib/assert-is-integer/dist').isObject,f=require('@stdlib/math-base-special-sqrt/dist'),c=require('@stdlib/math-base-special-floor/dist');function j(i){var r,e;return!g(i)||(e=i.valueOf(),r=c(f(e)+.5),r*r!==e)?!1:(e=8*e+1,r=c(f(e)+.5),r*r===e)}o.exports=j
});var b=t(function(R,m){
var p=s(),P=u();function N(i){return p(i)||P(i)}m.exports=N
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),a=b(),S=s(),T=u();l(a,"isPrimitive",S);l(a,"isObject",T);module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
