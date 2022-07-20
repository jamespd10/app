var C=Object.defineProperty,g=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var f=(t,o,r)=>o in t?C(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,p=(t,o)=>{for(var r in o||(o={}))v.call(o,r)&&f(t,r,o[r]);if(d)for(var r of d(o))F.call(o,r)&&f(t,r,o[r]);return t},s=(t,o)=>g(t,b(o));import{r as u,j as n,a as i}from"./index.js";import{T as h}from"./TextInput.js";import{F as _,s as e}from"./index75.js";import{T as N}from"./TextDecimalInput.js";import{B as x}from"./Button.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./BootstrapModal.js";import"./ModalTransition.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index45.js";import"./HeaderTitle.js";import"./Typography.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./useForm.js";import"./object.helper.js";import"./array.js";import"./upperFirst.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";const T="_container_6r0lp_1",j="_title_6r0lp_6";var $={container:T,title:j};const Co=()=>{const{form:t}=u.exports.useContext(_),{formState:o,onInputChange:r,setFormState:c}=t,{empleados:a}=o;return n("div",{className:`${e.flexColumn} ${e.flexGrow} ${e.border} ${e.itemRight} ${$.container}`,children:[i("span",{className:`${e.otrosTitle} ${$.title}`,children:"Lista de empleados - Planilla"}),a.map((m,l)=>i(u.exports.Fragment,{children:n("div",{className:e.flexRow,children:[i(h,{name:`empleados.${l}.nombre`,label:"Nombre",size:"small",fullWidth:!0,value:m.nombre,onChange:r}),i(h,{name:`empleados.${l}.descripcion`,label:"Descripci\xF3n",size:"small",fullWidth:!0,value:m.descripcion,onChange:r}),i(N,{name:`empleados.${l}.salario`,label:"Salario",size:"small",fullWidth:!0,value:m.salario,onChange:r})]})},`empleados-${l+1}`)),n("div",{className:`${e.flexRow} ${e.justifyCenter}`,children:[i(x,{variant:"outlined",color:"primary",onClick:()=>{c(s(p({},o),{empleados:[...a,{id:0,descripcion:"",identificacion:"",nombre:"",salario:""}]}))},children:"Agregar fila"}),a.length>1&&i(x,{variant:"outlined",color:"error",onClick:()=>{const m=a;m.pop(),c(s(p({},o),{empleados:m}))},children:"Remover \xFAltima fila"})]})]})};export{Co as default};