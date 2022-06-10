import{a as r,F as C,L as b,j as a}from"./index.js";import{B as S}from"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{u}from"./useFetchPagination.js";import{N as F}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{C as N}from"./ChipState.js";import"./Modal2.js";import"./platform.js";import{C as k}from"./CustomTable.js";import{d as P}from"./Visibility.js";import{f as n}from"./date.helper.js";import{I as _}from"./IconButton.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useAsyncRetry.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./Grid.js";import"./extendSxProp.js";import"./Typography.js";import"./useModal.js";import"./Error.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./Chip.js";import"./ButtonBase.js";import"./Close2.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal.js";import"./Paper.js";import"./Button.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./FormHelperText.js";import"./react-is.production.min.js";import"./Menu.js";import"./List.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./Loader.js";import"./Stack.js";import"./LinearProgress.js";import"./index13.js";const qo=({route:s})=>{var i,p,m,e;const{loading:c,value:o,handlePage:d,page:l,handleSkipNext:f,handleSkipPrev:h,sendSearch:g,inputRef:y,onClearSearch:x}=u(s);return r(C,{children:r(k,{title:"Lista de liquidaciones",size:"small",isSearch:{focus:!0,input:{inputRef:y,onClick:g,onClear:x}},notFound:(o==null?void 0:o.status)!==201&&r(F,{text:(i=o==null?void 0:o.error)==null?void 0:i.message}),loading:c,tableHeader:["Acci\xF3n","Nombre","C\xE9dula","Negocio","Fecha de recibido","Procesada"],tableBody:(m=(p=o==null?void 0:o.data)==null?void 0:p.resultados)==null?void 0:m.map(t=>[r(S,{title:"Ver",placement:"right",children:r(_,{component:b,to:`/liquidaciones/${t.id_contrato}`,color:"primary",children:r(P,{})})}),a("span",{style:{textTransform:"uppercase"},children:[t.nombre," ",t.apellido]}),t.identificacion,a("span",{style:{textTransform:"uppercase"},children:[t.tipo," ",t.nombre_negocio]}),n(`${t.fecha_enviado}`,"dd/MM/yyyy"),t.fecha_procesado?n(t.fecha_procesado,"dd/MM/yyyy"):r(N,{label:"NO PROCESADA",color:"error"})]),pagination:{count:(e=o==null?void 0:o.data)==null?void 0:e.paginas,onChange:d,page:l},onSkipPrev:h,onSkipNext:f})})};export{qo as default};
