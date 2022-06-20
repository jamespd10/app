import{I as C,J as _,r as i,q as ne,j as re,a as F,g as be,c as xe,f as se,m as Z,_ as R,h as ge,i as Ee,s as ae,u as ye}from"./index.js";import{B as Re}from"./Backdrop.js";import{i as ie}from"./isHostComponent.js";import{c as ee}from"./useControlled.js";import{P as ke}from"./Portal.js";function ve(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Te(e){const t=C(e);return t.body===e?_(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function B(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function te(e){return parseInt(_(e).getComputedStyle(e).paddingRight,10)||0}function oe(e,t,n,o=[],r){const s=[t,n,...o],d=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,a=>{s.indexOf(a)===-1&&d.indexOf(a.tagName)===-1&&B(a,r)})}function Y(e,t){let n=-1;return e.some((o,r)=>t(o)?(n=r,!0):!1),n}function Ie(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(Te(o)){const u=ve(C(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${te(o)+u}px`;const g=C(o).querySelectorAll(".mui-fixed");[].forEach.call(g,h=>{n.push({value:h.style.paddingRight,property:"padding-right",el:h}),h.style.paddingRight=`${te(h)+u}px`})}const s=o.parentElement,d=_(o),a=(s==null?void 0:s.nodeName)==="HTML"&&d.getComputedStyle(s).overflowY==="scroll"?s:o;n.push({value:a.style.overflow,property:"overflow",el:a},{value:a.style.overflowX,property:"overflow-x",el:a},{value:a.style.overflowY,property:"overflow-y",el:a}),a.style.overflow="hidden"}return()=>{n.forEach(({value:s,el:d,property:a})=>{s?d.style.setProperty(a,s):d.style.removeProperty(a)})}}function we(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Me{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&B(t.modalRef,!1);const r=we(n);oe(n,t.mount,t.modalRef,r,!0);const s=Y(this.containers,d=>d.container===n);return s!==-1?(this.containers[s].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:r}),o)}mount(t,n){const o=Y(this.containers,s=>s.modals.indexOf(t)!==-1),r=this.containers[o];r.restore||(r.restore=Ie(r,n))}remove(t){const n=this.modals.indexOf(t);if(n===-1)return n;const o=Y(this.containers,s=>s.modals.indexOf(t)!==-1),r=this.containers[o];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&B(t.modalRef,!0),oe(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(o,1);else{const s=r.modals[r.modals.length-1];s.modalRef&&B(s.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const Se=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Pe(e){const t=parseInt(e.getAttribute("tabindex"),10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Fe(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Ce(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Fe(e))}function Ne(e){const t=[],n=[];return Array.from(e.querySelectorAll(Se)).forEach((o,r)=>{const s=Pe(o);s===-1||!Ce(o)||(s===0?t.push(o):n.push({documentOrder:r,tabIndex:s,node:o}))}),n.sort((o,r)=>o.tabIndex===r.tabIndex?o.documentOrder-r.documentOrder:o.tabIndex-r.tabIndex).map(o=>o.node).concat(t)}function Ae(){return!0}function Be(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:r=!1,getTabbable:s=Ne,isEnabled:d=Ae,open:a}=e,u=i.exports.useRef(),g=i.exports.useRef(null),h=i.exports.useRef(null),m=i.exports.useRef(null),E=i.exports.useRef(null),y=i.exports.useRef(!1),l=i.exports.useRef(null),w=ne(t.ref,l),v=i.exports.useRef(null);i.exports.useEffect(()=>{!a||!l.current||(y.current=!n)},[n,a]),i.exports.useEffect(()=>{if(!a||!l.current)return;const c=C(l.current);return l.current.contains(c.activeElement)||(l.current.hasAttribute("tabIndex")||l.current.setAttribute("tabIndex",-1),y.current&&l.current.focus()),()=>{r||(m.current&&m.current.focus&&(u.current=!0,m.current.focus()),m.current=null)}},[a]),i.exports.useEffect(()=>{if(!a||!l.current)return;const c=C(l.current),b=p=>{const{current:P}=l;if(P!==null){if(!c.hasFocus()||o||!d()||u.current){u.current=!1;return}if(!P.contains(c.activeElement)){if(p&&E.current!==p.target||c.activeElement!==E.current)E.current=null;else if(E.current!==null)return;if(!y.current)return;let T=[];if((c.activeElement===g.current||c.activeElement===h.current)&&(T=s(l.current)),T.length>0){var k,O;const D=Boolean(((k=v.current)==null?void 0:k.shiftKey)&&((O=v.current)==null?void 0:O.key)==="Tab"),W=T[0],L=T[T.length-1];D?L.focus():W.focus()}else P.focus()}}},x=p=>{v.current=p,!(o||!d()||p.key!=="Tab")&&c.activeElement===l.current&&p.shiftKey&&(u.current=!0,h.current.focus())};c.addEventListener("focusin",b),c.addEventListener("keydown",x,!0);const S=setInterval(()=>{c.activeElement.tagName==="BODY"&&b()},50);return()=>{clearInterval(S),c.removeEventListener("focusin",b),c.removeEventListener("keydown",x,!0)}},[n,o,r,d,a,s]);const M=c=>{m.current===null&&(m.current=c.relatedTarget),y.current=!0,E.current=c.target;const b=t.props.onFocus;b&&b(c)},I=c=>{m.current===null&&(m.current=c.relatedTarget),y.current=!0};return re(i.exports.Fragment,{children:[F("div",{tabIndex:0,onFocus:I,ref:g,"data-test":"sentinelStart"}),i.exports.cloneElement(t,{ref:w,onFocus:M}),F("div",{tabIndex:0,onFocus:I,ref:h,"data-test":"sentinelEnd"})]})}function Oe(e){return be("MuiModal",e)}xe("MuiModal",["root","hidden"]);const De=["BackdropComponent","BackdropProps","children","classes","className","closeAfterTransition","component","components","componentsProps","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","theme","onTransitionEnter","onTransitionExited"],Le=e=>{const{open:t,exited:n,classes:o}=e;return ge({root:["root",!t&&n&&"hidden"]},Oe,o)};function Ue(e){return typeof e=="function"?e():e}function Ke(e){return e.children?e.children.props.hasOwnProperty("in"):!1}const He=new Me,We=i.exports.forwardRef(function(t,n){const{BackdropComponent:o,BackdropProps:r,children:s,classes:d,className:a,closeAfterTransition:u=!1,component:g="div",components:h={},componentsProps:m={},container:E,disableAutoFocus:y=!1,disableEnforceFocus:l=!1,disableEscapeKeyDown:w=!1,disablePortal:v=!1,disableRestoreFocus:M=!1,disableScrollLock:I=!1,hideBackdrop:c=!1,keepMounted:b=!1,manager:x=He,onBackdropClick:S,onClose:p,onKeyDown:P,open:k,theme:O,onTransitionEnter:T,onTransitionExited:D}=t,W=se(t,De),[L,G]=i.exports.useState(!0),$=i.exports.useRef({}),j=i.exports.useRef(null),N=i.exports.useRef(null),ce=ne(N,n),U=Ke(t),le=()=>C(j.current),K=()=>($.current.modalRef=N.current,$.current.mountNode=j.current,$.current),J=()=>{x.mount(K(),{disableScrollLock:I}),N.current.scrollTop=0},V=Z(()=>{const f=Ue(E)||le().body;x.add(K(),f),N.current&&J()}),z=i.exports.useCallback(()=>x.isTopModal(K()),[x]),de=Z(f=>{j.current=f,f&&(k&&z()?J():B(N.current,!0))}),A=i.exports.useCallback(()=>{x.remove(K())},[x]);i.exports.useEffect(()=>()=>{A()},[A]),i.exports.useEffect(()=>{k?V():(!U||!u)&&A()},[k,A,U,u,V]);const X=R({},t,{classes:d,closeAfterTransition:u,disableAutoFocus:y,disableEnforceFocus:l,disableEscapeKeyDown:w,disablePortal:v,disableRestoreFocus:M,disableScrollLock:I,exited:L,hideBackdrop:c,keepMounted:b}),ue=Le(X);if(!b&&!k&&(!U||L))return null;const fe=()=>{G(!1),T&&T()},pe=()=>{G(!0),D&&D(),u&&A()},he=f=>{f.target===f.currentTarget&&(S&&S(f),p&&p(f,"backdropClick"))},me=f=>{P&&P(f),!(f.key!=="Escape"||!z())&&(w||(f.stopPropagation(),p&&p(f,"escapeKeyDown")))},H={};s.props.tabIndex===void 0&&(H.tabIndex="-1"),U&&(H.onEnter=ee(fe,s.props.onEnter),H.onExited=ee(pe,s.props.onExited));const Q=h.Root||g,q=m.root||{};return F(ke,{ref:de,container:E,disablePortal:v,children:re(Q,R({role:"presentation"},q,!ie(Q)&&{as:g,ownerState:R({},X,q.ownerState),theme:O},W,{ref:ce,onKeyDown:me,className:Ee(ue.root,q.className,a),children:[!c&&o?F(o,R({"aria-hidden":!0,open:k,onClick:he},r)):null,F(Be,{disableEnforceFocus:l,disableAutoFocus:y,disableRestoreFocus:M,isEnabled:z,open:k,children:i.exports.cloneElement(s,H)})]}))})});var $e=We;const je=["BackdropComponent","closeAfterTransition","children","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted"],ze=e=>e.classes,qe=ae("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>R({position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Ye=ae(Re,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),_e=i.exports.forwardRef(function(t,n){var o;const r=ye({name:"MuiModal",props:t}),{BackdropComponent:s=Ye,closeAfterTransition:d=!1,children:a,components:u={},componentsProps:g={},disableAutoFocus:h=!1,disableEnforceFocus:m=!1,disableEscapeKeyDown:E=!1,disablePortal:y=!1,disableRestoreFocus:l=!1,disableScrollLock:w=!1,hideBackdrop:v=!1,keepMounted:M=!1}=r,I=se(r,je),[c,b]=i.exports.useState(!0),x={closeAfterTransition:d,disableAutoFocus:h,disableEnforceFocus:m,disableEscapeKeyDown:E,disablePortal:y,disableRestoreFocus:l,disableScrollLock:w,hideBackdrop:v,keepMounted:M},S=R({},r,x,{exited:c}),p=ze(S);return F($e,R({components:R({Root:qe},u),componentsProps:{root:R({},g.root,(!u.Root||!ie(u.Root))&&{ownerState:R({},(o=g.root)==null?void 0:o.ownerState)})},BackdropComponent:s,onTransitionEnter:()=>b(!1),onTransitionExited:()=>b(!0),ref:n},I,{classes:p},x,{children:a}))});var Ze=_e;export{Ze as M,Be as T,ve as g};
