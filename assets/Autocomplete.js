import{r as b,t as Re,V as yt,_ as c,g as ut,h as ct,s as M,p as Me,u as dt,l as ft,n as gt,a as A,o as oe,E as qe,j as we}from"./index.js";import{i as je,f as Te,A as Pt}from"./TextField.js";import{i as De,o as at}from"./outlinedInputClasses.js";import{C as St}from"./Close.js";import{I as ht}from"./IconButton.js";import{P as mt}from"./Popper.js";import{P as bt}from"./Paper.js";import{u as $t}from"./useId.js";import{u as Je}from"./useControlled.js";import{C as At}from"./Chip.js";function lt(o){return typeof o.normalize!="undefined"?o.normalize("NFD").replace(/[\u0300-\u036f]/g,""):o}function Lt(o={}){const{ignoreAccents:n=!0,ignoreCase:p=!0,limit:x,matchFrom:P="any",stringify:h,trim:S=!1}=o;return(z,{inputValue:N,getOptionLabel:K})=>{let L=S?N.trim():N;p&&(L=L.toLowerCase()),n&&(L=lt(L));const W=z.filter(ne=>{let H=(h||K)(ne);return p&&(H=H.toLowerCase()),n&&(H=lt(H)),P==="start"?H.indexOf(L)===0:H.indexOf(L)>-1});return typeof x=="number"?W.slice(0,x):W}}function Qe(o,n){for(let p=0;p<o.length;p+=1)if(n(o[p]))return p;return-1}const kt=Lt(),st=5;function vt(o){const{autoComplete:n=!1,autoHighlight:p=!1,autoSelect:x=!1,blurOnSelect:P=!1,disabled:h,clearOnBlur:S=!o.freeSolo,clearOnEscape:z=!1,componentName:N="useAutocomplete",defaultValue:K=o.multiple?[]:null,disableClearable:L=!1,disableCloseOnSelect:W=!1,disabledItemsFocusable:ne=!1,disableListWrap:H=!1,filterOptions:Xe=kt,filterSelectedOptions:ie=!1,freeSolo:q=!1,getOptionDisabled:B,getOptionLabel:Ne=t=>{var e;return(e=t.label)!=null?e:t},isOptionEqualToValue:re=(t,e)=>t===e,groupBy:pe,handleHomeEndKeys:j=!o.freeSolo,id:Ye,includeInputInList:Fe=!1,inputValue:Oe,multiple:g=!1,onChange:ue,onClose:ce,onHighlightChange:Ce,onInputChange:G,onOpen:de,open:Ee,openOnFocus:Ze=!1,options:et,readOnly:J=!1,selectOnFocus:ze=!o.freeSolo,value:He}=o,k=$t(Ye);let U=Ne;U=t=>{const e=Ne(t);return typeof e!="string"?String(e):e};const fe=b.exports.useRef(!1),ge=b.exports.useRef(!0),O=b.exports.useRef(null),w=b.exports.useRef(null),[he,Ve]=b.exports.useState(null),[F,ae]=b.exports.useState(-1),ye=p?0:-1,T=b.exports.useRef(ye),[l,Pe]=Je({controlled:He,default:K,name:N}),[d,Q]=Je({controlled:Oe,default:"",name:N,state:"inputValue"}),[le,Se]=b.exports.useState(!1),se=b.exports.useCallback((t,e)=>{if(!(g?l.length<e.length:e!==null)&&!S)return;let a;if(g)a="";else if(e==null)a="";else{const u=U(e);a=typeof u=="string"?u:""}d!==a&&(Q(a),G&&G(t,a,"reset"))},[U,d,g,G,Q,S,l]),me=b.exports.useRef();b.exports.useEffect(()=>{const t=l!==me.current;me.current=l,!(le&&!t)&&(q&&!t||se(null,l))},[l,se,le,me,q]);const[X,$e]=Je({controlled:Ee,default:!1,name:N,state:"open"}),[We,Ae]=b.exports.useState(!0),Le=!g&&l!=null&&d===U(l),$=X&&!J,I=$?Xe(et.filter(t=>!(ie&&(g?l:[l]).some(e=>e!==null&&re(t,e)))),{inputValue:Le&&We?"":d,getOptionLabel:U}):[],be=X&&I.length>0&&!J,_=Re(t=>{t===-1?O.current.focus():he.querySelector(`[data-tag-index="${t}"]`).focus()});b.exports.useEffect(()=>{g&&F>l.length-1&&(ae(-1),_(-1))},[l,g,F,_]);function ke(t,e){if(!w.current||t===-1)return-1;let r=t;for(;;){if(e==="next"&&r===I.length||e==="previous"&&r===-1)return-1;const a=w.current.querySelector(`[data-option-index="${r}"]`),u=ne?!1:!a||a.disabled||a.getAttribute("aria-disabled")==="true";if(a&&!a.hasAttribute("tabindex")||u)r+=e==="next"?1:-1;else return r}}const Y=Re(({event:t,index:e,reason:r="auto"})=>{if(T.current=e,e===-1?O.current.removeAttribute("aria-activedescendant"):O.current.setAttribute("aria-activedescendant",`${k}-option-${e}`),Ce&&Ce(t,e===-1?null:I[e],r),!w.current)return;const a=w.current.querySelector('[role="option"].Mui-focused');a&&(a.classList.remove("Mui-focused"),a.classList.remove("Mui-focusVisible"));const u=w.current.parentElement.querySelector('[role="listbox"]');if(!u)return;if(e===-1){u.scrollTop=0;return}const y=w.current.querySelector(`[data-option-index="${e}"]`);if(!!y&&(y.classList.add("Mui-focused"),r==="keyboard"&&y.classList.add("Mui-focusVisible"),u.scrollHeight>u.clientHeight&&r!=="mouse")){const m=y,V=u.clientHeight+u.scrollTop,rt=m.offsetTop+m.offsetHeight;rt>V?u.scrollTop=rt-u.clientHeight:m.offsetTop-m.offsetHeight*(pe?1.3:0)<u.scrollTop&&(u.scrollTop=m.offsetTop-m.offsetHeight*(pe?1.3:0))}}),v=Re(({event:t,diff:e,direction:r="next",reason:a="auto"})=>{if(!$)return;const y=ke((()=>{const m=I.length-1;if(e==="reset")return ye;if(e==="start")return 0;if(e==="end")return m;const V=T.current+e;return V<0?V===-1&&Fe?-1:H&&T.current!==-1||Math.abs(e)>1?0:m:V>m?V===m+1&&Fe?-1:H||Math.abs(e)>1?m:0:V})(),r);if(Y({index:y,reason:a,event:t}),n&&e!=="reset")if(y===-1)O.current.value=d;else{const m=U(I[y]);O.current.value=m,m.toLowerCase().indexOf(d.toLowerCase())===0&&d.length>0&&O.current.setSelectionRange(d.length,m.length)}}),xe=b.exports.useCallback(()=>{if(!$)return;const t=g?l[0]:l;if(I.length===0||t==null){v({diff:"reset"});return}if(!!w.current){if(t!=null){const e=I[T.current];if(g&&e&&Qe(l,a=>re(e,a))!==-1)return;const r=Qe(I,a=>re(a,t));r===-1?v({diff:"reset"}):Y({index:r});return}if(T.current>=I.length-1){Y({index:I.length-1});return}Y({index:T.current})}},[I.length,g?!1:l,ie,v,Y,$,d,g]),Be=Re(t=>{yt(w,t),t&&xe()});b.exports.useEffect(()=>{xe()},[xe]);const D=t=>{X||($e(!0),Ae(!0),de&&de(t))},Z=(t,e)=>{!X||($e(!1),ce&&ce(t,e))},ee=(t,e,r,a)=>{if(Array.isArray(l)){if(l.length===e.length&&l.every((u,y)=>u===e[y]))return}else if(l===e)return;ue&&ue(t,e,r,a),Pe(e)},C=b.exports.useRef(!1),f=(t,e,r="selectOption",a="options")=>{let u=r,y=e;if(g){y=Array.isArray(l)?l.slice():[];const m=Qe(y,V=>re(e,V));m===-1?y.push(e):a!=="freeSolo"&&(y.splice(m,1),u="removeOption")}se(t,y),ee(t,y,u,{option:e}),!W&&!t.ctrlKey&&!t.metaKey&&Z(t,u),(P===!0||P==="touch"&&C.current||P==="mouse"&&!C.current)&&O.current.blur()};function E(t,e){if(t===-1)return-1;let r=t;for(;;){if(e==="next"&&r===l.length||e==="previous"&&r===-1)return-1;const a=he.querySelector(`[data-tag-index="${r}"]`);if(!a||!a.hasAttribute("tabindex")||a.disabled||a.getAttribute("aria-disabled")==="true")r+=e==="next"?1:-1;else return r}}const Ge=(t,e)=>{if(!g)return;Z(t,"toggleInput");let r=F;F===-1?d===""&&e==="previous"&&(r=l.length-1):(r+=e==="next"?1:-1,r<0&&(r=0),r===l.length&&(r=-1)),r=E(r,e),ae(r),_(r)},ve=t=>{fe.current=!0,Q(""),G&&G(t,"","clear"),ee(t,g?[]:null,"clear")},tt=t=>e=>{if(t.onKeyDown&&t.onKeyDown(e),!e.defaultMuiPrevented&&(F!==-1&&["ArrowLeft","ArrowRight"].indexOf(e.key)===-1&&(ae(-1),_(-1)),e.which!==229))switch(e.key){case"Home":$&&j&&(e.preventDefault(),v({diff:"start",direction:"next",reason:"keyboard",event:e}));break;case"End":$&&j&&(e.preventDefault(),v({diff:"end",direction:"previous",reason:"keyboard",event:e}));break;case"PageUp":e.preventDefault(),v({diff:-st,direction:"previous",reason:"keyboard",event:e}),D(e);break;case"PageDown":e.preventDefault(),v({diff:st,direction:"next",reason:"keyboard",event:e}),D(e);break;case"ArrowDown":e.preventDefault(),v({diff:1,direction:"next",reason:"keyboard",event:e}),D(e);break;case"ArrowUp":e.preventDefault(),v({diff:-1,direction:"previous",reason:"keyboard",event:e}),D(e);break;case"ArrowLeft":Ge(e,"previous");break;case"ArrowRight":Ge(e,"next");break;case"Enter":if(T.current!==-1&&$){const r=I[T.current],a=B?B(r):!1;if(e.preventDefault(),a)return;f(e,r,"selectOption"),n&&O.current.setSelectionRange(O.current.value.length,O.current.value.length)}else q&&d!==""&&Le===!1&&(g&&e.preventDefault(),f(e,d,"createOption","freeSolo"));break;case"Escape":$?(e.preventDefault(),e.stopPropagation(),Z(e,"escape")):z&&(d!==""||g&&l.length>0)&&(e.preventDefault(),e.stopPropagation(),ve(e));break;case"Backspace":if(g&&!J&&d===""&&l.length>0){const r=F===-1?l.length-1:F,a=l.slice();a.splice(r,1),ee(e,a,"removeOption",{option:l[r]})}break}},Ue=t=>{Se(!0),Ze&&!fe.current&&D(t)},Ie=t=>{if(w.current!==null&&w.current.parentElement.contains(document.activeElement)){O.current.focus();return}Se(!1),ge.current=!0,fe.current=!1,x&&T.current!==-1&&$?f(t,I[T.current],"blur"):x&&q&&d!==""?f(t,d,"blur","freeSolo"):S&&se(t,l),Z(t,"blur")},i=t=>{const e=t.target.value;d!==e&&(Q(e),Ae(!1),G&&G(t,e,"input")),e===""?!L&&!g&&ee(t,null,"clear"):D(t)},R=t=>{Y({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"mouse"})},te=()=>{C.current=!0},_e=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));f(t,I[e],"selectOption"),C.current=!1},xt=t=>e=>{const r=l.slice();r.splice(t,1),ee(e,r,"removeOption",{option:l[t]})},ot=t=>{X?Z(t,"toggleInput"):D(t)},It=t=>{t.target.getAttribute("id")!==k&&t.preventDefault()},Ot=()=>{O.current.focus(),ze&&ge.current&&O.current.selectionEnd-O.current.selectionStart===0&&O.current.select(),ge.current=!1},Ct=t=>{(d===""||!X)&&ot(t)};let Ke=q&&d.length>0;Ke=Ke||(g?l.length>0:l!==null);let nt=I;return pe&&(nt=I.reduce((t,e,r)=>{const a=pe(e);return t.length>0&&t[t.length-1].group===a?t[t.length-1].options.push(e):t.push({key:r,index:r,group:a,options:[e]}),t},[])),h&&le&&Ie(),{getRootProps:(t={})=>c({"aria-owns":be?`${k}-listbox`:null},t,{onKeyDown:tt(t),onMouseDown:It,onClick:Ot}),getInputLabelProps:()=>({id:`${k}-label`,htmlFor:k}),getInputProps:()=>({id:k,value:d,onBlur:Ie,onFocus:Ue,onChange:i,onMouseDown:Ct,"aria-activedescendant":$?"":null,"aria-autocomplete":n?"both":"list","aria-controls":be?`${k}-listbox`:void 0,"aria-expanded":be,autoComplete:"off",ref:O,autoCapitalize:"none",spellCheck:"false",role:"combobox"}),getClearProps:()=>({tabIndex:-1,onClick:ve}),getPopupIndicatorProps:()=>({tabIndex:-1,onClick:ot}),getTagProps:({index:t})=>c({key:t,"data-tag-index":t,tabIndex:-1},!J&&{onDelete:xt(t)}),getListboxProps:()=>({role:"listbox",id:`${k}-listbox`,"aria-labelledby":`${k}-label`,ref:Be,onMouseDown:t=>{t.preventDefault()}}),getOptionProps:({index:t,option:e})=>{const r=(g?l:[l]).some(u=>u!=null&&re(e,u)),a=B?B(e):!1;return{key:U(e),tabIndex:-1,role:"option",id:`${k}-option-${t}`,onMouseOver:R,onClick:_e,onTouchStart:te,"data-option-index":t,"aria-disabled":a,"aria-selected":r}},id:k,inputValue:d,value:l,dirty:Ke,popupOpen:$,focused:le||F!==-1,anchorEl:he,setAnchorEl:Ve,focusedTag:F,groupedOptions:nt}}function Rt(o){return ut("MuiListSubheader",o)}ct("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const wt=["className","color","component","disableGutters","disableSticky","inset"],Tt=o=>{const{classes:n,color:p,disableGutters:x,inset:P,disableSticky:h}=o,S={root:["root",p!=="default"&&`color${Me(p)}`,!x&&"gutters",P&&"inset",!h&&"sticky"]};return gt(S,Rt,n)},Dt=M("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:p}=o;return[n.root,p.color!=="default"&&n[`color${Me(p.color)}`],!p.disableGutters&&n.gutters,p.inset&&n.inset,!p.disableSticky&&n.sticky]}})(({theme:o,ownerState:n})=>c({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:o.palette.text.secondary,fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(14)},n.color==="primary"&&{color:o.palette.primary.main},n.color==="inherit"&&{color:"inherit"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.inset&&{paddingLeft:72},!n.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:o.palette.background.paper})),Mt=b.exports.forwardRef(function(n,p){const x=dt({props:n,name:"MuiListSubheader"}),{className:P,color:h="default",component:S="li",disableGutters:z=!1,disableSticky:N=!1,inset:K=!1}=x,L=ft(x,wt),W=c({},x,{color:h,component:S,disableGutters:z,disableSticky:N,inset:K}),ne=Tt(W);return A(Dt,c({as:S,className:oe(ne.root,P),ref:p,ownerState:W},L))});var Nt=Mt;function Ft(o){return ut("MuiAutocomplete",o)}const Et=ct("MuiAutocomplete",["root","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);var s=Et,it,pt;const zt=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","value"],Ht=o=>{const{classes:n,disablePortal:p,focused:x,fullWidth:P,hasClearIcon:h,hasPopupIcon:S,inputFocused:z,popupOpen:N,size:K}=o,L={root:["root",x&&"focused",P&&"fullWidth",h&&"hasClearIcon",S&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",z&&"inputFocused"],tag:["tag",`tagSize${Me(K)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",N&&"popupIndicatorOpen"],popper:["popper",p&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return gt(L,Ft,n)},Vt=M("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:p}=o,{fullWidth:x,hasClearIcon:P,hasPopupIcon:h,inputFocused:S,size:z}=p;return[{[`& .${s.tag}`]:n.tag},{[`& .${s.tag}`]:n[`tagSize${Me(z)}`]},{[`& .${s.inputRoot}`]:n.inputRoot},{[`& .${s.input}`]:n.input},{[`& .${s.input}`]:S&&n.inputFocused},n.root,x&&n.fullWidth,h&&n.hasPopupIcon,P&&n.hasClearIcon]}})(({ownerState:o})=>c({[`&.${s.focused} .${s.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${s.clearIndicator}`]:{visibility:"visible"}}},o.fullWidth&&{width:"100%"},{[`& .${s.tag}`]:c({margin:3,maxWidth:"calc(100% - 6px)"},o.size==="small"&&{margin:2,maxWidth:"calc(100% - 4px)"}),[`& .${s.inputRoot}`]:{flexWrap:"wrap",[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:26+4},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:52+4},[`& .${s.input}`]:{width:0,minWidth:30}},[`& .${je.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${je.root}.${De.sizeSmall}`]:{[`& .${je.input}`]:{padding:"2px 4px 3px 0"}},[`& .${at.root}`]:{padding:9,[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${s.input}`]:{padding:"7.5px 4px 7.5px 6px"},[`& .${s.endAdornment}`]:{right:9}},[`& .${at.root}.${De.sizeSmall}`]:{padding:6,[`& .${s.input}`]:{padding:"2.5px 4px 2.5px 6px"}},[`& .${Te.root}`]:{paddingTop:19,paddingLeft:8,[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${Te.input}`]:{padding:"7px 4px"},[`& .${s.endAdornment}`]:{right:9}},[`& .${Te.root}.${De.sizeSmall}`]:{paddingBottom:1,[`& .${Te.input}`]:{padding:"2.5px 4px"}},[`& .${De.hiddenLabel}`]:{paddingTop:8},[`& .${s.input}`]:c({flexGrow:1,textOverflow:"ellipsis",opacity:0},o.inputFocused&&{opacity:1})})),Wt=M("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(o,n)=>n.endAdornment})({position:"absolute",right:0,top:"calc(50% - 14px)"}),Bt=M(ht,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(o,n)=>n.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),Gt=M(ht,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:o},n)=>c({},n.popupIndicator,o.popupOpen&&n.popupIndicatorOpen)})(({ownerState:o})=>c({padding:2,marginRight:-2},o.popupOpen&&{transform:"rotate(180deg)"})),Ut=M(mt,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(o,n)=>{const{ownerState:p}=o;return[{[`& .${s.option}`]:n.option},n.popper,p.disablePortal&&n.popperDisablePortal]}})(({theme:o,ownerState:n})=>c({zIndex:o.zIndex.modal},n.disablePortal&&{position:"absolute"})),_t=M(bt,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(o,n)=>n.paper})(({theme:o})=>c({},o.typography.body1,{overflow:"auto"})),Kt=M("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(o,n)=>n.loading})(({theme:o})=>({color:o.palette.text.secondary,padding:"14px 16px"})),qt=M("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(o,n)=>n.noOptions})(({theme:o})=>({color:o.palette.text.secondary,padding:"14px 16px"})),jt=M("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(o,n)=>n.listbox})(({theme:o})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",[`& .${s.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[o.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${s.focused}`]:{backgroundColor:o.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:o.palette.action.disabledOpacity,pointerEvents:"none"},[`&.${s.focusVisible}`]:{backgroundColor:o.palette.action.focus},'&[aria-selected="true"]':{backgroundColor:qe(o.palette.primary.main,o.palette.action.selectedOpacity),[`&.${s.focused}`]:{backgroundColor:qe(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:o.palette.action.selected}},[`&.${s.focusVisible}`]:{backgroundColor:qe(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}}}})),Jt=M(Nt,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(o,n)=>n.groupLabel})(({theme:o})=>({backgroundColor:o.palette.background.paper,top:-8})),Qt=M("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(o,n)=>n.groupUl})({padding:0,[`& .${s.option}`]:{paddingLeft:24}}),Xt=b.exports.forwardRef(function(n,p){var x,P;const h=dt({props:n,name:"MuiAutocomplete"}),{autoComplete:S=!1,autoHighlight:z=!1,autoSelect:N=!1,blurOnSelect:K=!1,ChipProps:L,className:W,clearIcon:ne=it||(it=A(St,{fontSize:"small"})),clearOnBlur:H=!h.freeSolo,clearOnEscape:Xe=!1,clearText:ie="Clear",closeText:q="Close",componentsProps:B={},defaultValue:Ne=h.multiple?[]:null,disableClearable:re=!1,disableCloseOnSelect:pe=!1,disabled:j=!1,disabledItemsFocusable:Ye=!1,disableListWrap:Fe=!1,disablePortal:Oe=!1,filterSelectedOptions:g=!1,forcePopupIcon:ue="auto",freeSolo:ce=!1,fullWidth:Ce=!1,getLimitTagsText:G=i=>`+${i}`,getOptionLabel:de=i=>{var R;return(R=i.label)!=null?R:i},groupBy:Ee,handleHomeEndKeys:Ze=!h.freeSolo,includeInputInList:et=!1,limitTags:J=-1,ListboxComponent:ze="ul",ListboxProps:He,loading:k=!1,loadingText:U="Loading\u2026",multiple:fe=!1,noOptionsText:ge="No options",openOnFocus:O=!1,openText:w="Open",PaperComponent:he=bt,PopperComponent:Ve=mt,popupIcon:F=pt||(pt=A(Pt,{})),readOnly:ae=!1,renderGroup:ye,renderInput:T,renderOption:l,renderTags:Pe,selectOnFocus:d=!h.freeSolo,size:Q="medium"}=h,le=ft(h,zt),{getRootProps:Se,getInputProps:se,getInputLabelProps:me,getPopupIndicatorProps:X,getClearProps:$e,getTagProps:We,getListboxProps:Ae,getOptionProps:Le,value:$,dirty:I,id:be,popupOpen:_,focused:ke,focusedTag:Y,anchorEl:v,setAnchorEl:xe,inputValue:Be,groupedOptions:D}=vt(c({},h,{componentName:"Autocomplete"})),Z=!re&&!j&&I&&!ae,ee=(!ce||ue===!0)&&ue!==!1,C=c({},h,{disablePortal:Oe,focused:ke,fullWidth:Ce,hasClearIcon:Z,hasPopupIcon:ee,inputFocused:Y===-1,popupOpen:_,size:Q}),f=Ht(C);let E;if(fe&&$.length>0){const i=R=>c({className:oe(f.tag),disabled:j},We(R));Pe?E=Pe($,i):E=$.map((R,te)=>A(At,c({label:de(R),size:Q},i({index:te}),L)))}if(J>-1&&Array.isArray(E)){const i=E.length-J;!ke&&i>0&&(E=E.splice(0,J),E.push(A("span",{className:f.tag,children:G(i)},E.length)))}const ve=ye||(i=>we("li",{children:[A(Jt,{className:f.groupLabel,ownerState:C,component:"div",children:i.group}),A(Qt,{className:f.groupUl,ownerState:C,children:i.children})]},i.key)),Ue=l||((i,R)=>A("li",c({},i,{children:de(R)}))),Ie=(i,R)=>{const te=Le({option:i,index:R});return Ue(c({},te,{className:f.option}),i,{selected:te["aria-selected"],inputValue:Be})};return we(b.exports.Fragment,{children:[A(Vt,c({ref:p,className:oe(f.root,W),ownerState:C},Se(le),{children:T({id:be,disabled:j,fullWidth:!0,size:Q==="small"?"small":void 0,InputLabelProps:me(),InputProps:{ref:xe,className:f.inputRoot,startAdornment:E,endAdornment:we(Wt,{className:f.endAdornment,ownerState:C,children:[Z?A(Bt,c({},$e(),{"aria-label":ie,title:ie,ownerState:C},B.clearIndicator,{className:oe(f.clearIndicator,(x=B.clearIndicator)==null?void 0:x.className),children:ne})):null,ee?A(Gt,c({},X(),{disabled:j,"aria-label":_?q:w,title:_?q:w,className:oe(f.popupIndicator),ownerState:C,children:F})):null]})},inputProps:c({className:oe(f.input),disabled:j,readOnly:ae},se())})})),_&&v?A(Ut,{as:Ve,className:oe(f.popper),disablePortal:Oe,style:{width:v?v.clientWidth:null},ownerState:C,role:"presentation",anchorEl:v,open:!0,children:we(_t,c({ownerState:C,as:he},B.paper,{className:oe(f.paper,(P=B.paper)==null?void 0:P.className),children:[k&&D.length===0?A(Kt,{className:f.loading,ownerState:C,children:U}):null,D.length===0&&!ce&&!k?A(qt,{className:f.noOptions,ownerState:C,role:"presentation",onMouseDown:i=>{i.preventDefault()},children:ge}):null,D.length>0?A(jt,c({as:ze,className:f.listbox,ownerState:C},Ae(),He,{children:D.map((i,R)=>Ee?ve({key:i.key,group:i.group,children:i.options.map((te,_e)=>Ie(te,i.index+_e))}):Ie(i,R))})):null]}))}):null]})});var io=Xt;export{io as A,Nt as L,s as a,Lt as c};
