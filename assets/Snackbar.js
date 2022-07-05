import{g as $,h as j,s as x,k as ae,_ as r,r as l,u as U,l as E,n as _,j as ie,a as p,o as H,p as k,q as ce,t as N,C as le}from"./index.js";import{P as ue}from"./Paper.js";import{G as de}from"./Grow.js";function pe(n){return $("MuiSnackbarContent",n)}j("MuiSnackbarContent",["root","message","action"]);const fe=["action","className","message","role"],he=n=>{const{classes:e}=n;return _({root:["root"],action:["action"],message:["message"]},pe,e)},ge=x(ue,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(n,e)=>e.root})(({theme:n})=>{const e=n.palette.mode==="light"?.8:.98,o=ae(n.palette.background.default,e);return r({},n.typography.body2,{color:n.palette.getContrastText(o),backgroundColor:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:n.shape.borderRadius,flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),me=x("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(n,e)=>e.message})({padding:"8px 0"}),Ce=x("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(n,e)=>e.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),be=l.exports.forwardRef(function(e,o){const s=U({props:e,name:"MuiSnackbarContent"}),{action:u,className:v,message:y,role:g="alert"}=s,R=E(s,fe),a=s,f=he(a);return ie(ge,r({role:g,square:!0,elevation:6,className:H(f.root,v),ownerState:a,ref:o},R,{children:[p(me,{className:f.message,ownerState:a,children:y}),u?p(Ce,{className:f.action,ownerState:a,children:u}):null]}))});var ke=be;function xe(n){return $("MuiSnackbar",n)}j("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const ve=["onEnter","onExited"],ye=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],Re=n=>{const{classes:e,anchorOrigin:o}=n,s={root:["root",`anchorOrigin${k(o.vertical)}${k(o.horizontal)}`]};return _(s,xe,e)},we=x("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:o}=n;return[e.root,e[`anchorOrigin${k(o.anchorOrigin.vertical)}${k(o.anchorOrigin.horizontal)}`]]}})(({theme:n,ownerState:e})=>{const o=r({},!e.isRtl&&{left:"50%",right:"auto",transform:"translateX(-50%)"},e.isRtl&&{right:"50%",left:"auto",transform:"translateX(50%)"});return r({zIndex:n.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},e.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},e.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},e.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[n.breakpoints.up("sm")]:r({},e.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},e.anchorOrigin.horizontal==="center"&&o,e.anchorOrigin.horizontal==="left"&&r({},!e.isRtl&&{left:24,right:"auto"},e.isRtl&&{right:24,left:"auto"}),e.anchorOrigin.horizontal==="right"&&r({},!e.isRtl&&{right:24,left:"auto"},e.isRtl&&{left:24,right:"auto"}))})}),Ee=l.exports.forwardRef(function(e,o){const s=U({props:e,name:"MuiSnackbar"}),u=ce(),v={enter:u.transitions.duration.enteringScreen,exit:u.transitions.duration.leavingScreen},{action:y,anchorOrigin:{vertical:g,horizontal:R}={vertical:"bottom",horizontal:"left"},autoHideDuration:a=null,children:f,className:I,ClickAwayListenerProps:W,ContentProps:F,disableWindowBlurListener:O=!1,message:G,onBlur:S,onClose:i,onFocus:L,onMouseEnter:M,onMouseLeave:T,open:c,resumeHideDuration:w,TransitionComponent:q=de,transitionDuration:K=v,TransitionProps:{onEnter:z,onExited:P}={}}=s,X=E(s.TransitionProps,ve),J=E(s,ye),Q=u.direction==="rtl",A=r({},s,{anchorOrigin:{vertical:g,horizontal:R},isRtl:Q}),V=Re(A),m=l.exports.useRef(),[B,D]=l.exports.useState(!0),Y=N((...t)=>{i&&i(...t)}),C=N(t=>{!i||t==null||(clearTimeout(m.current),m.current=setTimeout(()=>{Y(null,"timeout")},t))});l.exports.useEffect(()=>(c&&C(a),()=>{clearTimeout(m.current)}),[c,a,C]);const b=()=>{clearTimeout(m.current)},h=l.exports.useCallback(()=>{a!=null&&C(w!=null?w:a*.5)},[a,w,C]),Z=t=>{L&&L(t),b()},ee=t=>{M&&M(t),b()},ne=t=>{S&&S(t),h()},te=t=>{T&&T(t),h()},oe=t=>{i&&i(t,"clickaway")},re=t=>{D(!0),P&&P(t)},se=(t,d)=>{D(!1),z&&z(t,d)};return l.exports.useEffect(()=>{if(!O&&c)return window.addEventListener("focus",h),window.addEventListener("blur",b),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",b)}},[O,h,c]),l.exports.useEffect(()=>{if(!c)return;function t(d){d.defaultPrevented||(d.key==="Escape"||d.key==="Esc")&&i&&i(d,"escapeKeyDown")}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[B,c,i]),!c&&B?null:p(le,r({onClickAway:oe},W,{children:p(we,r({className:H(V.root,I),onBlur:ne,onFocus:Z,onMouseEnter:ee,onMouseLeave:te,ownerState:A,ref:o,role:"presentation"},J,{children:p(q,r({appear:!0,in:c,timeout:K,direction:g==="top"?"down":"up",onEnter:se,onExited:re},X,{children:f||p(ke,r({message:G,action:y},F))}))}))}))});var Me=Ee;export{Me as S};
