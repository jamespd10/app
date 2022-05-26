var C=Object.defineProperty,D=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var g=(o,r,t)=>r in o?C(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,a=(o,r)=>{for(var t in r||(r={}))v.call(r,t)&&g(o,t,r[t]);if(h)for(var t of h(r))S.call(r,t)&&g(o,t,r[t]);return o},P=(o,r)=>D(o,k(r));import{r as d,q as j,t as b,j as A,F,a as i}from"./index.js";import{d as L}from"./PointOfSale.js";import{d as O}from"./Print.js";import y from"./CustomSpeedDial.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import{B as z}from"./BackgroundLoader.js";import"./Modal2.js";import"./platform.js";import{u as R}from"./useFetch.js";import{P as B,a as E}from"./index30.js";import{u as I}from"./useHandlePrint.js";import{u as N}from"./useDataGrid.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./ButtonBase.js";import"./Tooltip.js";import"./Portal.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./Backdrop.js";import"./Stack.js";import"./extendSxProp.js";import"./useModal.js";import"./Close2.js";import"./DialogTitle.js";import"./Modal.js";import"./Paper.js";import"./Typography.js";import"./IconButton.js";import"./Error.js";import"./Button.js";import"./useHttpService.js";import"./constants.js";import"./Edit.js";import"./ChipState.js";import"./Chip.js";import"./string.helper.js";import"./regex.js";import"./dateHelper.js";import"./index13.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./tslib.js";import"./useList.js";import"./usePrevious.js";import"./object.helper.js";import"./HeaderTitle.js";import"./Divider.js";import"./Box.js";import"./TextInput.js";import"./TextField.js";import"./Menu.js";import"./List.js";import"./GlobalStyles.js";import"./Search.js";import"./Clear.js";import"./InputAdornment.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./listItemTextClasses.js";import"./Checkbox.js";import"./ListItem.js";import"./listItemButtonClasses.js";import"./Add.js";import"./SkipNextOutlined.js";import"./Autocomplete.js";import"./Close.js";import"./Pagination.js";import"./useMediaQuery.js";import"./useComponentVisible.js";import"./CheckBoxOutlineBlank.js";import"./AutocompleteServer.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./CustomSipe.js";import"./index7.js";const T=()=>{const{proformasState:o,set:r}=d.exports.useContext(B),{selectedList:t,setSelectedList:l}=d.exports.useContext(E),{isLoading:m,send:e,reset:n,response:_}=R();return{handleChecker:async(s,f)=>{n();const u=await e({url:"/admin/proformas/check",method:"POST",data:a({proformas:t==null?void 0:t.map(c=>({id:c.id})),type:s},f)});if(u.status===201&&u.data){const c=o;for(const[x,[,p]]of Object.entries(Object.entries(o)))t.map(w=>w.id).includes(p.id)&&(c[Number(x)]=P(a(a({},p),f),{fecha_impresion:s==="print"?new Date(Date.now()):p.fecha_impresion,fecha_anulacion:s==="anular"?new Date(Date.now()):p.fecha_anulacion,cancelado:s==="pagar"?new Date(Date.now()):p.cancelado}));r([...c]),l([])}},isLoading:m,response:_,reset:n}},V=d.exports.lazy(()=>j(()=>import("./ProformaPrintView.js"),["assets/ProformaPrintView.js","assets/date.helper.js","assets/index.js","assets/index2.css","assets/index13.js","assets/index14.js","assets/string.helper.js","assets/regex.js"])),wt=()=>{const o=b(),{selected:r}=N(),{handleChecker:t,isLoading:l}=T(),m=I({pageStyle:"@page { margin: 0 !important; size: letter; }",onAfterPrint:async()=>await t("print"),title:"Proformas"});return A(F,{children:[i(z,{open:l||m.printing}),i(y,{titles:["Realizar proforma",...r.length>0?["Imprimir proformas"]:[]],icons:[L,...r.length>0?[O]:[]],onPresses:[()=>o("/negocios?f=1"),...r.length>0?[()=>m.handlePrint()]:[]]}),i("div",{style:{display:"none"},children:i("div",{ref:m.elementRef,children:r.length>0&&r.sort((e,n)=>(e.recorrido||0)-(n.recorrido||0)).map(e=>i(d.exports.Suspense,{fallback:i("div",{}),children:i(V,a({},e))},e.id))})})]})};export{wt as default};
