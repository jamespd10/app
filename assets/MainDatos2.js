var x=Object.defineProperty;var c=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var u=(i,o,r)=>o in i?x(i,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[o]=r,l=(i,o)=>{for(var r in o||(o={}))f.call(o,r)&&u(i,r,o[r]);if(c)for(var r of c(o))h.call(o,r)&&u(i,r,o[r]);return i};import{r as e,b as s,ae as b,a as t,F as D,j as d}from"./index.js";import{D as E}from"./DateInput.js";import{T as _}from"./TextInput.js";import{u as P}from"./array.js";import{L as p}from"./Loader.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal.js";import"./platform.js";import{G as a}from"./Grid.js";import{P as T}from"./Paper.js";import"./MobileDatePicker.js";import"./MonthPicker.js";import"./Typography.js";import"./usePickerState.js";import"./IconButton.js";import"./ButtonBase.js";import"./useIsFocusVisible.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./useControlled.js";import"./Portal.js";import"./Button.js";import"./createSvgIcon.js";import"./InputAdornment.js";import"./FormHelperText.js";import"./index7.js";import"./TextField.js";import"./react-is.production.min.js";import"./Grow.js";import"./List.js";import"./GlobalStyles.js";import"./upperFirst.js";import"./Tooltip.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./Error.js";const I=e.exports.lazy(()=>s(()=>import("./Otros2.js"),["assets/Otros2.js","assets/TextInput.js","assets/index.js","assets/index4.css","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/DecimalInput.js","assets/array.js","assets/upperFirst.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/Grid.js","assets/Typography.js","assets/Stack.js","assets/Button.js","assets/ButtonBase.js","assets/useIsFocusVisible.js"])),v=e.exports.lazy(()=>s(()=>import("./TotalInputs2.js"),["assets/TotalInputs2.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/index.js","assets/index4.css","assets/string.helper.js","assets/regex.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/array.js","assets/upperFirst.js","assets/Grid.js","assets/Typography.js"])),z=e.exports.lazy(()=>s(()=>import("./MainDeclaracionRenta.js"),["assets/MainDeclaracionRenta.js","assets/index.js","assets/index4.css","assets/DecimalInput.js","assets/array.js","assets/upperFirst.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/useIsFocusVisible.js","assets/jwt-decode.esm.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/LoadingButton.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/platform.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js"])),L=e.exports.lazy(()=>s(()=>import("./MainDeclaracionMunicipio.js"),["assets/MainDeclaracionMunicipio.js","assets/index.js","assets/index4.css","assets/DecimalInput.js","assets/array.js","assets/upperFirst.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/useIsFocusVisible.js","assets/jwt-decode.esm.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/LoadingButton.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/platform.js"])),k=e.exports.lazy(()=>s(()=>import("./MainDatosTodos.js"),["assets/MainDatosTodos.js","assets/DecimalInput.js","assets/array.js","assets/index.js","assets/index4.css","assets/upperFirst.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/Grid.js","assets/Typography.js"])),ht=()=>{var n;const{formState:i,register:o}=P(),{errors:r}=i,{factura:m}=b();return t(D,{children:d(a,{container:!0,spacing:1,children:[t(a,{item:!0,xs:12,sm:6,children:t(E,{label:"Fecha",name:"fecha",required:!0,error:!!(r!=null&&r.fecha),helperText:(n=r==null?void 0:r.fecha)==null?void 0:n.message,size:"small"})}),t(a,{item:!0,xs:12,sm:6,children:t(_,l({label:"Personal",fullWidth:!0,size:"small"},o("personal")))}),m!=="municipio"&&t(e.exports.Suspense,{fallback:t(p,{}),children:t(z,{})}),m!=="renta"&&t(e.exports.Suspense,{fallback:t(p,{}),children:t(L,{})}),m==="todas"&&t(a,{item:!0,xs:12,children:t(T,{variant:"outlined",sx:{p:1.2,border:"4px solid black"},children:d(a,{container:!0,spacing:1,children:[t(e.exports.Suspense,{fallback:t(p,{}),children:t(k,{})}),t(e.exports.Suspense,{fallback:t(p,{}),children:t(I,{})}),t(a,{item:!0,xs:12,children:t(_,l({label:"Notas",multiline:!0,rows:4,fullWidth:!0},o("notas")))})]})})}),t(e.exports.Suspense,{fallback:t(p,{}),children:t(v,{})})]})})};export{ht as default};
