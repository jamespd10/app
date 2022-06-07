var ot=Object.defineProperty,rt=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var Re=(e,o,s)=>o in e?ot(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,S=(e,o)=>{for(var s in o||(o={}))De.call(o,s)&&Re(e,s,o[s]);if(ne)for(var s of ne(o))Pe.call(o,s)&&Re(e,s,o[s]);return e},R=(e,o)=>rt(e,st(o));var L=(e,o)=>{var s={};for(var r in e)De.call(e,r)&&o.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&ne)for(var r of ne(e))o.indexOf(r)<0&&Pe.call(e,r)&&(s[r]=e[r]);return s};import{T as be}from"./TextInput.js";import{d as nt}from"./Search.js";import{d as at}from"./Clear.js";import{k as Ve,h as Ne,l as j,m as Q,_ as B,v as Fe,a4 as lt,a3 as it,r as a,u as Be,c as We,a as t,j as x,e as fe,n as je,F as $,O as ct,A as dt,V as ut,aC as pt,aD as de,a5 as ue}from"./index.js";import{B as Se}from"./Box.js";import{I as xe}from"./InputAdornment.js";import{I as ee,i as ht}from"./IconButton.js";import{c as Y,i as J,r as X}from"./jsx-runtime_commonjs-proxy.js";import{u as pe,S as te,d as Ue,a as mt,b as Ae}from"./base64.js";import{_ as Ce}from"./useList.js";import{B as Z,b as ft}from"./Button.js";import{M as ye,P as xt}from"./Menu.js";import{M as ae}from"./MenuItem.js";import{S as gt,c as G,C as we}from"./Checkbox.js";import{T as W}from"./Typography.js";import{d as qe}from"./Close2.js";import{a as vt}from"./List.js";import{L as Ge}from"./ListItem.js";import{S as bt}from"./Stack.js";import{d as St}from"./Add.js";import{D as Ke}from"./Divider.js";import{c as Ct}from"./createSvgIcon.js";import{B as yt}from"./ButtonBase.js";import{T as wt,t as K,a as $t,b as Qe,d as kt,c as It,e as q,f as zt,g as _t,h as Tt}from"./SkipNextOutlined.js";import{a as V}from"./Autocomplete.js";import"./jwt-decode.esm.js";import{T as Lt}from"./Tooltip.js";import{P as Ot,a as Mt}from"./Pagination.js";import{o as Rt}from"./TextField.js";import{u as $e}from"./useComponentVisible.js";import{d as Dt,a as Pt}from"./CheckBoxOutlineBlank.js";import{A as Ft}from"./AutocompleteServer.js";import{C as At}from"./ChipState.js";import{C as Ht}from"./CustomDecimal.js";import{C as Et,a as Vt}from"./CustomSipe.js";import{P as Nt}from"./Paper.js";import{L as Bt}from"./LinearProgress.js";import{_ as Wt}from"./useAsyncRetry.js";import{u as jt}from"./useHttpService.js";function Ut(e){return Ne("MuiSwitch",e)}const qt=Ve("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var F=qt;const Gt=["className","color","edge","size","sx"],Kt=e=>{const{classes:o,edge:s,size:r,color:n,checked:i,disabled:l}=e,c={root:["root",s&&`edge${Q(s)}`,`size${Q(r)}`],switchBase:["switchBase",`color${Q(n)}`,i&&"checked",l&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},p=je(c,Ut,o);return B({},o,p)},Qt=j("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.edge&&o[`edge${Q(s.edge)}`],o[`size${Q(s.size)}`]]}})(({ownerState:e})=>B({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${F.thumb}`]:{width:16,height:16},[`& .${F.switchBase}`]:{padding:4,[`&.${F.checked}`]:{transform:"translateX(16px)"}}})),Yt=j(gt,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.switchBase,{[`& .${F.input}`]:o.input},s.color!=="default"&&o[`color${Q(s.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${F.checked}`]:{transform:"translateX(20px)"},[`&.${F.disabled}`]:{color:e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]},[`&.${F.checked} + .${F.track}`]:{opacity:.5},[`&.${F.disabled} + .${F.track}`]:{opacity:e.palette.mode==="light"?.12:.2},[`& .${F.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:o})=>B({"&:hover":{backgroundColor:Fe(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${F.checked}`]:{color:e.palette[o.color].main,"&:hover":{backgroundColor:Fe(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${F.disabled}`]:{color:e.palette.mode==="light"?lt(e.palette[o.color].main,.62):it(e.palette[o.color].main,.55)}},[`&.${F.checked} + .${F.track}`]:{backgroundColor:e.palette[o.color].main}})),Jt=j("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,o)=>o.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.palette.mode==="light"?e.palette.common.black:e.palette.common.white,opacity:e.palette.mode==="light"?.38:.3})),Xt=j("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,o)=>o.thumb})(({theme:e})=>({boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Zt=a.exports.forwardRef(function(o,s){const r=Be({props:o,name:"MuiSwitch"}),{className:n,color:i="primary",edge:l=!1,size:c="medium",sx:p}=r,d=We(r,Gt),u=B({},r,{color:i,edge:l,size:c}),h=Kt(u),m=t(Xt,{className:h.thumb,ownerState:u});return x(Qt,{className:fe(h.root,n),sx:p,ownerState:u,children:[t(Yt,B({type:"checkbox",icon:m,checkedIcon:m,ref:s,ownerState:u},d,{classes:B({},h,{root:h.switchBase})})),t(Jt,{className:h.track,ownerState:u})]})});var eo=Zt,to=Ct(t("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function oo(e){return Ne("MuiTableSortLabel",e)}const ro=Ve("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]);var N=ro;const so=["active","children","className","direction","hideSortIcon","IconComponent"],no=e=>{const{classes:o,direction:s,active:r}=e,n={root:["root",r&&"active"],icon:["icon",`iconDirection${Q(s)}`]};return je(n,oo,o)},ao=j(yt,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.active&&o.active]}})(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:e.palette.text.secondary},"&:hover":{color:e.palette.text.secondary,[`& .${N.icon}`]:{opacity:.5}},[`&.${N.active}`]:{color:e.palette.text.primary,[`& .${N.icon}`]:{opacity:1,color:e.palette.text.secondary}}})),lo=j("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.icon,o[`iconDirection${Q(s.direction)}`]]}})(({theme:e,ownerState:o})=>B({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},o.direction==="desc"&&{transform:"rotate(0deg)"},o.direction==="asc"&&{transform:"rotate(180deg)"})),io=a.exports.forwardRef(function(o,s){const r=Be({props:o,name:"MuiTableSortLabel"}),{active:n=!1,children:i,className:l,direction:c="asc",hideSortIcon:p=!1,IconComponent:d=to}=r,u=We(r,so),h=B({},r,{active:n,direction:c,hideSortIcon:p,IconComponent:d}),m=no(h);return x(ao,B({className:fe(m.root,l),component:"span",disableRipple:!0,ownerState:h,ref:s},u,{children:[i,p&&!n?null:t(lo,{as:d,className:fe(m.icon),ownerState:h})]}))});var co=io;const uo=()=>{const[e,o]=a.exports.useState([0,0]);return a.exports.useLayoutEffect(()=>{const s=()=>o([window.innerWidth,window.innerHeight]);return window.addEventListener("resize",s),s(),()=>window.removeEventListener("resize",s)},[]),e},D=a.exports.createContext({}),ls=()=>a.exports.useContext(D),is=s=>{var r=s,{children:e}=r,o=L(r,["children"]);return t(D.Provider,{value:S({},o),children:e})},po=({helperText:e})=>{const{handleSetSearch:o}=a.exports.useContext(D),[s,r]=a.exports.useState(""),n=l=>{l.preventDefault(),o(s)};return t("form",{onSubmit:n,children:t(be,{label:"Buscar...",variant:"outlined",size:"small",value:s,onChange:l=>r(l.target.value),fullWidth:!0,autoFocus:!0,helperText:e,InputProps:{endAdornment:x(Se,{sx:{display:"flex",alignItems:"center"},children:[t(xe,{position:"end",children:t(ee,{onClick:n,children:t(nt,{})})}),t(xe,{position:"end",children:t(ee,{onClick:()=>{o(""),r("")},children:t(at,{})})})]})}})})},A=a.exports.createContext({}),ho=s=>{var r=s,{children:e}=r,o=L(r,["children"]);return t(A.Provider,{value:S({},o),children:e})};var ke={},mo=J.exports;Object.defineProperty(ke,"__esModule",{value:!0});var Ye=ke.default=void 0,fo=mo(Y),xo=X,go=(0,fo.default)((0,xo.jsx)("path",{d:"M5.33 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1.33c1.1 0 2 .9 2 2v12c0 1.1-.89 2-2 2zM22 18V6c0-1.1-.9-2-2-2h-1.33c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2H20c1.11 0 2-.9 2-2zm-7.33 0V6c0-1.1-.9-2-2-2h-1.33c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h1.33c1.1 0 2-.9 2-2z"}),"ViewWeek");Ye=ke.default=go;const vo=()=>{const[e,o]=a.exports.useState([]);return{hiddenColumns:e,toggleHidden:n=>{if(e.findIndex(l=>l===n)!==-1){const l=e.filter(c=>c!==n);o([...l])}else o([...e,n])},isHidden:n=>e.includes(n)}},bo=()=>{const[e,o]=Ce(),{set:s,insertAt:r,removeAt:n,push:i}=o,{defaultSticky:l,columns:c}=a.exports.useContext(A);return a.exports.useEffect(()=>{(()=>{l&&l.length>0&&s([...l])})()},[]),{stickyColumns:e,toggleSticky:u=>{const h=e.findIndex(w=>w===u),m=c.findIndex(w=>w.name===u);h!==-1?n(h):m>e.length-1?i(u):r(m,u)},isSticky:u=>e.includes(u)}},H=a.exports.createContext({}),So=({children:e})=>{const{filter:o}=a.exports.useContext(D),s=vo(),r=bo(),n=pe(),i=a.exports.useRef(null),[l,c]=Ce([]);return a.exports.useEffect(()=>{(()=>{c.set(o)})()},[o]),t(H.Provider,{value:R(S(S({},s),r),{filterMenu:n,headRef:i,dataFilter:l,optsFilter:c}),children:e})},Co=()=>{const{columns:e}=a.exports.useContext(A),o=L(a.exports.useContext(H),[]),{toggleHidden:s,isHidden:r}=o,{anchorEl:n,handleClick:i,handleClose:l,open:c}=pe();return x($,{children:[t(Z,{size:"small",startIcon:t(Ye,{}),onClick:i,children:"Columnas"}),t(ye,{id:"basic-menu",anchorEl:n,open:c,onClose:l,sx:{width:200},MenuListProps:{"aria-labelledby":"basic-button"},PaperProps:{style:{maxHeight:"400px",width:"20ch"}},children:e.map(({name:p,label:d},u)=>x(ae,{onClick:()=>s(p),style:{display:"flex",flexDirection:"row",flexWrap:"nowrap"},children:[t(eo,{checked:!r(p),size:"small"}),t(W,{variant:"inherit",noWrap:!0,style:{textTransform:"uppercase",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:d})]},p))})]})},yo=({indexColumn:e,v:o,i:s})=>{const{columnsFilter:r}=a.exports.useContext(A),{optsFilter:n}=a.exports.useContext(H),{updateAt:i}=n;return t($,{children:(r[e].type==="string"||r[e].type==="number")&&t(be,{label:"Valor",type:r[e].type==="number"?"number":void 0,value:o.valor,onChange:l=>{i(s,R(S({},o),{valor:l.target.value}))},fullWidth:!0,size:"small",style:{width:"100px"}})})},wo=({indexColumn:e,v:o,i:s})=>{const{columnsFilter:r}=a.exports.useContext(A),{optsFilter:n}=a.exports.useContext(H),{updateAt:i}=n;return t($,{children:(r[e].type==="boolean"||r[e].type.includes("enum"))&&r[e].valueOptions&&t($,{children:t(te,{label:"Valor",value:o.valor,values:r[e].valueOptions.map(l=>l.value),options:r[e].valueOptions.map(l=>l.label),onChange:l=>{i(s,R(S({},o),{valor:l.target.value}))},size:"small",fullWidth:!0,style:{width:"100px"}})})})},le=[{label:"IGUAL",value:"="}],ie=[{label:"VAC\xCDO",value:"IS NULL"},{label:"NO VAC\xCDO",value:"IS NOT NULL"}],ge=[...le,{label:"CONTIENE",value:"LIKE"},...ie],ve=[...le,{label:"MAYOR QUE",value:">"},{label:"MENOR QUE",value:"<"},{label:"MAYOR O IGUAL",value:">="},{label:"MENOR O IGUAL",value:"<="},...ie],Ie=()=>{const e=a.exports.useCallback(s=>{switch(s){case"number":return ve.map(r=>r.value);case"nullenum":return ie.map(r=>r.value);case"boolean":return le.map(r=>r.value);default:return ge.map(r=>r.value)}},[]),o=a.exports.useCallback(s=>{switch(s){case"number":return ve.map(r=>r.label);case"nullenum":return ie.map(r=>r.label);case"boolean":return le.map(r=>r.label);default:return ge.map(r=>r.label)}},[]);return{getOptionsValues:e,getOptionsLabels:o}},$o=({indexColumn:e,v:o,i:s})=>{const{columnsFilter:r}=a.exports.useContext(A),{optsFilter:n}=a.exports.useContext(H),{getOptionsValues:i,getOptionsLabels:l}=Ie(),{updateAt:c}=n;return t($,{children:t(te,{label:"Operador",values:i(r[e].type),value:o.operator,options:l(r[e].type),onChange:p=>c(s,R(S({},o),{operator:p.target.value})),size:"small",fullWidth:!0,style:{width:"100px"}})})},ko=({indexColumn:e,v:o,i:s})=>{const{columnsFilter:r}=a.exports.useContext(A),{optsFilter:n}=a.exports.useContext(H),{updateAt:i}=n,{getOptionsValues:l}=Ie();return t($,{children:t(te,{label:"Columna",value:r[e].label,options:r.map(c=>c.label),onChange:c=>{const p=r.findIndex(u=>u.label===c.target.value),d=l(r[p].type);i(s,R(S({},o),{valor:"",operator:d[0],column:r[p].column}))},size:"small",fullWidth:!0,style:{width:"100px"}})})},Io=({i:e})=>{const d=a.exports.useContext(H),{filterMenu:o}=d,s=L(d,["filterMenu"]),{optionsFilter:r}=a.exports.useContext(D),{set:n}=r,{dataFilter:i,optsFilter:l}=s,{removeAt:c}=l,{handleClose:p}=o;return t($,{children:t(ee,{size:"small",color:"error",onClick:()=>{i.length===1&&(p(),n([])),c(e)},children:t(qe,{})})})},zo=({indexColumn:e,v:o,i:s})=>{const{dataFilter:r,optsFilter:n}=a.exports.useContext(H),{updateAt:i}=n;return t($,{children:r.length>1&&r.length-1!==s&&t("div",{style:{width:"100px"},children:t(te,{label:"Condici\xF3n",value:r[s].condition,options:["AND","OR"],onChange:l=>{i(s,R(S({},o),{condition:l.target.value}))},size:"small",fullWidth:!0,style:{width:"100px"}})})})},_o=()=>{const{columnsFilter:e}=a.exports.useContext(A),{dataFilter:o}=a.exports.useContext(H);return t($,{children:t(vt,{dense:!0,disablePadding:!0,style:{width:"100%",padding:10,maxHeight:"300px",overflowY:"auto"},children:o.map((s,r)=>{const n=e.findIndex(i=>i.column===s.column);return t(a.exports.Fragment,{children:t(Ge,{disablePadding:!0,style:{width:"100%",margin:"5px 0 5px 0"},children:x(bt,{direction:"row",spacing:1,alignItems:"center",style:{width:"100%"},children:[t("div",{style:{width:"30px"},children:t(Io,{i:r})}),t("div",{style:{width:"100px"},children:t(ko,{i:r,v:s,indexColumn:n},`${s.column}${r}-${r}`)}),t("div",{style:{width:"100px"},children:t($o,{i:r,v:s,indexColumn:n})}),!e[n].type.toLocaleLowerCase().includes("null")&&!s.operator.toLocaleLowerCase().includes("null")&&x("div",{style:{width:"100px"},children:[t(yo,{i:r,v:s,indexColumn:n}),t(wo,{i:r,v:s,indexColumn:n})]}),t(zo,{i:r,v:s,indexColumn:n})]})})},`${s.column}${r}`)})})})},To=()=>{const{columnsFilter:e}=a.exports.useContext(A),{optionsFilter:o}=a.exports.useContext(D),{set:s}=o,d=a.exports.useContext(H),{filterMenu:r}=d,n=L(d,["filterMenu"]),{optsFilter:i,dataFilter:l}=n,{push:c}=i,{handleClose:p}=r;return x($,{children:[t(Ke,{}),x("div",{style:{margin:10,width:"100%"},children:[t(Z,{size:"small",color:"error",startIcon:t(qe,{}),onClick:()=>p(),children:"Cerrar"}),t(Z,{size:"small",color:"inherit",startIcon:t(St,{}),onClick:()=>c({column:e[0].column,operator:e[0].type==="number"?ve[0].value:ge[0].value,valor:"",condition:"AND"}),children:"Agregar"}),t(Z,{size:"small",color:"primary",startIcon:t(Ue,{}),onClick:()=>{p(),s(l)},children:"Filtrar"})]})]})},Lo=()=>{const{columnsFilter:e}=a.exports.useContext(A),h=a.exports.useContext(H),{filterMenu:o}=h,s=L(h,["filterMenu"]),{dataFilter:r,optsFilter:n}=s,{push:i}=n,{anchorEl:l,handleClick:c,handleClose:p,open:d}=o,{getOptionsValues:u}=Ie();return a.exports.useEffect(()=>{(()=>{r.length===0&&i({column:e[0].column,operator:u(e[0].type)[0],valor:"",condition:"AND"})})()},[d]),x($,{children:[t(Z,{size:"small",startIcon:t(Ue,{}),onClick:c,children:"Filtros"}),t(xt,{open:d,anchorEl:l,onClose:p,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:x("div",{style:{display:"flex",flexDirection:"column"},children:[t(_o,{}),t(To,{})]})})]})};var ze={},Oo=J.exports;Object.defineProperty(ze,"__esModule",{value:!0});var Je=ze.default=void 0,Mo=Oo(Y),Ro=X,Do=(0,Mo.default)((0,Ro.jsx)("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}),"Sort");Je=ze.default=Do;var _e={},Po=J.exports;Object.defineProperty(_e,"__esModule",{value:!0});var Xe=_e.default=void 0,Fo=Po(Y),Ao=X,Ho=(0,Fo.default)((0,Ao.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");Xe=_e.default=Ho;var Te={},Eo=J.exports;Object.defineProperty(Te,"__esModule",{value:!0});var Ze=Te.default=void 0,Vo=Eo(Y),No=X,Bo=(0,Vo.default)((0,No.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");Ze=Te.default=Bo;const Wo=()=>{const{anchorEl:e,open:o,handleClose:s,handleClick:r}=pe(),{sortFields:n}=a.exports.useContext(A),{handleSetSort:i,getSortOrder:l}=a.exports.useContext(D);return x($,{children:[t(Z,{className:"headerTableActionsIcon",onClick:r,disableRipple:!0,size:"small",startIcon:t(Je,{}),children:"Orden"}),t(ye,{id:"basic-menu",anchorEl:e,open:o,onClose:s,sx:{width:200},MenuListProps:{"aria-labelledby":"basic-button"},PaperProps:{style:{maxHeight:"400px",width:"20ch"}},children:n==null?void 0:n.map((c,p)=>{const d=l(c.name);return x(ae,{onClick:()=>i(c.name),style:{display:"flex",flexDirection:"row",flexWrap:"nowrap"},children:[t(W,{variant:"inherit",noWrap:!0,textTransform:"uppercase",children:c.label}),d?d==="asc"?t(Xe,{}):t(Ze,{}):t($,{})]},`${c.name}-${p}`)})})]})},jo=()=>{const c=a.exports.useContext(A),{toolbar:e,enableSearch:o}=c,s=L(c,["toolbar","enableSearch"]),{columnsFilter:r,enableHidden:n,sortFields:i}=s,l=ct();return t($,{children:(e||o||n||r&&r.length>0)&&x("div",{style:{margin:10,display:"flex",flexDirection:"column"},children:[e&&t("div",{style:R(S({},l.typography.h6),{textTransform:"uppercase"}),children:e}),(o||n||r&&r.length>0)&&x("div",{style:{display:"flex",flexDirection:"row",width:"100%",flexWrap:"wrap"},children:[o&&t("div",{style:{flexGrow:1},children:t(po,{})}),(n||r&&r.length>0)&&x("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[i&&i.length>0&&t(Wo,{}),r&&r.length>0&&t(Lo,{}),n&&t(Co,{})]})]})]})})},Uo=j(co)(({theme:e})=>({[`&.${N.root}, &.${N.active}`]:{color:"white",[`.${N.icon}`]:{fill:"white"}},[`&.${N.icon}`]:{fill:"#f2eded"}})),ce=j(wt)(({theme:e})=>({[".headerTableActionsIcon"]:{color:e.palette.action.disabled},[".headerTableActionsIcon:hover"]:{color:"white"},[`&.${K.head}`]:R(S({backgroundColor:e.palette.primary.main,color:e.palette.common.white,borderTop:`1px solid ${e.palette.primary.main}`,borderBottom:`1px solid ${e.palette.primary.main}`,textTransform:"uppercase"},e.typography.h6),{fontSize:"16px",height:"50px",maxHeight:"50px",[`.${G.checked}, .${G.indeterminate},
        .${G.root}, .${N.root},
        .${N.active}`]:{color:"white"},[`.${N.icon}`]:{color:"#f2eded"}}),[`&.${K.head}.sticky-column`]:{zIndex:3},[`&.${K.body}`]:R(S({},e.typography.body2),{fontSize:"14px"}),[`&.${K.root}`]:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",padding:2,height:"50px",maxHeight:"50px",[`.${V.paper}`]:{wordBreak:"break-all",[`.${V.option}`]:{wordBreak:"break-all"}},[`.${V.noOptions}, .${V.loading}`]:{whiteSpace:"normal",wordBreak:"break-all"}}}));var Le={},qo=J.exports;Object.defineProperty(Le,"__esModule",{value:!0});var et=Le.default=void 0,Go=qo(Y),Ko=X,Qo=(0,Go.default)((0,Ko.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");et=Le.default=Qo;const Yo=({name:e})=>{const{anchorEl:o,open:s,handleClose:r,handleClick:n}=pe(),i=L(a.exports.useContext(H),[]),{toggleHidden:l,toggleSticky:c,isSticky:p}=i;return x($,{children:[t(ee,{className:"headerTableActionsIcon",onClick:n,disableRipple:!0,size:"small",children:t(et,{})}),x(ye,{id:"basic-menu",anchorEl:o,open:s,onClose:r,sx:{width:200},MenuListProps:{"aria-labelledby":"basic-button"},children:[t(ae,{onClick:()=>{c(e),r()},children:t(W,{variant:"inherit",noWrap:!0,children:p(e)?"Desfijar":"Fijar"})}),t(ae,{onClick:()=>{l(e),r()},children:t(W,{variant:"inherit",noWrap:!0,children:"Ocultar"})})]})]})},He={display:"flex",flexDirection:"row",alignItems:"center"},me={whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},Jo=e=>{const o=uo(),[s,r]=a.exports.useState([]),n=l=>{r([...l])},i=a.exports.useMemo(()=>new ResizeObserver(n),[]);return a.exports.useEffect(()=>(e.current&&i.observe(e.current),()=>i.disconnect()),[e,o]),[s]},tt=()=>{const{authState:e}=a.exports.useContext(dt),{tipo:o}=e,{authColumns:s}=a.exports.useContext(A),r=L(a.exports.useContext(H),[]),{headRef:n,isHidden:i,stickyColumns:l}=r,[c]=Jo(n);return{getWidth:(u,h)=>{var w,z,T,v,f;let m=0;if(c.length>0&&((z=(w=c[0])==null?void 0:w.target)==null?void 0:z.children)){const k=Array.from(c[0].target.children).filter(b=>b.className&&b.className.includes("sticky-column"));for(let b=0;b<h;b++){const y=k.length>=b?(v=(T=k[b])==null?void 0:T.id)==null?void 0:v.split("-"):[];y&&y.length===2&&(l==null?void 0:l.includes(y[1]))&&y[1]!==String(u)&&(m=m+(((f=k[b])==null?void 0:f.clientWidth)||0))}}return m},canHide:u=>s&&s.length>0&&o&&s.findIndex(h=>h.name===u)!==-1&&!s[s.findIndex(h=>h.name===u)].types.includes(o)||i(u)}},Xo=()=>{const b=a.exports.useContext(D),{handleSelectAll:e,selected:o}=b,s=L(b,["handleSelectAll","selected"]),{value:r,rowKey:n,getSortOrder:i,isInSort:l,handleSetSort:c}=s,p=a.exports.useContext(A),{enableSelection:d,sortFields:u,disableHeadDivider:h}=p,{disableHeadActions:m,columns:w,rows:z}=p,T=L(a.exports.useContext(H),[]),{isSticky:v,headRef:f}=T,{getWidth:C,canHide:k}=tt();return t($t,{children:x(Qe,{ref:f,children:[d&&z&&t(ce,{padding:"checkbox",children:t(we,{size:"small",color:"primary",indeterminate:o.filter(y=>z.map(I=>I[n]).includes(y[n])).length>0&&o.filter(y=>z.map(I=>I[n]).includes(y[n])).length<z.length,checked:o.filter(y=>z.map(I=>I[n]).includes(y[n])).length===z.length,onChange:y=>e(y,r)})}),w.filter(y=>!k(y.name)).map((_,g)=>{var M=_,{label:y,name:I,width:P}=M,O=L(M,["label","name","width"]);const{style:E}=O,U=u?u.findIndex(se=>se.name.slice(se.name.indexOf(".")+1)===I):-1;return t(ce,{id:`sc-${I}`,className:v(I)?"sticky-column":"",style:R(S({maxWidth:P,width:P},E),{position:v(I)?"sticky":void 0,left:v(I)?C(I,g):void 0}),children:x("div",{style:R(S({},He),{justifyContent:"space-between"}),children:[t(Lt,{title:y,placement:"top",disableInteractive:!0,children:u&&U!==-1?t(Uo,{active:l(u[U].name),direction:i(u[U].name),onClick:()=>c(u[U].name),style:S({},me),children:t(W,{noWrap:!0,style:S({},me),children:y})}):t(W,{noWrap:!0,style:S({},me),children:y})}),h&&m?t($,{}):x("div",{style:He,children:[!m&&t(Yo,{name:I}),!h&&w.filter(se=>!k(se.name)).length-1!==g&&t(Ke,{orientation:"vertical",variant:"middle",flexItem:!0})]})]})},I)})]})})},Zo=()=>{var c,p,d;const l=a.exports.useContext(D),{page:e,setPage:o}=l,s=L(l,["page","setPage"]),{backPage:r,skipPage:n,value:i}=s;return x("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[t(ee,{onClick:r,disabled:!(e>10&&(((c=i==null?void 0:i.data)==null?void 0:c.paginas)||0)>=10),children:t(kt,{})}),t(Ot,{color:"primary",count:(p=i==null?void 0:i.data)==null?void 0:p.paginas,page:e,renderItem:u=>t(Mt,R(S({},u),{disableRipple:!0})),onChange:(u,h)=>o(h)}),t(ee,{onClick:n,disabled:!(e<=(((d=i==null?void 0:i.data)==null?void 0:d.paginas)||0)-10),children:t(It,{})})]})},er=()=>{const e=ut("(max-width:673px)"),{selected:o}=a.exports.useContext(D),[s,r]=a.exports.useState(0);return a.exports.useEffect(()=>{r(o.length)},[o]),x(Se,{style:{display:"flex",flexDirection:"row",justifyContent:e?"center":"space-between",flexWrap:"wrap",alignItems:"center",padding:5},sx:{borderTop:n=>`1px solid ${n.palette.primary.main}`},children:[t(Zo,{}),t(W,{children:s>0?`${s} FILA${s>1?"S":""} SELECCIONADA${s>1?"S":""}`:""})]})},tr=j(Qe)(({theme:e})=>({[`&.${q.root}`]:{[`.${K.root}`]:{textTransform:"uppercase",background:e.palette.action.selected,border:`1px solid ${e.palette.primary.main}`,borderBottom:"none",borderLeft:"none"}},[`&.${q.root}:first-of-type`]:{[`.${K.root}`]:{borderTop:"none"}},[`.${K.root}:last-of-type`]:{borderRight:"none"},[`&.${q.root} .sticky-column`]:{boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.24)",backgroundColor:"white",zIndex:1},[`&.${q.root}:hover, &.${q.selected}, 
    &.${q.root}:hover .sticky-column`]:{background:e.palette.primary.main,[`.${K.root}`]:{color:"white",borderColor:"white",[`.${V.input}`]:{color:"white"},[`.${V.inputRoot}`]:{background:"none"},[`.${V.paper}`]:{background:"white",color:"black",[`.${G.root}`]:{color:"black"}},[`.${V.clearIndicator}, .${V.popupIndicator}`]:{color:"white"},[`.${V.option}:hover`]:{background:e.palette.primary.main,color:"white",overflowWrap:"break-word",wordBreak:"break-all",[`.${G.root}`]:{color:"white"}}},[`& .${Rt.adornedEnd}`]:{color:"white",backgroundColor:"white"},[`& .${pt.circle}`]:{color:"white",backgroundColor:"white"},[`& .${G.checked}, &.${G.indeterminate},
        & .${G.root}, & .MuiButton-root, & label.Mui-focused,
        & .${ht.root}, & .${ft.root}`]:{color:"white"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"& input":{color:"white"}},"& label":{color:"gray"},"& .Mui-focused":{color:"white",borderColor:"white"},"& .MuiInput-underline:after":{borderBottomColor:"white"}},[`&.${q.selected}, &.${q.selected} .sticky-column`]:{background:e.palette.primary.light},"&:last-of-type td, &:last-of-type th":{border:0}}));var Oe={},or=J.exports;Object.defineProperty(Oe,"__esModule",{value:!0});var oe=Oe.default=void 0,rr=or(Y),sr=X,nr=(0,rr.default)((0,sr.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");oe=Oe.default=nr;var Me={},ar=J.exports;Object.defineProperty(Me,"__esModule",{value:!0});var re=Me.default=void 0,lr=ar(Y),ir=X,cr=(0,lr.default)((0,ir.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline");re=Me.default=cr;const he=e=>{const[o,s]=a.exports.useState(null);return a.exports.useEffect(()=>()=>{o&&clearTimeout(o)},[e]),{timer:o,setTimer:s}},dr=e=>{const{editable:o,row:s,name:r,index:n,label:i}=e,{id:l,anotherIds:c}=s,{func:p,autocomplete:d}=o,{ref:u,visible:h,setVisible:m}=$e(!1),{data:w,setData:z}=a.exports.useContext(D),[T,v]=a.exports.useState(w[n][r]),[f,C]=a.exports.useState(null),[k,b]=a.exports.useState(),{setTimer:y}=he(f),{enqueueSnackbar:I}=de();return x("form",{ref:u,onSubmit:async O=>{O.preventDefault(),b(!0);const g=await p(T,l,c);b(!1),C(g.status),m(!1),y(setTimeout(()=>C(null),1500));const _=[...w],M=d.dataKey||r;if(g.status===201){if(d.valueKey)for(const E of d.valueKey)_[n][E.name]=T[E.replace];else _[n][M]=T;z(()=>[..._]),I(`"${i.toUpperCase()}" modificado correctamente`,{variant:"success"})}else v(_[n][M]),I(`Error al modificar "${i.toUpperCase()}"`,{variant:"error"})},style:f?{position:"relative"}:void 0,children:[!h&&x($,{children:[t("div",{onClick:()=>m(!0),style:{cursor:"pointer",width:!s[r]&&!h?"100%":void 0,height:!s[r]&&!h?"20px":void 0},children:k?t(ue,{}):s[r]}),f&&t("div",{style:{position:"absolute",right:0,top:0},children:f&&f===201?t(oe,{color:"success"}):f&&f!==201?t(re,{color:"error"}):t($,{})})]}),h?t(Ft,{urlFetch:d.url,disableHight:!0,onChange:(O,g)=>v(g),autoFocus:!0,fullWidth:!0,enableFirst:!0,openOnFocus:!0,isOptionEqualToValue:d.isOptionEqualToValue,getOptionLabel:d.getOptionLabel,renderOption:(O,g,{selected:_})=>{var M;return x(Ge,R(S({},O),{children:[d.disableCheck?t($,{}):t(we,{icon:t(Dt,{}),checkedIcon:t(Pt,{}),style:{marginRight:8},checked:_}),t("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase",whiteSpace:"normal"},children:d.labels?t($,{children:(M=d.labels)==null?void 0:M.map((E,U)=>t(W,{variant:U===0?"body1":"subtitle1",children:t("strong",{children:g[E]})},E))}):t($,{children:t(W,{variant:"body1",children:t("strong",{children:g})})})})]}))}}):t($,{})]})},ur=e=>{const{editable:o,row:s,name:r,index:n,label:i}=e,{id:l,anotherIds:c}=s,{func:p,selection:d}=o,{ref:u,visible:h,setVisible:m}=$e(!1),[w,z]=a.exports.useState(!1),{data:T,setData:v}=a.exports.useContext(D),[f,C]=a.exports.useState(T[n][r]),[k,b]=a.exports.useState(null),[y,I]=a.exports.useState(),{setTimer:P}=he(k),{enqueueSnackbar:O}=de(),g=async _=>{C(_.target.value),z(!1),I(!0);const M=await p(_.target.value,l,c);I(!1),b(M.status),m(!1),P(setTimeout(()=>b(null),1500));const E=[...T];M.status===201?(E[n][r]=_.target.value,v([...E]),O(`"${i.toUpperCase()}" modificado correctamente`,{variant:"success"})):(C(E[n][r]),O(`Error al modificar "${i.toUpperCase()}"`,{variant:"error"}))};return x("div",{ref:u,style:{position:"relative"},children:[!h&&!w&&x($,{children:[t("div",{onClick:()=>{m(!0),z(!0)},style:{cursor:"pointer",width:!s[r]&&!h?"100%":void 0,height:!s[r]&&!h?"20px":void 0},children:y?t(ue,{}):s[r]}),k&&t("div",{style:{position:"absolute",right:0,top:0},children:k&&k===201?t(oe,{color:"success"}):k&&k!==201?t(re,{color:"error"}):t($,{})})]}),w&&t(te,{size:"small",open:w,value:f,values:d.map(_=>_.value),options:d.map(_=>_.label),onChange:_=>g(_),onClose:()=>z(!1),autoFocus:!0,onBlur:()=>z(!1)})]})},pr=e=>{const{data:o,setData:s}=a.exports.useContext(D),[r,n]=a.exports.useState(!1),[i,l]=a.exports.useState(null),[c,p]=a.exports.useState(null),[d,u]=a.exports.useState(null),{setTimer:h}=he(i),{enqueueSnackbar:m}=de(),w=()=>{const{name:v,index:f}=e,C=[...o];C[f][v]=d,s([...C]),p(null)},z=async()=>{try{n(!0);const{editable:v,row:f}=e,{func:C}=v,{id:k}=f,b=await C(c,k);b.status===201?(m(`"${e.label.toUpperCase()}" modificado correctamente`,{variant:"success"}),u(null)):(w(),m(`Error al modificar "${e.label.toUpperCase()}"`,{variant:"error"})),l(b.status)}catch{l(-1),w(),m(`Error al modificar "${e.label.toUpperCase()}"`,{variant:"error"})}finally{h(setTimeout(()=>l(null),1500)),n(!1)}};return a.exports.useEffect(()=>{const v=setTimeout(()=>{c!==null&&z()},1e3);return()=>clearTimeout(v)},[c]),{handleChangeTipo:()=>{const{editable:v,index:f,name:C}=e,{states:k}=v,b=o[f][C],y=k.findIndex(g=>g.value===b),I=y+1>k.length-1?0:y+1,P=k[I].value,O=o;O[f][C]=P,s([...O]),d===null&&u(b),p(P)},isLoading:r,statusCode:i}},hr=s=>{var r=s,{editable:e}=r,o=L(r,["editable"]);const{isLoading:n,statusCode:i,handleChangeTipo:l}=pr(S({editable:e},o)),{name:c,index:p}=o,{data:d}=a.exports.useContext(D),u=e.states.findIndex(h=>h.value===d[p][c]);return x("div",{style:i?{display:"flex",position:"relative",alignItems:"center"}:void 0,children:[t(At,{label:e.states[u].label,color:e.states[u].color,onClick:h=>{h.stopPropagation(),l()},loading:n}),i&&t("div",{style:{position:"absolute",right:0},children:i&&i===201?t(oe,{color:"success"}):i&&i!==201?t(re,{color:"error"}):t($,{})})]})},mr=e=>{const n=e,{loading:o,component:s}=n,r=L(n,["loading","component"]);return t(be,R(S({},r),{disabled:r.disabled||o,InputProps:{inputComponent:s,endAdornment:o?t(xe,{position:"end",children:t(ue,{size:20})}):void 0}}))},fr=e=>{const{editable:o,row:s,name:r,index:n,label:i}=e,{id:l,anotherIds:c}=s,p=a.exports.useCallback(g=>{switch(g){case"money":return Ht;case"patronal":return Vt;case"sipe":return Et;default:return}},[]),{type:d,func:u}=o,{ref:h,visible:m,setVisible:w}=$e(!1),{data:z,setData:T}=a.exports.useContext(D),[v,f]=a.exports.useState(z[n][r]),[C,k]=a.exports.useState(null),[b,y]=a.exports.useState(),{setTimer:I}=he(C),{enqueueSnackbar:P}=de();return x("form",{ref:h,onSubmit:async g=>{g.preventDefault(),y(!0);const _=await u(v,l,c);y(!1),k(_.status),w(!1),I(setTimeout(()=>k(null),1500));const M=[...z];_.status===201?(M[n][r]=v,T([...M]),P(`"${i.toUpperCase()}" modificado correctamente`,{variant:"success"})):(f(M[n][r]),P(`Error al modificar "${i.toUpperCase()}"`,{variant:"error"}))},style:C?{display:"flex",position:"relative",alignItems:"center"}:void 0,children:[!m&&x($,{children:[t("div",{onClick:()=>w(!0),style:{cursor:"pointer",width:!s[r]&&!m?"100%":void 0,height:!s[r]&&!m?"20px":void 0},children:b?t(ue,{}):s[r]}),C&&t("div",{style:{position:"absolute",right:0},children:C&&C===201?t(oe,{color:"success"}):C&&C!==201?t(re,{color:"error"}):t($,{})})]}),m?t(mr,{size:"small",value:String(v||""),focused:!0,autoFocus:!0,onChange:g=>f(g.target.value),loading:b,component:p(d),fullWidth:!0}):t($,{})]})},xr=e=>e.editable.states?t(hr,S({},e)):e.editable.selection?t(ur,S({},e)):e.editable.autocomplete?t(dr,S({},e)):t(fr,S({},e)),gr=()=>{const w=a.exports.useContext(D),{isSelected:e,rowKey:o}=w,s=L(w,["isSelected","rowKey"]),{data:r,handleSelect:n}=s,z=a.exports.useContext(A),{rows:i,columns:l}=z,c=L(z,["rows","columns"]),{enableSelection:p}=c,d=L(a.exports.useContext(H),[]),{isSticky:u}=d,{getWidth:h,canHide:m}=tt();return t(zt,{children:i==null?void 0:i.map((T,v)=>x(tr,{selected:e?e(T[`${o}`]):!1,onClick:p?f=>n(f,T[`${o}`],r):void 0,children:[p&&t(ce,{padding:"checkbox",children:t(we,{size:"small",color:"primary",checked:e?e(T[`${o}`]):!1})}),l.filter(f=>!m(f.name)).map((y,b)=>{var I=y,{name:f,width:C}=I,k=L(I,["name","width"]);const{style:P,editable:O}=k;return t(a.exports.Fragment,{children:t(ce,{className:u(f)?"sticky-column":void 0,component:"th",scope:"row",style:R(S({maxWidth:C,width:C},P),{position:u(f)?"sticky":void 0,left:u(f)?h(f,b):void 0}),children:O?t(xr,R(S({},k),{name:f,width:C,row:T,editable:O,index:v}),`editable-cell${v}${b}${T[o]}`):T[`${f}`]})},`${f}${v}${b}`)})]},`cell-${v}`))})},Ee=({label:e})=>x(mt,{children:[t("svg",{width:"120",height:"100",viewBox:"0 0 184 152","aria-hidden":!0,focusable:"false",children:x("g",{fill:"none",fillRule:"evenodd",children:[x("g",{transform:"translate(24 31.67)",children:[t("ellipse",{className:"ant-empty-img-5",cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"}),t("path",{className:"ant-empty-img-1",d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"}),t("path",{className:"ant-empty-img-2",d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"}),t("path",{className:"ant-empty-img-3",d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"})]}),t("path",{className:"ant-empty-img-3",d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"}),x("g",{className:"ant-empty-img-4",transform:"translate(149.65 15.383)",children:[t("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"}),t("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"})]})]})}),t(Se,{sx:{mt:1,textTransform:"uppercase",fontWeight:"bold"},children:e?t($,{children:e}):t($,{children:"Sin resultado"})})]}),cs=e=>{var n;const{value:o,loading:s,data:r}=a.exports.useContext(D);return t(ho,R(S({},e),{children:t(So,{children:x(Nt,{variant:"outlined",sx:{boder:i=>`1 px solid ${i.palette.primary.main}`,position:"relative"},children:[t(jo,{}),s&&t(Bt,{}),x(_t,{sx:{maxHeight:i=>`calc(100vh - ${i.spacing(35)})`},children:[o&&o.status!==201&&t(Ee,{label:(n=o.error)==null?void 0:n.message}),s&&r.length===0&&t(Ee,{label:"Cargando"}),o&&o.status===201&&r.length>0&&x(Tt,{sx:{tableLayout:"auto"},"aria-label":"customized table",size:"medium",stickyHeader:!0,children:[t(Xo,{}),t(gr,{})]})]}),t(er,{})]})})}))},vr=()=>{const[e,o]=a.exports.useState(1),s=a.exports.useCallback(()=>{o(n=>n+10)},[]),r=a.exports.useCallback(()=>{o(n=>n-10)},[]);return{page:e,setPage:o,skipPage:s,backPage:r}},br=e=>{const[o,s]=a.exports.useState([]);return{selected:o,setSelected:s,handleSelectAll:(l,c)=>{var p;if(l.target.checked&&c&&c.data&&c.status===201){const d=[];for(const u of(p=c==null?void 0:c.data)==null?void 0:p.resultados)o.findIndex(h=>h[e]===u[e])<0&&d.push(u);s([...o,...d]);return}s([])},handleSelect:(l,c,p)=>{const d=o.findIndex(m=>m[e]===c),u=p.findIndex(m=>m[e]===c);let h=[];d===-1?h=h.concat(o,p[u]):d===0?h=h.concat(o.slice(1)):d===o.length-1?h=h.concat(o.slice(0,-1)):d>0&&(h=h.concat(o.slice(0,d),o.slice(d+1))),s(h)},isSelected:l=>o.findIndex(c=>c[e]===l)!==-1}},Sr=()=>{const[e,o]=a.exports.useState([]);return{sort:e,isInSort:i=>!(e.findIndex(l=>l.field===i)<0),getSortOrder:i=>{const l=e.findIndex(c=>c.field===i);if(l!==-1)return e[l].order},handleSetSort:i=>{const l=e.findIndex(p=>p.field===i);let c=[];l!==-1?e[l].order==="asc"?(c=[...e],c[l].order="desc"):c=c.concat(e.slice(0,l),e.slice(l+1)):c=[...e,{field:i,order:"asc"}],o([...c])},setSort:o}},ds=e=>{const{url:o,rowKey:s,params:r,dataValues:n}=e,i=jt(),[l,c]=a.exports.useState([]),{backPage:p,page:d,setPage:u,skipPage:h}=vr(),m=L(br(s),[]),w=L(Sr(),[]),{sort:z}=w,[T,v]=a.exports.useState(""),[f,C]=Ce([]),k=g=>{u(_=>1),v(g)},b=a.exports.useCallback(()=>{c([]),u(g=>1),v(g=>""),m.setSelected(g=>[]),w.setSort(g=>[]),C.set(g=>[])},[]);a.exports.useEffect(()=>{(()=>{d!==1&&u(_=>1)})()},[f]),a.exports.useEffect(()=>{(()=>{if(l.length>0&&m.selected.length>0){const _=m.selected;l.forEach(M=>{const E=_.findIndex(U=>U[s]===M[s]);E!==-1&&(_[E]=M)}),m.setSelected(_)}})()},[l]);const{loading:y,value:I,error:P,retry:O}=Wt(async()=>{if(n)return{status:201,data:{paginas:1,resultados:[...n]},error:{message:""}};{const g=await i({url:o,method:"GET",params:S({p:d,q:T,filter:Ae(JSON.stringify(f)),sort:Ae(JSON.stringify(w.sort))},r)});return g.data&&g.data.resultados&&c(g.data.resultados),g}},[d,f,T,z]);return S(S({data:l,setData:c,rowKey:s,loading:y,value:I,error:P,page:d,handleSetSearch:k,skipPage:h,backPage:p,search:T,retry:O,reset:b,setPage:u,filter:f,optionsFilter:C},m),w)};export{cs as D,ds as a,is as b,ls as u};
