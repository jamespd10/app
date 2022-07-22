var h=Object.defineProperty,_=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var s=(e,r,o)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,n=(e,r)=>{for(var o in r||(r={}))g.call(r,o)&&s(e,o,r[o]);if(p)for(var o of p(r))v.call(r,o)&&s(e,o,r[o]);return e},l=(e,r)=>_(e,b(r));import{r as i,b as a,a6 as L,j as d,F as S,a as t}from"./index.js";import F from"./StepperForm.js";import{H as I}from"./HeaderTitle.js";import{L as m}from"./Loader.js";import{F as R}from"./yup.module.js";import{R as z}from"./index19.js";import{B as A}from"./Box.js";import{P as D}from"./Paper.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useControlled.js";import"./useId.js";import"./Grid.js";import"./Typography.js";import"./SpeedDial.module.js";import"./SelectedCard.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./Modal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./IconButton.js";import"./Warning.js";import"./Error.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";import"./CircularProgress.js";import"./Divider.js";import"./LastItbmsProvider.js";import"./useFetcherEarly.js";import"./useStepper.js";import"./useFetch.js";import"./useHttpService.js";import"./useModal.js";import"./agregarSchema.js";import"./regex.js";import"./array.js";import"./Lazy.js";const E=i.exports.lazy(()=>a(()=>import("./FormAgregar.js"),["assets/FormAgregar.js","assets/FormAgregar.css","assets/index.js","assets/index9.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/string.helper.js","assets/regex.js","assets/useCalTotal.js","assets/yup.module.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/useId.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/Stack.js","assets/Divider.js"])),P=i.exports.lazy(()=>a(()=>import("./HeaderDatos.js"),["assets/HeaderDatos.js","assets/index.js","assets/index9.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/LastItbmsProvider.js","assets/useFetcherEarly.js","assets/header.module.js","assets/header.module.css","assets/useCalTotal.js","assets/yup.module.js","assets/Divider.js"])),k=i.exports.lazy(()=>a(()=>import("./ModalRealizarItbms.js"),["assets/ModalRealizarItbms.js","assets/index.js","assets/index9.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js","assets/BackgroundLoader.js","assets/index19.js","assets/LastItbmsProvider.js","assets/useFetcherEarly.js","assets/Loader.js","assets/Grid.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/useStepper.js","assets/yup.module.js","assets/useFetch.js","assets/useHttpService.js","assets/useModal.js","assets/agregarSchema.js","assets/regex.js","assets/array.js","assets/Lazy.js"])),yr=()=>{const e=L(),r=i.exports.useContext(z),{form:o,activeStep:c,handleBack:x}=r,{handleNextStep:f,modalError:u}=r;return d(S,{children:[t(I,{message:"Formulario de ITBMS"}),d(R,l(n({},o),{children:[t(i.exports.Suspense,{fallback:t(m,{}),children:t(P,{})}),t(A,{display:"flex",justifyContent:"center",children:t(D,{variant:"outlined",sx:{p:1,mt:2,width:"100%",maxWidth:"1200px"},children:t(i.exports.Suspense,{fallback:t(m,{}),children:t(F,{activeStep:c,handleBack:x,sendLabel:"Guardar",sentLabel:"Guardado",finishedAction:()=>e("/negocios?itbms=1"),finishedActionText:"Realizar otro",sentLabelImage:"\xA1Datos guardados!",steps:["Datos generales"],handleNext:f,disabledLast:!0,state:u,errors:Object.keys(o.formState.errors).length,children:[t(i.exports.Suspense,{fallback:t(m,{}),children:t(E,{})},"Datos-generales")]})})})})]})),t(i.exports.Suspense,{fallback:t("div",{}),children:t(k,{})})]})};export{yr as default};
