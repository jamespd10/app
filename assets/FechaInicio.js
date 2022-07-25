var D=Object.defineProperty,I=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var M=(i,t,o)=>t in i?D(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o,p=(i,t)=>{for(var o in t||(t={}))q.call(t,o)&&M(i,o,t[o]);if(F)for(var o of F(t))R.call(t,o)&&M(i,o,t[o]);return i},s=(i,t)=>I(i,T(t));import{r as _,a as c,F as b,aR as j,al as l,a$ as k}from"./index.js";import{S as v,a as w}from"./FormLiquidacionProvider.js";import{T as z}from"./TextInput.js";import{D as L}from"./DatePicker.js";import"./useForm.js";import"./object.helper.js";import"./regex.js";import"./array.js";import"./usePrint.js";import"./index25.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./Typography.js";import"./PureDateInput.js";import"./CalendarPicker.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./IconButton.js";import"./Grid.js";import"./InputAdornment.js";import"./ModalTransition.js";import"./DialogContent.js";import"./dialogTitleClasses.js";import"./DialogActions.js";import"./Button.js";import"./index13.js";import"./Popper.js";const Rt=()=>{const{fetcherSalarios:i}=_.exports.useContext(v),[,,,,,t]=i,{form:o}=_.exports.useContext(w),{formState:g,setFormState:f,errors:r}=o,{fecha_inicio:d,fecha_liquidacion:y,salarios:u}=g;return c(b,{children:c(L,{label:"Fecha de inicio",value:d!==""?new Date(d):null,inputFormat:"dd/MM/yyyy",onChange:m=>{t();const a=[];if(m&&j(m)){const e=l(m,"yyyy-MM-dd");if(y!==""){const n=k(e,y);for(const h of n){const x=u.findIndex(S=>l(S.mes,"yyyy-MM-01")===l(h,"yyyy-MM-01")),C=x!==-1?u[x].salario:"";a.push({mes:h,salario:C})}}f(n=>s(p({},n),{fecha_inicio:e,salarios:a}))}else f(e=>s(p({},e),{fecha_inicio:""}))},renderInput:m=>{var a;return c(z,s(p({},m),{size:"small",fullWidth:!0,error:!!(r!=null&&r.fecha_inicio),helperText:(a=r==null?void 0:r.fecha_inicio)==null?void 0:a.message}))}})})};export{Rt as default};
