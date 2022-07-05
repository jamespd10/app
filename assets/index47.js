var L=Object.defineProperty;var m=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var x=(a,e,t)=>e in a?L(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,R=(a,e)=>{for(var t in e||(e={}))_.call(e,t)&&x(a,t,e[t]);if(m)for(var t of m(e))y.call(e,t)&&x(a,t,e[t]);return a};import{r as o,a as r,b as C,j as F}from"./index.js";import{u as b}from"./useFetchPagination.js";import{u as j}from"./useFetch.js";import{_ as A}from"./useList.js";import{_ as k}from"./useAsync.js";import{L as I}from"./Loader.js";import{H as O}from"./HeaderTitle.js";import{B as T}from"./Box.js";const D=[],w=(a,e)=>{switch(e.type){case"set":return[...e.payload];default:return a}},z=()=>{const[a,e]=o.exports.useReducer(w,D);return{rutaAlternaState:a,dispatch:e}},B=o.exports.createContext({}),E=({children:a})=>{const{rutaAlternaState:e,dispatch:t}=z();return r(B.Provider,{value:{rutaAlternaState:e,set:i=>t({type:"set",payload:i})},children:a})},v=o.exports.createContext({}),H=({children:a,route:e})=>{const t=b(e,{isCheckList:!0,isRadioList:!0});return r(v.Provider,{value:{loading:t.loading,value:t.value,page:t.page,handlePage:t.handlePage,handleSkipNext:t.handleSkipNext,handleSkipPrev:t.handleSkipPrev,filterList:t.filterList,setFilter:t.setFilter,inputRef:t.inputRef,sendSearch:t.sendSearch,filterRadioList:t.filterRadioList,setFilterRadio:t.setFilterRadio,onClearSearch:t.onClearSearch,reset:t.reset,selectedList:t.selectedList,setSelectedList:t.setSelectedList,retry:t.retry},children:a})},M=o.exports.createContext({}),N=({children:a})=>{const{filterRadioList:e}=o.exports.useContext(v),[t,i]=o.exports.useState(null),[u,{push:l,updateAt:d}]=A([]),{send:S}=j();return k(async()=>{(async()=>{var c,p,f;const P=e.flatMap(s=>Object.keys(s)).findIndex(s=>s==="ruta"),n=Object.assign(R({},e[P]));if(n.ruta&&n.ruta!==""&&n.ruta!=="%%"){const s=await S({url:"/admin/ruta-proformas/count",params:{ruta:n.ruta}});if(s.status===201&&((c=s.data)==null?void 0:c.total)){const h=u.findIndex(g=>g.ruta===n.ruta);h>-1?d(h,{ruta:n.ruta,counter:((p=s.data)==null?void 0:p.total)+1}):l({ruta:n.ruta,counter:((f=s.data)==null?void 0:f.total)+1})}}})()},[e]),r(M.Provider,{value:{listFechas:u,push:l,updateAt:d,selectedDate:t,setDate:i},children:a})},V=o.exports.lazy(()=>C(()=>import("./RutasTable2.js"),["assets/RutasTable2.js","assets/index.js","assets/index6.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/NotFoundResults.js","assets/Grid.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/ChipState.js","assets/CheckCircle.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/Chip.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CircularProgress.js","assets/Modal.js","assets/Close2.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/CustomTable.js","assets/Search.js","assets/Clear.js","assets/TextField.js","assets/react-is.production.min.js","assets/List.js","assets/GlobalStyles.js","assets/Box.js","assets/InputAdornment.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/TableRow.js","assets/Loader.js","assets/Stack.js","assets/LinearProgress.js","assets/date.helper.js","assets/index30.js","assets/string.helper.js","assets/regex.js","assets/InputDecimal.js","assets/TextInput.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/useFetch.js","assets/useHttpService.js","assets/useComponentVisible.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useList.js","assets/usePrevious.js","assets/object.helper.js","assets/HeaderTitle.js","assets/Divider.js"])),$=()=>F(E,{children:[r(O,{message:"Ruta - proformas"}),r(T,{style:{marginTop:10},children:r(H,{route:"/admin/ruta-proformas",children:r(N,{children:r(o.exports.Suspense,{fallback:r(I,{}),children:r(V,{})})})})})]});var et=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));export{B as R,v as a,M as b,et as i};
