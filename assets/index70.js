import{r as e,b as d,a as i}from"./index.js";import{V as o}from"./ViewProvider.js";import{s as t}from"./view.module.js";const l=e.exports.lazy(()=>d(()=>import("./index72.js"),["assets/index72.js","assets/index.js","assets/index15.css","assets/view.module.js","assets/view.module.css"])),p=({divRef:a,list:s})=>i("div",{className:t.divHidden,children:i("div",{ref:a,children:s.map(r=>i(e.exports.Suspense,{fallback:i("div",{}),children:i(o,{liquidacion:r,children:i(l,{})})},r.id))})});export{p as default};
