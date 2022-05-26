import{a as r,F as x,L as S,j as e}from"./index.js";import{B as b}from"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{u as y}from"./useFetchPagination.js";import{N}from"./NotFoundResults.js";import"./ContentProvider.js";import{C as k}from"./ChipState.js";import"./Modal2.js";import"./platform.js";import{C as F}from"./CustomTable.js";import{d as P}from"./Visibility.js";import{f as T}from"./date.helper.js";import{I as u}from"./IconButton.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./useAsyncRetry.js";import"./tslib.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./constants.js";import"./object.helper.js";import"./Grid.js";import"./extendSxProp.js";import"./Typography.js";import"./useModal.js";import"./Error.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./Chip.js";import"./ButtonBase.js";import"./Close2.js";import"./DialogTitle.js";import"./Backdrop.js";import"./Modal.js";import"./Paper.js";import"./Button.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./react-is.production.min.js";import"./Menu.js";import"./List.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./Loader.js";import"./Stack.js";import"./index13.js";import"./index14.js";const Do=({route:n})=>{var i,p,m,a;const{loading:s,value:o,handlePage:c,page:d,handleSkipNext:f,handleSkipPrev:l,inputRef:h,sendSearch:g,onClearSearch:C}=y(n);return r(x,{children:r(F,{title:"Lista de contratos",size:"small",isSearch:{focus:!0,input:{inputRef:h,onClick:g,onClear:C}},notFound:(o==null?void 0:o.status)!==201&&r(N,{text:(i=o==null?void 0:o.error)==null?void 0:i.message}),loading:s,tableHeader:["Acci\xF3n","Nombre","C\xE9dula","Negocio","Tipo de contrato","Procesado"],tableBody:(m=(p=o==null?void 0:o.data)==null?void 0:p.resultados)==null?void 0:m.map(t=>[r(b,{title:"Ver",placement:"right",children:r(u,{component:S,to:`/contratos/${t.id}`,color:"primary",children:r(P,{})})}),e("span",{style:{textTransform:"uppercase"},children:[t.nombre," ",t.apellido]}),t.identificacion,e("span",{style:{textTransform:"uppercase"},children:[t.tipo," ",t.nombre_negocio]}),t.tipo_contrato,t.fecha_procesado?T(t.fecha_procesado,"dd/MM/yyyy"):r(k,{label:"NO PROCESADO",color:"error"})]),pagination:{count:(a=o==null?void 0:o.data)==null?void 0:a.paginas,onChange:c,page:d},onSkipPrev:l,onSkipNext:f})})};export{Do as default};
