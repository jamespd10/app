var C=Object.defineProperty,v=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var f=(t,e,a)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,x=(t,e)=>{for(var a in e||(e={}))h.call(e,a)&&f(t,a,e[a]);if(u)for(var a of u(e))b.call(e,a)&&f(t,a,e[a]);return t},_=(t,e)=>v(t,k(e));var g=(t,e)=>{var a={};for(var s in t)h.call(t,s)&&e.indexOf(s)<0&&(a[s]=t[s]);if(t!=null&&u)for(var s of u(t))e.indexOf(s)<0&&b.call(t,s)&&(a[s]=t[s]);return a};import{r as n,q as S,j as y,F as P,a as r,a5 as A}from"./index.js";import{d as I}from"./Edit.js";import{C as T}from"./ChipState.js";import{u as D}from"./useModal.js";import{f as O}from"./string.helper.js";import{u as j,D as w,a as E,b as M}from"./useDataGrid.js";import{g as N}from"./dateHelper.js";import{u as F}from"./useFetch.js";import{I as z}from"./IconButton.js";import"./jwt-decode.esm.js";import{u as B}from"./useFetchPagination.js";import{_ as G}from"./useAsyncRetry.js";import{H}from"./HeaderTitle.js";import{B as V}from"./Box.js";const $=n.exports.lazy(()=>S(()=>import("./ModalEdit.js"),["assets/ModalEdit.js","assets/index.js","assets/index6.css","assets/array.js","assets/upperFirst.js","assets/useAsyncRetry.js","assets/Loader.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/useHttpService.js","assets/useFetch.js","assets/jwt-decode.esm.js","assets/facturacionSchema.js","assets/regex.js","assets/Alert.js","assets/Close.js","assets/Edit.js","assets/ChipState.js","assets/Chip.js","assets/useModal.js","assets/string.helper.js","assets/useDataGrid.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/react-is.production.min.js","assets/Menu.js","assets/Grow.js","assets/List.js","assets/GlobalStyles.js","assets/Search.js","assets/Clear.js","assets/Box.js","assets/InputAdornment.js","assets/base64.js","assets/MenuItem.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/useList.js","assets/Checkbox.js","assets/ListItem.js","assets/listItemButtonClasses.js","assets/Stack.js","assets/Add.js","assets/SkipNextOutlined.js","assets/Autocomplete.js","assets/Tooltip.js","assets/Pagination.js","assets/useComponentVisible.js","assets/CheckBoxOutlineBlank.js","assets/AutocompleteServer.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/CustomSipe.js","assets/index7.js","assets/LinearProgress.js","assets/dateHelper.js","assets/index13.js","assets/useFetchPagination.js","assets/usePrevious.js","assets/HeaderTitle.js"])),q=n.exports.lazy(()=>S(()=>import("./Acciones.js"),["assets/Acciones.js","assets/index.js","assets/index6.css","assets/PointOfSale.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Print.js","assets/CustomSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/Tooltip.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/jwt-decode.esm.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Stack.js","assets/extendSxProp.js","assets/BootstrapTooltip.js","assets/BackgroundLoader.js","assets/Modal2.js","assets/Close2.js","assets/LoadingButton.js","assets/Modal.js","assets/Paper.js","assets/Typography.js","assets/Button.js","assets/IconButton.js","assets/Error.js","assets/platform.js","assets/useFetch.js","assets/useHttpService.js","assets/useHandlePrint.js","assets/useDataGrid.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/Menu.js","assets/List.js","assets/GlobalStyles.js","assets/Search.js","assets/Clear.js","assets/Box.js","assets/InputAdornment.js","assets/base64.js","assets/MenuItem.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/useList.js","assets/useAsyncRetry.js","assets/Checkbox.js","assets/ListItem.js","assets/listItemButtonClasses.js","assets/Add.js","assets/SkipNextOutlined.js","assets/Autocomplete.js","assets/Close.js","assets/Chip.js","assets/Pagination.js","assets/useComponentVisible.js","assets/CheckBoxOutlineBlank.js","assets/AutocompleteServer.js","assets/ChipState.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/CustomSipe.js","assets/index7.js","assets/LinearProgress.js","assets/Edit.js","assets/dateHelper.js","assets/index13.js","assets/useFetchPagination.js","assets/usePrevious.js","assets/HeaderTitle.js"])),K=()=>{const t=j(),{data:e}=t,a=D(),[s,d]=n.exports.useState(0),{send:i}=F(),m=n.exports.useCallback((o,l,p)=>i({url:`/admin/proformas/${p}`,method:"PATCH",data:{field:o,value:l}}),[]);return y(P,{children:[r(w,{enableSearch:!0,enableSelection:!0,enableHidden:!0,toolbar:r(P,{children:"Lista de proformas realizadas"}),columns:[{name:"editar",label:"Editar",width:30,style:{textAlign:"center",borderRight:"none"}},{name:"nombre_negocio",label:"Negocio",width:300},{name:"ruc",label:"Ruc"},{name:"ruta",label:"Ruta",width:90,style:{textAlign:"center"}},{name:"mes_correspondiente",label:"Fecha"},{name:"total",label:"Total",style:{textAlign:"center"}},{name:"fecha_impresion",label:"Impresa",style:{textAlign:"center"}},{name:"anulada",label:"Vigente",editable:{type:"state",states:[{label:"Operando",value:0,color:"success"},{label:"Cerrado",value:1,color:"error"}],func:(o,l)=>m("proformas.anulada",o,l)}}],rows:e.map(o=>({id:o.id,editar:r(z,{color:"primary",disableRipple:!0,size:"small",onClick:l=>{l.stopPropagation(),d(p=>o.id),a.setOpen()},children:r(I,{})}),nombre_negocio:o.nombre_negocio,ruc:o.ruc,ruta:o.ruta_iniciales,mes_correspondiente:N(o.mes_correspondiente,"dd/MM/yy h:mm a"),total:O(o.total),fecha_impresion:r(T,{label:o.fecha_impresion?"SI":"NO",color:o.fecha_impresion?"success":"error"}),anulada:Boolean(Number(o.anulada))}))}),r(n.exports.Suspense,{fallback:r("div",{}),children:r($,{modal:a,id:s})}),r(n.exports.Suspense,{fallback:r("div",{}),children:r(q,{})})]})},J=[],Q=(t,e)=>{switch(e.type){case"set":return[...e.payload];default:return t}},U=()=>{const[t,e]=n.exports.useReducer(Q,J);return{proformasState:t,dispatch:e}},W=n.exports.createContext({}),X=({children:t})=>{const{proformasState:e,dispatch:a}=U();return r(W.Provider,{value:{proformasState:e,set:s=>a({type:"set",payload:s})},children:t})},R=n.exports.createContext({}),Y=({children:t})=>{const e=B("/admin/proformas",{isCheckList:!0,isRadioList:!0});return r(R.Provider,{value:{loading:e.loading,value:e.value,page:e.page,handlePage:e.handlePage,handleSkipNext:e.handleSkipNext,handleSkipPrev:e.handleSkipPrev,filterList:e.filterList,setFilter:e.setFilter,inputRef:e.inputRef,sendSearch:e.sendSearch,filterRadioList:e.filterRadioList,setFilterRadio:e.setFilterRadio,onClearSearch:e.onClearSearch,reset:e.reset,selectedList:e.selectedList,setSelectedList:e.setSelectedList},children:t})},Z=()=>{const{send:t}=F(),{filterRadioList:e}=n.exports.useContext(R),[a,s]=n.exports.useState(null),[d,i]=n.exports.useState(null),m=Object.assign({},...e),{ruta:o}=m,{retry:l}=G(async()=>{(async()=>{if(o&&o!=="%%"){const c=await t({url:`/admin/proformas/fechas-rutas?ruta=${o}`});if(c&&c.status===201&&c.data&&c.data.length>0){const L={label:"Fecha de rutas",name:"fecha_ruta",value:"",list:[{value:"",label:"Todas"},{value:"%%",label:"No impresas"},...c.data]};s(c.data),i(L)}else s(null),i(null)}})()},[o]);return{fechaList:d,setFechaList:i,fechas:a,setFechas:s,retry:l}},ee=n.exports.createContext({}),te=({children:t})=>{const{fechas:e,fechaList:a,setFechaList:s,setFechas:d,retry:i}=Z();return r(ee.Provider,{value:{fechas:e,setFechas:d,fechaList:a,setFechaList:s,retry:i},children:t})},ae=()=>{const t=g(E({url:"/admin/proformas",rowKey:"id"}),[]);return y(X,{children:[r(H,{message:"Facturaci\xF3n - proformas"}),r(V,{style:{marginTop:10},children:r(M,_(x({},t),{children:r(n.exports.Suspense,{fallback:r(A,{}),children:r(Y,{children:r(te,{children:r(K,{})})})})}))})]})};var _e=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));export{W as P,R as a,_e as i};
