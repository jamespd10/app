import{r as a,O as _e,_ as X,c as te,P as W,T as ce,e as C,a as U,k as me,Q as ne,l as oe,u as be,h as ze,K as Z,J as H,j as Oe,n as je}from"./index.js";import{u as Ke}from"./useIsFocusVisible.js";function Xe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e,s){var i=function(t){return s&&a.exports.isValidElement(t)?s(t):t},l=Object.create(null);return e&&a.exports.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=i(n)}),l}function Ye(e,s){e=e||{},s=s||{};function i(f){return f in s?s[f]:e[f]}var l=Object.create(null),n=[];for(var t in e)t in s?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in s){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=i(p)}c[u]=i(u)}for(o=0;o<n.length;o++)c[n[o]]=i(n[o]);return c}function $(e,s,i){return i[s]!=null?i[s]:e.props[s]}function Ae(e,s){return re(e.children,function(i){return a.exports.cloneElement(i,{onExited:s.bind(null,i),in:!0,appear:$(i,"appear",e),enter:$(i,"enter",e),exit:$(i,"exit",e)})})}function We(e,s,i){var l=re(e.children),n=Ye(s,l);return Object.keys(n).forEach(function(t){var o=n[t];if(!!a.exports.isValidElement(o)){var c=t in s,u=t in l,p=s[t],f=a.exports.isValidElement(p)&&!p.props.in;u&&(!c||f)?n[t]=a.exports.cloneElement(o,{onExited:i.bind(null,o),in:!0,exit:$(o,"exit",e),enter:$(o,"enter",e)}):!u&&c&&!f?n[t]=a.exports.cloneElement(o,{in:!1}):u&&c&&a.exports.isValidElement(p)&&(n[t]=a.exports.cloneElement(o,{onExited:i.bind(null,o),in:p.props.in,exit:$(o,"exit",e),enter:$(o,"enter",e)}))}}),n}var He=Object.values||function(e){return Object.keys(e).map(function(s){return e[s]})},Ge={component:"div",childFactory:function(s){return s}},se=function(e){_e(s,e);function s(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(Xe(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}var i=s.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},s.getDerivedStateFromProps=function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Ae(n,c):We(n,o,c),firstRender:!1}},i.handleExited=function(n,t){var o=re(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=X({},c.children);return delete u[n.key],{children:u}}))},i.render=function(){var n=this.props,t=n.component,o=n.childFactory,c=te(n,["component","childFactory"]),u=this.state.contextValue,p=He(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?W.createElement(ce.Provider,{value:u},p):W.createElement(ce.Provider,{value:u},W.createElement(t,c,p))},s}(W.Component);se.propTypes={};se.defaultProps=Ge;var qe=se;function Je(e){const{className:s,classes:i,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[f,g]=a.exports.useState(!1),b=C(s,i.ripple,i.rippleVisible,l&&i.ripplePulsate),B={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},h=C(i.child,f&&i.childLeaving,l&&i.childPulsate);return!c&&!f&&g(!0),a.exports.useEffect(()=>{if(!c&&u!=null){const x=setTimeout(u,p);return()=>{clearTimeout(x)}}},[u,c,p]),U("span",{className:b,style:B,children:U("span",{className:h})})}const Qe=me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);var m=Qe;const Ze=["center","classes","className"];let G=e=>e,pe,de,fe,he;const ee=550,et=80,tt=ne(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),nt=ne(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ot=ne(fe||(fe=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),rt=oe("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),st=oe(Je,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,tt,ee,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,nt,ee,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,ot,({theme:e})=>e.transitions.easing.easeInOut),it=a.exports.forwardRef(function(s,i){const l=be({props:s,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=te(l,Ze),[u,p]=a.exports.useState([]),f=a.exports.useRef(0),g=a.exports.useRef(null);a.exports.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.exports.useRef(!1),B=a.exports.useRef(null),h=a.exports.useRef(null),x=a.exports.useRef(null);a.exports.useEffect(()=>()=>{clearTimeout(B.current)},[]);const _=a.exports.useCallback(d=>{const{pulsate:R,rippleX:M,rippleY:D,rippleSize:I,cb:O}=d;p(T=>[...T,U(st,{classes:{ripple:C(t.ripple,m.ripple),rippleVisible:C(t.rippleVisible,m.rippleVisible),ripplePulsate:C(t.ripplePulsate,m.ripplePulsate),child:C(t.child,m.child),childLeaving:C(t.childLeaving,m.childLeaving),childPulsate:C(t.childPulsate,m.childPulsate)},timeout:ee,pulsate:R,rippleX:M,rippleY:D,rippleSize:I},f.current)]),f.current+=1,g.current=O},[t]),F=a.exports.useCallback((d={},R={},M)=>{const{pulsate:D=!1,center:I=n||R.pulsate,fakeElement:O=!1}=R;if(d.type==="mousedown"&&b.current){b.current=!1;return}d.type==="touchstart"&&(b.current=!0);const T=O?null:x.current,P=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let E,w,S;if(I||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)E=Math.round(P.width/2),w=Math.round(P.height/2);else{const{clientX:k,clientY:v}=d.touches?d.touches[0]:d;E=Math.round(k-P.left),w=Math.round(v-P.top)}if(I)S=Math.sqrt((2*P.width**2+P.height**2)/3),S%2===0&&(S+=1);else{const k=Math.max(Math.abs((T?T.clientWidth:0)-E),E)*2+2,v=Math.max(Math.abs((T?T.clientHeight:0)-w),w)*2+2;S=Math.sqrt(k**2+v**2)}d.touches?h.current===null&&(h.current=()=>{_({pulsate:D,rippleX:E,rippleY:w,rippleSize:S,cb:M})},B.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},et)):_({pulsate:D,rippleX:E,rippleY:w,rippleSize:S,cb:M})},[n,_]),z=a.exports.useCallback(()=>{F({},{pulsate:!0})},[F]),N=a.exports.useCallback((d,R)=>{if(clearTimeout(B.current),d.type==="touchend"&&h.current){h.current(),h.current=null,B.current=setTimeout(()=>{N(d,R)});return}h.current=null,p(M=>M.length>0?M.slice(1):M),g.current=R},[]);return a.exports.useImperativeHandle(i,()=>({pulsate:z,start:F,stop:N}),[z,F,N]),U(rt,X({className:C(t.root,m.root,o),ref:x},c,{children:U(qe,{component:null,exit:!0,children:u})}))});var at=it;function lt(e){return ze("MuiButtonBase",e)}const ut=me("MuiButtonBase",["root","disabled","focusVisible"]);var ct=ut;const pt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],dt=e=>{const{disabled:s,focusVisible:i,focusVisibleClassName:l,classes:n}=e,o=je({root:["root",s&&"disabled",i&&"focusVisible"]},lt,n);return i&&l&&(o.root+=` ${l}`),o},ft=oe("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,s)=>s.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ct.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ht=a.exports.forwardRef(function(s,i){const l=be({props:s,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:B="a",onBlur:h,onClick:x,onContextMenu:_,onDragLeave:F,onFocus:z,onFocusVisible:N,onKeyDown:d,onKeyUp:R,onMouseDown:M,onMouseLeave:D,onMouseUp:I,onTouchEnd:O,onTouchMove:T,onTouchStart:P,tabIndex:E=0,TouchRippleProps:w,touchRippleRef:S,type:k}=l,v=te(l,pt),j=a.exports.useRef(null),y=a.exports.useRef(null),ge=Z(y,S),{isFocusVisibleRef:ie,onFocus:xe,onBlur:Re,ref:Me}=Ke(),[L,Y]=a.exports.useState(!1);p&&L&&Y(!1),a.exports.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),j.current.focus()}}),[]);const[q,Te]=a.exports.useState(!1);a.exports.useEffect(()=>{Te(!0)},[]);const ye=q&&!f&&!p;a.exports.useEffect(()=>{L&&b&&!f&&q&&y.current.pulsate()},[f,b,L,q]);function V(r,le,Ue=g){return H(ue=>(le&&le(ue),!Ue&&y.current&&y.current[r](ue),!0))}const Ce=V("start",M),Ee=V("stop",_),ve=V("stop",F),Ve=V("stop",I),Be=V("stop",r=>{L&&r.preventDefault(),D&&D(r)}),Pe=V("start",P),we=V("stop",O),Se=V("stop",T),De=V("stop",r=>{Re(r),ie.current===!1&&Y(!1),h&&h(r)},!1),ke=H(r=>{j.current||(j.current=r.currentTarget),xe(r),ie.current===!0&&(Y(!0),N&&N(r)),z&&z(r)}),J=()=>{const r=j.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Q=a.exports.useRef(!1),Le=H(r=>{b&&!Q.current&&L&&y.current&&r.key===" "&&(Q.current=!0,y.current.stop(r,()=>{y.current.start(r)})),r.target===r.currentTarget&&J()&&r.key===" "&&r.preventDefault(),d&&d(r),r.target===r.currentTarget&&J()&&r.key==="Enter"&&!p&&(r.preventDefault(),x&&x(r))}),$e=H(r=>{b&&r.key===" "&&y.current&&L&&!r.defaultPrevented&&(Q.current=!1,y.current.stop(r,()=>{y.current.pulsate(r)})),R&&R(r),x&&r.target===r.currentTarget&&J()&&r.key===" "&&!r.defaultPrevented&&x(r)});let A=u;A==="button"&&(v.href||v.to)&&(A=B);const K={};A==="button"?(K.type=k===void 0?"button":k,K.disabled=p):(!v.href&&!v.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Fe=Z(Me,j),Ne=Z(i,Fe),ae=X({},l,{centerRipple:t,component:u,disabled:p,disableRipple:f,disableTouchRipple:g,focusRipple:b,tabIndex:E,focusVisible:L}),Ie=dt(ae);return Oe(ft,X({as:A,className:C(Ie.root,c),ownerState:ae,onBlur:De,onClick:x,onContextMenu:Ee,onFocus:ke,onKeyDown:Le,onKeyUp:$e,onMouseDown:Ce,onMouseLeave:Be,onMouseUp:Ve,onDragLeave:ve,onTouchEnd:we,onTouchMove:Se,onTouchStart:Pe,ref:Ne,tabIndex:p?-1:E,type:k},K,v,{children:[o,ye?U(at,X({ref:ge,center:t},w)):null]}))});var xt=ht;export{xt as B,qe as T,Xe as _};
