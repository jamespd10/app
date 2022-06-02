var A=Object.defineProperty,y=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var c=(i,r,o)=>r in i?A(i,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[r]=o,l=(i,r)=>{for(var o in r||(r={}))L.call(r,o)&&c(i,o,r[o]);if(d)for(var o of d(r))N.call(r,o)&&c(i,o,r[o]);return i},u=(i,r)=>y(i,C(r));import{r as s,q as R,a,j as f}from"./index.js";import{N as E}from"./index41.js";import{M}from"./Modal2.js";import{f as O,F as P,o as j}from"./array.js";import{a as z}from"./addNitSchema.js";import{L as H}from"./Loader.js";import"./BootstrapTooltip.js";import{u as I}from"./useFetch.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./platform.js";import{A as T}from"./Alert.js";import"./HeaderTitle.js";import"./Typography.js";import"./extendSxProp.js";import"./Divider.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./constants.js";import"./useModal.js";import"./Box.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./Backdrop.js";import"./Modal.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Button.js";import"./upperFirst.js";import"./Grid.js";import"./Tooltip.js";import"./Grow.js";import"./Close.js";const b=s.exports.lazy(()=>R(()=>import("./FormInputs.js"),["assets/FormInputs.js","assets/TextInput.js","assets/index.js","assets/index.css","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Menu.js","assets/Modal.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/array.js","assets/upperFirst.js","assets/Grid.js","assets/extendSxProp.js"])),x={ruc:"",contra:"",correo:"",dv:"",nit:"",razon_social:"",tipo_razon:"",usuario:""},Et=()=>{var p,n;const{modalAdd:i,retry:r}=s.exports.useContext(E),{modalState:o,setHide:h}=i,{isLoading:v,send:_,response:t,reset:g}=I(),e=O({mode:"all",resolver:j(z),defaultValues:x}),{handleSubmit:F}=e,m=()=>{h(),g(),e.reset(x),t&&t.status===201&&r()};return a(M,{state:o,setHide:m,title:"Formulario para agregar NIT",cancelBotton:{text:t&&t.status===201?"Cerrar":"Cancelar",actionFunction:m},type:t&&t.status===201?"SUCCESS":t&&t.status!==201?"ERROR":"NORMAL",actionButton:!t||t&&t.status!==201?{text:"Agregar",actionFunction:F(async S=>{await _({url:"/admin/nit/add",data:S,method:"POST"})}),isLoading:v}:void 0,children:f(P,u(l({},e),{children:[t&&a("div",{style:{margin:"0 0 10px 0"},children:f(T,{variant:"outlined",severity:t.status===201?"success":"error",children:[(p=t.data)==null?void 0:p.message,(n=t.error)==null?void 0:n.message]})}),a(s.exports.Suspense,{fallback:a(H,{}),children:a(b,{})})]}))})};export{Et as default};
