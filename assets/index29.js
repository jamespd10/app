var u=Object.defineProperty;var s=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var n=(t,o,r)=>o in t?u(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(t,o)=>{for(var r in o||(o={}))_.call(o,r)&&n(t,r,o[r]);if(s)for(var r of s(o))f.call(o,r)&&n(t,r,o[r]);return t};import{r as p,b as d,ap as x,j as c,F as l,a as i}from"./index.js";import{L as e}from"./Loader.js";import{H as g}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import{u as F}from"./useFirstFetch.js";import{N as h}from"./NotFoundResults.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./Divider.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useControlled.js";import"./useId.js";import"./useAsyncRetry.js";import"./useHttpService.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./Warning.js";import"./Error.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";const D=p.exports.lazy(()=>d(()=>import("./FormDeclaraciones.js"),["assets/FormDeclaraciones.js","assets/index.js","assets/index7.css","assets/yup.module.js","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useControlled.js","assets/useId.js","assets/Grid.js","assets/Typography.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js","assets/Box.js","assets/useStepper.js","assets/useFetch.js","assets/useHttpService.js","assets/useModal.js","assets/declaracionesSchema.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js","assets/regex.js","assets/BackgroundLoader.js","assets/Loader.js","assets/Card.js"])),v=p.exports.lazy(()=>d(()=>import("./InformationHeader.js"),["assets/InformationHeader.js","assets/date.helper.js","assets/index.js","assets/index7.css","assets/Paper.js","assets/Typography.js"])),dr=()=>{const{id:t,cliente:o}=x(),{loading:r,value:m}=F({url:`/admin/negocios/${t}/${o}`});return c(l,{children:[i(g,{message:"Declaraciones municipales"}),r&&i(e,{}),!r&&m&&m.status!==201&&i(h,{}),!r&&m&&m.status===201&&m.data&&c(l,{children:[i(p.exports.Suspense,{fallback:i(e,{}),children:i(v,a({},m.data))}),i(p.exports.Suspense,{fallback:i(e,{}),children:i(D,a({},m.data))})]})]})};export{dr as default};
