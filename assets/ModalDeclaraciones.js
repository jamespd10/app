import{r as c,q as r,t as s,a as t,j as u,F as x}from"./index.js";const v=c.exports.lazy(()=>r(()=>import("./Modal2.js").then(function(e){return e.a}),["assets/Modal2.js","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/index.js","assets/index2.css","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/DialogTitle.js","assets/Backdrop.js","assets/Modal.js","assets/isHostComponent.js","assets/Portal.js","assets/Paper.js","assets/Typography.js","assets/extendSxProp.js","assets/IconButton.js","assets/ButtonBase.js","assets/Error.js","assets/Button.js"])),p=({modalState:e,res:a,setHide:n,handleSubmit:d})=>{var i;const l=s();return t(c.exports.Suspense,{fallback:t("div",{}),children:t(v,{state:e,title:"\xA1Atenci\xF3n!",setHide:a&&a.status===201?n:void 0,body:a?a&&a.status!==201?(i=a.error)==null?void 0:i.message:void 0:"\xBFRealmente desea guardar la declaraci\xF3n?",cancelBotton:{actionFunction:n,text:a?"Cerrar":"Cancelar"},type:a&&a.status===201?"SUCCESS":"ERROR",actionButton:a?a&&a.status===201?{actionFunction:()=>{var o;l(`/declaraciones-municipales/${(o=a.data)==null?void 0:o.id}`,{replace:!0})},text:"Ver"}:void 0:{actionFunction:d,text:"Guardar"},children:a&&a.status===201&&a.data?u(x,{children:[a.data.message,". ",t("br",{}),"\xBFDesea ver la declaraci\xF3n realizada?"]}):void 0})})};export{p as default};
