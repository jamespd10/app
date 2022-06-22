import{r as o,a1 as j,A as I,b as S,ak as T,j as s,F as g,a as t,X as $}from"./index.js";import{c as v,i as _,r as p}from"./jsx-runtime_commonjs-proxy.js";import{a as L}from"./ContentProvider.js";import{s as b}from"./App.module.js";import{I as P}from"./IconButton.js";import{T as d}from"./Typography.js";var z="/app/assets/logo.svg",f={},H=_.exports;Object.defineProperty(f,"__esModule",{value:!0});var N=f.default=void 0,O=H(v),k=p,R=(0,O.default)((0,k.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");N=f.default=R;const B=e=>{const[r,l]=o.exports.useState(!1),n=j(),{authState:i}=o.exports.useContext(I),{tipo:c}=i;return o.exports.useEffect(()=>{(()=>{const{pathname:u}=n;u==="/"||u==="/signin"||e&&e.notIncludes&&e.notIncludes.includes(u)||c&&e&&e.notUsersTypes&&e.notUsersTypes.includes(c)?l(!1):l(!0)})()},[n]),r};var m={},E=_.exports;Object.defineProperty(m,"__esModule",{value:!0});var y=m.default=void 0,M=E(v),A=p,D=(0,M.default)((0,A.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");y=m.default=D;var h={},q=_.exports;Object.defineProperty(h,"__esModule",{value:!0});var C=h.default=void 0,V=q(v),U=p,w=(0,V.default)((0,U.jsx)("path",{d:"M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"}),"Store");C=h.default=w;const F="_logo_17044_1",G="_logoImg_17044_12",J="_title_17044_17",W="_buttonIcon_17044_25",X="_boxButtons_17044_33",K="_titleText_17044_44";var a={logo:F,logoImg:G,title:J,buttonIcon:W,boxButtons:X,titleText:K};const Q=o.exports.lazy(()=>S(()=>import("./EditBanner.js"),["assets/EditBanner.js","assets/index.js","assets/index5.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Check.js","assets/Alert.js","assets/Close.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js"])),Y=o.exports.lazy(()=>S(()=>import("./index55.js").then(function(e){return e.i}),["assets/index55.js","assets/index.js","assets/index5.css","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Badge.js","assets/isHostComponent.js","assets/appendOwnerState.js","assets/Typography.js"])),Z=()=>{const e=B({notUsersTypes:["Consulta-NIT"]}),r=T(),{authState:l}=o.exports.useContext(I),{isLoggedIn:n,tipo:i}=l,{modalSignOut:c}=o.exports.useContext(L),{setOpen:x}=c;return s(g,{children:[t(o.exports.Suspense,{fallback:t("div",{}),children:t(Q,{})}),s("nav",{className:b.appbar,children:[e&&t(P,{color:"inherit",onClick:()=>r(-1),children:t(y,{})}),s($,{className:a.title,to:i==="Consulta-NIT"?"/nit":"/",children:[t("div",{className:a.logo,children:t("img",{className:a.logoImg,src:z,alt:"Logo"})}),t(d,{className:n?a.titleText:"",variant:"h6",noWrap:!0,component:"div",children:"CHEUNG E HIJOS"})]}),t("div",{className:b.end}),n&&s("div",{className:a.boxButtons,children:[t(o.exports.Suspense,{fallback:t("div",{}),children:t(Y,{})}),i==="Super"&&t(g,{children:s(d,{className:a.buttonIcon,onClick:()=>r("/supervalidados/negocios"),variant:"body2",children:[t("span",{children:"Super validados"})," ",t(C,{fontSize:"small"})]})}),s(d,{className:a.buttonIcon,onClick:()=>x(),variant:"body2",children:[t("span",{children:"Salir"})," ",t(N,{fontSize:"small"})]})]})]})]})};var rt=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{rt as N,y as d,a as s};
