var h=Object.defineProperty,_=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var s=(e,r,o)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,n=(e,r)=>{for(var o in r||(r={}))g.call(r,o)&&s(e,o,r[o]);if(p)for(var o of p(r))v.call(r,o)&&s(e,o,r[o]);return e},l=(e,r)=>_(e,b(r));import{r as i,q as m,t as L,j as d,F as S,a as t}from"./index.js";import F from"./StepperForm.js";import{H as I}from"./HeaderTitle.js";import{L as a}from"./Loader.js";import{F as R}from"./array.js";import{R as z}from"./index39.js";import{B as A}from"./Box.js";import{P as D}from"./Paper.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./jwt-decode.esm.js";import"./Grid.js";import"./extendSxProp.js";import"./Typography.js";import"./ContentProvider.js";import"./useModal.js";import"./platform.js";import"./ButtonBase.js";import"./Modal2.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./DialogTitle.js";import"./Backdrop.js";import"./Modal.js";import"./IconButton.js";import"./Error.js";import"./Button.js";import"./useMediaQuery.js";import"./Divider.js";import"./upperFirst.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./tslib.js";import"./useHttpService.js";import"./constants.js";import"./useStepper.js";import"./useFetch.js";import"./agregarSchema.js";import"./regex.js";import"./Lazy.js";import"./useLocalStorage.js";const E=i.exports.lazy(()=>m(()=>import("./FormAgregar.js"),["assets/FormAgregar.js","assets/index.js","assets/index2.css","assets/Loader.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/array.js","assets/upperFirst.js","assets/string.helper.js","assets/regex.js","assets/TextEditor.js","assets/constants.js","assets/index7.js","assets/Stack.js","assets/Divider.js"])),P=i.exports.lazy(()=>m(()=>import("./HeaderDatos2.js"),["assets/HeaderDatos2.js","assets/index.js","assets/index2.css","assets/Loader.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/index39.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/tslib.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/constants.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/DialogTitle.js","assets/Backdrop.js","assets/Modal.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/Button.js","assets/platform.js","assets/useStepper.js","assets/array.js","assets/upperFirst.js","assets/useFetch.js","assets/agregarSchema.js","assets/regex.js","assets/Lazy.js","assets/useLocalStorage.js","assets/Divider.js"])),k=i.exports.lazy(()=>m(()=>import("./ModalRealizarItbms.js"),["assets/ModalRealizarItbms.js","assets/index.js","assets/index2.css","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/extendSxProp.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/Button.js","assets/BackgroundLoader.js","assets/index39.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/tslib.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/constants.js","assets/Loader.js","assets/Grid.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/appendOwnerState.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/platform.js","assets/useStepper.js","assets/array.js","assets/upperFirst.js","assets/useFetch.js","assets/agregarSchema.js","assets/regex.js","assets/Lazy.js","assets/useLocalStorage.js"])),Ar=()=>{const e=L(),r=i.exports.useContext(z),{form:o,activeStep:c,handleBack:x}=r,{handleNextStep:f,modalError:u}=r;return d(S,{children:[t(I,{message:"Formulario de ITBMS"}),d(R,l(n({},o),{children:[t(i.exports.Suspense,{fallback:t(a,{}),children:t(P,{})}),t(A,{display:"flex",justifyContent:"center",children:t(D,{variant:"outlined",sx:{p:1,mt:2,width:"100%",maxWidth:"1200px"},children:t(i.exports.Suspense,{fallback:t(a,{}),children:t(F,{activeStep:c,handleBack:x,sendLabel:"Guardar",sentLabel:"Guardado",finishedAction:()=>e("/negocios?itbms=1"),finishedActionText:"Realizar otro",sentLabelImage:"\xA1Datos guardados!",steps:["Datos generales"],handleNext:f,disabledLast:!0,state:u,errors:Object.keys(o.formState.errors).length,children:[t(i.exports.Suspense,{fallback:t(a,{}),children:t(E,{})},"Datos-generales")]})})})})]})),t(i.exports.Suspense,{fallback:t("div",{}),children:t(k,{})})]})};export{Ar as default};
