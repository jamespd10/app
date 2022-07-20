import{d as S}from"./Close2.js";import{j as n,a as o,s as I,F as N}from"./index.js";import{D as _}from"./DialogTitle.js";import{I as b}from"./IconButton.js";import{d as A}from"./Warning.js";import{d as L}from"./Error.js";import{d as O}from"./CheckCircle.js";import{c as j,i as w,r as E}from"./jsx-runtime_commonjs-proxy.js";import{D as F,M as H}from"./ModalTransition.js";import{D as T}from"./DialogContent.js";import{T as W}from"./Typography.js";import{D as $}from"./DialogActions.js";import{L as r}from"./LoadingButton.js";import"./dialogTitleClasses.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./useIsFocusVisible.js";import"./createSvgIcon.js";import"./useId.js";import"./useControlled.js";import"./Backdrop.js";import"./Fade.js";import"./Modal2.js";import"./isHostComponent.js";import"./Portal.js";import"./Paper.js";import"./Button.js";import"./CircularProgress.js";const k=t=>{const{children:c,setHide:e,icon:i}=t;return n(_,{sx:{m:0,p:2},children:[n("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"nowrap"},children:[i,c]}),e&&o(b,{"aria-label":"close",onClick:e,sx:{position:"absolute",right:8,top:8,color:a=>a.palette.grey[500]},children:o(S,{})})]})};var d={},q=w.exports;Object.defineProperty(d,"__esModule",{value:!0});var l=d.default=void 0,z=q(j),G=E,U=(0,z.default)((0,G.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications");l=d.default=U;const P=t=>{switch(t){case"ERROR":return L;case"WARNING":return A;case"SUCCESS":return O;case"NORMAL":return l;default:return l}},V=t=>{switch(t){case"ERROR":return"#f44336";case"WARNING":return"#b19c00";case"SUCCESS":return"#4caf50";case"NORMAL":return"#003d54";default:return"#003d54"}},J=t=>{switch(t){case"ERROR":return"error";case"WARNING":return"warning";case"SUCCESS":return"success";case"NORMAL":return"primary";default:return"inherit"}},K=I(F)(({theme:t})=>({"& .MuDialogContent-root":{padding:t.spacing(2)},"& .MuDialogActions-root":{padding:t.spacing(1)}})),Mt=t=>{var a,u,s,m,f,g,h,C,v,B,x,R,y,D,M;const c=(a=t.icon)!=null?a:P(t.type),e=V(t.type),i=J(t.type);return n(K,{fullWidth:!0,fullScreen:t.fullScreen,TransitionComponent:H,maxWidth:"sm",scroll:"paper",onClose:t.setHide,"aria-labelledby":"customized-dialog-title",open:t.state,children:[o(k,{setHide:t.setHide,icon:o(c,{style:{color:e}}),children:t.title}),o(T,{dividers:!0,sx:t.bodySx,children:t.body?o(W,{gutterBottom:!0,children:t.body}):t.children}),!t.hideActions&&n($,{children:[t.actionButton?n(N,{children:[o(r,{variant:"outlined",color:"inherit",loadingIndicator:"Cargando...",onClick:(s=(u=t.cancelBotton)==null?void 0:u.actionFunction)!=null?s:t.setHide,loading:(m=t.cancelBotton)==null?void 0:m.isLoading,children:(g=(f=t.cancelBotton)==null?void 0:f.text)!=null?g:"Cerrar"}),o(r,{variant:"outlined",color:i,onClick:(h=t.actionButton)==null?void 0:h.actionFunction,loading:(C=t.actionButton)==null?void 0:C.isLoading,children:(v=t.actionButton)==null?void 0:v.text})]}):o(r,{variant:"outlined",color:i,onClick:(x=(B=t.cancelBotton)==null?void 0:B.actionFunction)!=null?x:t.setHide,loading:(R=t.cancelBotton)==null?void 0:R.isLoading,children:(D=(y=t.cancelBotton)==null?void 0:y.text)!=null?D:"Cerrar"}),t.anotherButton&&o(r,{variant:"outlined",loading:t.anotherButton.isLoading,onClick:t.anotherButton.actionFunction,style:{color:(M=t.anotherButton.color)!=null?M:e},children:t.anotherButton.text})]})]})};export{Mt as default};
