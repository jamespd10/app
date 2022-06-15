import{h as k,k as B,l as N,m as f,_ as u,r as n,u as $,c as z,n as R,a as r,e as P,o as O,A as L,q as A,t as D,j as c,F as T,L as H}from"./index.js";import{c as m,i as b,r as h}from"./jsx-runtime_commonjs-proxy.js";import{a as U}from"./ContentProvider.js";import{P as E}from"./Paper.js";import{I as q}from"./IconButton.js";import{T as _}from"./Typography.js";import{B as G}from"./Box.js";function V(o){return k("MuiAppBar",o)}B("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const F=["className","color","enableColorOnDark","position"],W=o=>{const{color:t,position:e,classes:a}=o,s={root:["root",`color${f(t)}`,`position${f(e)}`]};return R(s,V,a)},J=N(E,{name:"MuiAppBar",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,t[`position${f(e.position)}`],t[`color${f(e.color)}`]]}})(({theme:o,ownerState:t})=>{const e=o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[900];return u({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},t.position==="fixed"&&{position:"fixed",zIndex:o.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},t.position==="absolute"&&{position:"absolute",zIndex:o.zIndex.appBar,top:0,left:"auto",right:0},t.position==="sticky"&&{position:"sticky",zIndex:o.zIndex.appBar,top:0,left:"auto",right:0},t.position==="static"&&{position:"static"},t.position==="relative"&&{position:"relative"},t.color==="default"&&{backgroundColor:e,color:o.palette.getContrastText(e)},t.color&&t.color!=="default"&&t.color!=="inherit"&&t.color!=="transparent"&&{backgroundColor:o.palette[t.color].main,color:o.palette[t.color].contrastText},t.color==="inherit"&&{color:"inherit"},o.palette.mode==="dark"&&!t.enableColorOnDark&&{backgroundColor:null,color:null},t.color==="transparent"&&u({backgroundColor:"transparent",color:"inherit"},o.palette.mode==="dark"&&{backgroundImage:"none"}))}),K=n.exports.forwardRef(function(t,e){const a=$({props:t,name:"MuiAppBar"}),{className:s,color:i="primary",enableColorOnDark:d=!1,position:l="fixed"}=a,g=z(a,F),v=u({},a,{color:i,position:l,enableColorOnDark:d}),x=W(v);return r(J,u({square:!0,component:"header",ownerState:v,elevation:4,className:P(x.root,s,l==="fixed"&&"mui-fixed"),ref:e},g))});var Q=K;function X(o){return k("MuiToolbar",o)}B("MuiToolbar",["root","gutters","regular","dense"]);const Y=["className","component","disableGutters","variant"],Z=o=>{const{classes:t,disableGutters:e,variant:a}=o;return R({root:["root",!e&&"gutters",a]},X,t)},w=N("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,!e.disableGutters&&t.gutters,t[e.variant]]}})(({theme:o,ownerState:t})=>u({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:o.spacing(2),paddingRight:o.spacing(2),[o.breakpoints.up("sm")]:{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}},t.variant==="dense"&&{minHeight:48}),({theme:o,ownerState:t})=>t.variant==="regular"&&o.mixins.toolbar),oo=n.exports.forwardRef(function(t,e){const a=$({props:t,name:"MuiToolbar"}),{className:s,component:i="div",disableGutters:d=!1,variant:l="regular"}=a,g=z(a,Y),v=u({},a,{component:i,disableGutters:d,variant:l}),x=Z(v);return r(w,u({as:i,className:P(x.root,s),ref:e,ownerState:v},g))});var to=oo,eo="/app/assets/logo.svg",I={},ao=b.exports;Object.defineProperty(I,"__esModule",{value:!0});var j=I.default=void 0,ro=ao(m),so=h,no=(0,ro.default)((0,so.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");j=I.default=no;const io=o=>{const[t,e]=n.exports.useState(!1),a=O(),{authState:s}=n.exports.useContext(L),{tipo:i}=s;return n.exports.useEffect(()=>{(()=>{const{pathname:l}=a;l==="/"||l==="/signin"||o&&o.notIncludes&&o.notIncludes.includes(l)||i&&o&&o.notUsersTypes&&o.notUsersTypes.includes(i)?e(!1):e(!0)})()},[a]),t};var C={},lo=b.exports;Object.defineProperty(C,"__esModule",{value:!0});var M=C.default=void 0,co=lo(m),po=h,uo=(0,co.default)((0,po.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");M=C.default=uo;var y={},vo=b.exports;Object.defineProperty(y,"__esModule",{value:!0});var S=y.default=void 0,fo=vo(m),go=h,xo=(0,fo.default)((0,go.jsx)("path",{d:"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"}),"Store");S=y.default=xo;const _o="_logo_17044_1",mo="_logoImg_17044_12",bo="_title_17044_17",ho="_buttonIcon_17044_25",Io="_boxButtons_17044_33",Co="_titleText_17044_44";var p={logo:_o,logoImg:mo,title:bo,buttonIcon:ho,boxButtons:Io,titleText:Co};const yo=n.exports.lazy(()=>A(()=>import("./EditBanner.js"),["assets/EditBanner.js","assets/index.js","assets/index2.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Check.js","assets/Alert.js","assets/Close.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js"])),To=n.exports.lazy(()=>A(()=>import("./index52.js"),["assets/index52.js","assets/index5.css","assets/index.js","assets/index2.css","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Badge.js","assets/isHostComponent.js","assets/Tooltip.js","assets/Portal.js","assets/Grow.js","assets/DatePicker.js","assets/LoadingButton.js","assets/Backdrop.js","assets/Modal.js","assets/Paper.js","assets/Typography.js","assets/extendSxProp.js","assets/Button.js","assets/ButtonBase.js","assets/Close2.js","assets/IconButton.js","assets/MobileDatePicker.js","assets/MonthPicker.js","assets/usePickerState.js","assets/Grid.js","assets/InputAdornment.js","assets/FormHelperText.js","assets/index7.js","assets/Add.js","assets/string.helper.js","assets/regex.js","assets/Stack.js","assets/Divider.js","assets/TextInput.js","assets/TextField.js","assets/react-is.production.min.js","assets/Menu.js","assets/List.js","assets/GlobalStyles.js","assets/TextEditor.js","assets/TextEditor.css","assets/array.js","assets/upperFirst.js","assets/SelectHookForm.js","assets/Box.js","assets/MenuItem.js","assets/listItemIconClasses.js","assets/listItemTextClasses.js","assets/CheckBoxOutlineBlank.js","assets/AutocompleteServer.js","assets/useFetch.js","assets/jwt-decode.esm.js","assets/useHttpService.js","assets/Autocomplete.js","assets/Close.js","assets/Chip.js","assets/Checkbox.js","assets/Alert.js","assets/base64.js","assets/Search.js","assets/BootstrapTooltip.js","assets/Pagination.js","assets/LinearProgress.js","assets/ContentProvider.js","assets/useModal.js"])),ko=()=>{const o=io({notUsersTypes:["Consulta-NIT"]}),t=D(),{authState:e}=n.exports.useContext(L),{isLoggedIn:a,tipo:s}=e,{modalSignOut:i}=n.exports.useContext(U),{setOpen:d}=i;return c(T,{children:[r(n.exports.Suspense,{fallback:r("div",{}),children:r(yo,{})}),r(Q,{position:"fixed",sx:{zIndex:1.1},children:c(to,{variant:"dense",children:[o&&r(q,{color:"inherit",onClick:()=>t(-1),children:r(M,{})}),c(H,{className:p.title,to:s==="Consulta-NIT"?"/nit":"/",children:[r("div",{className:p.logo,children:r("img",{className:p.logoImg,src:eo,alt:"Logo"})}),r(_,{className:a?p.titleText:"",variant:"h6",noWrap:!0,component:"div",children:"CHEUNG E HIJOS"})]}),r(G,{sx:{flexGrow:1},gap:20}),a&&c("div",{className:p.boxButtons,children:[s==="Super"&&c(T,{children:[r(To,{}),c(_,{className:p.buttonIcon,onClick:()=>t("/supervalidados/negocios"),variant:"body2",children:[r("span",{children:"Super validados"})," ",r(S,{fontSize:"small"})]})]}),c(_,{className:p.buttonIcon,onClick:()=>d(),variant:"body2",children:[r("span",{children:"Salir"})," ",r(j,{fontSize:"small"})]})]})]})})]})};var Ao=Object.freeze(Object.defineProperty({__proto__:null,default:ko},Symbol.toStringTag,{value:"Module"}));export{Ao as N,M as d,p as s};
