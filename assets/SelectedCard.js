import{g as p,h as A,s as r,r as g,u as C,l as f,n as m,j as y,_ as b,a as v,o as n}from"./index.js";import{B as H}from"./ButtonBase.js";function w(o){return p("MuiCardActionArea",o)}const x=A("MuiCardActionArea",["root","focusVisible","focusHighlight"]);var a=x;const M=["children","className","focusVisibleClassName"],N=o=>{const{classes:s}=o;return m({root:["root"],focusHighlight:["focusHighlight"]},w,s)},R=r(H,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>({display:"block",textAlign:"inherit",width:"100%",[`&:hover .${a.focusHighlight}`]:{opacity:o.palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${a.focusVisible} .${a.focusHighlight}`]:{opacity:o.palette.action.focusOpacity}})),V=r("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(o,s)=>s.focusHighlight})(({theme:o})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:o.transitions.create("opacity",{duration:o.transitions.duration.short})})),S=g.exports.forwardRef(function(s,c){const t=C({props:s,name:"MuiCardActionArea"}),{children:l,className:u,focusVisibleClassName:d}=t,h=f(t,M),e=t,i=N(e);return y(R,b({className:n(i.root,u),focusVisibleClassName:n(d,i.focusVisible),ref:c,ownerState:e},h,{children:[l,v(V,{className:i.focusHighlight,ownerState:e})]}))});var j=S;const $=r(j)(({theme:o})=>({"&:hover":{backgroundColor:o.palette.primary.main,color:"white","& .MuiListItemIcon-root":{color:"white"}}}));export{$ as S};
