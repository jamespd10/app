import{a as r,j as o}from"./index.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{C as n}from"./ChipState.js";import"./Modal2.js";import"./platform.js";import{G as d}from"./Grid.js";import{P as a}from"./Paper.js";import{A as c}from"./Avatar.js";import{T as l}from"./Typography.js";import{a as s}from"./List.js";import{D as t}from"./Divider.js";import{L as e}from"./ListItem.js";import{L as m}from"./ListItemText.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useModal.js";import"./Error.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./Chip.js";import"./ButtonBase.js";import"./Close2.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal.js";import"./Button.js";import"./IconButton.js";import"./extendSxProp.js";import"./listItemButtonClasses.js";import"./listItemTextClasses.js";const W=i=>r(d,{item:!0,xs:12,md:6,children:o(a,{variant:"outlined",style:{padding:10},children:[r(c,{style:{height:"100px",width:"100px",backgroundColor:"#003d54"},children:r(l,{variant:"h4",children:i.nombre.substring(0,1).toUpperCase()})}),o(s,{children:[r(t,{}),r(e,{children:o(m,{children:[r("strong",{children:"Estado: "}),r(n,{label:`${i.estado||"No asignado"}`,color:i.estado&&i.estado==="ACTIVO"?"success":"error"})]})}),r(t,{}),r(e,{children:o(m,{children:[r("strong",{children:"Nombre: "})," ",i.nombre," ",i.apellido]})}),r(t,{}),r(e,{children:o(m,{children:[r("strong",{children:"Correo: "})," ",i.correo||"No tiene"]})}),r(t,{}),r(e,{children:o(m,{children:[r("strong",{children:"C\xE9dula: "})," ",i.identificacion||"No ingresada"]})}),r(t,{}),r(e,{children:o(m,{children:[r("strong",{children:"Tipo: "})," ",i.tipo]})}),r(t,{}),r(e,{children:o(m,{children:[r("strong",{children:"Nacionalidad: "})," ",i.nacionalidad]})}),r(t,{}),r(e,{children:o(m,{children:[r("strong",{children:"Direcci\xF3n: "}),i.direccion||"No tiene"]})})]})]})});export{W as default};
