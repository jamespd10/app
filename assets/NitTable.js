import{r as i,q as x,A as P,j as e,F as l,a as o}from"./index.js";import{B as c}from"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{N as T}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal2.js";import"./platform.js";import{C as b}from"./CustomTable.js";import{d as A}from"./Delete.js";import{d as R}from"./Edit.js";import{N as $}from"./index41.js";import{I as h}from"./IconButton.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./Grid.js";import"./extendSxProp.js";import"./Typography.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal.js";import"./Paper.js";import"./Button.js";import"./ButtonBase.js";import"./Error.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./FormHelperText.js";import"./react-is.production.min.js";import"./Menu.js";import"./List.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./useAsyncRetry.js";import"./Loader.js";import"./Stack.js";import"./LinearProgress.js";import"./HeaderTitle.js";import"./Divider.js";import"./useFetchPagination.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";const y=i.exports.lazy(()=>x(()=>import("./ModalEdit3.js"),["assets/ModalEdit3.js","assets/index.js","assets/index2.css","assets/index41.js","assets/HeaderTitle.js","assets/Typography.js","assets/extendSxProp.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/useModal.js","assets/Box.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/array.js","assets/upperFirst.js","assets/addNitSchema.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Grow.js","assets/useFetch.js","assets/ContentProvider.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/platform.js","assets/Alert.js","assets/Close.js"])),I=i.exports.lazy(()=>x(()=>import("./ModalDelete3.js"),["assets/ModalDelete3.js","assets/index.js","assets/index2.css","assets/index41.js","assets/HeaderTitle.js","assets/Typography.js","assets/extendSxProp.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/useModal.js","assets/Box.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/useFetch.js"])),jt=()=>{var n,s,a,d;const{loading:f,value:r,handlePage:C,page:S,handleSkipNext:_,handleSkipPrev:E,inputRef:g,sendSearch:u,onClearSearch:F,setNit:m,modalEdit:N,modalDelete:k}=i.exports.useContext($),{authState:z}=i.exports.useContext(P),{tipo:p}=z;return e(l,{children:[o(b,{title:"Lista de NIT",size:"small",isSearch:{helperText:"por RUC o raz\xF3n social",focus:!0,input:{inputRef:g,onClick:u,onClear:F}},tableHeader:["RUC","Raz\xF3n social","NIT","Usuario PLACEF","Contrase\xF1a PLACEF","Correo PLACEF",...p==="Super"?["Editar","Eliminar"]:[]],notFound:(r==null?void 0:r.status)!==201&&o(T,{text:(n=r==null?void 0:r.error)==null?void 0:n.message}),loading:f,tableBody:(a=(s=r==null?void 0:r.data)==null?void 0:s.resultados)==null?void 0:a.map(t=>[e("span",{style:{fontSize:"16px",fontWeight:"bold"},children:[t.ruc,t.dv&&t.dv!==""&&t.dv.length===2?` (${t.dv})`:""]},`${t.id}-ruc`),o("span",{style:{textTransform:"uppercase"},children:t.razon_social},`${t.id}-razon`),o("span",{style:{fontSize:"18px",fontWeight:"bold"},children:t.nit},`${t.id}-nit`),t.usuario,t.contra,t.correo,...p==="Super"?[o(c,{title:"Editar",placement:"left",children:o(h,{color:"inherit",onClick:()=>{m(t.id),N.setOpen()},children:o(R,{})})},`${t.id}-editar`),o(c,{title:"Eliminar",placement:"right",children:o(h,{color:"error",onClick:()=>{m(t.id),k.setOpen()},children:o(A,{})})},`${t.id}-eliminar`)]:[]]),pagination:{count:(d=r==null?void 0:r.data)==null?void 0:d.paginas,onChange:C,page:S},onSkipPrev:E,onSkipNext:_}),r&&r.status===201&&r.data&&p==="Super"&&e(l,{children:[o(i.exports.Suspense,{fallback:o("div",{}),children:o(I,{})}),o(i.exports.Suspense,{fallback:o("div",{}),children:o(y,{})})]})]})};export{jt as default};
