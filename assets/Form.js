var P=Object.defineProperty,T=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var b=(t,r,e)=>r in t?P(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,u=(t,r)=>{for(var e in r||(r={}))A.call(r,e)&&b(t,e,r[e]);if(p)for(var e of p(r))_.call(r,e)&&b(t,e,r[e]);return t},I=(t,r)=>T(t,$(r));var w=(t,r)=>{var e={};for(var o in t)A.call(t,o)&&r.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&p)for(var o of p(t))r.indexOf(o)<0&&_.call(t,o)&&(e[o]=t[o]);return e};import{h as j,k as L,l as M,_ as h,r as v,u as R,c as B,n as O,a as s,e as U,A as z,t as N,q as D,j as d}from"./index.js";import{c as E,i as W,r as k}from"./jsx-runtime_commonjs-proxy.js";import{c as H,a as f,e as V,u as q,f as G,F as J,o as K}from"./array.js";import{p as g}from"./platform.js";import{u as Q}from"./useFetch.js";import{u as X}from"./useModal.js";import"./jwt-decode.esm.js";import{L as Y}from"./Modal2.js";import{P as Z}from"./PasswordInput.js";import{T as tt}from"./TextInput.js";import{I as rt}from"./InputAdornment.js";import{C as et}from"./Card.js";import{C as ot}from"./CardContent.js";import{T as st}from"./Typography.js";import{B as at}from"./Button.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./upperFirst.js";import"./ButtonBase.js";import"./useHttpService.js";import"./constants.js";import"./Close2.js";import"./DialogTitle.js";import"./Backdrop.js";import"./Modal.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./IconButton.js";import"./Error.js";import"./TextField.js";import"./react-is.production.min.js";import"./Menu.js";import"./Grow.js";import"./List.js";import"./GlobalStyles.js";import"./extendSxProp.js";function it(t){return j("MuiCardActions",t)}L("MuiCardActions",["root","spacing"]);const nt=["disableSpacing","className"],ct=t=>{const{classes:r,disableSpacing:e}=t;return O({root:["root",!e&&"spacing"]},it,r)},mt=M("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:e}=t;return[r.root,!e.disableSpacing&&r.spacing]}})(({ownerState:t})=>h({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),ut=v.exports.forwardRef(function(r,e){const o=R({props:r,name:"MuiCardActions"}),{disableSpacing:i=!1,className:n}=o,c=B(o,nt),a=h({},o,{disableSpacing:i}),l=ct(a);return s(mt,h({className:U(l.root,n),ownerState:a,ref:e},c))});var lt=ut;const pt=()=>`${g.name} ${g.version}`,dt=()=>{var t,r;return`${(t=g.os)==null?void 0:t.family} ${(r=g.os)==null?void 0:r.version}`};var C={},ft=W.exports;Object.defineProperty(C,"__esModule",{value:!0});var x=C.default=void 0,gt=ft(E),vt=k,St=(0,gt.default)((0,vt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle");x=C.default=St;const ht=H().shape({user:f().trim().required("El usuario es requerido"),password:f().trim().required("La contrase\xF1a es requerida"),isEmail:V().required("Favor seleccionar si ingresar con el correo o usuario").default(!1),dispositivo:f().trim().required("").default(pt()),os:f().trim().required("").default(dt())}),Ct=()=>{var m;const{setHide:t,modalState:r,setOpen:e}=X(),{signIn:o}=v.exports.useContext(z),i=N(),{isLoading:n,send:c,response:a}=Q();return{isLoading:n,onSubmit:async F=>{var y;const S=await c({url:"/signin",method:"POST",data:F});S.status===201?(o(u({},S.data)),i(((y=S.data)==null?void 0:y.tipo)==="Consulta-NIT"?"/nit":"/",{replace:!0})):e()},setHide:t,modalState:r,message:(m=a==null?void 0:a.error)==null?void 0:m.message,setOpen:e}},xt=()=>s(Y,{color:"primary",loading:!0,variant:"contained",children:"Submit"}),yt=()=>{var o;const{formState:t,register:r}=q(),{errors:e}=t;return s(Z,u({id:"password",label:"Contrase\xF1a",error:!!e.password,helperText:(o=e.password)==null?void 0:o.message,fullWidth:!0},r("password")))},bt=()=>{var o;const{formState:t,register:r}=q(),{errors:e}=t;return s(tt,u({id:"user",type:"text",label:"Usuario",error:!!e.user,helperText:(o=e.user)==null?void 0:o.message,autoFocus:!0,focused:!0,fullWidth:!0,InputProps:{startAdornment:s(rt,{position:"start",children:s(x,{})})},style:{marginBottom:20,marginTop:20}},r("user")))},At=v.exports.lazy(()=>D(()=>import("./ModalAlert.js"),["assets/ModalAlert.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/extendSxProp.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/Button.js"])),mr=()=>{const t=G({mode:"all",resolver:K(ht)}),{handleSubmit:r}=t,m=Ct(),{isLoading:e,onSubmit:o,setOpen:i}=m,n=w(m,["isLoading","onSubmit","setOpen"]),{modalState:c,setHide:a,message:l}=n;return d(J,I(u({},t),{children:[s("form",{onSubmit:r(o),style:{width:"100%"},children:d(et,{variant:"outlined",children:[d(ot,{style:{textAlign:"center"},children:[s(st,{color:"textSecondary",gutterBottom:!0,variant:"h5",children:"Formulario de Ingreso"}),s(x,{style:{fontSize:"120px"}}),s(bt,{}),s(yt,{})]}),d(lt,{style:{justifyContent:"center"},children:[!e&&s(at,{type:"submit",variant:"contained",color:"primary",children:"Ingresar"}),e&&s(xt,{})]})]})}),s(v.exports.Suspense,{fallback:s("div",{}),children:s(At,{modalState:c,setHide:a,message:l,setOpen:i})})]}))};export{mr as default};
