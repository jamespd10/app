var R=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var S=(t,a)=>{var i={};for(var e in t)k.call(t,e)&&a.indexOf(e)<0&&(i[e]=t[e]);if(t!=null&&R)for(var e of R(t))a.indexOf(e)<0&&E.call(t,e)&&(i[e]=t[e]);return i};import{r as u,a as r,F as A,A as P,X as B}from"./index.js";import{B as F}from"./BootstrapTooltip.js";import{N as L}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{C as b}from"./ChipState.js";import"./Modal.js";import"./SelectedCard.js";import{C as T}from"./CustomTable.js";import{d as f}from"./Visibility.js";import{a as I}from"./NegociosProvider.js";import{u as _}from"./useFetch.js";import{I as V}from"./IconButton.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./Grid.js";import"./Typography.js";import"./useModal.js";import"./Error.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./Chip.js";import"./ButtonBase.js";import"./Close2.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./react-is.production.min.js";import"./List.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./TableRow.js";import"./Loader.js";import"./Stack.js";import"./LinearProgress.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";const y={label:"Rutas",name:"ruta",value:"%%",list:[{value:"%%",label:"Todas"},{value:"San Miguelito",label:"SM"},{value:"Panam\xE1",label:"PMA"},{value:"R\xEDo Abajo",label:"RA"},{value:"Juan D\xEDaz",label:"JD"},{value:"Chorrera",label:"CHO"},{value:"Chilibre",label:"CHI"},{value:"Pacora",label:"PAC"},{value:"Dari\xE9n",label:"DAR"},{value:"Oficina",label:"OF"},{value:"Interior",label:"INT"},{value:"Veracruz",label:"VER"}]},M=()=>{const{negocios:t,setNegocios:a}=u.exports.useContext(I),{send:i,isLoading:e}=_();return{handleCheck:async({id:c,id_cliente:m,name:l})=>{if((await i({url:`/admin/negocios/${c}/${m}/mark`,method:"POST"})).status===201&&t){const d=t.findIndex(h=>h.id===c),p=[...t];p[d][l]=!Boolean(Number(p[d][l])),a([...p])}},isLoading:e}},z=({id:t,id_cliente:a,name:i,label:e,color:s})=>{const{handleCheck:c,isLoading:m}=M();return r(A,{children:r(b,{label:e,color:s,onClick:()=>c({id:t,id_cliente:a,name:i}),loading:m})})},Ko=t=>{var x,N;const{authState:a}=u.exports.useContext(P),{tipo:i}=a,C=u.exports.useContext(I),{loading:e,negocios:s,handlePage:c}=C,m=S(C,["loading","negocios","handlePage"]),{page:l,handleSkipPrev:g,handleSkipNext:d,inputRef:p,sendSearch:h}=m,{value:n,onClearSearch:O,setFilterRadio:D,filterRadioList:$}=m;return r(A,{children:r(T,{title:"Lista de negocios",size:"small",filter:{filterRadio:{setFilterRadio:D,filterRadioList:$,radios:[y]}},isSearch:{focus:!location.pathname.includes("clientes"),input:{inputRef:p,onClick:h,onClear:O}},notFound:(n==null?void 0:n.status)!==201&&r(L,{text:(x=n==null?void 0:n.error)==null?void 0:x.message}),loading:e,tableHeader:["Acci\xF3n","Nombre del negocio","RUC","Ruta","Recorrido","Aviso de operaci\xF3n",...i==="Super"?["Super validado","Operando"]:[],"Pendientes"],tableBody:s==null?void 0:s.map(o=>[r(F,{title:t.actionTitle||"Ver",placement:"right",children:r(V,{component:B,to:t.actionLink?`/negocios/${o.id}/${o.id_cliente}${t.actionLink}`:`/negocios/${o.id}/${o.id_cliente}`,state:o,color:"primary",children:t.actionIcon?r(f,{component:t.actionIcon}):r(f,{})})},`${o.id}-tooltip`),r("span",{style:{textTransform:"uppercase"},children:o.nombre_negocio||r("strong",{children:"SIN NOMBRE"})},`${o.id}-nombre`),o.ruc||r("strong",{children:"SIN RUC"}),o.ruta||r("strong",{children:"SIN RUTA"}),r("div",{style:{textAlign:"center"},children:o.recorrido||r("strong",{children:"SIN RECORRIDO"})},`${o.id}-recorrido`),o.aviso_operacion||r("strong",{children:"SIN AVISO DE OPERACI\xD3N"}),...i==="Super"?[r(b,{label:`${Boolean(Number(o.super_validado))?"VALIDADO":"NO VALIDADO"}`,color:Boolean(Number(o.super_validado))?"success":"error"},`${o.id}-validado`),r(z,{id:o.id,id_cliente:o.id_cliente,name:"cerrado",label:Boolean(Number(o.cerrado))?"CERRADO":"OPERANDO",color:Boolean(Number(o.cerrado))?"error":"success"},`${o.id}-operando`)]:[],r(b,{label:`${o.pendientes}`,color:o.pendientes==="SI"?"error":"success"},`${o.id}-pendientes`)]),pagination:{count:(N=n==null?void 0:n.data)==null?void 0:N.paginas,onChange:c,page:l},onSkipPrev:g,onSkipNext:d})})};export{Ko as default};
