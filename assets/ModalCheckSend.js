import{ap as l,r as x,j as h,a as o}from"./index.js";import f from"./Modal.js";import{a as C}from"./ItbmsProvider.js";import{u as S}from"./useFetch.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Typography.js";import"./IconButton.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./CheckCircle.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./CircularProgress.js";import"./useModal.js";import"./useFetcherEarly.js";import"./useHttpService.js";const N=()=>{var s,i;const{id:m}=l(),{modalCheckSend:n,fetcher:p}=x.exports.useContext(C),[,,,r]=p,{modalState:c,setHide:e}=n,{isLoading:d,send:u,reset:a,response:t}=S();return h(f,{state:c,setHide:()=>{e(),a(),t&&t.status===201&&r()},title:"\xA1Atenci\xF3n!",type:(t==null?void 0:t.status)===201?"SUCCESS":"ERROR",cancelBotton:{text:t&&t.status===201?"Cerrar":"Cancelar",actionFunction:()=>{e(),a(),t&&t.status===201&&r()}},actionButton:t?void 0:{text:"Procesar",actionFunction:async()=>{await u({url:`/admin/itbms/${m}/check-send`,method:"POST"})},isLoading:d},children:[!t&&o("span",{children:"\xBFRealmente desea marcar el ITBMS como procesado?"}),t&&t.status===201&&o("span",{children:(s=t.data)==null?void 0:s.message}),t&&t.status!==201&&o("span",{children:(i=t.error)==null?void 0:i.message})]})};export{N as default};
