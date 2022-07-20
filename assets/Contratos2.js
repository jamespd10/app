var C=Object.defineProperty,$=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var f=(r,t,o)=>t in r?C(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,p=(r,t)=>{for(var o in t||(t={}))v.call(t,o)&&f(r,o,t[o]);if(d)for(var o of d(t))b.call(t,o)&&f(r,o,t[o]);return r},s=(r,t)=>$(r,g(t));import{r as u,j as l,a as m}from"./index.js";import{T as _}from"./TextInput.js";import{F as y,s as i}from"./index75.js";import{T as F}from"./TextDecimalInput.js";import{B as x}from"./Button.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./BootstrapModal.js";import"./ModalTransition.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index45.js";import"./HeaderTitle.js";import"./Typography.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./useForm.js";import"./object.helper.js";import"./array.js";import"./upperFirst.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";const N="_container_elxyc_1",T="_title_elxyc_6";var h={container:N,title:T};const Ct=()=>{const{form:r}=u.exports.useContext(y),{formState:t,onInputChange:o,setFormState:c}=r,{contratos:n}=t;return l("div",{className:`${i.flexColumn} ${i.flexGrow} ${i.border} ${i.itemRight} ${h.container}`,children:[m("span",{className:`${i.otrosTitle} ${h.title}`,children:"Contratos realizados"}),n.map((e,a)=>m(u.exports.Fragment,{children:l("div",{className:i.flexRow,children:[m(_,{name:`contratos.${a}.nombre`,label:"Nombre",size:"small",fullWidth:!0,value:e.nombre,onChange:o}),m(F,{name:`contratos.${a}.monto`,label:"Monto",size:"small",fullWidth:!0,value:e.monto,onChange:o})]})},`contratos-${a+1}`)),l("div",{className:`${i.flexRow} ${i.justifyCenter}`,children:[m(x,{variant:"outlined",color:"primary",onClick:()=>{c(s(p({},t),{contratos:[...n,{id:0,identificacion:"",nombre:"",monto:""}]}))},children:"Agregar fila"}),n.length>1&&m(x,{variant:"outlined",color:"error",onClick:()=>{const e=n;e.pop(),c(s(p({},t),{contratos:e}))},children:"Remover \xFAltima fila"})]})]})};export{Ct as default};