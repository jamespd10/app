import l from"./CustomSpeedDial.js";import{d as f}from"./PersonOff.js";import{d as e}from"./Edit.js";import{d as m}from"./Print.js";import{d as u}from"./Check.js";import{d as x}from"./AssignmentTurnedIn.js";import{M as A}from"./Modal2.js";import{u as P}from"./useModal.js";import{ac as _,r as C,t as E,j as R,F as h,a as i}from"./index.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import{B as O}from"./BackgroundLoader.js";import"./platform.js";import{C as F}from"./index15.js";import"./Assignment.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./ButtonBase.js";import"./Tooltip.js";import"./Portal.js";import"./appendOwnerState.js";import"./isHostComponent.js";import"./Grow.js";import"./Backdrop.js";import"./Stack.js";import"./extendSxProp.js";import"./Close2.js";import"./DialogTitle.js";import"./Modal.js";import"./Paper.js";import"./Typography.js";import"./IconButton.js";import"./Error.js";import"./Button.js";import"./Loader.js";import"./Grid.js";import"./HeaderTitle.js";import"./Divider.js";import"./useFetch.js";import"./useHttpService.js";import"./constants.js";import"./useHandlePrint.js";import"./string.helper.js";import"./regex.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./tslib.js";const Ft=()=>{const{id:p}=_(),{printing:s,handlePrint:d,edit:r,setEdit:a,value:t,modalProcesado:n}=C.exports.useContext(F),c=E(),o=P();return R(h,{children:[i(O,{open:s}),i(l,{titles:t.data.estado==="ACEPTADO"?[...r?["Dejar de Editar"]:[...t.data.fecha_procesado?["Imprimir"]:["Marcar como procesado","Liquidar","Imprimir","Editar"]]]:["Realizar"],icons:t.data.estado==="ACEPTADO"?[...r?[e]:[...t.data.fecha_procesado?[m]:[u,f,m,e]]]:[x],onPresses:t.data.estado==="ACEPTADO"?[...r?[()=>a(!1)]:[...t.data.fecha_procesado?[()=>o.setOpen()]:[()=>n.setOpen(),()=>{c(`/contratos/${p}/liquidar`)},()=>o.setOpen(),()=>a(!0)]]]:[()=>{}]}),i(A,{state:o.modalState,title:"\xA1Atenci\xF3n!",body:t.data.fecha_print?"El contrato ya se ha impreso anteriormente. \xBFRealmente desea imprimirlo?":"\xBFRealmente desea imprimir el contrato?",setHide:o.setHide,type:"ERROR",actionButton:{text:"IMPRIMIR",actionFunction:()=>{o.setHide(),d()}}})]})};export{Ft as default};
