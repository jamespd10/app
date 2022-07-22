var c=Object.defineProperty;var s=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var n=(o,t,i)=>t in o?c(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i,m=(o,t)=>{for(var i in t||(t={}))d.call(t,i)&&n(o,i,t[i]);if(s)for(var i of s(t))u.call(t,i)&&n(o,i,t[i]);return o};import{T as p}from"./TextInput.js";import{u as g,b as _}from"./yup.module.js";import{at as v,j as x,a as r}from"./index.js";import{D as h}from"./Divider.js";import{A as f}from"./Alert.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./useId.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./Close.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";const b="_container_13mm3_1",j="_title_13mm3_10";var l={container:b,title:j};const X=()=>{const{register:o,setValue:t,control:i}=g(),a=_({control:i,name:"negocios"});return v(()=>{(()=>{t("actividad",a.map(e=>e.actividad).join(", ")),t("text_negocio",a.map(e=>`${e.tipo||""} ${e.nombre_negocio||""}`.trim()).join(", "))})()},[a]),x("div",{className:l.container,children:[r("span",{className:l.title,children:"Datos a imprimir"}),r(h,{}),r(f,{variant:"outlined",severity:"warning",children:"Favor ingresar los negocios separados por coma(,)"}),r(p,m({label:"Negocios a mostrar en impresi\xF3n",size:"small",multiline:!0,minRows:2,InputLabelProps:{shrink:!0}},o("text_negocio"))),r(p,m({label:"Actividades a mostrar en impresi\xF3n",size:"small",multiline:!0,minRows:2,InputLabelProps:{shrink:!0}},o("actividad")))]})};export{X as default};
