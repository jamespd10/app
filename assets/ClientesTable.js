import{r as c,a as o,F as A,A as T,X as O}from"./index.js";import{B as b}from"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{N as $}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal.js";import"./platform.js";import{d as k}from"./Visibility.js";import{C as B}from"./CustomTable.js";import{d as F}from"./AddBusiness.js";import{C as N}from"./index4.js";import{C as V}from"./ChipState.js";import{u as y}from"./useFetch.js";import{I as w}from"./IconButton.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./Grid.js";import"./Typography.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./Button.js";import"./ButtonBase.js";import"./Error.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./FormHelperText.js";import"./react-is.production.min.js";import"./List.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./useAsyncRetry.js";import"./TableRow.js";import"./Loader.js";import"./Stack.js";import"./LinearProgress.js";import"./HeaderTitle.js";import"./Divider.js";import"./useQueryParams.js";import"./AddRounded.js";import"./FabLink.js";import"./AssignmentRounded.js";import"./useFetchPagination.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./Chip.js";const D=()=>{const{clientes:r,setClientes:s}=c.exports.useContext(N),{send:p,isLoading:d}=y(),[t,i]=c.exports.useState(),[l,h]=c.exports.useState(""),u=["ACTIVO","INACTIVO","CANCELADO"],C=()=>{const n=r.findIndex(m=>m.id===(t==null?void 0:t.id)),a=[...r];a[n].estado=l,s([...a])},f=async()=>{try{(t==null?void 0:t.estado)!==l&&(await p({url:`/admin/clientes/${t==null?void 0:t.id}/change-state`,method:"POST",data:{estado:t==null?void 0:t.estado}})).status!==201&&C()}catch{C()}finally{h("")}};return c.exports.useEffect(()=>{const n=setTimeout(()=>{t&&f()},1e3);return()=>clearTimeout(n)},[t]),{handleChangeEstado:(n,a)=>{const m=u.findIndex(g=>g===a),e=r.findIndex(g=>g.id===n),S=[...r],I=u[m+1>u.length-1?0:m+1];S[e].estado=I,s([...S]),l===""&&h(a),i({id:n,estado:I})},isLoading:d}},E=({id:r,estado:s})=>{const{handleChangeEstado:p,isLoading:d}=D();return o(A,{children:o(V,{label:s,color:s==="ACTIVO"?"success":s==="INACTIVO"?"warning":"error",onClick:()=>p(r,s),loading:d})})},Xt=r=>{var a,m;const{authState:s}=c.exports.useContext(T),{tipo:p}=s,{loading:d,clientes:t,value:i,handlePage:l,page:h,handleSkipNext:u,handleSkipPrev:C,inputRef:f,sendSearch:x,onClearSearch:n}=c.exports.useContext(N);return o(A,{children:o(B,{title:"Lista de clientes",size:"small",isSearch:{focus:!0,input:{inputRef:f,onClick:x,onClear:n}},tableHeader:["Ver","Nombre del cliente","RUC","DV","Tipo",...p==="Super"?["Estado"]:[]],notFound:(i==null?void 0:i.status)!==201&&o($,{text:(a=i==null?void 0:i.error)==null?void 0:a.message}),loading:d,tableBody:t==null?void 0:t.map(e=>[o(b,{title:r.btnText,placement:"right",children:o(w,{component:O,to:`${r.route}/${e.id}${r.isAddNegocio?"/agregar":""}`,color:"primary",children:r.isAddNegocio?o(F,{}):o(k,{})})},`${e.id}-tooltip`),o("span",{style:{textTransform:"uppercase"},children:e.nom_cliente||o("strong",{children:"SIN NOMBRE"})},`${e.id}-nombre`),e.ruc,e.dv||o("strong",{children:"SIN DV ASIGNADO"}),e.tipo||o("strong",{children:"SIN TIPO ASIGNADO"}),...p==="Super"?[o(E,{id:e.id,estado:e.estado},`${e.id}-estado`)]:[]]),pagination:{count:(m=i==null?void 0:i.data)==null?void 0:m.paginas,onChange:l,page:h},onSkipPrev:C,onSkipNext:u})})};export{Xt as default};
