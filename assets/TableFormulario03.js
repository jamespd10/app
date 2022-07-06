import{d as S}from"./Visibility.js";import{N as g}from"./NotFoundResults.js";import{C}from"./CustomTable.js";import{u as F}from"./useFetchPagination.js";import{a as t,a8 as N,aw as s}from"./index.js";import{B as T}from"./BootstrapTooltip.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{C as P}from"./ChipState.js";import"./Modal.js";import"./SelectedCard.js";import{I as R}from"./IconButton.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Grid.js";import"./Typography.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./GlobalStyles.js";import"./emotion-react.browser.esm.js";import"./Box.js";import"./InputAdornment.js";import"./CircularProgress.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./ButtonBase.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Button.js";import"./Loader.js";import"./Stack.js";import"./LinearProgress.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./object.helper.js";import"./Tooltip.js";import"./Popper.js";import"./useModal.js";import"./CheckCircle.js";import"./Chip.js";import"./Close2.js";import"./ModalTransition.js";import"./DialogContent.js";import"./LoadingButton.js";const L={label:"",name:"procesados",value:"",list:[{value:"",label:"Todos"},{value:"IS NOT NULL",label:"Procesados"},{value:"IS NULL",label:"No procesados"}]},zo=()=>{var e,a,m,p;const i=F("/admin/formulario03"),{value:r,loading:n,inputRef:l,sendSearch:c,onClearSearch:d}=i,{page:f,handlePage:u,handleSkipNext:h,handleSkipPrev:y}=i,{setFilterRadio:b,filterRadioList:x}=i;return t(C,{title:"Lista de formularios 03",loading:n,size:"small",isSearch:{helperText:"por raz\xF3n social, comercial, RUC o fecha. Ejm: 2020-01",focus:!0,input:{inputRef:l,onClick:c,onClear:d}},filter:{filterRadio:{setFilterRadio:b,filterRadioList:x,radios:[L]}},notFound:(r==null?void 0:r.status)!==201&&t(g,{text:(e=r==null?void 0:r.error)==null?void 0:e.message}),tableHeader:["Acci\xF3n","Nombre","Ruc","Mes","Fecha de realizaci\xF3n","Procesado"],tableBody:(m=(a=r==null?void 0:r.data)==null?void 0:a.resultados)==null?void 0:m.map(o=>[t(T,{title:"Ver",disableInteractive:!0,placement:"right",children:t(R,{color:"primary",component:N,to:`/formulario03/${o.id}`,children:t(S,{})})},`${o.id}-ver`),t("span",{style:{textTransform:"uppercase"},children:o.nom_cliente},`${o.id}-nombre`),t("span",{style:{textTransform:"uppercase"},children:o.ruc},`${o.id}-ruc`),t("span",{style:{textTransform:"uppercase",fontWeight:"bold"},children:s(o.mes,"MMMM - yyyy")},`${o.id}-mes`),t("span",{style:{textTransform:"uppercase"},children:s(o.fecha_enviado,"dd/MM/yyyy")},`${o.id}-enviado`),t(P,{color:o.fecha_send?"success":"error",label:o.fecha_send?"PROCESADO":"NO PROCESADO"},`${o.id}-send`)]),pagination:{count:(p=r==null?void 0:r.data)==null?void 0:p.paginas,onChange:u,page:f},onSkipPrev:y,onSkipNext:h})};export{zo as default};
