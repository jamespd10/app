var R=Object.defineProperty,T=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var _=(i,o,t)=>o in i?R(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,x=(i,o)=>{for(var t in o||(o={}))O.call(o,t)&&_(i,t,o[t]);if(v)for(var t of v(o))P.call(o,t)&&_(i,t,o[t]);return i},y=(i,o)=>T(i,A(o));import{r as d,b,j as p,a as s}from"./index.js";import{N as j}from"./index41.js";import H from"./Modal.js";import{g as I,o as M,F as w}from"./array.js";import{a as B}from"./addNitSchema.js";import{L as g}from"./Loader.js";import"./BootstrapTooltip.js";import{u as F}from"./useFetch.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./platform.js";import{a as $}from"./useAsyncRetry.js";import{T as k}from"./Typography.js";import{A as D}from"./Alert.js";import"./HeaderTitle.js";import"./Divider.js";import"./useFetchPagination.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./useModal.js";import"./Box.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Button.js";import"./ButtonBase.js";import"./IconButton.js";import"./Error.js";import"./upperFirst.js";import"./Grid.js";import"./Tooltip.js";import"./Grow.js";import"./Close.js";const U=d.exports.lazy(()=>b(()=>import("./FormInputs.js"),["assets/FormInputs.js","assets/TextInput.js","assets/index.js","assets/index4.css","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/array.js","assets/upperFirst.js","assets/Grid.js","assets/Typography.js"])),jt=()=>{var l,f,h;const{modalEdit:i,retry:o,nit:t}=d.exports.useContext(j),{modalState:S,setHide:E}=i,{isLoading:C,send:z,response:r,reset:L}=F(),c=F(),m=I({mode:"all",resolver:M(B)}),{handleSubmit:N}=m,u=()=>{E(),L(),c.reset(),r&&r.status===201&&o()},{loading:n,value:e}=$(async()=>{if(t){const a=await c.send({url:`/admin/nit/${t}`});return a&&a.status===201&&a.data&&m.reset({ruc:a.data.ruc,razon_social:a.data.razon_social,tipo_razon:a.data.tipo_razon,nit:a.data.nit,usuario:a.data.usuario,contra:a.data.contra,correo:a.data.correo,dv:a.data.dv}),a}else return},[t]);return p(H,{state:S,setHide:u,title:"Formulario para editar NIT",cancelBotton:{text:r&&r.status===201?"Cerrar":"Cancelar",actionFunction:u},type:r&&r.status===201?"SUCCESS":r&&r.status!==201?"ERROR":"NORMAL",actionButton:!r||r&&r.status!==201?{text:"Editar",actionFunction:N(async a=>{await z({url:`/admin/nit/${t}/edit`,data:a,method:"POST"})}),isLoading:C}:void 0,children:[n&&s(g,{}),!n&&e&&e.status!==201&&s("div",{children:s(k,{children:(l=e.error)==null?void 0:l.message})}),!n&&e&&e.status===201&&e.data&&p(w,y(x({},m),{children:[r&&s("div",{style:{margin:"0 0 10px 0"},children:p(D,{variant:"outlined",severity:r.status===201?"success":"error",children:[(f=r.data)==null?void 0:f.message,(h=r.error)==null?void 0:h.message]})}),s(d.exports.Suspense,{fallback:s(g,{}),children:s(U,{})})]}))]})};export{jt as default};
