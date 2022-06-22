import{r,b as p,j as e,F as a,a as t}from"./index.js";import{L as s}from"./Loader.js";import"./BootstrapTooltip.js";import{N as x}from"./NotFoundResults.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{C as f}from"./index14.js";import{S as h}from"./Stack.js";import{P as v}from"./Paper.js";import"./Grid.js";import"./Typography.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./isHostComponent.js";import"./Grow.js";import"./useModal.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./Button.js";import"./ButtonBase.js";import"./IconButton.js";import"./Error.js";import"./HeaderTitle.js";import"./Divider.js";import"./useFetch.js";import"./useHttpService.js";import"./useHandlePrint.js";import"./index15.js";import"./string.helper.js";import"./regex.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useAsync.js";const E=r.exports.lazy(()=>p(()=>import("./ContratoPrintView.js"),["assets/ContratoPrintView.js","assets/index.js","assets/index3.css","assets/Loader.js","assets/Grid.js","assets/Typography.js"])),P=r.exports.lazy(()=>p(()=>import("./ContratoAcciones.js"),["assets/ContratoAcciones.js","assets/CustomSpeedDial.js","assets/index.js","assets/index3.css","assets/Assignment.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Stack.js","assets/Typography.js","assets/PersonOff.js","assets/Edit.js","assets/Print.js","assets/Check.js","assets/AssignmentTurnedIn.js","assets/Modal.js","assets/Close2.js","assets/LoadingButton.js","assets/Modal2.js","assets/Paper.js","assets/Button.js","assets/IconButton.js","assets/Error.js","assets/BootstrapTooltip.js","assets/BackgroundLoader.js","assets/SelectedCard.js","assets/index14.js","assets/Loader.js","assets/Grid.js","assets/HeaderTitle.js","assets/Divider.js","assets/useFetch.js","assets/useHttpService.js","assets/useHandlePrint.js","assets/index15.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js"])),C=r.exports.lazy(()=>p(()=>import("./index12.js"),["assets/index12.js","assets/index.js","assets/index3.css","assets/array.js","assets/upperFirst.js","assets/BackgroundLoader.js","assets/Backdrop.js","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/useStepper.js","assets/useFetch.js","assets/useHttpService.js","assets/useModal.js","assets/constantsLists.js","assets/string.helper.js","assets/regex.js","assets/date.helper.js","assets/index13.js","assets/Lazy.js","assets/Loader.js","assets/Grid.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useQueryParams.js","assets/ContentProvider.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/LoadingButton.js","assets/Modal2.js","assets/Paper.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/SelectedCard.js","assets/Card.js"])),S=r.exports.lazy(()=>p(()=>import("./ModalSendProcesado.js"),["assets/ModalSendProcesado.js","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index3.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/Button.js","assets/ButtonBase.js","assets/IconButton.js","assets/Error.js","assets/useFetch.js","assets/useHttpService.js","assets/index14.js","assets/Loader.js","assets/Grid.js","assets/HeaderTitle.js","assets/Divider.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/useHandlePrint.js","assets/index15.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js"])),lt=()=>{const m=r.exports.useContext(f),{edit:n,loading:i,value:o,defaultValues:d}=m,{setEdit:l,retry:c,elementRef:u,printing:_}=m;return e(a,{children:[i&&t(s,{}),!n&&e(a,{children:[!i&&o&&o.status!==201&&t(x,{}),!i&&o&&o.status===201&&o.data&&t(h,{direction:"column",spacing:1,style:{marginTop:10},children:t(v,{variant:"outlined",sx:{p:2},children:t("div",{ref:u,children:t(r.exports.Suspense,{fallback:t(s,{}),children:t(E,{priting:_,contrato:o.data})})})})})]}),!i&&o&&o.status===201&&o.data&&e(a,{children:[t(r.exports.Suspense,{fallback:t("div",{}),children:t(P,{})}),t(r.exports.Suspense,{fallback:t("div",{}),children:t(S,{})})]}),n&&!i&&o&&o.status===201&&o.data&&d&&t(r.exports.Suspense,{fallback:t(s,{}),children:t(C,{contrato:d,setEdit:l,retry:c})})]})};export{lt as default};
