import{C as h}from"./CustomTable.js";import{S as x}from"./index36.js";import{r as g,j as C,F as S,a as o}from"./index.js";import{B as T}from"./BootstrapTooltip.js";import{d as y}from"./PointOfSale.js";import{H as k}from"./HeaderTitle.js";import{N as F}from"./NotFoundResults.js";import{A as _}from"./Alert.js";import{I as b}from"./IconButton.js";import"./Search.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Clear.js";import"./TextField.js";import"./react-is.production.min.js";import"./Menu.js";import"./Modal.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./GlobalStyles.js";import"./Box.js";import"./extendSxProp.js";import"./InputAdornment.js";import"./Typography.js";import"./Grid.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./ButtonBase.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./tslib.js";import"./Button.js";import"./Loader.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./useModal.js";import"./Modal2.js";import"./Close2.js";import"./DialogTitle.js";import"./Error.js";import"./platform.js";import"./Stack.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./constants.js";import"./object.helper.js";import"./Tooltip.js";import"./appendOwnerState.js";import"./Divider.js";import"./Close.js";const At=()=>{var e,i,p;const{loading:a,value:t,setCliente:m,page:n,handlePage:s,handleSkipNext:l,handleSkipPrev:c,inputRef:d,sendSearch:u,onClearSearch:f}=g.exports.useContext(x);return C(S,{children:[o(k,{message:"Cliente a seleccionar"}),o(_,{variant:"outlined",severity:"error",style:{marginBottom:10,marginTop:10},children:"El negocio tiene mas de un cliente asociado, favor seleccionar el cliente a facturar"}),o(h,{title:"Lista de clientes",size:"small",stickyHeader:!0,containerSx:{maxHeight:r=>`calc(100vh - ${r.spacing(15)})`},tableHeader:["Acci\xF3n","RUC","Raz\xF3n social","Personal"],isSearch:{helperText:"por nombre, o RUC",focus:!0,input:{inputRef:d,onClick:u,onClear:f}},loading:a,notFound:(t==null?void 0:t.status)!==201&&o(F,{text:(e=t==null?void 0:t.error)==null?void 0:e.message}),tableBody:(i=t==null?void 0:t.data)==null?void 0:i.resultados.map(r=>[o(T,{title:"Facturar",placement:"right",children:o(b,{onClick:()=>m(r),color:"primary",children:o(y,{})})}),r.ruc,o("span",{style:{textTransform:"uppercase"},children:r.nom_cliente}),r.declaracion_renta&&Boolean(Number(r.declaracion_renta))&&r.tipo_personal?o("span",{style:{textTransform:"uppercase"},children:r.tipo_personal}):o("span",{style:{textTransform:"uppercase"},children:r.tipo_personal})]),pagination:{count:(p=t==null?void 0:t.data)==null?void 0:p.paginas,onChange:s,page:n},onSkipPrev:c,onSkipNext:l})]})};export{At as default};
