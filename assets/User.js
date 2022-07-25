var d=Object.defineProperty;var e=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var a=(i,t,r)=>t in i?d(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r,n=(i,t)=>{for(var r in t||(t={}))x.call(t,r)&&a(i,r,t[r]);if(e)for(var r of e(t))_.call(t,r)&&a(i,r,t[r]);return i};import{r as p,b as s,A as f,j as u,F as c,a as o}from"./index.js";import{L as m}from"./Loader.js";import{H as h}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import{N as v}from"./NotFoundResults.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{U as A}from"./index40.js";import{G as E}from"./Grid.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./Typography.js";import"./Divider.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useControlled.js";import"./useId.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./Warning.js";import"./Error.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useHttpService.js";const S=p.exports.lazy(()=>s(()=>import("./SesionesTable.js"),["assets/SesionesTable.js","assets/index.js","assets/index17.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useControlled.js","assets/useId.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/object.helper.js","assets/NotFoundResults.js","assets/Grid.js","assets/Typography.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/ChipState.js","assets/CheckCircle.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/Error.js","assets/Chip.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CircularProgress.js","assets/Modal.js","assets/Close2.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/Warning.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/CustomTable.js","assets/Search.js","assets/Clear.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/react-is.production.min.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/Box.js","assets/InputAdornment.js","assets/RadioGroup.js","assets/SwitchBase.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/TableRow.js","assets/Loader.js","assets/Stack.js","assets/LinearProgress.js","assets/date.helper.js"])),T=p.exports.lazy(()=>s(()=>import("./DatosUsuario.js"),["assets/DatosUsuario.js","assets/index.js","assets/index17.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useControlled.js","assets/useId.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/ChipState.js","assets/CheckCircle.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/Error.js","assets/Chip.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CircularProgress.js","assets/Modal.js","assets/Close2.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/Warning.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/Grid.js","assets/Avatar.js","assets/List.js","assets/Divider.js","assets/ListItem.js","assets/ListItemText.js","assets/listItemTextClasses.js"])),b=p.exports.lazy(()=>s(()=>import("./Acciones6.js"),["assets/Acciones6.js","assets/CustomSpeedDial.js","assets/index.js","assets/index17.css","assets/Assignment.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Fade.js","assets/Stack.js","assets/Typography.js","assets/index40.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/BootstrapTooltip.js","assets/Modal.js","assets/Close2.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHttpService.js","assets/useFetch.js","assets/useModal.js"])),_t=()=>{const{loading:i,value:t}=p.exports.useContext(A),{authState:r}=p.exports.useContext(f),{tipo:l}=r;return u(c,{children:[o(h,{message:"Usuario"}),i&&!t&&o(m,{}),!i&&t&&t.status!==201&&o(v,{}),!i&&t&&t.status===201&&o(c,{children:u(E,{container:!0,item:!0,spacing:2,xs:12,direction:"row",sx:{marginTop:1},children:[o(p.exports.Suspense,{fallback:o(m,{}),children:o(T,n({},t.data))}),o(p.exports.Suspense,{fallback:o(m,{}),children:o(S,{})}),l==="Super"&&o(p.exports.Suspense,{fallback:o("div",{}),children:o(b,{})})]})})]})};export{_t as default};
