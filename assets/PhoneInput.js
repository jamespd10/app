var d=Object.defineProperty,g=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(e,t,o)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,s=(e,t)=>{for(var o in t||(t={}))h.call(t,o)&&p(e,o,t[o]);if(a)for(var o of a(t))C.call(t,o)&&p(e,o,t[o]);return e},c=(e,t)=>g(e,x(t));var i=(e,t)=>{var o={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&a)for(var r of a(e))t.indexOf(r)<0&&C.call(e,r)&&(o[r]=e[r]);return o};import{u as F,C as I}from"./yup.module.js";import{T as N}from"./TextInput.js";import{N as P}from"./react-number-format.es.js";import{r as V,a as f}from"./index.js";const b=e=>Number(e.slice(0,1))===6?e.slice(0,4)+(e.slice(4,8).length?"-"+e.slice(4,8):""):e.slice(0,3)+(e.slice(3,7).length?"-"+e.slice(3,7):""),R=V.exports.forwardRef(function(t,o){const n=t,{onChange:r,defaultValue:m}=n,u=i(n,["onChange","defaultValue"]);return f(P,c(s({},u),{defaultValue:m,getInputRef:o,onValueChange:l=>{r({target:{name:t.name,value:l.formattedValue}})},format:b}))}),q=e=>{const{control:t}=F(),n=e,{name:o,defaultValue:r,minWidth:m}=n,u=i(n,["name","defaultValue","minWidth"]);return f(I,{control:t,name:o,defaultValue:r,render:({field:l})=>f(N,c(s(s({},u),l),{sx:{minWidth:m},InputProps:{inputComponent:R}}))})};export{q as P};
