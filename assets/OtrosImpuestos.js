var j=Object.defineProperty;var u=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var c=(i,o,r)=>o in i?j(i,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[o]=r,d=(i,o)=>{for(var r in o||(o={}))T.call(o,r)&&c(i,r,o[r]);if(u)for(var r of u(o))y.call(o,r)&&c(i,r,o[r]);return i};import{T as C}from"./TextInput.js";import{D as P}from"./DecimalInput.js";import{a as s,j as n,r as F}from"./index.js";import{u as k,j as D}from"./array.js";import{G as m}from"./Grid.js";import{P as I}from"./Paper.js";import{T as S}from"./Typography.js";import{S as $}from"./Stack.js";import{B as h}from"./Button.js";import"./TextField.js";import"./FormHelperText.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Menu.js";import"./Modal.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./upperFirst.js";import"./extendSxProp.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";const b={texto:void 0,valor:void 0},at=()=>{const{control:i,register:o,formState:r}=k(),{errors:t}=r,{fields:p,append:x,remove:f}=D({control:i,name:"otros_impuestos"}),g=()=>x(b),_=()=>{p.length>1&&f(p.length-1)};return s(m,{item:!0,xs:12,children:s(I,{variant:"outlined",sx:{padding:1},children:n(m,{container:!0,item:!0,xs:12,spacing:1,direction:"column",children:[s(m,{item:!0,xs:12,children:s(S,{children:"Otros impuestos"})}),s(m,{item:!0,xs:12,container:!0,spacing:1,children:p.map((v,e)=>{var a,l;return n(F.exports.Fragment,{children:[s(m,{item:!0,xs:12,sm:6,children:s(C,d({label:"Descripci\xF3n",required:p.length>1,fullWidth:!0,inputProps:{maxLength:15},error:!!(t.otros_impuestos&&t.otros_impuestos[e]&&t.otros_impuestos[e].texto),helperText:t.otros_impuestos&&t.otros_impuestos[e]&&t.otros_impuestos[e].texto?(a=t.otros_impuestos[e].texto)==null?void 0:a.message:void 0,size:"small"},o(`otros_impuestos.${e}.texto`)))}),s(m,{item:!0,xs:12,sm:6,children:s(P,{name:`otros_impuestos.${e}.valor`,label:"Valor",required:p.length>1,fullWidth:!0,error:!!(t.otros_impuestos&&t.otros_impuestos[e]&&t.otros_impuestos[e].valor),helperText:t.otros_impuestos&&t.otros_impuestos[e]&&t.otros_impuestos[e].valor?(l=t.otros_impuestos[e].valor)==null?void 0:l.message:void 0,size:"small"})})]},`${v.id}`)})}),s(m,{item:!0,xs:12,justifyContent:"center",children:n($,{direction:"row",spacing:1,justifyContent:"center",children:[s(h,{variant:"outlined",onClick:g,children:"Agregar"}),p.length>1&&s(h,{variant:"outlined",color:"error",onClick:_,children:"Eliminar"})]})})]})})})};export{at as default};
