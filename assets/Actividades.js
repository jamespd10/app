import{a as r,F as t,j as s,r as o}from"./index.js";import{u as m}from"./Negocios.js";const g=({i:c})=>{const{data:i,actividadLastDot:n}=m(c),{negocios:a}=i;return i.actividad?r(t,{children:i.actividad}):r(t,{children:Boolean(Number(i.imprimir_actividades))&&a.length!==1?r(t,{children:a.map((d,e)=>s(o.exports.Fragment,{children:[e===a.length-1?" y ":"",d.actividad,e!==a.length-1?", ":""]},d.id))}):s(t,{children:[a[0].actividad,n]})})};export{g as A};
