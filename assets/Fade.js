import{r as c,q as B,l as D,y,a as W,_ as l,z as $,B as G,D as g}from"./index.js";const H=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],J={entering:{opacity:1},entered:{opacity:1}},K=c.exports.forwardRef(function(E,m){const t=B(),T={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:p,appear:R=!0,children:s,easing:f,in:x,onEnter:u,onEntered:L,onEntering:F,onExit:h,onExited:P,onExiting:w,style:a,timeout:d=T,TransitionComponent:_=$}=E,v=D(E,H),r=c.exports.useRef(null),C=y(s.ref,m),b=y(r,C),i=n=>e=>{if(n){const o=r.current;e===void 0?n(o):n(o,e)}},j=i(F),k=i((n,e)=>{G(n);const o=g({style:a,timeout:d,easing:f},{mode:"enter"});n.style.webkitTransition=t.transitions.create("opacity",o),n.style.transition=t.transitions.create("opacity",o),u&&u(n,e)}),z=i(L),S=i(w),q=i(n=>{const e=g({style:a,timeout:d,easing:f},{mode:"exit"});n.style.webkitTransition=t.transitions.create("opacity",e),n.style.transition=t.transitions.create("opacity",e),h&&h(n)}),A=i(P);return W(_,l({appear:R,in:x,nodeRef:r,onEnter:k,onEntered:z,onEntering:j,onExit:q,onExited:A,onExiting:S,addEndListener:n=>{p&&p(r.current,n)},timeout:d},v,{children:(n,e)=>c.exports.cloneElement(s,l({style:l({opacity:0,visibility:n==="exited"&&!x?"hidden":void 0},J[n],a,s.props.style),ref:b},e))}))});var Q=K;export{Q as F};