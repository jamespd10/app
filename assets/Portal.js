import{r as n,E as d,B as l,z as u,Z as p}from"./index.js";function m(o){return typeof o=="function"?o():o}const x=n.exports.forwardRef(function(f,s){const{children:e,container:a,disablePortal:r=!1}=f,[t,i]=n.exports.useState(null),c=d(n.exports.isValidElement(e)?e.ref:null,s);return l(()=>{r||i(m(a)||document.body)},[a,r]),l(()=>{if(t&&!r)return u(s,t),()=>{u(s,null)}},[s,t,r]),r?n.exports.isValidElement(e)?n.exports.cloneElement(e,{ref:c}):e:t&&p.exports.createPortal(e,t)});var P=x;export{P};
