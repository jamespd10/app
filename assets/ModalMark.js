import{ac as l,r as n,j as x,F as f,a as d}from"./index.js";import{M as g}from"./Modal2.js";import{N as S}from"./index10.js";import{u as h}from"./useFetch.js";import"./jwt-decode.esm.js";import{B as F}from"./BackgroundLoader.js";import"./Close2.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Typography.js";import"./extendSxProp.js";import"./IconButton.js";import"./ButtonBase.js";import"./Error.js";import"./Backdrop.js";import"./Modal.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Button.js";import"./Loader.js";import"./Grid.js";import"./HeaderTitle.js";import"./Divider.js";import"./BootstrapTooltip.js";import"./Tooltip.js";import"./Grow.js";import"./NotFoundResults.js";import"./ContentProvider.js";import"./useModal.js";import"./platform.js";import"./string.helper.js";import"./regex.js";import"./useFirstFetch.js";import"./useAsyncRetry.js";import"./useHttpService.js";import"./constants.js";import"./useMediaQuery.js";import"./Box.js";const M=({id:i})=>{const{cliente:o}=l(),{isLoading:a,send:m,reset:r,response:e}=h();return{isLoading:a,handleSend:async()=>{await m({url:`/admin/negocios/${i}/${o}/mark`,method:"POST"})},response:e,reset:r}},pt=()=>{var s,p;const{modalMark:i,value:o,retry:a}=n.exports.useContext(S),{setHide:m,modalState:r}=i,{isLoading:e,response:t,handleSend:c,reset:u}=M({id:o.data.id});return n.exports.useEffect(()=>u(),[r]),x(f,{children:[d(F,{open:e}),d(g,{state:r,setHide:()=>{m(),t&&t.status===201&&a()},title:"\xA1Atenci\xF3n!",type:t&&t.status===201?"SUCCESS":"ERROR",actionButton:t?void 0:{text:"OK",actionFunction:async()=>await c()},body:!e&&!t?`\xBFRealmente desea marcar el negocio como ${Boolean(Number(o.data.cerrado))?"operando":"cerrado"}?`:t&&t.status===201?(s=t.data)==null?void 0:s.message:(p=t==null?void 0:t.error)==null?void 0:p.message})]})};export{pt as default};
