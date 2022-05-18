import{k as V,h as L,l as P,z as T,_ as i,y as l,r as u,u as w,c as F,x as G,K as S,a as C,e as U,n as _}from"./index.js";import{L as v}from"./List.js";import{B as j}from"./ButtonBase.js";import{l as y}from"./listItemIconClasses.js";import{d as I}from"./Divider.js";import{l as M}from"./listItemTextClasses.js";function z(e){return L("MuiMenuItem",e)}const H=V("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var a=H;const N=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],D=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},E=e=>{const{disabled:t,dense:s,divider:o,disableGutters:n,selected:c,classes:r}=e,d=_({root:["root",s&&"dense",t&&"disabled",!n&&"gutters",o&&"divider",c&&"selected"]},z,r);return i({},r,d)},W=P(j,{shouldForwardProp:e=>T(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:D})(({theme:e,ownerState:t})=>i({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${e.palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${a.selected}`]:{backgroundColor:l(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${a.focusVisible}`]:{backgroundColor:l(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${a.selected}:hover`]:{backgroundColor:l(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:l(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${a.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${a.disabled}`]:{opacity:e.palette.action.disabledOpacity},[`& + .${I.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${I.inset}`]:{marginLeft:52},[`& .${M.root}`]:{marginTop:0,marginBottom:0},[`& .${M.inset}`]:{paddingLeft:36},[`& .${y.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&i({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${y.root} svg`]:{fontSize:"1.25rem"}}))),K=u.exports.forwardRef(function(t,s){const o=w({props:t,name:"MuiMenuItem"}),{autoFocus:n=!1,component:c="li",dense:r=!1,divider:m=!1,disableGutters:d=!1,focusVisibleClassName:$,role:k="menuitem",tabIndex:f}=o,R=F(o,N),B=u.exports.useContext(v),b={dense:r||B.dense||!1,disableGutters:d},p=u.exports.useRef(null);G(()=>{n&&p.current&&p.current.focus()},[n]);const h=i({},o,{dense:b.dense,divider:m,disableGutters:d}),g=E(o),O=S(p,s);let x;return o.disabled||(x=f!==void 0?f:-1),C(v.Provider,{value:b,children:C(W,i({ref:O,role:k,tabIndex:x,component:c,focusVisibleClassName:U(g.focusVisible,$)},R,{ownerState:h,classes:g}))})});var Z=K;export{Z as M};