import{r as u,j as T,a as o,F as y,b as E}from"./index.js";import"./BootstrapTooltip.js";import{N as w}from"./NotFoundResults.js";import"./SpeedDial.module.js";import{C as k}from"./ChipState.js";import"./Modal.js";import"./SelectedCard.js";import{C as D}from"./CustomTable.js";import{z}from"./date.helper.js";import{f as I}from"./string.helper.js";import{R as _,a as N}from"./index46.js";import{I as j}from"./InputDecimal.js";import{u as A}from"./useFetch.js";import{u as B}from"./useComponentVisible.js";import{C as H}from"./CircularProgress.js";import{C as O}from"./Checkbox.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./Grid.js";import"./Typography.js";import"./CheckCircle.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./Chip.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./Close2.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./Warning.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./useFormControl.js";import"./formControlState.js";import"./react-is.production.min.js";import"./List.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Loader.js";import"./Stack.js";import"./LinearProgress.js";import"./regex.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./object.helper.js";import"./HeaderTitle.js";import"./Divider.js";import"./TextInput.js";import"./CustomDecimal.js";import"./react-number-format.es.js";const M={label:"Rutas",name:"ruta",value:"%%",list:[{value:"%%",label:"Todas"},{value:"San Miguelito",label:"SM"},{value:"Panam\xE1",label:"PMA"},{value:"R\xEDo Abajo",label:"RA"},{value:"Juan D\xEDaz",label:"JD"},{value:"Chorrera",label:"CHO"},{value:"Chilibre",label:"CHI"},{value:"Pacora",label:"PAC"},{value:"Dari\xE9n",label:"DAR"},{value:"Oficina",label:"OF"},{value:"Interior",label:"INT"},{value:"Veracruz",label:"VER"}]},V={label:"Regres\xF3 al local",name:"regreso",value:"%%",list:[{value:"%%",label:"Todas"},{value:"si",label:"Si se regres\xF3"},{value:"no",label:"No se regres\xF3"}]},$=[{name:"impresa",value:"no",label:"No impresas"}],W=({value:s,id:t})=>{const{ref:e,visible:d,setVisible:a}=B(!1),{rutaAlternaState:x,set:c}=u.exports.useContext(_),[l,i]=u.exports.useState(s||0),{send:n,isLoading:p}=A();return T("form",{ref:e,onSubmit:async m=>{m.preventDefault();const f=await n({url:`/admin/ruta-proformas/${t}/edit-total-cobrado`,method:"POST",data:{total:l}}),h=[...x],g=h.findIndex(b=>b.id===t);f.status===201?(h[g].total_cobrado=l,c([...h]),a(!1)):i(h[g].total_cobrado||0)},children:[!d&&o("span",{onClick:()=>a(!0),style:{cursor:"pointer"},children:p?o(H,{}):I(s)}),d&&o(j,{label:"Total Cobrado",size:"small",value:l,onChange:m=>i(Number(m.target.value)),loading:p,style:{minWidth:150}})]})},U=()=>{var d,a,x,c;const{selectedList:s,setSelectedList:t,value:e}=u.exports.useContext(N);return o(y,{children:o("div",{style:{display:"flex",justifyContent:"center"},children:o(O,{checked:s.filter(l=>{var i,n;return(n=(i=e==null?void 0:e.data)==null?void 0:i.resultados)==null?void 0:n.map(p=>p.id).includes(l.id)}).length===(((a=(d=e==null?void 0:e.data)==null?void 0:d.resultados)==null?void 0:a.length)||0),indeterminate:s.filter(l=>{var i,n;return(n=(i=e==null?void 0:e.data)==null?void 0:i.resultados)==null?void 0:n.map(p=>p.id).includes(l.id)}).length>0&&s.filter(l=>{var i,n;return(n=(i=e==null?void 0:e.data)==null?void 0:i.resultados)==null?void 0:n.map(p=>p.id).includes(l.id)}).length<(((c=(x=e==null?void 0:e.data)==null?void 0:x.resultados)==null?void 0:c.length)||0),onChange:({target:{checked:l}})=>{l?l&&e&&e.data&&t([...s,...e.data.resultados.filter(i=>{var n;return i.id!==((n=s.find(p=>i.id===p.id))==null?void 0:n.id)})]):t([])}})})})},G=()=>{const{rutaAlternaState:s,set:t}=u.exports.useContext(_),{send:e,isLoading:d}=A();return{handleCheck:async({id:x,name:c})=>{if((await e({url:`/admin/ruta-proformas/${x}/${c}`,method:"POST"})).status===201){const i=s.findIndex(p=>p.id===x),n=[...s];n[i][c]=!Boolean(Number(n[i][c])),t([...n])}},isLoading:d}},F=({id:s,name:t,value:e})=>{const{handleCheck:d,isLoading:a}=G();return o(y,{children:o(k,{label:Boolean(Number(e))?"SI":"NO",color:Boolean(Number(e))?"success":"error",onClick:()=>d({id:s,name:t}),loading:a})})},J=()=>{const{rutaAlternaState:s,set:t}=u.exports.useContext(_),{send:e,isLoading:d}=A(),[a,x]=u.exports.useState(),[c,l]=u.exports.useState(""),i=["ACH","CHEQUE","EFECTIVO","NO PAGADO"],n=()=>{const m=s.findIndex(h=>h.id===(a==null?void 0:a.id)),f=[...s];f[m].tipo_pago=c,t([...f])},p=async()=>{try{(a==null?void 0:a.tipo)!==c&&(await e({url:`/admin/ruta-proformas/${a==null?void 0:a.id}/edit-tipo-pago`,method:"POST",data:{tipo:a==null?void 0:a.tipo}})).status!==201&&n()}catch{n()}finally{l("")}};return u.exports.useEffect(()=>{const m=setTimeout(()=>{a&&p()},1e3);return()=>clearTimeout(m)},[a]),{handleChangeTipo:(m,f)=>{const h=i.findIndex(C=>C===f),g=s.findIndex(C=>C.id===m),b=[...s],S=i[h+1>i.length-1?0:h+1];b[g].tipo_pago=S,t([...b]),c===""&&l(f),x({id:m,tipo:S})},isLoading:d}},Q=({id:s,name:t})=>{const{handleChangeTipo:e,isLoading:d}=J();return o(y,{children:o(k,{label:t,color:t==="NO PAGADO"?"error":"success",onClick:()=>e(s,t),loading:d})})},q=u.exports.lazy(()=>E(()=>import("./Acciones8.js"),["assets/Acciones8.js","assets/index.js","assets/index6.css","assets/Print.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/CustomDatePicker.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/Typography.js","assets/PureDateInput.js","assets/CalendarPicker.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Fade.js","assets/IconButton.js","assets/Grid.js","assets/InputAdornment.js","assets/useFormControl.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/DialogContent.js","assets/DialogActions.js","assets/Button.js","assets/index11.js","assets/CustomSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/BootstrapTooltip.js","assets/BackgroundLoader.js","assets/CircularProgress.js","assets/Modal.js","assets/Close2.js","assets/Warning.js","assets/CheckCircle.js","assets/LoadingButton.js","assets/SelectedCard.js","assets/useHandlePrint.js","assets/index23.js","assets/index46.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/object.helper.js","assets/useFetch.js","assets/Loader.js","assets/HeaderTitle.js","assets/Divider.js","assets/Box.js"])),xe=()=>{var S,C;const{loading:s,value:t,page:e,handlePage:d,handleSkipNext:a,handleSkipPrev:x,filterList:c,setFilter:l,inputRef:i,sendSearch:n,filterRadioList:p,setFilterRadio:P,onClearSearch:m,selectedList:f,setSelectedList:h}=u.exports.useContext(N),{rutaAlternaState:g,set:b}=u.exports.useContext(_);return u.exports.useEffect(()=>{(()=>{t&&t.status===201&&t.data&&b(t.data.resultados)})()},[t]),T(y,{children:[o(D,{title:"Lista de proformas realizadas",size:"small",stickyHeader:!0,containerSx:{maxHeight:r=>`calc(100vh - ${r.spacing(15)})`},isSearch:{helperText:"por nombre del negocio, RUC o fecha. Ejm: 30-01-2020",focus:!0,input:{inputRef:i,onClick:n,onClear:m}},filter:{filterCheck:{setFilter:l,filterList:c,list:$},filterRadio:{setFilterRadio:P,filterRadioList:p,radios:[M,V]}},loading:s,notFound:(t==null?void 0:t.status)!==201&&o(w,{text:(S=t==null?void 0:t.error)==null?void 0:S.message}),tableHeader:[o(U,{}),"Nombre del negocio","Cliente","RUC","Ruta","Fecha","Total","Total cobrado","Impresa","Tipo de pago","Pagada","\xBFSe regres\xF3?"],tableBody:g==null?void 0:g.map(r=>[o("div",{style:{display:"flex",justifyContent:"center"},children:o(O,{checked:f.map(R=>R.id).includes(r.id),onChange:({target:{checked:R}})=>{h(R?[...f,r]:[...f.filter(L=>L.id!==r.id)])}})}),o("div",{style:{overflow:"hidden",maxWidth:"350px",textOverflow:"ellipsis"},children:o("span",{style:{textTransform:"uppercase"},children:r.nombre_negocio})}),o("div",{style:{overflow:"hidden",maxWidth:"350px",textOverflow:"ellipsis"},children:T("span",{style:{textTransform:"uppercase"},children:[r.tipo_personal&&r.tipo_personal!==""?T("span",{style:{fontWeight:"bold"},children:[r.tipo_personal," -"," "]}):"",r.nom_cliente]})}),o("span",{style:{textTransform:"uppercase"},children:r.ruc}),o("span",{style:{textTransform:"uppercase"},children:r.ruta_iniciales}),o("span",{style:{textTransform:"uppercase"},children:r.fecha_ruta&&z(`${new Date(r.fecha_ruta)}`,"dd/MM/yy h:mm a")}),I(r.total),o(W,{id:r.id,value:r.total_cobrado}),o(k,{label:r.fecha_ruta?"SI":"NO",color:r.fecha_ruta?"success":"error"}),o(Q,{id:r.id,name:r.tipo_pago}),o(F,{id:r.id,name:"cobro",value:r.cobro}),o(F,{id:r.id,name:"regreso",value:r.regreso})]),pagination:{count:(C=t==null?void 0:t.data)==null?void 0:C.paginas,onChange:d,page:e},selectedCount:f.length,onSkipPrev:x,onSkipNext:a}),o(u.exports.Suspense,{fallback:o("div",{}),children:o(q,{})})]})};export{xe as default};
