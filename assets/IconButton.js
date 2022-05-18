import{k as z,h as R,l as v,m as t,_ as r,y as u,r as B,u as h,c as y,n as C,a as x,e as I}from"./index.js";import{B as $}from"./ButtonBase.js";function k(e){return R("MuiIconButton",e)}const M=z("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var T=M;const U=["edge","children","className","color","disabled","disableFocusRipple","size"],_=e=>{const{classes:o,disabled:s,color:a,edge:i,size:l}=e,n={root:["root",s&&"disabled",a!=="default"&&`color${t(a)}`,i&&`edge${t(i)}`,`size${t(l)}`]};return C(n,k,o)},L=v($,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.color!=="default"&&o[`color${t(s.color)}`],s.edge&&o[`edge${t(s.edge)}`],o[`size${t(s.size)}`]]}})(({theme:e,ownerState:o})=>r({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:u(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.edge==="start"&&{marginLeft:o.size==="small"?-3:-12},o.edge==="end"&&{marginRight:o.size==="small"?-3:-12}),({theme:e,ownerState:o})=>r({},o.color==="inherit"&&{color:"inherit"},o.color!=="inherit"&&o.color!=="default"&&r({color:e.palette[o.color].main},!o.disableRipple&&{"&:hover":{backgroundColor:u(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),o.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},o.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${T.disabled}`]:{backgroundColor:"transparent",color:e.palette.action.disabled}})),N=B.exports.forwardRef(function(o,s){const a=h({props:o,name:"MuiIconButton"}),{edge:i=!1,children:l,className:n,color:g="default",disabled:c=!1,disableFocusRipple:d=!1,size:b="medium"}=a,f=y(a,U),p=r({},a,{edge:i,color:g,disabled:c,disableFocusRipple:d,size:b}),m=_(p);return x(L,r({className:I(m.root,n),centerRipple:!0,focusRipple:!d,disabled:c,ref:s,ownerState:p},f,{children:l}))});var F=N;export{F as I,T as i};
