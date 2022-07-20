var u=Object.defineProperty,x=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var n=(t,r,i)=>r in t?u(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,c=(t,r)=>{for(var i in r||(r={}))h.call(r,i)&&n(t,i,r[i]);if(m)for(var i of m(r))T.call(r,i)&&n(t,i,r[i]);return t},d=(t,r)=>x(t,f(r));import{r as e,b as l,a as o,F as b,j as a}from"./index.js";import{L as s}from"./Loader.js";import{f as g}from"./string.helper.js";import{u as E}from"./useCalTotal.js";import{T as v}from"./TextInput.js";import{u as y}from"./yup.module.js";import{S as p}from"./Stack.js";import{D as k}from"./Divider.js";import{T as R}from"./Typography.js";import"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./regex.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";const S="_total_1o3cl_1",A="_totalCredito_1o3cl_8";var _={total:S,totalCredito:A};const C=e.exports.lazy(()=>l(()=>import("./Ventas.js"),["assets/Ventas.js","assets/yup.module.js","assets/index.js","assets/index7.css","assets/DecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/useId.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/CircularProgress.js","assets/ventasCompras.module.js","assets/ventasCompras.module.css","assets/Stack.js","assets/Typography.js","assets/Divider.js"])),D=e.exports.lazy(()=>l(()=>import("./Compras.js"),["assets/Compras.js","assets/yup.module.js","assets/index.js","assets/index7.css","assets/DecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/useId.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/CircularProgress.js","assets/ventasCompras.module.js","assets/ventasCompras.module.css","assets/Stack.js","assets/Typography.js","assets/Divider.js"])),I=e.exports.lazy(()=>l(()=>import("./Retenciones.js"),["assets/Retenciones.js","assets/index.js","assets/index7.css","assets/yup.module.js","assets/DecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/useId.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/CircularProgress.js","assets/AutocompleteServer.js","assets/useFetch.js","assets/useHttpService.js","assets/Autocomplete.js","assets/Close.js","assets/IconButton.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/Popper.js","assets/Chip.js","assets/Typography.js","assets/Stack.js","assets/Button.js","assets/Divider.js"])),L=e.exports.lazy(()=>l(()=>import("./Acumulado.js"),["assets/Acumulado.js","assets/Acumulado.css","assets/yup.module.js","assets/index.js","assets/index7.css","assets/DecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/useId.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/CircularProgress.js","assets/LastItbmsProvider.js","assets/useFetcherEarly.js","assets/useCalTotal.js","assets/ItbmsProvider.js","assets/useModal.js","assets/Typography.js"])),z=e.exports.lazy(()=>l(()=>import("./Gastos.js"),["assets/Gastos.js","assets/index.js","assets/index7.css","assets/yup.module.js","assets/DecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/useId.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/CircularProgress.js","assets/Typography.js","assets/Stack.js","assets/Button.js","assets/ButtonBase.js","assets/useIsFocusVisible.js","assets/Divider.js"])),no=()=>{const{register:t}=y(),{total:r}=E();return o(b,{children:a(p,{spacing:1,direction:"column",children:[a(p,{direction:{xs:"column",md:"row"},spacing:1,children:[o(e.exports.Suspense,{fallback:o(s,{}),children:o(C,{})}),o(e.exports.Suspense,{fallback:o(s,{}),children:o(D,{})})]}),a(p,{direction:{xs:"column",md:"row"},spacing:1,children:[o(e.exports.Suspense,{fallback:o(s,{}),children:o(I,{})}),o(e.exports.Suspense,{fallback:o(s,{}),children:o(L,{})})]}),o("hr",{style:{border:"1px solid black"}}),a("span",{className:`${_.total} ${r<0?_.totalCredito:""}`,children:[r>=0?"Total de ITBMS  pagar":"Total de cr\xE9dito",":"," ",g(r)]}),a(p,{spacing:1,marginTop:1,divider:o(k,{}),border:"1px solid black",borderRadius:1.5,p:1,children:[o(R,{variant:"h5",children:"Notas"}),o(v,d(c({label:"Notas",multiline:!0,minRows:5},t("notas")),{size:"small"}))]}),o(p,{direction:{xs:"column",md:"row"},spacing:1,children:o(e.exports.Suspense,{fallback:o(s,{}),children:o(z,{})})})]})})};export{no as default};
