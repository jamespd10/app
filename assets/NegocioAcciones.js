import{r,b as c,a7 as O,A as C,j as R,F as s,a as t}from"./index.js";import{d as g}from"./InsertDriveFile.js";import{d as A}from"./Check.js";import{c as u,i as v,r as _}from"./jsx-runtime_commonjs-proxy.js";import{d as E}from"./AssignmentTurnedIn.js";import{N as L}from"./index28.js";import{S as h}from"./StyledSpeedDial.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Loader.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./HeaderTitle.js";import"./Divider.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./NotFoundResults.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./Modal.js";import"./Close2.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./CheckCircle.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./SelectedCard.js";import"./string.helper.js";import"./regex.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useHttpService.js";import"./Box.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./Stack.js";var l={},j=v.exports;Object.defineProperty(l,"__esModule",{value:!0});var a=l.default=void 0,k=j(u),P=_,z=(0,k.default)((0,P.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"}),"ModeEditOutline");a=l.default=z;var p={},D=v.exports;Object.defineProperty(p,"__esModule",{value:!0});var f=p.default=void 0,N=D(u),I=_,b=(0,N.default)((0,I.jsx)("path",{d:"M18.41 5.8 17.2 4.59c-.78-.78-2.05-.78-2.83 0l-2.68 2.68L3 15.96V20h4.04l8.74-8.74 2.63-2.63c.79-.78.79-2.05 0-2.83zM6.21 18H5v-1.21l8.66-8.66 1.21 1.21L6.21 18zM11 20l4-4h6v4H11z"}),"DriveFileRenameOutline");f=p.default=b;const T=r.exports.lazy(()=>c(()=>import("./ModalEditPatronal.js"),["assets/ModalEditPatronal.js","assets/Loader.js","assets/index.js","assets/index7.css","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/useFetch.js","assets/useHttpService.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/SelectHookForm.js","assets/yup.module.js","assets/Box.js","assets/TextField.js","assets/react-is.production.min.js","assets/List.js","assets/GlobalStyles.js","assets/MenuItem.js","assets/listItemIconClasses.js","assets/Divider.js","assets/listItemTextClasses.js","assets/PatronalInput.js","assets/TextInput.js","assets/CustomSipe.js","assets/index11.js","assets/array.js","assets/upperFirst.js","assets/regex.js","assets/index28.js","assets/HeaderTitle.js","assets/NotFoundResults.js","assets/string.helper.js","assets/Stack.js","assets/Alert.js","assets/Close.js"])),y=r.exports.lazy(()=>c(()=>import("./ModalMark.js"),["assets/ModalMark.js","assets/index.js","assets/index7.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js","assets/index28.js","assets/Loader.js","assets/Grid.js","assets/HeaderTitle.js","assets/Divider.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/appendOwnerState.js","assets/Grow.js","assets/NotFoundResults.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/SelectedCard.js","assets/string.helper.js","assets/regex.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useHttpService.js","assets/Box.js","assets/useFetch.js","assets/BackgroundLoader.js"])),yt=()=>{const n=r.exports.useContext(L),{value:o,editing:x,setEditing:m}=n,{modalEditPatronal:S,modalMark:$}=n,d=O(),{authState:M}=r.exports.useContext(C),{tipo:i,permisos:e}=M;return i&&["Super","Secretari@"].includes(i)&&e&&(e.includes("PLANILLAS")||e.includes("CONTRATOS"))?R(s,{children:[t(h,{acciones:x?[{icon:a,onClick:()=>m(!1),title:"Dejar de editar"}]:[...e&&e.includes("PLANILLAS")?[{icon:E,onClick:()=>{d(`/negocios/${o.data.id}/${o.data.id_cliente}/planillar`)},title:"Realizar Planilla"}]:[],...e&&e.includes("CONTRATOS")?[{icon:g,onClick:()=>{d(`/negocios/${o.data.id}/${o.data.id_cliente}/contratar`)},title:"Realizar Contrato"}]:[],...i&&i==="Super"?[{icon:A,onClick:()=>$.setOpen(),title:`Marcar como ${Boolean(Number(o.data.cerrado))?"operando":"cerrado"}`},{icon:a,onClick:()=>m(!0),title:"Editar"},{icon:f,onClick:()=>S.setOpen(),title:"Editar patronal"}]:[]]}),t(r.exports.Suspense,{fallback:t("div",{}),children:t(y,{})}),t(r.exports.Suspense,{fallback:t("div",{}),children:t(T,{})})]}):t(s,{})};export{yt as default};
