var x=Object.defineProperty,f=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var e=(i,r,t)=>r in i?x(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,a=(i,r)=>{for(var t in r||(r={}))u.call(r,t)&&e(i,t,r[t]);if(m)for(var t of m(r))b.call(r,t)&&e(i,t,r[t]);return i},s=(i,r)=>f(i,h(r));import{r as p,b as n,j as _,F as g,a as o}from"./index.js";import{F as E}from"./yup.module.js";import{L as d}from"./Loader.js";import"./BootstrapTooltip.js";import"./SpeedDial.module.js";import L from"./StepperForm.js";import"./SelectedCard.js";import{E as v}from"./Itbms2.js";import{B as S}from"./Box.js";import{P as F}from"./Paper.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useControlled.js";import"./useId.js";import"./Modal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./IconButton.js";import"./ButtonBase.js";import"./Warning.js";import"./Error.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";import"./HeaderTitle.js";import"./Divider.js";import"./NotFoundResults.js";import"./ItbmsProvider.js";import"./useModal.js";import"./useFetcherEarly.js";import"./string.helper.js";import"./regex.js";import"./useStepper.js";import"./useFetch.js";import"./useHttpService.js";import"./agregarSchema.js";import"./array.js";import"./upperFirst.js";import"./Lazy.js";const I=p.exports.lazy(()=>n(()=>import("./FormAgregar.js"),["assets/FormAgregar.js","assets/FormAgregar.css","assets/index.js","assets/index7.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/string.helper.js","assets/regex.js","assets/useCalTotal.js","assets/yup.module.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/useId.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/Stack.js","assets/Divider.js"])),P=p.exports.lazy(()=>n(()=>import("./ModalEditarItbms.js"),["assets/ModalEditarItbms.js","assets/index.js","assets/index7.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js","assets/BackgroundLoader.js","assets/ItbmsProvider.js","assets/useModal.js","assets/useFetcherEarly.js","assets/Itbms2.js","assets/Loader.js","assets/Grid.js","assets/HeaderTitle.js","assets/Divider.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/NotFoundResults.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/string.helper.js","assets/regex.js","assets/useStepper.js","assets/yup.module.js","assets/useFetch.js","assets/useHttpService.js","assets/agregarSchema.js","assets/array.js","assets/upperFirst.js","assets/Lazy.js"])),Dr=()=>{const i=p.exports.useContext(v),{form:r,activeStep:t,handleBack:l,handleNextStep:c}=i;return _(g,{children:[o(E,s(a({},r),{children:o(S,{display:"flex",justifyContent:"center",children:o(F,{variant:"outlined",sx:{p:1,mt:2,width:"100%",maxWidth:"1200px"},children:o(p.exports.Suspense,{fallback:o(d,{}),children:o(L,{activeStep:t,handleBack:l,sendLabel:"Guardar",sentLabel:"Guardado",sentLabelImage:"\xA1Datos guardados!",steps:["Datos generales"],handleNext:c,disabledLast:!0,errors:Object.keys(r.formState.errors).length,children:[o(p.exports.Suspense,{fallback:o(d,{}),children:o(I,{})},"Datos-generales")]})})})})})),o(p.exports.Suspense,{fallback:o("div",{}),children:o(P,{})})]})};export{Dr as default};
