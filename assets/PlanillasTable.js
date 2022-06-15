var c=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var d=(r,p)=>{var e={};for(var o in r)b.call(r,o)&&p.indexOf(o)<0&&(e[o]=r[o]);if(r!=null&&c)for(var o of c(r))p.indexOf(o)<0&&F.call(r,o)&&(e[o]=r[o]);return e};import{a as i,F as M,L as S,j as P,ax as m}from"./index.js";import{B as _}from"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{u as T}from"./useFetchPagination.js";import{N as k}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{C as N}from"./ChipState.js";import"./Modal2.js";import"./platform.js";import{C as j}from"./CustomTable.js";import{d as A}from"./Visibility.js";import{I as R}from"./IconButton.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useAsyncRetry.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./Grid.js";import"./extendSxProp.js";import"./Typography.js";import"./useModal.js";import"./Error.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./Chip.js";import"./ButtonBase.js";import"./Close2.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal.js";import"./Paper.js";import"./Button.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./FormHelperText.js";import"./react-is.production.min.js";import"./Menu.js";import"./List.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./Loader.js";import"./Stack.js";import"./LinearProgress.js";const Oo=({route:r})=>{var a,n,s,l;const p=d(T(r,{params:{tipo:"sipe"}}),[]),{loading:e,value:o,handlePage:h,page:f,handleSkipNext:g}=p,{handleSkipPrev:y,sendSearch:u,inputRef:x,onClearSearch:C}=p;return i(M,{children:i(j,{title:"Lista de planillas",size:"small",isSearch:{helperText:r.search("negocio")>-1?"por fecha. Ejm: 2020-01":"por nombre del negocio, RUC o fecha. Ejm: 2020-01",focus:!0,input:{inputRef:x,onClick:u,onClear:C}},notFound:(o==null?void 0:o.status)!==201&&i(k,{text:(a=o==null?void 0:o.error)==null?void 0:a.message}),loading:e,tableHeader:["Acci\xF3n","Nombre del negocio","RUC","Mes de la planilla","Fecha de realizaci\xF3n","Procesada"],tableBody:(s=(n=o==null?void 0:o.data)==null?void 0:n.resultados)==null?void 0:s.map(t=>[i(_,{title:"Ver",placement:"right",children:i(R,{component:S,to:t.estado==="ACEPTADO"?`/planillas/${t.id}`:`/negocios/${t.id_negocio}/planillar`,color:"primary",children:i(A,{})})},`${t.id}-tooltip`),P("span",{style:{textTransform:"uppercase"},children:[t.tipo," ",t.nombre_negocio]},`${t.id}-nombre`),t.ruc,i("span",{style:{textTransform:"uppercase",fontWeight:"bold"},children:m(t.mes,"MMMM - yyyy")},`${t.id}-mes`),m(t.fecha_enviado,"dd/MM/yyyy"),t.fecha_send_sipe?m(t.fecha_send_sipe,"dd/MM/yyyy"):i(N,{label:"NO PROCESADA",color:"error"})]),pagination:{count:(l=o==null?void 0:o.data)==null?void 0:l.paginas,onChange:h,page:f},onSkipPrev:y,onSkipNext:g})})};export{Oo as default};
