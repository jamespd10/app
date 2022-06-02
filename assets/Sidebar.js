var Ge=Object.defineProperty,Ee=Object.defineProperties;var Ze=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var he=(t,e,o)=>e in t?Ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,M=(t,e)=>{for(var o in e||(e={}))ge.call(e,o)&&he(t,o,e[o]);if(G)for(var o of G(e))be.call(e,o)&&he(t,o,e[o]);return t},E=(t,e)=>Ee(t,Ze(e));var xe=(t,e)=>{var o={};for(var r in t)ge.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&G)for(var r of G(t))e.indexOf(r)<0&&be.call(t,r)&&(o[r]=t[r]);return o};import{D as Xe}from"./SidebarHeader.js";import{r as f,h as K,k as ee,c as q,_ as l,n as X,j as P,e as B,a,l as j,m as u,u as te,N as Me,O as Pe,P as Ye,v as Z,B as Qe,E as Je,Q as Ke,A as ze,F as J,S as et}from"./index.js";import{M as tt}from"./Modal.js";import{P as ot}from"./Paper.js";import{c as b,i as x,r as $}from"./jsx-runtime_commonjs-proxy.js";import{d as rt}from"./PersonAddDisabled.js";import{d as at}from"./InsertDriveFile.js";import{d as nt}from"./AssignmentTurnedIn.js";import{d as it}from"./Help.js";import{d as st}from"./PriceCheck.js";import{d as lt}from"./Paid.js";import{d as ct}from"./Search.js";import{M as dt}from"./Menu.js";import{M as ut}from"./MenuItem.js";import{O as pt}from"./constants.js";import{B as vt}from"./BootstrapTooltip.js";import{L as $e,a as V}from"./List.js";import{l as A,g as ft}from"./listItemButtonClasses.js";import{B as mt}from"./ButtonBase.js";import{L as ht}from"./ListItemIcon.js";import{i as gt}from"./isHostComponent.js";import{a as _e}from"./Tooltip.js";import{L as bt}from"./ListItemText.js";import{d as xt}from"./Assignment.js";import{u as $t}from"./useMediaQuery.js";import{D as F}from"./Divider.js";import"./Backdrop.js";import"./useControlled.js";import"./Portal.js";import"./createSvgIcon.js";import"./useIsFocusVisible.js";import"./react-is.production.min.js";import"./Grow.js";import"./listItemIconClasses.js";import"./listItemTextClasses.js";import"./Typography.js";import"./extendSxProp.js";const _t=t=>{const e=f.exports.useRef({});return f.exports.useEffect(()=>{e.current=t}),e.current};var ye=_t;function Ct(t){const{badgeContent:e,invisible:o=!1,max:r=99,showZero:i=!1}=t,c=ye({badgeContent:e,max:r});let n=o;o===!1&&e===0&&!i&&(n=!0);const{badgeContent:s,max:p=r}=n?c:t,v=s&&Number(s)>p?`${p}+`:s;return{badgeContent:s,invisible:n,max:p,displayValue:v}}function Rt(t){return K("BaseBadge",t)}ee("BaseBadge",["root","badge","invisible"]);const It=["badgeContent","component","children","className","components","componentsProps","invisible","max","showZero"],Ot=t=>{const{invisible:e}=t;return X({root:["root"],badge:["badge",e&&"invisible"]},Rt,void 0)},Mt=f.exports.forwardRef(function(e,o){const{component:r,children:i,className:c,components:n={},componentsProps:s={},max:p=99,showZero:v=!1}=e,z=q(e,It),{badgeContent:y,max:_,displayValue:L,invisible:O}=Ct(l({},e,{max:p})),m=l({},e,{badgeContent:y,invisible:O,max:_,showZero:v}),C=Ot(m),h=r||n.Root||"span",I=_e(h,l({},z,s.root),m),g=n.Badge||"span",N=_e(g,s.badge,m);return P(h,l({},I,{ref:o},z,{className:B(C.root,I.className,c),children:[i,a(g,l({},N,{className:B(C.badge,N.className),children:L}))]}))});var Pt=Mt;const zt=t=>!t||!gt(t);var Ce=zt;function yt(t){return K("MuiBadge",t)}const kt=ee("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]);var D=kt;const Bt=["anchorOrigin","className","component","components","componentsProps","overlap","color","invisible","max","badgeContent","showZero","variant"],Y=10,Q=4,Lt=t=>{const{color:e,anchorOrigin:o,invisible:r,overlap:i,variant:c,classes:n={}}=t,s={root:["root"],badge:["badge",c,r&&"invisible",`anchorOrigin${u(o.vertical)}${u(o.horizontal)}`,`anchorOrigin${u(o.vertical)}${u(o.horizontal)}${u(i)}`,`overlap${u(i)}`,e!=="default"&&`color${u(e)}`]};return X(s,yt,n)},Dt=j("span",{name:"MuiBadge",slot:"Root",overridesResolver:(t,e)=>e.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),jt=j("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.badge,e[o.variant],e[`anchorOrigin${u(o.anchorOrigin.vertical)}${u(o.anchorOrigin.horizontal)}${u(o.overlap)}`],o.color!=="default"&&e[`color${u(o.color)}`],o.invisible&&e.invisible]}})(({theme:t,ownerState:e})=>l({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:Y*2,lineHeight:1,padding:"0 6px",height:Y*2,borderRadius:Y,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen})},e.color!=="default"&&{backgroundColor:(t.vars||t).palette[e.color].main,color:(t.vars||t).palette[e.color].contrastText},e.variant==="dot"&&{borderRadius:Q,height:Q*2,minWidth:Q*2,padding:0},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${D.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${D.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${D.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${D.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${D.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${D.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${D.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${D.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},e.invisible&&{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})})),Nt=f.exports.forwardRef(function(e,o){var r,i,c,n;const s=te({props:e,name:"MuiBadge"}),{anchorOrigin:p={vertical:"top",horizontal:"right"},className:v,component:z="span",components:y={},componentsProps:_={},overlap:L="rectangular",color:O="default",invisible:m=!1,max:C,badgeContent:h,showZero:I=!1,variant:g="standard"}=s,N=q(s,Bt),w=ye({anchorOrigin:p,color:O,overlap:L,variant:g});let H=m;m===!1&&(h===0&&!I||h==null&&g!=="dot")&&(H=!0);const{color:S=O,overlap:U=L,anchorOrigin:k=p,variant:R=g}=H?w:s,W=l({},s,{anchorOrigin:k,invisible:H,color:S,overlap:U,variant:R}),T=Lt(W);let me;return R!=="dot"&&(me=h&&Number(h)>C?`${C}+`:h),a(Pt,l({invisible:m,badgeContent:me,showZero:I,max:C},N,{components:l({Root:Dt,Badge:jt},y),className:B(v,T.root,(r=_.root)==null?void 0:r.className),componentsProps:{root:l({},_.root,Ce(y.Root)&&{as:z,ownerState:l({},(i=_.root)==null?void 0:i.ownerState,{anchorOrigin:k,color:S,overlap:U,variant:R})}),badge:l({},_.badge,{className:B(T.badge,(c=_.badge)==null?void 0:c.className)},Ce(y.Badge)&&{ownerState:l({},(n=_.badge)==null?void 0:n.ownerState,{anchorOrigin:k,color:S,overlap:U,variant:R})})},ref:o}))});var wt=Nt;function Ht(t){return K("MuiDrawer",t)}ee("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const St=["BackdropProps"],Tt=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],ke=(t,e)=>{const{ownerState:o}=t;return[e.root,(o.variant==="permanent"||o.variant==="persistent")&&e.docked,e.modal]},Vt=t=>{const{classes:e,anchor:o,variant:r}=t,i={root:["root"],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${u(o)}`,r!=="temporary"&&`paperAnchorDocked${u(o)}`]};return X(i,Ht,e)},At=j(tt,{name:"MuiDrawer",slot:"Root",overridesResolver:ke})(({theme:t})=>({zIndex:t.zIndex.drawer})),Re=j("div",{shouldForwardProp:Me,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:ke})({flex:"0 0 auto"}),Ft=j(ot,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.paper,e[`paperAnchor${u(o.anchor)}`],o.variant!=="temporary"&&e[`paperAnchorDocked${u(o.anchor)}`]]}})(({theme:t,ownerState:e})=>l({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:t.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},e.anchor==="left"&&{left:0},e.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="right"&&{right:0},e.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="left"&&e.variant!=="temporary"&&{borderRight:`1px solid ${t.palette.divider}`},e.anchor==="top"&&e.variant!=="temporary"&&{borderBottom:`1px solid ${t.palette.divider}`},e.anchor==="right"&&e.variant!=="temporary"&&{borderLeft:`1px solid ${t.palette.divider}`},e.anchor==="bottom"&&e.variant!=="temporary"&&{borderTop:`1px solid ${t.palette.divider}`})),Be={left:"right",right:"left",top:"down",bottom:"up"};function qt(t){return["left","right"].indexOf(t)!==-1}function Ut(t,e){return t.direction==="rtl"&&qt(e)?Be[e]:e}const Wt=f.exports.forwardRef(function(e,o){const r=te({props:e,name:"MuiDrawer"}),i=Pe(),c={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{anchor:n="left",BackdropProps:s,children:p,className:v,elevation:z=16,hideBackdrop:y=!1,ModalProps:{BackdropProps:_}={},onClose:L,open:O=!1,PaperProps:m={},SlideProps:C,TransitionComponent:h=Ye,transitionDuration:I=c,variant:g="temporary"}=r,N=q(r.ModalProps,St),w=q(r,Tt),H=f.exports.useRef(!1);f.exports.useEffect(()=>{H.current=!0},[]);const S=Ut(i,n),k=l({},r,{anchor:n,elevation:z,open:O,variant:g},w),R=Vt(k),W=a(Ft,l({elevation:g==="temporary"?z:0,square:!0},m,{className:B(R.paper,m.className),ownerState:k,children:p}));if(g==="permanent")return a(Re,l({className:B(R.root,R.docked,v),ownerState:k,ref:o},w,{children:W}));const T=a(h,l({in:O,direction:Be[S],timeout:I,appear:H.current},C,{children:W}));return g==="persistent"?a(Re,l({className:B(R.root,R.docked,v),ownerState:k,ref:o},w,{children:T})):a(At,l({BackdropProps:l({},s,_,{transitionDuration:I}),className:B(R.root,R.modal,v),open:O,ownerState:k,onClose:L,hideBackdrop:y,ref:o},w,N,{children:T}))});var Gt=Wt;const Et=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected"],Zt=(t,e)=>{const{ownerState:o}=t;return[e.root,o.dense&&e.dense,o.alignItems==="flex-start"&&e.alignItemsFlexStart,o.divider&&e.divider,!o.disableGutters&&e.gutters]},Xt=t=>{const{alignItems:e,classes:o,dense:r,disabled:i,disableGutters:c,divider:n,selected:s}=t,v=X({root:["root",r&&"dense",!c&&"gutters",n&&"divider",i&&"disabled",e==="flex-start"&&"alignItemsFlexStart",s&&"selected"]},ft,o);return l({},o,v)},Yt=j(mt,{shouldForwardProp:t=>Me(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Zt})(({theme:t,ownerState:e})=>l({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:t.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${A.selected}`]:{backgroundColor:Z(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${A.focusVisible}`]:{backgroundColor:Z(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${A.selected}:hover`]:{backgroundColor:Z(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:Z(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${A.focusVisible}`]:{backgroundColor:t.palette.action.focus},[`&.${A.disabled}`]:{opacity:t.palette.action.disabledOpacity}},e.divider&&{borderBottom:`1px solid ${t.palette.divider}`,backgroundClip:"padding-box"},e.alignItems==="flex-start"&&{alignItems:"flex-start"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.dense&&{paddingTop:4,paddingBottom:4})),Qt=f.exports.forwardRef(function(e,o){const r=te({props:e,name:"MuiListItemButton"}),{alignItems:i="center",autoFocus:c=!1,component:n="div",children:s,dense:p=!1,disableGutters:v=!1,divider:z=!1,focusVisibleClassName:y,selected:_=!1}=r,L=q(r,Et),O=f.exports.useContext($e),m={dense:p||O.dense||!1,alignItems:i,disableGutters:v},C=f.exports.useRef(null);Qe(()=>{c&&C.current&&C.current.focus()},[c]);const h=l({},r,{alignItems:i,dense:m.dense,disableGutters:v,divider:z,selected:_}),I=Xt(h),g=Je(C,o);return a($e.Provider,{value:m,children:a(Yt,l({ref:g,component:n,focusVisibleClassName:B(I.focusVisible,y),ownerState:h},L,{classes:I,children:s}))})});var Jt=Qt;const Le=240,Ie=t=>({width:Le,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),overflowX:"hidden"}),Oe=t=>({transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),overflowX:"hidden",width:t.spacing(7),[t.breakpoints.up("md")]:{width:t.spacing(9)+1}}),Kt=j(Gt,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:e})=>M(M({width:Le,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",zIndex:1},e&&E(M({},Ie(t)),{"& .MuiDrawer-paper":M({backgroundColor:t.palette.primary.main,color:"white","& .MuiListItemButton-root":{"& .MuiListItemIcon-root":{color:"white"},"&:hover":{backgroundColor:"white",color:"black",borderRadius:30,"& .MuiListItemIcon-root":{color:"black"}},borderRadius:30},"& .Mui-selected":{backgroundColor:"white",color:"black","& .MuiListItemIcon-root":{color:"black"}}},Ie(t))})),!e&&E(M({},Oe(t)),{"& .MuiDrawer-paper":M({backgroundColor:t.palette.primary.main,color:"white","& .MuiListItemButton-root":{"& .MuiListItemIcon-root":{color:"white"},"&:hover":{backgroundColor:"white",color:"black","& .MuiListItemIcon-root":{color:"black"}}},"& .Mui-selected":{backgroundColor:"white",color:"black","& .MuiListItemIcon-root":{color:"black"}}},Oe(t))})));var oe={},eo=x.exports;Object.defineProperty(oe,"__esModule",{value:!0});var De=oe.default=void 0,to=eo(b),oo=$,ro=(0,to.default)((0,oo.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");De=oe.default=ro;var re={},ao=x.exports;Object.defineProperty(re,"__esModule",{value:!0});var je=re.default=void 0,no=ao(b),io=$,so=(0,no.default)((0,io.jsx)("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}),"Dashboard");je=re.default=so;var ae={},lo=x.exports;Object.defineProperty(ae,"__esModule",{value:!0});var Ne=ae.default=void 0,co=lo(b),uo=$,po=(0,co.default)((0,uo.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");Ne=ae.default=po;var ne={},vo=x.exports;Object.defineProperty(ne,"__esModule",{value:!0});var we=ne.default=void 0,fo=vo(b),mo=$,ho=(0,fo.default)((0,mo.jsx)("path",{fillRule:"evenodd",d:"M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM10 17H5v-2h5v2zm0-4H5v-2h5v2zm0-4H5V7h5v2zm4.82 6L12 12.16l1.41-1.41 1.41 1.42L17.99 9l1.42 1.42L14.82 15z"}),"FactCheck");we=ne.default=ho;var ie={},go=x.exports;Object.defineProperty(ie,"__esModule",{value:!0});var He=ie.default=void 0,bo=go(b),xo=$,$o=(0,bo.default)((0,xo.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 7h7v2H7V7zm0 3h7v2H7v-2zm3 5H7v-2h3v2zm4.05 3.36-2.83-2.83 1.41-1.41 1.41 1.41L17.59 12 19 13.41l-4.95 4.95z"}),"PlaylistAddCheckCircle");He=ie.default=$o;var se={},_o=x.exports;Object.defineProperty(se,"__esModule",{value:!0});var Se=se.default=void 0,Co=_o(b),Ro=$,Io=(0,Co.default)((0,Ro.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"}),"AssignmentInd");Se=se.default=Io;var le={},Oo=x.exports;Object.defineProperty(le,"__esModule",{value:!0});var Te=le.default=void 0,Mo=Oo(b),Po=$,zo=(0,Mo.default)((0,Po.jsx)("path",{d:"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"}),"Business");Te=le.default=zo;var ce={},yo=x.exports;Object.defineProperty(ce,"__esModule",{value:!0});var Ve=ce.default=void 0,ko=yo(b),Bo=$,Lo=(0,ko.default)((0,Bo.jsx)("path",{fillRule:"evenodd",d:"M13 9.5h5v-2h-5v2zm0 7h5v-2h-5v2zm6 4.5H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zM6 11h5V6H6v5zm1-4h3v3H7V7zM6 18h5v-5H6v5zm1-4h3v3H7v-3z"}),"Ballot");Ve=ce.default=Lo;const Do=({children:t,items:e})=>{const[o,r]=f.exports.useState(null),i=n=>{n.preventDefault(),r(o===null?{mouseX:n.clientX-2,mouseY:n.clientY-4}:null)},c=()=>{r(null)};return P("div",{onContextMenu:i,style:{cursor:"context-menu"},children:[t,a(dt,{open:o!==null,onClose:c,anchorReference:"anchorPosition",anchorPosition:o!==null?{top:o.mouseY,left:o.mouseX}:void 0,children:e.map((n,s)=>a(ut,{onClick:()=>{c(),n.onClick()},children:n.label},`${n.label}${s}`))})]})},jo=f.exports.forwardRef(function(c,i){var n=c,{activeClassName:e,activeStyle:o}=n,r=xe(n,["activeClassName","activeStyle"]);return a(Ke,E(M({ref:i},r),{className:({isActive:s})=>[r.className,s?e:null].filter(Boolean).join(" "),style:({isActive:s})=>M(M({},r.style),s?o:null)}))}),d=({text:t,route:e,icon:o,listOnly:r,notInList:i})=>{const{authState:c}=f.exports.useContext(ze),{tipo:n}=c,s=(p=!1)=>{window.open(`${pt}/app${e}`,"_blank","toolbar=yes,scrollbars=yes,resizable=yes")};return r&&r.length>0&&n&&!r.includes(n)||i&&i.length>0&&n&&i.includes(n)?a(J,{}):a(Do,{items:[{label:"Abrir en nueva ventana",onClick:s}],children:a(vt,{title:`${t}`,placement:"right",children:P(Jt,{activeClassName:"Mui-selected",component:jo,to:e,children:[a(ht,{children:a(wt,{anchorOrigin:{vertical:"top",horizontal:"left"},badgeContent:0,color:"error",children:a(et,{component:o})})}),a(bt,{primary:t})]})})})};var de={},No=x.exports;Object.defineProperty(de,"__esModule",{value:!0});var Ae=de.default=void 0,wo=No(b),Ho=$,So=(0,wo.default)((0,Ho.jsx)("path",{d:"M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"}),"MenuOpen");Ae=de.default=So;var ue={},To=x.exports;Object.defineProperty(ue,"__esModule",{value:!0});var Fe=ue.default=void 0,Vo=To(b),Ao=$,Fo=(0,Vo.default)((0,Ao.jsx)("path",{d:"m17 4 4 4-4 4V9h-4V7h4V4zm-7 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM6 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm1 10h4v-2H7v-3l-4 4 4 4v-3zm7 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"}),"MultipleStop");Fe=ue.default=Fo;var pe={},qo=x.exports;Object.defineProperty(pe,"__esModule",{value:!0});var qe=pe.default=void 0,Uo=qo(b),Wo=$,Go=(0,Uo.default)((0,Wo.jsx)("path",{d:"M9.41 15.59 8 17l-4-4 4-4 1.41 1.41L7.83 12c1.51-.33 3.73.08 5.17 1.36V6.83l-1.59 1.59L10 7l4-4 4 4-1.41 1.41L15 6.83V21h-2v-4c-.73-2.58-3.07-3.47-5.17-3l1.58 1.59z"}),"ForkLeft");qe=pe.default=Go;var ve={},Eo=x.exports;Object.defineProperty(ve,"__esModule",{value:!0});var Ue=ve.default=void 0,Zo=Eo(b),Xo=$,Yo=(0,Zo.default)((0,Xo.jsx)("path",{d:"M14.59 15.59 16 17l4-4-4-4-1.41 1.41L16.17 12c-1.51-.33-3.73.08-5.17 1.36V6.83l1.59 1.59L14 7l-4-4-4 4 1.41 1.41L9 6.83V21h2v-4c.73-2.58 3.07-3.47 5.17-3l-1.58 1.59z"}),"ForkRight");Ue=ve.default=Yo;var fe={},Qo=x.exports;Object.defineProperty(fe,"__esModule",{value:!0});var We=fe.default=void 0,Jo=Qo(b),Ko=$,er=(0,Jo.default)((0,Ko.jsx)("path",{d:"m9.78 11.16-1.42 1.42c-.68-.69-1.34-1.58-1.79-2.94l1.94-.49c.32.89.77 1.5 1.27 2.01zM11 6 7 2 3 6h3.02c.02.81.08 1.54.19 2.17l1.94-.49C8.08 7.2 8.03 6.63 8.02 6H11zm10 0-4-4-4 4h2.99c-.1 3.68-1.28 4.75-2.54 5.88-.5.44-1.01.92-1.45 1.55-.34-.49-.73-.88-1.13-1.24L9.46 13.6c.93.85 1.54 1.54 1.54 3.4v5h2v-5c0-2.02.71-2.66 1.79-3.63 1.38-1.24 3.08-2.78 3.2-7.37H21z"}),"AltRoute");We=fe.default=er;const Tr=()=>{const{authState:t}=f.exports.useContext(ze),{isLoggedIn:e,tipo:o}=t,r=Pe(),i=$t(r.breakpoints.up("md"));return e?P(Kt,{variant:"permanent",open:i,children:[a(Xe,{}),a(F,{}),P(V,{children:[a(d,{text:"Home",route:"/",icon:De,notInList:["Consulta-NIT"]}),a(d,{text:"Dashboard",route:"/dashboard",icon:je,listOnly:["Super"]}),a(d,{text:"Consulta NIT",route:"/nit",icon:ct}),a(d,{text:"Clientes",route:"/clientes",icon:Se,notInList:["Consulta-NIT"]}),a(d,{text:"Negocios",route:"/negocios",icon:Te,notInList:["Consulta-NIT"]}),a(d,{text:"Contratos",route:"/contratos",icon:at,notInList:["Consulta-NIT"]})]}),o!=="Consulta-NIT"&&a(F,{style:{background:"white"}}),P(V,{children:[a(d,{text:"Liquidaciones",route:"/liquidaciones",icon:rt,notInList:["Consulta-NIT"]}),a(d,{text:"F 430 ITBMS",route:"/itbms",icon:lt,notInList:["Consulta-NIT"]}),a(d,{text:"Planillas",route:"/planillas",icon:nt,notInList:["Consulta-NIT"]}),a(d,{text:"Formulario 03",route:"/formulario03",icon:xt,notInList:["Consulta-NIT"]}),a(d,{text:"Decl Municipio",route:"/declaraciones-municipales",icon:st,notInList:["Consulta-NIT"]})]}),o==="Super"&&P(J,{children:[a(F,{style:{background:"white"}}),P(V,{children:[a(d,{text:"Factura D. Renta",route:"/fact-alterna/renta",icon:we,listOnly:["Super"]}),a(d,{text:"Factura D. Municipio",route:"/fact-alterna/municipio",icon:He,listOnly:["Super"]}),a(d,{text:"Facturas de Todas",route:"/fact-alterna/todas",icon:Ve,listOnly:["Super"]}),a(d,{text:"Proformas",route:"/proformas",icon:Ae,listOnly:["Super"]})]}),a(F,{style:{background:"white"}}),P(V,{children:[a(d,{text:"Ruta Renta",route:"/ruta-alterna/renta",icon:Ue,listOnly:["Super"]}),a(d,{text:"Ruta Municipio",route:"/ruta-alterna/municipio",icon:qe,listOnly:["Super"]}),a(d,{text:"Ruta Todas",route:"/ruta-alterna/todas",icon:Fe,listOnly:["Super"]}),a(d,{text:"Ruta Proformas",route:"/ruta-proformas",icon:We,listOnly:["Super"]})]})]}),o!=="Consulta-NIT"&&a(F,{style:{background:"white"}}),P(V,{children:[a(d,{text:"Cuenta",route:"/account",icon:Ne,notInList:["Consulta-NIT"]}),a(d,{text:"Ayuda",route:"/ayuda",icon:it})]})]}):a(J,{})};export{Tr as default};
