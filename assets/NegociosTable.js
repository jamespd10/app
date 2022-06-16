var R=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var S=(t,a)=>{var i={};for(var r in t)k.call(t,r)&&a.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&R)for(var r of R(t))a.indexOf(r)<0&&E.call(t,r)&&(i[r]=t[r]);return i};import{r as u,a as e,F as A,A as P,X as B}from"./index.js";import{B as F}from"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{N as L}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{C as b}from"./ChipState.js";import"./Modal.js";import"./platform.js";import{C as T}from"./CustomTable.js";import{d as f}from"./Visibility.js";import{a as I}from"./NegociosProvider.js";import{u as _}from"./useFetch.js";import{I as V}from"./IconButton.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./Grid.js";import"./Typography.js";import"./useModal.js";import"./Error.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./Chip.js";import"./ButtonBase.js";import"./Close2.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./Button.js";import"./Search.js";import"./Clear.js";import"./TextField.js";import"./FormHelperText.js";import"./react-is.production.min.js";import"./List.js";import"./GlobalStyles.js";import"./Box.js";import"./InputAdornment.js";import"./FormGroup.js";import"./FormControlLabel.js";import"./Checkbox.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./useAsyncRetry.js";import"./TableRow.js";import"./Loader.js";import"./Stack.js";import"./LinearProgress.js";import"./useFetchPagination.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";const y={label:"Rutas",name:"ruta",value:"%%",list:[{value:"%%",label:"Todas"},{value:"San Miguelito",label:"SM"},{value:"Panam\xE1",label:"PMA"},{value:"R\xEDo Abajo",label:"RA"},{value:"Juan D\xEDaz",label:"JD"},{value:"Chorrera",label:"CHO"},{value:"Chilibre",label:"CHI"},{value:"Pacora",label:"PAC"},{value:"Dari\xE9n",label:"DAR"},{value:"Oficina",label:"OF"},{value:"Interior",label:"INT"},{value:"Veracruz",label:"VER"}]},M=()=>{const{negocios:t,setNegocios:a}=u.exports.useContext(I),{send:i,isLoading:r}=_();return{handleCheck:async({id:c,id_cliente:m,name:p})=>{if((await i({url:`/admin/negocios/${c}/${m}/mark`,method:"POST"})).status===201&&t){const d=t.findIndex(h=>h.id===c),l=[...t];l[d][p]=!Boolean(Number(l[d][p])),a([...l])}},isLoading:r}},z=({id:t,id_cliente:a,name:i,label:r,color:s})=>{const{handleCheck:c,isLoading:m}=M();return e(A,{children:e(b,{label:r,color:s,onClick:()=>c({id:t,id_cliente:a,name:i}),loading:m})})},qo=t=>{var x,N;const{authState:a}=u.exports.useContext(P),{tipo:i}=a,C=u.exports.useContext(I),{loading:r,negocios:s,handlePage:c}=C,m=S(C,["loading","negocios","handlePage"]),{page:p,handleSkipPrev:g,handleSkipNext:d,inputRef:l,sendSearch:h}=m,{value:n,onClearSearch:O,setFilterRadio:D,filterRadioList:$}=m;return e(A,{children:e(T,{title:"Lista de negocios",size:"small",filter:{filterRadio:{setFilterRadio:D,filterRadioList:$,radios:[y]}},isSearch:{focus:!location.pathname.includes("clientes"),input:{inputRef:l,onClick:h,onClear:O}},notFound:(n==null?void 0:n.status)!==201&&e(L,{text:(x=n==null?void 0:n.error)==null?void 0:x.message}),loading:r,tableHeader:["Acci\xF3n","Nombre del negocio","RUC","Ruta","Recorrido","Aviso de operaci\xF3n",...i==="Super"?["Super validado","Operando"]:[],"Pendientes"],tableBody:s==null?void 0:s.map(o=>[e(F,{title:t.actionTitle||"Ver",placement:"right",children:e(V,{component:B,to:t.actionLink?`/negocios/${o.id}/${o.id_cliente}${t.actionLink}`:`/negocios/${o.id}/${o.id_cliente}`,state:o,color:"primary",children:t.actionIcon?e(f,{component:t.actionIcon}):e(f,{})})},`${o.id}-tooltip`),e("span",{style:{textTransform:"uppercase"},children:o.nombre_negocio||e("strong",{children:"SIN NOMBRE"})},`${o.id}-nombre`),o.ruc||e("strong",{children:"SIN RUC"}),o.ruta||e("strong",{children:"SIN RUTA"}),e("div",{style:{textAlign:"center"},children:o.recorrido||e("strong",{children:"SIN RECORRIDO"})},`${o.id}-recorrido`),o.aviso_operacion||e("strong",{children:"SIN AVISO DE OPERACI\xD3N"}),...i==="Super"?[e(b,{label:`${Boolean(Number(o.super_validado))?"VALIDADO":"NO VALIDADO"}`,color:Boolean(Number(o.super_validado))?"success":"error"},`${o.id}-validado`),e(z,{id:o.id,id_cliente:o.id_cliente,name:"cerrado",label:Boolean(Number(o.cerrado))?"CERRADO":"OPERANDO",color:Boolean(Number(o.cerrado))?"error":"success"},`${o.id}-operando`)]:[],e(b,{label:`${o.pendientes}`,color:o.pendientes==="SI"?"error":"success"},`${o.id}-pendientes`)]),pagination:{count:(N=n==null?void 0:n.data)==null?void 0:N.paginas,onChange:c,page:p},onSkipPrev:g,onSkipNext:d})})};export{qo as default};
