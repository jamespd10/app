import{ap as l,r as p,j as x,F as f,a as d}from"./index.js";import g from"./Modal.js";import{N as S}from"./index28.js";import{u as h}from"./useFetch.js";import{B as F}from"./BackgroundLoader.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./ModalTransition.js";import"./Backdrop.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Typography.js";import"./IconButton.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./CheckCircle.js";import"./DialogContent.js";import"./LoadingButton.js";import"./Button.js";import"./CircularProgress.js";import"./useModal.js";import"./string.helper.js";import"./regex.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useAsync.js";import"./useHttpService.js";import"./useFetcherEarly.js";import"./Loader.js";import"./Grid.js";const k=({id:a})=>{const{cliente:o}=l(),{isLoading:i,send:m,reset:r,response:e}=h();return{isLoading:i,handleSend:async()=>{await m({url:`/admin/negocios/${a}/${o}/mark`,method:"POST"})},response:e,reset:r}},rt=()=>{var s,n;const{modalMark:a,value:o,retry:i}=p.exports.useContext(S),{setHide:m,modalState:r}=a,{isLoading:e,response:t,handleSend:c,reset:u}=k({id:o.data.id});return p.exports.useEffect(()=>u(),[r]),x(f,{children:[d(F,{open:e}),d(g,{state:r,setHide:()=>{m(),t&&t.status===201&&i()},title:"\xA1Atenci\xF3n!",type:t&&t.status===201?"SUCCESS":"ERROR",actionButton:t?void 0:{text:"OK",actionFunction:async()=>await c()},body:!e&&!t?`\xBFRealmente desea marcar el negocio como ${Boolean(Number(o.data.cerrado))?"operando":"cerrado"}?`:t&&t.status===201?(s=t.data)==null?void 0:s.message:(n=t==null?void 0:t.error)==null?void 0:n.message})]})};export{rt as default};
