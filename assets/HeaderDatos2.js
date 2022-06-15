var c=Object.defineProperty;var p=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var s=(o,t,i)=>t in o?c(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i,l=(o,t)=>{for(var i in t||(t={}))g.call(t,i)&&s(o,i,t[i]);if(p)for(var i of p(t))h.call(t,i)&&s(o,i,t[i]);return o};import{r as n,q as u,a as r,F as f,j as e}from"./index.js";import{L as d}from"./Loader.js";import{L as x}from"./index39.js";import{P as y}from"./Paper.js";import{T as a}from"./Typography.js";import{D as m}from"./Divider.js";import"./Grid.js";import"./extendSxProp.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./jwt-decode.esm.js";import"./useHttpService.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Modal2.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal.js";import"./Button.js";import"./ButtonBase.js";import"./IconButton.js";import"./Error.js";import"./platform.js";import"./useStepper.js";import"./array.js";import"./upperFirst.js";import"./useFetch.js";import"./agregarSchema.js";import"./regex.js";import"./Lazy.js";import"./useLocalStorage.js";const v=n.exports.lazy(()=>u(()=>import("./TotalesAlert.js"),["assets/TotalesAlert.js","assets/string.helper.js","assets/index.js","assets/index2.css","assets/regex.js","assets/Typography.js","assets/extendSxProp.js","assets/Divider.js","assets/Alert.js","assets/createSvgIcon.js","assets/Close.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/useIsFocusVisible.js"])),st=()=>{var i;const{loading:o,value:t}=n.exports.useContext(x);return r(f,{children:e(y,{variant:"outlined",sx:{p:1,mt:1},children:[o&&!t&&r(d,{}),!o&&t&&t.status!==201&&r("div",{style:{display:"flex",width:"100%",justifyContent:"center",textAlign:"center"},children:r(a,{variant:"h5",children:(i=t.error)==null?void 0:i.message})}),!o&&t&&t.status===201&&t.data&&e("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[e(a,{variant:"h5",style:{fontWeight:"bold",color:"green",textTransform:"uppercase"},children:[t.data.tipo," ",t.data.nombre_negocio]}),r(m,{style:{marginTop:10,marginBottom:10}}),e(a,{variant:"subtitle1",children:[r("strong",{children:"Raz\xF3n social:"})," ",r("span",{style:{textTransform:"uppercase"},children:t.data.nom_cliente})]}),r(m,{style:{marginTop:10,marginBottom:10}}),e(a,{variant:"subtitle1",children:[r("strong",{children:"RUC:"})," ",t.data.ruc," ",r("strong",{style:{marginLeft:10},children:"DV:"})," ",t.data.dv]}),r(m,{style:{marginTop:10,marginBottom:10}}),e(a,{variant:"subtitle1",children:[r("strong",{children:"Representante:"})," ",e("span",{style:{textTransform:"uppercase"},children:[t.data.nombre_rep," ",t.data.apellido_rep]})]}),r(m,{style:{marginTop:10,marginBottom:10}}),e(a,{variant:"subtitle1",children:[r("strong",{children:"Ruta:"})," ",t.data.ruta]}),r(m,{style:{marginTop:10,marginBottom:10}}),r(n.exports.Suspense,{fallback:r(d,{}),children:r(v,l({},t.data))})]})]})})};export{st as default};
