import{M as d}from"./Modal2.js";import{ac as u,r as l,a as x}from"./index.js";import{u as C}from"./useFetch.js";import"./jwt-decode.esm.js";import{C as f}from"./index15.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./DialogTitle.js";import"./Backdrop.js";import"./Modal.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Typography.js";import"./extendSxProp.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./Button.js";import"./useHttpService.js";import"./constants.js";import"./Loader.js";import"./Grid.js";import"./HeaderTitle.js";import"./Divider.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./appendOwnerState.js";import"./Grow.js";import"./ContentProvider.js";import"./useModal.js";import"./platform.js";import"./useHandlePrint.js";import"./string.helper.js";import"./regex.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./tslib.js";const mt=()=>{var m,a;const{id:p}=u(),{modalProcesado:s,retry:o}=l.exports.useContext(f),{setHide:r,modalState:e}=s,{isLoading:n,send:c,reset:i,response:t}=C();return x(d,{state:e,setHide:()=>{r(),i(),(t==null?void 0:t.status)===201&&o()},title:"\xA1Atenci\xF3n!",type:t&&t.status===201?"SUCCESS":"ERROR",body:t&&t.status===201?(m=t.data)==null?void 0:m.message:t&&t.status!==201?(a=t.error)==null?void 0:a.message:"\xBFRealmente desea marcar el contrato como procesado?",cancelBotton:{text:(t==null?void 0:t.status)===201?"Cerrar":"Cancelar",actionFunction:()=>{r(),i(),(t==null?void 0:t.status)===201&&o()}},actionButton:t?void 0:{text:"Ok",actionFunction:async()=>{await c({url:`/admin/contratos/${p}/send`,method:"POST"})},isLoading:n}})};export{mt as default};
