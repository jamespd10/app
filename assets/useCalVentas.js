import{r as n}from"./index.js";import{u as b,e as N}from"./array.js";const l=()=>{const{control:a}=b(),e=N({control:a,name:"negocios"}),o=n.exports.useMemo(()=>e&&e.length!==0?e.map(t=>Number(t.venta_7)).reduce((t,r)=>t+r):0,[e]),u=n.exports.useMemo(()=>e&&e.length!==0?e.map(t=>Number(t.venta_10)).reduce((t,r)=>t+r):0,[e]),s=n.exports.useMemo(()=>e&&e.length!==0?e.map(t=>Number(t.venta_15)).reduce((t,r)=>t+r):0,[e]),m=n.exports.useMemo(()=>e&&e.length!==0?e.map(t=>Number(t.venta_exnt)).reduce((t,r)=>t+r):0,[e]),c=n.exports.useMemo(()=>Number(o)+Number(u)+Number(s)+Number(m),[o,u,s,m]),p=n.exports.useMemo(()=>Number(o)*.07+Number(u)*.1+Number(s)*.15,[o,u,s]);return{venta_7:o,venta_10:u,venta_15:s,venta_exnt:m,total:c,totalItbms:p}};export{l as u};