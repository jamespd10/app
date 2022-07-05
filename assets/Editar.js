var x=Object.defineProperty,f=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var m=(i,r,t)=>r in i?x(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,a=(i,r)=>{for(var t in r||(r={}))u.call(r,t)&&m(i,t,r[t]);if(p)for(var t of p(r))b.call(r,t)&&m(i,t,r[t]);return i},s=(i,r)=>f(i,h(r));import{r as e,b as n,j as _,F as g,a as o}from"./index.js";import{F as E}from"./yup.module.js";import{L as d}from"./Loader.js";import"./BootstrapTooltip.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import L from"./StepperForm.js";import"./SelectedCard.js";import{E as v}from"./Itbms2.js";import{B as S}from"./Box.js";import{P as F}from"./Paper.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./useModal.js";import"./Modal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./IconButton.js";import"./ButtonBase.js";import"./CheckCircle.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./HeaderTitle.js";import"./Divider.js";import"./NotFoundResults.js";import"./ItbmsProvider.js";import"./useFetcherEarly.js";import"./string.helper.js";import"./regex.js";import"./useStepper.js";import"./useFetch.js";import"./useHttpService.js";import"./agregarSchema.js";import"./array.js";import"./upperFirst.js";import"./Lazy.js";const I=e.exports.lazy(()=>n(()=>import("./FormAgregar.js"),["assets/FormAgregar.js","assets/FormAgregar.css","assets/index.js","assets/index6.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/string.helper.js","assets/regex.js","assets/useCalTotal.js","assets/yup.module.js","assets/TextInput.js","assets/TextField.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/Stack.js","assets/Divider.js"])),P=e.exports.lazy(()=>n(()=>import("./ModalEditarItbms.js"),["assets/ModalEditarItbms.js","assets/index.js","assets/index6.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js","assets/BackgroundLoader.js","assets/ItbmsProvider.js","assets/useModal.js","assets/useFetcherEarly.js","assets/Itbms2.js","assets/Loader.js","assets/Grid.js","assets/HeaderTitle.js","assets/Divider.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/appendOwnerState.js","assets/Grow.js","assets/NotFoundResults.js","assets/ContentProvider.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/string.helper.js","assets/regex.js","assets/useStepper.js","assets/yup.module.js","assets/useFetch.js","assets/useHttpService.js","assets/agregarSchema.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js"])),Ir=()=>{const i=e.exports.useContext(v),{form:r,activeStep:t,handleBack:l,handleNextStep:c}=i;return _(g,{children:[o(E,s(a({},r),{children:o(S,{display:"flex",justifyContent:"center",children:o(F,{variant:"outlined",sx:{p:1,mt:2,width:"100%",maxWidth:"1200px"},children:o(e.exports.Suspense,{fallback:o(d,{}),children:o(L,{activeStep:t,handleBack:l,sendLabel:"Guardar",sentLabel:"Guardado",sentLabelImage:"\xA1Datos guardados!",steps:["Datos generales"],handleNext:c,disabledLast:!0,errors:Object.keys(r.formState.errors).length,children:[o(e.exports.Suspense,{fallback:o(d,{}),children:o(I,{})},"Datos-generales")]})})})})})),o(e.exports.Suspense,{fallback:o("div",{}),children:o(P,{})})]})};export{Ir as default};
