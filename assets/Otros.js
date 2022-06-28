var T=Object.defineProperty;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var d=(s,t,o)=>t in s?T(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,u=(s,t)=>{for(var o in t||(t={}))y.call(t,o)&&d(s,o,t[o]);if(c)for(var o of c(t))C.call(t,o)&&d(s,o,t[o]);return s};import{T as P}from"./TextInput.js";import{D as F}from"./DecimalInput.js";import{a as i,j as a,r as b}from"./index.js";import{u as k,j as D}from"./array.js";import{G as m}from"./Grid.js";import{P as S}from"./Paper.js";import{T as $}from"./Typography.js";import{S as q}from"./Stack.js";import{B as h}from"./Button.js";import"./TextField.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./upperFirst.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";const z={texto:void 0,valor:void 0},nr=()=>{const{control:s,register:t,formState:o}=k(),{errors:r}=o,{fields:n,append:x,remove:f}=D({control:s,name:"otros"}),g=()=>x(z),v=()=>{n.length>1&&f(n.length-1)};return i(m,{item:!0,xs:12,children:i(S,{variant:"outlined",sx:{padding:1},children:a(m,{container:!0,item:!0,xs:12,spacing:1,direction:"column",children:[i(m,{item:!0,xs:12,children:i($,{children:"Otros cobros"})}),i(m,{item:!0,xs:12,container:!0,spacing:1,children:n.map((j,e)=>{var l,p;return a(b.exports.Fragment,{children:[i(m,{item:!0,xs:12,sm:6,children:i(P,u({label:"Descripci\xF3n",required:n.length>1,fullWidth:!0,inputProps:{maxLength:255},error:!!(r.otros&&r.otros[e]&&r.otros[e].texto),helperText:r.otros&&r.otros[e]&&r.otros[e].texto?(l=r.otros[e].texto)==null?void 0:l.message:void 0,size:"small"},t(`otros.${e}.texto`)))}),i(m,{item:!0,xs:12,sm:6,children:i(F,{name:`otros.${e}.valor`,label:"Valor",required:n.length>1,fullWidth:!0,error:!!(r.otros&&r.otros[e]&&r.otros[e].valor),helperText:r.otros&&r.otros[e]&&r.otros[e].valor?(p=r.otros[e].valor)==null?void 0:p.message:void 0,size:"small"})})]},`${j.id}`)})}),i(m,{item:!0,xs:12,justifyContent:"center",children:a(q,{direction:"row",spacing:1,justifyContent:"center",children:[n.length<3&&i(h,{variant:"outlined",onClick:g,children:"Agregar"}),n.length>1&&i(h,{variant:"outlined",color:"error",onClick:v,children:"Eliminar"})]})})]})})})};export{nr as default};
