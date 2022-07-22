var b=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var k=(t,m)=>{var p={};for(var i in t)O.call(t,i)&&m.indexOf(i)<0&&(p[i]=t[i]);if(t!=null&&b)for(var i of b(t))m.indexOf(i)<0&&P.call(t,i)&&(p[i]=t[i]);return p};import{r as n,a as o,F as A,b as y,aq as B,A as R,j as E,a8 as T}from"./index.js";import{d as w}from"./Visibility.js";import{B as N}from"./BootstrapTooltip.js";import{N as D}from"./NotFoundResults.js";import{C as F}from"./CustomTable.js";import{N as $}from"./index9.js";import{d as L}from"./DeleteForever.js";import{C as I}from"./ChipState.js";import{u as j}from"./useFetch.js";import{I as _}from"./IconButton.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useId.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./Grid.js";import"./Typography.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./useFormControl.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./Paper.js";import"./List.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./Box.js";import"./InputAdornment.js";import"./CircularProgress.js";import"./RadioGroup.js";import"./SwitchBase.js";import"./ButtonBase.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Button.js";import"./Loader.js";import"./SpeedDial.module.js";import"./Modal.js";import"./Close2.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./ModalTransition.js";import"./Warning.js";import"./Error.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./SelectedCard.js";import"./Stack.js";import"./LinearProgress.js";import"./HeaderTitle.js";import"./Divider.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useHttpService.js";import"./useFetchPagination.js";import"./useList.js";import"./usePrevious.js";import"./object.helper.js";import"./useModal.js";import"./Chip.js";const V=()=>{const s=n.exports.useContext($),{negociosAsociados:t}=s,m=k(s,["negociosAsociados"]),{setAsociados:p}=m,{send:i,isLoading:r}=j();return{handleCheck:async({id:c,id_cliente:f,name:l})=>{if((await i({url:`/admin/negocios/${c}/${f}/mark`,method:"POST"})).status===201&&t){const u=t.findIndex(h=>h.id===c),a=[...t];a[u][l]=!Boolean(Number(a[u][l])),p([...a])}},isLoading:r}},z=({id:t,id_cliente:m,name:p,label:i,color:r})=>{const{handleCheck:d,isLoading:s}=V();return o(A,{children:o(I,{label:i,color:r,onClick:()=>d({id:t,id_cliente:m,name:p}),loading:s})})},q=n.exports.lazy(()=>y(()=>import("./ModalDelete3.js"),["assets/ModalDelete3.js","assets/Loader.js","assets/index.js","assets/index8.css","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useControlled.js","assets/useId.js","assets/useFetch.js","assets/useHttpService.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/index9.js","assets/HeaderTitle.js","assets/Divider.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/NotFoundResults.js","assets/useFetchPagination.js","assets/useList.js","assets/usePrevious.js","assets/object.helper.js","assets/useModal.js","assets/Stack.js"])),lt=()=>{var h,g,C,S;const{id:t}=B(),{authState:m}=n.exports.useContext(R),{tipo:p}=m,{loading:i,value:r,handlePage:d,page:s,handleSkipNext:c,handleSkipPrev:f,inputRef:l,sendSearch:x,onClearSearch:u,handleShowDelete:a}=n.exports.useContext($);return E(A,{children:[o(F,{title:"Lista de negocios asociados",size:"small",isSearch:{focus:!0,input:{inputRef:l,onClick:x,onClear:u}},tableHeader:["Ver","Nombre del negocio","Ruta","Operando",...p==="Super"?["Eliminar"]:[]],notFound:(r==null?void 0:r.status)!==201&&o(D,{text:(h=r==null?void 0:r.error)==null?void 0:h.message}),loading:i,tableBody:(C=(g=r==null?void 0:r.data)==null?void 0:g.resultados)==null?void 0:C.map(e=>[o(N,{title:"Ver",placement:"right",children:o(_,{component:T,to:`/negocios/${e.id}/${t}`,color:"primary",children:o(w,{})})},`${e.id}-tooltip`),o("div",{style:{overflow:"hidden",maxWidth:"300px",textOverflow:"ellipsis"},children:o("span",{style:{textTransform:"uppercase"},children:e.nombre_negocio})},`${e.id}-nombre`),o("span",{style:{textTransform:"uppercase"},children:e.ruta},`${e.id}-ruta`),o(z,{id:e.id,id_cliente:Number(t),name:"cerrado",label:Boolean(Number(e.cerrado))?"CERRADO":"OPERANDO",color:Boolean(Number(e.cerrado))?"error":"success"},`${e.id}-operando`),...p==="Super"?[o(N,{title:"Eliminar",placement:"left",children:o(_,{color:"error",onClick:()=>a(e.id),children:o(L,{color:"error"})})},`${e.id}-remover`)]:[]]),pagination:{count:(S=r==null?void 0:r.data)==null?void 0:S.paginas,onChange:d,page:s},onSkipPrev:f,onSkipNext:c}),p==="Super"&&o(n.exports.Suspense,{fallback:o("div",{}),children:o(q,{})})]})};export{lt as default};
