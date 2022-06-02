import{h as T,k,l as B,m as f,_ as p,r as i,u as $,c as R,n as z,a as r,e as N,o as j,A as L,q,t as S,j as d,F as D,L as H}from"./index.js";import{c as _,i as b,r as h}from"./jsx-runtime_commonjs-proxy.js";import{a as O}from"./ContentProvider.js";import{P as U}from"./Paper.js";import{I as G}from"./IconButton.js";import{T as m}from"./Typography.js";import{B as E}from"./Box.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./useModal.js";import"./jwt-decode.esm.js";import"./ButtonBase.js";import"./extendSxProp.js";function V(o){return T("MuiAppBar",o)}k("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const F=["className","color","enableColorOnDark","position"],W=o=>{const{color:t,position:e,classes:a}=o,s={root:["root",`color${f(t)}`,`position${f(e)}`]};return z(s,V,a)},J=B(U,{name:"MuiAppBar",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,t[`position${f(e.position)}`],t[`color${f(e.color)}`]]}})(({theme:o,ownerState:t})=>{const e=o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[900];return p({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},t.position==="fixed"&&{position:"fixed",zIndex:o.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},t.position==="absolute"&&{position:"absolute",zIndex:o.zIndex.appBar,top:0,left:"auto",right:0},t.position==="sticky"&&{position:"sticky",zIndex:o.zIndex.appBar,top:0,left:"auto",right:0},t.position==="static"&&{position:"static"},t.position==="relative"&&{position:"relative"},t.color==="default"&&{backgroundColor:e,color:o.palette.getContrastText(e)},t.color&&t.color!=="default"&&t.color!=="inherit"&&t.color!=="transparent"&&{backgroundColor:o.palette[t.color].main,color:o.palette[t.color].contrastText},t.color==="inherit"&&{color:"inherit"},o.palette.mode==="dark"&&!t.enableColorOnDark&&{backgroundColor:null,color:null},t.color==="transparent"&&p({backgroundColor:"transparent",color:"inherit"},o.palette.mode==="dark"&&{backgroundImage:"none"}))}),K=i.exports.forwardRef(function(t,e){const a=$({props:t,name:"MuiAppBar"}),{className:s,color:n="primary",enableColorOnDark:u=!1,position:l="fixed"}=a,g=R(a,F),v=p({},a,{color:n,position:l,enableColorOnDark:u}),x=W(v);return r(J,p({square:!0,component:"header",ownerState:v,elevation:4,className:N(x.root,s,l==="fixed"&&"mui-fixed"),ref:e},g))});var Q=K;function X(o){return T("MuiToolbar",o)}k("MuiToolbar",["root","gutters","regular","dense"]);const Y=["className","component","disableGutters","variant"],Z=o=>{const{classes:t,disableGutters:e,variant:a}=o;return z({root:["root",!e&&"gutters",a]},X,t)},w=B("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,!e.disableGutters&&t.gutters,t[e.variant]]}})(({theme:o,ownerState:t})=>p({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:o.spacing(2),paddingRight:o.spacing(2),[o.breakpoints.up("sm")]:{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}},t.variant==="dense"&&{minHeight:48}),({theme:o,ownerState:t})=>t.variant==="regular"&&o.mixins.toolbar),oo=i.exports.forwardRef(function(t,e){const a=$({props:t,name:"MuiToolbar"}),{className:s,component:n="div",disableGutters:u=!1,variant:l="regular"}=a,g=R(a,Y),v=p({},a,{component:n,disableGutters:u,variant:l}),x=Z(v);return r(w,p({as:n,className:N(x.root,s),ref:e,ownerState:v},g))});var to=oo,eo="/app/assets/logo.svg",C={},ao=b.exports;Object.defineProperty(C,"__esModule",{value:!0});var P=C.default=void 0,ro=ao(_),so=h,no=(0,ro.default)((0,so.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");P=C.default=no;const io=o=>{const[t,e]=i.exports.useState(!1),a=j(),{authState:s}=i.exports.useContext(L),{tipo:n}=s;return i.exports.useEffect(()=>{(()=>{const{pathname:l}=a;l==="/"||l==="/signin"||o&&o.notIncludes&&o.notIncludes.includes(l)||n&&o&&o.notUsersTypes&&o.notUsersTypes.includes(n)?e(!1):e(!0)})()},[a]),t};var I={},lo=b.exports;Object.defineProperty(I,"__esModule",{value:!0});var A=I.default=void 0,co=lo(_),po=h,uo=(0,co.default)((0,po.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");A=I.default=uo;var y={},vo=b.exports;Object.defineProperty(y,"__esModule",{value:!0});var M=y.default=void 0,fo=vo(_),go=h,xo=(0,fo.default)((0,go.jsx)("path",{d:"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"}),"Store");M=y.default=xo;const mo="_logo_q9cv2_1",_o="_logoImg_q9cv2_23",bo="_title_q9cv2_33",ho="_buttonIcon_q9cv2_49",Co="_boxButtons_q9cv2_65",Io="_titleText_q9cv2_87";var c={logo:mo,logoImg:_o,title:bo,buttonIcon:ho,boxButtons:Co,titleText:Io};const yo=i.exports.lazy(()=>q(()=>import("./EditBanner.js"),["assets/EditBanner.js","assets/index.js","assets/index.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Check.js","assets/Alert.js","assets/Close.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js"])),Do=()=>{const o=io({notUsersTypes:["Consulta-NIT"]}),t=S(),{authState:e}=i.exports.useContext(L),{isLoggedIn:a,tipo:s}=e,{modalSignOut:n}=i.exports.useContext(O),{setOpen:u}=n;return d(D,{children:[r(i.exports.Suspense,{fallback:r("div",{}),children:r(yo,{})}),r(Q,{position:"fixed",sx:{zIndex:1.1},children:d(to,{variant:"dense",children:[o&&r(G,{color:"inherit",onClick:()=>t(-1),children:r(A,{})}),d(H,{className:c.title,to:s==="Consulta-NIT"?"/nit":"/",children:[r("div",{className:c.logo,children:r("img",{className:c.logoImg,src:eo,alt:"Logo"})}),r(m,{className:a?c.titleText:"",variant:"h6",noWrap:!0,component:"div",children:"CHEUNG E HIJOS"})]}),r(E,{sx:{flexGrow:1},gap:20}),a&&d("div",{className:c.boxButtons,children:[s==="Super"&&d(m,{className:c.buttonIcon,onClick:()=>t("/supervalidados/negocios"),variant:"body2",children:[r("span",{children:"Super validados"})," ",r(M,{fontSize:"small"})]}),d(m,{className:c.buttonIcon,onClick:()=>u(),variant:"body2",children:[r("span",{children:"Salir"})," ",r(P,{fontSize:"small"})]})]})]})})]})};export{Do as default};
