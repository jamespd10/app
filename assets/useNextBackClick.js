var C=Object.defineProperty;var u=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var i=(o,a,t)=>a in o?C(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t,s=(o,a)=>{for(var t in a||(a={}))g.call(a,t)&&i(o,t,a[t]);if(u)for(var t of u(a))k.call(a,t)&&i(o,t,a[t]);return o};import{r as m}from"./index.js";import{P}from"./index45.js";import{u as F,F as S}from"./index76.js";const q=()=>{const{handleSet:o}=F(),{form:a}=m.exports.useContext(S),{setFormState:t}=a,{pagination:p}=m.exports.useContext(P),{fetcher:x,page:n,setPage:f}=p,[,,r]=x;return{handleClick:m.exports.useCallback(l=>{if(r)if(r.resultados[l]){const e=o(r.resultados[l]);t(c=>s(s({},c),e))}else l>r.resultados.length-1&&n<r.paginas?f(n+1).then(e=>{if(e.data){const c=o(e.data.resultados[0]);t(d=>s(s({},d),c))}}):l<0&&n>1&&f(n-1).then(e=>{if(e.data){const c=[...e.data.resultados].length-1,d=o(e.data.resultados[c]);t(h=>s(s({},h),d))}})},[r,o,t,n,f])}};export{q as u};
