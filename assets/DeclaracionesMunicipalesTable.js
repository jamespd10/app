import{a as t,F as g,a8 as C}from"./index.js";import{B as x}from"./BootstrapTooltip.js";import{u as F}from"./useFetchPagination.js";import{N}from"./NotFoundResults.js";import"./SpeedDial.module.js";import{C as S}from"./ChipState.js";import"./Modal.js";import"./SelectedCard.js";import{C as y}from"./CustomTable.js";import{d as R}from"./Visibility.js";import{I as k}from"./IconButton.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./object.helper.js";import"./Grid.js";import"./Typography.js";import"./CheckCircle.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./Chip.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./CircularProgress.js";import"./Close2.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./Paper.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./useFormControl.js";import"./formControlState.js";import"./react-is.production.min.js";import"./List.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Loader.js";import"./Stack.js";import"./LinearProgress.js";const P={label:"",name:"procesadas",value:"",list:[{value:"",label:"Todas"},{value:"si",label:"Procesadas"},{value:"no",label:"No procesadas"}]},zo=()=>{var r,p,m,e;const{loading:a,value:o,handlePage:n,page:s,handleSkipNext:c,handleSkipPrev:l,sendSearch:d,inputRef:f,filterRadioList:h,setFilterRadio:u,onClearSearch:b}=F("/admin/declaraciones-municipales");return t(g,{children:t(y,{title:"Lista de declaraciones municipales",size:"small",isSearch:{helperText:"por nombre del negocio, RUC, No. Contribuyente o a\xF1o. Ejm: 2020",focus:!0,input:{inputRef:f,onClick:d,onClear:b}},notFound:(o==null?void 0:o.status)!==201&&t(N,{text:(r=o==null?void 0:o.error)==null?void 0:r.message}),filter:{filterRadio:{setFilterRadio:u,filterRadioList:h,radios:[P]}},loading:a,tableHeader:["Acci\xF3n","Negocio","Ruc","No. contribuyente","Municipio","A\xF1o","Procesada"],tableBody:(m=(p=o==null?void 0:o.data)==null?void 0:p.resultados)==null?void 0:m.map(i=>[t(x,{title:"Ver",placement:"right",children:t(k,{component:C,to:`/declaraciones-municipales/${i.id}`,color:"primary",children:t(R,{})})},`${i.id}-tooltip`),`${i.negocio}`,i.ruc,i.no_contribuyente,i.municipio,i.yy,t(S,{label:i.fecha_impresion?"SI":"NO",color:i.fecha_impresion?"success":"error"},`${i.id}-fecha-impresion`)]),pagination:{count:(e=o==null?void 0:o.data)==null?void 0:e.paginas,onChange:n,page:s},onSkipPrev:l,onSkipNext:c})})};export{zo as default};
