var N=Object.defineProperty;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var m=(i,n,t)=>n in i?N(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t,s=(i,n)=>{for(var t in n||(n={}))v.call(n,t)&&m(i,t,n[t]);if(d)for(var t of d(n))_.call(n,t)&&m(i,t,n[t]);return i};import{a as e,j as r,F as h}from"./index.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{C as g}from"./ChipState.js";import"./Modal2.js";import"./platform.js";import{L as c}from"./ListItem.js";import{G as p}from"./Grid.js";import{P as u}from"./Paper.js";import{a as f}from"./List.js";import{L as a}from"./ListItemText.js";import{T as I}from"./Typography.js";import{D as l}from"./Divider.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useModal.js";import"./Error.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./Chip.js";import"./ButtonBase.js";import"./Close2.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal.js";import"./Button.js";import"./IconButton.js";import"./extendSxProp.js";import"./listItemButtonClasses.js";import"./listItemTextClasses.js";const x="_content_17vr2_1",C="_item_17vr2_12",T="_itemBetween_17vr2_21",b="_title_17vr2_25";var o={content:x,item:C,itemBetween:T,title:b};const D=i=>e(c,{children:r("div",{className:o.content,children:[e("div",{className:o.item,children:e("span",{className:o.title,children:"Direcci\xF3n"})}),i.ubicacion&&i.ubicacion!==""&&e("div",{className:`${o.item}`,children:r("span",{children:[e("strong",{children:"UBICACI\xD3N"}),": ",e("span",{children:i.ubicacion})]})}),i.corregimiento&&i.corregimiento!==""&&e("div",{className:`${o.item}`,children:r("span",{children:[e("strong",{children:"CORREGIMIENTO"}),": ",e("span",{children:i.corregimiento})]})}),i.distrito&&i.distrito!==""&&e("div",{className:`${o.item}`,children:r("span",{children:[e("strong",{children:"DISTRITO"}),": ",e("span",{children:i.distrito})]})}),i.provincia&&i.provincia!==""&&e("div",{className:`${o.item}`,children:r("span",{children:[e("strong",{children:"PROVINCIA"}),": ",e("span",{children:i.provincia})]})})]})}),de=i=>e(p,{item:!0,xs:12,lg:6,children:e(u,{elevation:0,style:{padding:10,wordBreak:"break-all"},variant:"outlined",children:r(f,{children:[e(c,{children:e(a,{children:e(I,{variant:"h4",style:{textTransform:"uppercase"},children:i.nom_cliente||"No asignado"})})}),e(l,{}),e(c,{children:r(a,{children:[e("strong",{children:"Estado del cliente: "}),e(g,{label:`${i.estado||"No asignado"}`,color:i.estado&&i.estado==="ACTIVO"?"success":i.estado&&i.estado==="INACTIVO"?"warning":"error"})]})}),e(l,{}),e(c,{children:r(a,{children:[r(h,{children:[e("strong",{children:"RUC: "}),e("span",{children:i.ruc})]}),r(h,{children:[e("strong",{style:{marginLeft:10},children:"DV: "}),e("span",{children:i.dv})]})]})}),e(l,{}),e(c,{children:r(a,{children:[e("strong",{children:"Nit: "}),i.nit]})}),e(l,{}),e(c,{children:r(a,{children:[e("strong",{children:"C\xE9dula del representante: "}),i.identificacion_rep]})}),e(l,{}),e(c,{children:r(a,{children:[e("strong",{children:"Nombre del representante: "}),r("span",{style:{textTransform:"uppercase"},children:[i.nombre_rep," ",i.apellido_rep]})]})}),e(l,{}),e(c,{children:r(a,{children:[e("strong",{children:"Nacionalidad del representante: "}),i.nacionalidad_owner]})}),e(l,{}),e(c,{children:r(a,{children:[e("strong",{children:"Tipo del cliente: "}),i.tipo||"No asignado"]})}),e(l,{}),e(c,{children:r(a,{children:[e("strong",{children:"Declaraci\xF3n de renta: "}),e(g,{label:Boolean(Number(i.declaracion_renta))?"SI":"NO",color:Boolean(Number(i.declaracion_renta))?"success":"error"})]})}),e(l,{}),e(D,s({},i))]})})});export{de as default};
