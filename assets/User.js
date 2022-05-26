var d=Object.defineProperty;var e=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var a=(t,r,i)=>r in t?d(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,n=(t,r)=>{for(var i in r||(r={}))u.call(r,i)&&a(t,i,r[i]);if(e)for(var i of e(r))_.call(r,i)&&a(t,i,r[i]);return t};import{r as p,q as m,j as l,F as c,a as o}from"./index.js";import{L as s}from"./Loader.js";import{H as x}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{N as f}from"./NotFoundResults.js";import"./ContentProvider.js";import"./Modal2.js";import"./platform.js";import{U as h}from"./index19.js";import{G as v}from"./Grid.js";import"./Typography.js";import"./extendSxProp.js";import"./Divider.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./DialogTitle.js";import"./Backdrop.js";import"./Modal.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./Button.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./tslib.js";import"./useHttpService.js";import"./constants.js";const E=p.exports.lazy(()=>m(()=>import("./SesionesTable.js"),["assets/SesionesTable.js","assets/index.js","assets/index.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/tslib.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/constants.js","assets/object.helper.js","assets/NotFoundResults.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/ChipState.js","assets/Error.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/Chip.js","assets/ButtonBase.js","assets/Modal2.js","assets/Close2.js","assets/DialogTitle.js","assets/Backdrop.js","assets/Modal.js","assets/Paper.js","assets/IconButton.js","assets/Button.js","assets/platform.js","assets/CustomTable.js","assets/Search.js","assets/Clear.js","assets/TextField.js","assets/react-is.production.min.js","assets/Menu.js","assets/List.js","assets/GlobalStyles.js","assets/Box.js","assets/InputAdornment.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/Loader.js","assets/Stack.js","assets/date.helper.js","assets/index13.js","assets/index14.js"])),T=p.exports.lazy(()=>m(()=>import("./DatosUsuario.js"),["assets/DatosUsuario.js","assets/index.js","assets/index.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/ContentProvider.js","assets/useModal.js","assets/ChipState.js","assets/Error.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/Chip.js","assets/ButtonBase.js","assets/Modal2.js","assets/Close2.js","assets/DialogTitle.js","assets/Backdrop.js","assets/Modal.js","assets/Paper.js","assets/Typography.js","assets/extendSxProp.js","assets/IconButton.js","assets/Button.js","assets/platform.js","assets/Grid.js","assets/Avatar.js","assets/List.js","assets/Divider.js","assets/ListItem.js","assets/listItemButtonClasses.js","assets/ListItemText.js","assets/listItemTextClasses.js"])),g=p.exports.lazy(()=>m(()=>import("./Acciones5.js"),["assets/Acciones5.js","assets/CustomSpeedDial.js","assets/index.js","assets/index.css","assets/Assignment.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/Tooltip.js","assets/Portal.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/jwt-decode.esm.js","assets/Backdrop.js","assets/Stack.js","assets/extendSxProp.js","assets/index19.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Modal2.js","assets/Close2.js","assets/DialogTitle.js","assets/Modal.js","assets/Paper.js","assets/IconButton.js","assets/Error.js","assets/Button.js","assets/platform.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/tslib.js","assets/useHttpService.js","assets/constants.js","assets/useFetch.js"])),er=()=>{const{loading:t,value:r}=p.exports.useContext(h);return l(c,{children:[o(x,{message:"Usuario"}),t&&!r&&o(s,{}),!t&&r&&r.status!==201&&o(f,{}),!t&&r&&r.status===201&&o(c,{children:l(v,{container:!0,item:!0,spacing:2,xs:12,direction:"row",sx:{marginTop:1},children:[o(p.exports.Suspense,{fallback:o(s,{}),children:o(T,n({},r.data))}),o(p.exports.Suspense,{fallback:o(s,{}),children:o(E,{})}),o(p.exports.Suspense,{fallback:o("div",{}),children:o(g,{})})]})})]})};export{er as default};
