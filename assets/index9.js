var O=Object.defineProperty,T=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var g=(r,o,s)=>o in r?O(r,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[o]=s,u=(r,o)=>{for(var s in o||(o={}))R.call(o,s)&&g(r,s,o[s]);if(S)for(var s of S(o))V.call(o,s)&&g(r,s,o[s]);return r},_=(r,o)=>T(r,L(o));import{r as a,ap as A,a as t,b as d,A as z,j as x}from"./index.js";import{L as n}from"./Loader.js";import{H as j}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import{u as I}from"./useFirstFetch.js";import{N as w}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{u as F}from"./useFetchPagination.js";import{u as $}from"./useModal.js";import{G as c}from"./Grid.js";import{S as M}from"./Stack.js";const G=a.exports.createContext({}),H=({children:r})=>{const{id:o}=A(),s=$(),[m,l]=a.exports.useState(),{loading:i,value:e,handlePage:p,page:E,handleSkipNext:P,handleSkipPrev:v,inputRef:b,sendSearch:y,onClearSearch:C,retry:N}=F(`/admin/clientes/${o}/asociaciones`),[k,h]=a.exports.useState(),D=f=>{l(f),s.setOpen()};return a.exports.useEffect(()=>{(()=>{e&&e.data&&h(e.data.resultados)})()},[e]),t(G.Provider,{value:{loading:i,value:e,handlePage:p,page:E,handleSkipNext:P,handleSkipPrev:v,inputRef:b,sendSearch:y,onClearSearch:C,retry:N,modalDelete:s,selectedNegocio:m,setSelectedNegocio:l,handleShowDelete:D,negociosAsociados:k,setAsociados:h},children:r})},q=a.exports.lazy(()=>d(()=>import("./ClientView.js"),["assets/ClientView.js","assets/ClientView.css","assets/index.js","assets/index6.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/ChipState.js","assets/CheckCircle.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/Chip.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CircularProgress.js","assets/Modal.js","assets/Close2.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/ListItem.js","assets/List.js","assets/Grid.js","assets/ListItemText.js","assets/listItemTextClasses.js","assets/Divider.js"])),B=a.exports.lazy(()=>d(()=>import("./ClientMenu.js"),["assets/ClientMenu.js","assets/NegocioDashboard.css","assets/PersonAddDisabled.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index6.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useHttpService.js","assets/SelectedCard.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CardHome.js","assets/Card.js","assets/Paper.js","assets/CardContent.js","assets/Stack.js","assets/Typography.js"])),J=a.exports.lazy(()=>d(()=>import("./ClientAcciones.js"),["assets/ClientAcciones.js","assets/index.js","assets/index6.css","assets/AddBusiness.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Edit.js","assets/Check.js","assets/CustomSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Stack.js","assets/Typography.js","assets/useFetch.js","assets/useHttpService.js","assets/BackgroundLoader.js","assets/CircularProgress.js","assets/Modal.js","assets/Close2.js","assets/ModalTransition.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js"])),K=a.exports.lazy(()=>d(()=>import("./NegociosAsociados.js"),["assets/NegociosAsociados.js","assets/index.js","assets/index6.css","assets/Visibility.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/NotFoundResults.js","assets/Grid.js","assets/Typography.js","assets/CustomTable.js","assets/Search.js","assets/Clear.js","assets/TextField.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Paper.js","assets/List.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/Box.js","assets/InputAdornment.js","assets/IconButton.js","assets/ButtonBase.js","assets/CircularProgress.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/TableRow.js","assets/Button.js","assets/Loader.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/ModalTransition.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/SelectedCard.js","assets/Stack.js","assets/LinearProgress.js","assets/DeleteForever.js","assets/ChipState.js","assets/Chip.js","assets/useFetch.js","assets/useHttpService.js","assets/HeaderTitle.js","assets/Divider.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useFetchPagination.js","assets/useList.js","assets/usePrevious.js","assets/object.helper.js"])),Q=a.exports.lazy(()=>d(()=>import("./EditView.js"),["assets/EditView.js","assets/index.js","assets/index6.css","assets/yup.module.js","assets/BackgroundLoader.js","assets/Backdrop.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/Grid.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/ButtonBase.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/ModalTransition.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/Box.js","assets/useStepper.js","assets/useFetch.js","assets/useHttpService.js","assets/editGeneralesSchema.js","assets/PhoneInput.js","assets/TextInput.js","assets/TextField.js","assets/react-is.production.min.js","assets/List.js","assets/GlobalStyles.js","assets/react-number-format.es.js","assets/SelectHookForm.js","assets/MenuItem.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/constantsLists.js","assets/Nacionalidad.js","assets/AutocompleteServer.js","assets/Autocomplete.js","assets/Close.js","assets/Chip.js","assets/ListItem.js","assets/ListItemText.js","assets/DireccionProvider.js","assets/CheckBoxOutlineBlank.js","assets/Checkbox.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/array.js","assets/upperFirst.js","assets/string.helper.js","assets/regex.js","assets/Card.js","assets/Loader.js","assets/HeaderTitle.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/NotFoundResults.js","assets/useFetchPagination.js","assets/useList.js","assets/usePrevious.js","assets/object.helper.js","assets/Stack.js"])),U=()=>{const{id:r}=A(),[o,s]=a.exports.useState(!1),{authState:m}=a.exports.useContext(z),{tipo:l}=m,{loading:i,value:e,retry:p}=I({url:`/admin/clientes/${r}`});return x(H,{children:[t(j,{message:"Datos del Cliente"}),i&&t(n,{}),!i&&e&&(e==null?void 0:e.status)!==201&&t(w,{}),!i&&e&&e.status===201&&e.data&&!o&&t(c,{container:!0,direction:"column",spacing:2,style:{marginTop:5},children:t(c,{item:!0,children:x(c,{container:!0,direction:"row",spacing:1,children:[t(a.exports.Suspense,{fallback:t(n,{}),children:t(q,u({},e.data))}),t(c,{item:!0,xs:12,lg:6,children:x(M,{spacing:1,children:[t(a.exports.Suspense,{fallback:t(n,{}),children:t(B,{id:e.data.id})}),t(a.exports.Suspense,{fallback:t(n,{}),children:t(c,{item:!0,xs:12,children:t(K,{})})})]})})]})})}),!i&&e&&e.status===201&&e.data&&l==="Super"&&t(a.exports.Suspense,{fallback:t(n,{}),children:t(J,_(u({},e.data),{editing:o,setEditing:s,retry:p}))}),!i&&e&&e.status===201&&e.data&&o&&t(a.exports.Suspense,{fallback:t(n,{}),children:t(Q,{cliente:_(u({},e.data),{nombre_rep:`${e.data.nombre_rep||""} ${e.data.apellido_rep||""}`.trim()}),setEditing:s,retry:p})})]})};var pe=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{G as N,pe as i};
