import{r as we,$ as _e,ad as Pe}from"./index.js";var Se={exports:{}};/*! For license information please see index.js.LICENSE.txt */(function(de,xe){(function(ee,Z){de.exports=Z(we.exports,_e.exports)})(typeof self!="undefined"?self:Pe,function(ee,Z){return function(){var pe={655:function(p,g,y){y.r(g),y.d(g,{__extends:function(){return Y},__assign:function(){return B},__rest:function(){return L},__decorate:function(){return z},__param:function(){return K},__metadata:function(){return D},__awaiter:function(){return I},__generator:function(){return a},__createBinding:function(){return u},__exportStar:function(){return f},__values:function(){return b},__read:function(){return w},__spread:function(){return S},__spreadArrays:function(){return A},__spreadArray:function(){return x},__await:function(){return T},__asyncGenerator:function(){return v},__asyncDelegator:function(){return k},__asyncValues:function(){return O},__makeTemplateObject:function(){return W},__importStar:function(){return H},__importDefault:function(){return $},__classPrivateFieldGet:function(){return P},__classPrivateFieldSet:function(){return q}});var N=function(e,n){return N=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r])},N(e,n)};function Y(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}N(e,n),e.prototype=n===null?Object.create(n):(o.prototype=n.prototype,new o)}var B=function(){return B=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var r in n=arguments[o])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},B.apply(this,arguments)};function L(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]])}return o}function z(e,n,o,t){var r,s=arguments.length,i=s<3?n:t===null?t=Object.getOwnPropertyDescriptor(n,o):t;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,n,o,t);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(i=(s<3?r(i):s>3?r(n,o,i):r(n,o))||i);return s>3&&i&&Object.defineProperty(n,o,i),i}function K(e,n){return function(o,t){n(o,t,e)}}function D(e,n){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,n)}function I(e,n,o,t){return new(o||(o=Promise))(function(r,s){function i(_){try{c(t.next(_))}catch(l){s(l)}}function h(_){try{c(t.throw(_))}catch(l){s(l)}}function c(_){var l;_.done?r(_.value):(l=_.value,l instanceof o?l:new o(function(d){d(l)})).then(i,h)}c((t=t.apply(e,n||[])).next())})}function a(e,n){var o,t,r,s,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function h(c){return function(_){return function(l){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,t&&(r=2&l[0]?t.return:l[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,l[1])).done)return r;switch(t=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,t=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||l[0]!==6&&l[0]!==2)){i=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){i.label=l[1];break}if(l[0]===6&&i.label<r[1]){i.label=r[1],r=l;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(l);break}r[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(d){l=[6,d],t=0}finally{o=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([c,_])}}}var u=Object.create?function(e,n,o,t){t===void 0&&(t=o),Object.defineProperty(e,t,{enumerable:!0,get:function(){return n[o]}})}:function(e,n,o,t){t===void 0&&(t=o),e[t]=n[o]};function f(e,n){for(var o in e)o==="default"||Object.prototype.hasOwnProperty.call(n,o)||u(n,e,o)}function b(e){var n=typeof Symbol=="function"&&Symbol.iterator,o=n&&e[n],t=0;if(o)return o.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(e,n){var o=typeof Symbol=="function"&&e[Symbol.iterator];if(!o)return e;var t,r,s=o.call(e),i=[];try{for(;(n===void 0||n-- >0)&&!(t=s.next()).done;)i.push(t.value)}catch(h){r={error:h}}finally{try{t&&!t.done&&(o=s.return)&&o.call(s)}finally{if(r)throw r.error}}return i}function S(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(w(arguments[n]));return e}function A(){for(var e=0,n=0,o=arguments.length;n<o;n++)e+=arguments[n].length;var t=Array(e),r=0;for(n=0;n<o;n++)for(var s=arguments[n],i=0,h=s.length;i<h;i++,r++)t[r]=s[i];return t}function x(e,n,o){if(o||arguments.length===2)for(var t,r=0,s=n.length;r<s;r++)!t&&r in n||(t||(t=Array.prototype.slice.call(n,0,r)),t[r]=n[r]);return e.concat(t||Array.prototype.slice.call(n))}function T(e){return this instanceof T?(this.v=e,this):new T(e)}function v(e,n,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=o.apply(e,n||[]),s=[];return t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t;function i(d){r[d]&&(t[d]=function(C){return new Promise(function(m,j){s.push([d,C,m,j])>1||h(d,C)})})}function h(d,C){try{(m=r[d](C)).value instanceof T?Promise.resolve(m.value.v).then(c,_):l(s[0][2],m)}catch(j){l(s[0][3],j)}var m}function c(d){h("next",d)}function _(d){h("throw",d)}function l(d,C){d(C),s.shift(),s.length&&h(s[0][0],s[0][1])}}function k(e){var n,o;return n={},t("next"),t("throw",function(r){throw r}),t("return"),n[Symbol.iterator]=function(){return this},n;function t(r,s){n[r]=e[r]?function(i){return(o=!o)?{value:T(e[r](i)),done:r==="return"}:s?s(i):i}:s}}function O(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=e[Symbol.asyncIterator];return o?o.call(e):(e=b(e),n={},t("next"),t("throw"),t("return"),n[Symbol.asyncIterator]=function(){return this},n);function t(r){n[r]=e[r]&&function(s){return new Promise(function(i,h){(function(c,_,l,d){Promise.resolve(d).then(function(C){c({value:C,done:l})},_)})(i,h,(s=e[r](s)).done,s.value)})}}}function W(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var Q=Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n};function H(e){if(e&&e.__esModule)return e;var n={};if(e!=null)for(var o in e)o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)&&u(n,e,o);return Q(n,e),n}function $(e){return e&&e.__esModule?e:{default:e}}function P(e,n,o,t){if(o==="a"&&!t)throw new TypeError("Private accessor was defined without a getter");if(typeof n=="function"?e!==n||!t:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?t:o==="a"?t.call(e):t?t.value:n.get(e)}function q(e,n,o,t,r){if(t==="m")throw new TypeError("Private method is not writable");if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof n=="function"?e!==n||!r:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t==="a"?r.call(e,o):r?r.value=o:n.set(e,o),o}},156:function(p){p.exports=ee},111:function(p){p.exports=Z}},te={};function R(p){var g=te[p];if(g!==void 0)return g.exports;var y=te[p]={exports:{}};return pe[p](y,y.exports,R),y.exports}R.d=function(p,g){for(var y in g)R.o(g,y)&&!R.o(p,y)&&Object.defineProperty(p,y,{enumerable:!0,get:g[y]})},R.o=function(p,g){return Object.prototype.hasOwnProperty.call(p,g)},R.r=function(p){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})};var ne={};return function(){var p=ne;Object.defineProperty(p,"__esModule",{value:!0}),p.useReactToPrint=p.PrintContextConsumer=void 0;var g=R(655),y=R(156),N=R(111),Y=Object.prototype.hasOwnProperty.call(y,"createContext"),B=Object.prototype.hasOwnProperty.call(y,"useMemo")&&Object.prototype.hasOwnProperty.call(y,"useCallback"),L=Y?y.createContext({}):null;p.PrintContextConsumer=L?L.Consumer:function(){return null};var z={copyStyles:!0,pageStyle:"@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }",removeAfterPrint:!1,suppressErrors:!1},K=function(D){function I(){var a=D!==null&&D.apply(this,arguments)||this;return a.startPrint=function(u){var f=a.props,b=f.onAfterPrint,w=f.onPrintError,S=f.print,A=f.documentTitle;setTimeout(function(){var x,T;if(u.contentWindow){if(u.contentWindow.focus(),S)S(u).then(a.handleRemoveIframe).catch(function(O){w?w("print",O):a.logMessages(["An error was thrown by the specified `print` function"])});else if(u.contentWindow.print){var v=(T=(x=u.contentDocument)===null||x===void 0?void 0:x.title)!==null&&T!==void 0?T:"",k=u.ownerDocument.title;A&&(u.ownerDocument.title=A,u.contentDocument&&(u.contentDocument.title=A)),u.contentWindow.print(),A&&(u.ownerDocument.title=k,u.contentDocument&&(u.contentDocument.title=v))}else a.logMessages(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);b&&b(),a.handleRemoveIframe()}else a.logMessages(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"])},500)},a.triggerPrint=function(u){var f=a.props,b=f.onBeforePrint,w=f.onPrintError;if(b){var S=b();S&&typeof S.then=="function"?S.then(function(){a.startPrint(u)}).catch(function(A){w&&w("onBeforePrint",A)}):a.startPrint(u)}else a.startPrint(u)},a.handleClick=function(){var u=a.props,f=u.onBeforeGetContent,b=u.onPrintError;if(f){var w=f();w&&typeof w.then=="function"?w.then(a.handlePrint).catch(function(S){b&&b("onBeforeGetContent",S)}):a.handlePrint()}else a.handlePrint()},a.handlePrint=function(){var u=a.props,f=u.bodyClass,b=u.content,w=u.copyStyles,S=u.fonts,A=u.pageStyle,x=u.nonce,T=b();if(T!==void 0)if(T!==null){var v=document.createElement("iframe");v.style.position="absolute",v.style.top="-1000px",v.style.left="-1000px",v.id="printWindow",v.srcdoc="<!DOCTYPE html>";var k=(0,N.findDOMNode)(T);if(k){var O=k.cloneNode(!0),W=O instanceof Text,Q=document.querySelectorAll("link[rel='stylesheet']"),H=W?[]:O.querySelectorAll("img"),$=W?[]:O.querySelectorAll("video");a.linkTotal=Q.length+H.length+$.length,a.linksLoaded=[],a.linksErrored=[],a.fontsLoaded=[],a.fontsErrored=[];var P=function(q,e){e?a.linksLoaded.push(q):(a.logMessages(['"react-to-print" was unable to load a linked node. It may be invalid. "react-to-print" will continue attempting to print the page. The linked node that errored was:',q]),a.linksErrored.push(q)),a.linksLoaded.length+a.linksErrored.length+a.fontsLoaded.length+a.fontsErrored.length===a.linkTotal&&a.triggerPrint(v)};v.onload=function(){var q,e,n,o;v.onload=null;var t=v.contentDocument||((e=v.contentWindow)===null||e===void 0?void 0:e.document);if(t){t.body.appendChild(O),S&&(((n=v.contentDocument)===null||n===void 0?void 0:n.fonts)&&((o=v.contentWindow)===null||o===void 0?void 0:o.FontFace)?S.forEach(function(J){var X=new FontFace(J.family,J.source);v.contentDocument.fonts.add(X),X.loaded.then(function(V){a.fontsLoaded.push(V)}).catch(function(V){a.fontsErrored.push(X),a.logMessages(['"react-to-print" was unable to load a font. "react-to-print" will continue attempting to print the page. The font that failed to load is:',X,"The error from loading the font is:",V])})}):a.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API']));var r=typeof A=="function"?A():A;if(typeof r!="string")a.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof r,'". Styles from `pageStyle` will not be applied.')]);else{var s=t.createElement("style");x&&(s.setAttribute("nonce",x),t.head.setAttribute("nonce",x)),s.appendChild(t.createTextNode(r)),t.head.appendChild(s)}if(f&&(q=t.body.classList).add.apply(q,(0,g.__spreadArray)([],(0,g.__read)(f.split(" ")),!1)),!W){for(var i=W?[]:k.querySelectorAll("canvas"),h=t.querySelectorAll("canvas"),c=0;c<i.length;++c){var _=i[c],l=h[c].getContext("2d");l&&l.drawImage(_,0,0)}for(c=0;c<H.length;c++){var d=H[c],C=d.getAttribute("src");C?((j=new Image).onload=P.bind(null,d,!0),j.onerror=P.bind(null,d,!1),j.src=C):(a.logMessages(['"react-to-print" encountered an <img> tag with an empty "src" attribute. It will not attempt to pre-load it. The <img> is:',d],"warning"),P(d,!1))}for(c=0;c<$.length;c++){var m=$[c];m.preload="auto";var j,re=m.getAttribute("poster");re?((j=new Image).onload=P.bind(null,m,!0),j.onerror=P.bind(null,m,!1),j.src=re):m.readyState>=2?P(m,!0):(m.onloadeddata=P.bind(null,m,!0),m.onerror=P.bind(null,m,!1),m.onstalled=P.bind(null,m,!1))}var oe="input",ae=k.querySelectorAll(oe),he=t.querySelectorAll(oe);for(c=0;c<ae.length;c++)he[c].value=ae[c].value;var ie="input[type=checkbox],input[type=radio]",le=k.querySelectorAll(ie),ye=t.querySelectorAll(ie);for(c=0;c<le.length;c++)ye[c].checked=le[c].checked;var ce="select",se=k.querySelectorAll(ce),ve=t.querySelectorAll(ce);for(c=0;c<se.length;c++)ve[c].value=se[c].value}if(w)for(var ue=document.querySelectorAll("style, link[rel='stylesheet']"),be=(c=0,ue.length);c<be;++c){var M=ue[c];if(M.tagName.toLowerCase()==="style"){var E=t.createElement(M.tagName),U=M.sheet;if(U){var fe="";try{for(var me=U.cssRules.length,F=0;F<me;++F)typeof U.cssRules[F].cssText=="string"&&(fe+="".concat(U.cssRules[F].cssText,`\r
`))}catch{a.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.",M],"warning")}E.setAttribute("id","react-to-print-".concat(c)),x&&E.setAttribute("nonce",x),E.appendChild(t.createTextNode(fe)),t.head.appendChild(E)}}else if(M.getAttribute("href")){E=t.createElement(M.tagName),F=0;for(var ge=M.attributes.length;F<ge;++F){var G=M.attributes[F];G&&E.setAttribute(G.nodeName,G.nodeValue||"")}E.onload=P.bind(null,E,!0),E.onerror=P.bind(null,E,!1),x&&E.setAttribute("nonce",x),t.head.appendChild(E)}else a.logMessages(['"react-to-print" encountered a <link> tag with an empty "href" attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:',M],"warning"),P(M,!0)}}a.linkTotal!==0&&w||a.triggerPrint(v)},a.handleRemoveIframe(!0),document.body.appendChild(v)}else a.logMessages(['"react-to-print" could not locate the DOM node corresponding with the `content` prop'])}else a.logMessages(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.']);else a.logMessages(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"])},a.handleRemoveIframe=function(u){var f=a.props.removeAfterPrint;if(u||f){var b=document.getElementById("printWindow");b&&document.body.removeChild(b)}},a.logMessages=function(u,f){f===void 0&&(f="error"),a.props.suppressErrors||(f==="error"?console.error(u):f==="warning"&&console.warn(u))},a}return(0,g.__extends)(I,D),I.prototype.render=function(){var a=this.props,u=a.children,f=a.trigger;if(f)return y.cloneElement(f(),{onClick:this.handleClick});if(!L)return this.logMessages(['"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"']),null;var b={handlePrint:this.handleClick};return y.createElement(L.Provider,{value:b},u)},I.defaultProps=z,I}(y.Component);p.default=K,p.useReactToPrint=function(D){if(!B)return D.suppressErrors||console.error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'),function(){throw new Error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"')};var I=y.useMemo(function(){return new K((0,g.__assign)((0,g.__assign)({},z),D))},[D]);return y.useCallback(function(){return I.handleClick()},[I])}}(),ne}()})})(Se);export{Se as l};
