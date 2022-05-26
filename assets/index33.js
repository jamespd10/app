var Ot=Object.defineProperty,$t=Object.defineProperties;var vt=Object.getOwnPropertyDescriptors;var Be=Object.getOwnPropertySymbols;var At=Object.prototype.hasOwnProperty,Ft=Object.prototype.propertyIsEnumerable;var He=(n,o,s)=>o in n?Ot(n,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[o]=s,ce=(n,o)=>{for(var s in o||(o={}))At.call(o,s)&&He(n,s,o[s]);if(Be)for(var s of Be(o))Ft.call(o,s)&&He(n,s,o[s]);return n},Ue=(n,o)=>$t(n,vt(o));import{H as _t}from"./HeaderTitle.js";import{r as d,B as Kt,_ as A,c as Ne,a as g,h as Ye,k as Je,l as Ce,u as Xe,O as Vt,n as Ze,E as et,x as tt,e as De,j as Te,v as be,av as Me,S as Pe,t as jt,F as Lt,aw as zt}from"./index.js";import{c as Oe,i as $e,r as ve}from"./jsx-runtime_commonjs-proxy.js";import{u as Bt,a as qe}from"./useControlled.js";import{u as Ht}from"./useMediaQuery.js";import"./Typography.js";import"./extendSxProp.js";import"./Divider.js";import"./createSvgIcon.js";import"./useIsFocusVisible.js";const Ut=d.exports.createContext({});var Ae=Ut;const qt=["element"];function Wt(n,o){for(let s=0;s<n.length;s+=1)if(o(n[s]))return s;return-1}function Gt(n,o){let s=0,l=n.length-1;for(;s<=l;){const p=Math.floor((s+l)/2);if(n[p].element===o)return p;n[p].element.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_PRECEDING?l=p-1:s=p+1}return s}const nt=d.exports.createContext({});function Qt(n){const o=d.exports.useRef(null);return d.exports.useEffect(()=>{o.current=n},[n]),o.current}const We=()=>{};function Yt(n){const[,o]=d.exports.useState(),{registerDescendant:s=We,unregisterDescendant:l=We,descendants:p=[],parentId:I=null}=d.exports.useContext(nt),C=Wt(p,y=>y.element===n.element),R=Qt(p),k=p.some((y,E)=>R&&R[E]&&R[E].element!==y.element);return Kt(()=>{if(n.element)return s(A({},n,{index:C})),()=>{l(n.element)};o({})},[s,l,C,k,n]),{parentId:I,index:C}}function rt(n){const{children:o,id:s}=n,[l,p]=d.exports.useState([]),I=d.exports.useCallback(k=>{let{element:y}=k,E=Ne(k,qt);p(w=>{let D;if(w.length===0)return[A({},E,{element:y,index:0})];const b=Gt(w,y);if(w[b]&&w[b].element===y)D=w;else{const M=A({},E,{element:y,index:b});D=w.slice(),D.splice(b,0,M)}return D.forEach((M,h)=>{M.index=h}),D})},[]),C=d.exports.useCallback(k=>{p(y=>y.filter(E=>k!==E.element))},[]),R=d.exports.useMemo(()=>({descendants:l,registerDescendant:I,unregisterDescendant:C,parentId:s}),[l,I,C,s]);return g(nt.Provider,{value:R,children:o})}function Jt(n){return Ye("MuiTreeView",n)}Je("MuiTreeView",["root"]);const Xt=["children","className","defaultCollapseIcon","defaultEndIcon","defaultExpanded","defaultExpandIcon","defaultParentIcon","defaultSelected","disabledItemsFocusable","disableSelection","expanded","id","multiSelect","onBlur","onFocus","onKeyDown","onNodeFocus","onNodeSelect","onNodeToggle","selected"],Zt=n=>{const{classes:o}=n;return Ze({root:["root"]},Jt,o)},en=Ce("ul",{name:"MuiTreeView",slot:"Root",overridesResolver:(n,o)=>o.root})({padding:0,margin:0,listStyle:"none",outline:0});function tn(n){return n&&n.length===1&&n.match(/\S/)}function Ge(n,o,s){for(let l=o;l<n.length;l+=1)if(s===n[l])return l;return-1}function Qe(){return!1}const nn=[],rn=[],on=d.exports.forwardRef(function(o,s){const l=Xe({props:o,name:"MuiTreeView"}),{children:p,className:I,defaultCollapseIcon:C,defaultEndIcon:R,defaultExpanded:k=nn,defaultExpandIcon:y,defaultParentIcon:E,defaultSelected:w=rn,disabledItemsFocusable:D=!1,disableSelection:b=!1,expanded:M,id:h,multiSelect:S=!1,onBlur:Y,onFocus:J,onKeyDown:m,onNodeFocus:z,onNodeSelect:P,onNodeToggle:H,selected:K}=l,ye=Ne(l,Xt),de=Vt().direction==="rtl",Ie=A({},l,{defaultExpanded:k,defaultSelected:w,disabledItemsFocusable:D,disableSelection:b,multiSelect:S}),ke=Zt(Ie),se=Bt(h),X=d.exports.useRef(null),ue=et(X,s),[c,Z]=d.exports.useState(null),x=d.exports.useRef({}),U=d.exports.useRef({}),[B,fe]=qe({controlled:M,default:k,name:"TreeView",state:"expanded"}),[O,ae]=qe({controlled:K,default:w,name:"TreeView",state:"selected"}),F=d.exports.useCallback(e=>Array.isArray(B)?B.indexOf(e)!==-1:!1,[B]),ee=d.exports.useCallback(e=>x.current[e]&&x.current[e].expandable,[]),te=d.exports.useCallback(e=>Array.isArray(O)?O.indexOf(e)!==-1:O===e,[O]),T=d.exports.useCallback(e=>{let t=x.current[e];if(!t)return!1;if(t.disabled)return!0;for(;t.parentId!=null;)if(t=x.current[t.parentId],t.disabled)return!0;return!1},[]),we=e=>c===e,q=e=>Object.keys(x.current).map(t=>x.current[t]).filter(t=>t.parentId===e).sort((t,r)=>t.index-r.index).map(t=>t.id),$=e=>{let t=q(e);return D||(t=t.filter(r=>!T(r))),t},W=e=>{if(F(e)&&$(e).length>0)return $(e)[0];let t=x.current[e];for(;t!=null;){const r=$(t.parentId),a=r[r.indexOf(t.id)+1];if(a)return a;t=x.current[t.parentId]}return null},v=e=>{const t=x.current[e],r=$(t.parentId),a=r.indexOf(e);if(a===0)return t.parentId;let i=r[a-1];for(;F(i)&&$(i).length>0;)i=$(i).pop();return i},ne=()=>{let e=$(null).pop();for(;F(e);)e=$(e).pop();return e},re=()=>$(null)[0],pe=e=>x.current[e].parentId,Ee=(e,t)=>{if(e===t)return[e,t];const r=x.current[e],a=x.current[t];if(r.parentId===a.id||a.parentId===r.id)return a.parentId===r.id?[r.id,a.id]:[a.id,r.id];const i=[r.id],u=[a.id];let f=r.parentId,N=a.parentId,_=u.indexOf(f)!==-1,me=i.indexOf(N)!==-1,ie=!0,he=!0;for(;!me&&!_;)ie&&(i.push(f),_=u.indexOf(f)!==-1,ie=f!==null,!_&&ie&&(f=x.current[f].parentId)),he&&!_&&(u.push(N),me=i.indexOf(N)!==-1,he=N!==null,!me&&he&&(N=x.current[N].parentId));const ge=_?f:N,ze=q(ge),Mt=i[i.indexOf(ge)-1],Pt=u[u.indexOf(ge)-1];return ze.indexOf(Mt)<ze.indexOf(Pt)?[e,t]:[t,e]},G=(e,t)=>{const[r,a]=Ee(e,t),i=[r];let u=r;for(;u!==a;)u=W(u),i.push(u);return i},V=(e,t)=>{t&&(Z(t),z&&z(e,t))},Ve=(e,t)=>V(e,W(t)),it=(e,t)=>V(e,v(t)),ct=e=>V(e,re()),dt=e=>V(e,ne()),ut=(e,t,r)=>{let a,i;const u=r.toLowerCase(),f=[],N=[];Object.keys(U.current).forEach(_=>{const me=U.current[_],ie=x.current[_],he=ie.parentId?F(ie.parentId):!0,ge=D?!1:T(_);he&&!ge&&(f.push(_),N.push(me))}),a=f.indexOf(t)+1,a>=f.length&&(a=0),i=Ge(N,a,u),i===-1&&(i=Ge(N,0,u)),i>-1&&V(e,f[i])},Se=(e,t=c)=>{let r;B.indexOf(t)!==-1?r=B.filter(a=>a!==t):r=[t].concat(B),H&&H(e,r),fe(r)},ft=(e,t)=>{const r=x.current[t],i=q(r.parentId).filter(f=>ee(f)&&!F(f)),u=B.concat(i);i.length>0&&(fe(u),H&&H(e,u))},Q=d.exports.useRef(null),le=d.exports.useRef(!1),j=d.exports.useRef([]),pt=(e,t)=>{let r=O.slice();const{start:a,next:i,current:u}=t;!i||!u||(j.current.indexOf(u)===-1&&(j.current=[]),le.current?j.current.indexOf(i)!==-1?(r=r.filter(f=>f===a||f!==u),j.current=j.current.filter(f=>f===a||f!==u)):(r.push(i),j.current.push(i)):(r.push(i),j.current.push(u,i)),P&&P(e,r),ae(r))},xt=(e,t)=>{let r=O.slice();const{start:a,end:i}=t;le.current&&(r=r.filter(N=>j.current.indexOf(N)===-1));let u=G(a,i);u=u.filter(N=>!T(N)),j.current=u;let f=r.concat(u);f=f.filter((N,_)=>f.indexOf(N)===_),P&&P(e,f),ae(f)},mt=(e,t)=>{let r;O.indexOf(t)!==-1?r=O.filter(a=>a!==t):r=[t].concat(O),P&&P(e,r),ae(r)},ht=(e,t)=>{const r=S?[t]:t;P&&P(e,r),ae(r)},xe=(e,t,r=!1)=>t?(r?mt(e,t):ht(e,t),Q.current=t,le.current=!1,j.current=[],!0):!1,oe=(e,t,r=!1)=>{const{start:a=Q.current,end:i,current:u}=t;r?pt(e,{start:a,next:i,current:u}):a!=null&&i!=null&&xt(e,{start:a,end:i}),le.current=!0},gt=(e,t)=>{Q.current||(Q.current=t);const r=le.current?Q.current:t;oe(e,{start:r,end:re()})},bt=(e,t)=>{Q.current||(Q.current=t);const r=le.current?Q.current:t;oe(e,{start:r,end:ne()})},Ct=(e,t)=>{T(W(t))||oe(e,{end:W(t),current:t},!0)},yt=(e,t)=>{T(v(t))||oe(e,{end:v(t),current:t},!0)},It=e=>{oe(e,{start:re(),end:ne()})},wt=d.exports.useCallback(e=>{const{id:t,index:r,parentId:a,expandable:i,idAttribute:u,disabled:f}=e;x.current[t]={id:t,index:r,parentId:a,expandable:i,idAttribute:u,disabled:f}},[]),St=d.exports.useCallback(e=>{const t=A({},x.current);delete t[e],x.current=t,Z(r=>r===e&&X.current===tt(X.current).activeElement?q(null)[0]:r)},[]),Tt=d.exports.useCallback((e,t)=>{U.current[e]=t},[]),Nt=d.exports.useCallback(e=>{const t=A({},U.current);delete t[e],U.current=t},[]),je=e=>(ee(c)&&(F(c)?Ve(e,c):T(c)||Se(e)),!0),Le=e=>{if(F(c)&&!T(c))return Se(e,c),!0;const t=pe(c);return t?(V(e,t),!0):!1},Rt=e=>{let t=!1;const r=e.key;if(e.altKey||e.currentTarget!==e.target||!c)return;const a=e.ctrlKey||e.metaKey;switch(r){case" ":!b&&!T(c)&&(S&&e.shiftKey?(oe(e,{end:c}),t=!0):S?t=xe(e,c,!0):t=xe(e,c)),e.stopPropagation();break;case"Enter":T(c)||(ee(c)?(Se(e),t=!0):S?t=xe(e,c,!0):t=xe(e,c)),e.stopPropagation();break;case"ArrowDown":S&&e.shiftKey&&!b&&Ct(e,c),Ve(e,c),t=!0;break;case"ArrowUp":S&&e.shiftKey&&!b&&yt(e,c),it(e,c),t=!0;break;case"ArrowRight":de?t=Le(e):t=je(e);break;case"ArrowLeft":de?t=je(e):t=Le(e);break;case"Home":S&&a&&e.shiftKey&&!b&&!T(c)&&gt(e,c),ct(e),t=!0;break;case"End":S&&a&&e.shiftKey&&!b&&!T(c)&&bt(e,c),dt(e),t=!0;break;default:r==="*"?(ft(e,c),t=!0):S&&a&&r.toLowerCase()==="a"&&!b?(It(e),t=!0):!a&&!e.shiftKey&&tn(r)&&(ut(e,c,r),t=!0)}t&&(e.preventDefault(),e.stopPropagation()),m&&m(e)},kt=e=>{if(e.target===e.currentTarget){const t=Array.isArray(O)?O[0]:O;V(e,t||$(null)[0])}J&&J(e)},Et=e=>{Z(null),Y&&Y(e)},Dt=x.current[c]?x.current[c].idAttribute:null;return g(Ae.Provider,{value:{icons:{defaultCollapseIcon:C,defaultExpandIcon:y,defaultParentIcon:E,defaultEndIcon:R},focus:V,toggleExpansion:Se,isExpanded:F,isExpandable:ee,isFocused:we,isSelected:te,isDisabled:T,selectNode:b?Qe:xe,selectRange:b?Qe:oe,multiSelect:S,disabledItemsFocusable:D,mapFirstChar:Tt,unMapFirstChar:Nt,registerNode:wt,unregisterNode:St,treeId:se},children:g(rt,{children:g(en,A({role:"tree",id:se,"aria-activedescendant":Dt,"aria-multiselectable":S,className:De(ke.root,I),ref:ue,tabIndex:0,onKeyDown:Rt,onFocus:kt,onBlur:Et,ownerState:Ie},ye,{children:p}))})})});var sn=on;function an(n){const{focus:o,isExpanded:s,isExpandable:l,isFocused:p,isDisabled:I,isSelected:C,multiSelect:R,selectNode:k,selectRange:y,toggleExpansion:E}=d.exports.useContext(Ae),w=l?l(n):!1,D=s?s(n):!1,b=p?p(n):!1,M=I?I(n):!1,h=C?C(n):!1;return{disabled:M,expanded:D,selected:h,focused:b,handleExpansion:m=>{if(!M){b||o(m,n);const z=R&&(m.shiftKey||m.ctrlKey||m.metaKey);w&&!(z&&s(n))&&E(m,n)}},handleSelection:m=>{M||(b||o(m,n),R&&(m.shiftKey||m.ctrlKey||m.metaKey)?m.shiftKey?y(m,{end:n}):k(m,n,!0):k(m,n))},preventSelection:m=>{(m.shiftKey||m.ctrlKey||m.metaKey||M)&&m.preventDefault()}}}const ln=["classes","className","displayIcon","expansionIcon","icon","label","nodeId","onClick","onMouseDown"],cn=d.exports.forwardRef(function(o,s){const{classes:l,className:p,displayIcon:I,expansionIcon:C,icon:R,label:k,nodeId:y,onClick:E,onMouseDown:w}=o,D=Ne(o,ln),{disabled:b,expanded:M,selected:h,focused:S,handleExpansion:Y,handleSelection:J,preventSelection:m}=an(y),z=R||C||I,P=K=>{m(K),w&&w(K)},H=K=>{Y(K),J(K),E&&E(K)};return Te("div",A({className:De(p,l.root,M&&l.expanded,h&&l.selected,S&&l.focused,b&&l.disabled),onClick:H,onMouseDown:P,ref:s},D,{children:[g("div",{className:l.iconContainer,children:z}),g("div",{className:l.label,children:k})]}))});var ot=cn;function dn(n){return Ye("MuiTreeItem",n)}const un=Je("MuiTreeItem",["root","group","content","expanded","selected","focused","disabled","iconContainer","label"]);var L=un;const fn=["children","className","collapseIcon","ContentComponent","ContentProps","endIcon","expandIcon","disabled","icon","id","label","nodeId","onClick","onMouseDown","TransitionComponent","TransitionProps"],pn=n=>{const{classes:o}=n;return Ze({root:["root"],content:["content"],expanded:["expanded"],selected:["selected"],focused:["focused"],disabled:["disabled"],iconContainer:["iconContainer"],label:["label"],group:["group"]},dn,o)},xn=Ce("li",{name:"MuiTreeItem",slot:"Root",overridesResolver:(n,o)=>o.root})({listStyle:"none",margin:0,padding:0,outline:0}),mn=Ce(ot,{name:"MuiTreeItem",slot:"Content",overridesResolver:(n,o)=>[o.content,o.iconContainer&&{[`& .${L.iconContainer}`]:o.iconContainer},o.label&&{[`& .${L.label}`]:o.label}]})(({theme:n})=>({padding:"0 8px",width:"100%",display:"flex",alignItems:"center",cursor:"pointer",WebkitTapHighlightColor:"transparent","&:hover":{backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${L.disabled}`]:{opacity:n.palette.action.disabledOpacity,backgroundColor:"transparent"},[`&.${L.focused}`]:{backgroundColor:n.palette.action.focus},[`&.${L.selected}`]:{backgroundColor:be(n.palette.primary.main,n.palette.action.selectedOpacity),"&:hover":{backgroundColor:be(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:be(n.palette.primary.main,n.palette.action.selectedOpacity)}},[`&.${L.focused}`]:{backgroundColor:be(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)}},[`& .${L.iconContainer}`]:{marginRight:4,width:15,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}},[`& .${L.label}`]:A({width:"100%",minWidth:0,paddingLeft:4,position:"relative"},n.typography.body1)})),hn=Ce(Me,{name:"MuiTreeItem",slot:"Group",overridesResolver:(n,o)=>o.group})({margin:0,padding:0,marginLeft:17}),gn=d.exports.forwardRef(function(o,s){const l=Xe({props:o,name:"MuiTreeItem"}),{children:p,className:I,collapseIcon:C,ContentComponent:R=ot,ContentProps:k,endIcon:y,expandIcon:E,disabled:w,icon:D,id:b,label:M,nodeId:h,onClick:S,onMouseDown:Y,TransitionComponent:J=Me,TransitionProps:m}=l,z=Ne(l,fn),{icons:P={},focus:H,isExpanded:K,isFocused:ye,isSelected:Re,isDisabled:de,multiSelect:Ie,disabledItemsFocusable:ke,mapFirstChar:se,unMapFirstChar:X,registerNode:ue,unregisterNode:c,treeId:Z}=d.exports.useContext(Ae);let x=null;b!=null?x=b:Z&&h&&(x=`${Z}-${h}`);const[U,B]=d.exports.useState(null),fe=d.exports.useRef(null),O=et(B,s),ae=d.exports.useMemo(()=>({element:U,id:h}),[h,U]),{index:F,parentId:ee}=Yt(ae),te=Boolean(Array.isArray(p)?p.length:p),T=K?K(h):!1,we=ye?ye(h):!1,q=Re?Re(h):!1,$=de?de(h):!1,W=A({},l,{expanded:T,focused:we,selected:q,disabled:$}),v=pn(W);let ne,re;te&&(T?re=C||P.defaultCollapseIcon:re=E||P.defaultExpandIcon),te?ne=P.defaultParentIcon:ne=y||P.defaultEndIcon,d.exports.useEffect(()=>{if(ue&&c&&F!==-1)return ue({id:h,idAttribute:x,index:F,parentId:ee,expandable:te,disabled:w}),()=>{c(h)}},[ue,c,ee,F,h,te,w,x]),d.exports.useEffect(()=>{if(se&&X&&M)return se(h,fe.current.textContent.substring(0,1).toLowerCase()),()=>{X(h)}},[se,X,h,M]);let pe;Ie?pe=q:q&&(pe=!0);function Ee(G){G.target===G.currentTarget&&tt(G.target).getElementById(Z).focus({preventScroll:!0});const V=!ke&&$;!we&&G.currentTarget===G.target&&!V&&H(G,h)}return Te(xn,A({className:De(v.root,I),role:"treeitem","aria-expanded":te?T:null,"aria-selected":pe,"aria-disabled":$||null,ref:O,id:x,tabIndex:-1},z,{ownerState:W,onFocus:Ee,children:[g(mn,A({as:R,ref:fe,classes:{root:v.content,expanded:v.expanded,selected:v.selected,focused:v.focused,disabled:v.disabled,iconContainer:v.iconContainer,label:v.label},label:M,nodeId:h,onClick:S,onMouseDown:Y,icon:D,expansionIcon:re,displayIcon:ne,ownerState:W},k)),p&&g(rt,{id:h,children:g(hn,A({as:J,unmountOnExit:!0,className:v.group,in:T,component:"ul",role:"group"},m,{children:p}))})]}))});var bn=gn;const Cn=n=>g("div",{children:g(Me,ce({},n))}),yn=Ce(n=>g(bn,Ue(ce({},n),{TransitionComponent:Cn})))(({theme:n})=>({[`& .${L.iconContainer}`]:{"& .close":{opacity:.3}},[`& .${L.group}`]:{marginLeft:15,paddingLeft:18,borderLeft:`1px dashed ${be(n.palette.primary.main,.4)}`},"& .MuiTreeItem-content:hover":{background:n.palette.primary.main,color:"white",borderRadius:"5px"},"& .Mui-selected":{background:n.palette.primary.main,color:"white",borderRadius:"5px"},"& .MuiTreeItem-root":{"& .Mui-selected":{background:n.palette.primary.main,color:"white",borderRadius:"5px"},"& .Mui-focused":{background:n.palette.primary.main,color:"white",borderRadius:"5px"}}}));var Fe={},In=$e.exports;Object.defineProperty(Fe,"__esModule",{value:!0});var st=Fe.default=void 0,wn=In(Oe),Sn=ve,Tn=(0,wn.default)((0,Sn.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");st=Fe.default=Tn;const Nn=n=>g(Pe,ce({fontSize:"inherit",style:{width:16,height:16},component:st},n));var _e={},Rn=$e.exports;Object.defineProperty(_e,"__esModule",{value:!0});var at=_e.default=void 0,kn=Rn(Oe),En=ve,Dn=(0,kn.default)((0,En.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddBox");at=_e.default=Dn;const Mn=n=>g(Pe,ce({fontSize:"inherit",style:{width:16,height:16},component:at},n));var Ke={},Pn=$e.exports;Object.defineProperty(Ke,"__esModule",{value:!0});var lt=Ke.default=void 0,On=Pn(Oe),$n=ve,vn=(0,On.default)((0,$n.jsx)("path",{d:"M3 3v18h18V3H3zm14 12.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"DisabledByDefault");lt=Ke.default=vn;const An=n=>g(Pe,ce({className:"close",fontSize:"inherit",style:{width:16,height:16},component:lt},n)),Fn=({tree:n})=>{const o=jt(),s=({id:l,label:p,children:I,to:C})=>g(yn,{nodeId:l,label:p,onClick:C?()=>o(C):void 0,children:I&&Array.isArray(I)?I.map(R=>s(R)):null},l);return g(sn,{"aria-label":"customized",defaultExpanded:[n[0].id],defaultCollapseIcon:g(Nn,{}),defaultExpandIcon:g(Mn,{}),defaultEndIcon:g(An,{}),sx:{flexGrow:1,maxWidth:"240px",overflowY:"auto"},children:n.map(l=>s(l))})},Gn=()=>{const n=Ht("(max-width:600px)");return Te(Lt,{children:[g(_t,{message:"Ayuda"}),Te("div",{style:{marginTop:10,display:"flex",flexDirection:n?"column":"row",flexWrap:"nowrap"},children:[g("div",{style:{width:n?"100%":"300px"},children:g(Fn,{tree:[{id:"planillas",label:"Planillas (SIPE)",children:[{id:"pla-01",label:"Realizar",to:"/ayuda/planillas/realizar"},{id:"pla-02",label:"Editar",to:"/ayuda/planillas/editar"},{id:"pla-03",label:"Agregar negocio",to:"/ayuda/planillas/agregar-negocio"},{id:"pla-04",label:"Remover negocio",to:"/ayuda/planillas/remover-negocio"},{id:"pla-05",label:"Agregar contrato",to:"/ayuda/planillas/agregar-contrato"},{id:"pla-06",label:"Remover contrato",to:"/ayuda/planillas/remover-contrato"},{id:"pla-07",label:"Enviar SIPE",to:"/ayuda/planillas/enviar"}]}]})}),g(zt,{})]})]})};export{Gn as default};
