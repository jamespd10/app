import{r as t,b as p,A as _,j as q,a as o}from"./index.js";import{L as x}from"./Loader.js";import{H as v}from"./HeaderTitle.js";import"./BootstrapTooltip.js";import{u as z}from"./useModal.js";import{u as F}from"./useQueryParams.js";import"./ContentProvider.js";import"./SpeedDial.module.js";import"./Modal.js";import"./SelectedCard.js";import{d as R}from"./InsertDriveFile.js";import{d as b}from"./AssignmentTurnedIn.js";import{d as n}from"./PointOfSale.js";import{d as T}from"./PriceCheck.js";import{d as A}from"./PersonAddDisabled.js";import{d as S}from"./Paid.js";import{N as h}from"./NegociosProvider.js";import{B as P}from"./Box.js";import"./Grid.js";import"./Typography.js";import"./CircularProgress.js";import"./emotion-react.browser.esm.js";import"./Divider.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./ButtonBase.js";import"./CheckCircle.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./useFetchPagination.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useList.js";import"./usePrevious.js";import"./useHttpService.js";import"./object.helper.js";const y=t.exports.lazy(()=>p(()=>import("./Modal.js"),["assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index7.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CheckCircle.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js"])),E=t.exports.lazy(()=>p(()=>import("./NegociosAcciones.js"),["assets/NegociosAcciones.js","assets/index.js","assets/index7.css","assets/CustomSpeedDial.js","assets/Assignment.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/FabButtonAction.js","assets/react-is.production.min.js","assets/AssignmentRounded.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/Backdrop.js","assets/Stack.js","assets/Typography.js","assets/FileDownload.js","assets/AddBusiness.js"])),I=t.exports.lazy(()=>p(()=>import("./NegociosTable.js"),["assets/NegociosTable.js","assets/index.js","assets/index7.css","assets/BootstrapTooltip.js","assets/Tooltip.js","assets/Popper.js","assets/Portal.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/appendOwnerState.js","assets/isHostComponent.js","assets/Grow.js","assets/NotFoundResults.js","assets/Grid.js","assets/Typography.js","assets/ContentProvider.js","assets/useModal.js","assets/SpeedDial.module.js","assets/SpeedDial.module.css","assets/ChipState.js","assets/CheckCircle.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/Chip.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/CircularProgress.js","assets/Modal.js","assets/Close2.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Modal2.js","assets/Paper.js","assets/IconButton.js","assets/DialogContent.js","assets/LoadingButton.js","assets/Button.js","assets/SelectedCard.js","assets/CustomTable.js","assets/Search.js","assets/Clear.js","assets/TextField.js","assets/react-is.production.min.js","assets/List.js","assets/GlobalStyles.js","assets/Box.js","assets/InputAdornment.js","assets/FormGroup.js","assets/FormControlLabel.js","assets/Checkbox.js","assets/SkipNextOutlined.js","assets/Pagination.js","assets/TableRow.js","assets/Loader.js","assets/Stack.js","assets/LinearProgress.js","assets/Visibility.js","assets/NegociosProvider.js","assets/useFetchPagination.js","assets/useAsyncRetry.js","assets/useAsync.js","assets/useList.js","assets/usePrevious.js","assets/useHttpService.js","assets/object.helper.js","assets/useFetch.js"])),Eo=()=>{const{queryParams:r}=F(),a=r.get("c"),i=r.get("pla"),l=r.get("f"),e=r.get("fa"),s=r.get("itbms"),m=r.get("dm"),c=r.get("lq"),{authState:d}=t.exports.useContext(_),{tipo:u}=d,{modalState:f,setHide:g}=z(!!(a||i||l||m||c||e||s));return q(h,{children:[o(v,{message:"Negocios"}),o(P,{sx:{marginTop:2},children:o(t.exports.Suspense,{fallback:o(x,{}),children:o(I,{contratar:a,actionTitle:a?"Realizar Contrato":i?"Realizar planilla":l?"Realizar proforma":e?"Realizar fact. alterna":m?"Realizar declaraci\xF3n":c?"Realizar contrato a liquidar":s?"Realizar ITBMS":void 0,actionLink:a?"/contratar":i?"/planillar":l?"/proformas/add":e?`/fact-alterna/${e}`:m?"/agregar-declaracion-municipio":c?"/contratar?lq=1":s?"/agregar-itbms":void 0,actionIcon:a?R:i?b:l?n:e?n:m?T:c?A:s?S:void 0})})}),!a&&!i&&!l&&!e&&!c&&!s&&u==="Super"&&o(t.exports.Suspense,{fallback:o("div",{}),children:o(E,{})}),o(t.exports.Suspense,{fallback:o("div",{}),children:o(y,{state:f,setHide:g,title:"\xA1Atenci\xF3n!",body:a?"Favor seleccionar el negocio al que se le quiere realizar el contrato":i?"Favor seleccionar el negocio al que se le quiere realizar la planilla":l?"Favor seleccionar el negocio al que se le quiere realizar la proforma":e?"Favor seleccionar el negocio al que se le quiere realizar la fact. alterna":m?"Favor seleccionar el negocio al que se le quiere realizar la declaraci\xF3n municipal":c?"Favor seleccionar el negocio al que pertenece el contrato a liquidar":s?"Favor seleccionar el negocio al que se le quiere realizar el ITBMS":""})})]})};export{Eo as default};
