import s from"./Modal.js";import{a as n,F as o}from"./index.js";const r=e=>{var t,a;return n(o,{children:e.response&&n(s,{title:e.title||"\xA1Atenci\xF3n!",body:e.response.status===201?(t=e.response.data)==null?void 0:t.message:(a=e.response.error)==null?void 0:a.message,setHide:e.setHide,type:e.response.status===201?"SUCCESS":"ERROR",cancelBotton:{text:e.cancelButtonText||"Cerrar",actionFunction:e.cancelButtonAction},state:e.state})})};export{r as M};
