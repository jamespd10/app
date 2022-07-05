import{g as C,h as R,s as F,p as l,_ as i,r as _,u as k,l as y,n as $,a as w,o as h}from"./index.js";import{B as I}from"./ButtonBase.js";import{c as M,i as V,r as H}from"./jsx-runtime_commonjs-proxy.js";function N(o){return C("MuiFab",o)}const j=R("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]);var g=j;const W=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],B=o=>{const{color:a,variant:s,classes:e,size:r}=o,t={root:["root",s,`size${l(r)}`,a==="inherit"?"colorInherit":a]};return $(t,N,e)},U=F(I,{name:"MuiFab",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:s}=o;return[a.root,a[s.variant],a[`size${l(s.size)}`],s.color==="inherit"&&a.colorInherit,a[l(s.size)],a[s.color]]}})(({theme:o,ownerState:a})=>i({},o.typography.button,{minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:o.zIndex.fab,boxShadow:o.shadows[6],"&:active":{boxShadow:o.shadows[12]},color:o.palette.getContrastText(o.palette.grey[300]),backgroundColor:o.palette.grey[300],"&:hover":{backgroundColor:o.palette.grey.A100,"@media (hover: none)":{backgroundColor:o.palette.grey[300]},textDecoration:"none"},[`&.${g.focusVisible}`]:{boxShadow:o.shadows[6]},[`&.${g.disabled}`]:{color:o.palette.action.disabled,boxShadow:o.shadows[0],backgroundColor:o.palette.action.disabledBackground}},a.size==="small"&&{width:40,height:40},a.size==="medium"&&{width:48,height:48},a.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},a.variant==="extended"&&a.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},a.variant==="extended"&&a.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},a.color==="inherit"&&{color:"inherit"}),({theme:o,ownerState:a})=>i({},a.color!=="inherit"&&a.color!=="default"&&o.palette[a.color]!=null&&{color:o.palette[a.color].contrastText,backgroundColor:o.palette[a.color].main,"&:hover":{backgroundColor:o.palette[a.color].dark,"@media (hover: none)":{backgroundColor:o.palette[a.color].main}}})),q=_.exports.forwardRef(function(a,s){const e=k({props:a,name:"MuiFab"}),{children:r,className:t,color:f="default",component:d="button",disabled:c=!1,disableFocusRipple:u=!1,focusVisibleClassName:m,size:v="large",variant:x="circular"}=e,z=y(e,W),p=i({},e,{color:f,component:d,disabled:c,disableFocusRipple:u,size:v,variant:x}),b=B(p);return w(U,i({className:h(b.root,t),component:d,disabled:c,focusRipple:!u,focusVisibleClassName:h(b.focusVisible,m),ownerState:p,ref:s},z,{children:r}))});var J=q,n={},A=V.exports;Object.defineProperty(n,"__esModule",{value:!0});var D=n.default=void 0,P=A(M),T=H,L=(0,P.default)((0,T.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm1 14H8c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1zm3-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"}),"AssignmentRounded");D=n.default=L;export{J as F,D as d};
