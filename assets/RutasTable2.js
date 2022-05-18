import{r as u,j as T,a as t,a4 as w,F as y,q as z,ac as j}from"./index.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{N as B}from"./NotFoundResults.js";import"./ContentProvider.js";import{C as k}from"./ChipState.js";import"./Modal2.js";import"./platform.js";import{C as H}from"./CustomTable.js";import{z as M}from"./date.helper.js";import{f as O}from"./string.helper.js";import{R as P,a as E}from"./index37.js";import{I as V}from"./InputDecimal.js";import{u as A}from"./useFetch.js";import{u as $}from"./useComponentVisible.js";import{C as L}from"./Checkbox.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./Grid.js";import"./extendSxProp.js";import"./Typography.js";import"./useModal.js";import"./Error.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./Chip.js";import"./ButtonBase.js";import"./Close2.js";import"./IconButton.js";import"./Backdrop.js";import"./Modal.js";import"./Paper.js";import"./Button.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./react-is.production.min.js";import"./Menu.js";import"./List.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./tslib.js";import"./Loader.js";import"./Stack.js";import"./index13.js";import"./index14.js";import"./regex.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./constants.js";import"./object.helper.js";import"./HeaderTitle.js";import"./Divider.js";import"./TextInput.js";import"./CustomDecimal.js";import"./react-number-format.es.js";const G={label:"Rutas",name:"ruta",value:"%%",list:[{value:"%%",label:"Todas"},{value:"San Miguelito",label:"SM"},{value:"Panam\xE1",label:"PMA"},{value:"R\xEDo Abajo",label:"RA"},{value:"Juan D\xEDaz",label:"JD"},{value:"Chorrera",label:"CHO"},{value:"Chilibre",label:"CHI"},{value:"Pacora",label:"PAC"},{value:"Dari\xE9n",label:"DAR"},{value:"Oficina",label:"OF"},{value:"Interior",label:"INT"},{value:"Veracruz",label:"VER"}]},W={label:"Presentadas en DGI",name:"presentada",value:"%%",list:[{value:"%%",label:"Todas"},{value:"si",label:"Si presentadas"},{value:"no",label:"No presentadas"}]},v={label:"Regres\xF3 al local",name:"regreso",value:"%%",list:[{value:"%%",label:"Todas"},{value:"si",label:"Si se regres\xF3"},{value:"no",label:"No se regres\xF3"}]},U=[{name:"impresa",value:"no",label:"No impresas"}],J=({value:s,id:n})=>{const{ref:e,visible:c,setVisible:o}=$(!1),{rutaAlternaState:h,set:p}=u.exports.useContext(P),[l,r]=u.exports.useState(s||0),{send:i,isLoading:d}=A();return T("form",{ref:e,onSubmit:async m=>{m.preventDefault();const x=await i({url:`/admin/ruta-alterna/${n}/edit-total-cobrado`,method:"POST",data:{total:l}}),f=[...h],g=f.findIndex(b=>b.id===n);x.status===201?(f[g].total_cobrado=l,p([...f]),o(!1)):r(f[g].total_cobrado||0)},children:[!c&&t("span",{onClick:()=>o(!0),style:{cursor:"pointer"},children:d?t(w,{}):O(s)}),c&&t(V,{label:"Total Cobrado",size:"small",value:l,onChange:m=>r(Number(m.target.value)),loading:d,style:{minWidth:150}})]})},q=()=>{var c,o,h,p;const{selectedList:s,setSelectedList:n,value:e}=u.exports.useContext(E);return t(y,{children:t("div",{style:{display:"flex",justifyContent:"center"},children:t(L,{checked:s.filter(l=>{var r,i;return(i=(r=e==null?void 0:e.data)==null?void 0:r.resultados)==null?void 0:i.map(d=>d.id).includes(l.id)}).length===(((o=(c=e==null?void 0:e.data)==null?void 0:c.resultados)==null?void 0:o.length)||0),indeterminate:s.filter(l=>{var r,i;return(i=(r=e==null?void 0:e.data)==null?void 0:r.resultados)==null?void 0:i.map(d=>d.id).includes(l.id)}).length>0&&s.filter(l=>{var r,i;return(i=(r=e==null?void 0:e.data)==null?void 0:r.resultados)==null?void 0:i.map(d=>d.id).includes(l.id)}).length<(((p=(h=e==null?void 0:e.data)==null?void 0:h.resultados)==null?void 0:p.length)||0),onChange:({target:{checked:l}})=>{l?l&&e&&e.data&&n([...s,...e.data.resultados.filter(r=>{var i;return r.id!==((i=s.find(d=>r.id===d.id))==null?void 0:i.id)})]):n([])}})})})},Q=()=>{const{rutaAlternaState:s,set:n}=u.exports.useContext(P),{send:e,isLoading:c}=A();return{handleCheck:async({id:h,name:p})=>{if((await e({url:`/admin/ruta-alterna/${h}/${p}`,method:"POST"})).status===201){const r=s.findIndex(d=>d.id===h),i=[...s];i[r][p]=!Boolean(Number(i[r][p])),n([...i])}},isLoading:c}},R=({id:s,name:n,value:e})=>{const{handleCheck:c,isLoading:o}=Q();return t(y,{children:t(k,{label:Boolean(Number(e))?"SI":"NO",color:Boolean(Number(e))?"success":"error",onClick:()=>c({id:s,name:n}),loading:o})})},K=()=>{const{rutaAlternaState:s,set:n}=u.exports.useContext(P),{send:e,isLoading:c}=A(),[o,h]=u.exports.useState(),[p,l]=u.exports.useState(""),r=["ACH","CHEQUE","EFECTIVO","NO PAGADO"],i=()=>{const m=s.findIndex(f=>f.id===(o==null?void 0:o.id)),x=[...s];x[m].tipo_pago=p,n([...x])},d=async()=>{try{(o==null?void 0:o.tipo)!==p&&(await e({url:`/admin/ruta-alterna/${o==null?void 0:o.id}/edit-tipo-pago`,method:"POST",data:{tipo:o==null?void 0:o.tipo}})).status!==201&&i()}catch{i()}finally{l("")}};return u.exports.useEffect(()=>{const m=setTimeout(()=>{o&&d()},1e3);return()=>clearTimeout(m)},[o]),{handleChangeTipo:(m,x)=>{const f=r.findIndex(S=>S===x),g=s.findIndex(S=>S.id===m),b=[...s],C=r[f+1>r.length-1?0:f+1];b[g].tipo_pago=C,n([...b]),p===""&&l(x),h({id:m,tipo:C})},isLoading:c}},X=({id:s,name:n})=>{const{handleChangeTipo:e,isLoading:c}=K();return t(y,{children:t(k,{label:n,color:n==="NO PAGADO"?"error":"success",onClick:()=>e(s,n),loading:c})})},Y=u.exports.lazy(()=>z(()=>import("./Acciones7.js"),["assets/Acciones7.js","assets/index.js","assets/index.css","assets/Print.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/CustomDatePicker.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/Typography.js","assets/extendSxProp.js","assets/usePickerState.js","assets/Grid.js","assets/IconButton.js","assets/ButtonBase.js","assets/Modal2.js","assets/Close2.js","assets/Error.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Button.js","assets/InputAdornment.js","assets/TextField.js","assets/react-is.production.min.js","assets/Menu.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/index7.js","assets/CustomSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/AssignmentRounded.js","assets/Tooltip.js","assets/ContentProvider.js","assets/useModal.js","assets/jwt-decode.esm.js","assets/Stack.js","assets/BootstrapTooltip.js","assets/BackgroundLoader.js","assets/platform.js","assets/useHandlePrint.js","assets/index37.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/tslib.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/constants.js","assets/object.helper.js","assets/useFetch.js","assets/Loader.js","assets/HeaderTitle.js","assets/Divider.js","assets/Box.js"])),ut=()=>{var I,N;const{factura:s}=j(),{loading:n,value:e,page:c,handlePage:o,handleSkipNext:h,handleSkipPrev:p,filterList:l,setFilter:r,inputRef:i,sendSearch:d,filterRadioList:_,setFilterRadio:m,onClearSearch:x,reset:f,selectedList:g,setSelectedList:b}=u.exports.useContext(E),{rutaAlternaState:C,set:S}=u.exports.useContext(P);return u.exports.useEffect(()=>{(()=>{f(),S([])})()},[s]),u.exports.useEffect(()=>{(()=>{e&&e.status===201&&e.data&&S(e.data.resultados)})()},[e]),T(y,{children:[t(H,{title:"Lista de facturas alternas realizadas",size:"small",stickyHeader:!0,containerSx:{maxHeight:a=>`calc(100vh - ${a.spacing(15)})`},isSearch:{helperText:"por nombre del negocio, RUC o fecha. Ejm: 30-01-2020",focus:!0,input:{inputRef:i,onClick:d,onClear:x}},filter:{filterCheck:{setFilter:r,filterList:l,list:U},filterRadio:{setFilterRadio:m,filterRadioList:_,radios:[G,W,v]}},loading:n,notFound:(e==null?void 0:e.status)!==201&&t(B,{text:(I=e==null?void 0:e.error)==null?void 0:I.message}),tableHeader:[t(q,{}),"Nombre del negocio","Cliente","RUC","Ruta","Fecha","Total","Total cobrado","Impresa","Tipo de pago","Pagada","\xBFSe regres\xF3?","P. DGI"],tableBody:C==null?void 0:C.map(a=>[t("div",{style:{display:"flex",justifyContent:"center"},children:t(L,{checked:g.map(F=>F.id).includes(a.id),onChange:({target:{checked:F}})=>{b(F?[...g,a]:[...g.filter(D=>D.id!==a.id)])}})}),t("div",{style:{overflow:"hidden",maxWidth:"350px",textOverflow:"ellipsis"},children:t("span",{style:{textTransform:"uppercase"},children:a.nombre_negocio})}),t("div",{style:{overflow:"hidden",maxWidth:"350px",textOverflow:"ellipsis"},children:T("span",{style:{textTransform:"uppercase"},children:[a.tipo_personal&&a.tipo_personal!==""?T("span",{style:{fontWeight:"bold"},children:[a.tipo_personal," -"," "]}):"",a.nom_cliente]})}),t("span",{style:{textTransform:"uppercase"},children:a.ruc}),t("span",{style:{textTransform:"uppercase"},children:a.ruta_iniciales}),t("span",{style:{textTransform:"uppercase"},children:a.fecha_ruta&&M(`${new Date(a.fecha_ruta)}`,"dd/MM/yy h:mm a")}),O(a.total),t(J,{id:a.id,value:a.total_cobrado}),t(k,{label:a.fecha_ruta?"SI":"NO",color:a.fecha_ruta?"success":"error"}),t(X,{id:a.id,name:a.tipo_pago}),t(R,{id:a.id,name:"cobro",value:a.cobro}),t(R,{id:a.id,name:"regreso",value:a.regreso}),t(R,{id:a.id,name:"presentada",value:a.presentada})]),pagination:{count:(N=e==null?void 0:e.data)==null?void 0:N.paginas,onChange:o,page:c},selectedCount:g.length,onSkipPrev:p,onSkipNext:h}),t(u.exports.Suspense,{fallback:t("div",{}),children:t(Y,{})})]})};export{ut as default};
