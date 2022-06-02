var E=Object.defineProperty,V=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var D=(t,r,e)=>r in t?E(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,h=(t,r)=>{for(var e in r||(r={}))R.call(r,e)&&D(t,e,r[e]);if(u)for(var e of u(r))j.call(r,e)&&D(t,e,r[e]);return t},y=(t,r)=>V(t,q(r));var P=(t,r)=>{var e={};for(var o in t)R.call(t,o)&&r.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&u)for(var o of u(t))r.indexOf(o)<0&&j.call(t,o)&&(e[o]=t[o]);return e};import{r as n,q as H,j as A,F as L,a}from"./index.js";import{d as K}from"./Print.js";import{C as M,d as N}from"./CustomDatePicker.js";import $ from"./CustomSpeedDial.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import{B as G}from"./BackgroundLoader.js";import"./Modal2.js";import"./platform.js";import{u as J}from"./useHandlePrint.js";import{a as O,R as Q,b as w}from"./index37.js";import{u as U}from"./useFetch.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./Typography.js";import"./extendSxProp.js";import"./usePickerState.js";import"./Grid.js";import"./IconButton.js";import"./ButtonBase.js";import"./Button.js";import"./Backdrop.js";import"./InputAdornment.js";import"./FormHelperText.js";import"./index7.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./Stack.js";import"./useModal.js";import"./Close2.js";import"./Error.js";import"./Modal.js";import"./Paper.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./constants.js";import"./Loader.js";import"./HeaderTitle.js";import"./Divider.js";import"./Box.js";const W=()=>{const g=n.exports.useContext(O),{selectedList:t}=g,r=P(g,["selectedList"]),{filterRadioList:e,setSelectedList:o}=r,{rutaAlternaState:s,set:d}=n.exports.useContext(Q),C=n.exports.useContext(w),{listFechas:p,updateAt:l}=C,m=P(C,["listFechas","updateAt"]),{selectedDate:c,setDate:k,push:F}=m,{send:I,isLoading:T}=U();return{handleSendPrint:async()=>{const z=t.map(i=>({id:i.id})),_=e.flatMap(i=>Object.keys(i)).findIndex(i=>i==="ruta");if(_>-1){const i=Object.assign(h({},e[_]));if(i.ruta&&i.ruta!=="%%"&&i.ruta!==""&&(await I({url:"/admin/ruta-alterna/print-rutas",method:"POST",data:{facturas:z,fecha_rutas:c}})).status===201){k(null);const f=p.findIndex(x=>x.ruta===i.ruta);f>-1?l(f,{ruta:i.ruta,counter:p[f].counter+1}):F({ruta:i.ruta,counter:1});const S=s;for(const[x,[,b]]of Object.entries(Object.entries(s)))t.map(B=>B.id).includes(b.id)&&(S[Number(x)]=y(h({},b),{fecha_ruta:new Date(c||Date.now())}));d([...S]),o([])}}},isLoading:T}},v=n.exports.lazy(()=>H(()=>import("./RutaAlternaPrintView2.js"),["assets/RutaAlternaPrintView2.js","assets/string.helper.js","assets/index.js","assets/index.css","assets/regex.js","assets/date.helper.js","assets/index13.js","assets/index14.js","assets/index37.js","assets/jwt-decode.esm.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/constants.js","assets/useFetch.js","assets/Loader.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/HeaderTitle.js","assets/Divider.js","assets/Box.js","assets/array.helper.js"])),ee=()=>{const{selectedDate:t,setDate:r}=n.exports.useContext(w),{selectedList:e}=n.exports.useContext(O),{handleSendPrint:o,isLoading:s}=W(),{printing:d,handlePrint:p,elementRef:l}=J({pageStyle:"@page { margin: 10px 10px 10px 10px !important; size: legal; }",onAfterPrint:async()=>await o()});return A(L,{children:[a(G,{open:d||s}),a(M,{label:"Seleccionar fecha",onChange:m=>r(m),value:t,cancelText:t?"OK":"Cerrar",okText:"",children:(m,c)=>e.length>0?a($,{titles:["Poner fecha","Imprimir"],icons:[N,K],onPresses:[()=>c(!0),()=>p()]}):a(L,{})}),a("div",{style:{display:"none"},children:a("div",{ref:l,children:e.length>0&&A(n.exports.Suspense,{fallback:a("div",{}),children:[a(v,{}),a(v,{})]})})})]})};export{ee as default};
