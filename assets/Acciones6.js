var z=Object.defineProperty,B=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var S=(t,r,e)=>r in t?z(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,h=(t,r)=>{for(var e in r||(r={}))b.call(r,e)&&S(t,e,r[e]);if(c)for(var e of c(r))D.call(r,e)&&S(t,e,r[e]);return t},R=(t,r)=>B(t,E(r));var j=(t,r)=>{var e={};for(var o in t)b.call(t,o)&&r.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&c)for(var o of c(t))r.indexOf(o)<0&&D.call(t,o)&&(e[o]=t[o]);return e};import{r as n,q as V,j as y,F as A,a}from"./index.js";import{d as q}from"./Print.js";import{C as H,d as K}from"./CustomDatePicker.js";import M from"./CustomSpeedDial.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{B as N}from"./BackgroundLoader.js";import"./Modal2.js";import"./platform.js";import{u as $}from"./useHandlePrint.js";import{a as v,R as G,b as O}from"./index31.js";import{u as J}from"./useFetch.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./Typography.js";import"./extendSxProp.js";import"./usePickerState.js";import"./Grid.js";import"./IconButton.js";import"./ButtonBase.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Button.js";import"./InputAdornment.js";import"./FormHelperText.js";import"./index7.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Grow.js";import"./Stack.js";import"./useModal.js";import"./Close2.js";import"./Error.js";import"./index15.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./Loader.js";import"./HeaderTitle.js";import"./Divider.js";import"./Box.js";const Q=()=>{const{selectedList:t,filterRadioList:r,setSelectedList:e}=n.exports.useContext(v),{rutaAlternaState:o,set:u}=n.exports.useContext(G),P=n.exports.useContext(O),{listFechas:s,updateAt:d,push:l}=P,p=j(P,["listFechas","updateAt","push"]),{selectedDate:m,setDate:w}=p,{send:k,isLoading:F}=J();return{handleSendPrint:async()=>{const I=t.map(i=>({id:i.id})),g=r.flatMap(i=>Object.keys(i)).findIndex(i=>i==="ruta");if(g>-1){const i=Object.assign(h({},r[g]));if(i.ruta&&i.ruta!=="%%"&&i.ruta!==""&&(await k({url:"/admin/ruta-proformas/print-rutas",method:"POST",data:{proformas:I,fecha_rutas:m}})).status===201){w(null);const f=s.findIndex(x=>x.ruta===i.ruta);f>-1?d(f,{ruta:i.ruta,counter:s[f].counter+1}):l({ruta:i.ruta,counter:1});const C=o;for(const[x,[,_]]of Object.entries(Object.entries(o)))t.map(T=>T.id).includes(_.id)&&(C[Number(x)]=R(h({},_),{fecha_ruta:new Date(m||Date.now())}));u([...C]),e([])}}},isLoading:F}},L=n.exports.lazy(()=>V(()=>import("./RutaAlternaPrintView.js"),["assets/RutaAlternaPrintView.js","assets/string.helper.js","assets/index.js","assets/index4.css","assets/regex.js","assets/date.helper.js","assets/index13.js","assets/index31.js","assets/jwt-decode.esm.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/useFetch.js","assets/Loader.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/HeaderTitle.js","assets/Divider.js","assets/Box.js","assets/array.helper.js"])),rr=()=>{const{selectedList:t}=n.exports.useContext(v),{selectedDate:r,setDate:e}=n.exports.useContext(O),{handleSendPrint:o,isLoading:u}=Q(),{printing:s,handlePrint:d,elementRef:l}=$({pageStyle:"@page { margin: 10px 10px 10px 10px !important; size: legal; }",onAfterPrint:async()=>await o()});return y(A,{children:[a(N,{open:s||u}),a(H,{label:"Seleccionar fecha",onChange:p=>e(p),value:r,cancelText:r?"OK":"Cerrar",okText:"",children:(p,m)=>t.length>0?a(M,{titles:["Poner fecha","Imprimir"],icons:[K,q],onPresses:[()=>m(!0),()=>d()]}):a(A,{})}),a("div",{style:{display:"none"},children:a("div",{ref:l,children:t.length>0&&y(n.exports.Suspense,{fallback:a("div",{}),children:[a(L,{}),a(L,{})]})})})]})};export{rr as default};
