var b=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var k=(t,a)=>{var s={};for(var e in t)O.call(t,e)&&a.indexOf(e)<0&&(s[e]=t[e]);if(t!=null&&b)for(var e of b(t))a.indexOf(e)<0&&P.call(t,e)&&(s[e]=t[e]);return s};import{r as m,a as o,F as A,b as y,ab as B,A as R,j as E,X as T}from"./index.js";import{d as w}from"./Visibility.js";import{B as N}from"./BootstrapTooltip.js";import{N as D}from"./NotFoundResults.js";import{C as F}from"./CustomTable.js";import{N as $}from"./index5.js";import{d as L}from"./DeleteForever.js";import{C as I}from"./ChipState.js";import{u as j}from"./useFetch.js";import{I as _}from"./IconButton.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./Grid.js";import"./Typography.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./FormHelperText.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Paper.js";import"./List.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./ButtonBase.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Button.js";import"./Loader.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Modal.js";import"./Close2.js";import"./LoadingButton.js";import"./Error.js";import"./SelectedCard.js";import"./Stack.js";import"./LinearProgress.js";import"./HeaderTitle.js";import"./Divider.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useHttpService.js";import"./useFetchPagination.js";import"./useList.js";import"./usePrevious.js";import"./Chip.js";const V=()=>{const n=m.exports.useContext($),{negociosAsociados:t}=n,a=k(n,["negociosAsociados"]),{setAsociados:s}=a,{send:e,isLoading:r}=j();return{handleCheck:async({id:c,id_cliente:f,name:l})=>{if((await e({url:`/admin/negocios/${c}/${f}/mark`,method:"POST"})).status===201&&t){const u=t.findIndex(h=>h.id===c),p=[...t];p[u][l]=!Boolean(Number(p[u][l])),s([...p])}},isLoading:r}},z=({id:t,id_cliente:a,name:s,label:e,color:r})=>{const{handleCheck:d,isLoading:n}=V();return o(A,{children:o(I,{label:e,color:r,onClick:()=>d({id:t,id_cliente:a,name:s}),loading:n})})},H=m.exports.lazy(()=>y(()=>import("./ModalDelete2.js"),["assets/ModalDelete2.js","assets/Loader.js","assets/index.js","assets/index3.css","assets/Grid.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useFetch.js","assets/useHttpService.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/SelectedCard.js","assets/index5.js","assets/HeaderTitle.js","assets/Divider.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/NotFoundResults.js","assets/useFetchPagination.js","assets/useList.js","assets/usePrevious.js","assets/Stack.js"])),Yo=()=>{var h,g,C,S;const{id:t}=B(),{authState:a}=m.exports.useContext(R),{tipo:s}=a,{loading:e,value:r,handlePage:d,page:n,handleSkipNext:c,handleSkipPrev:f,inputRef:l,sendSearch:x,onClearSearch:u,handleShowDelete:p}=m.exports.useContext($);return E(A,{children:[o(F,{title:"Lista de negocios asociados",size:"small",isSearch:{focus:!0,input:{inputRef:l,onClick:x,onClear:u}},tableHeader:["Ver","Nombre del negocio","Ruta","Operando",...s==="Super"?["Eliminar"]:[]],notFound:(r==null?void 0:r.status)!==201&&o(D,{text:(h=r==null?void 0:r.error)==null?void 0:h.message}),loading:e,tableBody:(C=(g=r==null?void 0:r.data)==null?void 0:g.resultados)==null?void 0:C.map(i=>[o(N,{title:"Ver",placement:"right",children:o(_,{component:T,to:`/negocios/${i.id}/${t}`,color:"primary",children:o(w,{})})},`${i.id}-tooltip`),o("div",{style:{overflow:"hidden",maxWidth:"300px",textOverflow:"ellipsis"},children:o("span",{style:{textTransform:"uppercase"},children:i.nombre_negocio})},`${i.id}-nombre`),o("span",{style:{textTransform:"uppercase"},children:i.ruta},`${i.id}-ruta`),o(z,{id:i.id,id_cliente:Number(t),name:"cerrado",label:Boolean(Number(i.cerrado))?"CERRADO":"OPERANDO",color:Boolean(Number(i.cerrado))?"error":"success"},`${i.id}-operando`),...s==="Super"?[o(N,{title:"Eliminar",placement:"left",children:o(_,{color:"error",onClick:()=>p(i.id),children:o(L,{color:"error"})})},`${i.id}-remover`)]:[]]),pagination:{count:(S=r==null?void 0:r.data)==null?void 0:S.paginas,onChange:d,page:n},onSkipPrev:f,onSkipNext:c}),s==="Super"&&o(m.exports.Suspense,{fallback:o("div",{}),children:o(H,{})})]})};export{Yo as default};
