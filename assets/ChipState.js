var l=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var n=(r,a)=>{var s={};for(var o in r)p.call(r,o)&&a.indexOf(o)<0&&(s[o]=r[o]);if(r!=null&&l)for(var o of l(r))a.indexOf(o)<0&&m.call(r,o)&&(s[o]=r[o]);return s};import{a as u,d as C}from"./Error.js";import{a as e,a5 as f}from"./index.js";import{C as g}from"./Chip.js";const b=v=>{var c=v,{label:r,icon:a,onClick:s,onDoubleClick:o}=c,d=n(c,["label","icon","onClick","onDoubleClick"]);const{color:i,loading:t}=d;return e(g,{icon:t?e(f,{size:20}):i==="error"||i==="warning"?e(u,{}):i==="success"?e(C,{}):a,label:`${r}`,color:i,onClick:t?void 0:s,onDoubleClick:t?void 0:o,style:{cursor:o&&!t?"pointer":void 0}})};export{b as C};
