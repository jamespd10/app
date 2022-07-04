var A=Object.defineProperty,L=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var _=(t,o,r)=>o in t?A(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,n=(t,o)=>{for(var r in o||(o={}))w.call(o,r)&&_(t,r,o[r]);if(l)for(var r of l(o))D.call(o,r)&&_(t,r,o[r]);return t},P=(t,o)=>L(t,O(o));var k=(t,o)=>{var r={};for(var i in t)w.call(t,i)&&o.indexOf(i)<0&&(r[i]=t[i]);if(t!=null&&l)for(var i of l(t))o.indexOf(i)<0&&D.call(t,i)&&(r[i]=t[i]);return r};import{r as C,b as y,ap as B,a7 as E,j as v,F as x,a as e}from"./index.js";import{d as I}from"./PointOfSale.js";import{d as N}from"./Print.js";import R from"./CustomSpeedDial.js";import"./BootstrapTooltip.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import{B as T}from"./BackgroundLoader.js";import"./Modal.js";import"./SelectedCard.js";import{u as F}from"./index27.js";import{u as V}from"./useFetch.js";import{u as $}from"./useHandlePrint.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./Backdrop.js";import"./Stack.js";import"./Typography.js";import"./useModal.js";import"./CircularProgress.js";import"./Close2.js";import"./ModalTransition.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./CheckCircle.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useList.js";import"./useHttpService.js";import"./TextInput.js";import"./TextField.js";import"./List.js";import"./GlobalStyles.js";import"./Search.js";import"./Clear.js";import"./Box.js";import"./InputAdornment.js";import"./FilterList.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./Divider.js";import"./listItemTextClasses.js";import"./Checkbox.js";import"./ListItem.js";import"./Add.js";import"./TableRow.js";import"./Autocomplete.js";import"./Close.js";import"./Chip.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./useComponentVisible.js";import"./CheckBoxOutlineBlank.js";import"./ErrorOutline.js";import"./AutocompleteServer.js";import"./ChipState.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./string.helper.js";import"./regex.js";import"./CustomSipe.js";import"./index11.js";import"./StyledGridOverlay.js";import"./LinearProgress.js";import"./index23.js";const z=()=>{const f=F(),{data:t,setData:o}=f,r=k(f,["data","setData"]),{selected:i,setSelected:u}=r,{isLoading:p,send:m,reset:s,response:S}=V();return{handleChecker:async(c,h)=>{s();const g=await m({url:"/admin/fact-alterna/check",method:"POST",data:n({facturas:i.map(d=>({id:d.id})),type:c},h)});if(g.status===201&&g.data&&t){const d=t;for(const[b,[,a]]of Object.entries(Object.entries(t)))i.map(j=>j.id).includes(a.id)&&(d[Number(b)]=P(n(n({},a),h),{fecha_impresion:c==="print"?new Date(Date.now()):a.fecha_impresion,fecha_anulacion:c==="anular"?new Date(Date.now()):a.fecha_anulacion,cancelado:c==="pagar"?new Date(Date.now()):a.cancelado}));o([...d]),u([])}},isLoading:p,response:S,reset:s}},G=C.exports.lazy(()=>y(()=>import("./FactPrintView.js"),["assets/FactPrintView.js","assets/date.helper.js","assets/index.js","assets/index6.css","assets/index30.js","assets/string.helper.js","assets/regex.js"])),Pr=()=>{const{factura:t}=B(),o=E(),{selected:r}=F(),{handleChecker:i,isLoading:u}=z(),p=$({pageStyle:"@page { margin: 0 !important; }",onAfterPrint:async()=>await i("print")});return v(x,{children:[v(x,{children:[e(T,{open:u||p.printing}),e(R,{titles:["Facturar",...r.length>0?["Imprimir facturas"]:[]],icons:[I,...r.length>0?[N]:[]],onPresses:[()=>o(`/negocios?fa=${t}`),...r.length>0?[()=>p.handlePrint()]:[]]})]}),e("div",{style:{display:"none"},children:e("div",{ref:p.elementRef,children:r.length>0&&r.sort((m,s)=>(m.recorrido||0)-(s.recorrido||0)).map(m=>e(C.exports.Suspense,{fallback:e("div",{}),children:e(G,n({},m))},m.id))})})]})};export{Pr as default};
