import l from"./CustomSpeedDial.js";import{d as f}from"./PersonOff.js";import{d as m}from"./Edit.js";import{d as e}from"./Print.js";import{d as u}from"./Check.js";import{d as x}from"./AssignmentTurnedIn.js";import A from"./Modal.js";import{u as P}from"./useModal.js";import{ap as _,r as C,a7 as E,j as R,F as h,a as i}from"./index.js";import"./BootstrapTooltip.js";import"./SpeedDial.module.js";import{B as O}from"./BackgroundLoader.js";import"./SelectedCard.js";import{C as F}from"./index22.js";import"./Assignment.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./Backdrop.js";import"./Fade.js";import"./Stack.js";import"./Typography.js";import"./Close2.js";import"./ModalTransition.js";import"./Modal2.js";import"./Paper.js";import"./IconButton.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";import"./CircularProgress.js";import"./Loader.js";import"./Grid.js";import"./HeaderTitle.js";import"./Divider.js";import"./useFetch.js";import"./useHttpService.js";import"./useHandlePrint.js";import"./index23.js";import"./string.helper.js";import"./regex.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useAsync.js";const It=()=>{const{id:p}=_(),{printing:s,handlePrint:d,edit:r,setEdit:a,value:t,modalProcesado:n}=C.exports.useContext(F),c=E(),o=P();return R(h,{children:[i(O,{open:s}),i(l,{titles:t.data.estado==="ACEPTADO"?[...r?["Dejar de Editar"]:[...t.data.fecha_procesado?["Imprimir"]:["Marcar como procesado","Liquidar","Imprimir","Editar"]]]:["Realizar"],icons:t.data.estado==="ACEPTADO"?[...r?[m]:[...t.data.fecha_procesado?[e]:[u,f,e,m]]]:[x],onPresses:t.data.estado==="ACEPTADO"?[...r?[()=>a(!1)]:[...t.data.fecha_procesado?[()=>o.setOpen()]:[()=>n.setOpen(),()=>{c(`/contratos/${p}/liquidar`)},()=>o.setOpen(),()=>a(!0)]]]:[()=>{}]}),i(A,{state:o.modalState,title:"\xA1Atenci\xF3n!",body:t.data.fecha_print?"El contrato ya se ha impreso anteriormente. \xBFRealmente desea imprimirlo?":"\xBFRealmente desea imprimir el contrato?",setHide:o.setHide,type:"ERROR",actionButton:{text:"IMPRIMIR",actionFunction:()=>{o.setHide(),d()}}})]})};export{It as default};
