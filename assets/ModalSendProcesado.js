import d from"./Modal.js";import{ap as u,r as l,a as x}from"./index.js";import{u as C}from"./useFetch.js";import{C as f}from"./index22.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useId.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./DialogTitle.js";import"./dialogTitleClasses.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Typography.js";import"./IconButton.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./Warning.js";import"./Error.js";import"./CheckCircle.js";import"./DialogContent.js";import"./DialogActions.js";import"./LoadingButton.js";import"./Button.js";import"./CircularProgress.js";import"./useHttpService.js";import"./Loader.js";import"./Grid.js";import"./HeaderTitle.js";import"./Divider.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./Popper.js";import"./Grow.js";import"./SpeedDial.module.js";import"./SelectedCard.js";import"./useModal.js";import"./useHandlePrint.js";import"./index23.js";import"./string.helper.js";import"./regex.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";const ut=()=>{var m,a;const{id:p}=u(),{modalProcesado:e,retry:o}=l.exports.useContext(f),{setHide:r,modalState:s}=e,{isLoading:n,send:c,reset:i,response:t}=C();return x(d,{state:s,setHide:()=>{r(),i(),(t==null?void 0:t.status)===201&&o()},title:"\xA1Atenci\xF3n!",type:t&&t.status===201?"SUCCESS":"ERROR",body:t&&t.status===201?(m=t.data)==null?void 0:m.message:t&&t.status!==201?(a=t.error)==null?void 0:a.message:"\xBFRealmente desea marcar el contrato como procesado?",cancelBotton:{text:(t==null?void 0:t.status)===201?"Cerrar":"Cancelar",actionFunction:()=>{r(),i(),(t==null?void 0:t.status)===201&&o()}},actionButton:t?void 0:{text:"Ok",actionFunction:async()=>{await c({url:`/admin/contratos/${p}/send`,method:"POST"})},isLoading:n}})};export{ut as default};
