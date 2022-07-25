import{r as g,j as R,a as C,aN as A}from"./index.js";import{u as H}from"./yup.module.js";import{p as n}from"./index13.js";import{a as K}from"./TextField.js";var T=globalThis&&globalThis.__assign||function(){return T=Object.assign||function(t){for(var r,o=1,e=arguments.length;o<e;o++){r=arguments[o];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},T.apply(this,arguments)},N={onActivate:n.exports.func,onAddUndo:n.exports.func,onBeforeAddUndo:n.exports.func,onBeforeExecCommand:n.exports.func,onBeforeGetContent:n.exports.func,onBeforeRenderUI:n.exports.func,onBeforeSetContent:n.exports.func,onBeforePaste:n.exports.func,onBlur:n.exports.func,onChange:n.exports.func,onClearUndos:n.exports.func,onClick:n.exports.func,onContextMenu:n.exports.func,onCopy:n.exports.func,onCut:n.exports.func,onDblclick:n.exports.func,onDeactivate:n.exports.func,onDirty:n.exports.func,onDrag:n.exports.func,onDragDrop:n.exports.func,onDragEnd:n.exports.func,onDragGesture:n.exports.func,onDragOver:n.exports.func,onDrop:n.exports.func,onExecCommand:n.exports.func,onFocus:n.exports.func,onFocusIn:n.exports.func,onFocusOut:n.exports.func,onGetContent:n.exports.func,onHide:n.exports.func,onInit:n.exports.func,onKeyDown:n.exports.func,onKeyPress:n.exports.func,onKeyUp:n.exports.func,onLoadContent:n.exports.func,onMouseDown:n.exports.func,onMouseEnter:n.exports.func,onMouseLeave:n.exports.func,onMouseMove:n.exports.func,onMouseOut:n.exports.func,onMouseOver:n.exports.func,onMouseUp:n.exports.func,onNodeChange:n.exports.func,onObjectResizeStart:n.exports.func,onObjectResized:n.exports.func,onObjectSelected:n.exports.func,onPaste:n.exports.func,onPostProcess:n.exports.func,onPostRender:n.exports.func,onPreProcess:n.exports.func,onProgressState:n.exports.func,onRedo:n.exports.func,onRemove:n.exports.func,onReset:n.exports.func,onSaveContent:n.exports.func,onSelectionChange:n.exports.func,onSetAttrib:n.exports.func,onSetContent:n.exports.func,onShow:n.exports.func,onSubmit:n.exports.func,onUndo:n.exports.func,onVisualAid:n.exports.func,onSkinLoadError:n.exports.func,onThemeLoadError:n.exports.func,onModelLoadError:n.exports.func,onPluginLoadError:n.exports.func,onIconsLoadError:n.exports.func,onLanguageLoadError:n.exports.func},z=T({apiKey:n.exports.string,id:n.exports.string,inline:n.exports.bool,init:n.exports.object,initialValue:n.exports.string,onEditorChange:n.exports.func,value:n.exports.string,tagName:n.exports.string,cloudChannel:n.exports.string,plugins:n.exports.oneOfType([n.exports.string,n.exports.array]),toolbar:n.exports.oneOfType([n.exports.string,n.exports.array]),disabled:n.exports.bool,textareaName:n.exports.string,tinymceScriptSrc:n.exports.string,rollback:n.exports.oneOfType([n.exports.number,n.exports.oneOf([!1])]),scriptLoading:n.exports.shape({async:n.exports.bool,defer:n.exports.bool,delay:n.exports.number})},N),_=function(t){return typeof t=="function"},w=function(t){return t in N},B=function(t){return t.substr(2)},F=function(t,r,o,e,s,a,u){var i=Object.keys(s).filter(w),l=Object.keys(a).filter(w),f=i.filter(function(c){return a[c]===void 0}),p=l.filter(function(c){return s[c]===void 0});f.forEach(function(c){var d=B(c),v=u[d];o(d,v),delete u[d]}),p.forEach(function(c){var d=e(t,c),v=B(c);u[v]=d,r(v,d)})},U=function(t,r,o,e,s){return F(s,t.on.bind(t),t.off.bind(t),function(a,u){return function(i){var l;return(l=a(u))===null||l===void 0?void 0:l(i,t)}},r,o,e)},L=0,V=function(t){var r=Date.now(),o=Math.floor(Math.random()*1e9);return L++,t+"_"+o+L+String(r)},O=function(t){return t!==null&&(t.tagName.toLowerCase()==="textarea"||t.tagName.toLowerCase()==="input")},j=function(t){return typeof t=="undefined"||t===""?[]:Array.isArray(t)?t:t.split(" ")},$=function(t,r){return j(t).concat(j(r))},G=function(){return window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"},Y=function(t){if(!("isConnected"in Node.prototype)){for(var r=t,o=t.parentNode;o!=null;)r=o,o=r.parentNode;return r===t.ownerDocument}return t.isConnected},D=function(t,r){t!==void 0&&(t.mode!=null&&typeof t.mode=="object"&&typeof t.mode.set=="function"?t.mode.set(r):t.setMode(r))},M=function(){return{listeners:[],scriptId:V("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},q=function(){var t=M(),r=function(s,a,u,i,l,f){var p=a.createElement("script");p.referrerPolicy="origin",p.type="application/javascript",p.id=s,p.src=u,p.async=i,p.defer=l;var c=function(){p.removeEventListener("load",c),f()};p.addEventListener("load",c),a.head&&a.head.appendChild(p)},o=function(s,a,u,i,l,f){var p=function(){return r(t.scriptId,s,a,u,i,function(){t.listeners.forEach(function(c){return c()}),t.scriptLoaded=!0})};t.scriptLoaded?f():(t.listeners.push(f),t.scriptLoading||(t.scriptLoading=!0,l>0?setTimeout(p,l):p()))},e=function(){t=M()};return{load:o,reinitialize:e}},W=q(),J=function(){return typeof window!="undefined"?window:global},I=function(){var t=J();return t&&t.tinymce?t.tinymce:null},Q=globalThis&&globalThis.__extends||function(){var t=function(r,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,s){e.__proto__=s}||function(e,s){for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])},t(r,o)};return function(r,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");t(r,o);function e(){this.constructor=r}r.prototype=o===null?Object.create(o):(e.prototype=o.prototype,new e)}}(),x=globalThis&&globalThis.__assign||function(){return x=Object.assign||function(t){for(var r,o=1,e=arguments.length;o<e;o++){r=arguments[o];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},x.apply(this,arguments)},E=function(){var t,r,o;return!((o=(r=(t=I())===null||t===void 0?void 0:t.Env)===null||r===void 0?void 0:r.browser)===null||o===void 0)&&o.isIE()?"change keyup compositionend setcontent":"change input compositionend setcontent"},k=function(){return G()?"beforeinput SelectionChange":"SelectionChange"},X=function(t){Q(r,t);function r(o){var e=this,s,a,u;return e=t.call(this,o)||this,e.rollbackTimer=void 0,e.valueCursor=void 0,e.rollbackChange=function(){var i=e.editor,l=e.props.value;i&&l&&l!==e.currentContent&&i.undoManager.ignore(function(){if(i.setContent(l),e.valueCursor&&(!e.inline||i.hasFocus()))try{i.selection.moveToBookmark(e.valueCursor)}catch{}}),e.rollbackTimer=void 0},e.handleBeforeInput=function(i){if(e.props.value!==void 0&&e.props.value===e.currentContent&&e.editor&&(!e.inline||e.editor.hasFocus))try{e.valueCursor=e.editor.selection.getBookmark(3)}catch{}},e.handleBeforeInputSpecial=function(i){(i.key==="Enter"||i.key==="Backspace"||i.key==="Delete")&&e.handleBeforeInput(i)},e.handleEditorChange=function(i){var l=e.editor;if(l&&l.initialized){var f=l.getContent();e.props.value!==void 0&&e.props.value!==f&&e.props.rollback!==!1&&(e.rollbackTimer||(e.rollbackTimer=window.setTimeout(e.rollbackChange,typeof e.props.rollback=="number"?e.props.rollback:200))),f!==e.currentContent&&(e.currentContent=f,_(e.props.onEditorChange)&&e.props.onEditorChange(f,l))}},e.handleEditorChangeSpecial=function(i){(i.key==="Backspace"||i.key==="Delete")&&e.handleEditorChange(i)},e.initialise=function(i){var l,f,p;i===void 0&&(i=0);var c=e.elementRef.current;if(!!c){if(!Y(c)){if(i===0)setTimeout(function(){return e.initialise(1)},1);else if(i<100)setTimeout(function(){return e.initialise(i+1)},100);else throw new Error("tinymce can only be initialised when in a document");return}var d=I();if(!d)throw new Error("tinymce should have been loaded into global scope");var v=x(x({},e.props.init),{selector:void 0,target:c,readonly:e.props.disabled,inline:e.inline,plugins:$((l=e.props.init)===null||l===void 0?void 0:l.plugins,e.props.plugins),toolbar:(f=e.props.toolbar)!==null&&f!==void 0?f:(p=e.props.init)===null||p===void 0?void 0:p.toolbar,setup:function(h){e.editor=h,e.bindHandlers({}),e.inline&&!O(c)&&h.once("PostRender",function(y){h.setContent(e.getInitialValue(),{no_events:!0})}),e.props.init&&_(e.props.init.setup)&&e.props.init.setup(h)},init_instance_callback:function(h){var y,m,b=e.getInitialValue();e.currentContent=(y=e.currentContent)!==null&&y!==void 0?y:h.getContent(),e.currentContent!==b&&(e.currentContent=b,h.setContent(b),h.undoManager.clear(),h.undoManager.add(),h.setDirty(!1));var P=(m=e.props.disabled)!==null&&m!==void 0?m:!1;D(e.editor,P?"readonly":"design"),e.props.init&&_(e.props.init.init_instance_callback)&&e.props.init.init_instance_callback(h)}});e.inline||(c.style.visibility=""),O(c)&&(c.value=e.getInitialValue()),d.init(v)}},e.id=e.props.id||V("tiny-react"),e.elementRef=g.exports.createRef(),e.inline=(u=(s=e.props.inline)!==null&&s!==void 0?s:(a=e.props.init)===null||a===void 0?void 0:a.inline)!==null&&u!==void 0?u:!1,e.boundHandlers={},e}return r.prototype.componentDidUpdate=function(o){var e=this,s,a;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(o),this.editor.initialized)){if(this.currentContent=(s=this.currentContent)!==null&&s!==void 0?s:this.editor.getContent(),typeof this.props.initialValue=="string"&&this.props.initialValue!==o.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if(typeof this.props.value=="string"&&this.props.value!==this.currentContent){var u=this.editor;u.undoManager.transact(function(){var l;if(!e.inline||u.hasFocus())try{l=u.selection.getBookmark(3)}catch{}var f=e.valueCursor;if(u.setContent(e.props.value),!e.inline||u.hasFocus())for(var p=0,c=[l,f];p<c.length;p++){var d=c[p];if(d)try{u.selection.moveToBookmark(d),e.valueCursor=d;break}catch{}}})}if(this.props.disabled!==o.disabled){var i=(a=this.props.disabled)!==null&&a!==void 0?a:!1;D(this.editor,i?"readonly":"design")}}},r.prototype.componentDidMount=function(){var o,e,s,a,u,i;I()!==null?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&W.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),(e=(o=this.props.scriptLoading)===null||o===void 0?void 0:o.async)!==null&&e!==void 0?e:!1,(a=(s=this.props.scriptLoading)===null||s===void 0?void 0:s.defer)!==null&&a!==void 0?a:!1,(i=(u=this.props.scriptLoading)===null||u===void 0?void 0:u.delay)!==null&&i!==void 0?i:0,this.initialise)},r.prototype.componentWillUnmount=function(){var o=this,e=this.editor;e&&(e.off(E(),this.handleEditorChange),e.off(k(),this.handleBeforeInput),e.off("keypress",this.handleEditorChangeSpecial),e.off("keydown",this.handleBeforeInputSpecial),e.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach(function(s){e.off(s,o.boundHandlers[s])}),this.boundHandlers={},e.remove(),this.editor=void 0)},r.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},r.prototype.renderInline=function(){var o=this.props.tagName,e=o===void 0?"div":o;return g.exports.createElement(e,{ref:this.elementRef,id:this.id})},r.prototype.renderIframe=function(){return g.exports.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},r.prototype.getScriptSrc=function(){if(typeof this.props.tinymceScriptSrc=="string")return this.props.tinymceScriptSrc;var o=this.props.cloudChannel,e=this.props.apiKey?this.props.apiKey:"no-api-key";return"https://cdn.tiny.cloud/1/".concat(e,"/tinymce/").concat(o,"/tinymce.min.js")},r.prototype.getInitialValue=function(){return typeof this.props.initialValue=="string"?this.props.initialValue:typeof this.props.value=="string"?this.props.value:""},r.prototype.bindHandlers=function(o){var e=this;if(this.editor!==void 0){U(this.editor,o,this.props,this.boundHandlers,function(i){return e.props[i]});var s=function(i){return i.onEditorChange!==void 0||i.value!==void 0},a=s(o),u=s(this.props);!a&&u?(this.editor.on(E(),this.handleEditorChange),this.editor.on(k(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):a&&!u&&(this.editor.off(E(),this.handleEditorChange),this.editor.off(k(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},r.propTypes=z,r.defaultProps={cloudChannel:"6"},r}(g.exports.Component);const Z="_main_1vauh_1",ee="_editor_1vauh_6",ne="_helper_1vauh_11";var S={main:Z,editor:ee,helper:ne};const se=({name:t,height:r})=>{var p;const{setValue:o,getValues:e,formState:s}=H(),{errors:a}=s,u=g.exports.useMemo(()=>e(t),[t]),[i,l]=g.exports.useState(u||"");g.exports.useEffect(()=>{(()=>{o(t,i)})()},[i]);const f=`${location.protocol}//${location.host}/app`;return R("div",{className:S.main,children:[C("div",{className:a&&a[t]?S.editor:"",children:C(X,{apiKey:A,value:i,scriptLoading:{defer:!0},initialValue:u,textareaName:t,tinymceScriptSrc:`${f}/tinymce/tinymce.min.js`,onEditorChange:c=>l(c),init:{height:r!=null?r:250,placeholder:"Escribir algo...",menubar:"edit insert format table",language_url:`${f}/lang/es_419.js`,language:"es_419",plugins:["table","wordcount","insertdatetime","searchreplace","visualblocks","code","advlist","autolink","lists","link","charmap"],toolbar:"undo redo | formatselect | fontfamily fontsize | blocks | bold italic underline backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | ",font_size_formats:"8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"}})}),a&&a[t]&&C(K,{className:S.helper,error:!0,children:(p=a[t])==null?void 0:p.message})]})};export{se as T};
