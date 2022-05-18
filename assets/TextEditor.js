import{u as N}from"./array.js";import{T as P}from"./constants.js";import{r as g,a as R}from"./index.js";import{p as n}from"./index7.js";var k=globalThis&&globalThis.__assign||function(){return k=Object.assign||function(t){for(var r,o=1,e=arguments.length;o<e;o++){r=arguments[o];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},k.apply(this,arguments)},M={onActivate:n.exports.func,onAddUndo:n.exports.func,onBeforeAddUndo:n.exports.func,onBeforeExecCommand:n.exports.func,onBeforeGetContent:n.exports.func,onBeforeRenderUI:n.exports.func,onBeforeSetContent:n.exports.func,onBeforePaste:n.exports.func,onBlur:n.exports.func,onChange:n.exports.func,onClearUndos:n.exports.func,onClick:n.exports.func,onContextMenu:n.exports.func,onCopy:n.exports.func,onCut:n.exports.func,onDblclick:n.exports.func,onDeactivate:n.exports.func,onDirty:n.exports.func,onDrag:n.exports.func,onDragDrop:n.exports.func,onDragEnd:n.exports.func,onDragGesture:n.exports.func,onDragOver:n.exports.func,onDrop:n.exports.func,onExecCommand:n.exports.func,onFocus:n.exports.func,onFocusIn:n.exports.func,onFocusOut:n.exports.func,onGetContent:n.exports.func,onHide:n.exports.func,onInit:n.exports.func,onKeyDown:n.exports.func,onKeyPress:n.exports.func,onKeyUp:n.exports.func,onLoadContent:n.exports.func,onMouseDown:n.exports.func,onMouseEnter:n.exports.func,onMouseLeave:n.exports.func,onMouseMove:n.exports.func,onMouseOut:n.exports.func,onMouseOver:n.exports.func,onMouseUp:n.exports.func,onNodeChange:n.exports.func,onObjectResizeStart:n.exports.func,onObjectResized:n.exports.func,onObjectSelected:n.exports.func,onPaste:n.exports.func,onPostProcess:n.exports.func,onPostRender:n.exports.func,onPreProcess:n.exports.func,onProgressState:n.exports.func,onRedo:n.exports.func,onRemove:n.exports.func,onReset:n.exports.func,onSaveContent:n.exports.func,onSelectionChange:n.exports.func,onSetAttrib:n.exports.func,onSetContent:n.exports.func,onShow:n.exports.func,onSubmit:n.exports.func,onUndo:n.exports.func,onVisualAid:n.exports.func},A=k({apiKey:n.exports.string,id:n.exports.string,inline:n.exports.bool,init:n.exports.object,initialValue:n.exports.string,onEditorChange:n.exports.func,value:n.exports.string,tagName:n.exports.string,cloudChannel:n.exports.string,plugins:n.exports.oneOfType([n.exports.string,n.exports.array]),toolbar:n.exports.oneOfType([n.exports.string,n.exports.array]),disabled:n.exports.bool,textareaName:n.exports.string,tinymceScriptSrc:n.exports.string,rollback:n.exports.oneOfType([n.exports.number,n.exports.oneOf([!1])]),scriptLoading:n.exports.shape({async:n.exports.bool,defer:n.exports.bool,delay:n.exports.number})},M),C=function(t){return typeof t=="function"},T=function(t){return t in M},w=function(t){return t.substr(2)},H=function(t,r,o,e,s,a,l){var i=Object.keys(s).filter(T),u=Object.keys(a).filter(T),f=i.filter(function(c){return a[c]===void 0}),p=u.filter(function(c){return s[c]===void 0});f.forEach(function(c){var d=w(c),v=l[d];o(d,v),delete l[d]}),p.forEach(function(c){var d=e(t,c),v=w(c);l[v]=d,r(v,d)})},K=function(t,r,o,e,s){return H(s,t.on.bind(t),t.off.bind(t),function(a,l){return function(i){var u;return(u=a(l))===null||u===void 0?void 0:u(i,t)}},r,o,e)},I=0,V=function(t){var r=Date.now(),o=Math.floor(Math.random()*1e9);return I++,t+"_"+o+I+String(r)},B=function(t){return t!==null&&(t.tagName.toLowerCase()==="textarea"||t.tagName.toLowerCase()==="input")},O=function(t){return typeof t=="undefined"||t===""?[]:Array.isArray(t)?t:t.split(" ")},z=function(t,r){return O(t).concat(O(r))},F=function(){return window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"},U=function(t){if(!("isConnected"in Node.prototype)){for(var r=t,o=t.parentNode;o!=null;)r=o,o=r.parentNode;return r===t.ownerDocument}return t.isConnected},j=function(t,r){t!==void 0&&(t.mode!=null&&typeof t.mode=="object"&&typeof t.mode.set=="function"?t.mode.set(r):t.setMode(r))},D=function(){return{listeners:[],scriptId:V("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},$=function(){var t=D(),r=function(s,a,l,i,u,f){var p=a.createElement("script");p.referrerPolicy="origin",p.type="application/javascript",p.id=s,p.src=l,p.async=i,p.defer=u;var c=function(){p.removeEventListener("load",c),f()};p.addEventListener("load",c),a.head&&a.head.appendChild(p)},o=function(s,a,l,i,u,f){var p=function(){return r(t.scriptId,s,a,l,i,function(){t.listeners.forEach(function(c){return c()}),t.scriptLoaded=!0})};t.scriptLoaded?f():(t.listeners.push(f),t.scriptLoading||(t.scriptLoading=!0,u>0?setTimeout(p,u):p()))},e=function(){t=D()};return{load:o,reinitialize:e}},G=$(),Y=function(){return typeof window!="undefined"?window:global},S=function(){var t=Y();return t&&t.tinymce?t.tinymce:null},q=globalThis&&globalThis.__extends||function(){var t=function(r,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,s){e.__proto__=s}||function(e,s){for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])},t(r,o)};return function(r,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");t(r,o);function e(){this.constructor=r}r.prototype=o===null?Object.create(o):(e.prototype=o.prototype,new e)}}(),x=globalThis&&globalThis.__assign||function(){return x=Object.assign||function(t){for(var r,o=1,e=arguments.length;o<e;o++){r=arguments[o];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},x.apply(this,arguments)},_=function(){var t,r,o;return!((o=(r=(t=S())===null||t===void 0?void 0:t.Env)===null||r===void 0?void 0:r.browser)===null||o===void 0)&&o.isIE()?"change keyup compositionend setcontent":"change input compositionend setcontent"},E=function(){return F()?"beforeinput SelectionChange":"SelectionChange"},W=function(t){q(r,t);function r(o){var e=this,s,a,l;return e=t.call(this,o)||this,e.rollbackTimer=void 0,e.valueCursor=void 0,e.rollbackChange=function(){var i=e.editor,u=e.props.value;i&&u&&u!==e.currentContent&&i.undoManager.ignore(function(){if(i.setContent(u),e.valueCursor&&(!e.inline||i.hasFocus()))try{i.selection.moveToBookmark(e.valueCursor)}catch{}}),e.rollbackTimer=void 0},e.handleBeforeInput=function(i){if(e.props.value!==void 0&&e.props.value===e.currentContent&&e.editor&&(!e.inline||e.editor.hasFocus))try{e.valueCursor=e.editor.selection.getBookmark(3)}catch{}},e.handleBeforeInputSpecial=function(i){(i.key==="Enter"||i.key==="Backspace"||i.key==="Delete")&&e.handleBeforeInput(i)},e.handleEditorChange=function(i){var u=e.editor;if(u&&u.initialized){var f=u.getContent();e.props.value!==void 0&&e.props.value!==f&&e.props.rollback!==!1&&(e.rollbackTimer||(e.rollbackTimer=window.setTimeout(e.rollbackChange,typeof e.props.rollback=="number"?e.props.rollback:200))),f!==e.currentContent&&(e.currentContent=f,C(e.props.onEditorChange)&&e.props.onEditorChange(f,u))}},e.handleEditorChangeSpecial=function(i){(i.key==="Backspace"||i.key==="Delete")&&e.handleEditorChange(i)},e.initialise=function(i){var u,f,p;i===void 0&&(i=0);var c=e.elementRef.current;if(!!c){if(!U(c)){if(i===0)setTimeout(function(){return e.initialise(1)},1);else if(i<100)setTimeout(function(){return e.initialise(i+1)},100);else throw new Error("tinymce can only be initialised when in a document");return}var d=S();if(!d)throw new Error("tinymce should have been loaded into global scope");var v=x(x({},e.props.init),{selector:void 0,target:c,readonly:e.props.disabled,inline:e.inline,plugins:z((u=e.props.init)===null||u===void 0?void 0:u.plugins,e.props.plugins),toolbar:(f=e.props.toolbar)!==null&&f!==void 0?f:(p=e.props.init)===null||p===void 0?void 0:p.toolbar,setup:function(h){e.editor=h,e.bindHandlers({}),e.inline&&!B(c)&&h.once("PostRender",function(y){h.setContent(e.getInitialValue(),{no_events:!0})}),e.props.init&&C(e.props.init.setup)&&e.props.init.setup(h)},init_instance_callback:function(h){var y,m,b=e.getInitialValue();e.currentContent=(y=e.currentContent)!==null&&y!==void 0?y:h.getContent(),e.currentContent!==b&&(e.currentContent=b,h.setContent(b),h.undoManager.clear(),h.undoManager.add(),h.setDirty(!1));var L=(m=e.props.disabled)!==null&&m!==void 0?m:!1;j(e.editor,L?"readonly":"design"),e.props.init&&C(e.props.init.init_instance_callback)&&e.props.init.init_instance_callback(h)}});e.inline||(c.style.visibility=""),B(c)&&(c.value=e.getInitialValue()),d.init(v)}},e.id=e.props.id||V("tiny-react"),e.elementRef=g.exports.createRef(),e.inline=(l=(s=e.props.inline)!==null&&s!==void 0?s:(a=e.props.init)===null||a===void 0?void 0:a.inline)!==null&&l!==void 0?l:!1,e.boundHandlers={},e}return r.prototype.componentDidUpdate=function(o){var e=this,s,a;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(o),this.editor.initialized)){if(this.currentContent=(s=this.currentContent)!==null&&s!==void 0?s:this.editor.getContent(),typeof this.props.initialValue=="string"&&this.props.initialValue!==o.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if(typeof this.props.value=="string"&&this.props.value!==this.currentContent){var l=this.editor;l.undoManager.transact(function(){var u;if(!e.inline||l.hasFocus())try{u=l.selection.getBookmark(3)}catch{}var f=e.valueCursor;if(l.setContent(e.props.value),!e.inline||l.hasFocus())for(var p=0,c=[u,f];p<c.length;p++){var d=c[p];if(d)try{l.selection.moveToBookmark(d),e.valueCursor=d;break}catch{}}})}if(this.props.disabled!==o.disabled){var i=(a=this.props.disabled)!==null&&a!==void 0?a:!1;j(this.editor,i?"readonly":"design")}}},r.prototype.componentDidMount=function(){var o,e,s,a,l,i;S()!==null?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&G.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),(e=(o=this.props.scriptLoading)===null||o===void 0?void 0:o.async)!==null&&e!==void 0?e:!1,(a=(s=this.props.scriptLoading)===null||s===void 0?void 0:s.defer)!==null&&a!==void 0?a:!1,(i=(l=this.props.scriptLoading)===null||l===void 0?void 0:l.delay)!==null&&i!==void 0?i:0,this.initialise)},r.prototype.componentWillUnmount=function(){var o=this,e=this.editor;e&&(e.off(_(),this.handleEditorChange),e.off(E(),this.handleBeforeInput),e.off("keypress",this.handleEditorChangeSpecial),e.off("keydown",this.handleBeforeInputSpecial),e.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach(function(s){e.off(s,o.boundHandlers[s])}),this.boundHandlers={},e.remove(),this.editor=void 0)},r.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},r.prototype.renderInline=function(){var o=this.props.tagName,e=o===void 0?"div":o;return g.exports.createElement(e,{ref:this.elementRef,id:this.id})},r.prototype.renderIframe=function(){return g.exports.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},r.prototype.getScriptSrc=function(){if(typeof this.props.tinymceScriptSrc=="string")return this.props.tinymceScriptSrc;var o=this.props.cloudChannel,e=this.props.apiKey?this.props.apiKey:"no-api-key";return"https://cdn.tiny.cloud/1/".concat(e,"/tinymce/").concat(o,"/tinymce.min.js")},r.prototype.getInitialValue=function(){return typeof this.props.initialValue=="string"?this.props.initialValue:typeof this.props.value=="string"?this.props.value:""},r.prototype.bindHandlers=function(o){var e=this;if(this.editor!==void 0){K(this.editor,o,this.props,this.boundHandlers,function(i){return e.props[i]});var s=function(i){return i.onEditorChange!==void 0||i.value!==void 0},a=s(o),l=s(this.props);!a&&l?(this.editor.on(_(),this.handleEditorChange),this.editor.on(E(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):a&&!l&&(this.editor.off(_(),this.handleEditorChange),this.editor.off(E(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},r.propTypes=A,r.defaultProps={cloudChannel:"6"},r}(g.exports.Component);const ee=({name:t,height:r})=>{const{setValue:o,getValues:e}=N(),s=g.exports.useMemo(()=>e(t),[t]),[a,l]=g.exports.useState(s||"");g.exports.useEffect(()=>{(()=>{o(t,a)})()},[a]);const i=`${location.protocol}//${location.host}/app`;return R(W,{apiKey:P,value:a,scriptLoading:{defer:!0},initialValue:s,textareaName:t,tinymceScriptSrc:`${i}/tinymce/tinymce.min.js`,onEditorChange:u=>l(u),init:{height:r!=null?r:250,placeholder:"Escribir algo...",menubar:"edit insert format table",language_url:`${i}/lang/es_419.js`,language:"es_419",plugins:["table","wordcount","insertdatetime","searchreplace","visualblocks","code","advlist","autolink","lists","link","charmap"],toolbar:"undo redo | formatselect | fontfamily fontsize | blocks | bold italic underline backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | ",font_size_formats:"8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"}})};export{ee as T};
