import{ac as u,r as l,j as x,a as o}from"./index.js";import{M as h}from"./Modal2.js";import{I as C}from"./index40.js";import{u as S}from"./useFetch.js";import"./jwt-decode.esm.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Typography.js";import"./extendSxProp.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./Backdrop.js";import"./Modal.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Button.js";import"./useModal.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./tslib.js";import"./useHttpService.js";import"./constants.js";import"./Loader.js";import"./Grid.js";const Q=()=>{var i,s;const{id:m}=u(),{modalCheckSend:n,retry:r}=l.exports.useContext(C),{modalState:p,setHide:a}=n,{isLoading:c,send:d,reset:e,response:t}=S();return x(h,{state:p,setHide:()=>{a(),e(),t&&t.status===201&&r()},title:"\xA1Atenci\xF3n!",type:(t==null?void 0:t.status)===201?"SUCCESS":"ERROR",cancelBotton:{text:t&&t.status===201?"Cerrar":"Cancelar",actionFunction:()=>{a(),e(),t&&t.status===201&&r()}},actionButton:t?void 0:{text:"Procesar",actionFunction:async()=>{await d({url:`/admin/itbms/${m}/check-send`,method:"POST"})},isLoading:c},children:[!t&&o("span",{children:"\xBFRealmente desea marcar el ITBMS como procesado?"}),t&&t.status===201&&o("span",{children:(i=t.data)==null?void 0:i.message}),t&&t.status!==201&&o("span",{children:(s=t.error)==null?void 0:s.message})]})};export{Q as default};