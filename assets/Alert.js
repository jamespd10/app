import{g as $,h as b,a as r,s as i,p as I,v as m,x as h,_ as u,r as O,u as N,l as P,n as W,j as E,o as H}from"./index.js";import{c}from"./createSvgIcon.js";import{C as _}from"./Close.js";import{P as j}from"./Paper.js";import{I as w}from"./IconButton.js";function U(o){return $("MuiAlert",o)}const T=b("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var A=T,V=c(r("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),B=c(r("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Z=c(r("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),q=c(r("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),C;const D=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],F=o=>{const{variant:e,color:a,severity:l,classes:t}=o,d={root:["root",`${e}${I(a||l)}`,`${e}`],icon:["icon"],message:["message"],action:["action"]};return W(d,U,t)},G=i(j,{name:"MuiAlert",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,e[a.variant],e[`${a.variant}${I(a.color||a.severity)}`]]}})(({theme:o,ownerState:e})=>{const a=o.palette.mode==="light"?m:h,l=o.palette.mode==="light"?h:m,t=e.color||e.severity;return u({},o.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},t&&e.variant==="standard"&&{color:a(o.palette[t].light,.6),backgroundColor:l(o.palette[t].light,.9),[`& .${A.icon}`]:{color:o.palette.mode==="dark"?o.palette[t].main:o.palette[t].light}},t&&e.variant==="outlined"&&{color:a(o.palette[t].light,.6),border:`1px solid ${o.palette[t].light}`,[`& .${A.icon}`]:{color:o.palette.mode==="dark"?o.palette[t].main:o.palette[t].light}},t&&e.variant==="filled"&&{color:"#fff",fontWeight:o.typography.fontWeightMedium,backgroundColor:o.palette.mode==="dark"?o.palette[t].dark:o.palette[t].main})}),J=i("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(o,e)=>e.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),K=i("div",{name:"MuiAlert",slot:"Message",overridesResolver:(o,e)=>e.message})({padding:"8px 0"}),M=i("div",{name:"MuiAlert",slot:"Action",overridesResolver:(o,e)=>e.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),x={success:r(V,{fontSize:"inherit"}),warning:r(B,{fontSize:"inherit"}),error:r(Z,{fontSize:"inherit"}),info:r(q,{fontSize:"inherit"})},Q=O.exports.forwardRef(function(e,a){const l=N({props:e,name:"MuiAlert"}),{action:t,children:d,className:y,closeText:g="Close",color:z,icon:f,iconMapping:S=x,onClose:v,role:L="alert",severity:p="success",variant:R="standard"}=l,k=P(l,D),n=u({},l,{color:z,severity:p,variant:R}),s=F(n);return E(G,u({role:L,elevation:0,ownerState:n,className:H(s.root,y),ref:a},k,{children:[f!==!1?r(J,{ownerState:n,className:s.icon,children:f||S[p]||x[p]}):null,r(K,{ownerState:n,className:s.message,children:d}),t!=null?r(M,{className:s.action,children:t}):null,t==null&&v?r(M,{ownerState:n,className:s.action,children:r(w,{size:"small","aria-label":g,title:g,color:"inherit",onClick:v,children:C||(C=r(_,{fontSize:"small"}))})}):null]}))});var ro=Q;export{ro as A};
