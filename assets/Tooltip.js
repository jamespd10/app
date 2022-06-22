import{c as to,g as ro,s as X,_ as r,k as Me,w as Oe,r as n,u as no,f as so,l as po,m as io,q as G,i as I,h as ao,j as Re,a as q}from"./index.js";import{P as Le}from"./Popper.js";import{a as lo,u as co}from"./useControlled.js";import{u as uo}from"./useIsFocusVisible.js";import{a as k}from"./appendOwnerState.js";import{G as Ce}from"./Grow.js";function mo(t){return ro("MuiTooltip",t)}const fo=to("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);var c=fo;const ho=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];function To(t){return Math.round(t*1e5)/1e5}const go=t=>{const{classes:o,disableInteractive:s,arrow:f,touch:P,placement:w}=t,R={popper:["popper",!s&&"popperInteractive",f&&"popperArrow"],tooltip:["tooltip",f&&"tooltipArrow",P&&"touch",`tooltipPlacement${Me(w.split("-")[0])}`],arrow:["arrow"]};return ao(R,mo,o)},bo=X(Le,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[o.popper,!s.disableInteractive&&o.popperInteractive,s.arrow&&o.popperArrow,!s.open&&o.popperClose]}})(({theme:t,ownerState:o,open:s})=>r({zIndex:t.zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!s&&{pointerEvents:"none"},o.arrow&&{[`&[data-popper-placement*="bottom"] .${c.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${c.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${c.arrow}`]:r({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${c.arrow}`]:r({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),xo=X("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[o.tooltip,s.touch&&o.touch,s.arrow&&o.tooltipArrow,o[`tooltipPlacement${Me(s.placement.split("-")[0])}`]]}})(({theme:t,ownerState:o})=>r({backgroundColor:Oe(t.palette.grey[700],.92),borderRadius:t.shape.borderRadius,color:t.palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${To(16/14)}em`,fontWeight:t.typography.fontWeightRegular},{[`.${c.popper}[data-popper-placement*="left"] &`]:r({transformOrigin:"right center"},o.isRtl?r({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):r({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[`.${c.popper}[data-popper-placement*="right"] &`]:r({transformOrigin:"left center"},o.isRtl?r({marginRight:"14px"},o.touch&&{marginRight:"24px"}):r({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[`.${c.popper}[data-popper-placement*="top"] &`]:r({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[`.${c.popper}[data-popper-placement*="bottom"] &`]:r({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})})),yo=X("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,o)=>o.arrow})(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:Oe(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let F=!1,K=null;function N(t,o){return s=>{o&&o(s),t(s)}}const vo=n.exports.forwardRef(function(o,s){var f,P,w,R,Y,J;const A=no({props:o,name:"MuiTooltip"}),{arrow:Q=!1,children:l,components:C={},componentsProps:u={},describeChild:$e=!1,disableFocusListener:Ee=!1,disableHoverListener:Z=!1,disableInteractive:Ie=!1,disableTouchListener:ke=!1,enterDelay:ee=100,enterNextDelay:oe=0,enterTouchDelay:Fe=700,followCursor:_=!1,id:Ne,leaveDelay:te=0,leaveTouchDelay:Ae=1500,onClose:re,onOpen:ne,open:_e,placement:se="bottom",PopperComponent:B,PopperProps:m={},title:h,TransitionComponent:Be=Ce,TransitionProps:De}=A,pe=so(A,ho),D=po(),Se=D.direction==="rtl",[T,ie]=n.exports.useState(),[S,We]=n.exports.useState(null),M=n.exports.useRef(!1),W=Ie||_,O=n.exports.useRef(),L=n.exports.useRef(),d=n.exports.useRef(),ae=n.exports.useRef(),[Ue,le]=lo({controlled:_e,default:!1,name:"Tooltip",state:"open"});let a=Ue;const U=co(Ne),g=n.exports.useRef(),$=n.exports.useCallback(()=>{g.current!==void 0&&(document.body.style.WebkitUserSelect=g.current,g.current=void 0),clearTimeout(ae.current)},[]);n.exports.useEffect(()=>()=>{clearTimeout(O.current),clearTimeout(L.current),clearTimeout(d.current),$()},[$]);const ce=e=>{clearTimeout(K),F=!0,le(!0),ne&&!a&&ne(e)},E=io(e=>{clearTimeout(K),K=setTimeout(()=>{F=!1},800+te),le(!1),re&&a&&re(e),clearTimeout(O.current),O.current=setTimeout(()=>{M.current=!1},D.transitions.duration.shortest)}),z=e=>{M.current&&e.type!=="touchstart"||(T&&T.removeAttribute("title"),clearTimeout(L.current),clearTimeout(d.current),ee||F&&oe?L.current=setTimeout(()=>{ce(e)},F?oe:ee):ce(e))},ue=e=>{clearTimeout(L.current),clearTimeout(d.current),d.current=setTimeout(()=>{E(e)},te)},{isFocusVisibleRef:me,onBlur:ze,onFocus:Ve,ref:je}=uo(),[,de]=n.exports.useState(!1),fe=e=>{ze(e),me.current===!1&&(de(!1),ue(e))},he=e=>{T||ie(e.currentTarget),Ve(e),me.current===!0&&(de(!0),z(e))},Te=e=>{M.current=!0;const p=l.props;p.onTouchStart&&p.onTouchStart(e)},ge=z,be=ue,He=e=>{Te(e),clearTimeout(d.current),clearTimeout(O.current),$(),g.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ae.current=setTimeout(()=>{document.body.style.WebkitUserSelect=g.current,z(e)},Fe)},Ge=e=>{l.props.onTouchEnd&&l.props.onTouchEnd(e),$(),clearTimeout(d.current),d.current=setTimeout(()=>{E(e)},Ae)};n.exports.useEffect(()=>{if(!a)return;function e(p){(p.key==="Escape"||p.key==="Esc")&&E(p)}return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[E,a]);const qe=G(ie,s),Ke=G(je,qe),Xe=G(l.ref,Ke);h===""&&(a=!1);const b=n.exports.useRef({x:0,y:0}),V=n.exports.useRef(),Ye=e=>{const p=l.props;p.onMouseMove&&p.onMouseMove(e),b.current={x:e.clientX,y:e.clientY},V.current&&V.current.update()},x={},j=typeof h=="string";$e?(x.title=!a&&j&&!Z?h:null,x["aria-describedby"]=a?U:null):(x["aria-label"]=j?h:null,x["aria-labelledby"]=a&&!j?U:null);const i=r({},x,pe,l.props,{className:I(pe.className,l.props.className),onTouchStart:Te,ref:Xe},_?{onMouseMove:Ye}:{}),y={};ke||(i.onTouchStart=He,i.onTouchEnd=Ge),Z||(i.onMouseOver=N(ge,i.onMouseOver),i.onMouseLeave=N(be,i.onMouseLeave),W||(y.onMouseOver=ge,y.onMouseLeave=be)),Ee||(i.onFocus=N(he,i.onFocus),i.onBlur=N(fe,i.onBlur),W||(y.onFocus=he,y.onBlur=fe));const Je=n.exports.useMemo(()=>{var e;let p=[{name:"arrow",enabled:Boolean(S),options:{element:S,padding:4}}];return(e=m.popperOptions)!=null&&e.modifiers&&(p=p.concat(m.popperOptions.modifiers)),r({},m.popperOptions,{modifiers:p})},[S,m]),v=r({},A,{isRtl:Se,arrow:Q,disableInteractive:W,placement:se,PopperComponentProp:B,touch:M.current}),H=go(v),xe=(f=C.Popper)!=null?f:bo,ye=(P=(w=C.Transition)!=null?w:Be)!=null?P:Ce,ve=(R=C.Tooltip)!=null?R:xo,Pe=(Y=C.Arrow)!=null?Y:yo,Qe=k(xe,r({},m,u.popper),v),Ze=k(ye,r({},De,u.transition),v),eo=k(ve,r({},u.tooltip),v),oo=k(Pe,r({},u.arrow),v);return Re(n.exports.Fragment,{children:[n.exports.cloneElement(l,i),q(xe,r({as:B!=null?B:Le,placement:se,anchorEl:_?{getBoundingClientRect:()=>({top:b.current.y,left:b.current.x,right:b.current.x,bottom:b.current.y,width:0,height:0})}:T,popperRef:V,open:T?a:!1,id:U,transition:!0},y,Qe,{className:I(H.popper,m==null?void 0:m.className,(J=u.popper)==null?void 0:J.className),popperOptions:Je,children:({TransitionProps:e})=>{var p,we;return q(ye,r({timeout:D.transitions.duration.shorter},e,Ze,{children:Re(ve,r({},eo,{className:I(H.tooltip,(p=u.tooltip)==null?void 0:p.className),children:[h,Q?q(Pe,r({},oo,{className:I(H.arrow,(we=u.arrow)==null?void 0:we.className),ref:We})):null]}))}))}}))]})});var Lo=vo;export{Lo as T,c as t};
