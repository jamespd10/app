import{a as r,j as s,r as A}from"./index.js";import{u as F,b as S,c as T}from"./yup.module.js";import{D as C}from"./DecimalInput.js";import{f as D}from"./string.helper.js";import{A as j}from"./AutocompleteServer.js";import{P as k}from"./Paper.js";import{T as g}from"./Typography.js";import{S as b}from"./Stack.js";import{B as y}from"./Button.js";import{D as w}from"./Divider.js";import"./TextInput.js";import"./TextField.js";import"./useFormControl.js";import"./useControlled.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Grow.js";import"./List.js";import"./createSvgIcon.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./CircularProgress.js";import"./regex.js";import"./useFetch.js";import"./useHttpService.js";import"./Autocomplete.js";import"./Close.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./Popper.js";import"./Chip.js";const B=({i:a})=>{var e,m,l,i,t;const{formState:c,setValue:d,control:n}=F(),{errors:o}=c,u=S({control:n,name:`retenciones.${a}.texto`});return r(j,{ref:null,inputProps:{label:"Banco",error:!!((m=(e=o==null?void 0:o.retenciones)==null?void 0:e[a])!=null&&m.texto),helperText:(t=(i=(l=o==null?void 0:o.retenciones)==null?void 0:l[a])==null?void 0:i.texto)==null?void 0:t.message},disableStyle:!0,enableFirst:!0,value:u,size:"small",fullWidth:!0,onChange:(h,p)=>d(`retenciones.${a}.texto`,p,{shouldValidate:!0}),urlFetch:"/admin/bancos?disableFields=1"})},xe=()=>{var l;const{formState:a,control:c,watch:d}=F(),{fields:n,append:o,remove:u}=T({control:c,name:"retenciones"}),{errors:e}=a,m=d("retenciones");return s(k,{variant:"outlined",style:{padding:10,border:"2px solid black",width:"100%"},children:[r(g,{variant:"h5",children:"Retenciones"}),s(b,{spacing:1,children:[n==null?void 0:n.map((i,t)=>{var h,p,f,v,x;return r(A.exports.Fragment,{children:s(b,{direction:"row",spacing:1,children:[r(B,{i:t}),r(C,{label:"Total de retenciones",name:`retenciones.${t}.valor`,fullWidth:!0,required:!0,error:!!((p=(h=e==null?void 0:e.retenciones)==null?void 0:h[t])!=null&&p.valor),helperText:(x=(v=(f=e==null?void 0:e.retenciones)==null?void 0:f[t])==null?void 0:v.valor)==null?void 0:x.message,size:"small"})]})},i.id)}),s("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",textAlign:"center"},children:[r(y,{variant:"outlined",onClick:()=>{o({texto:void 0,valor:void 0},{shouldFocus:!1})},children:"Agregar"}),n.length>1&&r(y,{variant:"outlined",color:"error",onClick:()=>u(n.length-1),style:{marginLeft:10},children:"Eliminar"})]}),r(w,{}),s(g,{variant:"h5",children:["Total de retenciones:"," ",r("strong",{children:D((l=m==null?void 0:m.map(i=>i.valor))==null?void 0:l.reduce((i,t)=>Number(i||0)+Number(t||0)))})]})]})]})};export{xe as default};
