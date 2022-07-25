import{C as h}from"./CustomTable.js";import{S as x}from"./index32.js";import{r as g,j as C,F as S,a as o}from"./index.js";import{B as T}from"./BootstrapTooltip.js";import{d as y}from"./PointOfSale.js";import{H as b}from"./HeaderTitle.js";import{N as k}from"./NotFoundResults.js";import{A as F}from"./Alert.js";import{I as _}from"./IconButton.js";import"./Search.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useId.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Clear.js";import"./TextField.js";import"./useFormControl.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./Box.js";import"./Typography.js";import"./InputAdornment.js";import"./CircularProgress.js";import"./Grid.js";import"./RadioGroup.js";import"./SwitchBase.js";import"./ButtonBase.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Button.js";import"./Loader.js";import"./SpeedDial.module.js";import"./Modal.js";import"./Close2.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./ModalTransition.js";import"./Warning.js";import"./Error.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./SelectedCard.js";import"./Stack.js";import"./LinearProgress.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./object.helper.js";import"./Tooltip.js";import"./Popper.js";import"./Divider.js";import"./Close.js";const Kt=()=>{var i,e,p;const{loading:m,value:t,setCliente:a,page:n,handlePage:s,handleSkipNext:l,handleSkipPrev:c,inputRef:d,sendSearch:u,onClearSearch:f}=g.exports.useContext(x);return C(S,{children:[o(b,{message:"Cliente a seleccionar"}),o(F,{variant:"outlined",severity:"error",style:{marginBottom:10,marginTop:10},children:"El negocio tiene mas de un cliente asociado, favor seleccionar el cliente a facturar"}),o(h,{title:"Lista de clientes",size:"small",stickyHeader:!0,containerSx:{maxHeight:r=>`calc(100vh - ${r.spacing(15)})`},tableHeader:["Acci\xF3n","RUC","Raz\xF3n social","Personal"],isSearch:{helperText:"por nombre, o RUC",focus:!0,input:{inputRef:d,onClick:u,onClear:f}},loading:m,notFound:(t==null?void 0:t.status)!==201&&o(k,{text:(i=t==null?void 0:t.error)==null?void 0:i.message}),tableBody:(e=t==null?void 0:t.data)==null?void 0:e.resultados.map(r=>[o(T,{title:"Facturar",placement:"right",children:o(_,{onClick:()=>a(r),color:"primary",children:o(y,{})})},`${r.id}-tooltip`),r.ruc,o("span",{style:{textTransform:"uppercase"},children:r.nom_cliente},`${r.id}-nombre`),r.declaracion_renta&&Boolean(Number(r.declaracion_renta))&&r.tipo_personal?o("span",{style:{textTransform:"uppercase"},children:r.tipo_personal}):o("span",{style:{textTransform:"uppercase"},children:r.tipo_personal})]),pagination:{count:(p=t==null?void 0:t.data)==null?void 0:p.paginas,onChange:s,page:n},onSkipPrev:c,onSkipNext:l})]})};export{Kt as default};
