var E=Object.defineProperty,V=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var D=(t,e,r)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,h=(t,e)=>{for(var r in e||(e={}))R.call(e,r)&&D(t,r,e[r]);if(u)for(var r of u(e))j.call(e,r)&&D(t,r,e[r]);return t},y=(t,e)=>V(t,H(e));var P=(t,e)=>{var r={};for(var o in t)R.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&u)for(var o of u(t))e.indexOf(o)<0&&j.call(t,o)&&(r[o]=t[o]);return r};import{r as n,b as K,j as A,F as L,a}from"./index.js";import{d as M}from"./Print.js";import{C as N,d as $}from"./CustomDatePicker.js";import q from"./CustomSpeedDial.js";import"./BootstrapTooltip.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{B as G}from"./BackgroundLoader.js";import"./Modal.js";import"./SelectedCard.js";import{u as J}from"./useHandlePrint.js";import{a as O,R as Q,b as w}from"./index37.js";import{u as U}from"./useFetch.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./Typography.js";import"./usePickerState.js";import"./Grid.js";import"./IconButton.js";import"./ButtonBase.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./DialogContent.js";import"./Button.js";import"./InputAdornment.js";import"./FormHelperText.js";import"./index7.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Tooltip.js";import"./Popper.js";import"./appendOwnerState.js";import"./Grow.js";import"./Stack.js";import"./useModal.js";import"./Close2.js";import"./Error.js";import"./LoadingButton.js";import"./index15.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./Loader.js";import"./HeaderTitle.js";import"./Divider.js";import"./Box.js";const W=()=>{const g=n.exports.useContext(O),{selectedList:t}=g,e=P(g,["selectedList"]),{filterRadioList:r,setSelectedList:o}=e,{rutaAlternaState:s,set:d}=n.exports.useContext(Q),C=n.exports.useContext(w),{listFechas:p,updateAt:l}=C,m=P(C,["listFechas","updateAt"]),{selectedDate:c,setDate:k,push:F}=m,{send:I,isLoading:T}=U();return{handleSendPrint:async()=>{const z=t.map(i=>({id:i.id})),_=r.flatMap(i=>Object.keys(i)).findIndex(i=>i==="ruta");if(_>-1){const i=Object.assign(h({},r[_]));if(i.ruta&&i.ruta!=="%%"&&i.ruta!==""&&(await I({url:"/admin/ruta-alterna/print-rutas",method:"POST",data:{facturas:z,fecha_rutas:c}})).status===201){k(null);const f=p.findIndex(x=>x.ruta===i.ruta);f>-1?l(f,{ruta:i.ruta,counter:p[f].counter+1}):F({ruta:i.ruta,counter:1});const b=s;for(const[x,[,S]]of Object.entries(Object.entries(s)))t.map(B=>B.id).includes(S.id)&&(b[Number(x)]=y(h({},S),{fecha_ruta:new Date(c||Date.now())}));d([...b]),o([])}}},isLoading:T}},v=n.exports.lazy(()=>K(()=>import("./RutaAlternaPrintView2.js"),["assets/RutaAlternaPrintView2.js","assets/string.helper.js","assets/index.js","assets/index5.css","assets/regex.js","assets/date.helper.js","assets/index13.js","assets/index37.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/useFetch.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/HeaderTitle.js","assets/Divider.js","assets/Box.js","assets/array.helper.js"])),nr=()=>{const{selectedDate:t,setDate:e}=n.exports.useContext(w),{selectedList:r}=n.exports.useContext(O),{handleSendPrint:o,isLoading:s}=W(),{printing:d,handlePrint:p,elementRef:l}=J({pageStyle:"@page { margin: 10px 10px 10px 10px !important; size: legal; }",onAfterPrint:async()=>await o()});return A(L,{children:[a(G,{open:d||s}),a(N,{label:"Seleccionar fecha",onChange:m=>e(m),value:t,cancelText:t?"OK":"Cerrar",okText:"",children:(m,c)=>r.length>0?a(q,{titles:["Poner fecha","Imprimir"],icons:[$,M],onPresses:[()=>c(!0),()=>p()]}):a(L,{})}),a("div",{style:{display:"none"},children:a("div",{ref:l,children:r.length>0&&A(n.exports.Suspense,{fallback:a("div",{}),children:[a(v,{}),a(v,{})]})})})]})};export{nr as default};
