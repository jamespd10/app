import{r as c,q as s,a as n,j as u,F as x}from"./index.js";const m=c.exports.lazy(()=>s(()=>import("./Modal2.js").then(function(t){return t.e}),["assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Typography.js","assets/extendSxProp.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Button.js"])),F=({modalState:t,res:a,setHide:e,handleSubmit:i,setEdit:d,retry:l})=>{var o;const r=()=>{d(!1),e(),l()};return n(c.exports.Suspense,{fallback:n("div",{}),children:n(m,{state:t,title:"\xA1Atenci\xF3n!",body:a?a&&a.status!==201?(o=a.error)==null?void 0:o.message:void 0:"\xBFRealmente desea guardar la declaraci\xF3n?",cancelBotton:{actionFunction:a&&a.status===201?r:e,text:a?"Cerrar":"Cancelar"},type:a&&a.status===201?"SUCCESS":"ERROR",actionButton:a?void 0:{actionFunction:i,text:"Guardar"},children:a&&a.status===201&&a.data?u(x,{children:[a.data.message,"."]}):void 0})})};export{F as default};