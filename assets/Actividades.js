import{a as e,F as t,j as d,r as c}from"./index.js";import{u as m}from"./useUtilsForms.js";const g=({i:n})=>{const{data:i,actividadLastDot:o}=m(n),{negocios:a}=i;return e(t,{children:Boolean(Number(i.imprimir_actividades))&&a.length!==1?e(t,{children:a.map((r,s)=>d(c.exports.Fragment,{children:[s===a.length-1?" y ":"",r.actividad,s!==a.length-1?", ":""]},r.id))}):d(t,{children:[a[0].actividad,o]})})};export{g as A};
