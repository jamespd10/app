import{r as o}from"./index.js";import{C as x}from"./index53.js";const l=()=>{const{negocios:r}=o.exports.useContext(x),m=o.exports.useMemo(()=>r.length!==0?r.map(e=>Number(e.compra_7)).reduce((e,t)=>e+t):0,[r]),u=o.exports.useMemo(()=>r.length!==0?r.map(e=>Number(e.compra_10)).reduce((e,t)=>e+t):0,[r]),s=o.exports.useMemo(()=>r.length!==0?r.map(e=>Number(e.compra_15)).reduce((e,t)=>e+t):0,[r]),n=o.exports.useMemo(()=>r.length!==0?r.map(e=>Number(e.compra_import)).reduce((e,t)=>e+t):0,[r]),p=o.exports.useMemo(()=>r.length!==0?r.map(e=>Number(e.compras)).reduce((e,t)=>e+t):0,[r]),c=o.exports.useMemo(()=>p-(m/.07+u/.1+s/.15+n/.07),[p,m,u,s,n]),a=o.exports.useMemo(()=>Number(m)+Number(n)+Number(u)+Number(s),[m,u,s,n]);return{compra_7:m,compra_10:u,compra_15:s,compra_exnt:c,compra_import:n,total:p,totalItbms:a}};export{l as u};
