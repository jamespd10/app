import c from"./Modal.js";import{r as u,a as l}from"./index.js";import{u as x}from"./useFetch.js";import{L as f}from"./index17.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./LoadingButton.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Typography.js";import"./Button.js";import"./ButtonBase.js";import"./IconButton.js";import"./Error.js";import"./useHttpService.js";import"./Loader.js";import"./Grid.js";import"./HeaderTitle.js";import"./Divider.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useHandlePrint.js";import"./index15.js";import"./useModal.js";const Q=()=>{var a,m;const{modalProcesado:e,retry:o,value:s}=u.exports.useContext(f),{setHide:i,modalState:p}=e,{isLoading:d,send:n,reset:r,response:t}=x();return l(c,{state:p,setHide:()=>{i(),r(),(t==null?void 0:t.status)===201&&o()},title:"\xA1Atenci\xF3n!",type:t&&t.status===201?"SUCCESS":"ERROR",body:t&&t.status===201?(a=t.data)==null?void 0:a.message:t&&t.status!==201?(m=t.error)==null?void 0:m.message:"\xBFRealmente desea marcar la liquidaci\xF3n como procesada?",cancelBotton:{text:(t==null?void 0:t.status)===201?"Cerrar":"Cancelar",actionFunction:()=>{i(),r(),(t==null?void 0:t.status)===201&&o()}},actionButton:t?void 0:{text:"Ok",actionFunction:async()=>{await n({url:`/admin/liquidacion/${s.data.id}/send`,method:"POST"})},isLoading:d}})};export{Q as default};
