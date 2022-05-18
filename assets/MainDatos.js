var v=Object.defineProperty;var b=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(o,t,e)=>t in o?v(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,T=(o,t)=>{for(var e in t||(t={}))S.call(t,e)&&g(o,e,t[e]);if(b)for(var e of b(t))I.call(t,e)&&g(o,e,t[e]);return o};import{r as l,q as W,j as q,F as D,a as r}from"./index.js";import{D as s}from"./DecimalInput.js";import{T as E}from"./TextInput.js";import{u as F}from"./array.js";import{L as z}from"./Loader.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./Modal2.js";import"./platform.js";import{G as i}from"./Grid.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./TextField.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Menu.js";import"./Modal.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./upperFirst.js";import"./Typography.js";import"./extendSxProp.js";import"./Tooltip.js";import"./useIsFocusVisible.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./Button.js";const L=l.exports.lazy(()=>W(()=>import("./TotalInputs.js"),["assets/TotalInputs.js","assets/array.js","assets/index.js","assets/index.css","assets/upperFirst.js","assets/string.helper.js","assets/regex.js","assets/Typography.js","assets/extendSxProp.js"])),M=l.exports.lazy(()=>W(()=>import("./Otros.js"),["assets/Otros.js","assets/TextInput.js","assets/index.js","assets/index.css","assets/TextField.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Menu.js","assets/Modal.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/DecimalInput.js","assets/array.js","assets/upperFirst.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/Stack.js","assets/Button.js","assets/ButtonBase.js","assets/useIsFocusVisible.js"])),ge=()=>{var m,a,u,d,p,n,c,f,h,_,x;const{formState:o,register:t}=F(),{errors:e}=o;return q(D,{children:[q(i,{container:!0,spacing:1,children:[r(i,{item:!0,xs:12,sm:6,md:3,children:r(s,{name:"decimo",label:"D\xE9cimo",fullWidth:!0,error:!!e.decimo,helperText:(m=e.decimo)==null?void 0:m.message,required:!0,size:"small"})}),r(i,{item:!0,xs:12,sm:6,md:3,children:r(s,{name:"vacaciones",label:"Vacaciones",fullWidth:!0,error:!!e.vacaciones,helperText:(a=e.vacaciones)==null?void 0:a.message,required:!0,size:"small"})}),r(i,{item:!0,xs:12,sm:6,md:3,children:r(s,{name:"itbms",label:"ITBMS",fullWidth:!0,error:!!e.itbms,helperText:(u=e.itbms)==null?void 0:u.message,required:!0,size:"small"})}),r(i,{item:!0,xs:12,sm:6,md:3,children:r(s,{name:"formulario_retencion_itbms",label:"Formulario de retencion ITBMS",fullWidth:!0,error:!!e.formulario_retencion_itbms,helperText:(d=e.formulario_retencion_itbms)==null?void 0:d.message,required:!0,size:"small"})}),r(i,{item:!0,xs:12,sm:6,md:3,children:r(s,{name:"formulario_03",label:"Formulario 03",fullWidth:!0,error:!!e.formulario_03,helperText:(p=e.formulario_03)==null?void 0:p.message,required:!0,size:"small"})}),r(i,{item:!0,xs:12,sm:6,md:3,children:r(s,{name:"sipe",label:"SIPE",fullWidth:!0,error:!!e.sipe,helperText:(n=e.sipe)==null?void 0:n.message,required:!0,size:"small"})}),r(i,{item:!0,xs:12,sm:6,md:3,children:r(s,{name:"seguro_social",label:"Seguro social",fullWidth:!0,error:!!e.seguro_social,helperText:(c=e.seguro_social)==null?void 0:c.message,required:!0,size:"small"})}),r(i,{item:!0,xs:12,sm:6,md:3,children:r(s,{name:"seguro_social2",label:"Seguro social 2",fullWidth:!0,error:!!e.seguro_social2,helperText:(f=e.seguro_social2)==null?void 0:f.message,required:!0,size:"small"})}),r(i,{item:!0,xs:12,sm:6,children:r(s,{name:"servicio_contabilidad",label:"Servicio contabilidad",fullWidth:!0,error:!!e.servicio_contabilidad,helperText:(h=e.servicio_contabilidad)==null?void 0:h.message,required:!0,size:"small"})}),r(i,{item:!0,xs:12,sm:6,children:r(s,{name:"itbms_contabilidad",label:"ITBMS contabilidad",fullWidth:!0,error:!!e.itbms_contabilidad,helperText:(_=e.itbms_contabilidad)==null?void 0:_.message,required:!0,size:"small"})}),r(l.exports.Suspense,{fallback:r(z,{}),children:r(M,{})}),r(i,{item:!0,xs:12,children:r(E,T({label:"Notas",multiline:!0,rows:4,fullWidth:!0,error:!!e.notas,helperText:(x=e.notas)==null?void 0:x.message,required:!0},t("notas")))})]}),r(l.exports.Suspense,{fallback:r(z,{}),children:r(L,{})})]})};export{ge as default};