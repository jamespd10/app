var tt=Object.defineProperty,ot=Object.defineProperties;var rt=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var Me=(e,o,s)=>o in e?tt(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,S=(e,o)=>{for(var s in o||(o={}))Re.call(o,s)&&Me(e,s,o[s]);if(se)for(var s of se(o))De.call(o,s)&&Me(e,s,o[s]);return e},R=(e,o)=>ot(e,rt(o));var _=(e,o)=>{var s={};for(var r in e)Re.call(e,r)&&o.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&se)for(var r of se(e))o.indexOf(r)<0&&De.call(e,r)&&(s[r]=e[r]);return s};import{f as Ee,g as Ve,s as j,o as Q,_ as B,E as Pe,x as st,v as nt,r as a,u as Ne,k as Be,a as t,j as x,n as fe,l as We,ax as Fe,F as $,p as at,A as lt,a2 as it,ay as ce}from"./index.js";import{_ as ct}from"./useAsyncRetry.js";import{_ as ve}from"./useList.js";import{u as dt}from"./useHttpService.js";import{T as Se}from"./TextInput.js";import{d as ut}from"./Search.js";import{d as pt}from"./Clear.js";import{B as Ce}from"./Box.js";import{I as xe}from"./InputAdornment.js";import{I as J,i as ht}from"./IconButton.js";import{c as X,i as Z,r as ee}from"./jsx-runtime_commonjs-proxy.js";import{u as de,S as te,d as je}from"./FilterList.js";import{B as Y,b as mt}from"./Button.js";import{M as ye,P as ft,o as xt}from"./TextField.js";import{M as ne}from"./MenuItem.js";import{S as gt,c as G,C as we}from"./Checkbox.js";import{T as W}from"./Typography.js";import{d as Ue}from"./Close2.js";import{L as bt}from"./List.js";import{L as qe}from"./ListItem.js";import{S as vt}from"./Stack.js";import{d as St}from"./Add.js";import{D as Ge}from"./Divider.js";import{c as Ct}from"./createSvgIcon.js";import{B as yt}from"./ButtonBase.js";import{T as wt,t as K,a as $t,b as Ke,c as q,d as kt,e as It,f as zt}from"./TableRow.js";import{a as V}from"./Autocomplete.js";import{T as Lt}from"./Tooltip.js";import{d as Tt,a as _t}from"./SkipNextOutlined.js";import{P as Ot,a as Mt}from"./Pagination.js";import{c as Rt,C as ue}from"./CircularProgress.js";import{u as $e}from"./useComponentVisible.js";import{d as Dt,a as Pt}from"./CheckBoxOutlineBlank.js";import{d as pe}from"./ErrorOutline.js";import{A as Ft}from"./AutocompleteServer.js";import{C as At}from"./ChipState.js";import{C as Ht}from"./CustomDecimal.js";import{C as Et,a as Vt}from"./CustomSipe.js";import{S as Nt}from"./StyledGridOverlay.js";import{P as Bt}from"./Paper.js";import{L as Wt}from"./LinearProgress.js";function jt(e){return Ve("MuiSwitch",e)}const Ut=Ee("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var F=Ut;const qt=["className","color","edge","size","sx"],Gt=e=>{const{classes:o,edge:s,size:r,color:n,checked:i,disabled:l}=e,c={root:["root",s&&`edge${Q(s)}`,`size${Q(r)}`],switchBase:["switchBase",`color${Q(n)}`,i&&"checked",l&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},p=We(c,jt,o);return B({},o,p)},Kt=j("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.edge&&o[`edge${Q(s.edge)}`],o[`size${Q(s.size)}`]]}})(({ownerState:e})=>B({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${F.thumb}`]:{width:16,height:16},[`& .${F.switchBase}`]:{padding:4,[`&.${F.checked}`]:{transform:"translateX(16px)"}}})),Qt=j(gt,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.switchBase,{[`& .${F.input}`]:o.input},s.color!=="default"&&o[`color${Q(s.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${F.checked}`]:{transform:"translateX(20px)"},[`&.${F.disabled}`]:{color:e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]},[`&.${F.checked} + .${F.track}`]:{opacity:.5},[`&.${F.disabled} + .${F.track}`]:{opacity:e.palette.mode==="light"?.12:.2},[`& .${F.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:o})=>B({"&:hover":{backgroundColor:Pe(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${F.checked}`]:{color:e.palette[o.color].main,"&:hover":{backgroundColor:Pe(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${F.disabled}`]:{color:e.palette.mode==="light"?st(e.palette[o.color].main,.62):nt(e.palette[o.color].main,.55)}},[`&.${F.checked} + .${F.track}`]:{backgroundColor:e.palette[o.color].main}})),Yt=j("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,o)=>o.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.palette.mode==="light"?e.palette.common.black:e.palette.common.white,opacity:e.palette.mode==="light"?.38:.3})),Jt=j("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,o)=>o.thumb})(({theme:e})=>({boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Xt=a.exports.forwardRef(function(o,s){const r=Ne({props:o,name:"MuiSwitch"}),{className:n,color:i="primary",edge:l=!1,size:c="medium",sx:p}=r,d=Be(r,qt),u=B({},r,{color:i,edge:l,size:c}),h=Gt(u),m=t(Jt,{className:h.thumb,ownerState:u});return x(Kt,{className:fe(h.root,n),sx:p,ownerState:u,children:[t(Qt,B({type:"checkbox",icon:m,checkedIcon:m,ref:s,ownerState:u},d,{classes:B({},h,{root:h.switchBase})})),t(Yt,{className:h.track,ownerState:u})]})});var Zt=Xt,eo=Ct(t("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function to(e){return Ve("MuiTableSortLabel",e)}const oo=Ee("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]);var N=oo;const ro=["active","children","className","direction","hideSortIcon","IconComponent"],so=e=>{const{classes:o,direction:s,active:r}=e,n={root:["root",r&&"active"],icon:["icon",`iconDirection${Q(s)}`]};return We(n,to,o)},no=j(yt,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.active&&o.active]}})(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:e.palette.text.secondary},"&:hover":{color:e.palette.text.secondary,[`& .${N.icon}`]:{opacity:.5}},[`&.${N.active}`]:{color:e.palette.text.primary,[`& .${N.icon}`]:{opacity:1,color:e.palette.text.secondary}}})),ao=j("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.icon,o[`iconDirection${Q(s.direction)}`]]}})(({theme:e,ownerState:o})=>B({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},o.direction==="desc"&&{transform:"rotate(0deg)"},o.direction==="asc"&&{transform:"rotate(180deg)"})),lo=a.exports.forwardRef(function(o,s){const r=Ne({props:o,name:"MuiTableSortLabel"}),{active:n=!1,children:i,className:l,direction:c="asc",hideSortIcon:p=!1,IconComponent:d=eo}=r,u=Be(r,ro),h=B({},r,{active:n,direction:c,hideSortIcon:p,IconComponent:d}),m=so(h);return x(no,B({className:fe(m.root,l),component:"span",disableRipple:!0,ownerState:h,ref:s},u,{children:[i,p&&!n?null:t(ao,{as:d,className:fe(m.icon),ownerState:h})]}))});var io=lo;const co=()=>{const[e,o]=a.exports.useState([0,0]);return a.exports.useLayoutEffect(()=>{const s=()=>o([window.innerWidth,window.innerHeight]);return window.addEventListener("resize",s),s(),()=>window.removeEventListener("resize",s)},[]),e},D=a.exports.createContext({}),ss=()=>a.exports.useContext(D),ns=s=>{var r=s,{children:e}=r,o=_(r,["children"]);return t(D.Provider,{value:S({},o),children:e})},uo=()=>{const[e,o]=a.exports.useState(1),s=a.exports.useCallback(()=>{o(n=>n+10)},[]),r=a.exports.useCallback(()=>{o(n=>n-10)},[]);return{page:e,setPage:o,skipPage:s,backPage:r}},po=e=>{const[o,s]=a.exports.useState([]);return{selected:o,setSelected:s,handleSelectAll:(l,c)=>{var p;if(l.target.checked&&c&&c.data&&c.status===201){const d=[];for(const u of(p=c==null?void 0:c.data)==null?void 0:p.resultados)o.findIndex(h=>h[e]===u[e])<0&&d.push(u);s([...o,...d]);return}s([])},handleSelect:(l,c,p)=>{const d=o.findIndex(m=>m[e]===c),u=p.findIndex(m=>m[e]===c);let h=[];d===-1?h=h.concat(o,p[u]):d===0?h=h.concat(o.slice(1)):d===o.length-1?h=h.concat(o.slice(0,-1)):d>0&&(h=h.concat(o.slice(0,d),o.slice(d+1))),s(h)},isSelected:l=>o.findIndex(c=>c[e]===l)!==-1}},ho=()=>{const[e,o]=a.exports.useState([]);return{sort:e,isInSort:i=>!(e.findIndex(l=>l.field===i)<0),getSortOrder:i=>{const l=e.findIndex(c=>c.field===i);if(l!==-1)return e[l].order},handleSetSort:i=>{const l=e.findIndex(p=>p.field===i);let c=[];l!==-1?e[l].order==="asc"?(c=[...e],c[l].order="desc"):c=c.concat(e.slice(0,l),e.slice(l+1)):c=[...e,{field:i,order:"asc"}],o([...c])},setSort:o}},as=e=>{const{url:o,rowKey:s,params:r,dataValues:n}=e,i=dt(),[l,c]=a.exports.useState([]),{backPage:p,page:d,setPage:u,skipPage:h}=uo(),m=_(po(s),[]),w=_(ho(),[]),{sort:z}=w,[T,b]=a.exports.useState(""),[f,C]=ve([]),k=g=>{u(L=>1),b(g)},v=a.exports.useCallback(()=>{c([]),u(g=>1),b(g=>""),m.setSelected(g=>[]),w.setSort(g=>[]),C.set(g=>[])},[]);a.exports.useEffect(()=>{(()=>{d!==1&&u(L=>1)})()},[f]),a.exports.useEffect(()=>{(()=>{if(l.length>0&&m.selected.length>0){const L=m.selected;l.forEach(M=>{const E=L.findIndex(U=>U[s]===M[s]);E!==-1&&(L[E]=M)}),m.setSelected(L)}})()},[l]);const{loading:y,value:I,error:P,retry:O}=ct(async()=>{if(n)return{status:201,data:{paginas:1,resultados:[...n]},error:{message:""}};{const g=await i({url:o,method:"GET",params:S({p:d,q:T,filter:Fe(JSON.stringify(f)),sort:Fe(JSON.stringify(w.sort))},r)});return g.data&&g.data.resultados&&c(g.data.resultados),g}},[d,f,T,z]);return S(S({data:l,setData:c,rowKey:s,loading:y,value:I,error:P,page:d,handleSetSearch:k,skipPage:h,backPage:p,search:T,retry:O,reset:v,setPage:u,filter:f,optionsFilter:C},m),w)},mo=({helperText:e})=>{const{handleSetSearch:o}=a.exports.useContext(D),[s,r]=a.exports.useState(""),n=l=>{l.preventDefault(),o(s)};return t("form",{onSubmit:n,children:t(Se,{label:"Buscar...",variant:"outlined",size:"small",value:s,onChange:l=>r(l.target.value),fullWidth:!0,autoFocus:!0,helperText:e,InputProps:{endAdornment:x(Ce,{sx:{display:"flex",alignItems:"center"},children:[t(xe,{position:"end",children:t(J,{onClick:n,children:t(ut,{})})}),t(xe,{position:"end",children:t(J,{onClick:()=>{o(""),r("")},children:t(pt,{})})})]})}})})},A=a.exports.createContext({}),fo=s=>{var r=s,{children:e}=r,o=_(r,["children"]);return t(A.Provider,{value:S({},o),children:e})};var ke={},xo=Z.exports;Object.defineProperty(ke,"__esModule",{value:!0});var Qe=ke.default=void 0,go=xo(X),bo=ee,vo=(0,go.default)((0,bo.jsx)("path",{d:"M5.33 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1.33c1.1 0 2 .9 2 2v12c0 1.1-.89 2-2 2zM22 18V6c0-1.1-.9-2-2-2h-1.33c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2H20c1.11 0 2-.9 2-2zm-7.33 0V6c0-1.1-.9-2-2-2h-1.33c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h1.33c1.1 0 2-.9 2-2z"}),"ViewWeek");Qe=ke.default=vo;const So=()=>{const[e,o]=a.exports.useState([]);return{hiddenColumns:e,toggleHidden:n=>{if(e.findIndex(l=>l===n)!==-1){const l=e.filter(c=>c!==n);o([...l])}else o([...e,n])},isHidden:n=>e.includes(n)}},Co=()=>{const[e,o]=ve(),{set:s,insertAt:r,removeAt:n,push:i}=o,{defaultSticky:l,columns:c}=a.exports.useContext(A);return a.exports.useEffect(()=>{(()=>{l&&l.length>0&&s([...l])})()},[]),{stickyColumns:e,toggleSticky:u=>{const h=e.findIndex(w=>w===u),m=c.findIndex(w=>w.name===u);h!==-1?n(h):m>e.length-1?i(u):r(m,u)},isSticky:u=>e.includes(u)}},H=a.exports.createContext({}),yo=({children:e})=>{const{filter:o}=a.exports.useContext(D),s=So(),r=Co(),n=de(),i=a.exports.useRef(null),[l,c]=ve([]);return a.exports.useEffect(()=>{(()=>{c.set(o)})()},[o]),t(H.Provider,{value:R(S(S({},s),r),{filterMenu:n,headRef:i,dataFilter:l,optsFilter:c}),children:e})},wo=()=>{const{columns:e}=a.exports.useContext(A),o=_(a.exports.useContext(H),[]),{toggleHidden:s,isHidden:r}=o,{anchorEl:n,handleClick:i,handleClose:l,open:c}=de();return x($,{children:[t(Y,{size:"small",startIcon:t(Qe,{}),onClick:i,children:"Columnas"}),t(ye,{id:"basic-menu",anchorEl:n,open:c,onClose:l,sx:{width:200},MenuListProps:{"aria-labelledby":"basic-button"},PaperProps:{style:{maxHeight:"400px",width:"20ch"}},children:e.map(({name:p,label:d},u)=>x(ne,{onClick:()=>s(p),style:{display:"flex",flexDirection:"row",flexWrap:"nowrap"},children:[t(Zt,{checked:!r(p),size:"small"}),t(W,{variant:"inherit",noWrap:!0,style:{textTransform:"uppercase",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:d})]},p))})]})},$o=({indexColumn:e,v:o,i:s})=>{const{columnsFilter:r}=a.exports.useContext(A),{optsFilter:n}=a.exports.useContext(H),{updateAt:i}=n;return t($,{children:(r[e].type==="string"||r[e].type==="number")&&t(Se,{label:"Valor",type:r[e].type==="number"?"number":void 0,value:o.valor,onChange:l=>{i(s,R(S({},o),{valor:l.target.value}))},fullWidth:!0,size:"small",style:{width:"100px"}})})},ko=({indexColumn:e,v:o,i:s})=>{const{columnsFilter:r}=a.exports.useContext(A),{optsFilter:n}=a.exports.useContext(H),{updateAt:i}=n;return t($,{children:(r[e].type==="boolean"||r[e].type.includes("enum"))&&r[e].valueOptions&&t($,{children:t(te,{label:"Valor",value:o.valor,values:r[e].valueOptions.map(l=>l.value),options:r[e].valueOptions.map(l=>l.label),onChange:l=>{i(s,R(S({},o),{valor:l.target.value}))},size:"small",fullWidth:!0,style:{width:"100px"}})})})},ae=[{label:"IGUAL",value:"="}],le=[{label:"VAC\xCDO",value:"IS NULL"},{label:"NO VAC\xCDO",value:"IS NOT NULL"}],ge=[...ae,{label:"CONTIENE",value:"LIKE"},...le],be=[...ae,{label:"MAYOR QUE",value:">"},{label:"MENOR QUE",value:"<"},{label:"MAYOR O IGUAL",value:">="},{label:"MENOR O IGUAL",value:"<="},...le],Ie=()=>{const e=a.exports.useCallback(s=>{switch(s){case"number":return be.map(r=>r.value);case"nullenum":return le.map(r=>r.value);case"boolean":return ae.map(r=>r.value);default:return ge.map(r=>r.value)}},[]),o=a.exports.useCallback(s=>{switch(s){case"number":return be.map(r=>r.label);case"nullenum":return le.map(r=>r.label);case"boolean":return ae.map(r=>r.label);default:return ge.map(r=>r.label)}},[]);return{getOptionsValues:e,getOptionsLabels:o}},Io=({indexColumn:e,v:o,i:s})=>{const{columnsFilter:r}=a.exports.useContext(A),{optsFilter:n}=a.exports.useContext(H),{getOptionsValues:i,getOptionsLabels:l}=Ie(),{updateAt:c}=n;return t($,{children:t(te,{label:"Operador",values:i(r[e].type),value:o.operator,options:l(r[e].type),onChange:p=>c(s,R(S({},o),{operator:p.target.value})),size:"small",fullWidth:!0,style:{width:"100px"}})})},zo=({indexColumn:e,v:o,i:s})=>{const{columnsFilter:r}=a.exports.useContext(A),{optsFilter:n}=a.exports.useContext(H),{updateAt:i}=n,{getOptionsValues:l}=Ie();return t($,{children:t(te,{label:"Columna",value:r[e].label,options:r.map(c=>c.label),onChange:c=>{const p=r.findIndex(u=>u.label===c.target.value),d=l(r[p].type);i(s,R(S({},o),{valor:"",operator:d[0],column:r[p].column}))},size:"small",fullWidth:!0,style:{width:"100px"}})})},Lo=({i:e})=>{const d=a.exports.useContext(H),{filterMenu:o}=d,s=_(d,["filterMenu"]),{optionsFilter:r}=a.exports.useContext(D),{set:n}=r,{dataFilter:i,optsFilter:l}=s,{removeAt:c}=l,{handleClose:p}=o;return t($,{children:t(J,{size:"small",color:"error",onClick:()=>{i.length===1&&(p(),n([])),c(e)},children:t(Ue,{})})})},To=({indexColumn:e,v:o,i:s})=>{const{dataFilter:r,optsFilter:n}=a.exports.useContext(H),{updateAt:i}=n;return t($,{children:r.length>1&&r.length-1!==s&&t("div",{style:{width:"100px"},children:t(te,{label:"Condici\xF3n",value:r[s].condition,options:["AND","OR"],onChange:l=>{i(s,R(S({},o),{condition:l.target.value}))},size:"small",fullWidth:!0,style:{width:"100px"}})})})},_o=()=>{const{columnsFilter:e}=a.exports.useContext(A),{dataFilter:o}=a.exports.useContext(H);return t($,{children:t(bt,{dense:!0,disablePadding:!0,style:{width:"100%",padding:10,maxHeight:"300px",overflowY:"auto"},children:o.map((s,r)=>{const n=e.findIndex(i=>i.column===s.column);return t(a.exports.Fragment,{children:t(qe,{disablePadding:!0,style:{width:"100%",margin:"5px 0 5px 0"},children:x(vt,{direction:"row",spacing:1,alignItems:"center",style:{width:"100%"},children:[t("div",{style:{width:"30px"},children:t(Lo,{i:r})}),t("div",{style:{width:"100px"},children:t(zo,{i:r,v:s,indexColumn:n},`${s.column}${r}-${r}`)}),t("div",{style:{width:"100px"},children:t(Io,{i:r,v:s,indexColumn:n})}),!e[n].type.toLocaleLowerCase().includes("null")&&!s.operator.toLocaleLowerCase().includes("null")&&x("div",{style:{width:"100px"},children:[t($o,{i:r,v:s,indexColumn:n}),t(ko,{i:r,v:s,indexColumn:n})]}),t(To,{i:r,v:s,indexColumn:n})]})})},`${s.column}${r}`)})})})},Oo=()=>{const{columnsFilter:e}=a.exports.useContext(A),{optionsFilter:o}=a.exports.useContext(D),{set:s}=o,d=a.exports.useContext(H),{filterMenu:r}=d,n=_(d,["filterMenu"]),{optsFilter:i,dataFilter:l}=n,{push:c}=i,{handleClose:p}=r;return x($,{children:[t(Ge,{}),x("div",{style:{margin:10,width:"100%"},children:[t(Y,{size:"small",color:"error",startIcon:t(Ue,{}),onClick:()=>p(),children:"Cerrar"}),t(Y,{size:"small",color:"inherit",startIcon:t(St,{}),onClick:()=>c({column:e[0].column,operator:e[0].type==="number"?be[0].value:ge[0].value,valor:"",condition:"AND"}),children:"Agregar"}),t(Y,{size:"small",color:"primary",startIcon:t(je,{}),onClick:()=>{p(),s(l)},children:"Filtrar"})]})]})},Mo=()=>{const{columnsFilter:e}=a.exports.useContext(A),h=a.exports.useContext(H),{filterMenu:o}=h,s=_(h,["filterMenu"]),{dataFilter:r,optsFilter:n}=s,{push:i}=n,{anchorEl:l,handleClick:c,handleClose:p,open:d}=o,{getOptionsValues:u}=Ie();return a.exports.useEffect(()=>{(()=>{r.length===0&&i({column:e[0].column,operator:u(e[0].type)[0],valor:"",condition:"AND"})})()},[d]),x($,{children:[t(Y,{size:"small",startIcon:t(je,{}),onClick:c,children:"Filtros"}),t(ft,{open:d,anchorEl:l,onClose:p,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:x("div",{style:{display:"flex",flexDirection:"column"},children:[t(_o,{}),t(Oo,{})]})})]})};var ze={},Ro=Z.exports;Object.defineProperty(ze,"__esModule",{value:!0});var Ye=ze.default=void 0,Do=Ro(X),Po=ee,Fo=(0,Do.default)((0,Po.jsx)("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}),"Sort");Ye=ze.default=Fo;var Le={},Ao=Z.exports;Object.defineProperty(Le,"__esModule",{value:!0});var Je=Le.default=void 0,Ho=Ao(X),Eo=ee,Vo=(0,Ho.default)((0,Eo.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");Je=Le.default=Vo;var Te={},No=Z.exports;Object.defineProperty(Te,"__esModule",{value:!0});var Xe=Te.default=void 0,Bo=No(X),Wo=ee,jo=(0,Bo.default)((0,Wo.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");Xe=Te.default=jo;const Uo=()=>{const{anchorEl:e,open:o,handleClose:s,handleClick:r}=de(),{sortFields:n}=a.exports.useContext(A),{handleSetSort:i,getSortOrder:l}=a.exports.useContext(D);return x($,{children:[t(Y,{className:"headerTableActionsIcon",onClick:r,disableRipple:!0,size:"small",startIcon:t(Ye,{}),children:"Orden"}),t(ye,{id:"basic-menu",anchorEl:e,open:o,onClose:s,sx:{width:200},MenuListProps:{"aria-labelledby":"basic-button"},PaperProps:{style:{maxHeight:"400px",width:"20ch"}},children:n==null?void 0:n.map((c,p)=>{const d=l(c.name);return x(ne,{onClick:()=>i(c.name),style:{display:"flex",flexDirection:"row",flexWrap:"nowrap"},children:[t(W,{variant:"inherit",noWrap:!0,textTransform:"uppercase",children:c.label}),d?d==="asc"?t(Je,{}):t(Xe,{}):t($,{})]},`${c.name}-${p}`)})})]})},qo=()=>{const c=a.exports.useContext(A),{toolbar:e,enableSearch:o}=c,s=_(c,["toolbar","enableSearch"]),{columnsFilter:r,enableHidden:n,sortFields:i}=s,l=at();return t($,{children:(e||o||n||r&&r.length>0)&&x("div",{style:{margin:10,display:"flex",flexDirection:"column"},children:[e&&t("div",{style:R(S({},l.typography.h6),{textTransform:"uppercase"}),children:e}),(o||n||r&&r.length>0)&&x("div",{style:{display:"flex",flexDirection:"row",width:"100%",flexWrap:"wrap"},children:[o&&t("div",{style:{flexGrow:1},children:t(mo,{})}),(n||r&&r.length>0)&&x("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[i&&i.length>0&&t(Uo,{}),r&&r.length>0&&t(Mo,{}),n&&t(wo,{})]})]})]})})},Go=j(io)(({theme:e})=>({[`&.${N.root}, &.${N.active}`]:{color:"white",[`.${N.icon}`]:{fill:"white"}},[`&.${N.icon}`]:{fill:"#f2eded"}})),ie=j(wt)(({theme:e})=>({[".headerTableActionsIcon"]:{color:e.palette.action.disabled},[".headerTableActionsIcon:hover"]:{color:"white"},[`&.${K.head}`]:R(S({backgroundColor:e.palette.primary.main,color:e.palette.common.white,borderTop:`1px solid ${e.palette.primary.main}`,borderBottom:`1px solid ${e.palette.primary.main}`,textTransform:"uppercase"},e.typography.h6),{fontSize:"16px",height:"50px",maxHeight:"50px",[`.${G.checked}, .${G.indeterminate},
        .${G.root}, .${N.root},
        .${N.active}`]:{color:"white"},[`.${N.icon}`]:{color:"#f2eded"}}),[`&.${K.head}.sticky-column`]:{zIndex:3},[`&.${K.body}`]:R(S({},e.typography.body2),{fontSize:"14px"}),[`&.${K.root}`]:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",padding:2,height:"50px",maxHeight:"50px",[`.${V.paper}`]:{wordBreak:"break-all",[`.${V.option}`]:{wordBreak:"break-all"}},[`.${V.noOptions}, .${V.loading}`]:{whiteSpace:"normal",wordBreak:"break-all"}}}));var _e={},Ko=Z.exports;Object.defineProperty(_e,"__esModule",{value:!0});var Ze=_e.default=void 0,Qo=Ko(X),Yo=ee,Jo=(0,Qo.default)((0,Yo.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");Ze=_e.default=Jo;const Xo=({name:e})=>{const{anchorEl:o,open:s,handleClose:r,handleClick:n}=de(),i=_(a.exports.useContext(H),[]),{toggleHidden:l,toggleSticky:c,isSticky:p}=i;return x($,{children:[t(J,{className:"headerTableActionsIcon",onClick:n,disableRipple:!0,size:"small",children:t(Ze,{})}),x(ye,{id:"basic-menu",anchorEl:o,open:s,onClose:r,sx:{width:200},MenuListProps:{"aria-labelledby":"basic-button"},children:[t(ne,{onClick:()=>{c(e),r()},children:t(W,{variant:"inherit",noWrap:!0,children:p(e)?"Desfijar":"Fijar"})}),t(ne,{onClick:()=>{l(e),r()},children:t(W,{variant:"inherit",noWrap:!0,children:"Ocultar"})})]})]})},Ae={display:"flex",flexDirection:"row",alignItems:"center"},me={whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},Zo=e=>{const o=co(),[s,r]=a.exports.useState([]),n=l=>{r([...l])},i=a.exports.useMemo(()=>new ResizeObserver(n),[]);return a.exports.useEffect(()=>(e.current&&i.observe(e.current),()=>i.disconnect()),[e,o]),[s]},et=()=>{const{authState:e}=a.exports.useContext(lt),{tipo:o}=e,{authColumns:s}=a.exports.useContext(A),r=_(a.exports.useContext(H),[]),{headRef:n,isHidden:i,stickyColumns:l}=r,[c]=Zo(n);return{getWidth:(u,h)=>{var w,z,T,b,f;let m=0;if(c.length>0&&((z=(w=c[0])==null?void 0:w.target)==null?void 0:z.children)){const k=Array.from(c[0].target.children).filter(v=>v.className&&v.className.includes("sticky-column"));for(let v=0;v<h;v++){const y=k.length>=v?(b=(T=k[v])==null?void 0:T.id)==null?void 0:b.split("-"):[];y&&y.length===2&&(l==null?void 0:l.includes(y[1]))&&y[1]!==String(u)&&(m=m+(((f=k[v])==null?void 0:f.clientWidth)||0))}}return m},canHide:u=>s&&s.length>0&&o&&s.findIndex(h=>h.name===u)!==-1&&!s[s.findIndex(h=>h.name===u)].types.includes(o)||i(u)}},er=()=>{const v=a.exports.useContext(D),{handleSelectAll:e,selected:o}=v,s=_(v,["handleSelectAll","selected"]),{value:r,rowKey:n,getSortOrder:i,isInSort:l,handleSetSort:c}=s,p=a.exports.useContext(A),{enableSelection:d,sortFields:u,disableHeadDivider:h}=p,{disableHeadActions:m,columns:w,rows:z}=p,T=_(a.exports.useContext(H),[]),{isSticky:b,headRef:f}=T,{getWidth:C,canHide:k}=et();return t($t,{children:x(Ke,{ref:f,children:[d&&z&&t(ie,{padding:"checkbox",children:t(we,{size:"small",color:"primary",indeterminate:o.filter(y=>z.map(I=>I[n]).includes(y[n])).length>0&&o.filter(y=>z.map(I=>I[n]).includes(y[n])).length<z.length,checked:o.filter(y=>z.map(I=>I[n]).includes(y[n])).length===z.length,onChange:y=>e(y,r)})}),w.filter(y=>!k(y.name)).map((L,g)=>{var M=L,{label:y,name:I,width:P}=M,O=_(M,["label","name","width"]);const{style:E}=O,U=u?u.findIndex(re=>re.name.slice(re.name.indexOf(".")+1)===I):-1;return t(ie,{id:`sc-${I}`,className:b(I)?"sticky-column":"",style:R(S({maxWidth:P,width:P},E),{position:b(I)?"sticky":void 0,left:b(I)?C(I,g):void 0}),children:x("div",{style:R(S({},Ae),{justifyContent:"space-between"}),children:[t(Lt,{title:y,placement:"top",disableInteractive:!0,children:u&&U!==-1?t(Go,{active:l(u[U].name),direction:i(u[U].name),onClick:()=>c(u[U].name),style:S({},me),children:t(W,{noWrap:!0,style:S({},me),children:y})}):t(W,{noWrap:!0,style:S({},me),children:y})}),h&&m?t($,{}):x("div",{style:Ae,children:[!m&&t(Xo,{name:I}),!h&&w.filter(re=>!k(re.name)).length-1!==g&&t(Ge,{orientation:"vertical",variant:"middle",flexItem:!0})]})]})},I)})]})})},tr=()=>{var c,p,d;const l=a.exports.useContext(D),{page:e,setPage:o}=l,s=_(l,["page","setPage"]),{backPage:r,skipPage:n,value:i}=s;return x("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[t(J,{onClick:r,disabled:!(e>10&&(((c=i==null?void 0:i.data)==null?void 0:c.paginas)||0)>=10),children:t(Tt,{})}),t(Ot,{color:"primary",count:(p=i==null?void 0:i.data)==null?void 0:p.paginas,page:e,renderItem:u=>t(Mt,R(S({},u),{disableRipple:!0})),onChange:(u,h)=>o(h)}),t(J,{onClick:n,disabled:!(e<=(((d=i==null?void 0:i.data)==null?void 0:d.paginas)||0)-10),children:t(_t,{})})]})},or=()=>{const e=it("(max-width:673px)"),{selected:o}=a.exports.useContext(D),[s,r]=a.exports.useState(0);return a.exports.useEffect(()=>{r(o.length)},[o]),x(Ce,{style:{display:"flex",flexDirection:"row",justifyContent:e?"center":"space-between",flexWrap:"wrap",alignItems:"center",padding:5},sx:{borderTop:n=>`1px solid ${n.palette.primary.main}`},children:[t(tr,{}),t(W,{children:s>0?`${s} FILA${s>1?"S":""} SELECCIONADA${s>1?"S":""}`:""})]})},rr=j(Ke)(({theme:e})=>({[`&.${q.root}`]:{[`.${K.root}`]:{textTransform:"uppercase",background:e.palette.action.selected,border:`1px solid ${e.palette.primary.main}`,borderBottom:"none",borderLeft:"none"}},[`&.${q.root}:first-of-type`]:{[`.${K.root}`]:{borderTop:"none"}},[`.${K.root}:last-of-type`]:{borderRight:"none"},[`&.${q.root} .sticky-column`]:{boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.24)",backgroundColor:"white",zIndex:1},[`&.${q.root}:hover, &.${q.selected}, 
    &.${q.root}:hover .sticky-column`]:{background:e.palette.primary.main,[`.${K.root}`]:{color:"white",borderColor:"white",[`.${V.input}`]:{color:"white"},[`.${V.inputRoot}`]:{background:"none"},[`.${V.paper}`]:{background:"white",color:"black",[`.${G.root}`]:{color:"black"}},[`.${V.clearIndicator}, .${V.popupIndicator}`]:{color:"white"},[`.${V.option}:hover`]:{background:e.palette.primary.main,color:"white",overflowWrap:"break-word",wordBreak:"break-all",[`.${G.root}`]:{color:"white"}}},[`& .${xt.adornedEnd}`]:{color:"white",backgroundColor:"white"},[`& .${Rt.circle}`]:{color:"white",backgroundColor:"white"},[`& .${G.checked}, &.${G.indeterminate},
        & .${G.root}, & .MuiButton-root, & label.Mui-focused,
        & .${ht.root}, & .${mt.root}`]:{color:"white"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"& input":{color:"white"}},"& label":{color:"gray"},"& .Mui-focused":{color:"white",borderColor:"white"},"& .MuiInput-underline:after":{borderBottomColor:"white"}},[`&.${q.selected}, &.${q.selected} .sticky-column`]:{background:e.palette.primary.light},"&:last-of-type td, &:last-of-type th":{border:0}}));var Oe={},sr=Z.exports;Object.defineProperty(Oe,"__esModule",{value:!0});var oe=Oe.default=void 0,nr=sr(X),ar=ee,lr=(0,nr.default)((0,ar.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");oe=Oe.default=lr;const he=e=>{const[o,s]=a.exports.useState(null);return a.exports.useEffect(()=>()=>{o&&clearTimeout(o)},[e]),{timer:o,setTimer:s}},ir=e=>{const{editable:o,row:s,name:r,index:n,label:i}=e,{id:l,anotherIds:c}=s,{func:p,autocomplete:d}=o,{ref:u,visible:h,setVisible:m}=$e(!1),{data:w,setData:z}=a.exports.useContext(D),[T,b]=a.exports.useState(w[n][r]),[f,C]=a.exports.useState(null),[k,v]=a.exports.useState(),{setTimer:y}=he(f),{enqueueSnackbar:I}=ce();return x("form",{ref:u,onSubmit:async O=>{O.preventDefault(),v(!0);const g=await p(T,l,c);v(!1),C(g.status),m(!1),y(setTimeout(()=>C(null),1500));const L=[...w],M=d.dataKey||r;if(g.status===201){if(d.valueKey)for(const E of d.valueKey)L[n][E.name]=T[E.replace];else L[n][M]=T;z(()=>[...L]),I(`"${i.toUpperCase()}" modificado correctamente`,{variant:"success"})}else b(L[n][M]),I(`Error al modificar "${i.toUpperCase()}"`,{variant:"error"})},style:f?{position:"relative"}:void 0,children:[!h&&x($,{children:[t("div",{onClick:()=>m(!0),style:{cursor:"pointer",width:!s[r]&&!h?"100%":void 0,height:!s[r]&&!h?"20px":void 0},children:k?t(ue,{}):s[r]}),f&&t("div",{style:{position:"absolute",right:0,top:0},children:f&&f===201?t(oe,{color:"success"}):f&&f!==201?t(pe,{color:"error"}):t($,{})})]}),h?t(Ft,{urlFetch:d.url,disableHight:!0,onChange:(O,g)=>b(g),autoFocus:!0,fullWidth:!0,enableFirst:!0,openOnFocus:!0,isOptionEqualToValue:d.isOptionEqualToValue,getOptionLabel:d.getOptionLabel,renderOption:(O,g,{selected:L})=>{var M;return x(qe,R(S({},O),{children:[d.disableCheck?t($,{}):t(we,{icon:t(Dt,{}),checkedIcon:t(Pt,{}),style:{marginRight:8},checked:L}),t("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase",whiteSpace:"normal"},children:d.labels?t($,{children:(M=d.labels)==null?void 0:M.map((E,U)=>t(W,{variant:U===0?"body1":"subtitle1",children:t("strong",{children:g[E]})},E))}):t($,{children:t(W,{variant:"body1",children:t("strong",{children:g})})})})]}))}}):t($,{})]})},cr=e=>{const{editable:o,row:s,name:r,index:n,label:i}=e,{id:l,anotherIds:c}=s,{func:p,selection:d}=o,{ref:u,visible:h,setVisible:m}=$e(!1),[w,z]=a.exports.useState(!1),{data:T,setData:b}=a.exports.useContext(D),[f,C]=a.exports.useState(T[n][r]),[k,v]=a.exports.useState(null),[y,I]=a.exports.useState(),{setTimer:P}=he(k),{enqueueSnackbar:O}=ce(),g=async L=>{C(L.target.value),z(!1),I(!0);const M=await p(L.target.value,l,c);I(!1),v(M.status),m(!1),P(setTimeout(()=>v(null),1500));const E=[...T];M.status===201?(E[n][r]=L.target.value,b([...E]),O(`"${i.toUpperCase()}" modificado correctamente`,{variant:"success"})):(C(E[n][r]),O(`Error al modificar "${i.toUpperCase()}"`,{variant:"error"}))};return x("div",{ref:u,style:{position:"relative"},children:[!h&&!w&&x($,{children:[t("div",{onClick:()=>{m(!0),z(!0)},style:{cursor:"pointer",width:!s[r]&&!h?"100%":void 0,height:!s[r]&&!h?"20px":void 0},children:y?t(ue,{}):s[r]}),k&&t("div",{style:{position:"absolute",right:0,top:0},children:k&&k===201?t(oe,{color:"success"}):k&&k!==201?t(pe,{color:"error"}):t($,{})})]}),w&&t(te,{size:"small",open:w,value:f,values:d.map(L=>L.value),options:d.map(L=>L.label),onChange:L=>g(L),onClose:()=>z(!1),autoFocus:!0,onBlur:()=>z(!1)})]})},dr=e=>{const{data:o,setData:s}=a.exports.useContext(D),[r,n]=a.exports.useState(!1),[i,l]=a.exports.useState(null),[c,p]=a.exports.useState(null),[d,u]=a.exports.useState(null),{setTimer:h}=he(i),{enqueueSnackbar:m}=ce(),w=()=>{const{name:b,index:f}=e,C=[...o];C[f][b]=d,s([...C]),p(null)},z=async()=>{try{n(!0);const{editable:b,row:f}=e,{func:C}=b,{id:k}=f,v=await C(c,k);v.status===201?(m(`"${e.label.toUpperCase()}" modificado correctamente`,{variant:"success"}),u(null)):(w(),m(`Error al modificar "${e.label.toUpperCase()}"`,{variant:"error"})),l(v.status)}catch{l(-1),w(),m(`Error al modificar "${e.label.toUpperCase()}"`,{variant:"error"})}finally{h(setTimeout(()=>l(null),1500)),n(!1)}};return a.exports.useEffect(()=>{const b=setTimeout(()=>{c!==null&&z()},1e3);return()=>clearTimeout(b)},[c]),{handleChangeTipo:()=>{const{editable:b,index:f,name:C}=e,{states:k}=b,v=o[f][C],y=k.findIndex(g=>g.value===v),I=y+1>k.length-1?0:y+1,P=k[I].value,O=o;O[f][C]=P,s([...O]),d===null&&u(v),p(P)},isLoading:r,statusCode:i}},ur=s=>{var r=s,{editable:e}=r,o=_(r,["editable"]);const{isLoading:n,statusCode:i,handleChangeTipo:l}=dr(S({editable:e},o)),{name:c,index:p}=o,{data:d}=a.exports.useContext(D),u=e.states.findIndex(h=>h.value===d[p][c]);return x("div",{style:i?{display:"flex",position:"relative",alignItems:"center"}:void 0,children:[t(At,{label:e.states[u].label,color:e.states[u].color,onClick:h=>{h.stopPropagation(),l()},loading:n}),i&&t("div",{style:{position:"absolute",right:0},children:i&&i===201?t(oe,{color:"success"}):i&&i!==201?t(pe,{color:"error"}):t($,{})})]})},pr=e=>{const n=e,{loading:o,component:s}=n,r=_(n,["loading","component"]);return t(Se,R(S({},r),{disabled:r.disabled||o,InputProps:{inputComponent:s,endAdornment:o?t(xe,{position:"end",children:t(ue,{size:20})}):void 0}}))},hr=e=>{const{editable:o,row:s,name:r,index:n,label:i}=e,{id:l,anotherIds:c}=s,p=a.exports.useCallback(g=>{switch(g){case"money":return Ht;case"patronal":return Vt;case"sipe":return Et;default:return}},[]),{type:d,func:u}=o,{ref:h,visible:m,setVisible:w}=$e(!1),{data:z,setData:T}=a.exports.useContext(D),[b,f]=a.exports.useState(z[n][r]),[C,k]=a.exports.useState(null),[v,y]=a.exports.useState(),{setTimer:I}=he(C),{enqueueSnackbar:P}=ce();return x("form",{ref:h,onSubmit:async g=>{g.preventDefault(),y(!0);const L=await u(b,l,c);y(!1),k(L.status),w(!1),I(setTimeout(()=>k(null),1500));const M=[...z];L.status===201?(M[n][r]=b,T([...M]),P(`"${i.toUpperCase()}" modificado correctamente`,{variant:"success"})):(f(M[n][r]),P(`Error al modificar "${i.toUpperCase()}"`,{variant:"error"}))},style:C?{display:"flex",position:"relative",alignItems:"center"}:void 0,children:[!m&&x($,{children:[t("div",{onClick:()=>w(!0),style:{cursor:"pointer",width:!s[r]&&!m?"100%":void 0,height:!s[r]&&!m?"20px":void 0},children:v?t(ue,{}):s[r]}),C&&t("div",{style:{position:"absolute",right:0},children:C&&C===201?t(oe,{color:"success"}):C&&C!==201?t(pe,{color:"error"}):t($,{})})]}),m?t(pr,{size:"small",value:String(b||""),focused:!0,autoFocus:!0,onChange:g=>f(g.target.value),loading:v,component:p(d),fullWidth:!0}):t($,{})]})},mr=e=>e.editable.states?t(ur,S({},e)):e.editable.selection?t(cr,S({},e)):e.editable.autocomplete?t(ir,S({},e)):t(hr,S({},e)),fr=()=>{const w=a.exports.useContext(D),{isSelected:e,rowKey:o}=w,s=_(w,["isSelected","rowKey"]),{data:r,handleSelect:n}=s,z=a.exports.useContext(A),{rows:i,columns:l}=z,c=_(z,["rows","columns"]),{enableSelection:p}=c,d=_(a.exports.useContext(H),[]),{isSticky:u}=d,{getWidth:h,canHide:m}=et();return t(kt,{children:i==null?void 0:i.map((T,b)=>x(rr,{selected:e?e(T[`${o}`]):!1,onClick:p?f=>n(f,T[`${o}`],r):void 0,children:[p&&t(ie,{padding:"checkbox",children:t(we,{size:"small",color:"primary",checked:e?e(T[`${o}`]):!1})}),l.filter(f=>!m(f.name)).map((y,v)=>{var I=y,{name:f,width:C}=I,k=_(I,["name","width"]);const{style:P,editable:O}=k;return t(a.exports.Fragment,{children:t(ie,{className:u(f)?"sticky-column":void 0,component:"th",scope:"row",style:R(S({maxWidth:C,width:C},P),{position:u(f)?"sticky":void 0,left:u(f)?h(f,v):void 0}),children:O?t(mr,R(S({},k),{name:f,width:C,row:T,editable:O,index:b}),`editable-cell${b}${v}${T[o]}`):T[`${f}`]})},`${f}${b}${v}`)})]},`cell-${b}`))})},He=({label:e})=>x(Nt,{children:[t("svg",{width:"120",height:"100",viewBox:"0 0 184 152","aria-hidden":!0,focusable:"false",children:x("g",{fill:"none",fillRule:"evenodd",children:[x("g",{transform:"translate(24 31.67)",children:[t("ellipse",{className:"ant-empty-img-5",cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"}),t("path",{className:"ant-empty-img-1",d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"}),t("path",{className:"ant-empty-img-2",d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"}),t("path",{className:"ant-empty-img-3",d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"})]}),t("path",{className:"ant-empty-img-3",d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"}),x("g",{className:"ant-empty-img-4",transform:"translate(149.65 15.383)",children:[t("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"}),t("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"})]})]})}),t(Ce,{sx:{mt:1,textTransform:"uppercase",fontWeight:"bold"},children:e?t($,{children:e}):t($,{children:"Sin resultado"})})]}),ls=e=>{var n;const{value:o,loading:s,data:r}=a.exports.useContext(D);return t(fo,R(S({},e),{children:t(yo,{children:x(Bt,{variant:"outlined",sx:{boder:i=>`1 px solid ${i.palette.primary.main}`,position:"relative"},children:[t(qo,{}),s&&t(Wt,{}),x(It,{sx:{maxHeight:i=>`calc(100vh - ${i.spacing(35)})`},children:[o&&o.status!==201&&t(He,{label:(n=o.error)==null?void 0:n.message}),s&&r.length===0&&t(He,{label:"Cargando"}),o&&o.status===201&&r.length>0&&x(zt,{sx:{tableLayout:"auto"},"aria-label":"customized table",size:"medium",stickyHeader:!0,children:[t(er,{}),t(fr,{})]})]}),t(or,{})]})})}))};export{ls as D,as as a,ns as b,ss as u};
