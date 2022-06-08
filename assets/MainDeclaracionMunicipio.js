var d=Object.defineProperty;var n=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var s=(o,i,t)=>i in o?d(o,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[i]=t,l=(o,i)=>{for(var t in i||(i={}))f.call(i,t)&&s(o,t,i[t]);if(n)for(var t of n(i))x.call(i,t)&&s(o,t,i[t]);return o};import{r as c,q as _,ag as h,a as r,F as v,j as b}from"./index.js";import{D as u}from"./DecimalInput.js";import{T as g}from"./TextInput.js";import{u as D}from"./array.js";import{L as P}from"./Loader.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal2.js";import"./platform.js";import{G as e}from"./Grid.js";import{P as T}from"./Paper.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./TextField.js";import"./FormHelperText.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Menu.js";import"./Modal.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./upperFirst.js";import"./Typography.js";import"./extendSxProp.js";import"./Tooltip.js";import"./useIsFocusVisible.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./LoadingButton.js";import"./Button.js";import"./ButtonBase.js";import"./IconButton.js";import"./Error.js";const F=c.exports.lazy(()=>_(()=>import("./Otros2.js"),["assets/Otros2.js","assets/TextInput.js","assets/index.js","assets/index6.css","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Menu.js","assets/Modal.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/DecimalInput.js","assets/array.js","assets/upperFirst.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/Stack.js","assets/Button.js","assets/ButtonBase.js","assets/useIsFocusVisible.js"])),xt=()=>{var a,p;const{formState:o,register:i}=D(),{errors:t}=o,{factura:m}=h();return r(v,{children:r(e,{item:!0,xs:12,children:r(T,{variant:"outlined",sx:{p:1.2,border:`4px solid ${m==="todas"?"red":"black"}`},children:b(e,{container:!0,spacing:1,children:[r(e,{item:!0,xs:12,sm:6,children:r(u,{label:"Declaraci\xF3n Jurada Municipio",name:"declaracion_municipal",fullWidth:!0,required:!0,error:!!(t!=null&&t.declaracion_municipal),helperText:(a=t==null?void 0:t.declaracion_municipal)==null?void 0:a.message,size:"small"})}),r(e,{item:!0,xs:12,sm:6,children:r(u,{label:"Monto en ventas - municipio",name:m==="todas"?"monto_ventas_municipio":"monto_ventas",fullWidth:!0,required:!0,error:!!(t!=null&&t.monto_ventas),helperText:(p=t==null?void 0:t.monto_ventas)==null?void 0:p.message,size:"small"})}),m==="lalo"&&r(c.exports.Suspense,{fallback:r(P,{}),children:r(F,{})}),m==="municipio"&&r(e,{item:!0,xs:12,children:r(g,l({label:"Notas",multiline:!0,rows:4,fullWidth:!0},i("notas")))})]})})})})};export{xt as default};
