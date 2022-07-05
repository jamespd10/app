var y=Object.defineProperty;var m=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var R=(a,t,r)=>t in a?y(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,v=(a,t)=>{for(var r in t||(t={}))C.call(t,r)&&R(a,r,t[r]);if(m)for(var r of m(t))F.call(t,r)&&R(a,r,t[r]);return a};import{r as o,a as s,ap as u,b,j}from"./index.js";import{u as A}from"./useFetchPagination.js";import{u as k}from"./useFetch.js";import{_ as I}from"./useList.js";import{_ as O}from"./useAsync.js";import{L as T}from"./Loader.js";import{H as D}from"./HeaderTitle.js";import{B as w}from"./Box.js";const z=[],B=(a,t)=>{switch(t.type){case"set":return[...t.payload];default:return a}},E=()=>{const[a,t]=o.exports.useReducer(B,z);return{rutaAlternaState:a,dispatch:t}},H=o.exports.createContext({}),M=({children:a})=>{const{rutaAlternaState:t,dispatch:r}=E();return s(H.Provider,{value:{rutaAlternaState:t,set:e=>r({type:"set",payload:e})},children:a})},P=o.exports.createContext({}),N=({children:a,route:t})=>{const{factura:r}=u(),e=A(t,{isCheckList:!0,isRadioList:!0,params:{facturas_tipo:r}});return s(P.Provider,{value:{loading:e.loading,value:e.value,page:e.page,handlePage:e.handlePage,handleSkipNext:e.handleSkipNext,handleSkipPrev:e.handleSkipPrev,filterList:e.filterList,setFilter:e.setFilter,inputRef:e.inputRef,sendSearch:e.sendSearch,filterRadioList:e.filterRadioList,setFilterRadio:e.setFilterRadio,onClearSearch:e.onClearSearch,reset:e.reset,selectedList:e.selectedList,setSelectedList:e.setSelectedList,retry:e.retry},children:a})},$=o.exports.createContext({}),V=({children:a})=>{const{filterRadioList:t}=o.exports.useContext(P),[r,e]=o.exports.useState(null),[l,{push:c,updateAt:d}]=I([]),{send:S}=k(),{factura:_}=u();return O(async()=>{(async()=>{var p,f,h;const g=t.flatMap(n=>Object.keys(n)).findIndex(n=>n==="ruta"),i=Object.assign(v({},t[g]));if(i.ruta&&i.ruta!==""&&i.ruta!=="%%"){const n=await S({url:"/admin/ruta-alterna/count",params:{ruta:i.ruta}});if(n.status===201&&((p=n.data)==null?void 0:p.total)){const x=l.findIndex(L=>L.ruta===i.ruta);x>-1?d(x,{ruta:i.ruta,counter:((f=n.data)==null?void 0:f.total)+1}):c({ruta:i.ruta,counter:((h=n.data)==null?void 0:h.total)+1})}}})()},[_,t]),s($.Provider,{value:{listFechas:l,push:c,updateAt:d,selectedDate:r,setDate:e},children:a})},q=o.exports.lazy(()=>b(()=>import("./RutasTable.js"),["assets/RutasTable.js","assets/index.js","assets/index6.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/NotFoundResults.js","assets/Grid.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/ChipState.js","assets/CheckCircle.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/Chip.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CircularProgress.js","assets/Modal.js","assets/Close2.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/CustomTable.js","assets/Search.js","assets/Clear.js","assets/TextField.js","assets/react-is.production.min.js","assets/List.js","assets/GlobalStyles.js","assets/Box.js","assets/InputAdornment.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/TableRow.js","assets/Loader.js","assets/Stack.js","assets/LinearProgress.js","assets/date.helper.js","assets/index30.js","assets/string.helper.js","assets/regex.js","assets/InputDecimal.js","assets/TextInput.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/useFetch.js","assets/useHttpService.js","assets/useComponentVisible.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useList.js","assets/usePrevious.js","assets/object.helper.js","assets/HeaderTitle.js","assets/Divider.js"])),G=()=>{const{factura:a}=u();return j(M,{children:[s(D,{message:`Ruta - ${a}`}),s(w,{sx:{marginTop:2},children:s(N,{route:"/admin/ruta-alterna",children:s(V,{children:s(o.exports.Suspense,{fallback:s(T,{}),children:s(q,{})})})})})]})};var rt=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{H as R,P as a,$ as b,rt as i};
