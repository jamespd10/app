var d=Object.defineProperty,f=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var s=(o,i,t)=>i in o?d(o,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[i]=t,p=(o,i)=>{for(var t in i||(i={}))x.call(i,t)&&s(o,t,i[t]);if(u)for(var t of u(i))F.call(i,t)&&s(o,t,i[t]);return o},e=(o,i)=>f(o,q(i));import{r as _,a as c,F as h}from"./index.js";import{A as v}from"./AutocompleteServer.js";import{a as S}from"./FormLiquidacionProvider.js";import"./TextInput.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./Popper.js";import"./Chip.js";import"./useForm.js";import"./object.helper.js";import"./regex.js";import"./array.js";import"./upperFirst.js";import"./usePrint.js";import"./index23.js";const li=()=>{var l;const{form:o}=_.exports.useContext(S),{formState:i,setFormState:t,errors:r}=o,{tipo_liquidacion:a}=i;return c(h,{children:c(v,{ref:null,inputProps:{label:"Motivo de liquidaci\xF3n",error:!!(r!=null&&r.tipo_liquidacion),helperText:(l=r==null?void 0:r.tipo_liquidacion)==null?void 0:l.message},disableStyle:!0,enableFirst:!0,value:a===""?null:a,size:"small",fullWidth:!0,onChange:(b,n)=>{t(n?m=>e(p({},m),{tipo_liquidacion:n}):m=>e(p({},m),{tipo_liquidacion:""}))},urlFetch:"/admin/liquidaciones/motivos"})})};export{li as default};