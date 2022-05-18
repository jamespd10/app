var rt=Object.defineProperty,nt=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable;var Fe=(e,o,n)=>o in e?rt(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,b=(e,o)=>{for(var n in o||(o={}))Pe.call(o,n)&&Fe(e,n,o[n]);if(ae)for(var n of ae(o))Ae.call(o,n)&&Fe(e,n,o[n]);return e},M=(e,o)=>nt(e,st(o));var O=(e,o)=>{var n={};for(var r in e)Pe.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ae)for(var r of ae(e))o.indexOf(r)<0&&Ae.call(e,r)&&(n[r]=e[r]);return n};import{T as Se}from"./TextInput.js";import{d as at}from"./Search.js";import{d as lt}from"./Clear.js";import{k as Be,h as je,l as N,m as G,_ as B,y as He,a3 as it,a2 as ct,r as l,u as We,c as Ue,a as t,j as x,e as xe,n as qe,F as w,U as dt,A as ut,as as pt,aw as de,a4 as ue}from"./index.js";import{B as pe}from"./Box.js";import{I as ge}from"./InputAdornment.js";import{I as ee,i as ht}from"./IconButton.js";import{c as K,i as Q,r as Y}from"./jsx-runtime_commonjs-proxy.js";import{_ as Ce}from"./useList.js";import{B as Z,b as mt}from"./Button.js";import{M as ye,P as ft}from"./Menu.js";import{M as te}from"./MenuItem.js";import{S as xt,c as U,C as we}from"./Checkbox.js";import{T as j}from"./Typography.js";import{F as gt,I as vt,S as bt,o as St}from"./TextField.js";import{d as Ge}from"./Close2.js";import{a as Ct}from"./List.js";import{L as Ke}from"./ListItem.js";import{S as yt}from"./Stack.js";import{d as wt}from"./Add.js";import{D as Qe}from"./Divider.js";import{c as $t}from"./createSvgIcon.js";import{B as kt}from"./ButtonBase.js";import{b as It,t as q,f as zt,c as Ye,d as _t,a as Lt,i as W,e as Ot,L as Tt,g as Mt,h as Rt}from"./SkipNextOutlined.js";import{a as E}from"./Autocomplete.js";import"./jwt-decode.esm.js";import{T as Dt}from"./Tooltip.js";import{P as Ft,a as Pt}from"./Pagination.js";import{u as At}from"./useMediaQuery.js";import{u as $e}from"./useComponentVisible.js";import{d as Ht,a as Et}from"./CheckBoxOutlineBlank.js";import{A as Vt}from"./AutocompleteServer.js";import{C as Nt}from"./ChipState.js";import{C as Bt}from"./CustomDecimal.js";import{C as jt,a as Wt}from"./CustomSipe.js";import{P as Ut}from"./Paper.js";import{_ as qt}from"./useAsyncRetry.js";import{u as Gt}from"./useHttpService.js";function Kt(e){return je("MuiSwitch",e)}const Qt=Be("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var F=Qt;const Yt=["className","color","edge","size","sx"],Jt=e=>{const{classes:o,edge:n,size:r,color:s,checked:i,disabled:a}=e,c={root:["root",n&&`edge${G(n)}`,`size${G(r)}`],switchBase:["switchBase",`color${G(s)}`,i&&"checked",a&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},d=qe(c,Kt,o);return B({},o,d)},Xt=N("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.edge&&o[`edge${G(n.edge)}`],o[`size${G(n.size)}`]]}})(({ownerState:e})=>B({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${F.thumb}`]:{width:16,height:16},[`& .${F.switchBase}`]:{padding:4,[`&.${F.checked}`]:{transform:"translateX(16px)"}}})),Zt=N(xt,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.switchBase,{[`& .${F.input}`]:o.input},n.color!=="default"&&o[`color${G(n.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${F.checked}`]:{transform:"translateX(20px)"},[`&.${F.disabled}`]:{color:e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]},[`&.${F.checked} + .${F.track}`]:{opacity:.5},[`&.${F.disabled} + .${F.track}`]:{opacity:e.palette.mode==="light"?.12:.2},[`& .${F.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:o})=>B({"&:hover":{backgroundColor:He(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${F.checked}`]:{color:e.palette[o.color].main,"&:hover":{backgroundColor:He(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${F.disabled}`]:{color:e.palette.mode==="light"?it(e.palette[o.color].main,.62):ct(e.palette[o.color].main,.55)}},[`&.${F.checked} + .${F.track}`]:{backgroundColor:e.palette[o.color].main}})),eo=N("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,o)=>o.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.palette.mode==="light"?e.palette.common.black:e.palette.common.white,opacity:e.palette.mode==="light"?.38:.3})),to=N("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,o)=>o.thumb})(({theme:e})=>({boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),oo=l.exports.forwardRef(function(o,n){const r=We({props:o,name:"MuiSwitch"}),{className:s,color:i="primary",edge:a=!1,size:c="medium",sx:d}=r,h=Ue(r,Yt),u=B({},r,{color:i,edge:a,size:c}),p=Jt(u),m=t(to,{className:p.thumb,ownerState:u});return x(Xt,{className:xe(p.root,s),sx:d,ownerState:u,children:[t(Zt,B({type:"checkbox",icon:m,checkedIcon:m,ref:n,ownerState:u},h,{classes:B({},p,{root:p.switchBase})})),t(eo,{className:p.track,ownerState:u})]})});var ro=oo,no=$t(t("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function so(e){return je("MuiTableSortLabel",e)}const ao=Be("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]);var V=ao;const lo=["active","children","className","direction","hideSortIcon","IconComponent"],io=e=>{const{classes:o,direction:n,active:r}=e,s={root:["root",r&&"active"],icon:["icon",`iconDirection${G(n)}`]};return qe(s,so,o)},co=N(kt,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.active&&o.active]}})(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:e.palette.text.secondary},"&:hover":{color:e.palette.text.secondary,[`& .${V.icon}`]:{opacity:.5}},[`&.${V.active}`]:{color:e.palette.text.primary,[`& .${V.icon}`]:{opacity:1,color:e.palette.text.secondary}}})),uo=N("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.icon,o[`iconDirection${G(n.direction)}`]]}})(({theme:e,ownerState:o})=>B({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},o.direction==="desc"&&{transform:"rotate(0deg)"},o.direction==="asc"&&{transform:"rotate(180deg)"})),po=l.exports.forwardRef(function(o,n){const r=We({props:o,name:"MuiTableSortLabel"}),{active:s=!1,children:i,className:a,direction:c="asc",hideSortIcon:d=!1,IconComponent:h=no}=r,u=Ue(r,lo),p=B({},r,{active:s,direction:c,hideSortIcon:d,IconComponent:h}),m=io(p);return x(co,B({className:xe(m.root,a),component:"span",disableRipple:!0,ownerState:p,ref:n},u,{children:[i,d&&!s?null:t(uo,{as:h,className:xe(m.icon),ownerState:p})]}))});var ho=po;const mo=()=>{const[e,o]=l.exports.useState([0,0]);return l.exports.useLayoutEffect(()=>{const n=()=>o([window.innerWidth,window.innerHeight]);return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)},[]),e},he=()=>{const[e,o]=l.exports.useState(null),n=Boolean(e);return{anchorEl:e,handleClick:i=>{o(i.currentTarget)},handleClose:()=>{o(null)},open:n}},oe=i=>{var a=i,{options:e,label:o,values:n,value:r}=a,s=O(a,["options","label","values","value"]);return t(pe,{children:x(gt,{fullWidth:!0,required:s.required,children:[t(vt,{children:o}),t(bt,M(b({value:r,label:o},s),{children:e.map((c,d)=>t(te,{value:n?n[d]:c,children:c},`${c}`))}))]})})},D=l.exports.createContext({}),fn=()=>l.exports.useContext(D),xn=n=>{var r=n,{children:e}=r,o=O(r,["children"]);return t(D.Provider,{value:b({},o),children:e})},fo=({helperText:e})=>{const{handleSetSearch:o}=l.exports.useContext(D),[n,r]=l.exports.useState(""),s=a=>{a.preventDefault(),o(n)};return t("form",{onSubmit:s,children:t(Se,{label:"Buscar...",variant:"outlined",size:"small",value:n,onChange:a=>r(a.target.value),fullWidth:!0,autoFocus:!0,helperText:e,InputProps:{endAdornment:x(pe,{sx:{display:"flex",alignItems:"center"},children:[t(ge,{position:"end",children:t(ee,{onClick:s,children:t(at,{})})}),t(ge,{position:"end",children:t(ee,{onClick:()=>{o(""),r("")},children:t(lt,{})})})]})}})})},P=l.exports.createContext({}),xo=n=>{var r=n,{children:e}=r,o=O(r,["children"]);return t(P.Provider,{value:b({},o),children:e})};var ke={},go=Q.exports;Object.defineProperty(ke,"__esModule",{value:!0});var Je=ke.default=void 0,vo=go(K),bo=Y,So=(0,vo.default)((0,bo.jsx)("path",{d:"M5.33 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1.33c1.1 0 2 .9 2 2v12c0 1.1-.89 2-2 2zM22 18V6c0-1.1-.9-2-2-2h-1.33c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2H20c1.11 0 2-.9 2-2zm-7.33 0V6c0-1.1-.9-2-2-2h-1.33c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h1.33c1.1 0 2-.9 2-2z"}),"ViewWeek");Je=ke.default=So;const Co=()=>{const[e,o]=l.exports.useState([]);return{hiddenColumns:e,toggleHidden:s=>{if(e.findIndex(a=>a===s)!==-1){const a=e.filter(c=>c!==s);o([...a])}else o([...e,s])},isHidden:s=>e.includes(s)}},yo=()=>{const[e,o]=Ce(),{set:n,insertAt:r,removeAt:s,push:i}=o,{defaultSticky:a,columns:c}=l.exports.useContext(P);return l.exports.useEffect(()=>{(()=>{a&&a.length>0&&n([...a])})()},[]),{stickyColumns:e,toggleSticky:u=>{const p=e.findIndex(C=>C===u),m=c.findIndex(C=>C.name===u);p!==-1?s(p):m>e.length-1?i(u):r(m,u)},isSticky:u=>e.includes(u)}},A=l.exports.createContext({}),wo=({children:e})=>{const{filter:o}=l.exports.useContext(D),n=Co(),r=yo(),s=he(),i=l.exports.useRef(null),[a,c]=Ce([]);return l.exports.useEffect(()=>{(()=>{c.set(o)})()},[o]),t(A.Provider,{value:M(b(b({},n),r),{filterMenu:s,headRef:i,dataFilter:a,optsFilter:c}),children:e})},$o=()=>{const{columns:e}=l.exports.useContext(P),o=O(l.exports.useContext(A),[]),{toggleHidden:n,isHidden:r}=o,{anchorEl:s,handleClick:i,handleClose:a,open:c}=he();return x(w,{children:[t(Z,{size:"small",startIcon:t(Je,{}),onClick:i,children:"Columnas"}),t(ye,{id:"basic-menu",anchorEl:s,open:c,onClose:a,sx:{width:200},MenuListProps:{"aria-labelledby":"basic-button"},PaperProps:{style:{maxHeight:"400px",width:"20ch"}},children:e.map(({name:d,label:h},u)=>x(te,{onClick:()=>n(d),style:{display:"flex",flexDirection:"row",flexWrap:"nowrap"},children:[t(ro,{checked:!r(d),size:"small"}),t(j,{variant:"inherit",noWrap:!0,style:{textTransform:"uppercase",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:h})]},d))})]})};var Ie={},ko=Q.exports;Object.defineProperty(Ie,"__esModule",{value:!0});var ze=Ie.default=void 0,Io=ko(K),zo=Y,_o=(0,Io.default)((0,zo.jsx)("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterList");ze=Ie.default=_o;const Lo=({indexColumn:e,v:o,i:n})=>{const{columnsFilter:r}=l.exports.useContext(P),{optsFilter:s}=l.exports.useContext(A),{updateAt:i}=s;return t(w,{children:(r[e].type==="string"||r[e].type==="number")&&t(Se,{label:"Valor",type:r[e].type==="number"?"number":void 0,value:o.valor,onChange:a=>{i(n,M(b({},o),{valor:a.target.value}))},fullWidth:!0,size:"small",style:{width:"100px"}})})},Oo=({indexColumn:e,v:o,i:n})=>{const{columnsFilter:r}=l.exports.useContext(P),{optsFilter:s}=l.exports.useContext(A),{updateAt:i}=s;return t(w,{children:(r[e].type==="boolean"||r[e].type.includes("enum"))&&r[e].valueOptions&&t(w,{children:t(oe,{label:"Valor",value:o.valor,values:r[e].valueOptions.map(a=>a.value),options:r[e].valueOptions.map(a=>a.label),onChange:a=>{i(n,M(b({},o),{valor:a.target.value}))},size:"small",fullWidth:!0,style:{width:"100px"}})})})},le=[{label:"IGUAL",value:"="}],ie=[{label:"VAC\xCDO",value:"IS NULL"},{label:"NO VAC\xCDO",value:"IS NOT NULL"}],ve=[...le,{label:"CONTIENE",value:"LIKE"},...ie],be=[...le,{label:"MAYOR QUE",value:">"},{label:"MENOR QUE",value:"<"},{label:"MAYOR O IGUAL",value:">="},{label:"MENOR O IGUAL",value:"<="},...ie],_e=()=>{const e=l.exports.useCallback(n=>{switch(n){case"number":return be.map(r=>r.value);case"nullenum":return ie.map(r=>r.value);case"boolean":return le.map(r=>r.value);default:return ve.map(r=>r.value)}},[]),o=l.exports.useCallback(n=>{switch(n){case"number":return be.map(r=>r.label);case"nullenum":return ie.map(r=>r.label);case"boolean":return le.map(r=>r.label);default:return ve.map(r=>r.label)}},[]);return{getOptionsValues:e,getOptionsLabels:o}},To=({indexColumn:e,v:o,i:n})=>{const{columnsFilter:r}=l.exports.useContext(P),{optsFilter:s}=l.exports.useContext(A),{getOptionsValues:i,getOptionsLabels:a}=_e(),{updateAt:c}=s;return t(w,{children:t(oe,{label:"Operador",values:i(r[e].type),value:o.operator,options:a(r[e].type),onChange:d=>c(n,M(b({},o),{operator:d.target.value})),size:"small",fullWidth:!0,style:{width:"100px"}})})},Mo=({indexColumn:e,v:o,i:n})=>{const{columnsFilter:r}=l.exports.useContext(P),{optsFilter:s}=l.exports.useContext(A),{updateAt:i}=s,{getOptionsValues:a}=_e();return t(w,{children:t(oe,{label:"Columna",value:r[e].label,options:r.map(c=>c.label),onChange:c=>{const d=r.findIndex(u=>u.label===c.target.value),h=a(r[d].type);i(n,M(b({},o),{valor:"",operator:h[0],column:r[d].column}))},size:"small",fullWidth:!0,style:{width:"100px"}})})},Ro=({i:e})=>{const h=l.exports.useContext(A),{filterMenu:o}=h,n=O(h,["filterMenu"]),{optionsFilter:r}=l.exports.useContext(D),{set:s}=r,{dataFilter:i,optsFilter:a}=n,{removeAt:c}=a,{handleClose:d}=o;return t(w,{children:t(ee,{size:"small",color:"error",onClick:()=>{i.length===1&&(d(),s([])),c(e)},children:t(Ge,{})})})},Do=({indexColumn:e,v:o,i:n})=>{const{dataFilter:r,optsFilter:s}=l.exports.useContext(A),{updateAt:i}=s;return t(w,{children:r.length>1&&r.length-1!==n&&t("div",{style:{width:"100px"},children:t(oe,{label:"Condici\xF3n",value:r[n].condition,options:["AND","OR"],onChange:a=>{i(n,M(b({},o),{condition:a.target.value}))},size:"small",fullWidth:!0,style:{width:"100px"}})})})},Fo=()=>{const{columnsFilter:e}=l.exports.useContext(P),{dataFilter:o}=l.exports.useContext(A);return t(w,{children:t(Ct,{dense:!0,disablePadding:!0,style:{width:"100%",padding:10,maxHeight:"300px",overflowY:"auto"},children:o.map((n,r)=>{const s=e.findIndex(i=>i.column===n.column);return t(l.exports.Fragment,{children:t(Ke,{disablePadding:!0,style:{width:"100%",margin:"5px 0 5px 0"},children:x(yt,{direction:"row",spacing:1,alignItems:"center",style:{width:"100%"},children:[t("div",{style:{width:"30px"},children:t(Ro,{i:r})}),t("div",{style:{width:"100px"},children:t(Mo,{i:r,v:n,indexColumn:s},`${n.column}${r}-${r}`)}),t("div",{style:{width:"100px"},children:t(To,{i:r,v:n,indexColumn:s})}),!e[s].type.toLocaleLowerCase().includes("null")&&!n.operator.toLocaleLowerCase().includes("null")&&x("div",{style:{width:"100px"},children:[t(Lo,{i:r,v:n,indexColumn:s}),t(Oo,{i:r,v:n,indexColumn:s})]}),t(Do,{i:r,v:n,indexColumn:s})]})})},`${n.column}${r}`)})})})},Po=()=>{const{columnsFilter:e}=l.exports.useContext(P),{optionsFilter:o}=l.exports.useContext(D),{set:n}=o,h=l.exports.useContext(A),{filterMenu:r}=h,s=O(h,["filterMenu"]),{optsFilter:i,dataFilter:a}=s,{push:c}=i,{handleClose:d}=r;return x(w,{children:[t(Qe,{}),x("div",{style:{margin:10,width:"100%"},children:[t(Z,{size:"small",color:"error",startIcon:t(Ge,{}),onClick:()=>d(),children:"Cerrar"}),t(Z,{size:"small",color:"inherit",startIcon:t(wt,{}),onClick:()=>c({column:e[0].column,operator:e[0].type==="number"?be[0].value:ve[0].value,valor:"",condition:"AND"}),children:"Agregar"}),t(Z,{size:"small",color:"primary",startIcon:t(ze,{}),onClick:()=>{d(),n(a)},children:"Filtrar"})]})]})},Ao=()=>{const{columnsFilter:e}=l.exports.useContext(P),p=l.exports.useContext(A),{filterMenu:o}=p,n=O(p,["filterMenu"]),{dataFilter:r,optsFilter:s}=n,{push:i}=s,{anchorEl:a,handleClick:c,handleClose:d,open:h}=o,{getOptionsValues:u}=_e();return l.exports.useEffect(()=>{(()=>{r.length===0&&i({column:e[0].column,operator:u(e[0].type)[0],valor:"",condition:"AND"})})()},[h]),x(w,{children:[t(Z,{size:"small",startIcon:t(ze,{}),onClick:c,children:"Filtros"}),t(ft,{open:h,anchorEl:a,onClose:d,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:x("div",{style:{display:"flex",flexDirection:"column"},children:[t(Fo,{}),t(Po,{})]})})]})};var Le={},Ho=Q.exports;Object.defineProperty(Le,"__esModule",{value:!0});var Xe=Le.default=void 0,Eo=Ho(K),Vo=Y,No=(0,Eo.default)((0,Vo.jsx)("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}),"Sort");Xe=Le.default=No;var Oe={},Bo=Q.exports;Object.defineProperty(Oe,"__esModule",{value:!0});var Ze=Oe.default=void 0,jo=Bo(K),Wo=Y,Uo=(0,jo.default)((0,Wo.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");Ze=Oe.default=Uo;var Te={},qo=Q.exports;Object.defineProperty(Te,"__esModule",{value:!0});var et=Te.default=void 0,Go=qo(K),Ko=Y,Qo=(0,Go.default)((0,Ko.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");et=Te.default=Qo;const Yo=()=>{const{anchorEl:e,open:o,handleClose:n,handleClick:r}=he(),{sortFields:s}=l.exports.useContext(P),{handleSetSort:i,getSortOrder:a}=l.exports.useContext(D);return x(w,{children:[t(Z,{className:"headerTableActionsIcon",onClick:r,disableRipple:!0,size:"small",startIcon:t(Xe,{}),children:"Orden"}),t(ye,{id:"basic-menu",anchorEl:e,open:o,onClose:n,sx:{width:200},MenuListProps:{"aria-labelledby":"basic-button"},PaperProps:{style:{maxHeight:"400px",width:"20ch"}},children:s==null?void 0:s.map((c,d)=>{const h=a(c.name);return x(te,{onClick:()=>i(c.name),style:{display:"flex",flexDirection:"row",flexWrap:"nowrap"},children:[t(j,{variant:"inherit",noWrap:!0,textTransform:"uppercase",children:c.label}),h?h==="asc"?t(Ze,{}):t(et,{}):t(w,{})]},`${c.name}-${d}`)})})]})},Jo=()=>{const c=l.exports.useContext(P),{toolbar:e,enableSearch:o}=c,n=O(c,["toolbar","enableSearch"]),{columnsFilter:r,enableHidden:s,sortFields:i}=n,a=dt();return t(w,{children:(e||o||s||r&&r.length>0)&&x("div",{style:{margin:10,display:"flex",flexDirection:"column"},children:[e&&t("div",{style:M(b({},a.typography.h6),{textTransform:"uppercase"}),children:e}),(o||s||r&&r.length>0)&&x("div",{style:{display:"flex",flexDirection:"row",width:"100%",flexWrap:"wrap"},children:[o&&t("div",{style:{flexGrow:1},children:t(fo,{})}),(s||r&&r.length>0)&&x("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[i&&i.length>0&&t(Yo,{}),r&&r.length>0&&t(Ao,{}),s&&t($o,{})]})]})]})})},Xo=N(ho)(({theme:e})=>({[`&.${V.root}, &.${V.active}`]:{color:"white",[`.${V.icon}`]:{fill:"white"}},[`&.${V.icon}`]:{fill:"#f2eded"}})),ce=N(It)(({theme:e})=>({[".headerTableActionsIcon"]:{color:e.palette.action.disabled},[".headerTableActionsIcon:hover"]:{color:"white"},[`&.${q.head}`]:M(b({backgroundColor:e.palette.primary.main,color:e.palette.common.white,borderTop:`1px solid ${e.palette.primary.main}`,borderBottom:`1px solid ${e.palette.primary.main}`,textTransform:"uppercase"},e.typography.h6),{fontSize:"16px",height:"50px",maxHeight:"50px",[`.${U.checked}, .${U.indeterminate},
        .${U.root}, .${V.root},
        .${V.active}`]:{color:"white"},[`.${V.icon}`]:{color:"#f2eded"}}),[`&.${q.head}.sticky-column`]:{zIndex:3},[`&.${q.body}`]:M(b({},e.typography.body2),{fontSize:"14px"}),[`&.${q.root}`]:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",padding:2,height:"50px",maxHeight:"50px",[`.${E.paper}`]:{wordBreak:"break-all",[`.${E.option}`]:{wordBreak:"break-all"}},[`.${E.noOptions}, .${E.loading}`]:{whiteSpace:"normal",wordBreak:"break-all"}}}));var Me={},Zo=Q.exports;Object.defineProperty(Me,"__esModule",{value:!0});var tt=Me.default=void 0,er=Zo(K),tr=Y,or=(0,er.default)((0,tr.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");tt=Me.default=or;const rr=({name:e})=>{const{anchorEl:o,open:n,handleClose:r,handleClick:s}=he(),i=O(l.exports.useContext(A),[]),{toggleHidden:a,toggleSticky:c,isSticky:d}=i;return x(w,{children:[t(ee,{className:"headerTableActionsIcon",onClick:s,disableRipple:!0,size:"small",children:t(tt,{})}),x(ye,{id:"basic-menu",anchorEl:o,open:n,onClose:r,sx:{width:200},MenuListProps:{"aria-labelledby":"basic-button"},children:[t(te,{onClick:()=>{c(e),r()},children:t(j,{variant:"inherit",noWrap:!0,children:d(e)?"Desfijar":"Fijar"})}),t(te,{onClick:()=>{a(e),r()},children:t(j,{variant:"inherit",noWrap:!0,children:"Ocultar"})})]})]})},Ee={display:"flex",flexDirection:"row",alignItems:"center"},fe={whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},nr=e=>{const o=mo(),[n,r]=l.exports.useState([]),s=a=>{r([...a])},i=l.exports.useMemo(()=>new ResizeObserver(s),[]);return l.exports.useEffect(()=>(e.current&&i.observe(e.current),()=>i.disconnect()),[e,o]),[n]},ot=()=>{const{authState:e}=l.exports.useContext(ut),{tipo:o}=e,{authColumns:n}=l.exports.useContext(P),r=O(l.exports.useContext(A),[]),{headRef:s,isHidden:i,stickyColumns:a}=r,[c]=nr(s);return{getWidth:(u,p)=>{var C,z,_,v,f;let m=0;if(c.length>0&&((z=(C=c[0])==null?void 0:C.target)==null?void 0:z.children)){const I=Array.from(c[0].target.children).filter(y=>y.className&&y.className.includes("sticky-column"));for(let y=0;y<p;y++){const S=I.length>=y?(v=(_=I[y])==null?void 0:_.id)==null?void 0:v.split("-"):[];S&&S.length===2&&(a==null?void 0:a.includes(S[1]))&&S[1]!==String(u)&&(m=m+(((f=I[y])==null?void 0:f.clientWidth)||0))}}return m},canHide:u=>n&&n.length>0&&o&&n.findIndex(p=>p.name===u)!==-1&&!n[n.findIndex(p=>p.name===u)].types.includes(o)||i(u)}},sr=()=>{const y=l.exports.useContext(D),{handleSelectAll:e,selected:o}=y,n=O(y,["handleSelectAll","selected"]),{value:r,rowKey:s,getSortOrder:i,isInSort:a,handleSetSort:c}=n,d=l.exports.useContext(P),{enableSelection:h,sortFields:u,disableHeadDivider:p}=d,{disableHeadActions:m,columns:C,rows:z}=d,_=O(l.exports.useContext(A),[]),{isSticky:v,headRef:f}=_,{getWidth:$,canHide:I}=ot();return t(zt,{children:x(Ye,{ref:f,children:[h&&z&&t(ce,{padding:"checkbox",children:t(we,{size:"small",color:"primary",indeterminate:o.filter(S=>z.map(k=>k[s]).includes(S[s])).length>0&&o.filter(S=>z.map(k=>k[s]).includes(S[s])).length<z.length,checked:o.filter(S=>z.map(k=>k[s]).includes(S[s])).length===z.length,onChange:S=>e(S,r)})}),C.filter(S=>!I(S.name)).map((T,g)=>{var H=T,{label:S,name:k,width:R}=H,L=O(H,["label","name","width"]);const{style:J}=L,X=u?u.findIndex(se=>se.name.slice(se.name.indexOf(".")+1)===k):-1;return t(ce,{id:`sc-${k}`,className:v(k)?"sticky-column":"",style:M(b({maxWidth:R,width:R},J),{position:v(k)?"sticky":void 0,left:v(k)?$(k,g):void 0}),children:x("div",{style:M(b({},Ee),{justifyContent:"space-between"}),children:[t(Dt,{title:S,placement:"top",disableInteractive:!0,children:u&&X!==-1?t(Xo,{active:a(u[X].name),direction:i(u[X].name),onClick:()=>c(u[X].name),style:b({},fe),children:t(j,{noWrap:!0,style:b({},fe),children:S})}):t(j,{noWrap:!0,style:b({},fe),children:S})}),p&&m?t(w,{}):x("div",{style:Ee,children:[!m&&t(rr,{name:k}),!p&&C.filter(se=>!I(se.name)).length-1!==g&&t(Qe,{orientation:"vertical",variant:"middle",flexItem:!0})]})]})},k)})]})})},ar=()=>{var c,d,h;const a=l.exports.useContext(D),{page:e,setPage:o}=a,n=O(a,["page","setPage"]),{backPage:r,skipPage:s,value:i}=n;return x("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[t(ee,{onClick:r,disabled:!(e>10&&(((c=i==null?void 0:i.data)==null?void 0:c.paginas)||0)>=10),children:t(_t,{})}),t(Ft,{color:"primary",count:(d=i==null?void 0:i.data)==null?void 0:d.paginas,page:e,renderItem:u=>t(Pt,M(b({},u),{disableRipple:!0})),onChange:(u,p)=>o(p)}),t(ee,{onClick:s,disabled:!(e<=(((h=i==null?void 0:i.data)==null?void 0:h.paginas)||0)-10),children:t(Lt,{})})]})},lr=()=>{const e=At("(max-width:673px)"),{selected:o}=l.exports.useContext(D),[n,r]=l.exports.useState(0);return l.exports.useEffect(()=>{r(o.length)},[o]),x(pe,{style:{display:"flex",flexDirection:"row",justifyContent:e?"center":"space-between",flexWrap:"wrap",alignItems:"center",padding:5},sx:{borderTop:s=>`1px solid ${s.palette.primary.main}`},children:[t(ar,{}),t(j,{children:n>0?`${n} FILA${n>1?"S":""} SELECCIONADA${n>1?"S":""}`:""})]})},ir=N(Ye)(({theme:e})=>({[`&.${W.root}`]:{[`.${q.root}`]:{textTransform:"uppercase",background:e.palette.action.selected,border:`1px solid ${e.palette.primary.main}`,borderBottom:"none",borderLeft:"none"}},[`&.${W.root}:first-of-type`]:{[`.${q.root}`]:{borderTop:"none"}},[`.${q.root}:last-of-type`]:{borderRight:"none"},[`&.${W.root} .sticky-column`]:{boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.24)",backgroundColor:"white",zIndex:1},[`&.${W.root}:hover, &.${W.selected}, 
    &.${W.root}:hover .sticky-column`]:{background:e.palette.primary.main,[`.${q.root}`]:{color:"white",borderColor:"white",[`.${E.input}`]:{color:"white"},[`.${E.inputRoot}`]:{background:"none"},[`.${E.paper}`]:{background:"white",color:"black",[`.${U.root}`]:{color:"black"}},[`.${E.clearIndicator}, .${E.popupIndicator}`]:{color:"white"},[`.${E.option}:hover`]:{background:e.palette.primary.main,color:"white",overflowWrap:"break-word",wordBreak:"break-all",[`.${U.root}`]:{color:"white"}}},[`& .${St.adornedEnd}`]:{color:"white",backgroundColor:"white"},[`& .${pt.circle}`]:{color:"white",backgroundColor:"white"},[`& .${U.checked}, &.${U.indeterminate},
        & .${U.root}, & .MuiButton-root, & label.Mui-focused,
        & .${ht.root}, & .${mt.root}`]:{color:"white"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"& input":{color:"white"}},"& label":{color:"gray"},"& .Mui-focused":{color:"white",borderColor:"white"},"& .MuiInput-underline:after":{borderBottomColor:"white"}},[`&.${W.selected}, &.${W.selected} .sticky-column`]:{background:e.palette.primary.light},"&:last-of-type td, &:last-of-type th":{border:0}}));var Re={},cr=Q.exports;Object.defineProperty(Re,"__esModule",{value:!0});var re=Re.default=void 0,dr=cr(K),ur=Y,pr=(0,dr.default)((0,ur.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");re=Re.default=pr;var De={},hr=Q.exports;Object.defineProperty(De,"__esModule",{value:!0});var ne=De.default=void 0,mr=hr(K),fr=Y,xr=(0,mr.default)((0,fr.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline");ne=De.default=xr;const me=e=>{const[o,n]=l.exports.useState(null);return l.exports.useEffect(()=>()=>{o&&clearTimeout(o)},[e]),{timer:o,setTimer:n}},gr=e=>{const{editable:o,row:n,name:r,index:s,label:i}=e,{id:a}=n,{func:c,autocomplete:d}=o,{ref:h,visible:u,setVisible:p}=$e(!1),{data:m,setData:C}=l.exports.useContext(D),[z,_]=l.exports.useState(m[s][r]),[v,f]=l.exports.useState(null),[$,I]=l.exports.useState(),{setTimer:y}=me(v),{enqueueSnackbar:S}=de();return x("form",{ref:h,onSubmit:async R=>{R.preventDefault(),I(!0);const L=await c(z,a);I(!1),f(L.status),p(!1),y(setTimeout(()=>f(null),1500));const g=[...m],T=d.dataKey||r;L.status===201?(d.valueKey?g[s][T]=z[d.valueKey]:g[s][T]=z,C(()=>[...g]),S(`"${i.toUpperCase()}" modificado correctamente`,{variant:"success"})):(_(g[s][T]),S(`Error al modificar "${i.toUpperCase()}"`,{variant:"error"}))},style:v?{position:"relative"}:void 0,children:[!u&&x(w,{children:[t("div",{onClick:()=>p(!0),style:{cursor:"pointer",width:!n[r]&&!u?"100%":void 0,height:!n[r]&&!u?"20px":void 0},children:$?t(ue,{}):n[r]}),v&&t("div",{style:{position:"absolute",right:0,top:0},children:v&&v===201?t(re,{color:"success"}):v&&v!==201?t(ne,{color:"error"}):t(w,{})})]}),u?t(Vt,{urlFetch:d.url,disableHight:!0,onChange:(R,L)=>_(L),autoFocus:!0,fullWidth:!0,enableFirst:!0,openOnFocus:!0,isOptionEqualToValue:d.isOptionEqualToValue,getOptionLabel:d.getOptionLabel,renderOption:(R,L,{selected:g})=>{var T;return x(Ke,M(b({},R),{children:[d.disableCheck?t(w,{}):t(we,{icon:t(Ht,{}),checkedIcon:t(Et,{}),style:{marginRight:8},checked:g}),t("div",{style:{display:"flex",flexDirection:"column",textTransform:"uppercase",whiteSpace:"normal"},children:d.labels?t(w,{children:(T=d.labels)==null?void 0:T.map((H,J)=>t(j,{variant:J===0?"body1":"subtitle1",children:t("strong",{children:L[H]})},H))}):t(w,{children:t(j,{variant:"body1",children:t("strong",{children:L})})})})]}))}}):t(w,{})]})},vr=e=>{const{editable:o,row:n,name:r,index:s,label:i}=e,{id:a}=n,{func:c,selection:d}=o,{ref:h,visible:u,setVisible:p}=$e(!1),[m,C]=l.exports.useState(!1),{data:z,setData:_}=l.exports.useContext(D),[v,f]=l.exports.useState(z[s][r]),[$,I]=l.exports.useState(null),[y,S]=l.exports.useState(),{setTimer:k}=me($),{enqueueSnackbar:R}=de(),L=async g=>{f(g.target.value),C(!1),S(!0);const T=await c(g.target.value,a);S(!1),I(T.status),p(!1),k(setTimeout(()=>I(null),1500));const H=[...z];T.status===201?(H[s][r]=g.target.value,_([...H]),R(`"${i.toUpperCase()}" modificado correctamente`,{variant:"success"})):(f(H[s][r]),R(`Error al modificar "${i.toUpperCase()}"`,{variant:"error"}))};return x("div",{ref:h,style:{position:"relative"},children:[!u&&!m&&x(w,{children:[t("div",{onClick:()=>{p(!0),C(!0)},style:{cursor:"pointer",width:!n[r]&&!u?"100%":void 0,height:!n[r]&&!u?"20px":void 0},children:y?t(ue,{}):n[r]}),$&&t("div",{style:{position:"absolute",right:0,top:0},children:$&&$===201?t(re,{color:"success"}):$&&$!==201?t(ne,{color:"error"}):t(w,{})})]}),m&&t(oe,{size:"small",open:m,value:v,values:d.map(g=>g.value),options:d.map(g=>g.label),onChange:g=>L(g),onClose:()=>C(!1),autoFocus:!0,onBlur:()=>C(!1)})]})},br=e=>{const{data:o,setData:n}=l.exports.useContext(D),[r,s]=l.exports.useState(!1),[i,a]=l.exports.useState(null),[c,d]=l.exports.useState(null),[h,u]=l.exports.useState(null),{setTimer:p}=me(i),{enqueueSnackbar:m}=de(),C=()=>{const{name:v,index:f}=e,$=[...o];$[f][v]=h,n([...$]),d(null)},z=async()=>{try{s(!0);const{editable:v,row:f}=e,{func:$}=v,{id:I}=f,y=await $(c,I);y.status===201?(m(`"${e.label.toUpperCase()}" modificado correctamente`,{variant:"success"}),u(null)):(C(),m(`Error al modificar "${e.label.toUpperCase()}"`,{variant:"error"})),a(y.status)}catch{a(-1),C(),m(`Error al modificar "${e.label.toUpperCase()}"`,{variant:"error"})}finally{p(setTimeout(()=>a(null),1500)),s(!1)}};return l.exports.useEffect(()=>{const v=setTimeout(()=>{c!==null&&z()},1e3);return()=>clearTimeout(v)},[c]),{handleChangeTipo:()=>{const{editable:v,index:f,name:$}=e,{states:I}=v,y=o[f][$],S=I.findIndex(g=>g.value===y),k=S+1>I.length-1?0:S+1,R=I[k].value,L=o;L[f][$]=R,n([...L]),h===null&&u(y),d(R)},isLoading:r,statusCode:i}},Sr=n=>{var r=n,{editable:e}=r,o=O(r,["editable"]);const{isLoading:s,statusCode:i,handleChangeTipo:a}=br(b({editable:e},o)),{name:c,index:d}=o,{data:h}=l.exports.useContext(D),u=e.states.findIndex(p=>p.value===h[d][c]);return x("div",{style:i?{display:"flex",position:"relative",alignItems:"center"}:void 0,children:[t(Nt,{label:e.states[u].label,color:e.states[u].color,onClick:p=>{p.stopPropagation(),a()},loading:s}),i&&t("div",{style:{position:"absolute",right:0},children:i&&i===201?t(re,{color:"success"}):i&&i!==201?t(ne,{color:"error"}):t(w,{})})]})},Cr=e=>{const s=e,{loading:o,component:n}=s,r=O(s,["loading","component"]);return t(Se,M(b({},r),{disabled:r.disabled||o,InputProps:{inputComponent:n,endAdornment:o?t(ge,{position:"end",children:t(ue,{size:20})}):void 0}}))},yr=e=>{const{editable:o,row:n,name:r,index:s,label:i}=e,{id:a}=n,c=l.exports.useCallback(L=>{switch(L){case"money":return Bt;case"patronal":return Wt;case"sipe":return jt;default:return}},[]),{type:d,func:h}=o,{ref:u,visible:p,setVisible:m}=$e(!1),{data:C,setData:z}=l.exports.useContext(D),[_,v]=l.exports.useState(C[s][r]),[f,$]=l.exports.useState(null),[I,y]=l.exports.useState(),{setTimer:S}=me(f),{enqueueSnackbar:k}=de();return x("form",{ref:u,onSubmit:async L=>{L.preventDefault(),y(!0);const g=await h(_,a);y(!1),$(g.status),m(!1),S(setTimeout(()=>$(null),1500));const T=[...C];g.status===201?(T[s][r]=_,z([...T]),k(`"${i.toUpperCase()}" modificado correctamente`,{variant:"success"})):(v(T[s][r]),k(`Error al modificar "${i.toUpperCase()}"`,{variant:"error"}))},style:f?{display:"flex",position:"relative",alignItems:"center"}:void 0,children:[!p&&x(w,{children:[t("div",{onClick:()=>m(!0),style:{cursor:"pointer",width:!n[r]&&!p?"100%":void 0,height:!n[r]&&!p?"20px":void 0},children:I?t(ue,{}):n[r]}),f&&t("div",{style:{position:"absolute",right:0},children:f&&f===201?t(re,{color:"success"}):f&&f!==201?t(ne,{color:"error"}):t(w,{})})]}),p?t(Cr,{size:"small",value:String(_||""),focused:!0,autoFocus:!0,onChange:L=>v(L.target.value),loading:I,component:c(d),fullWidth:!0}):t(w,{})]})},wr=e=>e.editable.states?t(Sr,b({},e)):e.editable.selection?t(vr,b({},e)):e.editable.autocomplete?t(gr,b({},e)):t(yr,b({},e)),$r=()=>{const C=l.exports.useContext(D),{isSelected:e,rowKey:o}=C,n=O(C,["isSelected","rowKey"]),{data:r,handleSelect:s}=n,z=l.exports.useContext(P),{rows:i,columns:a}=z,c=O(z,["rows","columns"]),{enableSelection:d}=c,h=O(l.exports.useContext(A),[]),{isSticky:u}=h,{getWidth:p,canHide:m}=ot();return t(Ot,{children:i==null?void 0:i.map((_,v)=>x(ir,{selected:e?e(_[`${o}`]):!1,onClick:d?f=>s(f,_[`${o}`],r):void 0,children:[d&&t(ce,{padding:"checkbox",children:t(we,{size:"small",color:"primary",checked:e?e(_[`${o}`]):!1})}),a.filter(f=>!m(f.name)).map((S,y)=>{var k=S,{name:f,width:$}=k,I=O(k,["name","width"]);const{style:R,editable:L}=I;return t(l.exports.Fragment,{children:t(ce,{className:u(f)?"sticky-column":void 0,component:"th",scope:"row",style:M(b({maxWidth:$,width:$},R),{position:u(f)?"sticky":void 0,left:u(f)?p(f,y):void 0}),children:L?t(wr,M(b({},I),{name:f,width:$,row:_,editable:L,index:v}),`editable-cell${v}${y}${_[o]}`):_[`${f}`]})},`${f}${v}${y}`)})]},`cell-${v}`))})},kr=N("div")(({theme:e})=>({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%","& .ant-empty-img-1":{fill:e.palette.mode==="light"?"#aeb8c2":"#262626"},"& .ant-empty-img-2":{fill:e.palette.mode==="light"?"#f5f5f7":"#595959"},"& .ant-empty-img-3":{fill:e.palette.mode==="light"?"#dce0e6":"#434343"},"& .ant-empty-img-4":{fill:e.palette.mode==="light"?"#fff":"#1c1c1c"},"& .ant-empty-img-5":{fillOpacity:e.palette.mode==="light"?"0.8":"0.08",fill:e.palette.mode==="light"?"#f5f5f5":"#fff"}})),Ve=({label:e})=>x(kr,{children:[t("svg",{width:"120",height:"100",viewBox:"0 0 184 152","aria-hidden":!0,focusable:"false",children:x("g",{fill:"none",fillRule:"evenodd",children:[x("g",{transform:"translate(24 31.67)",children:[t("ellipse",{className:"ant-empty-img-5",cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"}),t("path",{className:"ant-empty-img-1",d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"}),t("path",{className:"ant-empty-img-2",d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"}),t("path",{className:"ant-empty-img-3",d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"})]}),t("path",{className:"ant-empty-img-3",d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"}),x("g",{className:"ant-empty-img-4",transform:"translate(149.65 15.383)",children:[t("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"}),t("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"})]})]})}),t(pe,{sx:{mt:1,textTransform:"uppercase",fontWeight:"bold"},children:e?t(w,{children:e}):t(w,{children:"Sin resultado"})})]}),gn=e=>{var s;const{value:o,loading:n,data:r}=l.exports.useContext(D);return t(xo,M(b({},e),{children:t(wo,{children:x(Ut,{variant:"outlined",sx:{boder:i=>`1 px solid ${i.palette.primary.main}`,position:"relative"},children:[t(Jo,{}),n&&t(Tt,{}),x(Mt,{sx:{maxHeight:i=>`calc(100vh - ${i.spacing(35)})`},children:[o&&o.status!==201&&t(Ve,{label:(s=o.error)==null?void 0:s.message}),n&&r.length===0&&t(Ve,{label:"Cargando"}),o&&o.status===201&&r.length>0&&x(Rt,{sx:{tableLayout:"auto"},"aria-label":"customized table",size:"medium",stickyHeader:!0,children:[t(sr,{}),t($r,{})]})]}),t(lr,{})]})})}))},Ir=()=>{const[e,o]=l.exports.useState(1),n=l.exports.useCallback(()=>{o(s=>s+10)},[]),r=l.exports.useCallback(()=>{o(s=>s-10)},[]);return{page:e,setPage:o,skipPage:n,backPage:r}},zr=e=>{const[o,n]=l.exports.useState([]);return{selected:o,setSelected:n,handleSelectAll:(a,c)=>{var d;if(a.target.checked&&c&&c.data&&c.status===201){const h=[];for(const u of(d=c==null?void 0:c.data)==null?void 0:d.resultados)o.findIndex(p=>p[e]===u[e])<0&&h.push(u);n([...o,...h]);return}n([])},handleSelect:(a,c,d)=>{const h=o.findIndex(m=>m[e]===c),u=d.findIndex(m=>m[e]===c);let p=[];h===-1?p=p.concat(o,d[u]):h===0?p=p.concat(o.slice(1)):h===o.length-1?p=p.concat(o.slice(0,-1)):h>0&&(p=p.concat(o.slice(0,h),o.slice(h+1))),n(p)},isSelected:a=>o.findIndex(c=>c[e]===a)!==-1}},_r=()=>{const[e,o]=l.exports.useState([]);return{sort:e,isInSort:i=>!(e.findIndex(a=>a.field===i)<0),getSortOrder:i=>{const a=e.findIndex(c=>c.field===i);if(a!==-1)return e[a].order},handleSetSort:i=>{const a=e.findIndex(d=>d.field===i);let c=[];a!==-1?e[a].order==="asc"?(c=[...e],c[a].order="desc"):c=c.concat(e.slice(0,a),e.slice(a+1)):c=[...e,{field:i,order:"asc"}],o([...c])},setSort:o}},Ne=e=>window.btoa(decodeURIComponent(encodeURIComponent(e))),vn=e=>{const{url:o,rowKey:n,params:r,dataValues:s}=e,i=Gt(),[a,c]=l.exports.useState([]),{backPage:d,page:h,setPage:u,skipPage:p}=Ir(),m=O(zr(n),[]),C=O(_r(),[]),{sort:z}=C,[_,v]=l.exports.useState(""),[f,$]=Ce([]),I=g=>{u(T=>1),v(g)},y=l.exports.useCallback(()=>{c([]),u(g=>1),v(g=>""),m.setSelected(g=>[]),C.setSort(g=>[]),$.set(g=>[])},[]);l.exports.useEffect(()=>{(()=>{h!==1&&u(T=>1)})()},[f]),l.exports.useEffect(()=>{(()=>{if(a.length>0&&m.selected.length>0){const T=m.selected;a.forEach(H=>{const J=T.findIndex(X=>X[n]===H[n]);J!==-1&&(T[J]=H)}),m.setSelected(T)}})()},[a]);const{loading:S,value:k,error:R,retry:L}=qt(async()=>{if(s)return{status:201,data:{paginas:1,resultados:[...s]},error:{message:""}};{const g=await i({url:o,method:"GET",params:b({p:h,q:_,filter:Ne(JSON.stringify(f)),sort:Ne(JSON.stringify(C.sort))},r)});return g.data&&g.data.resultados&&c(g.data.resultados),g}},[h,f,_,z]);return b(b({data:a,setData:c,rowKey:n,loading:S,value:k,error:R,page:h,handleSetSearch:I,skipPage:p,backPage:d,search:_,retry:L,reset:y,setPage:u,filter:f,optionsFilter:$},m),C)};export{gn as D,vn as a,xn as b,fn as u};
