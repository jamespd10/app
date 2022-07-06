import{r as u,j as T,a as o,F as y,b as E}from"./index.js";import"./BootstrapTooltip.js";import{N as w}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{C as k}from"./ChipState.js";import"./Modal.js";import"./SelectedCard.js";import{C as D}from"./CustomTable.js";import{z}from"./date.helper.js";import{f as I}from"./string.helper.js";import{R as _,a as N}from"./index47.js";import{I as j}from"./InputDecimal.js";import{u as A}from"./useFetch.js";import{u as B}from"./useComponentVisible.js";import{C as H}from"./CircularProgress.js";import{C as O}from"./Checkbox.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./Grid.js";import"./Typography.js";import"./useModal.js";import"./CheckCircle.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./Chip.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./Close2.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./react-is.production.min.js";import"./List.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Loader.js";import"./Stack.js";import"./LinearProgress.js";import"./index30.js";import"./regex.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./object.helper.js";import"./HeaderTitle.js";import"./Divider.js";import"./TextInput.js";import"./CustomDecimal.js";import"./react-number-format.es.js";const M={label:"Rutas",name:"ruta",value:"%%",list:[{value:"%%",label:"Todas"},{value:"San Miguelito",label:"SM"},{value:"Panam\xE1",label:"PMA"},{value:"R\xEDo Abajo",label:"RA"},{value:"Juan D\xEDaz",label:"JD"},{value:"Chorrera",label:"CHO"},{value:"Chilibre",label:"CHI"},{value:"Pacora",label:"PAC"},{value:"Dari\xE9n",label:"DAR"},{value:"Oficina",label:"OF"},{value:"Interior",label:"INT"},{value:"Veracruz",label:"VER"}]},V={label:"Regres\xF3 al local",name:"regreso",value:"%%",list:[{value:"%%",label:"Todas"},{value:"si",label:"Si se regres\xF3"},{value:"no",label:"No se regres\xF3"}]},$=[{name:"impresa",value:"no",label:"No impresas"}],W=({value:s,id:e})=>{const{ref:t,visible:p,setVisible:a}=B(!1),{rutaAlternaState:x,set:c}=u.exports.useContext(_),[l,i]=u.exports.useState(s||0),{send:n,isLoading:d}=A();return T("form",{ref:t,onSubmit:async m=>{m.preventDefault();const f=await n({url:`/admin/ruta-proformas/${e}/edit-total-cobrado`,method:"POST",data:{total:l}}),h=[...x],g=h.findIndex(b=>b.id===e);f.status===201?(h[g].total_cobrado=l,c([...h]),a(!1)):i(h[g].total_cobrado||0)},children:[!p&&o("span",{onClick:()=>a(!0),style:{cursor:"pointer"},children:d?o(H,{}):I(s)}),p&&o(j,{label:"Total Cobrado",size:"small",value:l,onChange:m=>i(Number(m.target.value)),loading:d,style:{minWidth:150}})]})},U=()=>{var p,a,x,c;const{selectedList:s,setSelectedList:e,value:t}=u.exports.useContext(N);return o(y,{children:o("div",{style:{display:"flex",justifyContent:"center"},children:o(O,{checked:s.filter(l=>{var i,n;return(n=(i=t==null?void 0:t.data)==null?void 0:i.resultados)==null?void 0:n.map(d=>d.id).includes(l.id)}).length===(((a=(p=t==null?void 0:t.data)==null?void 0:p.resultados)==null?void 0:a.length)||0),indeterminate:s.filter(l=>{var i,n;return(n=(i=t==null?void 0:t.data)==null?void 0:i.resultados)==null?void 0:n.map(d=>d.id).includes(l.id)}).length>0&&s.filter(l=>{var i,n;return(n=(i=t==null?void 0:t.data)==null?void 0:i.resultados)==null?void 0:n.map(d=>d.id).includes(l.id)}).length<(((c=(x=t==null?void 0:t.data)==null?void 0:x.resultados)==null?void 0:c.length)||0),onChange:({target:{checked:l}})=>{l?l&&t&&t.data&&e([...s,...t.data.resultados.filter(i=>{var n;return i.id!==((n=s.find(d=>i.id===d.id))==null?void 0:n.id)})]):e([])}})})})},G=()=>{const{rutaAlternaState:s,set:e}=u.exports.useContext(_),{send:t,isLoading:p}=A();return{handleCheck:async({id:x,name:c})=>{if((await t({url:`/admin/ruta-proformas/${x}/${c}`,method:"POST"})).status===201){const i=s.findIndex(d=>d.id===x),n=[...s];n[i][c]=!Boolean(Number(n[i][c])),e([...n])}},isLoading:p}},F=({id:s,name:e,value:t})=>{const{handleCheck:p,isLoading:a}=G();return o(y,{children:o(k,{label:Boolean(Number(t))?"SI":"NO",color:Boolean(Number(t))?"success":"error",onClick:()=>p({id:s,name:e}),loading:a})})},J=()=>{const{rutaAlternaState:s,set:e}=u.exports.useContext(_),{send:t,isLoading:p}=A(),[a,x]=u.exports.useState(),[c,l]=u.exports.useState(""),i=["ACH","CHEQUE","EFECTIVO","NO PAGADO"],n=()=>{const m=s.findIndex(h=>h.id===(a==null?void 0:a.id)),f=[...s];f[m].tipo_pago=c,e([...f])},d=async()=>{try{(a==null?void 0:a.tipo)!==c&&(await t({url:`/admin/ruta-proformas/${a==null?void 0:a.id}/edit-tipo-pago`,method:"POST",data:{tipo:a==null?void 0:a.tipo}})).status!==201&&n()}catch{n()}finally{l("")}};return u.exports.useEffect(()=>{const m=setTimeout(()=>{a&&d()},1e3);return()=>clearTimeout(m)},[a]),{handleChangeTipo:(m,f)=>{const h=i.findIndex(C=>C===f),g=s.findIndex(C=>C.id===m),b=[...s],S=i[h+1>i.length-1?0:h+1];b[g].tipo_pago=S,e([...b]),c===""&&l(f),x({id:m,tipo:S})},isLoading:p}},Q=({id:s,name:e})=>{const{handleChangeTipo:t,isLoading:p}=J();return o(y,{children:o(k,{label:e,color:e==="NO PAGADO"?"error":"success",onClick:()=>t(s,e),loading:p})})},q=u.exports.lazy(()=>E(()=>import("./Acciones8.js"),["assets/Acciones8.js","assets/index.js","assets/index9.css","assets/Print.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/CustomDatePicker.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/Typography.js","assets/PureDateInput.js","assets/CalendarPicker.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Backdrop.js","assets/IconButton.js","assets/Grid.js","assets/InputAdornment.js","assets/TextField.js","assets/react-is.production.min.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/ModalTransition.js","assets/DialogContent.js","assets/Button.js","assets/index11.js","assets/CustomSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/Popper.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Stack.js","assets/BootstrapTooltip.js","assets/BackgroundLoader.js","assets/CircularProgress.js","assets/Modal.js","assets/Close2.js","assets/CheckCircle.js","assets/LoadingButton.js","assets/SelectedCard.js","assets/useHandlePrint.js","assets/index23.js","assets/index47.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/object.helper.js","assets/useFetch.js","assets/Loader.js","assets/HeaderTitle.js","assets/Divider.js","assets/Box.js"])),ut=()=>{var S,C;const{loading:s,value:e,page:t,handlePage:p,handleSkipNext:a,handleSkipPrev:x,filterList:c,setFilter:l,inputRef:i,sendSearch:n,filterRadioList:d,setFilterRadio:P,onClearSearch:m,selectedList:f,setSelectedList:h}=u.exports.useContext(N),{rutaAlternaState:g,set:b}=u.exports.useContext(_);return u.exports.useEffect(()=>{(()=>{e&&e.status===201&&e.data&&b(e.data.resultados)})()},[e]),T(y,{children:[o(D,{title:"Lista de proformas realizadas",size:"small",stickyHeader:!0,containerSx:{maxHeight:r=>`calc(100vh - ${r.spacing(15)})`},isSearch:{helperText:"por nombre del negocio, RUC o fecha. Ejm: 30-01-2020",focus:!0,input:{inputRef:i,onClick:n,onClear:m}},filter:{filterCheck:{setFilter:l,filterList:c,list:$},filterRadio:{setFilterRadio:P,filterRadioList:d,radios:[M,V]}},loading:s,notFound:(e==null?void 0:e.status)!==201&&o(w,{text:(S=e==null?void 0:e.error)==null?void 0:S.message}),tableHeader:[o(U,{}),"Nombre del negocio","Cliente","RUC","Ruta","Fecha","Total","Total cobrado","Impresa","Tipo de pago","Pagada","\xBFSe regres\xF3?"],tableBody:g==null?void 0:g.map(r=>[o("div",{style:{display:"flex",justifyContent:"center"},children:o(O,{checked:f.map(R=>R.id).includes(r.id),onChange:({target:{checked:R}})=>{h(R?[...f,r]:[...f.filter(L=>L.id!==r.id)])}})}),o("div",{style:{overflow:"hidden",maxWidth:"350px",textOverflow:"ellipsis"},children:o("span",{style:{textTransform:"uppercase"},children:r.nombre_negocio})}),o("div",{style:{overflow:"hidden",maxWidth:"350px",textOverflow:"ellipsis"},children:T("span",{style:{textTransform:"uppercase"},children:[r.tipo_personal&&r.tipo_personal!==""?T("span",{style:{fontWeight:"bold"},children:[r.tipo_personal," -"," "]}):"",r.nom_cliente]})}),o("span",{style:{textTransform:"uppercase"},children:r.ruc}),o("span",{style:{textTransform:"uppercase"},children:r.ruta_iniciales}),o("span",{style:{textTransform:"uppercase"},children:r.fecha_ruta&&z(`${new Date(r.fecha_ruta)}`,"dd/MM/yy h:mm a")}),I(r.total),o(W,{id:r.id,value:r.total_cobrado}),o(k,{label:r.fecha_ruta?"SI":"NO",color:r.fecha_ruta?"success":"error"}),o(Q,{id:r.id,name:r.tipo_pago}),o(F,{id:r.id,name:"cobro",value:r.cobro}),o(F,{id:r.id,name:"regreso",value:r.regreso})]),pagination:{count:(C=e==null?void 0:e.data)==null?void 0:C.paginas,onChange:p,page:t},selectedCount:f.length,onSkipPrev:x,onSkipNext:a}),o(u.exports.Suspense,{fallback:o("div",{}),children:o(q,{})})]})};export{ut as default};
