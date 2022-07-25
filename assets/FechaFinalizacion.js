var _=Object.defineProperty,g=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var F=(o,i,t)=>i in o?_(o,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[i]=t,e=(o,i)=>{for(var t in i||(i={}))C.call(i,t)&&F(o,t,i[t]);if(x)for(var t of x(i))I.call(i,t)&&F(o,t,i[t]);return o},s=(o,i)=>g(o,D(i));import{r as T,a as c,F as z,aR as R,al as l,a$ as S}from"./index.js";import{a as b}from"./FormLiquidacionProvider.js";import{T as j}from"./TextInput.js";import{D as k}from"./DatePicker.js";import"./useForm.js";import"./object.helper.js";import"./regex.js";import"./array.js";import"./usePrint.js";import"./index25.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./Typography.js";import"./PureDateInput.js";import"./CalendarPicker.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./IconButton.js";import"./Grid.js";import"./InputAdornment.js";import"./ModalTransition.js";import"./DialogContent.js";import"./dialogTitleClasses.js";import"./DialogActions.js";import"./Button.js";import"./index13.js";import"./Popper.js";const Ii=()=>{const{form:o}=T.exports.useContext(b),{formState:i,setFormState:t,errors:r}=o,{fecha_liquidacion:d,fecha_inicio:u,salarios:f}=i;return c(z,{children:c(k,{label:"Fecha de liquidaci\xF3n",value:d!==""?new Date(d):null,inputFormat:"dd/MM/yyyy",onChange:m=>{const a=[];if(m&&R(m)){const p=l(m,"yyyy-MM-dd");if(u!==""){const n=S(u,p);for(const y of n){const h=f.findIndex(q=>l(q.mes,"yyyy-MM-01")===l(y,"yyyy-MM-01")),M=h!==-1?f[h].salario:"";a.push({mes:y,salario:M})}}t(n=>s(e({},n),{fecha_liquidacion:p,salarios:a}))}else t(p=>s(e({},p),{fecha_liquidacion:""}))},renderInput:m=>{var a;return c(j,s(e({},m),{size:"small",fullWidth:!0,error:!!(r!=null&&r.fecha_liquidacion),helperText:(a=r==null?void 0:r.fecha_liquidacion)==null?void 0:a.message}))}})})};export{Ii as default};
