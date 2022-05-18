var F=Object.defineProperty;var N=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var O=(n,l,d)=>l in n?F(n,l,{enumerable:!0,configurable:!0,writable:!0,value:d}):n[l]=d,u=(n,l)=>{for(var d in l||(l={}))L.call(l,d)&&O(n,d,l[d]);if(N)for(var d of N(l))R.call(l,d)&&O(n,d,l[d]);return n};import{c as A,i as C,r as I}from"./jsx-runtime_commonjs-proxy.js";import{r as g,j as r,F as m,a as e,ax as j}from"./index.js";import{L as i}from"./ListItem.js";import{L as t}from"./ListItemText.js";import{a as p}from"./List.js";import{C as w}from"./Card.js";import{D as o}from"./Divider.js";import{f as s}from"./string.helper.js";import{C as y}from"./ChipState.js";import{S as h}from"./Stack.js";import{T as a}from"./Typography.js";import{P as $}from"./Paper.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./listItemButtonClasses.js";import"./isHostComponent.js";import"./ButtonBase.js";import"./listItemTextClasses.js";import"./regex.js";import"./Error.js";import"./Chip.js";import"./extendSxProp.js";var x={},E=C.exports;Object.defineProperty(x,"__esModule",{value:!0});var _=x.default=void 0,S=E(A),P=I,T=(0,S.default)((0,P.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");_=x.default=T;var b={},M=C.exports;Object.defineProperty(b,"__esModule",{value:!0});var v=b.default=void 0,k=M(A),B=I,W=(0,k.default)((0,B.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");v=b.default=W;const q=({actividades:n})=>{const[l,d]=g.exports.useState(!0);return r(m,{children:[r(i,{button:!0,onClick:()=>d(!l),children:[r(t,{children:[r("strong",{children:["Actividades",n.length===0&&e(m,{children:": "})]}),n.length===0&&e(m,{children:"No tiene"})]}),n.length>0?l?e(_,{}):e(v,{}):null]}),n.length>0&&e(j,{in:l,timeout:"auto",unmountOnExit:!0,children:r(p,{component:w,sx:{padding:1},variant:"outlined",children:[n.length===0&&e(i,{children:e(t,{children:"No asignadas"})}),n.map((c,f)=>r(g.exports.Fragment,{children:[f!==0&&e(o,{}),e(i,{children:e(t,{children:`${c.actividad}`})})]},c.actividad))]})})]})},V=({asignaciones:n})=>{const[l,d]=g.exports.useState(!0);return r(m,{children:[r(i,{button:!0,onClick:()=>d(!l),children:[r(t,{children:[r("strong",{children:["Asignaciones",n.length===0&&e(m,{children:": "})]}),n.length===0&&e(m,{children:"No tiene"})]}),n.length>0?l?e(_,{}):e(v,{}):null]}),n.length>0&&e(j,{in:l,timeout:"auto",unmountOnExit:!0,children:r(p,{component:w,sx:{padding:1},variant:"outlined",children:[n.length===0&&e(i,{children:e(t,{children:"No tiene"})}),n.map((c,f)=>r(g.exports.Fragment,{children:[f!==0&&e(o,{}),e(i,{children:r(t,{children:[`${c.asignacion}`,":"," ",r("strong",{style:{textTransform:"uppercase"},children:[`${c.nombre}`," ",`${c.apellido}`]})]})})]},c.asignacion))]})})]})},H=n=>e(i,{children:r(h,{direction:"column",spacing:1,divider:e(o,{flexItem:!0}),style:{border:"2px solid black",borderRadius:5,padding:10,width:"100%"},children:[e(a,{variant:"h5",children:"Honorarios"}),r(h,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e(a,{fontWeight:"bold",children:"Servicio de contabilidad:"}),e(a,{children:s(n.serv_conta)})]}),r(h,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e(a,{fontWeight:"bold",children:"Formulario de compra:"}),e(a,{children:s(n.formulario_compra)})]}),r(h,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e(a,{fontWeight:"bold",children:"Formulario de venta:"}),e(a,{children:s(n.formulario_venta)})]}),r(h,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e(a,{fontWeight:"bold",children:"Cargo A.L.:"}),e(a,{children:s(n.cargo_al)})]}),r(h,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e(a,{fontWeight:"bold",children:"Formulario 03:"}),e(a,{children:s(n.formulario_03)})]}),r(h,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e(a,{fontWeight:"bold",children:"Formulario Retenci\xF3n ITBMS.:"}),e(a,{children:s(n.form_reten_itbms)})]})]})}),fe=n=>e(m,{children:e($,{elevation:0,style:{padding:10,wordBreak:"break-all",minHeight:"100%"},variant:"outlined",children:r(p,{children:[e(i,{children:e(t,{children:e(a,{variant:"h4",style:{textTransform:"uppercase"},children:n.nombre_negocio||"No asignado"})})}),e(o,{}),e(i,{children:r(t,{children:[e("strong",{children:"SUPER VALIDADO: "}),e(y,{label:`${Boolean(Number(n.super_validado))?"VALIDADO":"NO VALIDADO"}`,color:Boolean(Number(n.super_validado))?"success":"error"})]})}),e(o,{}),e(i,{children:r(t,{children:[e("strong",{children:"Operando: "}),e(y,{label:`${Boolean(Number(n.cerrado))?"CERRADO":"OPERANDO"}`,color:Boolean(Number(n.cerrado))?"error":"success"})]})}),e(o,{}),e(i,{children:r(t,{children:[e("strong",{children:"RUC: "}),n.ruc]})}),e(o,{}),e(i,{children:r(t,{children:[e("strong",{children:"Tel\xE9fono: "}),n.telefono||"No asignado"]})}),e(o,{}),e(i,{children:r(t,{children:[e("strong",{children:"Avision de operaci\xF3n: "}),n.aviso_operacion||"No asignado"]})}),e(o,{}),e(i,{children:r(t,{children:[e("strong",{children:"N\xFAmero contribuyente: "}),n.no_contribuyente||"No asignado"]})}),e(o,{}),e(i,{children:r(t,{children:[e("strong",{children:"N\xFAmero patronal: "}),n.n_patronal||"No asignado"]})}),e(o,{}),e(i,{children:r(t,{children:[e("strong",{children:"Patronal SIPE: "}),n.patronal_sipe?n.patronal_sipe:!n.patronal_sipe&&n.n_patronal?n.n_patronal:"No asignado"]})}),e(o,{}),e(i,{children:r(t,{children:[e("strong",{children:"Capital: "}),s(n.capital)]})}),e(o,{}),e(i,{children:r(t,{children:[e("strong",{children:"N\xFAmero de empleados: "}),n.n_empleados||"No asignado"]})}),e(o,{}),e(i,{children:r(t,{children:[e("strong",{children:"Ruta: "}),n.ruta||"No asignada"]})}),e(o,{}),e(V,u({},n)),e(o,{}),e(i,{children:r(t,{children:[e("strong",{children:"Per\xEDodo: "}),n.tipo_pagos||"No asignado"]})}),e(o,{}),e(H,u({},n)),e(o,{}),e(i,{children:r(t,{children:[e("strong",{children:"Recorrido: "}),n.recorrido||"No asignado"]})}),e(o,{}),e(i,{children:r(t,{children:[e("strong",{children:"Nombre del cliente: "}),n.nom_cliente||"No asignado"]})}),e(o,{}),e(i,{children:r(t,{children:[e("strong",{children:"Direcci\xF3n: "}),n.direccion||"No asignada"]})}),e(o,{}),e(q,u({},n)),e(o,{}),e(i,{children:r(t,{children:[e("strong",{children:"Tipo del negocio: "}),n.tipo||"No tiene"]})})]})})});export{fe as default};