var d=Object.defineProperty;var n=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var s=(o,i,t)=>i in o?d(o,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[i]=t,l=(o,i)=>{for(var t in i||(i={}))x.call(i,t)&&s(o,t,i[t]);if(n)for(var t of n(i))_.call(i,t)&&s(o,t,i[t]);return o};import{r as u,b as f,av as h,a as r,F as v,j as b}from"./index.js";import{D as c}from"./DecimalInput.js";import{T as g}from"./TextInput.js";import{u as D}from"./yup.module.js";import{L as P}from"./Loader.js";import"./BootstrapTooltip.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{G as m}from"./Grid.js";import{P as T}from"./Paper.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./Typography.js";import"./Tooltip.js";import"./Popper.js";import"./useIsFocusVisible.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./ModalTransition.js";import"./IconButton.js";import"./ButtonBase.js";import"./Warning.js";import"./Error.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";const F=u.exports.lazy(()=>f(()=>import("./Otros3.js"),["assets/Otros3.js","assets/TextInput.js","assets/index.js","assets/index17.css","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/useId.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/DecimalInput.js","assets/yup.module.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/CircularProgress.js","assets/Grid.js","assets/Typography.js","assets/Stack.js","assets/Button.js","assets/ButtonBase.js","assets/useIsFocusVisible.js"])),Tt=()=>{var p,a;const{formState:o,register:i}=D(),{errors:t}=o,{factura:e}=h();return r(v,{children:r(m,{item:!0,xs:12,children:r(T,{variant:"outlined",sx:{p:1.2,border:`4px solid ${e==="todas"?"red":"black"}`},children:b(m,{container:!0,spacing:1,children:[r(m,{item:!0,xs:12,sm:6,children:r(c,{label:"Declaraci\xF3n Jurada Municipio",name:"declaracion_municipal",fullWidth:!0,required:!0,error:!!(t!=null&&t.declaracion_municipal),helperText:(p=t==null?void 0:t.declaracion_municipal)==null?void 0:p.message,size:"small"})}),r(m,{item:!0,xs:12,sm:6,children:r(c,{label:"Monto en ventas - municipio",name:e==="todas"?"monto_ventas_municipio":"monto_ventas",fullWidth:!0,required:!0,error:!!(t!=null&&t.monto_ventas),helperText:(a=t==null?void 0:t.monto_ventas)==null?void 0:a.message,size:"small"})}),e==="lalo"&&r(u.exports.Suspense,{fallback:r(P,{}),children:r(F,{})}),e==="municipio"&&r(m,{item:!0,xs:12,children:r(g,l({label:"Notas",multiline:!0,rows:4,fullWidth:!0},i("notas")))})]})})})})};export{Tt as default};
