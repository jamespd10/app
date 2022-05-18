var u=Object.defineProperty;var s=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var n=(t,o,r)=>o in t?u(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,p=(t,o)=>{for(var r in o||(o={}))_.call(o,r)&&n(t,r,o[r]);if(s)for(var r of s(o))f.call(o,r)&&n(t,r,o[r]);return t};import{r as m,q as d,ac as x,j as c,F as l,a as i}from"./index.js";import{L as e}from"./Loader.js";import{H as g}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{u as F}from"./useFirstFetch.js";import{N as h}from"./NotFoundResults.js";import"./ContentProvider.js";import"./Modal2.js";import"./platform.js";import"./Grid.js";import"./extendSxProp.js";import"./Typography.js";import"./Divider.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useAsyncRetry.js";import"./tslib.js";import"./useHttpService.js";import"./constants.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./Backdrop.js";import"./Modal.js";import"./Paper.js";import"./Button.js";const D=m.exports.lazy(()=>d(()=>import("./FormDeclaraciones.js"),["assets/FormDeclaraciones.js","assets/index.js","assets/index.css","assets/array.js","assets/upperFirst.js","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/platform.js","assets/ButtonBase.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/IconButton.js","assets/Error.js","assets/Backdrop.js","assets/Modal.js","assets/Paper.js","assets/Button.js","assets/useMediaQuery.js","assets/Box.js","assets/useStepper.js","assets/useFetch.js","assets/useHttpService.js","assets/constants.js","assets/declaracionesSchema.js","assets/Lazy.js","assets/regex.js","assets/BackgroundLoader.js","assets/Loader.js","assets/Card.js"])),v=m.exports.lazy(()=>d(()=>import("./InformationHeader3.js"),["assets/InformationHeader3.js","assets/date.helper.js","assets/index.js","assets/index.css","assets/index13.js","assets/index14.js","assets/Paper.js","assets/Typography.js","assets/extendSxProp.js"])),ar=()=>{const{id:t,cliente:o}=x(),{loading:r,value:a}=F({url:`/admin/negocios/${t}/${o}`});return c(l,{children:[i(g,{message:"Declaraciones municipales"}),r&&i(e,{}),!r&&a&&a.status!==201&&i(h,{}),!r&&a&&a.status===201&&a.data&&c(l,{children:[i(m.exports.Suspense,{fallback:i(e,{}),children:i(v,p({},a.data))}),i(m.exports.Suspense,{fallback:i(e,{}),children:i(D,p({},a.data))})]})]})};export{ar as default};
