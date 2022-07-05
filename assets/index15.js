import{r as t,a as e,b as n,A as g,j as a,F as A}from"./index.js";import{H as b}from"./HeaderTitle.js";import{L as N}from"./Loader.js";import{u as T}from"./useFetchPagination.js";import{u as s}from"./useModal.js";import{B as E}from"./Box.js";const y=t.exports.createContext({}),C=({children:r})=>{const o=s(),i=s(),d=s(),{loading:l,value:c,handlePage:p,page:u,handleSkipNext:m,handleSkipPrev:_,inputRef:x,sendSearch:h,onClearSearch:f,retry:v}=T("/admin/nit"),[S,P]=t.exports.useState();return e(y.Provider,{value:{loading:l,value:c,handlePage:p,page:u,handleSkipNext:m,handleSkipPrev:_,inputRef:x,sendSearch:h,onClearSearch:f,retry:v,nit:S,setNit:P,modalEdit:o,modalDelete:i,modalAdd:d},children:r})},j=t.exports.lazy(()=>n(()=>import("./NitTable.js"),["assets/NitTable.js","assets/index.js","assets/index6.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/NotFoundResults.js","assets/Grid.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js","assets/SelectedCard.js","assets/CustomTable.js","assets/Search.js","assets/Clear.js","assets/TextField.js","assets/react-is.production.min.js","assets/List.js","assets/GlobalStyles.js","assets/Box.js","assets/InputAdornment.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/TableRow.js","assets/Loader.js","assets/Stack.js","assets/LinearProgress.js","assets/Delete.js","assets/Edit.js","assets/HeaderTitle.js","assets/Divider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/object.helper.js"])),k=t.exports.lazy(()=>n(()=>import("./Acciones.js"),["assets/Acciones.js","assets/CustomSpeedDial.js","assets/index.js","assets/index6.css","assets/Assignment.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Stack.js","assets/Typography.js","assets/Add.js","assets/HeaderTitle.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/object.helper.js","assets/Box.js"])),L=t.exports.lazy(()=>n(()=>import("./ModalAdd.js"),["assets/ModalAdd.js","assets/index.js","assets/index6.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js","assets/yup.module.js","assets/addNitSchema.js","assets/array.js","assets/upperFirst.js","assets/Loader.js","assets/Grid.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/appendOwnerState.js","assets/Grow.js","assets/useFetch.js","assets/useHttpService.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/Alert.js","assets/Close.js","assets/HeaderTitle.js","assets/Divider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useList.js","assets/usePrevious.js","assets/object.helper.js","assets/Box.js"])),O=()=>{const{authState:r}=t.exports.useContext(g),{tipo:o}=r;return a(C,{children:[e(b,{message:"Consulta de NIT"}),a(E,{marginTop:1,children:[e(t.exports.Suspense,{fallback:e(N,{}),children:e(j,{})}),o&&["Super","Administrador"].includes(o)&&a(A,{children:[e(t.exports.Suspense,{fallback:e("div",{}),children:e(k,{})}),e(t.exports.Suspense,{fallback:e("div",{}),children:e(L,{})})]})]})]})};var V=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));export{y as N,V as i};
