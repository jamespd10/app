var R=Object.defineProperty,T=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var _=(a,o,t)=>o in a?R(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,x=(a,o)=>{for(var t in o||(o={}))O.call(o,t)&&_(a,t,o[t]);if(v)for(var t of v(o))P.call(o,t)&&_(a,t,o[t]);return a},y=(a,o)=>T(a,A(o));import{r as d,b,j as n,a as s}from"./index.js";import{N as j}from"./index15.js";import H from"./Modal.js";import{a as I,F as M,o as w}from"./yup.module.js";import{a as B}from"./addNitSchema.js";import{L as F}from"./Loader.js";import"./BootstrapTooltip.js";import{u as S}from"./useFetch.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./SelectedCard.js";import{_ as $}from"./useAsync.js";import{T as k}from"./Typography.js";import{A as D}from"./Alert.js";import"./HeaderTitle.js";import"./Divider.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./object.helper.js";import"./useModal.js";import"./Box.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./CheckCircle.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./CircularProgress.js";import"./array.js";import"./upperFirst.js";import"./Grid.js";import"./Tooltip.js";import"./Popper.js";import"./Grow.js";import"./Close.js";const U=d.exports.lazy(()=>b(()=>import("./FormInputs.js"),["assets/FormInputs.js","assets/TextInput.js","assets/index.js","assets/index4.css","assets/TextField.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/yup.module.js","assets/Grid.js","assets/Typography.js"])),kt=()=>{var l,f,h;const{modalEdit:a,retry:o,nit:t}=d.exports.useContext(j),{modalState:g,setHide:E}=a,{isLoading:C,send:z,response:r,reset:L}=S(),c=S(),m=I({mode:"all",resolver:w(B)}),{handleSubmit:N}=m,u=()=>{E(),L(),c.reset(),r&&r.status===201&&o()},{loading:p,value:e}=$(async()=>{if(t){const i=await c.send({url:`/admin/nit/${t}`});return i&&i.status===201&&i.data&&m.reset({ruc:i.data.ruc,razon_social:i.data.razon_social,tipo_razon:i.data.tipo_razon,nit:i.data.nit,usuario:i.data.usuario,contra:i.data.contra,correo:i.data.correo,dv:i.data.dv}),i}else return},[t]);return n(H,{state:g,setHide:u,title:"Formulario para editar NIT",cancelBotton:{text:r&&r.status===201?"Cerrar":"Cancelar",actionFunction:u},type:r&&r.status===201?"SUCCESS":r&&r.status!==201?"ERROR":"NORMAL",actionButton:!r||r&&r.status!==201?{text:"Editar",actionFunction:N(async i=>{await z({url:`/admin/nit/${t}/edit`,data:i,method:"POST"})}),isLoading:C}:void 0,children:[p&&s(F,{}),!p&&e&&e.status!==201&&s("div",{children:s(k,{children:(l=e.error)==null?void 0:l.message})}),!p&&e&&e.status===201&&e.data&&n(M,y(x({},m),{children:[r&&s("div",{style:{margin:"0 0 10px 0"},children:n(D,{variant:"outlined",severity:r.status===201?"success":"error",children:[(f=r.data)==null?void 0:f.message,(h=r.error)==null?void 0:h.message]})}),s(d.exports.Suspense,{fallback:s(F,{}),children:s(U,{})})]}))]})};export{kt as default};
