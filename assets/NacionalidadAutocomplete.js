var u=Object.defineProperty,f=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var s=(i,t,o)=>t in i?u(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o,a=(i,t)=>{for(var o in t||(t={}))F.call(t,o)&&s(i,o,t[o]);if(d)for(var o of d(t))h.call(t,o)&&s(i,o,t[o]);return i},p=(i,t)=>f(i,x(t));import{r as S,a as c,F as b}from"./index.js";import{A as g}from"./AutocompleteServer.js";import{a as A}from"./FormLiquidacionProvider.js";import"./TextInput.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./Popper.js";import"./Chip.js";import"./useForm.js";import"./object.helper.js";import"./regex.js";import"./array.js";import"./upperFirst.js";import"./usePrint.js";import"./index23.js";const nt=()=>{var n;const{form:i}=S.exports.useContext(A),{formState:t,setFormState:o,errors:r}=i,{nacionalidad:e}=t;return c(b,{children:c(g,{ref:null,inputProps:{label:"Nacionalidad",error:!!(r!=null&&r.nacionalidad),helperText:(n=r==null?void 0:r.nacionalidad)==null?void 0:n.message},disableStyle:!0,enableFirst:!0,value:e===""?null:e,size:"small",fullWidth:!0,onChange:(C,l)=>{o(l?m=>p(a({},m),{nacionalidad:l}):m=>p(a({},m),{nacionalidad:""}))},urlFetch:"/nacionalidades"})})};export{nt as default};
