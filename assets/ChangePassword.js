var S=Object.defineProperty,b=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var x=(e,t,r)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))C.call(t,r)&&x(e,r,t[r]);if(u)for(var r of u(t))O.call(t,r)&&x(e,r,t[r]);return e},f=(e,t)=>b(e,w(t));import{r as a,b as L,j as v,F as B,a as o}from"./index.js";import{u as g}from"./useModal.js";import{L as P}from"./Loader.js";import"./BootstrapTooltip.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{B as E}from"./BackgroundLoader.js";import"./Modal.js";import"./SelectedCard.js";import{c as M,b as l,k as F,g as q,o as A}from"./array.js";import{u as k}from"./useFetch.js";import{M as D}from"./ModalMessage.js";import{L as H}from"./ListItem.js";import{B as R}from"./Button.js";import"./Grid.js";import"./Typography.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./Backdrop.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./ModalTransition.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./DialogContent.js";import"./LoadingButton.js";import"./upperFirst.js";import"./useHttpService.js";import"./List.js";const T=M().shape({password:l().trim().required("La contrase\xF1a es requerida").test("length-validate","La contrase\xF1a debe tener un m\xEDnimo de 6 caracteres",e=>!!(e&&e.length>=6)),password_new:l().trim().required("La nueva contrase\xF1a es requerida").test("length-validate","La contrase\xF1a debe tener un m\xEDnimo de 6 caracteres",e=>!!(e&&e.length>=6)).notOneOf([F("password"),null],"La nueva contrase\xF1a no debe ser igual a la contrase\xF1a anterior"),password_repetir:l().trim().required("Se requiere confirmaci\xF3n de la contrase\xF1a").oneOf([F("password_new"),null],"Las contrase\xF1as no coinciden")}),y=(e,t,r,n)=>{const{isLoading:s,send:m}=k(),[i,p]=a.exports.useState();return{isLoading:s,onSubmit:async d=>{r();const _=await m({url:"/change",method:"POST",data:f(h({},d),{id:e})});t(),p(_),n()},response:i}},I=a.exports.lazy(()=>L(()=>import("./Modal.js"),["assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index7.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js"])),j=a.exports.lazy(()=>L(()=>import("./FormChangePassword.js"),["assets/FormChangePassword.js","assets/PasswordInput.js","assets/index.js","assets/index7.css","assets/TextInput.js","assets/TextField.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/jsx-runtime_commonjs-proxy.js","assets/useIsFocusVisible.js","assets/InputAdornment.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js"])),Be=({id:e})=>{const t=g(),r=g(),{register:n,handleSubmit:s,formState:{errors:m},reset:i}=q({mode:"all",resolver:A(T)}),{isLoading:p,onSubmit:c,response:d}=y(e,i,t.setHide,r.setOpen);return v(B,{children:[o(D,{state:r.modalState,setHide:r.setHide,response:d,cancelButtonText:"Cerrar"}),o(E,{open:p}),o(a.exports.Suspense,{fallback:o("div",{}),children:o(I,{title:"Cambio de contrase\xF1a",setHide:()=>{t.setHide(),i()},actionButton:{text:"Cambiar",actionFunction:s(c)},cancelBotton:{text:"Cancelar"},state:t.modalState,children:o(a.exports.Suspense,{fallback:o(P,{}),children:o(j,{handleSubmit:s,onSubmit:c,register:n,errors:m})})})}),o(H,{children:o(R,{variant:"outlined",color:"primary",onClick:t.setOpen,fullWidth:!0,children:"CAMBIAR CONTRASE\xD1A"})})]})};export{Be as default};
