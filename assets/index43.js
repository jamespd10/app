var I=Object.defineProperty,D=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var x=(t,a,r)=>a in t?I(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,S=(t,a)=>{for(var r in a||(a={}))F.call(a,r)&&x(t,r,a[r]);if(h)for(var r of h(a))C.call(a,r)&&x(t,r,a[r]);return t},y=(t,a)=>D(t,N(a));var _=(t,a)=>{var r={};for(var e in t)F.call(t,e)&&a.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&h)for(var e of h(t))a.indexOf(e)<0&&C.call(t,e)&&(r[e]=t[e]);return r};import{a as s,F as u,r as i,b as P,ap as f,j as g}from"./index.js";import{C as R}from"./ChipState.js";import{d as E}from"./Edit.js";import{u as T}from"./useModal.js";import{z}from"./date.helper.js";import{f as L}from"./string.helper.js";import{u as A}from"./useFetch.js";import{u as k,D as O,a as B,b as M}from"./index26.js";import{I as $}from"./IconButton.js";import{u as j}from"./useFetchPagination.js";import{_ as G}from"./useAsyncRetry.js";import{H as V}from"./HeaderTitle.js";import{B as H}from"./Box.js";import{C as U}from"./CircularProgress.js";import"./CheckCircle.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useId.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Error.js";import"./Chip.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./regex.js";import"./useHttpService.js";import"./useList.js";import"./TextInput.js";import"./TextField.js";import"./useFormControl.js";import"./formControlState.js";import"./react-is.production.min.js";import"./Modal2.js";import"./Backdrop.js";import"./Fade.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Grow.js";import"./List.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./Search.js";import"./Clear.js";import"./InputAdornment.js";import"./Typography.js";import"./FilterList.js";import"./MenuItem.js";import"./listItemIconClasses.js";import"./Divider.js";import"./listItemTextClasses.js";import"./Button.js";import"./SwitchBase.js";import"./Close2.js";import"./ListItem.js";import"./Stack.js";import"./Add.js";import"./TableRow.js";import"./Checkbox.js";import"./Autocomplete.js";import"./Close.js";import"./Popper.js";import"./Tooltip.js";import"./SkipNextOutlined.js";import"./Pagination.js";import"./useComponentVisible.js";import"./CheckBoxOutlineBlank.js";import"./ErrorOutline.js";import"./AutocompleteServer.js";import"./CustomDecimal.js";import"./react-number-format.es.js";import"./CustomSipe.js";import"./index11.js";import"./StyledGridOverlay.js";import"./LinearProgress.js";import"./usePrevious.js";import"./object.helper.js";const K=()=>{const{data:t,setData:a}=k(),{send:r,isLoading:e}=A();return{handleCheck:async({id:n,name:l})=>{if((await r({url:`/admin/ruta-alterna/${n}/${l}`,method:"POST"})).status===201&&t){const o=t.findIndex(b=>b.id===n),m=[...t];m[o][l]=!Boolean(Number(m[o][l])),a([...m])}},isLoading:e}},q=({id:t,name:a,label:r,color:e})=>{const{handleCheck:c,isLoading:n}=K();return s(u,{children:s(R,{label:r,color:e,onClick:l=>{l.stopPropagation(),c({id:t,name:a})},loading:n})})},J=i.exports.lazy(()=>P(()=>import("./ModalEdit2.js"),["assets/ModalEdit2.js","assets/index.js","assets/index15.css","assets/yup.module.js","assets/useAsyncRetry.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/useHttpService.js","assets/index26.js","assets/useList.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Grow.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/Search.js","assets/Clear.js","assets/Box.js","assets/InputAdornment.js","assets/FilterList.js","assets/MenuItem.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/SwitchBase.js","assets/ListItem.js","assets/Stack.js","assets/Add.js","assets/TableRow.js","assets/Checkbox.js","assets/Autocomplete.js","assets/Close.js","assets/Popper.js","assets/Chip.js","assets/Tooltip.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/useComponentVisible.js","assets/CheckBoxOutlineBlank.js","assets/ErrorOutline.js","assets/AutocompleteServer.js","assets/useFetch.js","assets/ChipState.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/CustomSipe.js","assets/index11.js","assets/StyledGridOverlay.js","assets/LinearProgress.js","assets/facturacionSchema.js","assets/array.js","assets/upperFirst.js","assets/Alert.js"])),Q=i.exports.lazy(()=>P(()=>import("./Acciones3.js"),["assets/Acciones3.js","assets/index.js","assets/index15.css","assets/PointOfSale.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Print.js","assets/CustomSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Fade.js","assets/Stack.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/BackgroundLoader.js","assets/CircularProgress.js","assets/Modal.js","assets/Close2.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/index26.js","assets/useAsyncRetry.js","assets/useList.js","assets/useHttpService.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/Search.js","assets/Clear.js","assets/Box.js","assets/InputAdornment.js","assets/FilterList.js","assets/MenuItem.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/SwitchBase.js","assets/ListItem.js","assets/Add.js","assets/TableRow.js","assets/Checkbox.js","assets/Autocomplete.js","assets/Close.js","assets/Chip.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/useComponentVisible.js","assets/CheckBoxOutlineBlank.js","assets/ErrorOutline.js","assets/AutocompleteServer.js","assets/useFetch.js","assets/ChipState.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/CustomSipe.js","assets/index11.js","assets/StyledGridOverlay.js","assets/LinearProgress.js","assets/useHandlePrint.js","assets/index23.js"])),W=({route:t})=>{const{factura:a}=f(),r=_(k(),[]),{data:e,reset:c}=r,n=T(),[l,d]=i.exports.useState(0);return i.exports.useEffect(()=>{(()=>{c()})()},[a]),g(u,{children:[s(O,{enableSearch:!0,enableSelection:!0,enableHidden:!0,toolbar:s(u,{children:"Lista de facturas alternas realizadas"}),columnsFilter:[{column:"rutas.ruta",label:"Ruta",type:"string"},{column:"facturas_alternas.anulada",label:"Vigente",type:"boolean",valueOptions:[{label:"Si",value:0},{label:"No",value:1}]},{column:"facturas_alternas.fecha_impresion",label:"Impresa",type:"nullenum"}],sortFields:[{name:"clientes.nom_cliente",label:"Cliente"},{name:"clientes.ruc",label:"RUC"}],columns:[{name:"editar",label:"Editar",width:30,style:{textAlign:"center",borderRight:"none"}},{name:"nombre_negocio",label:"Negocio",width:300},{name:"nom_cliente",label:"Cliente",width:300},{name:"ruc",label:"Ruc"},{name:"ruta",label:"Ruta",width:90,style:{textAlign:"center"}},{name:"personal",label:"Personal",width:128},{name:"mes_correspondiente",label:"Fecha"},...a==="renta"?[{name:"monto_ventas",label:"M. en ventas",style:{textAlign:"center"}}]:[],{name:"total",label:"Total",style:{textAlign:"center"}},{name:"fecha_impresion",label:"Impresa",style:{textAlign:"center"}},{name:"anulada",label:"Vigente"}],rows:e==null?void 0:e.map(o=>({id:o.id,editar:s($,{color:"primary",disableRipple:!0,size:"small",onClick:m=>{m.stopPropagation(),d(b=>o.id),n.setOpen()},children:s(E,{fontSize:"small"})}),nombre_negocio:o.nombre_negocio,nom_cliente:g(u,{children:[s("strong",{children:o.tipo_personal}),o.tipo_personal&&o.tipo_personal!==""&&s(u,{children:" - "}),o.nom_cliente]}),ruc:o.ruc,ruta:o.ruta_iniciales,personal:o.personal,mes_correspondiente:z(`${new Date(o.mes_correspondiente)}`,"dd/MM/yy h:mm a"),monto_ventas:L(o.monto_ventas),total:L(o.total),fecha_impresion:s(R,{label:o.fecha_impresion?"SI":"NO",color:o.fecha_impresion?"success":"error"}),anulada:s(q,{id:o.id,name:"anulada",label:Boolean(Number(o.anulada))?"ANULADA":"VIGENTE",color:Boolean(Number(o.anulada))?"error":"success"})}))}),s(i.exports.Suspense,{fallback:s("div",{}),children:s(J,{modal:n,id:l})}),s(i.exports.Suspense,{fallback:s("div",{}),children:s(Q,{})})]})},X=[],Y=(t,a)=>{switch(a.type){case"set":return[...a.payload];default:return t}},Z=()=>{const[t,a]=i.exports.useReducer(Y,X);return{facturasState:t,dispatch:a}},ee=i.exports.createContext({}),te=({children:t})=>{const{facturasState:a,dispatch:r}=Z();return s(ee.Provider,{value:{facturasState:a,set:e=>r({type:"set",payload:e})},children:t})},v=i.exports.createContext({}),ae=({children:t,route:a})=>{const{factura:r}=f(),e=j(a,{isCheckList:!0,isRadioList:!0,params:{facturas_tipo:r}});return s(v.Provider,{value:{loading:e.loading,value:e.value,page:e.page,handlePage:e.handlePage,handleSkipNext:e.handleSkipNext,handleSkipPrev:e.handleSkipPrev,filterList:e.filterList,setFilter:e.setFilter,inputRef:e.inputRef,sendSearch:e.sendSearch,filterRadioList:e.filterRadioList,setFilterRadio:e.setFilterRadio,onClearSearch:e.onClearSearch,reset:e.reset,selectedList:e.selectedList,setSelectedList:e.setSelectedList},children:t})},re=()=>{const{send:t}=A(),{filterRadioList:a}=i.exports.useContext(v),[r,e]=i.exports.useState(null),[c,n]=i.exports.useState(null),{factura:l}=f(),d=Object.assign({},...a),{ruta:o}=d,{retry:m}=G(async()=>{(async()=>{if(o&&o!=="%%"){const p=await t({url:`/admin/facturas/${l==null?void 0:l.toUpperCase()}/fechas-rutas?ruta=${o}`});if(p&&p.status===201&&p.data&&p.data.length>0){const w={label:"Fecha de rutas",name:"fecha_ruta",value:"",list:[{value:"",label:"Todas"},{value:"%%",label:"No impresas"},...p.data]};e(p.data),n(w)}else e(null),n(null)}})()},[o]);return{fechaList:c,setFechaList:n,fechas:r,setFechas:e,retry:m}},oe=i.exports.createContext({}),se=({children:t})=>{const{fechas:a,fechaList:r,setFechaList:e,setFechas:c,retry:n}=re();return s(oe.Provider,{value:{fechas:a,setFechas:c,fechaList:r,setFechaList:e,retry:n},children:t})},wt=()=>{const{factura:t}=f(),a=_(B({url:"/admin/fact-alterna",rowKey:"id",params:{facturas_tipo:t}}),[]);return g(te,{children:[s(V,{message:`Facturaci\xF3n - ${t}`}),s(H,{style:{marginTop:10},children:s(M,y(S({},a),{children:s(i.exports.Suspense,{fallback:s(U,{}),children:s(ae,{route:"/admin/fact-alterna",children:s(se,{children:s(W,{route:"/admin/fact-alterna"})})})})}))})]})};export{wt as default};
