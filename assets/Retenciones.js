var B=Object.defineProperty,N=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var D=(o,e,t)=>e in o?B(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,j=(o,e)=>{for(var t in e||(e={}))R.call(e,t)&&D(o,t,e[t]);if(b)for(var t of b(e))W.call(e,t)&&D(o,t,e[t]);return o},k=(o,e)=>N(o,P(e));import{j as l,a as n,r as $}from"./index.js";import{u as q,h as E}from"./array.js";import{D as I}from"./DecimalInput.js";import{T as L}from"./TextInput.js";import{f as M}from"./string.helper.js";import{P as G}from"./Paper.js";import{T as w}from"./Typography.js";import{S as A}from"./Stack.js";import{B as C}from"./Button.js";import{D as H}from"./Divider.js";import"./upperFirst.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./TextField.js";import"./useControlled.js";import"./react-is.production.min.js";import"./Menu.js";import"./Modal.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./GlobalStyles.js";import"./regex.js";import"./extendSxProp.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";const Te=()=>{var s;const{register:o,formState:e,control:t,watch:F}=q(),{fields:a,append:S,remove:z}=E({control:t,name:"retenciones"}),{errors:r}=e,p=F("retenciones");return l(G,{variant:"outlined",style:{padding:10,border:"2px solid black",width:"100%"},children:[n(w,{variant:"h5",children:"Retenciones"}),l(A,{spacing:1,children:[a==null?void 0:a.map((m,i)=>{var c,d,h,u,f,g,x,v,y,T;return n($.exports.Fragment,{children:l(A,{direction:"row",spacing:1,children:[n(L,k(j({label:"Agente retenedor",fullWidth:!0,error:!!((d=(c=r==null?void 0:r.retenciones)==null?void 0:c[i])!=null&&d.texto),helperText:(f=(u=(h=r==null?void 0:r.retenciones)==null?void 0:h[i])==null?void 0:u.texto)==null?void 0:f.message},o(`retenciones.${i}.texto`)),{size:"small"})),n(I,{label:"Total",name:`retenciones.${i}.valor`,fullWidth:!0,required:!0,error:!!((x=(g=r==null?void 0:r.retenciones)==null?void 0:g[i])!=null&&x.valor),helperText:(T=(y=(v=r==null?void 0:r.retenciones)==null?void 0:v[i])==null?void 0:y.valor)==null?void 0:T.message,size:"small"})]})},m.id)}),l("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",textAlign:"center"},children:[n(C,{variant:"outlined",onClick:()=>{S({texto:void 0,valor:void 0},{shouldFocus:!1})},children:"Agregar"}),a.length>1&&n(C,{variant:"outlined",color:"error",onClick:()=>z(a.length-1),style:{marginLeft:10},children:"Eliminar"})]}),n(H,{}),l(w,{variant:"h5",children:["Total de retenciones:"," ",n("strong",{children:M((s=p==null?void 0:p.map(m=>m.valor))==null?void 0:s.reduce((m,i)=>Number(m||0)+Number(i||0)))})]})]})]})};export{Te as default};