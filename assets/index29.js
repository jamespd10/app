var u=Object.defineProperty;var s=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var n=(t,o,r)=>o in t?u(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,p=(t,o)=>{for(var r in o||(o={}))_.call(o,r)&&n(t,r,o[r]);if(s)for(var r of s(o))f.call(o,r)&&n(t,r,o[r]);return t};import{r as a,b as d,ab as x,j as c,F as l,a as i}from"./index.js";import{L as e}from"./Loader.js";import{H as g}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import{u as F}from"./useFirstFetch.js";import{N as h}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import"./Grid.js";import"./Typography.js";import"./Divider.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useHttpService.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";const D=a.exports.lazy(()=>d(()=>import("./FormDeclaraciones.js"),["assets/FormDeclaraciones.js","assets/index.js","assets/index7.css","assets/array.js","assets/upperFirst.js","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/Grid.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/ButtonBase.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/Error.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/Box.js","assets/useStepper.js","assets/useFetch.js","assets/useHttpService.js","assets/declaracionesSchema.js","assets/Lazy.js","assets/regex.js","assets/BackgroundLoader.js","assets/Loader.js","assets/Card.js"])),b=a.exports.lazy(()=>d(()=>import("./InformationHeader3.js"),["assets/InformationHeader3.js","assets/date.helper.js","assets/index.js","assets/index7.css","assets/index13.js","assets/Paper.js","assets/Typography.js"])),er=()=>{const{id:t,cliente:o}=x(),{loading:r,value:m}=F({url:`/admin/negocios/${t}/${o}`});return c(l,{children:[i(g,{message:"Declaraciones municipales"}),r&&i(e,{}),!r&&m&&m.status!==201&&i(h,{}),!r&&m&&m.status===201&&m.data&&c(l,{children:[i(a.exports.Suspense,{fallback:i(e,{}),children:i(b,p({},m.data))}),i(a.exports.Suspense,{fallback:i(e,{}),children:i(D,p({},m.data))})]})]})};export{er as default};
