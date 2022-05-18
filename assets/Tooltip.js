import{_ as T,r as C,c as st,E as nr,a as fe,K as Se,x as Pt,l as Ze,v as ir,u as St,k as ar,h as sr,m as jt,y as Wt,U as pr,J as lr,e as qe,n as cr,j as Tt}from"./index.js";import{P as ur}from"./Portal.js";import{a as fr,u as dr}from"./useControlled.js";import{u as vr}from"./useIsFocusVisible.js";import{i as mr}from"./isHostComponent.js";import{G as Rt}from"./Grow.js";function Xe(t,e={},r){return mr(t)?e:T({},e,{ownerState:T({},e.ownerState,r)})}var L="top",H="bottom",U="right",S="left",pt="auto",Ie=[L,H,U,S],ge="start",Fe="end",hr="clippingParents",Ft="viewport",Le="popper",gr="reference",Et=Ie.reduce(function(t,e){return t.concat([e+"-"+ge,e+"-"+Fe])},[]),Nt=[].concat(Ie,[pt]).reduce(function(t,e){return t.concat([e,e+"-"+ge,e+"-"+Fe])},[]),yr="beforeRead",br="read",wr="afterRead",xr="beforeMain",Or="main",Pr="afterMain",Tr="beforeWrite",Rr="write",Er="afterWrite",Cr=[yr,br,wr,xr,Or,Pr,Tr,Rr,Er];function _(t){return t?(t.nodeName||"").toLowerCase():null}function Y(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ye(t){var e=Y(t).Element;return t instanceof e||t instanceof Element}function I(t){var e=Y(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function lt(t){if(typeof ShadowRoot=="undefined")return!1;var e=Y(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Ar(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var o=e.styles[r]||{},n=e.attributes[r]||{},i=e.elements[r];!I(i)||!_(i)||(Object.assign(i.style,o),Object.keys(n).forEach(function(a){var s=n[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s)}))})}function $r(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(o){var n=e.elements[o],i=e.attributes[o]||{},a=Object.keys(e.styles.hasOwnProperty(o)?e.styles[o]:r[o]),s=a.reduce(function(l,c){return l[c]="",l},{});!I(n)||!_(n)||(Object.assign(n.style,s),Object.keys(i).forEach(function(l){n.removeAttribute(l)}))})}}var Mr={name:"applyStyles",enabled:!0,phase:"write",fn:Ar,effect:$r,requires:["computeStyles"]};function Z(t){return t.split("-")[0]}var de=Math.max,Qe=Math.min,be=Math.round;function we(t,e){e===void 0&&(e=!1);var r=t.getBoundingClientRect(),o=1,n=1;if(I(t)&&e){var i=t.offsetHeight,a=t.offsetWidth;a>0&&(o=be(r.width)/a||1),i>0&&(n=be(r.height)/i||1)}return{width:r.width/o,height:r.height/n,top:r.top/n,right:r.right/o,bottom:r.bottom/n,left:r.left/o,x:r.left/o,y:r.top/n}}function ct(t){var e=we(t),r=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:o}}function It(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&lt(r)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function re(t){return Y(t).getComputedStyle(t)}function Dr(t){return["table","td","th"].indexOf(_(t))>=0}function pe(t){return((ye(t)?t.ownerDocument:t.document)||window.document).documentElement}function _e(t){return _(t)==="html"?t:t.assignedSlot||t.parentNode||(lt(t)?t.host:null)||pe(t)}function Ct(t){return!I(t)||re(t).position==="fixed"?null:t.offsetParent}function Br(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,r=navigator.userAgent.indexOf("Trident")!==-1;if(r&&I(t)){var o=re(t);if(o.position==="fixed")return null}var n=_e(t);for(lt(n)&&(n=n.host);I(n)&&["html","body"].indexOf(_(n))<0;){var i=re(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function He(t){for(var e=Y(t),r=Ct(t);r&&Dr(r)&&re(r).position==="static";)r=Ct(r);return r&&(_(r)==="html"||_(r)==="body"&&re(r).position==="static")?e:r||Br(t)||e}function ut(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function je(t,e,r){return de(t,Qe(e,r))}function kr(t,e,r){var o=je(t,e,r);return o>r?r:o}function Ht(){return{top:0,right:0,bottom:0,left:0}}function Ut(t){return Object.assign({},Ht(),t)}function Vt(t,e){return e.reduce(function(r,o){return r[o]=t,r},{})}var Lr=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,Ut(typeof e!="number"?e:Vt(e,Ie))};function Sr(t){var e,r=t.state,o=t.name,n=t.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=Z(r.placement),l=ut(s),c=[S,U].indexOf(s)>=0,p=c?"height":"width";if(!(!i||!a)){var v=Lr(n.padding,r),P=ct(i),u=l==="y"?L:S,y=l==="y"?H:U,f=r.rects.reference[p]+r.rects.reference[l]-a[l]-r.rects.popper[p],m=a[l]-r.rects.reference[l],b=He(i),w=b?l==="y"?b.clientHeight||0:b.clientWidth||0:0,x=f/2-m/2,d=v[u],O=w-P[p]-v[y],g=w/2-P[p]/2+x,R=je(d,g,O),E=l;r.modifiersData[o]=(e={},e[E]=R,e.centerOffset=R-g,e)}}function jr(t){var e=t.state,r=t.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||!It(e.elements.popper,n)||(e.elements.arrow=n))}var Wr={name:"arrow",enabled:!0,phase:"main",fn:Sr,effect:jr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function xe(t){return t.split("-")[1]}var Fr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Nr(t){var e=t.x,r=t.y,o=window,n=o.devicePixelRatio||1;return{x:be(e*n)/n||0,y:be(r*n)/n||0}}function At(t){var e,r=t.popper,o=t.popperRect,n=t.placement,i=t.variation,a=t.offsets,s=t.position,l=t.gpuAcceleration,c=t.adaptive,p=t.roundOffsets,v=t.isFixed,P=a.x,u=P===void 0?0:P,y=a.y,f=y===void 0?0:y,m=typeof p=="function"?p({x:u,y:f}):{x:u,y:f};u=m.x,f=m.y;var b=a.hasOwnProperty("x"),w=a.hasOwnProperty("y"),x=S,d=L,O=window;if(c){var g=He(r),R="clientHeight",E="clientWidth";if(g===Y(r)&&(g=pe(r),re(g).position!=="static"&&s==="absolute"&&(R="scrollHeight",E="scrollWidth")),g=g,n===L||(n===S||n===U)&&i===Fe){d=H;var $=v&&g===O&&O.visualViewport?O.visualViewport.height:g[R];f-=$-o.height,f*=l?1:-1}if(n===S||(n===L||n===H)&&i===Fe){x=U;var A=v&&g===O&&O.visualViewport?O.visualViewport.width:g[E];u-=A-o.width,u*=l?1:-1}}var M=Object.assign({position:s},c&&Fr),j=p===!0?Nr({x:u,y:f}):{x:u,y:f};if(u=j.x,f=j.y,l){var B;return Object.assign({},M,(B={},B[d]=w?"0":"",B[x]=b?"0":"",B.transform=(O.devicePixelRatio||1)<=1?"translate("+u+"px, "+f+"px)":"translate3d("+u+"px, "+f+"px, 0)",B))}return Object.assign({},M,(e={},e[d]=w?f+"px":"",e[x]=b?u+"px":"",e.transform="",e))}function Ir(t){var e=t.state,r=t.options,o=r.gpuAcceleration,n=o===void 0?!0:o,i=r.adaptive,a=i===void 0?!0:i,s=r.roundOffsets,l=s===void 0?!0:s,c={placement:Z(e.placement),variation:xe(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,At(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,At(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Hr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ir,data:{}},Ye={passive:!0};function Ur(t){var e=t.state,r=t.instance,o=t.options,n=o.scroll,i=n===void 0?!0:n,a=o.resize,s=a===void 0?!0:a,l=Y(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&c.forEach(function(p){p.addEventListener("scroll",r.update,Ye)}),s&&l.addEventListener("resize",r.update,Ye),function(){i&&c.forEach(function(p){p.removeEventListener("scroll",r.update,Ye)}),s&&l.removeEventListener("resize",r.update,Ye)}}var Vr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ur,data:{}},zr={left:"right",right:"left",bottom:"top",top:"bottom"};function Je(t){return t.replace(/left|right|bottom|top/g,function(e){return zr[e]})}var qr={start:"end",end:"start"};function $t(t){return t.replace(/start|end/g,function(e){return qr[e]})}function ft(t){var e=Y(t),r=e.pageXOffset,o=e.pageYOffset;return{scrollLeft:r,scrollTop:o}}function dt(t){return we(pe(t)).left+ft(t).scrollLeft}function Xr(t){var e=Y(t),r=pe(t),o=e.visualViewport,n=r.clientWidth,i=r.clientHeight,a=0,s=0;return o&&(n=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=o.offsetLeft,s=o.offsetTop)),{width:n,height:i,x:a+dt(t),y:s}}function Yr(t){var e,r=pe(t),o=ft(t),n=(e=t.ownerDocument)==null?void 0:e.body,i=de(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),a=de(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+dt(t),l=-o.scrollTop;return re(n||r).direction==="rtl"&&(s+=de(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}function vt(t){var e=re(t),r=e.overflow,o=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function zt(t){return["html","body","#document"].indexOf(_(t))>=0?t.ownerDocument.body:I(t)&&vt(t)?t:zt(_e(t))}function We(t,e){var r;e===void 0&&(e=[]);var o=zt(t),n=o===((r=t.ownerDocument)==null?void 0:r.body),i=Y(o),a=n?[i].concat(i.visualViewport||[],vt(o)?o:[]):o,s=e.concat(a);return n?s:s.concat(We(_e(a)))}function it(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Gr(t){var e=we(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function Mt(t,e){return e===Ft?it(Xr(t)):ye(e)?Gr(e):it(Yr(pe(t)))}function Kr(t){var e=We(_e(t)),r=["absolute","fixed"].indexOf(re(t).position)>=0,o=r&&I(t)?He(t):t;return ye(o)?e.filter(function(n){return ye(n)&&It(n,o)&&_(n)!=="body"}):[]}function Jr(t,e,r){var o=e==="clippingParents"?Kr(t):[].concat(e),n=[].concat(o,[r]),i=n[0],a=n.reduce(function(s,l){var c=Mt(t,l);return s.top=de(c.top,s.top),s.right=Qe(c.right,s.right),s.bottom=Qe(c.bottom,s.bottom),s.left=de(c.left,s.left),s},Mt(t,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function qt(t){var e=t.reference,r=t.element,o=t.placement,n=o?Z(o):null,i=o?xe(o):null,a=e.x+e.width/2-r.width/2,s=e.y+e.height/2-r.height/2,l;switch(n){case L:l={x:a,y:e.y-r.height};break;case H:l={x:a,y:e.y+e.height};break;case U:l={x:e.x+e.width,y:s};break;case S:l={x:e.x-r.width,y:s};break;default:l={x:e.x,y:e.y}}var c=n?ut(n):null;if(c!=null){var p=c==="y"?"height":"width";switch(i){case ge:l[c]=l[c]-(e[p]/2-r[p]/2);break;case Fe:l[c]=l[c]+(e[p]/2-r[p]/2);break}}return l}function Ne(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=o===void 0?t.placement:o,i=r.boundary,a=i===void 0?hr:i,s=r.rootBoundary,l=s===void 0?Ft:s,c=r.elementContext,p=c===void 0?Le:c,v=r.altBoundary,P=v===void 0?!1:v,u=r.padding,y=u===void 0?0:u,f=Ut(typeof y!="number"?y:Vt(y,Ie)),m=p===Le?gr:Le,b=t.rects.popper,w=t.elements[P?m:p],x=Jr(ye(w)?w:w.contextElement||pe(t.elements.popper),a,l),d=we(t.elements.reference),O=qt({reference:d,element:b,strategy:"absolute",placement:n}),g=it(Object.assign({},b,O)),R=p===Le?g:d,E={top:x.top-R.top+f.top,bottom:R.bottom-x.bottom+f.bottom,left:x.left-R.left+f.left,right:R.right-x.right+f.right},$=t.modifiersData.offset;if(p===Le&&$){var A=$[n];Object.keys(E).forEach(function(M){var j=[U,H].indexOf(M)>=0?1:-1,B=[L,H].indexOf(M)>=0?"y":"x";E[M]+=A[B]*j})}return E}function Qr(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,l=r.allowedAutoPlacements,c=l===void 0?Nt:l,p=xe(o),v=p?s?Et:Et.filter(function(y){return xe(y)===p}):Ie,P=v.filter(function(y){return c.indexOf(y)>=0});P.length===0&&(P=v);var u=P.reduce(function(y,f){return y[f]=Ne(t,{placement:f,boundary:n,rootBoundary:i,padding:a})[Z(f)],y},{});return Object.keys(u).sort(function(y,f){return u[y]-u[f]})}function Zr(t){if(Z(t)===pt)return[];var e=Je(t);return[$t(t),e,$t(e)]}function _r(t){var e=t.state,r=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var n=r.mainAxis,i=n===void 0?!0:n,a=r.altAxis,s=a===void 0?!0:a,l=r.fallbackPlacements,c=r.padding,p=r.boundary,v=r.rootBoundary,P=r.altBoundary,u=r.flipVariations,y=u===void 0?!0:u,f=r.allowedAutoPlacements,m=e.options.placement,b=Z(m),w=b===m,x=l||(w||!y?[Je(m)]:Zr(m)),d=[m].concat(x).reduce(function(K,J){return K.concat(Z(J)===pt?Qr(e,{placement:J,boundary:p,rootBoundary:v,padding:c,flipVariations:y,allowedAutoPlacements:f}):J)},[]),O=e.rects.reference,g=e.rects.popper,R=new Map,E=!0,$=d[0],A=0;A<d.length;A++){var M=d[A],j=Z(M),B=xe(M)===ge,ee=[L,H].indexOf(j)>=0,W=ee?"width":"height",D=Ne(e,{placement:M,boundary:p,rootBoundary:v,altBoundary:P,padding:c}),F=ee?B?U:S:B?H:L;O[W]>g[W]&&(F=Je(F));var ve=Je(F),G=[];if(i&&G.push(D[j]<=0),s&&G.push(D[F]<=0,D[ve]<=0),G.every(function(K){return K})){$=M,E=!1;break}R.set(M,G)}if(E)for(var oe=y?3:1,Oe=function(J){var Q=d.find(function(ne){var N=R.get(ne);if(N)return N.slice(0,J).every(function(ie){return ie})});if(Q)return $=Q,"break"},V=oe;V>0;V--){var le=Oe(V);if(le==="break")break}e.placement!==$&&(e.modifiersData[o]._skip=!0,e.placement=$,e.reset=!0)}}var eo={name:"flip",enabled:!0,phase:"main",fn:_r,requiresIfExists:["offset"],data:{_skip:!1}};function Dt(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function Bt(t){return[L,U,H,S].some(function(e){return t[e]>=0})}function to(t){var e=t.state,r=t.name,o=e.rects.reference,n=e.rects.popper,i=e.modifiersData.preventOverflow,a=Ne(e,{elementContext:"reference"}),s=Ne(e,{altBoundary:!0}),l=Dt(a,o),c=Dt(s,n,i),p=Bt(l),v=Bt(c);e.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:v},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":v})}var ro={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:to};function oo(t,e,r){var o=Z(t),n=[S,L].indexOf(o)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*n,[S,U].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}function no(t){var e=t.state,r=t.options,o=t.name,n=r.offset,i=n===void 0?[0,0]:n,a=Nt.reduce(function(p,v){return p[v]=oo(v,e.rects,i),p},{}),s=a[e.placement],l=s.x,c=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[o]=a}var io={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:no};function ao(t){var e=t.state,r=t.name;e.modifiersData[r]=qt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var so={name:"popperOffsets",enabled:!0,phase:"read",fn:ao,data:{}};function po(t){return t==="x"?"y":"x"}function lo(t){var e=t.state,r=t.options,o=t.name,n=r.mainAxis,i=n===void 0?!0:n,a=r.altAxis,s=a===void 0?!1:a,l=r.boundary,c=r.rootBoundary,p=r.altBoundary,v=r.padding,P=r.tether,u=P===void 0?!0:P,y=r.tetherOffset,f=y===void 0?0:y,m=Ne(e,{boundary:l,rootBoundary:c,padding:v,altBoundary:p}),b=Z(e.placement),w=xe(e.placement),x=!w,d=ut(b),O=po(d),g=e.modifiersData.popperOffsets,R=e.rects.reference,E=e.rects.popper,$=typeof f=="function"?f(Object.assign({},e.rects,{placement:e.placement})):f,A=typeof $=="number"?{mainAxis:$,altAxis:$}:Object.assign({mainAxis:0,altAxis:0},$),M=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,j={x:0,y:0};if(!!g){if(i){var B,ee=d==="y"?L:S,W=d==="y"?H:U,D=d==="y"?"height":"width",F=g[d],ve=F+m[ee],G=F-m[W],oe=u?-E[D]/2:0,Oe=w===ge?R[D]:E[D],V=w===ge?-E[D]:-R[D],le=e.elements.arrow,K=u&&le?ct(le):{width:0,height:0},J=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ht(),Q=J[ee],ne=J[W],N=je(0,R[D],K[D]),ie=x?R[D]/2-oe-N-Q-A.mainAxis:Oe-N-Q-A.mainAxis,te=x?-R[D]/2+oe+N+ne+A.mainAxis:V+N+ne+A.mainAxis,me=e.elements.arrow&&He(e.elements.arrow),et=me?d==="y"?me.clientTop||0:me.clientLeft||0:0,Pe=(B=M==null?void 0:M[d])!=null?B:0,z=F+ie-Pe-et,Te=F+te-Pe,ae=je(u?Qe(ve,z):ve,F,u?de(G,Te):G);g[d]=ae,j[d]=ae-F}if(s){var ce,Ue=d==="x"?L:S,he=d==="x"?H:U,q=g[O],ue=O==="y"?"height":"width",Re=q+m[Ue],Ve=q-m[he],Ee=[L,S].indexOf(b)!==-1,ze=(ce=M==null?void 0:M[O])!=null?ce:0,Ce=Ee?Re:q-R[ue]-E[ue]-ze+A.altAxis,Ae=Ee?q+R[ue]+E[ue]-ze-A.altAxis:Ve,$e=u&&Ee?kr(Ce,q,Ae):je(u?Ce:Re,q,u?Ae:Ve);g[O]=$e,j[O]=$e-q}e.modifiersData[o]=j}}var co={name:"preventOverflow",enabled:!0,phase:"main",fn:lo,requiresIfExists:["offset"]};function uo(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function fo(t){return t===Y(t)||!I(t)?ft(t):uo(t)}function vo(t){var e=t.getBoundingClientRect(),r=be(e.width)/t.offsetWidth||1,o=be(e.height)/t.offsetHeight||1;return r!==1||o!==1}function mo(t,e,r){r===void 0&&(r=!1);var o=I(e),n=I(e)&&vo(e),i=pe(e),a=we(t,n),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(o||!o&&!r)&&((_(e)!=="body"||vt(i))&&(s=fo(e)),I(e)?(l=we(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):i&&(l.x=dt(i))),{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function ho(t){var e=new Map,r=new Set,o=[];t.forEach(function(i){e.set(i.name,i)});function n(i){r.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!r.has(s)){var l=e.get(s);l&&n(l)}}),o.push(i)}return t.forEach(function(i){r.has(i.name)||n(i)}),o}function go(t){var e=ho(t);return Cr.reduce(function(r,o){return r.concat(e.filter(function(n){return n.phase===o}))},[])}function yo(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function bo(t){var e=t.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(e).map(function(r){return e[r]})}var kt={placement:"bottom",modifiers:[],strategy:"absolute"};function Lt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function wo(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,o=r===void 0?[]:r,n=e.defaultOptions,i=n===void 0?kt:n;return function(s,l,c){c===void 0&&(c=i);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},kt,i),modifiersData:{},elements:{reference:s,popper:l},attributes:{},styles:{}},v=[],P=!1,u={state:p,setOptions:function(b){var w=typeof b=="function"?b(p.options):b;f(),p.options=Object.assign({},i,p.options,w),p.scrollParents={reference:ye(s)?We(s):s.contextElement?We(s.contextElement):[],popper:We(l)};var x=go(bo([].concat(o,p.options.modifiers)));return p.orderedModifiers=x.filter(function(d){return d.enabled}),y(),u.update()},forceUpdate:function(){if(!P){var b=p.elements,w=b.reference,x=b.popper;if(!!Lt(w,x)){p.rects={reference:mo(w,He(x),p.options.strategy==="fixed"),popper:ct(x)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(A){return p.modifiersData[A.name]=Object.assign({},A.data)});for(var d=0;d<p.orderedModifiers.length;d++){if(p.reset===!0){p.reset=!1,d=-1;continue}var O=p.orderedModifiers[d],g=O.fn,R=O.options,E=R===void 0?{}:R,$=O.name;typeof g=="function"&&(p=g({state:p,options:E,name:$,instance:u})||p)}}}},update:yo(function(){return new Promise(function(m){u.forceUpdate(),m(p)})}),destroy:function(){f(),P=!0}};if(!Lt(s,l))return u;u.setOptions(c).then(function(m){!P&&c.onFirstUpdate&&c.onFirstUpdate(m)});function y(){p.orderedModifiers.forEach(function(m){var b=m.name,w=m.options,x=w===void 0?{}:w,d=m.effect;if(typeof d=="function"){var O=d({state:p,name:b,instance:u,options:x}),g=function(){};v.push(O||g)}})}function f(){v.forEach(function(m){return m()}),v=[]}return u}}var xo=[Vr,so,Hr,Mr,io,eo,co,Wr,ro],Oo=wo({defaultModifiers:xo});const Po=["anchorEl","children","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],To=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Ro(t,e){if(e==="ltr")return t;switch(t){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return t}}function at(t){return typeof t=="function"?t():t}const Eo={},Co=C.exports.forwardRef(function(e,r){const{anchorEl:o,children:n,direction:i,disablePortal:a,modifiers:s,open:l,placement:c,popperOptions:p,popperRef:v,TransitionProps:P}=e,u=st(e,Po),y=C.exports.useRef(null),f=Se(y,r),m=C.exports.useRef(null),b=Se(m,v),w=C.exports.useRef(b);Pt(()=>{w.current=b},[b]),C.exports.useImperativeHandle(v,()=>m.current,[]);const x=Ro(c,i),[d,O]=C.exports.useState(x);C.exports.useEffect(()=>{m.current&&m.current.forceUpdate()}),Pt(()=>{if(!o||!l)return;const R=A=>{O(A.placement)};at(o);let E=[{name:"preventOverflow",options:{altBoundary:a}},{name:"flip",options:{altBoundary:a}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:A})=>{R(A)}}];s!=null&&(E=E.concat(s)),p&&p.modifiers!=null&&(E=E.concat(p.modifiers));const $=Oo(at(o),y.current,T({placement:x},p,{modifiers:E}));return w.current($),()=>{$.destroy(),w.current(null)}},[o,a,s,l,p,x]);const g={placement:d};return P!==null&&(g.TransitionProps=P),fe("div",T({ref:f,role:"tooltip"},u,{children:typeof n=="function"?n(g):n}))}),Ao=C.exports.forwardRef(function(e,r){const{anchorEl:o,children:n,container:i,direction:a="ltr",disablePortal:s=!1,keepMounted:l=!1,modifiers:c,open:p,placement:v="bottom",popperOptions:P=Eo,popperRef:u,style:y,transition:f=!1}=e,m=st(e,To),[b,w]=C.exports.useState(!0),x=()=>{w(!1)},d=()=>{w(!0)};if(!l&&!p&&(!f||b))return null;const O=i||(o?nr(at(o)).body:void 0);return fe(ur,{disablePortal:s,container:O,children:fe(Co,T({anchorEl:o,direction:a,disablePortal:s,modifiers:c,ref:r,open:f?!b:p,placement:v,popperOptions:P,popperRef:u},m,{style:T({position:"fixed",top:0,left:0,display:!p&&l&&(!f||b)?"none":null},y),TransitionProps:f?{in:p,onEnter:x,onExited:d}:null,children:n}))})});var $o=Ao;const Mo=Ze($o,{name:"MuiPopper",slot:"Root",overridesResolver:(t,e)=>e.root})({}),Do=C.exports.forwardRef(function(e,r){const o=ir(),n=St({props:e,name:"MuiPopper"});return fe(Mo,T({direction:o==null?void 0:o.direction},n,{ref:r}))});var Xt=Do;function Bo(t){return sr("MuiTooltip",t)}const ko=ar("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);var se=ko;const Lo=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];function So(t){return Math.round(t*1e5)/1e5}const jo=t=>{const{classes:e,disableInteractive:r,arrow:o,touch:n,placement:i}=t,a={popper:["popper",!r&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",n&&"touch",`tooltipPlacement${jt(i.split("-")[0])}`],arrow:["arrow"]};return cr(a,Bo,e)},Wo=Ze(Xt,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.popper,!r.disableInteractive&&e.popperInteractive,r.arrow&&e.popperArrow,!r.open&&e.popperClose]}})(({theme:t,ownerState:e,open:r})=>T({zIndex:t.zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${se.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${se.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${se.arrow}`]:T({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${se.arrow}`]:T({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Fo=Ze("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.tooltip,r.touch&&e.touch,r.arrow&&e.tooltipArrow,e[`tooltipPlacement${jt(r.placement.split("-")[0])}`]]}})(({theme:t,ownerState:e})=>T({backgroundColor:Wt(t.palette.grey[700],.92),borderRadius:t.shape.borderRadius,color:t.palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${So(16/14)}em`,fontWeight:t.typography.fontWeightRegular},{[`.${se.popper}[data-popper-placement*="left"] &`]:T({transformOrigin:"right center"},e.isRtl?T({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):T({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${se.popper}[data-popper-placement*="right"] &`]:T({transformOrigin:"left center"},e.isRtl?T({marginRight:"14px"},e.touch&&{marginRight:"24px"}):T({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${se.popper}[data-popper-placement*="top"] &`]:T({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${se.popper}[data-popper-placement*="bottom"] &`]:T({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),No=Ze("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:Wt(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Ge=!1,nt=null;function Ke(t,e){return r=>{e&&e(r),t(r)}}const Io=C.exports.forwardRef(function(e,r){var o,n,i,a,s,l;const c=St({props:e,name:"MuiTooltip"}),{arrow:p=!1,children:v,components:P={},componentsProps:u={},describeChild:y=!1,disableFocusListener:f=!1,disableHoverListener:m=!1,disableInteractive:b=!1,disableTouchListener:w=!1,enterDelay:x=100,enterNextDelay:d=0,enterTouchDelay:O=700,followCursor:g=!1,id:R,leaveDelay:E=0,leaveTouchDelay:$=1500,onClose:A,onOpen:M,open:j,placement:B="bottom",PopperComponent:ee,PopperProps:W={},title:D,TransitionComponent:F=Rt,TransitionProps:ve}=c,G=st(c,Lo),oe=pr(),Oe=oe.direction==="rtl",[V,le]=C.exports.useState(),[K,J]=C.exports.useState(null),Q=C.exports.useRef(!1),ne=b||g,N=C.exports.useRef(),ie=C.exports.useRef(),te=C.exports.useRef(),me=C.exports.useRef(),[et,Pe]=fr({controlled:j,default:!1,name:"Tooltip",state:"open"});let z=et;const Te=dr(R),ae=C.exports.useRef(),ce=C.exports.useCallback(()=>{ae.current!==void 0&&(document.body.style.WebkitUserSelect=ae.current,ae.current=void 0),clearTimeout(me.current)},[]);C.exports.useEffect(()=>()=>{clearTimeout(N.current),clearTimeout(ie.current),clearTimeout(te.current),ce()},[ce]);const Ue=h=>{clearTimeout(nt),Ge=!0,Pe(!0),M&&!z&&M(h)},he=lr(h=>{clearTimeout(nt),nt=setTimeout(()=>{Ge=!1},800+E),Pe(!1),A&&z&&A(h),clearTimeout(N.current),N.current=setTimeout(()=>{Q.current=!1},oe.transitions.duration.shortest)}),q=h=>{Q.current&&h.type!=="touchstart"||(V&&V.removeAttribute("title"),clearTimeout(ie.current),clearTimeout(te.current),x||Ge&&d?ie.current=setTimeout(()=>{Ue(h)},Ge?d:x):Ue(h))},ue=h=>{clearTimeout(ie.current),clearTimeout(te.current),te.current=setTimeout(()=>{he(h)},E)},{isFocusVisibleRef:Re,onBlur:Ve,onFocus:Ee,ref:ze}=vr(),[,Ce]=C.exports.useState(!1),Ae=h=>{Ve(h),Re.current===!1&&(Ce(!1),ue(h))},$e=h=>{V||le(h.currentTarget),Ee(h),Re.current===!0&&(Ce(!0),q(h))},mt=h=>{Q.current=!0;const k=v.props;k.onTouchStart&&k.onTouchStart(h)},ht=q,gt=ue,Yt=h=>{mt(h),clearTimeout(te.current),clearTimeout(N.current),ce(),ae.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",me.current=setTimeout(()=>{document.body.style.WebkitUserSelect=ae.current,q(h)},O)},Gt=h=>{v.props.onTouchEnd&&v.props.onTouchEnd(h),ce(),clearTimeout(te.current),te.current=setTimeout(()=>{he(h)},$)};C.exports.useEffect(()=>{if(!z)return;function h(k){(k.key==="Escape"||k.key==="Esc")&&he(k)}return document.addEventListener("keydown",h),()=>{document.removeEventListener("keydown",h)}},[he,z]);const Kt=Se(le,r),Jt=Se(ze,Kt),Qt=Se(v.ref,Jt);D===""&&(z=!1);const Me=C.exports.useRef({x:0,y:0}),tt=C.exports.useRef(),Zt=h=>{const k=v.props;k.onMouseMove&&k.onMouseMove(h),Me.current={x:h.clientX,y:h.clientY},tt.current&&tt.current.update()},De={},rt=typeof D=="string";y?(De.title=!z&&rt&&!m?D:null,De["aria-describedby"]=z?Te:null):(De["aria-label"]=rt?D:null,De["aria-labelledby"]=z&&!rt?Te:null);const X=T({},De,G,v.props,{className:qe(G.className,v.props.className),onTouchStart:mt,ref:Qt},g?{onMouseMove:Zt}:{}),Be={};w||(X.onTouchStart=Yt,X.onTouchEnd=Gt),m||(X.onMouseOver=Ke(ht,X.onMouseOver),X.onMouseLeave=Ke(gt,X.onMouseLeave),ne||(Be.onMouseOver=ht,Be.onMouseLeave=gt)),f||(X.onFocus=Ke($e,X.onFocus),X.onBlur=Ke(Ae,X.onBlur),ne||(Be.onFocus=$e,Be.onBlur=Ae));const _t=C.exports.useMemo(()=>{var h;let k=[{name:"arrow",enabled:Boolean(K),options:{element:K,padding:4}}];return(h=W.popperOptions)!=null&&h.modifiers&&(k=k.concat(W.popperOptions.modifiers)),T({},W.popperOptions,{modifiers:k})},[K,W]),ke=T({},c,{isRtl:Oe,arrow:p,disableInteractive:ne,placement:B,PopperComponentProp:ee,touch:Q.current}),ot=jo(ke),yt=(o=P.Popper)!=null?o:Wo,bt=(n=(i=P.Transition)!=null?i:F)!=null?n:Rt,wt=(a=P.Tooltip)!=null?a:Fo,xt=(s=P.Arrow)!=null?s:No,er=Xe(yt,T({},W,u.popper),ke),tr=Xe(bt,T({},ve,u.transition),ke),rr=Xe(wt,T({},u.tooltip),ke),or=Xe(xt,T({},u.arrow),ke);return Tt(C.exports.Fragment,{children:[C.exports.cloneElement(v,X),fe(yt,T({as:ee!=null?ee:Xt,placement:B,anchorEl:g?{getBoundingClientRect:()=>({top:Me.current.y,left:Me.current.x,right:Me.current.x,bottom:Me.current.y,width:0,height:0})}:V,popperRef:tt,open:V?z:!1,id:Te,transition:!0},Be,er,{className:qe(ot.popper,W==null?void 0:W.className,(l=u.popper)==null?void 0:l.className),popperOptions:_t,children:({TransitionProps:h})=>{var k,Ot;return fe(bt,T({timeout:oe.transitions.duration.shorter},h,tr,{children:Tt(wt,T({},rr,{className:qe(ot.tooltip,(k=u.tooltip)==null?void 0:k.className),children:[D,p?fe(xt,T({},or,{className:qe(ot.arrow,(Ot=u.arrow)==null?void 0:Ot.className),ref:J})):null]}))}))}}))]})});var Yo=Io;export{Xt as P,Yo as T,Xe as a,se as t};
