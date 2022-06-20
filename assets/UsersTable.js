import{a as t,F as C,X as u}from"./index.js";import"./BootstrapTooltip.js";import{u as g}from"./useFetchPagination.js";import{N as h}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{C as b}from"./ChipState.js";import"./Modal.js";import"./SelectedCard.js";import{C as l}from"./CustomTable.js";import{u as $}from"./string.helper.js";import{d as N}from"./Visibility.js";import{I as E}from"./IconButton.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useAsyncRetry.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./Grid.js";import"./Typography.js";import"./useModal.js";import"./Error.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./Chip.js";import"./ButtonBase.js";import"./Close2.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./Button.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./FormHelperText.js";import"./react-is.production.min.js";import"./List.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Loader.js";import"./Stack.js";import"./LinearProgress.js";import"./regex.js";const Oo=()=>{var i,m,p,s;const{loading:a,value:o,handlePage:e,page:n,inputRef:d,sendSearch:c,onClearSearch:f}=g("/admin/usuarios");return t(C,{children:t(l,{notFound:(o==null?void 0:o.status)!==201&&t(h,{text:(i=o==null?void 0:o.error)==null?void 0:i.message}),loading:a,title:"Lista de usuarios",size:"small",isSearch:{input:{inputRef:d,onClick:c,onClear:f}},tableHeader:["Ver","Nombre","Correo","Estado","C\xE9dula","Tipo"],tableBody:(p=(m=o==null?void 0:o.data)==null?void 0:m.resultados)==null?void 0:p.map((r,T)=>[t(E,{component:u,to:`/usuario/${r.id}`,color:"primary",children:t(N,{})},`${r.id}-btn`),`${$(r.nombre)}`,`${r.correo||"NO TIENE"}`,t(b,{label:`${r.estado}`,color:r.estado==="ACTIVO"?"success":"error"},`${r.id}-state`),`${r.identificacion||"NO TIENE"}`,`${r.tipo}`]),pagination:{count:(s=o==null?void 0:o.data)==null?void 0:s.paginas,onChange:e,page:n}})})};export{Oo as default};
