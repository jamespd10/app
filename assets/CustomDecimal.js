var C=Object.defineProperty,h=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var i=(a,e,t)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,f=(a,e)=>{for(var t in e||(e={}))s.call(e,t)&&i(a,t,e[t]);if(m)for(var t of m(e))c.call(e,t)&&i(a,t,e[t]);return a},g=(a,e)=>h(a,F(e));var v=(a,e)=>{var t={};for(var r in a)s.call(a,r)&&e.indexOf(r)<0&&(t[r]=a[r]);if(a!=null&&m)for(var r of m(a))e.indexOf(r)<0&&c.call(a,r)&&(t[r]=a[r]);return t};import{N as S}from"./react-number-format.es.js";import{r as b,a as w}from"./index.js";import{g as d}from"./string.helper.js";const j=b.exports.forwardRef(function(e,t){const l=e,{onChange:r,defaultValue:N,onBlur:o,onFocus:n}=l,x=v(l,["onChange","defaultValue","onBlur","onFocus"]);return w(S,g(f({},x),{defaultValue:N,getInputRef:t,onValueChange:u=>{r({target:{name:e.name,value:u.value}})},onBlur:u=>{o&&o({target:{name:e.name,value:d(u.target.value)}})},onFocus:u=>{n&&n({target:{name:e.name,value:d(u.target.value)}})},allowNegative:!1,isAllowed:({floatValue:u})=>!!(!u||u&&u<=999999999999e-2),decimalScale:2,thousandSeparator:!0,isNumericString:!0,fixedDecimalScale:!0,prefix:"B/ "}))});export{j as C};