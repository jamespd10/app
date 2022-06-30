var d=Object.defineProperty;var m=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var a=(i,t,r)=>t in i?d(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r,n=(i,t)=>{for(var r in t||(t={}))x.call(t,r)&&a(i,r,t[r]);if(m)for(var r of m(t))_.call(t,r)&&a(i,r,t[r]);return i};import{r as p,b as e,A as f,j as u,F as c,a as o}from"./index.js";import{L as s}from"./Loader.js";import{H as h}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import{N as v}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{U as A}from"./index19.js";import{G as E}from"./Grid.js";import"./Typography.js";import"./Divider.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useHttpService.js";const S=p.exports.lazy(()=>e(()=>import("./SesionesTable.js"),["assets/SesionesTable.js","assets/index.js","assets/index7.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/NotFoundResults.js","assets/Grid.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/ChipState.js","assets/Error.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/Chip.js","assets/ButtonBase.js","assets/Modal.js","assets/Close2.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/CustomTable.js","assets/Search.js","assets/Clear.js","assets/TextField.js","assets/react-is.production.min.js","assets/List.js","assets/GlobalStyles.js","assets/Box.js","assets/InputAdornment.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/TableRow.js","assets/Loader.js","assets/Stack.js","assets/LinearProgress.js","assets/date.helper.js","assets/index13.js"])),T=p.exports.lazy(()=>e(()=>import("./DatosUsuario.js"),["assets/DatosUsuario.js","assets/index.js","assets/index7.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/ChipState.js","assets/Error.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/Chip.js","assets/ButtonBase.js","assets/Modal.js","assets/Close2.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/Grid.js","assets/Avatar.js","assets/List.js","assets/Divider.js","assets/ListItem.js","assets/ListItemText.js","assets/listItemTextClasses.js"])),b=p.exports.lazy(()=>e(()=>import("./Acciones4.js"),["assets/Acciones4.js","assets/CustomSpeedDial.js","assets/index.js","assets/index7.css","assets/Assignment.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Stack.js","assets/Typography.js","assets/index19.js","assets/Loader.js","assets/Grid.js","assets/BootstrapTooltip.js","assets/Modal.js","assets/Close2.js","assets/ModalTransition.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/Error.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useHttpService.js","assets/useFetch.js"])),ut=()=>{const{loading:i,value:t}=p.exports.useContext(A),{authState:r}=p.exports.useContext(f),{tipo:l}=r;return u(c,{children:[o(h,{message:"Usuario"}),i&&!t&&o(s,{}),!i&&t&&t.status!==201&&o(v,{}),!i&&t&&t.status===201&&o(c,{children:u(E,{container:!0,item:!0,spacing:2,xs:12,direction:"row",sx:{marginTop:1},children:[o(p.exports.Suspense,{fallback:o(s,{}),children:o(T,n({},t.data))}),o(p.exports.Suspense,{fallback:o(s,{}),children:o(S,{})}),l==="Super"&&o(p.exports.Suspense,{fallback:o("div",{}),children:o(b,{})})]})})]})};export{ut as default};
