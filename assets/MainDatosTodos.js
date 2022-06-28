var h=Object.defineProperty;var c=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var f=(a,t,e)=>t in a?h(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,x=(a,t)=>{for(var e in t||(t={}))_.call(t,e)&&f(a,e,t[e]);if(c)for(var e of c(t))z.call(t,e)&&f(a,e,t[e]);return a};import{D as m}from"./DecimalInput.js";import{u as g}from"./array.js";import{T}from"./TextInput.js";import{j as b,F as W,a as i}from"./index.js";import{G as l}from"./Grid.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./upperFirst.js";import"./TextField.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./Typography.js";const R=()=>{var o,s,r,d,n,p,u;const{register:a,formState:t}=g(),{errors:e}=t;return b(W,{children:[i(l,{item:!0,xs:12,md:3,children:i(m,{label:"Actualizaci\xF3n de NIT",name:"actualizacion_nit",fullWidth:!0,required:!0,error:!!(e!=null&&e.actualizacion_nit),helperText:(o=e==null?void 0:e.actualizacion_nit)==null?void 0:o.message,size:"small"})}),i(l,{item:!0,xs:12,md:3,children:i(m,{label:"Estados financieros",name:"estados_financieros",fullWidth:!0,required:!0,error:!!(e!=null&&e.estados_financieros),helperText:(s=e==null?void 0:e.estados_financieros)==null?void 0:s.message,size:"small"})}),i(l,{item:!0,xs:12,md:3,children:i(T,x({label:"Per\xEDodos de estados financieros",fullWidth:!0,error:!!(e!=null&&e.periodos_estados),helperText:(r=e==null?void 0:e.periodos_estados)==null?void 0:r.message,size:"small"},a("periodos_estados")))}),i(l,{item:!0,xs:12,md:3,children:i(m,{label:"Certificaci\xF3n de ingresos",name:"certificacion_ingresos",fullWidth:!0,required:!0,error:!!(e!=null&&e.certificacion_ingresos),helperText:(d=e==null?void 0:e.certificacion_ingresos)==null?void 0:d.message,size:"small"})}),i(l,{item:!0,xs:12,md:4,children:i(m,{label:"Paz y salvo - impresi\xF3n",name:"paz_salvo",fullWidth:!0,required:!0,error:!!(e!=null&&e.paz_salvo),helperText:(n=e==null?void 0:e.paz_salvo)==null?void 0:n.message,size:"small"})}),i(l,{item:!0,xs:12,md:4,children:i(m,{label:"Cierre",name:"cierre",fullWidth:!0,required:!0,error:!!(e!=null&&e.cierre),helperText:(p=e==null?void 0:e.cierre)==null?void 0:p.message,size:"small"})}),i(l,{item:!0,xs:12,md:4,children:i(m,{label:"Poder notariado",name:"poder_notariado",fullWidth:!0,required:!0,error:!!(e!=null&&e.poder_notariado),helperText:(u=e==null?void 0:e.poder_notariado)==null?void 0:u.message,size:"small"})})]})};export{R as default};
