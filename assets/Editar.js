var x=Object.defineProperty,f=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var m=(i,r,t)=>r in i?x(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,a=(i,r)=>{for(var t in r||(r={}))u.call(r,t)&&m(i,t,r[t]);if(p)for(var t of p(r))_.call(r,t)&&m(i,t,r[t]);return i},s=(i,r)=>f(i,h(r));import{r as e,q as n,j as b,F as g,a as o}from"./index.js";import{F as E}from"./array.js";import{L as d}from"./Loader.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import L from"./StepperForm.js";import"./platform.js";import"./Modal2.js";import{E as v}from"./Itbms.js";import{B as S}from"./Box.js";import{P as F}from"./Paper.js";import"./upperFirst.js";import"./Grid.js";import"./extendSxProp.js";import"./Typography.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./useModal.js";import"./useMediaQuery.js";import"./createSvgIcon.js";import"./Button.js";import"./ButtonBase.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./DialogTitle.js";import"./Backdrop.js";import"./Modal.js";import"./IconButton.js";import"./Error.js";import"./HeaderTitle.js";import"./Divider.js";import"./NotFoundResults.js";import"./index40.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./tslib.js";import"./useHttpService.js";import"./constants.js";import"./string.helper.js";import"./regex.js";import"./useStepper.js";import"./useFetch.js";import"./agregarSchema.js";import"./Lazy.js";const I=e.exports.lazy(()=>n(()=>import("./FormAgregar.js"),["assets/FormAgregar.js","assets/index.js","assets/index2.css","assets/Loader.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/array.js","assets/upperFirst.js","assets/string.helper.js","assets/regex.js","assets/TextEditor.js","assets/constants.js","assets/index7.js","assets/Stack.js","assets/Divider.js"])),P=e.exports.lazy(()=>n(()=>import("./ModalEditarItbms.js"),["assets/ModalEditarItbms.js","assets/index.js","assets/index2.css","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/extendSxProp.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/Button.js","assets/BackgroundLoader.js","assets/index40.js","assets/useModal.js","assets/jwt-decode.esm.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/tslib.js","assets/useHttpService.js","assets/constants.js","assets/Loader.js","assets/Grid.js","assets/Itbms.js","assets/HeaderTitle.js","assets/Divider.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/appendOwnerState.js","assets/Grow.js","assets/NotFoundResults.js","assets/ContentProvider.js","assets/platform.js","assets/string.helper.js","assets/regex.js","assets/useStepper.js","assets/array.js","assets/upperFirst.js","assets/useFetch.js","assets/agregarSchema.js","assets/Lazy.js"])),Fr=()=>{const i=e.exports.useContext(v),{form:r,activeStep:t,handleBack:l,handleNextStep:c}=i;return b(g,{children:[o(E,s(a({},r),{children:o(S,{display:"flex",justifyContent:"center",children:o(F,{variant:"outlined",sx:{p:1,mt:2,width:"100%",maxWidth:"1200px"},children:o(e.exports.Suspense,{fallback:o(d,{}),children:o(L,{activeStep:t,handleBack:l,sendLabel:"Guardar",sentLabel:"Guardado",sentLabelImage:"\xA1Datos guardados!",steps:["Datos generales"],handleNext:c,disabledLast:!0,errors:Object.keys(r.formState.errors).length,children:[o(e.exports.Suspense,{fallback:o(d,{}),children:o(I,{})},"Datos-generales")]})})})})})),o(e.exports.Suspense,{fallback:o("div",{}),children:o(P,{})})]})};export{Fr as default};
