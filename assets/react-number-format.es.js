import{K as R}from"./index.js";function b(){}function J(){return!0}function C(n){return!!(n||"").match(/\d/)}function $(n){return n==null}function U(n){return n.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function Q(n){switch(n){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function X(n,f,l){var e=Q(l),t=n.search(/[1-9]/);return t=t===-1?n.length:t,n.substring(0,t)+n.substring(t,n.length).replace(e,"$1"+f)}function j(n,f){f===void 0&&(f=!0);var l=n[0]==="-",e=l&&f;n=n.replace("-","");var t=n.split("."),r=t[0],i=t[1]||"";return{beforeDecimal:r,afterDecimal:i,hasNagation:l,addNegation:e}}function Y(n){if(!n)return n;var f=n[0]==="-";f&&(n=n.substring(1,n.length));var l=n.split("."),e=l[0].replace(/^0+/,"")||"0",t=l[1]||"";return(f?"-":"")+e+(t?"."+t:"")}function G(n,f,l){for(var e="",t=l?"0":"",r=0;r<=f-1;r++)e+=n[r]||t;return e}function k(n,f){return Array(f+1).join(n)}function ee(n){n+="";var f=n[0]==="-"?"-":"";f&&(n=n.substring(1));var l=n.split(/[eE]/g),e=l[0],t=l[1];if(t=Number(t),!t)return f+e;e=e.replace(".","");var r=1+t,i=e.length;return r<0?e="0."+k("0",Math.abs(r))+e:r>=i?e=e+k("0",r-i):e=(e.substring(0,r)||"0")+"."+e.substring(r),f+e}function te(n,f,l){if(["","-"].indexOf(n)!==-1)return n;var e=n.indexOf(".")!==-1&&f,t=j(n),r=t.beforeDecimal,i=t.afterDecimal,s=t.hasNagation,a=parseFloat("0."+(i||"0")),o=i.length<=f?"0."+i:a.toFixed(f),u=o.split("."),c=r.split("").reverse().reduce(function(h,d,S){return h.length>S?(Number(h[0])+Number(d)).toString()+h.substring(1,h.length):d+h},u[0]),p=G(u[1]||"",Math.min(f,i.length),l),v=s?"-":"",m=e?".":"";return""+v+c+m+p}function K(n,f){if(n.value=n.value,n!==null){if(n.createTextRange){var l=n.createTextRange();return l.move("character",f),l.select(),!0}return n.selectionStart||n.selectionStart===0?(n.focus(),n.setSelectionRange(f,f),!0):(n.focus(),!1)}}function re(n,f){for(var l=0,e=0,t=n.length,r=f.length;n[l]===f[l]&&l<t;)l++;for(;n[t-1-e]===f[r-1-e]&&r-e>l&&t-e>l;)e++;return{start:l,end:t-e}}function M(n,f,l){return Math.min(Math.max(n,f),l)}function L(n){return Math.max(n.selectionStart,n.selectionEnd)}function ae(n){return n||typeof navigator!="undefined"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function ie(n,f){var l={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&f.indexOf(e)===-1&&(l[e]=n[e]);return l}var oe={displayType:"input",decimalSeparator:".",thousandsGroupStyle:"thousand",fixedDecimalScale:!1,prefix:"",suffix:"",allowNegative:!0,allowEmptyFormatting:!1,allowLeadingZeros:!1,isNumericString:!1,type:"text",onValueChange:b,onChange:b,onKeyDown:b,onMouseUp:b,onFocus:b,onBlur:b,isAllowed:J},ne=function(n){function f(l){n.call(this,l);var e=l.defaultValue;this.validateProps();var t=this.formatValueProp(e);this.state={value:t,numAsString:this.removeFormatting(t),mounted:!1},this.selectionBeforeInput={selectionStart:0,selectionEnd:0},this.onChange=this.onChange.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this)}return n&&(f.__proto__=n),f.prototype=Object.create(n&&n.prototype),f.prototype.constructor=f,f.prototype.componentDidMount=function(){this.setState({mounted:!0})},f.prototype.componentDidUpdate=function(e){this.updateValueIfRequired(e)},f.prototype.componentWillUnmount=function(){clearTimeout(this.focusTimeout),clearTimeout(this.caretPositionTimeout)},f.prototype.updateValueIfRequired=function(e){var t=this,r=t.props,i=t.state,s=t.focusedElm,a=i.value,o=i.numAsString;if(o===void 0&&(o=""),e!==r){this.validateProps();var u=this.formatNumString(o),c=$(r.value)?u:this.formatValueProp(),p=this.removeFormatting(c),v=parseFloat(p),m=parseFloat(o);((!isNaN(v)||!isNaN(m))&&v!==m||u!==a||s===null&&c!==a)&&this.updateValue({formattedValue:c,numAsString:p,input:s,source:"prop",event:null})}},f.prototype.getFloatString=function(e){e===void 0&&(e="");var t=this.props,r=t.decimalScale,i=this.getSeparators(),s=i.decimalSeparator,a=this.getNumberRegex(!0),o=e[0]==="-";o&&(e=e.replace("-","")),s&&r===0&&(e=e.split(s)[0]),e=(e.match(a)||[]).join("").replace(s,".");var u=e.indexOf(".");return u!==-1&&(e=e.substring(0,u)+"."+e.substring(u+1,e.length).replace(new RegExp(U(s),"g"),"")),o&&(e="-"+e),e},f.prototype.getNumberRegex=function(e,t){var r=this.props,i=r.format,s=r.decimalScale,a=r.customNumerals,o=this.getSeparators(),u=o.decimalSeparator;return new RegExp("[0-9"+(a?a.join(""):"")+"]"+(u&&s!==0&&!t&&!i?"|"+U(u):""),e?"g":void 0)},f.prototype.getSeparators=function(){var e=this.props,t=e.decimalSeparator,r=this.props,i=r.thousandSeparator,s=r.allowedDecimalSeparators;return i===!0&&(i=","),s||(s=[t,"."]),{decimalSeparator:t,thousandSeparator:i,allowedDecimalSeparators:s}},f.prototype.getMaskAtIndex=function(e){var t=this.props,r=t.mask;return r===void 0&&(r=" "),typeof r=="string"?r:r[e]||" "},f.prototype.getValueObject=function(e,t){var r=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(r)?void 0:r}},f.prototype.validateProps=function(){var e=this.props,t=e.mask,r=this.getSeparators(),i=r.decimalSeparator,s=r.thousandSeparator;if(i===s)throw new Error(`
          Decimal separator can't be same as thousand separator.
          thousandSeparator: `+s+` (thousandSeparator = {true} is same as thousandSeparator = ",")
          decimalSeparator: `+i+` (default value for decimalSeparator is .)
       `);if(t){var a=t==="string"?t:t.toString();if(a.match(/\d/g))throw new Error(`
          Mask `+t+` should not contain numeric character;
        `)}},f.prototype.setPatchedCaretPosition=function(e,t,r){K(e,t),this.caretPositionTimeout=setTimeout(function(){e.value===r&&K(e,t)},0)},f.prototype.correctCaretPosition=function(e,t,r){var i=this.props,s=i.prefix,a=i.suffix,o=i.format;if(e==="")return 0;if(t=M(t,0,e.length),!o){var u=e[0]==="-";return M(t,s.length+(u?1:0),e.length-a.length)}if(typeof o=="function"||o[t]==="#"&&C(e[t])||o[t-1]==="#"&&C(e[t-1]))return t;var c=o.indexOf("#"),p=o.lastIndexOf("#");t=M(t,c,p+1);for(var v=o.substring(t,o.length).indexOf("#"),m=t,h=t+(v===-1?0:v);m>c&&(o[m]!=="#"||!C(e[m]));)m-=1;var d=!C(e[h])||r==="left"&&t!==c||t-m<h-t;return d?C(e[m])?m+1:m:h},f.prototype.getCaretPosition=function(e,t,r){var i=this.props,s=i.format,a=this.state.value,o=this.getNumberRegex(!0),u=(e.match(o)||[]).join(""),c=(t.match(o)||[]).join(""),p,v;for(p=0,v=0;v<r;v++){var m=e[v]||"",h=t[p]||"";if(!(!m.match(o)&&m!==h)&&!(m==="0"&&h.match(o)&&h!=="0"&&u.length!==c.length)){for(;m!==t[p]&&p<t.length;)p++;p++}}return typeof s=="string"&&!a&&(p=t.length),p=this.correctCaretPosition(t,p),p},f.prototype.removePrefixAndSuffix=function(e){var t=this.props,r=t.format,i=t.prefix,s=t.suffix;if(!r&&e){var a=e[0]==="-";a&&(e=e.substring(1,e.length)),e=i&&e.indexOf(i)===0?e.substring(i.length,e.length):e;var o=e.lastIndexOf(s);e=s&&o!==-1&&o===e.length-s.length?e.substring(0,o):e,a&&(e="-"+e)}return e},f.prototype.removePatternFormatting=function(e){for(var t=this.props,r=t.format,i=r.split("#").filter(function(v){return v!==""}),s=0,a="",o=0,u=i.length;o<=u;o++){var c=i[o]||"",p=o===u?e.length:e.indexOf(c,s);if(p===-1){a=e;break}else a+=e.substring(s,p),s=p+c.length}return(a.match(this.getNumberRegex(!0))||[]).join("")},f.prototype.removeFormatting=function(e){var t=this.props,r=t.format,i=t.removeFormatting;return e&&(r?typeof r=="string"?e=this.removePatternFormatting(e):typeof i=="function"?e=i(e):e=(e.match(this.getNumberRegex(!0))||[]).join(""):(e=this.removePrefixAndSuffix(e),e=this.getFloatString(e)),e)},f.prototype.formatWithPattern=function(e){for(var t=this.props,r=t.format,i=0,s=r.split(""),a=0,o=r.length;a<o;a++)r[a]==="#"&&(s[a]=e[i]||this.getMaskAtIndex(i),i+=1);return s.join("")},f.prototype.formatAsNumber=function(e){var t=this.props,r=t.decimalScale,i=t.fixedDecimalScale,s=t.prefix,a=t.suffix,o=t.allowNegative,u=t.thousandsGroupStyle,c=this.getSeparators(),p=c.thousandSeparator,v=c.decimalSeparator,m=e.indexOf(".")!==-1||r&&i,h=j(e,o),d=h.beforeDecimal,S=h.afterDecimal,x=h.addNegation;return r!==void 0&&(S=G(S,r,i)),p&&(d=X(d,p,u)),s&&(d=s+d),a&&(S=S+a),x&&(d="-"+d),e=d+(m&&v||"")+S,e},f.prototype.formatNumString=function(e){e===void 0&&(e="");var t=this.props,r=t.format,i=t.allowEmptyFormatting,s=t.customNumerals,a=e;if(s&&s.length===10){var o=new RegExp("["+s.join("")+"]","g");a=e.replace(o,function(u){return s.indexOf(u).toString()})}return e===""&&!i?a="":e==="-"&&!r?a="-":typeof r=="string"?a=this.formatWithPattern(a):typeof r=="function"?a=r(a):a=this.formatAsNumber(a),a},f.prototype.formatValueProp=function(e){var t=this.props,r=t.format,i=t.decimalScale,s=t.fixedDecimalScale,a=t.allowEmptyFormatting,o=this.props,u=o.value,c=o.isNumericString;u=$(u)?e:u;var p=!u&&u!==0;if(p&&a&&(u=""),p&&!a)return"";typeof u=="number"&&(u=ee(u),c=!0),u==="Infinity"&&c&&(u=""),c&&!r&&typeof i=="number"&&(u=te(u,i,s));var v=c?this.formatNumString(u):this.formatInput(u);return v},f.prototype.formatNegation=function(e){e===void 0&&(e="");var t=this.props,r=t.allowNegative,i=new RegExp("(-)"),s=new RegExp("(-)(.)*(-)"),a=i.test(e),o=s.test(e);return e=e.replace(/-/g,""),a&&!o&&r&&(e="-"+e),e},f.prototype.formatInput=function(e){e===void 0&&(e="");var t=this.props,r=t.format;return r||(e=this.removePrefixAndSuffix(e),e=this.formatNegation(e)),e=this.removeFormatting(e),this.formatNumString(e)},f.prototype.isCharacterAFormat=function(e,t){var r=this.props,i=r.format,s=r.prefix,a=r.suffix,o=r.decimalScale,u=r.fixedDecimalScale,c=this.getSeparators(),p=c.decimalSeparator;return!!(typeof i=="string"&&i[e]!=="#"||!i&&(e<s.length||e>=t.length-a.length||o&&u&&t[e]===p))},f.prototype.correctInputValue=function(e,t,r){var i=this,s=this.props,a=s.format,o=s.allowNegative,u=s.prefix,c=s.suffix,p=s.decimalScale,v=this.getSeparators(),m=v.allowedDecimalSeparators,h=v.decimalSeparator,d=this.state.numAsString||"",S=this.selectionBeforeInput,x=S.selectionStart,w=S.selectionEnd,D=re(t,r),g=D.start,y=D.end;if(!a&&g===y&&m.indexOf(r[x])!==-1){var A=p===0?"":h;return r.substr(0,x)+A+r.substr(x+1,r.length)}var V=a?0:u.length,T=t.length-(a?0:c.length);if(r.length>t.length||!r.length||g===y||x===0&&w===t.length||g===0&&y===t.length||x===V&&w===T)return r;var I=t.substr(g,y-g),Z=!![].concat(I).find(function(N,F){return i.isCharacterAFormat(F+g,t)});if(Z){var W=t.substr(g),E={},P=[];[].concat(W).forEach(function(N,F){i.isCharacterAFormat(F+g,t)?E[F]=N:F>I.length-1&&P.push(N)}),Object.keys(E).forEach(function(N){P.length>N?P.splice(N,0,E[N]):P.push(E[N])}),r=t.substr(0,g)+P.join("")}if(!a){var B=this.removeFormatting(r),O=j(B,o),_=O.beforeDecimal,q=O.afterDecimal,H=O.addNegation,z=e<r.indexOf(h)+1;if(B.length<d.length&&z&&_===""&&!parseFloat(q))return H?"-":""}return r},f.prototype.updateValue=function(e){var t=e.formattedValue,r=e.input,i=e.setCaretPosition;i===void 0&&(i=!0);var s=e.source,a=e.event,o=e.numAsString,u=e.caretPos,c=this.props,p=c.onValueChange,v=this.state,m=v.value;if(r){if(u===void 0&&i){var h=e.inputValue||r.value,d=L(r);r.value=t,u=this.getCaretPosition(h,t,d)}r.value=t,i&&this.setPatchedCaretPosition(r,u,t)}o===void 0&&(o=this.removeFormatting(t)),t!==m&&(this.setState({value:t,numAsString:o}),p(this.getValueObject(t,o),{event:a,source:s}))},f.prototype.onChange=function(e){var t=e.target,r=t.value,i=this,s=i.state,a=i.props,o=a.isAllowed,u=s.value||"",c=L(t);r=this.correctInputValue(c,u,r);var p=this.formatInput(r)||"",v=this.removeFormatting(p),m=this.getValueObject(p,v),h=o(m);h||(p=u),this.updateValue({formattedValue:p,numAsString:v,inputValue:r,input:t,event:e,source:"event"}),h&&a.onChange(e)},f.prototype.onBlur=function(e){var t=this,r=t.props,i=t.state,s=r.format,a=r.onBlur,o=r.allowLeadingZeros,u=i.numAsString,c=i.value;if(this.focusedElm=null,clearTimeout(this.focusTimeout),clearTimeout(this.caretPositionTimeout),!s){isNaN(parseFloat(u))&&(u=""),o||(u=Y(u));var p=this.formatNumString(u);if(p!==c){this.updateValue({formattedValue:p,numAsString:u,input:e.target,setCaretPosition:!1,event:e,source:"event"}),a(e);return}}a(e)},f.prototype.onKeyDown=function(e){var t=e.target,r=e.key,i=t.selectionStart,s=t.selectionEnd,a=t.value;a===void 0&&(a="");var o,u=this.props,c=u.decimalScale,p=u.fixedDecimalScale,v=u.prefix,m=u.suffix,h=u.format,d=u.onKeyDown,S=c!==void 0&&p,x=this.getNumberRegex(!1,S),w=new RegExp("-"),D=typeof h=="string";if(this.selectionBeforeInput={selectionStart:i,selectionEnd:s},r==="ArrowLeft"||r==="Backspace"?o=i-1:r==="ArrowRight"?o=i+1:r==="Delete"&&(o=i),o===void 0||i!==s){d(e);return}var g=o,y=D?h.indexOf("#"):v.length,A=D?h.lastIndexOf("#")+1:a.length-m.length;if(r==="ArrowLeft"||r==="ArrowRight"){var V=r==="ArrowLeft"?"left":"right";g=this.correctCaretPosition(a,o,V)}else if(r==="Delete"&&!x.test(a[o])&&!w.test(a[o]))for(;!x.test(a[g])&&g<A;)g++;else if(r==="Backspace"&&!x.test(a[o])){if(i<=y+1&&a[0]==="-"&&typeof h=="undefined"){var T=a.substring(1);this.updateValue({formattedValue:T,caretPos:g,input:t,event:e,source:"event"})}else if(!w.test(a[o])){for(;!x.test(a[g-1])&&g>y;)g--;g=this.correctCaretPosition(a,g,"left")}}(g!==o||o<y||o>A)&&(e.preventDefault(),this.setPatchedCaretPosition(t,g,a)),e.isUnitTestRun&&this.setPatchedCaretPosition(t,g,a),d(e)},f.prototype.onMouseUp=function(e){var t=e.target,r=t.selectionStart,i=t.selectionEnd,s=t.value;if(s===void 0&&(s=""),r===i){var a=this.correctCaretPosition(s,r);a!==r&&this.setPatchedCaretPosition(t,a,s)}this.props.onMouseUp(e)},f.prototype.onFocus=function(e){var t=this;e.persist(),this.focusedElm=e.target,this.focusTimeout=setTimeout(function(){var r=e.target,i=r.selectionStart,s=r.selectionEnd,a=r.value;a===void 0&&(a="");var o=t.correctCaretPosition(a,i);o!==i&&!(i===0&&s===a.length)&&t.setPatchedCaretPosition(r,o,a),t.props.onFocus(e)},0)},f.prototype.render=function(){var e=this.props,t=e.type,r=e.displayType,i=e.customInput,s=e.renderText,a=e.getInputRef,o=e.format;e.thousandSeparator,e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle,e.decimalScale,e.fixedDecimalScale,e.prefix,e.suffix,e.removeFormatting,e.mask,e.defaultValue,e.isNumericString,e.allowNegative,e.allowEmptyFormatting,e.allowLeadingZeros,e.onValueChange,e.isAllowed,e.customNumerals,e.onChange,e.onKeyDown,e.onMouseUp,e.onFocus,e.onBlur,e.value;var u=ie(e,["type","displayType","customInput","renderText","getInputRef","format","thousandSeparator","decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","decimalScale","fixedDecimalScale","prefix","suffix","removeFormatting","mask","defaultValue","isNumericString","allowNegative","allowEmptyFormatting","allowLeadingZeros","onValueChange","isAllowed","customNumerals","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value"]),c=u,p=this.state,v=p.value,m=p.mounted,h=m&&ae(o)?"numeric":void 0,d=Object.assign({inputMode:h},c,{type:t,value:v,onChange:this.onChange,onKeyDown:this.onKeyDown,onMouseUp:this.onMouseUp,onFocus:this.onFocus,onBlur:this.onBlur});if(r==="text")return s?s(v,c)||null:R.createElement("span",Object.assign({},c,{ref:a}),v);if(i){var S=i;return R.createElement(S,Object.assign({},d,{ref:a}))}return R.createElement("input",Object.assign({},d,{ref:a}))},f}(R.Component);ne.defaultProps=oe;export{ne as N};
