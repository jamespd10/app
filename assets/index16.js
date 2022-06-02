var l=Object.defineProperty;var e=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var d=(o,t,r)=>t in o?l(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,a=(o,t)=>{for(var r in t||(t={}))_.call(t,r)&&d(o,r,t[r]);if(e)for(var r of e(t))f.call(t,r)&&d(o,r,t[r]);return o};import{r as m,q as u,ac as x,j as n,F as c,a as i}from"./index.js";import{H as L}from"./HeaderTitle.js";import{L as p}from"./Loader.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{u as F}from"./useFirstFetch.js";import{N as h}from"./NotFoundResults.js";import"./ContentProvider.js";import"./Modal2.js";import"./platform.js";import"./Typography.js";import"./extendSxProp.js";import"./Divider.js";import"./Grid.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useAsyncRetry.js";import"./useHttpService.js";import"./constants.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./Backdrop.js";import"./Modal.js";import"./Paper.js";import"./Button.js";const g=m.exports.lazy(()=>u(()=>import("./InformationHeader.js"),["assets/InformationHeader.js","assets/string.helper.js","assets/index.js","assets/index.css","assets/regex.js","assets/date.helper.js","assets/index13.js","assets/index14.js","assets/Paper.js","assets/Divider.js"])),q=m.exports.lazy(()=>u(()=>import("./FormLiquidar.js"),["assets/FormLiquidar.js","assets/array.js","assets/index.js","assets/index.css","assets/upperFirst.js","assets/regex.js","assets/constantsLists.js","assets/nacionalidades.js","assets/StepperForm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/jwt-decode.esm.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/platform.js","assets/ButtonBase.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/IconButton.js","assets/Error.js","assets/Backdrop.js","assets/Modal.js","assets/Paper.js","assets/Button.js","assets/useMediaQuery.js","assets/Box.js","assets/useStepper.js","assets/useFetch.js","assets/useHttpService.js","assets/constants.js","assets/BackgroundLoader.js","assets/FadeDisappearGrid.js","assets/DateInput.js","assets/TextInput.js","assets/TextField.js","assets/FormHelperText.js","assets/react-is.production.min.js","assets/Menu.js","assets/List.js","assets/GlobalStyles.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/usePickerState.js","assets/InputAdornment.js","assets/index7.js","assets/DecimalInput.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/SelectHookForm.js","assets/MenuItem.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/date.helper.js","assets/index13.js","assets/index14.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/Loader.js","assets/Card.js"])),ir=()=>{var s;const{id:o}=x(),{loading:t,value:r}=F({url:`/admin/contratos/${o}`});return n(c,{children:[t&&i(p,{}),!t&&(r==null?void 0:r.status)!==201&&i(h,{text:(s=r==null?void 0:r.error)==null?void 0:s.message}),!t&&r&&r.status===201&&r.data&&n(c,{children:[i(L,{message:"Liquidar contrato"}),i(m.exports.Suspense,{fallback:i(p,{}),children:i(g,a({},r.data))}),i(m.exports.Suspense,{fallback:i(p,{}),children:i(q,a({},r.data))})]})]})};export{ir as default};
