var O=Object.defineProperty,U=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var P=(r,t,e)=>t in r?O(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,p=(r,t)=>{for(var e in t||(t={}))V.call(t,e)&&P(r,e,t[e]);if(E)for(var e of E(t))G.call(t,e)&&P(r,e,t[e]);return r},c=(r,t)=>U(r,W(t));import{r as i,a2 as I,a as o,F as j,j as u}from"./index.js";import{c as N,i as J,r as K}from"./jsx-runtime_commonjs-proxy.js";import{B as Q}from"./BootstrapTooltip.js";import{c as X,a as h,f as Y,o as Z,F as ee,u as L}from"./array.js";import{u as re}from"./useModal.js";import"./jwt-decode.esm.js";import{I as te}from"./IconButton.js";import oe from"./Modal2.js";import{T as f}from"./TextInput.js";import{S as g}from"./Stack.js";import{P as R}from"./Paper.js";import{T as D}from"./Typography.js";import{D as q}from"./Divider.js";import{L as ae}from"./Loader.js";import{A as B}from"./Alert.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Tooltip.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./upperFirst.js";import"./ButtonBase.js";import"./Close2.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal.js";import"./Button.js";import"./Error.js";import"./extendSxProp.js";import"./TextField.js";import"./FormHelperText.js";import"./react-is.production.min.js";import"./Menu.js";import"./List.js";import"./GlobalStyles.js";import"./Grid.js";import"./Close.js";const b=i.exports.createContext({}),ne=({children:r,update:t,id:e})=>{const a=I(),[,s]=a,n=i.exports.useCallback(()=>{s(`/admin/credenciales-sipe/${e}`)},[]);return o(b.Provider,{value:{id:e,fetcher:a,send:n,update:t},children:r})};var S={},se=J.exports;Object.defineProperty(S,"__esModule",{value:!0});var M=S.default=void 0,ie=se(N),le=K,de=(0,ie.default)((0,le.jsx)("path",{d:"M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"AccountBalanceWallet");M=S.default=de;const pe=X().shape({user_elaborador:h().typeError("Favor ingresar un valor").trim().required("Favor ingresar un valor"),password_elaborador:h().typeError("Favor ingresar un valor").trim().required("Favor ingresar un valor"),user_representante:h().typeError("Favor ingresar un valor").trim().required("Favor ingresar un valor"),password_representante:h().typeError("Favor ingresar un valor").trim().required("Favor ingresar un valor")}),F=i.exports.createContext({}),ce=({children:r})=>{const{fetcher:t,send:e}=i.exports.useContext(b),[a,,s]=t,n=re(),{modalState:l}=n,m=Y({mode:"all",resolver:Z(pe),defaultValues:{password_elaborador:"",password_representante:"",user_elaborador:"",user_representante:""}}),{reset:x}=m;return i.exports.useEffect(()=>{(()=>{!a&&s&&x(p({},s))})()},[a,s,l]),i.exports.useEffect(()=>{(()=>{l&&e()})()},[l]),o(ee,c(p({},m),{children:o(F.Provider,{value:{modal:n,form:m},children:r})}))},me=()=>{const{modal:r}=i.exports.useContext(F),{setOpen:t}=r;return o(j,{children:o(Q,{title:"Credenciales del SIPE",children:o(te,{onClick:()=>t(),size:"small",children:o(M,{color:"secondary"})})})})},ue=()=>{var a,s,n,l;const{register:r,formState:t}=L(),{errors:e}=t;return u(g,{spacing:1,direction:"column",padding:1,children:[u(g,{component:R,direction:"column",spacing:1,variant:"outlined",padding:1,borderColor:"green",children:[o(D,{variant:"h6",color:"green",fontWeight:"bold",textTransform:"uppercase",children:"Datos del Elaborador"}),o(q,{}),o(f,c(p({label:"Usuario del elaborador"},r("user_elaborador")),{error:!!(e!=null&&e.user_elaborador),helperText:(a=e==null?void 0:e.user_elaborador)==null?void 0:a.message})),o(f,c(p({label:"Contrase\xF1a del elaborador"},r("password_elaborador")),{error:!!(e!=null&&e.password_elaborador),helperText:(s=e==null?void 0:e.password_elaborador)==null?void 0:s.message}))]}),u(g,{component:R,direction:"column",spacing:1,variant:"outlined",padding:1,borderColor:"purple",children:[o(D,{variant:"h6",color:"purple",fontWeight:"bold",textTransform:"uppercase",children:"Datos del Representante Legal"}),o(q,{}),o(f,c(p({label:"Usuario del representante legal"},r("user_representante")),{error:!!(e!=null&&e.user_representante),helperText:(n=e==null?void 0:e.user_representante)==null?void 0:n.message})),o(f,c(p({label:"Contrase\xF1a del representante legal"},r("password_representante")),{error:!!(e!=null&&e.password_representante),helperText:(l=e==null?void 0:e.password_representante)==null?void 0:l.message}))]})]})},ve=()=>{const{id:r,fetcher:t,update:e}=i.exports.useContext(b),[a,,s,n,,l]=t,{modal:m}=i.exports.useContext(F),{modalState:x,setHide:_}=m,[y,A,d,v,,H]=I(),$=L(),{reset:k,handleSubmit:z}=$,C=i.exports.useCallback(()=>{_(),k({password_elaborador:"",password_representante:"",user_elaborador:"",user_representante:""}),H(),l()},[]);return o(j,{children:o(oe,{state:x,title:"Datos para ingresar al sistema SIPE",setHide:C,cancelBotton:{text:"Cerrar",actionFunction:C},type:n&&!d?"ERROR":d&&!n?"SUCCESS":"NORMAL",actionButton:{text:"Guardar",isLoading:y||a,actionFunction:z(w=>{A(`/admin/credenciales-sipe/${r}`,{method:"PUT",data:w}).then(T=>{T.data&&!T.error&&(e&&e(w),C())})})},children:u(g,{spacing:1,direction:"column",children:[!y&&(d||v)?o(B,{variant:"outlined",severity:d?"success":"error",children:(d==null?void 0:d.message)||(v==null?void 0:v.message)}):null,a&&o(ae,{}),!a&&!s&&n&&o(B,{variant:"outlined",severity:"error",children:n.message}),!a&&s&&o(ue,{})]})})})},rr=({id:r,update:t})=>o(ne,{id:r,update:t,children:u(ce,{children:[o(me,{}),o(ve,{})]})});export{rr as default};
