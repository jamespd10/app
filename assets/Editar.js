var x=Object.defineProperty,f=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var m=(e,r,t)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,a=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&m(e,t,r[t]);if(p)for(var t of p(r))b.call(r,t)&&m(e,t,r[t]);return e},s=(e,r)=>f(e,h(r));import{r as i,b as n,j as _,F as g,a as o}from"./index.js";import{F as E}from"./array.js";import{L as d}from"./Loader.js";import"./BootstrapTooltip.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import L from"./StepperForm.js";import"./SelectedCard.js";import{E as v}from"./Itbms.js";import{B as S}from"./Box.js";import{P as F}from"./Paper.js";import"./upperFirst.js";import"./Grid.js";import"./Typography.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useModal.js";import"./Modal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./Button.js";import"./ButtonBase.js";import"./IconButton.js";import"./Error.js";import"./HeaderTitle.js";import"./Divider.js";import"./NotFoundResults.js";import"./index40.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useHttpService.js";import"./string.helper.js";import"./regex.js";import"./useStepper.js";import"./useFetch.js";import"./agregarSchema.js";import"./Lazy.js";const I=i.exports.lazy(()=>n(()=>import("./FormAgregar.js"),["assets/FormAgregar.js","assets/index.js","assets/index7.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/array.js","assets/upperFirst.js","assets/string.helper.js","assets/regex.js","assets/TextEditor.js","assets/TextEditor.css","assets/index7.js","assets/FormHelperText.js","assets/Stack.js","assets/Divider.js"])),P=i.exports.lazy(()=>n(()=>import("./ModalEditarItbms.js"),["assets/ModalEditarItbms.js","assets/index.js","assets/index7.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/BackgroundLoader.js","assets/index40.js","assets/useModal.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/Loader.js","assets/Grid.js","assets/Itbms.js","assets/HeaderTitle.js","assets/Divider.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/NotFoundResults.js","assets/ContentProvider.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/string.helper.js","assets/regex.js","assets/useStepper.js","assets/array.js","assets/upperFirst.js","assets/useFetch.js","assets/agregarSchema.js","assets/Lazy.js"])),Er=()=>{const e=i.exports.useContext(v),{form:r,activeStep:t,handleBack:l,handleNextStep:c}=e;return _(g,{children:[o(E,s(a({},r),{children:o(S,{display:"flex",justifyContent:"center",children:o(F,{variant:"outlined",sx:{p:1,mt:2,width:"100%",maxWidth:"1200px"},children:o(i.exports.Suspense,{fallback:o(d,{}),children:o(L,{activeStep:t,handleBack:l,sendLabel:"Guardar",sentLabel:"Guardado",sentLabelImage:"\xA1Datos guardados!",steps:["Datos generales"],handleNext:c,disabledLast:!0,errors:Object.keys(r.formState.errors).length,children:[o(i.exports.Suspense,{fallback:o(d,{}),children:o(I,{})},"Datos-generales")]})})})})})),o(i.exports.Suspense,{fallback:o("div",{}),children:o(P,{})})]})};export{Er as default};
