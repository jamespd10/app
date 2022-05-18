import{r,q as p,j as e,F as a,a as t}from"./index.js";import{L as s}from"./Loader.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import{N as x}from"./NotFoundResults.js";import"./ContentProvider.js";import"./Modal2.js";import"./platform.js";import{C as f}from"./index15.js";import{S as h}from"./Stack.js";import{P as v}from"./Paper.js";import"./Grid.js";import"./extendSxProp.js";import"./Typography.js";import"./Tooltip.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./Backdrop.js";import"./Modal.js";import"./Button.js";import"./HeaderTitle.js";import"./Divider.js";import"./useFetch.js";import"./useHttpService.js";import"./constants.js";import"./useHandlePrint.js";import"./string.helper.js";import"./regex.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./tslib.js";const E=r.exports.lazy(()=>p(()=>import("./ContratoPrintView.js"),["assets/ContratoPrintView.js","assets/index.js","assets/index.css","assets/Loader.js","assets/Grid.js","assets/extendSxProp.js","assets/Typography.js"])),P=r.exports.lazy(()=>p(()=>import("./ContratoAcciones.js"),["assets/ContratoAcciones.js","assets/CustomSpeedDial.js","assets/index.js","assets/index.css","assets/Assignment.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/Tooltip.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/jwt-decode.esm.js","assets/Backdrop.js","assets/Stack.js","assets/extendSxProp.js","assets/PersonOff.js","assets/Edit.js","assets/Print.js","assets/Check.js","assets/AssignmentTurnedIn.js","assets/Modal2.js","assets/Close2.js","assets/Typography.js","assets/IconButton.js","assets/Error.js","assets/Modal.js","assets/Paper.js","assets/Button.js","assets/BootstrapTooltip.js","assets/BackgroundLoader.js","assets/platform.js","assets/index15.js","assets/Loader.js","assets/Grid.js","assets/HeaderTitle.js","assets/Divider.js","assets/useFetch.js","assets/useHttpService.js","assets/constants.js","assets/useHandlePrint.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/tslib.js"])),C=r.exports.lazy(()=>p(()=>import("./index12.js"),["assets/index12.js","assets/index.js","assets/index.css","assets/array.js","assets/upperFirst.js","assets/BackgroundLoader.js","assets/Backdrop.js","assets/HeaderTitle.js","assets/Typography.js","assets/extendSxProp.js","assets/Divider.js","assets/useStepper.js","assets/useFetch.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/constants.js","assets/useModal.js","assets/constantsLists.js","assets/nacionalidades.js","assets/string.helper.js","assets/regex.js","assets/date.helper.js","assets/index13.js","assets/index14.js","assets/Lazy.js","assets/Loader.js","assets/Grid.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useQueryParams.js","assets/ContentProvider.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/Modal.js","assets/Paper.js","assets/Button.js","assets/platform.js","assets/Card.js"])),S=r.exports.lazy(()=>p(()=>import("./ModalSendProcesado.js"),["assets/ModalSendProcesado.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Typography.js","assets/extendSxProp.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Button.js","assets/useFetch.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/constants.js","assets/index15.js","assets/Loader.js","assets/Grid.js","assets/HeaderTitle.js","assets/Divider.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/platform.js","assets/useHandlePrint.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/tslib.js"])),dt=()=>{const m=r.exports.useContext(f),{edit:n,loading:i,value:o,defaultValues:d}=m,{setEdit:l,retry:c,elementRef:u,printing:_}=m;return e(a,{children:[i&&t(s,{}),!n&&e(a,{children:[!i&&o&&o.status!==201&&t(x,{}),!i&&o&&o.status===201&&o.data&&t(h,{direction:"column",spacing:1,style:{marginTop:10},children:t(v,{variant:"outlined",sx:{p:2},children:t("div",{ref:u,children:t(r.exports.Suspense,{fallback:t(s,{}),children:t(E,{priting:_,contrato:o.data})})})})})]}),!i&&o&&o.status===201&&o.data&&e(a,{children:[t(r.exports.Suspense,{fallback:t("div",{}),children:t(P,{})}),t(r.exports.Suspense,{fallback:t("div",{}),children:t(S,{})})]}),n&&!i&&o&&o.status===201&&o.data&&d&&t(r.exports.Suspense,{fallback:t(s,{}),children:t(C,{contrato:d,setEdit:l,retry:c})})]})};export{dt as default};