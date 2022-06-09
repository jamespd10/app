import{r as a,q as p,A as l,a as r,F as c,j as t}from"./index.js";import{a as h}from"./ContentProvider.js";import{P as u}from"./Paper.js";import{A as x}from"./Avatar.js";import{T as g}from"./Typography.js";import{a as f}from"./List.js";import{D as e}from"./Divider.js";import{L as i}from"./ListItem.js";import{L as n}from"./ListItemText.js";import{B as C}from"./Button.js";import"./useModal.js";import"./jwt-decode.esm.js";import"./createSvgIcon.js";import"./extendSxProp.js";import"./listItemButtonClasses.js";import"./useControlled.js";import"./isHostComponent.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./listItemTextClasses.js";const v=a.exports.lazy(()=>p(()=>import("./ChangePassword.js"),["assets/ChangePassword.js","assets/index.js","assets/index5.css","assets/useModal.js","assets/jwt-decode.esm.js","assets/Loader.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/BackgroundLoader.js","assets/Backdrop.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Modal.js","assets/Paper.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/platform.js","assets/array.js","assets/upperFirst.js","assets/useFetch.js","assets/useHttpService.js","assets/ModalMessage.js","assets/ListItem.js","assets/List.js","assets/listItemButtonClasses.js"])),$=()=>{var s;const{authState:o}=a.exports.useContext(l),{modalSignOut:m}=a.exports.useContext(h),{setOpen:d}=m;return r(c,{children:t(u,{elevation:0,style:{padding:10},variant:"outlined",children:[r(x,{style:{height:"100px",width:"100px",backgroundColor:"#003d54"},children:r(g,{variant:"h4",children:(s=o.nombre)==null?void 0:s.substring(0,1).toUpperCase()})}),t(f,{children:[r(e,{}),r(i,{children:t(n,{children:[r("strong",{children:"Nombre:"})," ",`${o.nombre} ${o.apellido}`||"No asignado"]})}),r(e,{}),r(i,{children:t(n,{children:[r("strong",{children:"Usuario:"})," ",o.username||"No asignado"]})}),r(e,{}),r(i,{children:t(n,{children:[r("strong",{children:"Correo: "})," ",o.correo||"No asignado"]})}),r(e,{}),r(a.exports.Suspense,{fallback:r("div",{}),children:r(v,{id:o.id})}),r(e,{}),r(i,{children:r(C,{variant:"outlined",color:"error",fullWidth:!0,onClick:()=>d(),children:"SALIR"})})]})]})})};export{$ as default};
