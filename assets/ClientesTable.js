import{r as c,a as o,F as A,A as T,a8 as O}from"./index.js";import{B as b}from"./BootstrapTooltip.js";import{N as $}from"./NotFoundResults.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{d as k}from"./Visibility.js";import{C as B}from"./CustomTable.js";import{d as F}from"./AddBusiness.js";import{C as N}from"./index8.js";import{C as V}from"./ChipState.js";import{u as y}from"./useFetch.js";import{I as w}from"./IconButton.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./Grid.js";import"./Typography.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./Paper.js";import"./Warning.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./CircularProgress.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./useFormControl.js";import"./formControlState.js";import"./react-is.production.min.js";import"./List.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Loader.js";import"./Stack.js";import"./LinearProgress.js";import"./HeaderTitle.js";import"./Divider.js";import"./useModal.js";import"./useQueryParams.js";import"./FabLink.js";import"./AssignmentRounded.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./object.helper.js";import"./Chip.js";const D=()=>{const{clientes:e,setClientes:s}=c.exports.useContext(N),{send:a,isLoading:d}=y(),[t,i]=c.exports.useState(),[l,h]=c.exports.useState(""),u=["ACTIVO","INACTIVO","CANCELADO"],C=()=>{const n=e.findIndex(p=>p.id===(t==null?void 0:t.id)),m=[...e];m[n].estado=l,s([...m])},f=async()=>{try{(t==null?void 0:t.estado)!==l&&(await a({url:`/admin/clientes/${t==null?void 0:t.id}/change-state`,method:"POST",data:{estado:t==null?void 0:t.estado}})).status!==201&&C()}catch{C()}finally{h("")}};return c.exports.useEffect(()=>{const n=setTimeout(()=>{t&&f()},1e3);return()=>clearTimeout(n)},[t]),{handleChangeEstado:(n,m)=>{const p=u.findIndex(g=>g===m),r=e.findIndex(g=>g.id===n),S=[...e],I=u[p+1>u.length-1?0:p+1];S[r].estado=I,s([...S]),l===""&&h(m),i({id:n,estado:I})},isLoading:d}},E=({id:e,estado:s})=>{const{handleChangeEstado:a,isLoading:d}=D();return o(A,{children:o(V,{label:s,color:s==="ACTIVO"?"success":s==="INACTIVO"?"warning":"error",onClick:()=>a(e,s),loading:d})})},to=e=>{var m,p;const{authState:s}=c.exports.useContext(T),{tipo:a}=s,{loading:d,clientes:t,value:i,handlePage:l,page:h,handleSkipNext:u,handleSkipPrev:C,inputRef:f,sendSearch:x,onClearSearch:n}=c.exports.useContext(N);return o(A,{children:o(B,{title:"Lista de clientes",size:"small",isSearch:{focus:!0,input:{inputRef:f,onClick:x,onClear:n}},tableHeader:["Ver","Nombre del cliente","RUC","DV","Tipo",...a==="Super"?["Estado"]:[]],notFound:(i==null?void 0:i.status)!==201&&o($,{text:(m=i==null?void 0:i.error)==null?void 0:m.message}),loading:d,tableBody:t==null?void 0:t.map(r=>[o(b,{title:e.btnText,placement:"right",children:o(w,{component:O,to:`${e.route}/${r.id}${e.isAddNegocio?"/agregar":""}`,color:"primary",children:e.isAddNegocio?o(F,{}):o(k,{})})},`${r.id}-tooltip`),o("span",{style:{textTransform:"uppercase"},children:r.nom_cliente||o("strong",{children:"SIN NOMBRE"})},`${r.id}-nombre`),r.ruc,r.dv||o("strong",{children:"SIN DV ASIGNADO"}),r.tipo||o("strong",{children:"SIN TIPO ASIGNADO"}),...a==="Super"?[o(E,{id:r.id,estado:r.estado},`${r.id}-estado`)]:[]]),pagination:{count:(p=i==null?void 0:i.data)==null?void 0:p.paginas,onChange:l,page:h},onSkipPrev:C,onSkipNext:u})})};export{to as default};
