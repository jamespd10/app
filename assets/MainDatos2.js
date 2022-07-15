var x=Object.defineProperty;var c=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var u=(e,o,r)=>o in e?x(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,n=(e,o)=>{for(var r in o||(o={}))f.call(o,r)&&u(e,r,o[r]);if(c)for(var r of c(o))h.call(o,r)&&u(e,r,o[r]);return e};import{r as i,b as m,ap as b,a as t,F as D,j as d}from"./index.js";import{D as E}from"./DateInput.js";import{T as _}from"./TextInput.js";import{u as P}from"./yup.module.js";import{L as a}from"./Loader.js";import"./BootstrapTooltip.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{G as p}from"./Grid.js";import{P as T}from"./Paper.js";import"./DatePicker.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./Typography.js";import"./PureDateInput.js";import"./CalendarPicker.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./useIsFocusVisible.js";import"./Fade.js";import"./useControlled.js";import"./createSvgIcon.js";import"./IconButton.js";import"./InputAdornment.js";import"./useFormControl.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./DialogContent.js";import"./DialogActions.js";import"./Button.js";import"./index11.js";import"./Popper.js";import"./Grow.js";import"./TextField.js";import"./formControlState.js";import"./react-is.production.min.js";import"./List.js";import"./outlinedInputClasses.js";import"./GlobalStyles.js";import"./CircularProgress.js";import"./Tooltip.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./CheckCircle.js";import"./LoadingButton.js";const I=i.exports.lazy(()=>m(()=>import("./Otros2.js"),["assets/Otros2.js","assets/TextInput.js","assets/index.js","assets/index6.css","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/DecimalInput.js","assets/yup.module.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/CircularProgress.js","assets/Grid.js","assets/Typography.js","assets/Stack.js","assets/Button.js","assets/ButtonBase.js","assets/useIsFocusVisible.js"])),v=i.exports.lazy(()=>m(()=>import("./TotalInputs2.js"),["assets/TotalInputs2.js","assets/CustomDecimal.js","assets/index.js","assets/index6.css","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/yup.module.js","assets/Grid.js","assets/Typography.js"])),z=i.exports.lazy(()=>m(()=>import("./MainDeclaracionRenta.js"),["assets/MainDeclaracionRenta.js","assets/index.js","assets/index6.css","assets/DecimalInput.js","assets/yup.module.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/CircularProgress.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/useIsFocusVisible.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/ModalTransition.js","assets/IconButton.js","assets/ButtonBase.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js"])),L=i.exports.lazy(()=>m(()=>import("./MainDeclaracionMunicipio.js"),["assets/MainDeclaracionMunicipio.js","assets/index.js","assets/index6.css","assets/DecimalInput.js","assets/yup.module.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/CircularProgress.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/useIsFocusVisible.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/ModalTransition.js","assets/IconButton.js","assets/ButtonBase.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js"])),k=i.exports.lazy(()=>m(()=>import("./MainDatosTodos.js"),["assets/MainDatosTodos.js","assets/DecimalInput.js","assets/yup.module.js","assets/index.js","assets/index6.css","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/useControlled.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/emotion-react.browser.esm.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/CircularProgress.js","assets/Grid.js","assets/Typography.js"])),vt=()=>{var l;const{formState:e,register:o}=P(),{errors:r}=e,{factura:s}=b();return t(D,{children:d(p,{container:!0,spacing:1,children:[t(p,{item:!0,xs:12,sm:6,children:t(E,{label:"Fecha",name:"fecha",required:!0,error:!!(r!=null&&r.fecha),helperText:(l=r==null?void 0:r.fecha)==null?void 0:l.message,size:"small"})}),t(p,{item:!0,xs:12,sm:6,children:t(_,n({label:"Personal",fullWidth:!0,size:"small"},o("personal")))}),s!=="municipio"&&t(i.exports.Suspense,{fallback:t(a,{}),children:t(z,{})}),s!=="renta"&&t(i.exports.Suspense,{fallback:t(a,{}),children:t(L,{})}),s==="todas"&&t(p,{item:!0,xs:12,children:t(T,{variant:"outlined",sx:{p:1.2,border:"4px solid black"},children:d(p,{container:!0,spacing:1,children:[t(i.exports.Suspense,{fallback:t(a,{}),children:t(k,{})}),t(i.exports.Suspense,{fallback:t(a,{}),children:t(I,{})}),t(p,{item:!0,xs:12,children:t(_,n({label:"Notas",multiline:!0,rows:4,fullWidth:!0},o("notas")))})]})})}),t(i.exports.Suspense,{fallback:t(a,{}),children:t(v,{})})]})})};export{vt as default};
