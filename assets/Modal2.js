var uo=Object.defineProperty;var H=Object.getOwnPropertySymbols;var go=Object.prototype.hasOwnProperty,po=Object.prototype.propertyIsEnumerable;var q=(o,t,n)=>t in o?uo(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,Y=(o,t)=>{for(var n in t||(t={}))go.call(t,n)&&q(o,n,t[n]);if(H)for(var n of H(t))po.call(t,n)&&q(o,n,t[n]);return o};import{d as fo}from"./Close2.js";import{h as R,k as W,r as u,l as f,m as p,_ as r,u as L,O as ho,c as S,n as k,a as i,e as I,j as D,P as mo,a3 as vo,F as xo}from"./index.js";import{T as K}from"./Typography.js";import{I as bo}from"./IconButton.js";import{c as X,i as V,r as J}from"./jsx-runtime_commonjs-proxy.js";import{d as Co,a as Do}from"./Error.js";import{B as $o,F as yo}from"./Backdrop.js";import{M as Io}from"./Modal.js";import{P as Q}from"./Paper.js";import{u as Z}from"./useControlled.js";import{B as Bo}from"./Button.js";function Mo(o){return R("MuiDialog",o)}const Po=W("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var F=Po;const Ro=u.exports.createContext({});var oo=Ro;const Wo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],Lo=f($o,{name:"MuiDialog",slot:"Backdrop",overrides:(o,t)=>t.backdrop})({zIndex:-1}),So=o=>{const{classes:t,scroll:n,maxWidth:a,fullWidth:e,fullScreen:l}=o,d={root:["root"],container:["container",`scroll${p(n)}`],paper:["paper",`paperScroll${p(n)}`,`paperWidth${p(String(a))}`,e&&"paperFullWidth",l&&"paperFullScreen"]};return k(d,Mo,t)},ko=f(Io,{name:"MuiDialog",slot:"Root",overridesResolver:(o,t)=>t.root})({"@media print":{position:"absolute !important"}}),To=f("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.container,t[`scroll${p(n.scroll)}`]]}})(({ownerState:o})=>r({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),_o=f(Q,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.paper,t[`scrollPaper${p(n.scroll)}`],t[`paperWidth${p(String(n.maxWidth))}`],n.fullWidth&&t.paperFullWidth,n.fullScreen&&t.paperFullScreen]}})(({theme:o,ownerState:t})=>r({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},t.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},t.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},t.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`${o.breakpoints.values.xs}${o.breakpoints.unit}`,[`&.${F.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[t.maxWidth]}${o.breakpoints.unit}`,[`&.${F.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[t.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${F.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),No=u.exports.forwardRef(function(t,n){const a=L({props:t,name:"MuiDialog"}),e=ho(),l={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{"aria-describedby":d,"aria-labelledby":s,BackdropComponent:c,BackdropProps:m,children:C,className:$,disableEscapeKeyDown:v=!1,fullScreen:x=!1,fullWidth:g=!1,maxWidth:b="sm",onBackdropClick:B,onClose:y,open:M,PaperComponent:no=Q,PaperProps:z={},scroll:ao="paper",TransitionComponent:io=yo,transitionDuration:O=l,TransitionProps:eo}=a,ro=S(a,Wo),T=r({},a,{disableEscapeKeyDown:v,fullScreen:x,fullWidth:g,maxWidth:b,scroll:ao}),N=So(T),w=u.exports.useRef(),so=P=>{w.current=P.target===P.currentTarget},lo=P=>{!w.current||(w.current=null,B&&B(P),y&&y(P,"backdropClick"))},A=Z(s),co=u.exports.useMemo(()=>({titleId:A}),[A]);return i(ko,r({className:I(N.root,$),BackdropProps:r({transitionDuration:O,as:c},m),closeAfterTransition:!0,BackdropComponent:Lo,disableEscapeKeyDown:v,onClose:y,open:M,ref:n,onClick:lo,ownerState:T},ro,{children:i(io,r({appear:!0,in:M,timeout:O,role:"presentation"},eo,{children:i(To,{className:I(N.container),onMouseDown:so,ownerState:T,children:i(_o,r({as:no,elevation:24,role:"dialog","aria-describedby":d,"aria-labelledby":A},z,{className:I(N.paper,z.className),ownerState:T,children:i(oo.Provider,{value:co,children:C})}))})}))}))});var wo=No;function Ao(o){return R("MuiDialogActions",o)}W("MuiDialogActions",["root","spacing"]);const Fo=["className","disableSpacing"],Eo=o=>{const{classes:t,disableSpacing:n}=o;return k({root:["root",!n&&"spacing"]},Ao,t)},Uo=f("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.root,!n.disableSpacing&&t.spacing]}})(({ownerState:o})=>r({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),jo=u.exports.forwardRef(function(t,n){const a=L({props:t,name:"MuiDialogActions"}),{className:e,disableSpacing:l=!1}=a,d=S(a,Fo),s=r({},a,{disableSpacing:l}),c=Eo(s);return i(Uo,r({className:I(c.root,e),ownerState:s,ref:n},d))});var zo=jo;function Oo(o){return R("MuiDialogContent",o)}W("MuiDialogContent",["root","dividers"]);function Ho(o){return R("MuiDialogTitle",o)}const qo=W("MuiDialogTitle",["root"]);var Yo=qo;const Go=["className","dividers"],Ko=o=>{const{classes:t,dividers:n}=o;return k({root:["root",n&&"dividers"]},Oo,t)},Xo=f("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.root,n.dividers&&t.dividers]}})(({theme:o,ownerState:t})=>r({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${o.palette.divider}`,borderBottom:`1px solid ${o.palette.divider}`}:{[`.${Yo.root} + &`]:{paddingTop:0}})),Vo=u.exports.forwardRef(function(t,n){const a=L({props:t,name:"MuiDialogContent"}),{className:e,dividers:l=!1}=a,d=S(a,Go),s=r({},a,{dividers:l}),c=Ko(s);return i(Xo,r({className:I(c.root,e),ownerState:s,ref:n},d))});var Jo=Vo;const Qo=["className","id"],Zo=o=>{const{classes:t}=o;return k({root:["root"]},Ho,t)},ot=f(K,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),tt=u.exports.forwardRef(function(t,n){const a=L({props:t,name:"MuiDialogTitle"}),{className:e,id:l}=a,d=S(a,Qo),s=a,c=Zo(s),{titleId:m=l}=u.exports.useContext(oo);return i(ot,r({component:"h2",className:I(c.root,e),ownerState:s,ref:n,variant:"h6",id:m},d))});var nt=tt;const at=o=>{const{children:t,setHide:n,icon:a}=o;return D(nt,{sx:{m:0,p:2},children:[D("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"nowrap"},children:[a,t]}),n&&i(bo,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:e=>e.palette.grey[500]},children:i(fo,{})})]})};var U={},it=V.exports;Object.defineProperty(U,"__esModule",{value:!0});var to=U.default=void 0,et=it(X),rt=J,st=(0,et.default)((0,rt.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");to=U.default=st;var j={},lt=V.exports;Object.defineProperty(j,"__esModule",{value:!0});var E=j.default=void 0,dt=lt(X),ct=J,ut=(0,dt.default)((0,ct.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications");E=j.default=ut;const gt=o=>{switch(o){case"ERROR":return Do;case"WARNING":return to;case"SUCCESS":return Co;case"NORMAL":return E;default:return E}},pt=o=>{switch(o){case"ERROR":return"#f44336";case"WARNING":return"#b19c00";case"SUCCESS":return"#4caf50";case"NORMAL":return"#003d54";default:return"#003d54"}},ft=o=>{switch(o){case"ERROR":return"error";case"WARNING":return"warning";case"SUCCESS":return"success";case"NORMAL":return"primary";default:return"inherit"}},ht=u.exports.forwardRef(function(t,n){return i(mo,Y({direction:"up",ref:n},t))});function mt(o){return R("MuiLoadingButton",o)}const vt=W("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var h=vt;const xt=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],bt=o=>{const{loading:t,loadingPosition:n,classes:a}=o,e={root:["root",t&&"loading"],startIcon:[t&&`startIconLoading${p(n)}`],endIcon:[t&&`endIconLoading${p(n)}`],loadingIndicator:["loadingIndicator",t&&`loadingIndicator${p(n)}`]},l=k(e,mt,a);return r({},a,l)},Ct=o=>o!=="ownerState"&&o!=="theme"&&o!=="sx"&&o!=="as"&&o!=="classes",Dt=f(Bo,{shouldForwardProp:o=>Ct(o)||o==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(o,t)=>[t.root,t.startIconLoadingStart&&{[`& .${h.startIconLoadingStart}`]:t.startIconLoadingStart},t.endIconLoadingEnd&&{[`& .${h.endIconLoadingEnd}`]:t.endIconLoadingEnd}]})(({ownerState:o,theme:t})=>r({[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},o.loadingPosition==="center"&&{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${h.loading}`]:{color:"transparent"}},o.loadingPosition==="start"&&o.fullWidth&&{[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}},o.loadingPosition==="end"&&o.fullWidth&&{[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}})),G=f("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.loadingIndicator,t[`loadingIndicator${p(n.loadingPosition)}`]]}})(({theme:o,ownerState:t})=>r({position:"absolute",visibility:"visible",display:"flex"},t.loadingPosition==="start"&&(t.variant==="outlined"||t.variant==="contained")&&{left:t.size==="small"?10:14},t.loadingPosition==="start"&&t.variant==="text"&&{left:6},t.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:o.palette.action.disabled},t.loadingPosition==="end"&&(t.variant==="outlined"||t.variant==="contained")&&{right:t.size==="small"?10:14},t.loadingPosition==="end"&&t.variant==="text"&&{right:6},t.loadingPosition==="start"&&t.fullWidth&&{position:"relative",left:-10},t.loadingPosition==="end"&&t.fullWidth&&{position:"relative",right:-10})),$t=u.exports.forwardRef(function(t,n){const a=L({props:t,name:"MuiLoadingButton"}),{children:e,disabled:l=!1,id:d,loading:s=!1,loadingIndicator:c,loadingPosition:m="center",variant:C="text"}=a,$=S(a,xt),v=Z(d),x=c!=null?c:i(vo,{"aria-labelledby":v,color:"inherit",size:16}),g=r({},a,{disabled:l,loading:s,loadingIndicator:x,loadingPosition:m,variant:C}),b=bt(g);return i(Dt,r({disabled:l||s,id:v,ref:n},$,{variant:C,classes:b,ownerState:g,children:g.loadingPosition==="end"?D(u.exports.Fragment,{children:[e,s&&i(G,{className:b.loadingIndicator,ownerState:g,children:x})]}):D(u.exports.Fragment,{children:[s&&i(G,{className:b.loadingIndicator,ownerState:g,children:x}),e]})}))});var _=$t;const yt=f(wo)(({theme:o})=>({"& .MuDialogContent-root":{padding:o.spacing(2)},"& .MuDialogActions-root":{padding:o.spacing(1)}})),It=o=>{var e,l,d,s,c,m,C,$,v,x,g,b,B,y,M;const t=(e=o.icon)!=null?e:gt(o.type),n=pt(o.type),a=ft(o.type);return D(yt,{fullWidth:!0,fullScreen:o.fullScreen,TransitionComponent:ht,maxWidth:"sm",scroll:"paper",onClose:o.setHide,"aria-labelledby":"customized-dialog-title",open:o.state,children:[i(at,{setHide:o.setHide,icon:i(t,{style:{color:n}}),children:o.title}),i(Jo,{dividers:!0,sx:o.bodySx,children:o.body?i(K,{gutterBottom:!0,children:o.body}):o.children}),!o.hideActions&&D(zo,{children:[o.actionButton?D(xo,{children:[i(_,{variant:"outlined",color:"inherit",loadingIndicator:"Cargando...",onClick:(d=(l=o.cancelBotton)==null?void 0:l.actionFunction)!=null?d:o.setHide,loading:(s=o.cancelBotton)==null?void 0:s.isLoading,children:(m=(c=o.cancelBotton)==null?void 0:c.text)!=null?m:"Cerrar"}),i(_,{variant:"outlined",color:a,onClick:(C=o.actionButton)==null?void 0:C.actionFunction,loading:($=o.actionButton)==null?void 0:$.isLoading,children:(v=o.actionButton)==null?void 0:v.text})]}):i(_,{variant:"outlined",color:a,onClick:(g=(x=o.cancelBotton)==null?void 0:x.actionFunction)!=null?g:o.setHide,loading:(b=o.cancelBotton)==null?void 0:b.isLoading,children:(y=(B=o.cancelBotton)==null?void 0:B.text)!=null?y:"Cerrar"}),o.anotherButton&&i(_,{variant:"outlined",loading:o.anotherButton.isLoading,onClick:o.anotherButton.actionFunction,style:{color:(M=o.anotherButton.color)!=null?M:n},children:o.anotherButton.text})]})]})};var At=Object.freeze(Object.defineProperty({__proto__:null,default:It},Symbol.toStringTag,{value:"Module"}));export{wo as D,_ as L,It as M,Jo as a,zo as b,nt as c,F as d,At as e};
