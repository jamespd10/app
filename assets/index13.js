import{a6 as p,r as a,au as u,a as e,b as n}from"./index.js";import{L as t}from"./Loader.js";const c=o=>{const r=p();return a.exports.useMemo(()=>{const i=o||r.search,l=new URLSearchParams(i);return Object.fromEntries(l.entries())},[r,o])},m=a.exports.createContext({}),d=({children:o})=>{const{pla:r}=c(),s=u("/admin/asignados",{tipo:r?"sipe":"",marco:"lalito"});return e(m.Provider,{value:{pagination:s},children:o})},_=a.exports.lazy(()=>n(()=>import("./index50.js"),["assets/index50.js","assets/index10.css","assets/index.js","assets/index7.css","assets/ChipState.js","assets/CheckCircle.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Chip.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CircularProgress.js","assets/Visibility.js","assets/InsertDriveFile.js","assets/AssignmentTurnedIn.js","assets/PointOfSale.js","assets/PriceCheck.js","assets/PersonAddDisabled.js","assets/Paid.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/isHostComponent.js","assets/Grow.js","assets/SkipNextOutlined.js","assets/IconButton.js","assets/Pagination.js","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/TextInput.js","assets/TextField.js","assets/useFormControl.js","assets/formControlState.js","assets/react-is.production.min.js","assets/Modal2.js","assets/Backdrop.js","assets/Fade.js","assets/Paper.js","assets/List.js","assets/outlinedInputClasses.js","assets/GlobalStyles.js","assets/Search.js","assets/Close2.js","assets/ErrorIcon.js","assets/StyledGridOverlay.js","assets/Box.js","assets/HeaderTitle.js","assets/Divider.js"])),P=a.exports.lazy(()=>n(()=>import("./index51.js"),["assets/index51.js","assets/index.js","assets/index7.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/HeaderTitle.js","assets/Divider.js","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/isHostComponent.js","assets/Grow.js","assets/useModal.js","assets/useQueryParams.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/InsertDriveFile.js","assets/AssignmentTurnedIn.js","assets/PointOfSale.js","assets/PriceCheck.js","assets/PersonAddDisabled.js","assets/Paid.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/object.helper.js","assets/Box.js"])),x=()=>{const{fa:o}=c();return o?e(a.exports.Suspense,{fallback:e(t,{}),children:e(P,{})}):e(d,{children:e(a.exports.Suspense,{fallback:e(t,{}),children:e(_,{})})})};var v=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));export{m as N,v as i,c as u};
