import{ae as u,r as l,j as x,a as o}from"./index.js";import h from"./Modal.js";import{I as C}from"./index40.js";import{u as S}from"./useFetch.js";import"./jwt-decode.esm.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Typography.js";import"./Button.js";import"./ButtonBase.js";import"./IconButton.js";import"./Error.js";import"./useModal.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useHttpService.js";import"./Loader.js";import"./Grid.js";const K=()=>{var s,i;const{id:m}=u(),{modalCheckSend:n,retry:r}=l.exports.useContext(C),{modalState:p,setHide:e}=n,{isLoading:c,send:d,reset:a,response:t}=S();return x(h,{state:p,setHide:()=>{e(),a(),t&&t.status===201&&r()},title:"\xA1Atenci\xF3n!",type:(t==null?void 0:t.status)===201?"SUCCESS":"ERROR",cancelBotton:{text:t&&t.status===201?"Cerrar":"Cancelar",actionFunction:()=>{e(),a(),t&&t.status===201&&r()}},actionButton:t?void 0:{text:"Procesar",actionFunction:async()=>{await d({url:`/admin/itbms/${m}/check-send`,method:"POST"})},isLoading:c},children:[!t&&o("span",{children:"\xBFRealmente desea marcar el ITBMS como procesado?"}),t&&t.status===201&&o("span",{children:(s=t.data)==null?void 0:s.message}),t&&t.status!==201&&o("span",{children:(i=t.error)==null?void 0:i.message})]})};export{K as default};
