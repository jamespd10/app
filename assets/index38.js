import{F as S}from"./FabLink.js";import{d as T}from"./Paid.js";import{H as C}from"./HeaderTitle.js";import{a as r,X as k,j as s,F as B}from"./index.js";import{B as F}from"./BootstrapTooltip.js";import{u as I}from"./useFetchPagination.js";import{N as x}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{C as N}from"./ChipState.js";import"./Modal.js";import"./SelectedCard.js";import{d as _}from"./Visibility.js";import{C as y}from"./CustomTable.js";import{f as i}from"./string.helper.js";import{I as R}from"./IconButton.js";import"./AssignmentRounded.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./Grow.js";import"./Typography.js";import"./Divider.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./Grid.js";import"./useModal.js";import"./Error.js";import"./Chip.js";import"./Close2.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./react-is.production.min.js";import"./List.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Loader.js";import"./Stack.js";import"./LinearProgress.js";import"./regex.js";const M=()=>{var m,p,e,a;const{loading:n,value:t,handlePage:d,page:c,handleSkipNext:l,handleSkipPrev:f,inputRef:h,sendSearch:b,onClearSearch:g}=I("/admin/itbms");return r("div",{style:{marginTop:10},children:r(y,{title:"Lista de ITBMS realizados",size:"small",isSearch:{focus:!0,input:{inputRef:h,onClick:b,onClear:g}},tableHeader:["Ver","Negocio","RUC","DV","Fecha de ITBMS","Total","Total de ventas","Total de compras","Total de retenciones","Fecha procesado"],notFound:(t==null?void 0:t.status)!==201&&r(x,{text:(m=t==null?void 0:t.error)==null?void 0:m.message}),loading:n,tableBody:(e=(p=t==null?void 0:t.data)==null?void 0:p.resultados)==null?void 0:e.map(o=>[r(F,{title:"Ver",placement:"right",children:r(R,{component:k,to:`/itbms/${o.id}`,color:"primary",children:r(_,{})})},`${o.id}-tooltip`),s("span",{style:{textTransform:"uppercase"},children:[o.tipo," ",o.nombre_negocio]},`${o.id}-nombre`),o.ruc,o.dv,o.fecha,r("span",{style:{color:Number(o.total)<0?"red":"black",borderBottom:"double black"},children:i(o.total)},`${o.id}-total`),i(o.total_venta),i(o.total_compra),i(o.total_retenciones),o.fecha_enviado||r(N,{color:"error",label:"SIN PROCESAR"})]),pagination:{count:(a=t==null?void 0:t.data)==null?void 0:a.paginas,onChange:d,page:c},onSkipPrev:f,onSkipNext:l})})},Uo=()=>s(B,{children:[r(C,{message:"ITBMS"}),r(M,{}),r(S,{text:"Realizar ITBMS",icon:T,to:"/negocios?itbms=1"})]});export{Uo as default};
