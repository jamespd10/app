var Ce=Object.defineProperty,ge=Object.defineProperties;var ke=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var K=(e,t,o)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,C=(e,t)=>{for(var o in t||(t={}))X.call(t,o)&&K(e,o,t[o]);if($)for(var o of $(t))Z.call(t,o)&&K(e,o,t[o]);return e},_=(e,t)=>ge(e,ke(t));var z=(e,t)=>{var o={};for(var n in e)X.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&$)for(var n of $(e))t.indexOf(n)<0&&Z.call(e,n)&&(o[n]=e[n]);return o};import{d as be}from"./Search.js";import{d as ve}from"./Clear.js";import{a as r,l as R,_ as b,j as f,r as h,h as re,k as ae,z as ye,m as ne,y as Re,u as le,c as A,n as ie,K as xe,e as we,F as S,a4 as Se,as as Fe}from"./index.js";import{T as $e,F as _e,e as J,o as ce}from"./TextField.js";import{B as w}from"./Box.js";import{I as j}from"./InputAdornment.js";import{I,i as Ie}from"./IconButton.js";import{P as U}from"./Paper.js";import{G as y}from"./Grid.js";import{T as N}from"./Typography.js";import{F as H}from"./FormGroup.js";import{c as Oe,a as Pe,u as Le}from"./useControlled.js";import{F as G}from"./FormControlLabel.js";import{S as Te,C as se,c as x}from"./Checkbox.js";import{c as de}from"./createSvgIcon.js";import{i as Be,d as Me,c as ze,T as je,t as Q,b as Ee,f as Ge,a as Ae,g as Ue,L as Ne,h as He}from"./SkipNextOutlined.js";import{P as De}from"./Pagination.js";import{t as D}from"./tslib.js";import{b as Ve}from"./Button.js";import{L as qe}from"./Loader.js";import"./BootstrapTooltip.js";import"./jwt-decode.esm.js";import"./ContentProvider.js";import"./Modal2.js";import"./platform.js";import{S as We}from"./Stack.js";var Ke=de(r("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),Xe=de(r("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");const Ze=R("span")({position:"relative",display:"flex"}),Je=R(Ke)({transform:"scale(1)"}),Qe=R(Xe)(({theme:e,ownerState:t})=>b({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function ue(e){const{checked:t=!1,classes:o={},fontSize:n}=e,a=b({},e,{checked:t});return f(Ze,{className:o.root,ownerState:a,children:[r(Je,{fontSize:n,className:o.background,ownerState:a}),r(Qe,{fontSize:n,className:o.dot,ownerState:a})]})}const Ye=h.exports.createContext(void 0);var fe=Ye;function pe(){return h.exports.useContext(fe)}function et(e){return re("MuiRadio",e)}const tt=ae("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]);var Y=tt;const ot=["checked","checkedIcon","color","icon","name","onChange","size"],rt=e=>{const{classes:t,color:o}=e,n={root:["root",`color${ne(o)}`]};return b({},t,ie(n,et,t))},at=R(Te,{shouldForwardProp:e=>ye(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`color${ne(o.color)}`]]}})(({theme:e,ownerState:t})=>b({color:e.palette.text.secondary,"&:hover":{backgroundColor:Re(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${Y.checked}`]:{color:e.palette[t.color].main}},{[`&.${Y.disabled}`]:{color:e.palette.action.disabled}}));function nt(e,t){return typeof t=="object"&&t!==null?e===t:String(e)===String(t)}const p=r(ue,{checked:!0}),ee=r(ue,{}),lt=h.exports.forwardRef(function(t,o){var n,a;const l=le({props:t,name:"MuiRadio"}),{checked:i,checkedIcon:c=p,color:d="primary",icon:u=ee,name:s,onChange:v,size:k="medium"}=l,L=A(l,ot),F=b({},l,{color:d,size:k}),T=rt(F),m=pe();let B=i;const me=Oe(v,m&&m.onChange);let M=s;return m&&(typeof B=="undefined"&&(B=nt(m.value,l.value)),typeof M=="undefined"&&(M=m.name)),r(at,b({type:"radio",icon:h.exports.cloneElement(u,{fontSize:(n=ee.props.fontSize)!=null?n:k}),checkedIcon:h.exports.cloneElement(c,{fontSize:(a=p.props.fontSize)!=null?a:k}),ownerState:F,classes:T,name:M,checked:B,onChange:me,ref:o},L))});var it=lt;const ct=["actions","children","defaultValue","name","onChange","value"],st=h.exports.forwardRef(function(t,o){const{actions:n,children:a,defaultValue:l,name:i,onChange:c,value:d}=t,u=A(t,ct),s=h.exports.useRef(null),[v,k]=Pe({controlled:d,default:l,name:"RadioGroup"});h.exports.useImperativeHandle(n,()=>({focus:()=>{let m=s.current.querySelector("input:not(:disabled):checked");m||(m=s.current.querySelector("input:not(:disabled)")),m&&m.focus()}}),[]);const L=xe(o,s),F=m=>{k(m.target.value),c&&c(m,m.target.value)},T=Le(i);return r(fe.Provider,{value:{name:T,onChange:F,value:v},children:r(H,b({role:"radiogroup",ref:L},u,{children:a}))})});var dt=st;function ut(e){return re("MuiTableFooter",e)}ae("MuiTableFooter",["root"]);const ft=["className","component"],ht=e=>{const{classes:t}=e;return ie({root:["root"]},ut,t)},mt=R("tfoot",{name:"MuiTableFooter",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-footer-group"}),Ct={variant:"footer"},te="tfoot",gt=h.exports.forwardRef(function(t,o){const n=le({props:t,name:"MuiTableFooter"}),{className:a,component:l=te}=n,i=A(n,ft),c=b({},n,{component:l}),d=ht(c);return r(Be.Provider,{value:Ct,children:r(mt,b({as:l,className:we(d.root,a),ref:o,role:l===te?null:"rowgroup",ownerState:c},i))})});var kt=gt,g={};Object.defineProperty(g,"__esModule",{value:!0});g.isNavigator=g.isBrowser=g.off=g.on=g.noop=void 0;var bt=function(){};g.noop=bt;function vt(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];e&&e.addEventListener&&e.addEventListener.apply(e,t)}g.on=vt;function yt(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}g.off=yt;g.isBrowser=typeof window!="undefined";g.isNavigator=typeof navigator!="undefined";const Rt=a=>{var l=a,{input:e,focus:t,isLoading:o}=l,n=z(l,["input","focus","isLoading"]);var u;if(e&&e.onChage&&(e.onClick||e.inputRef))throw new Error("Cuando mandas el valor y el onChange event no puedes mandarle el click y el inputRef");if(e&&e.onClick&&e.inputRef&&e.onChage)throw new Error("Cuando mandas el click y el inputRef no puedes mandar el valor ni el onChange");const i=s=>{e!=null&&e.onChage&&e.onChage(s)},c=s=>{s.preventDefault(),e!=null&&e.onClick&&e.onClick()},d=s=>{s.preventDefault(),e!=null&&e.onClear&&(e.onClear(),e.inputRef&&e.inputRef.current&&(e.inputRef.current.value="",e.inputRef.current.focus()))};return r(S,{children:r("form",{onSubmit:c,children:r($e,{label:(u=n.label)!=null?u:"Buscar...",variant:"outlined",size:"small",fullWidth:!0,value:e==null?void 0:e.value,onChange:i,autoFocus:t,inputRef:e==null?void 0:e.inputRef,helperText:n.helperText,InputProps:{endAdornment:f(w,{sx:{display:"flex",alignItems:"center"},children:[(e==null?void 0:e.onClick)&&r(j,{position:"end",children:r(I,{onClick:c,children:r(be,{})})}),e&&e.onClear&&r(j,{position:"end",children:r(I,{onClick:d,children:r(ve,{})})}),o&&r(j,{position:"end",children:r(Se,{size:20})})]})}})})})},xt=e=>{const t=a=>{var l,i;if(a.target.checked)(l=e==null?void 0:e.filterCheck)==null||l.setFilter.push({[`${a.target.name}`]:a.target.value});else{const c=Object.assign({},...e.filterCheck.filterList),u=Object.keys(c).findIndex(s=>s===a.target.name);(i=e==null?void 0:e.filterCheck)==null||i.setFilter.removeAt(u)}},o=a=>{var l,i,c,d,u,s;if(((l=e.filterRadio)==null?void 0:l.filterRadioList)&&((i=e.filterRadio)==null?void 0:i.filterRadioList.length)>0){const v=(c=e.filterRadio)==null?void 0:c.filterRadioList.flatMap(k=>Object.keys(k)).findIndex(k=>k===a.target.name);v>-1?(d=e.filterRadio)==null||d.setFilterRadio.updateAt(v,{[`${a.target.name}`]:a.target.value}):(u=e.filterRadio)==null||u.setFilterRadio.push({[`${a.target.name}`]:a.target.value})}else(s=e.filterRadio)==null||s.setFilterRadio.push({[`${a.target.name}`]:a.target.value})},n=a=>{var l,i,c,d;if(((l=e.filterRadio)==null?void 0:l.filterRadioList)&&((i=e.filterRadio)==null?void 0:i.filterRadioList.length)>0){const u=(c=e.filterRadio)==null?void 0:c.filterRadioList.flatMap(s=>Object.keys(s)).findIndex(s=>s===a.name);if(u>-1)return((d=e.filterRadio)==null?void 0:d.filterRadioList[u])[`${a.name}`]}return a.value};return r(U,{variant:"outlined",style:{padding:10,width:"100%"},children:f(y,{container:!0,direction:"column",children:[r(y,{item:!0,children:r(N,{variant:"h6",children:"Filtrar por:"})}),e.filterRadio&&e.filterRadio.radios.map((a,l)=>r(y,{item:!0,children:f(_e,{component:"fieldset",children:[r(J,{component:"legend",children:a.label}),r(dt,{"aria-label":`${a.label}`,defaultValue:"female",name:`${a.name}`,row:!0,onChange:o,value:n(a),children:a.list.map((i,c)=>r(G,{value:i.value,control:r(it,{}),label:i.label},i.value))})]})},a.name)),e.filterCheck&&f(y,{item:!0,children:[r(J,{component:"legend",children:"Otros filtros"}),r(H,{row:!0,children:e.filterCheck.list.map((a,l)=>{const i=Object.assign({},...e.filterCheck.filterList),c=Object.prototype.hasOwnProperty.call(i,a.name);return r(G,{control:r(se,{name:a.name,value:a.value,checked:c,color:"primary",onChange:t}),label:a.label},l)})})]})]})})},wt=e=>{const t=(o,n,a,l)=>{var i,c,d;if(l)((i=e.filterCheck)==null?void 0:i.filterList.length)===0?e.filterCheck.setFilter.push({[`${o}`]:n}):(c=e.filterCheck)==null||c.setFilter.insertAt(a,{[`${o}`]:n});else{const u=Object.assign({},...e.filterCheck.filterList),v=Object.keys(u).findIndex(k=>k===o);(d=e.filterCheck)==null||d.setFilter.removeAt(v)}};return r(U,{variant:"outlined",style:{padding:10,width:"100%"},children:f(y,{container:!0,direction:"column",children:[r(y,{item:!0,children:r(N,{variant:"h6",children:"Ordenar por:"})}),r(y,{item:!0,children:r(H,{row:!0,children:e.filterCheck&&e.filterCheck.list.map((o,n)=>{const l=Object.assign({},...e.filterCheck.filterList).hasOwnProperty(o.name);return r(G,{control:r(se,{name:o.name,value:o.value,checked:l,color:"primary",onChange:i=>t(o.name,o.value,n,i.target.checked)}),label:o.label},n)})})})]})})},St=o=>{var n=o,{pagination:e}=n,t=z(n,["pagination"]);return r(S,{children:!t.notFound&&e&&f(S,{children:[t.selectedCount&&t.selectedCount>0?f("div",{style:{margin:15},children:[t.selectedCount," filas seleccionadas"]}):r(S,{}),f("div",{style:{margin:10,display:"flex",alignItems:"center"},children:[t.onSkipPrev&&r(I,{size:"small",onClick:t.onSkipPrev,disabled:e.page<=10,sx:{color:"black",":disabled":{color:"darkgrey"}},children:r(Me,{})}),r(De,_(C({color:"primary"},e),{boundaryCount:2,siblingCount:2})),t.onSkipNext&&r(I,{size:"small",onClick:t.onSkipNext,disabled:e.count-e.page<10,sx:{color:"black",":disabled":{color:"darkgrey"}},children:r(ze,{})})]})]})})};var he={},V={},q={},W={};Object.defineProperty(W,"__esModule",{value:!0});var Ft=h.exports,$t=function(e){Ft.useEffect(e,[])};W.default=$t;Object.defineProperty(q,"__esModule",{value:!0});var _t=D.exports,It=h.exports,Ot=_t.__importDefault(W),Pt=function(e){var t=It.useRef(e);t.current=e,Ot.default(function(){return function(){return t.current()}})};q.default=Pt;Object.defineProperty(V,"__esModule",{value:!0});var Lt=D.exports,E=h.exports,Tt=Lt.__importDefault(q),Bt=function(e){var t=E.useRef(0),o=E.useState(e),n=o[0],a=o[1],l=E.useCallback(function(i){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){a(i)})},[]);return Tt.default(function(){cancelAnimationFrame(t.current)}),[n,l]};V.default=Bt;Object.defineProperty(he,"__esModule",{value:!0});var Mt=D.exports,zt=h.exports,jt=Mt.__importDefault(V),oe=g,Et=function(e){var t=jt.default({x:0,y:0}),o=t[0],n=t[1];return zt.useEffect(function(){var a=function(){e.current&&n({x:e.current.scrollLeft,y:e.current.scrollTop})};return e.current&&oe.on(e.current,"scroll",a,{capture:!1,passive:!0}),function(){e.current&&oe.off(e.current,"scroll",a)}},[e]),o},Gt=he.default=Et;const O=R(je)(({theme:e})=>({[`&.${Q.head}`]:{backgroundColor:e.palette.primary.main,color:e.palette.common.white,borderColor:e.palette.common.white,[`& .${x.checked}`]:{color:"white"},[`& .${ce.adornedEnd}`]:{color:"white",backgroundColor:"white"},[`& .${x.indeterminate}`]:{color:"white"},[`& .${x.root}`]:{color:"white"}},[`&.${Q.body}`]:{fontSize:14}})),P=R(Ee)(({theme:e})=>({"&:nth-of-type(odd)":{backgroundColor:e.palette.action.disabledBackground},"&:last-child td, &:last-child th":{border:0},"&:hover":{backgroundColor:e.palette.primary.main,color:e.palette.common.white,borderColor:e.palette.common.white,"& .MuiTableCell-root":{color:"white"},[`& .${ce.adornedEnd}`]:{color:"white",backgroundColor:"white"},[`& .${Fe.circle}`]:{color:"white",backgroundColor:"white"},[`& .${x.checked}`]:{color:"white"},[`& .${x.indeterminate}`]:{color:"white"},[`& .${x.root}`]:{color:"white"},"& .MuiButton-root":{color:"white"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"& input":{color:"white"}},"& label.Mui-focused":{color:"white"},"& label":{color:"gray"},"& .Mui-focused":{color:"white",borderColor:"white"},"& .MuiInput-underline:after":{borderBottomColor:"white"},[`& .${Ie.root}`]:{color:"white"},[`& .${Ve.root}`]:{color:"white"}}})),At=e=>{var t;return r(kt,{children:r(P,{children:(t=e.tableFooter)==null?void 0:t.map((o,n)=>r(O,{colSpan:o.colSpan,rowSpan:o.rowSpan,sx:C({},e.stickyFooter&&e.stickyFooter===n?e.stickyOpts:{}),children:o.cell},n))})})},Ut=e=>{var t;return f(Ge,{children:[!e.tableBody&&e.children,!e.children&&((t=e.tableBody)==null?void 0:t.map((o,n)=>n===0?r(P,{children:o.map((a,l)=>r(O,{component:"th",scope:"row",sx:C({"&:last-child td, &:last-child th":{border:0}},e.stickyColumn&&e.stickyColumn===l?e.stickyOpts:{}),children:a},l))},n):r(P,{children:o.map((a,l)=>r(O,{component:"th",scope:"row",sx:C({},e.stickyColumn&&e.stickyColumn===l?e.stickyOpts:{}),children:a},l))},n)))]})},Nt=e=>{var t;return r(Ae,{children:r(P,{children:(t=e.tableHeader)==null?void 0:t.map((o,n)=>r(O,{sx:C({},e.stickyColumn&&e.stickyColumn===n?e.stickyOpts:{}),style:{zIndex:5},ref:a=>e.divRef.current[n]=a,children:o},n))})})},Ht=e=>{const t=h.exports.useRef([]);return h.exports.useEffect(()=>{t.current=t.current.slice(0,e==null?void 0:e.length)},[e]),t},ko=e=>{const t=h.exports.useRef(null),{x:o}=Gt(t),n=Ht(e.tableHeader),a={zIndex:2,position:"sticky",left:-.1,backgroundColor:e.stickyColumn&&e.stickyColumn===0&&o>0||e.stickyColumn&&e.stickyColumn>0&&n.current&&n.current.length>0&&o>n.current.filter((l,i)=>i<e.stickyColumn).map(l=>l.offsetWidth).reduce((l,i)=>l+i)?"#396781":void 0};return f(U,{sx:C({width:"100%",overflowX:"auto"},e.sx),variant:"outlined",children:[e.title||e.isSearch?f(w,{style:{padding:10,display:"flex",flexDirection:"column"},children:[e.title&&f(w,{sx:{flexGrow:1,position:"relative"},children:[typeof e.title=="string"||e.title instanceof String?r(N,{variant:"h5",children:e.title}):r(S,{children:e.title}),e.titleAction&&r("div",{style:{position:"absolute",right:0,bottom:0},children:e.titleAction})]}),e.isSearch&&r(w,{sx:{flexGrow:1},children:r(Rt,C({isLoading:e.isFetching||e.loading},e.isSearch))})]}):null,(e.filter||e.order)&&f(We,{direction:{xs:"column",md:"row"},spacing:1,style:{margin:10},children:[e.filter&&r(xt,C({},e.filter)),e.order&&r(wt,C({},e.order))]}),!e.loading&&e.notFound,e.loading&&r(qe,{margin:10}),!e.loading&&!e.notFound&&f(Ue,{sx:_(C({},e.containerSx),{display:"block",whiteSpace:"nowrap",overflow:"auto"}),style:e.containerStyle,ref:t,children:[(e.isFetching||e.loading)&&r(Ne,{}),f(He,{sx:_(C({},e.tableSx),{minWidth:650}),"aria-label":"a dense table",size:e.size,stickyHeader:e.stickyHeader,style:e.tableStyle,children:[r(Nt,{tableHeader:e.tableHeader,stickyColumn:e.stickyColumn,stickyOpts:a,divRef:n}),r(Ut,{tableBody:e.tableBody,stickyColumn:e.stickyColumn,stickyOpts:a,children:e.children}),r(At,{tableFooter:e.tableFooter,stickyFooter:e.stickyFooter,stickyOpts:a})]})]}),!e.loading&&!e.notFound&&r(St,C({},e)),e.anyFooter?r(w,{style:{padding:10,display:"flex",flexDirection:"column"},children:e.anyFooter}):null]})};export{ko as C};
