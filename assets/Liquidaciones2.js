var $=Object.defineProperty,q=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var u=(t,o,i)=>o in t?$(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,l=(t,o)=>{for(var i in o||(o={}))g.call(o,i)&&u(t,i,o[i]);if(d)for(var i of d(o))v.call(o,i)&&u(t,i,o[i]);return t},p=(t,o)=>q(t,C(o));import{r as f,j as s,a as e}from"./index.js";import{T as b}from"./TextInput.js";import{F as _,s as r}from"./index75.js";import{T as F}from"./TextDecimalInput.js";import{B as h}from"./Button.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./BootstrapModal.js";import"./ModalTransition.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index45.js";import"./HeaderTitle.js";import"./Typography.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./useForm.js";import"./object.helper.js";import"./array.js";import"./upperFirst.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";const N="_container_15r6l_1",T="_title_15r6l_6";var x={container:N,title:T};const qo=()=>{const{form:t}=f.exports.useContext(_),{formState:o,onInputChange:i,setFormState:c}=t,{liquidaciones:n}=o;return s("div",{className:`${r.flexColumn} ${r.flexGrow} ${r.border} ${r.itemRight} ${x.container}`,children:[e("span",{className:`${r.otrosTitle} ${x.title}`,children:"Liquidaciones realizadas"}),n.map((m,a)=>e(f.exports.Fragment,{children:s("div",{className:r.flexRow,children:[e(b,{name:`liquidaciones.${a}.nombre`,label:"Nombre",size:"small",fullWidth:!0,value:m.nombre,onChange:i}),e(F,{name:`liquidaciones.${a}.monto`,label:"Monto",size:"small",fullWidth:!0,value:m.monto,onChange:i})]})},`liquidaciones-${a+1}`)),s("div",{className:`${r.flexRow} ${r.justifyCenter}`,children:[e(h,{variant:"outlined",color:"primary",onClick:()=>{c(p(l({},o),{liquidaciones:[...n,{id:0,identificacion:"",nombre:"",monto:""}]}))},children:"Agregar fila"}),n.length>1&&e(h,{variant:"outlined",color:"error",onClick:()=>{const m=n;m.pop(),c(p(l({},o),{liquidaciones:m}))},children:"Remover \xFAltima fila"})]})]})};export{qo as default};
