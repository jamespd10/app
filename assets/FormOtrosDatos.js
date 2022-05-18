var f=Object.defineProperty;var u=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var l=(o,r,t)=>r in o?f(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,c=(o,r)=>{for(var t in r||(r={}))h.call(r,t)&&l(o,t,r[t]);if(u)for(var t of u(r))_.call(r,t)&&l(o,t,r[t]);return o};import{m as x}from"./constantsLists.js";import{S as n}from"./SelectHookForm.js";import{u as d}from"./array.js";import{a,j as b,F as S}from"./index.js";import"./jwt-decode.esm.js";import{u as g}from"./useFirstFetch.js";import{G as m}from"./Grid.js";import{u as p}from"./string.helper.js";import{T as F}from"./TextInput.js";import"./nacionalidades.js";import"./Box.js";import"./extendSxProp.js";import"./TextField.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Menu.js";import"./Modal.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./MenuItem.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./listItemIconClasses.js";import"./Divider.js";import"./listItemTextClasses.js";import"./upperFirst.js";import"./useAsyncRetry.js";import"./tslib.js";import"./useHttpService.js";import"./constants.js";import"./regex.js";const T=()=>{var i;const{loading:o,value:r}=g({url:"/admin/negocios/rutas"}),{formState:t,control:e}=d();return a(m,{item:!0,xs:6,md:4,children:a(n,{control:e,label:"Ruta",options:o&&!r?["Cargando..."]:!o&&r&&r.status===201?r.data.map(s=>s.ruta):["Error al consultar las rutas"],values:!o&&r&&r.status===201?r.data.map(s=>s.id):void 0,error:!!t.errors.ruta,helperText:(i=t.errors.ruta)==null?void 0:i.message,name:"ruta"})})},C=({loading:o,value:r})=>{var i;const{formState:t,control:e}=d();return a(m,{item:!0,xs:12,sm:6,md:6,children:a(n,{control:e,label:"Itbms asignado",options:o&&!r?["Cargando..."]:!o&&r&&r.status===201?r.data.map(s=>`${p(s.nombre)} ${p(s.apellido)}`):["Error al consultar los usuarios"],values:!o&&r&&r.status===201?r.data.map(s=>s.id):void 0,error:!!t.errors.itbms_asignado_a,helperText:(i=t.errors.itbms_asignado_a)==null?void 0:i.message,name:"itbms_asignado_a"})})},E=({loading:o,value:r})=>{var i;const{formState:t,control:e}=d();return a(m,{item:!0,xs:12,sm:6,md:6,children:a(n,{control:e,label:"Seguro social asignado",options:o&&!r?["Cargando..."]:!o&&r&&r.status===201?r.data.map(s=>`${p(s.nombre)} ${p(s.apellido)}`):["Error al consultar los usuarios"],values:!o&&r&&r.status===201?r.data.map(s=>s.id):void 0,error:!!t.errors.ss_asignado_a,helperText:(i=t.errors.ss_asignado_a)==null?void 0:i.message,name:"ss_asignado_a"})})},nr=()=>{var i,s;const{register:o,formState:{errors:r},control:t}=d(),e=g({url:"/admin/usuarios/ch/secre&adminis"});return b(S,{children:[a(C,{loading:e.loading,value:e.value}),a(E,{loading:e.loading,value:e.value}),a(m,{item:!0,sm:6,md:4,children:a(n,{control:t,label:"Per\xEDodo",options:x,error:!!r.tipo_pagos,helperText:(i=r.tipo_pagos)==null?void 0:i.message,name:"tipo_pagos"})}),a(T,{}),a(m,{item:!0,sm:6,md:4,children:a(F,c({label:"Recorrido",fullWidth:!0,error:!!r.recorrido,helperText:(s=r.recorrido)==null?void 0:s.message},o("recorrido")))})]})};export{nr as default};