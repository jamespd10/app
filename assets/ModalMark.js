import{ap as l,r as n,j as x,F as f,a as d}from"./index.js";import g from"./Modal.js";import{N as S}from"./index28.js";import{u as h}from"./useFetch.js";import{B as F}from"./BackgroundLoader.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Typography.js";import"./IconButton.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./CheckCircle.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./CircularProgress.js";import"./Loader.js";import"./Grid.js";import"./HeaderTitle.js";import"./Divider.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./Popper.js";import"./appendOwnerState.js";import"./Grow.js";import"./NotFoundResults.js";import"./ContentProvider.js";import"./useModal.js";import"./SpeedDial.module.js";import"./SelectedCard.js";import"./string.helper.js";import"./regex.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useHttpService.js";import"./Box.js";const k=({id:e})=>{const{cliente:o}=l(),{isLoading:m,send:a,reset:r,response:i}=h();return{isLoading:m,handleSend:async()=>{await a({url:`/admin/negocios/${e}/${o}/mark`,method:"POST"})},response:i,reset:r}},lt=()=>{var p,s;const{modalMark:e,value:o,retry:m}=n.exports.useContext(S),{setHide:a,modalState:r}=e,{isLoading:i,response:t,handleSend:c,reset:u}=k({id:o.data.id});return n.exports.useEffect(()=>u(),[r]),x(f,{children:[d(F,{open:i}),d(g,{state:r,setHide:()=>{a(),t&&t.status===201&&m()},title:"\xA1Atenci\xF3n!",type:t&&t.status===201?"SUCCESS":"ERROR",actionButton:t?void 0:{text:"OK",actionFunction:async()=>await c()},body:!i&&!t?`\xBFRealmente desea marcar el negocio como ${Boolean(Number(o.data.cerrado))?"operando":"cerrado"}?`:t&&t.status===201?(p=t.data)==null?void 0:p.message:(s=t==null?void 0:t.error)==null?void 0:s.message})]})};export{lt as default};
