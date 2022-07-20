import{a as t,F as C,a8 as g,aw as s}from"./index.js";import"./BootstrapTooltip.js";import{u as b}from"./useFetchPagination.js";import{N as _}from"./NotFoundResults.js";import"./SpeedDial.module.js";import{C as F}from"./ChipState.js";import"./Modal.js";import"./SelectedCard.js";import{C as x}from"./CustomTable.js";import{u as d}from"./string.helper.js";import{d as S}from"./Visibility.js";import{I as T}from"./IconButton.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useControlled.js";import"./useId.js";import"./useAsyncRetry.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./object.helper.js";import"./Grid.js";import"./Typography.js";import"./CheckCircle.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./Error.js";import"./Chip.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./CircularProgress.js";import"./Close2.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./Paper.js";import"./Warning.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./useFormControl.js";import"./formControlState.js";import"./react-is.production.min.js";import"./List.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./RadioGroup.js";import"./SwitchBase.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Loader.js";import"./Stack.js";import"./LinearProgress.js";import"./regex.js";const qo=()=>{var i,m,p,a;const{loading:e,value:r,handlePage:n,page:c,inputRef:h,sendSearch:$,onClearSearch:f}=b("/admin/usuarios");return t(C,{children:t(x,{notFound:(r==null?void 0:r.status)!==201&&t(_,{text:(i=r==null?void 0:r.error)==null?void 0:i.message}),loading:e,title:"Lista de usuarios",size:"small",isSearch:{input:{inputRef:h,onClick:$,onClear:f}},tableHeader:["Ver","Nombre","Correo","Estado","C\xE9dula","Tipo","Horario"],tableBody:(p=(m=r==null?void 0:r.data)==null?void 0:m.resultados)==null?void 0:p.map((o,l)=>[t(T,{component:g,to:`/usuarios/${o.id}`,color:"primary",children:t(S,{})},`${o.id}-btn`),`${d(o.nombre)} ${d(o.apellido)}`,`${o.correo||""}`,t(F,{label:`${o.estado}`,color:o.estado==="ACTIVO"?"success":"error"},`${o.id}-state`),`${o.identificacion||""}`,`${o.tipo}`,t("div",{children:o.dia_desde&&o.dia_hasta?`${o.dia_desde} a ${o.dia_hasta} de ${s(o.hora_desde,"h:mm aaaa")} - ${s(o.hora_hasta,"h:mm aaaa")}`:""},`${o.id}-div`)]),pagination:{count:(a=r==null?void 0:r.data)==null?void 0:a.paginas,onChange:n,page:c}})})};export{qo as default};
