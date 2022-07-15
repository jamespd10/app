var f=Object.defineProperty;var d=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var h=(t,i,r)=>i in t?f(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r,s=(t,i)=>{for(var r in i||(i={}))_.call(i,r)&&h(t,r,i[r]);if(d)for(var r of d(i))m.call(i,r)&&h(t,r,i[r]);return t};import{r as o,b as u,j as n,F as a,a as e}from"./index.js";import{f as c}from"./string.helper.js";import{T as l}from"./Typography.js";import"./regex.js";const y=o.exports.lazy(()=>u(()=>import("./InformationRubros.js"),["assets/InformationRubros.js","assets/CustomTable.js","assets/Search.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index6.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Clear.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/Box.js","assets/Typography.js","assets/InputAdornment.js","assets/IconButton.js","assets/ButtonBase.js","assets/CircularProgress.js","assets/Grid.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/TableRow.js","assets/Button.js","assets/Loader.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/ModalTransition.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/SelectedCard.js","assets/Stack.js","assets/LinearProgress.js","assets/string.helper.js","assets/regex.js"])),g=o.exports.lazy(()=>u(()=>import("./InformationRotulos.js"),["assets/InformationRotulos.js","assets/CustomTable.js","assets/Search.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index6.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Clear.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/Box.js","assets/Typography.js","assets/InputAdornment.js","assets/IconButton.js","assets/ButtonBase.js","assets/CircularProgress.js","assets/Grid.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/TableRow.js","assets/Button.js","assets/Loader.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/ModalTransition.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/SelectedCard.js","assets/Stack.js","assets/LinearProgress.js"])),j=t=>n(a,{children:[e("hr",{}),e("div",{style:{display:"flex",flexDirection:"row"},children:n(l,{variant:"subtitle1",children:[e("strong",{children:"Municipio: "}),t.municipio]})}),e("hr",{}),n("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e(l,{variant:"subtitle1",children:e("strong",{children:"Total de ingresos sin licor:"})}),e(l,{variant:"subtitle1",style:{marginLeft:10},children:c(t.total_ingresos_sin_licor)})]}),e("hr",{}),n("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e(l,{variant:"subtitle1",children:e("strong",{children:"Total de ingresos por licor:"})}),e(l,{variant:"subtitle1",style:{marginLeft:10},children:c(t.total_ingresos_licor)})]}),e("hr",{}),n("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e(l,{variant:"subtitle1",children:e("strong",{children:"Total de ingresos:"})}),e(l,{variant:"subtitle1",style:{marginLeft:10},children:c(Number(t.total_ingresos_licor)+Number(t.total_ingresos_sin_licor))})]}),!t.edit&&n(a,{children:[e("hr",{}),t.rubros.length>0&&e(o.exports.Suspense,{fallback:e("div",{}),children:e(y,s({},t))})]}),!t.edit&&t.rotulos&&t.rotulos.length>0&&n(a,{children:[e("hr",{}),t.rubros.length>0&&e(o.exports.Suspense,{fallback:e("div",{}),children:e(g,s({},t))})]})]});export{j as default};
