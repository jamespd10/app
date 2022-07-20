var l=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var d=(o,r)=>{var m={};for(var t in o)x.call(o,t)&&r.indexOf(t)<0&&(m[t]=o[t]);if(o!=null&&l)for(var t of l(o))r.indexOf(t)<0&&b.call(o,t)&&(m[t]=o[t]);return m};import{r as p,b as u,j as f,F as e,a as i}from"./index.js";import{L as s}from"./Loader.js";import"./BootstrapTooltip.js";import{N}from"./NotFoundResults.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{S}from"./index30.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useControlled.js";import"./useId.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./Warning.js";import"./Error.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./object.helper.js";const _=p.exports.lazy(()=>u(()=>import("./Facturacion2.js"),["assets/Facturacion2.js","assets/index.js","assets/index15.css","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/useStepper.js","assets/yup.module.js","assets/useFetch.js","assets/useHttpService.js","assets/useModal.js","assets/facturacionSchema.js","assets/regex.js","assets/array.js","assets/upperFirst.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/BackgroundLoader.js","assets/Backdrop.js","assets/Fade.js","assets/useHandlePrint.js","assets/index23.js","assets/useAsyncRetry.js","assets/FactPrintView.js","assets/date.helper.js","assets/string.helper.js","assets/index30.js","assets/useFetchPagination.js","assets/useList.js","assets/usePrevious.js","assets/object.helper.js","assets/Paper.js"])),C=p.exports.lazy(()=>u(()=>import("./TableClienteSelected.js"),["assets/TableClienteSelected.js","assets/CustomTable.js","assets/Search.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index15.css","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Clear.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/Box.js","assets/Typography.js","assets/InputAdornment.js","assets/IconButton.js","assets/ButtonBase.js","assets/CircularProgress.js","assets/Grid.js","assets/RadioGroup.js","assets/SwitchBase.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/TableRow.js","assets/Button.js","assets/Loader.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/SelectedCard.js","assets/Stack.js","assets/LinearProgress.js","assets/index30.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/object.helper.js","assets/PointOfSale.js","assets/HeaderTitle.js","assets/Divider.js","assets/NotFoundResults.js","assets/Alert.js","assets/Close.js"])),_t=()=>{var c;const n=p.exports.useContext(S),{loading:o,value:r}=n,m=d(n,["loading","value"]),{total_cliente_negocio:t,cliente:a}=m;return f(e,{children:[o&&Number(t)===1&&i(s,{}),!o&&(r==null?void 0:r.status)!==201&&Number(t)===1&&i(N,{text:(c=r==null?void 0:r.error)==null?void 0:c.message}),!o&&(r==null?void 0:r.status)===201&&Number(t)===1&&a&&i(p.exports.Suspense,{fallback:i(s,{}),children:i(_,{})}),!o&&r&&r.data&&Number(t)>1&&a?i(e,{children:i(p.exports.Suspense,{fallback:i(s,{}),children:i(_,{})})}):Number(t)>1?i(C,{}):i(e,{})]})};export{_t as default};
