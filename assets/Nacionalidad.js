var g=Object.defineProperty,m=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var f=(r,o,t)=>o in r?g(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,a=(r,o)=>{for(var t in o||(o={}))L.call(o,t)&&f(r,t,o[t]);if(u)for(var t of u(o))O.call(o,t)&&f(r,t,o[t]);return r},p=(r,o)=>m(r,C(o));import{A as T}from"./AutocompleteServer.js";import{u as w,C as F}from"./array.js";import{a as i}from"./index.js";import{L as N}from"./ListItem.js";import{L as S}from"./ListItemText.js";const H=({name:r,label:o,disableHeight:t})=>{const{control:h,formState:n}=w(),{errors:x}=n;return i(F,{control:h,name:r!=null?r:"nacionalidad",render:({field:c})=>{var d,l;return i(T,p(a({},c),{urlFetch:"/nacionalidades",disableHight:t,enableFirst:!0,onChange:(e,s)=>c.onChange(s),inputProps:{label:o!=null?o:"Nacionalidad",helperText:(d=x[r!=null?r:"nacionalidad"])==null?void 0:d.message,error:!!((l=n.errors[r!=null?r:"nacionalidad"])!=null&&l.message)},isOptionEqualToValue:(e,s)=>e===s,getOptionLabel:e=>e.toUpperCase(),renderOption:(e,s,{selected:v})=>i(N,p(a({},e),{style:{textOverflow:"ellipsis",whiteSpace:"nowrap",textTransform:"uppercase"},children:i(S,{primary:s})}))}))}})};export{H as N};
