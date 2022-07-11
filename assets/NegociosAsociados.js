var b=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var k=(t,p)=>{var s={};for(var e in t)O.call(t,e)&&p.indexOf(e)<0&&(s[e]=t[e]);if(t!=null&&b)for(var e of b(t))p.indexOf(e)<0&&P.call(t,e)&&(s[e]=t[e]);return s};import{r as n,a as o,F as A,b as y,ap as B,A as R,j as E,a8 as T}from"./index.js";import{d as w}from"./Visibility.js";import{B as N}from"./BootstrapTooltip.js";import{N as D}from"./NotFoundResults.js";import{C as F}from"./CustomTable.js";import{N as $}from"./index9.js";import{d as L}from"./DeleteForever.js";import{C as I}from"./ChipState.js";import{u as j}from"./useFetch.js";import{I as _}from"./IconButton.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./Grid.js";import"./Typography.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Paper.js";import"./List.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./Box.js";import"./InputAdornment.js";import"./CircularProgress.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./ButtonBase.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Button.js";import"./Loader.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Modal.js";import"./Close2.js";import"./ModalTransition.js";import"./CheckCircle.js";import"./DialogContent.js";import"./LoadingButton.js";import"./SelectedCard.js";import"./Stack.js";import"./LinearProgress.js";import"./HeaderTitle.js";import"./Divider.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useHttpService.js";import"./useFetchPagination.js";import"./useList.js";import"./usePrevious.js";import"./object.helper.js";import"./Chip.js";const V=()=>{const a=n.exports.useContext($),{negociosAsociados:t}=a,p=k(a,["negociosAsociados"]),{setAsociados:s}=p,{send:e,isLoading:r}=j();return{handleCheck:async({id:c,id_cliente:f,name:l})=>{if((await e({url:`/admin/negocios/${c}/${f}/mark`,method:"POST"})).status===201&&t){const u=t.findIndex(h=>h.id===c),m=[...t];m[u][l]=!Boolean(Number(m[u][l])),s([...m])}},isLoading:r}},z=({id:t,id_cliente:p,name:s,label:e,color:r})=>{const{handleCheck:d,isLoading:a}=V();return o(A,{children:o(I,{label:e,color:r,onClick:()=>d({id:t,id_cliente:p,name:s}),loading:a})})},H=n.exports.lazy(()=>y(()=>import("./ModalDelete2.js"),["assets/ModalDelete2.js","assets/Loader.js","assets/index.js","assets/index11.css","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useFetch.js","assets/useHttpService.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/index9.js","assets/HeaderTitle.js","assets/Divider.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/NotFoundResults.js","assets/useFetchPagination.js","assets/useList.js","assets/usePrevious.js","assets/object.helper.js","assets/Stack.js"])),rt=()=>{var h,g,C,S;const{id:t}=B(),{authState:p}=n.exports.useContext(R),{tipo:s}=p,{loading:e,value:r,handlePage:d,page:a,handleSkipNext:c,handleSkipPrev:f,inputRef:l,sendSearch:x,onClearSearch:u,handleShowDelete:m}=n.exports.useContext($);return E(A,{children:[o(F,{title:"Lista de negocios asociados",size:"small",isSearch:{focus:!0,input:{inputRef:l,onClick:x,onClear:u}},tableHeader:["Ver","Nombre del negocio","Ruta","Operando",...s==="Super"?["Eliminar"]:[]],notFound:(r==null?void 0:r.status)!==201&&o(D,{text:(h=r==null?void 0:r.error)==null?void 0:h.message}),loading:e,tableBody:(C=(g=r==null?void 0:r.data)==null?void 0:g.resultados)==null?void 0:C.map(i=>[o(N,{title:"Ver",placement:"right",children:o(_,{component:T,to:`/negocios/${i.id}/${t}`,color:"primary",children:o(w,{})})},`${i.id}-tooltip`),o("div",{style:{overflow:"hidden",maxWidth:"300px",textOverflow:"ellipsis"},children:o("span",{style:{textTransform:"uppercase"},children:i.nombre_negocio})},`${i.id}-nombre`),o("span",{style:{textTransform:"uppercase"},children:i.ruta},`${i.id}-ruta`),o(z,{id:i.id,id_cliente:Number(t),name:"cerrado",label:Boolean(Number(i.cerrado))?"CERRADO":"OPERANDO",color:Boolean(Number(i.cerrado))?"error":"success"},`${i.id}-operando`),...s==="Super"?[o(N,{title:"Eliminar",placement:"left",children:o(_,{color:"error",onClick:()=>m(i.id),children:o(L,{color:"error"})})},`${i.id}-remover`)]:[]]),pagination:{count:(S=r==null?void 0:r.data)==null?void 0:S.paginas,onChange:d,page:a},onSkipPrev:f,onSkipNext:c}),s==="Super"&&o(n.exports.Suspense,{fallback:o("div",{}),children:o(H,{})})]})};export{rt as default};
