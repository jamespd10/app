var T=Object.defineProperty,q=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var b=(t,e,r)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))A.call(e,r)&&b(t,r,e[r]);if(d)for(var r of d(e))_.call(e,r)&&b(t,r,e[r]);return t},I=(t,e)=>q(t,$(e));var w=(t,e)=>{var r={};for(var o in t)A.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&d)for(var o of d(t))e.indexOf(o)<0&&_.call(t,o)&&(r[o]=t[o]);return r};import{g as j,e as L,s as M,_ as h,r as v,u as R,h as B,i as O,a as s,k as U,A as z,aj as N,b as D,j as p}from"./index.js";import{c as E,i as W,r as k}from"./jsx-runtime_commonjs-proxy.js";import{c as H,b as f,f as V,u as F,g as G,F as J,o as K}from"./array.js";import{p as g}from"./platform.js";import{u as Q}from"./useFetch.js";import{u as X}from"./useModal.js";import"./jwt-decode.esm.js";import{L as Y}from"./LoadingButton.js";import{P as Z}from"./PasswordInput.js";import{T as tt}from"./TextInput.js";import{I as et}from"./InputAdornment.js";import{C as rt}from"./Card.js";import{C as ot}from"./CardContent.js";import{T as st}from"./Typography.js";import{B as at}from"./Button.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./upperFirst.js";import"./ButtonBase.js";import"./useHttpService.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./IconButton.js";import"./TextField.js";import"./FormHelperText.js";import"./react-is.production.min.js";import"./Grow.js";import"./List.js";import"./GlobalStyles.js";function it(t){return j("MuiCardActions",t)}L("MuiCardActions",["root","spacing"]);const nt=["disableSpacing","className"],ct=t=>{const{classes:e,disableSpacing:r}=t;return O({root:["root",!r&&"spacing"]},it,e)},ut=M("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,!r.disableSpacing&&e.spacing]}})(({ownerState:t})=>h({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),mt=v.exports.forwardRef(function(e,r){const o=R({props:e,name:"MuiCardActions"}),{disableSpacing:i=!1,className:n}=o,c=B(o,nt),a=h({},o,{disableSpacing:i}),l=ct(a);return s(ut,h({className:U(l.root,n),ownerState:a,ref:r},c))});var lt=mt;const dt=()=>`${g.name} ${g.version}`,pt=()=>{var t,e;return`${(t=g.os)==null?void 0:t.family} ${(e=g.os)==null?void 0:e.version}`};var C={},ft=W.exports;Object.defineProperty(C,"__esModule",{value:!0});var x=C.default=void 0,gt=ft(E),vt=k,St=(0,gt.default)((0,vt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle");x=C.default=St;const ht=H().shape({user:f().trim().required("El usuario es requerido"),password:f().trim().required("La contrase\xF1a es requerida"),isEmail:V().required("Favor seleccionar si ingresar con el correo o usuario").default(!1),dispositivo:f().trim().required("").default(dt()),os:f().trim().required("").default(pt())}),Ct=()=>{var u;const{setHide:t,modalState:e,setOpen:r}=X(),{signIn:o}=v.exports.useContext(z),i=N(),{isLoading:n,send:c,response:a}=Q();return{isLoading:n,onSubmit:async P=>{var y;const S=await c({url:"/signin",method:"POST",data:P});S.status===201?(o(m({},S.data)),i(((y=S.data)==null?void 0:y.tipo)==="Consulta-NIT"?"/nit":"/",{replace:!0})):r()},setHide:t,modalState:e,message:(u=a==null?void 0:a.error)==null?void 0:u.message,setOpen:r}},xt=()=>s(Y,{color:"primary",loading:!0,variant:"contained",children:"Submit"}),yt=()=>{var o;const{formState:t,register:e}=F(),{errors:r}=t;return s(Z,m({id:"password",label:"Contrase\xF1a",error:!!r.password,helperText:(o=r.password)==null?void 0:o.message,fullWidth:!0},e("password")))},bt=()=>{var o;const{formState:t,register:e}=F(),{errors:r}=t;return s(tt,m({id:"user",type:"text",label:"Usuario",error:!!r.user,helperText:(o=r.user)==null?void 0:o.message,autoFocus:!0,focused:!0,fullWidth:!0,InputProps:{startAdornment:s(et,{position:"start",children:s(x,{})})},style:{marginBottom:20,marginTop:20}},e("user")))},At=v.exports.lazy(()=>D(()=>import("./ModalAlert.js"),["assets/ModalAlert.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index4.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js"])),se=()=>{const t=G({mode:"all",resolver:K(ht)}),{handleSubmit:e}=t,u=Ct(),{isLoading:r,onSubmit:o,setOpen:i}=u,n=w(u,["isLoading","onSubmit","setOpen"]),{modalState:c,setHide:a,message:l}=n;return p(J,I(m({},t),{children:[s("form",{onSubmit:e(o),style:{width:"100%"},children:p(rt,{variant:"outlined",children:[p(ot,{style:{textAlign:"center"},children:[s(st,{color:"textSecondary",gutterBottom:!0,variant:"h5",children:"Formulario de Ingreso"}),s(x,{style:{fontSize:"120px"}}),s(bt,{}),s(yt,{})]}),p(lt,{style:{justifyContent:"center"},children:[!r&&s(at,{type:"submit",variant:"contained",color:"primary",children:"Ingresar"}),r&&s(xt,{})]})]})}),s(v.exports.Suspense,{fallback:s("div",{}),children:s(At,{modalState:c,setHide:a,message:l,setOpen:i})})]}))};export{se as default};
