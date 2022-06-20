import{r as p,b as x,A as k,j as e,F as l,a as o}from"./index.js";import{B as c}from"./BootstrapTooltip.js";import{N as z}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{C as P}from"./CustomTable.js";import{d as T}from"./Delete.js";import{d as R}from"./Edit.js";import{N as $}from"./index41.js";import{I as h}from"./IconButton.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./Grid.js";import"./Typography.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./Button.js";import"./ButtonBase.js";import"./Error.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./FormHelperText.js";import"./react-is.production.min.js";import"./List.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Loader.js";import"./Stack.js";import"./LinearProgress.js";import"./HeaderTitle.js";import"./Divider.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";const y=p.exports.lazy(()=>x(()=>import("./ModalEdit2.js"),["assets/ModalEdit2.js","assets/index.js","assets/index7.css","assets/index41.js","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/useModal.js","assets/Box.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/array.js","assets/upperFirst.js","assets/addNitSchema.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/useFetch.js","assets/ContentProvider.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/Alert.js","assets/Close.js"])),I=p.exports.lazy(()=>x(()=>import("./ModalDelete3.js"),["assets/ModalDelete3.js","assets/index.js","assets/index7.css","assets/index41.js","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/useModal.js","assets/Box.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/useFetch.js"])),Ot=()=>{var n,s,a,d;const{loading:f,value:r,handlePage:C,page:S,handleSkipNext:_,handleSkipPrev:u,inputRef:E,sendSearch:g,onClearSearch:A,setNit:m,modalEdit:F,modalDelete:N}=p.exports.useContext($),{authState:b}=p.exports.useContext(k),{tipo:i}=b;return e(l,{children:[o(P,{title:"Lista de NIT",size:"small",isSearch:{helperText:"por RUC o raz\xF3n social",focus:!0,input:{inputRef:E,onClick:g,onClear:A}},tableHeader:["RUC","Raz\xF3n social","NIT","Usuario PLACEF","Contrase\xF1a PLACEF","Correo PLACEF",...i&&["Super","Administrador"].includes(i)?["Editar","Eliminar"]:[]],notFound:(r==null?void 0:r.status)!==201&&o(z,{text:(n=r==null?void 0:r.error)==null?void 0:n.message}),loading:f,tableBody:(a=(s=r==null?void 0:r.data)==null?void 0:s.resultados)==null?void 0:a.map(t=>[e("span",{style:{fontSize:"16px",fontWeight:"bold"},children:[t.ruc,t.dv&&t.dv!==""&&t.dv.length===2?` (${t.dv})`:""]},`${t.id}-ruc`),o("span",{style:{textTransform:"uppercase"},children:t.razon_social},`${t.id}-razon`),o("span",{style:{fontSize:"18px",fontWeight:"bold"},children:t.nit},`${t.id}-nit`),t.usuario,t.contra,t.correo,...i&&["Super","Administrador"].includes(i)?[o(c,{title:"Editar",placement:"left",children:o(h,{color:"inherit",onClick:()=>{m(t.id),F.setOpen()},children:o(R,{})})},`${t.id}-editar`),o(c,{title:"Eliminar",placement:"right",children:o(h,{color:"error",onClick:()=>{m(t.id),N.setOpen()},children:o(T,{})})},`${t.id}-eliminar`)]:[]]),pagination:{count:(d=r==null?void 0:r.data)==null?void 0:d.paginas,onChange:C,page:S},onSkipPrev:u,onSkipNext:_}),r&&r.status===201&&r.data&&i&&["Super","Administrador"].includes(i)&&e(l,{children:[o(p.exports.Suspense,{fallback:o("div",{}),children:o(I,{})}),o(p.exports.Suspense,{fallback:o("div",{}),children:o(y,{})})]})]})};export{Ot as default};
