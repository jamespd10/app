import{r as s,b as m,A as p,a as r,F as c,j as t}from"./index.js";import{P as h}from"./Paper.js";import{A as u}from"./Avatar.js";import{T as g}from"./Typography.js";import{L as f}from"./List.js";import{D as e}from"./Divider.js";import{L as i}from"./ListItem.js";import{L as a}from"./ListItemText.js";import{B as x}from"./Button.js";import"./createSvgIcon.js";import"./useControlled.js";import"./isHostComponent.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./useIsFocusVisible.js";import"./listItemTextClasses.js";const v=s.exports.lazy(()=>m(()=>import("./ChangePassword.js"),["assets/ChangePassword.js","assets/index.js","assets/index9.css","assets/useModal.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useControlled.js","assets/useId.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/BackgroundLoader.js","assets/Backdrop.js","assets/Fade.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/yup.module.js","assets/array.js","assets/useFetch.js","assets/useHttpService.js","assets/ModalMessage.js","assets/ListItem.js","assets/List.js"])),E=()=>{var n;const{authState:o,modalSignOut:d}=s.exports.useContext(p),[,l]=d;return r(c,{children:t(h,{elevation:0,style:{padding:10},variant:"outlined",children:[r(u,{style:{height:"100px",width:"100px",backgroundColor:"#003d54"},children:r(g,{variant:"h4",children:(n=o.nombre)==null?void 0:n.substring(0,1).toUpperCase()})}),t(f,{children:[r(e,{}),r(i,{children:t(a,{children:[r("strong",{children:"Nombre:"})," ",`${o.nombre} ${o.apellido}`||"No asignado"]})}),r(e,{}),r(i,{children:t(a,{children:[r("strong",{children:"Usuario:"})," ",o.username||"No asignado"]})}),r(e,{}),r(i,{children:t(a,{children:[r("strong",{children:"Correo: "})," ",o.correo||"No asignado"]})}),r(e,{}),r(s.exports.Suspense,{fallback:r("div",{}),children:r(v,{id:o.id})}),r(e,{}),r(i,{children:r(x,{variant:"outlined",color:"error",fullWidth:!0,onClick:()=>l(!0),children:"SALIR"})})]})]})})};export{E as default};
