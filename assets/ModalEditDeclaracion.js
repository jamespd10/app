import{r as e,b as r,a as t,j as u,F as x}from"./index.js";const m=e.exports.lazy(()=>r(()=>import("./Modal.js"),["assets/Modal.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index14.css","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/dialogTitleClasses.js","assets/ModalTransition.js","assets/Backdrop.js","assets/Fade.js","assets/Modal2.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js","assets/Warning.js","assets/Error.js","assets/CheckCircle.js","assets/DialogContent.js","assets/DialogActions.js","assets/LoadingButton.js","assets/Button.js","assets/CircularProgress.js"])),F=({modalState:c,res:a,setHide:o,handleSubmit:d,setEdit:i,retry:l})=>{var n;const s=()=>{i(!1),o(),l()};return t(e.exports.Suspense,{fallback:t("div",{}),children:t(m,{state:c,title:"\xA1Atenci\xF3n!",body:a?a&&a.status!==201?(n=a.error)==null?void 0:n.message:void 0:"\xBFRealmente desea guardar la declaraci\xF3n?",cancelBotton:{actionFunction:a&&a.status===201?s:o,text:a?"Cerrar":"Cancelar"},type:a&&a.status===201?"SUCCESS":"ERROR",actionButton:a?void 0:{actionFunction:d,text:"Guardar"},children:a&&a.status===201&&a.data?u(x,{children:[a.data.message,"."]}):void 0})})};export{F as default};
