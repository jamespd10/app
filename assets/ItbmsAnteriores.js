var I=Object.defineProperty,F=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var y=(t,r,o)=>r in t?I(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,c=(t,r)=>{for(var o in r||(r={}))x.call(r,o)&&y(t,o,r[o]);if(l)for(var o of l(r))h.call(r,o)&&y(t,o,r[o]);return t},d=(t,r)=>F(t,M(r));var $=(t,r)=>{var o={};for(var e in t)x.call(t,e)&&r.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&l)for(var e of l(t))r.indexOf(e)<0&&h.call(t,e)&&(o[e]=t[e]);return o};import{r as b,j as u,a as m,aR as w,al as T}from"./index.js";import{T as D}from"./TextDecimalInput.js";import{T as R}from"./TextInput.js";import{F as j,s as i}from"./index78.js";import{D as k}from"./DatePicker.js";import{B as g}from"./Button.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./BootstrapModal.js";import"./ModalTransition.js";import"./BootstrapDivContent.js";import"./Divider.js";import"./index46.js";import"./HeaderTitle.js";import"./Typography.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./useForm.js";import"./object.helper.js";import"./array.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./PureDateInput.js";import"./CalendarPicker.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./IconButton.js";import"./InputAdornment.js";import"./DialogContent.js";import"./dialogTitleClasses.js";import"./DialogActions.js";import"./index13.js";import"./Popper.js";const N="_container_1uyrf_1",A="_title_1uyrf_6";var C={container:N,title:A};const St=()=>{const{form:t}=b.exports.useContext(j),{formState:r,setValue:o,onInputChange:e,setFormState:_}=t,{itbms_anteriores:a}=r;return u("div",{className:`${i.flexColumn} ${i.flexGrow} ${i.border} ${i.itemRight} ${C.container}`,children:[m("span",{className:`${i.otrosTitle} ${C.title}`,children:"ITBMS 430 de meses anteriores"}),a.map((s,n)=>m(b.exports.Fragment,{children:u("div",{className:i.flexRow,children:[m(k,{label:"Mes",value:s.mes_correspondiente!==""?new Date(s.mes_correspondiente):null,inputFormat:"MM/yyyy",mask:"__/____",views:["month","year","day"],onChange:p=>{p&&w(p)?o(`itbms_anteriores.${n}.mes_correspondiente`,T(p,"yyyy-MM-dd")):o(`itbms_anteriores.${n}.mes_correspondiente`,"")},renderInput:B=>{var f=B,{InputProps:p}=f,v=$(f,["InputProps"]);return m(R,c({size:"small",fullWidth:!0},v))}}),m(D,{name:`itbms_anteriores.${n}.total`,label:"Monto",size:"small",fullWidth:!0,value:s.total,onChange:e})]})},`itbms-anterior-${n+1}`)),u("div",{className:`${i.flexRow} ${i.justifyCenter}`,children:[m(g,{variant:"outlined",color:"primary",onClick:()=>{_(d(c({},r),{itbms_anteriores:[...a,{mes_correspondiente:"",total:""}]}))},children:"Agregar fila"}),a.length>1&&m(g,{variant:"outlined",color:"error",onClick:()=>{const s=a;s.pop(),_(d(c({},r),{itbms_anteriores:s}))},children:"Remover \xFAltima fila"})]})]})};export{St as default};
