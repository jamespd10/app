var f=Object.defineProperty;var c=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var p=(o,i,e)=>i in o?f(o,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[i]=e,m=(o,i)=>{for(var e in i||(i={}))h.call(i,e)&&p(o,e,i[e]);if(c)for(var e of c(i))v.call(i,e)&&p(o,e,i[e]);return o};import{r as a,q as r,j as d,F as l,a as t}from"./index.js";import{L as P}from"./index17.js";import{L as u}from"./Loader.js";import{N as F}from"./NotFoundResults.js";import{P as L}from"./Paper.js";import"./HeaderTitle.js";import"./Typography.js";import"./extendSxProp.js";import"./Divider.js";import"./useFetch.js";import"./jwt-decode.esm.js";import"./useHttpService.js";import"./constants.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./tslib.js";import"./useHandlePrint.js";import"./useModal.js";import"./Grid.js";const x=a.exports.lazy(()=>r(()=>import("./Modal2.js").then(function(o){return o.a}),["assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/extendSxProp.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/Button.js"])),y=a.exports.lazy(()=>r(()=>import("./ModalFormEdit.js"),["assets/ModalFormEdit.js","assets/index.js","assets/index.css","assets/array.js","assets/upperFirst.js","assets/DecimalInput.js","assets/TextInput.js","assets/TextField.js","assets/useControlled.js","assets/react-is.production.min.js","assets/Menu.js","assets/Modal.js","assets/Backdrop.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Grow.js","assets/List.js","assets/createSvgIcon.js","assets/GlobalStyles.js","assets/CustomDecimal.js","assets/react-number-format.es.js","assets/string.helper.js","assets/regex.js","assets/Grid.js","assets/extendSxProp.js","assets/useFetch.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/constants.js","assets/index17.js","assets/Loader.js","assets/Typography.js","assets/HeaderTitle.js","assets/Divider.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/tslib.js","assets/useHandlePrint.js","assets/useModal.js","assets/Alert.js","assets/Close.js","assets/IconButton.js","assets/ButtonBase.js","assets/useIsFocusVisible.js"])),A=a.exports.lazy(()=>r(()=>import("./Acciones4.js"),["assets/Acciones4.js","assets/index.js","assets/index.css","assets/Print.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/BackgroundLoader.js","assets/Backdrop.js","assets/CustomSpeedDial.js","assets/Assignment.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/Tooltip.js","assets/Portal.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/jwt-decode.esm.js","assets/Stack.js","assets/extendSxProp.js","assets/Check.js","assets/Edit.js","assets/index17.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/HeaderTitle.js","assets/Divider.js","assets/useFetch.js","assets/useHttpService.js","assets/constants.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/tslib.js","assets/useHandlePrint.js"])),S=a.exports.lazy(()=>r(()=>import("./LiquidacionPrintView.js"),["assets/LiquidacionPrintView.js","assets/SpanWidth.js","assets/index.js","assets/index.css","assets/date.helper.js","assets/index13.js","assets/index14.js","assets/string.helper.js","assets/regex.js"])),b=a.exports.lazy(()=>r(()=>import("./ModalSendProcesado2.js"),["assets/ModalSendProcesado2.js","assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/extendSxProp.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/Button.js","assets/useFetch.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/constants.js","assets/index17.js","assets/Loader.js","assets/Grid.js","assets/HeaderTitle.js","assets/Divider.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/tslib.js","assets/useHandlePrint.js","assets/useModal.js"])),U=()=>{const o=a.exports.useContext(P),{loading:i,value:e,elementRef:_,handlePrint:R}=o,{modalPrint:n,modalEdit:E,modalShowEdit:s}=o;return d(l,{children:[i&&t(u,{}),!i&&e&&e.status!==201&&t(F,{}),!i&&e&&e.status===201&&e.data&&d(l,{children:[t(L,{variant:"outlined",sx:{p:2,mt:2},children:t("div",{ref:_,children:t(a.exports.Suspense,{fallback:t(u,{}),children:t(S,m({},e.data))})})}),d(l,{children:[t(a.exports.Suspense,{fallback:t("div",{}),children:t(A,{})}),t(a.exports.Suspense,{fallback:t("div",{}),children:t(b,{})}),t(a.exports.Suspense,{fallback:t("div",{}),children:t(y,{})}),t(a.exports.Suspense,{fallback:t("div",{}),children:t(x,{state:s.modalState,setHide:s.setHide,title:"\xA1Atenci\xF3n!",type:"ERROR",body:"La liquidaci\xF3n ya se ha impreso. \xBFRealmente desea editarla?",actionButton:{text:"Editar",actionFunction:()=>{s.setHide(),E.setOpen()}},cancelBotton:{text:"Cancelar"}})}),t(a.exports.Suspense,{fallback:t("div",{}),children:t(x,{state:n.modalState,title:"\xA1Atenci\xF3n!",body:"\xBFRealmente desea imprimir la constancia de liquidaci\xF3n?",setHide:n.setHide,type:"ERROR",actionButton:{text:"IMPRIMIR",actionFunction:()=>{n.setHide(),R()}}})})]})]})]})};export{U as default};
