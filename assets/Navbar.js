var M=Object.defineProperty,B=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var x=(a,e,o)=>e in a?M(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,h=(a,e)=>{for(var o in e||(e={}))O.call(e,o)&&x(a,o,e[o]);if(f)for(var o of f(e))R.call(e,o)&&x(a,o,e[o]);return a},b=(a,e)=>B(a,H(e));import{r,b as N,a6 as E,A as P,a7 as k,j as s,F as S,a as t,a8 as D}from"./index.js";import{c as u,i as d,r as v}from"./jsx-runtime_commonjs-proxy.js";import{s as I}from"./App.module.js";import{T as c}from"./Typography.js";var V="/app/assets/logo.svg",_={},q=d.exports;Object.defineProperty(_,"__esModule",{value:!0});var j=_.default=void 0,A=q(u),F=v,G=(0,A.default)((0,F.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");j=_.default=G;var p={},J=d.exports;Object.defineProperty(p,"__esModule",{value:!0});var $=p.default=void 0,U=J(u),W=v,w=(0,U.default)((0,W.jsx)("path",{d:"m13.7826 15.1719 2.1213-2.1213 5.9963 5.9962-2.1213 2.1213zM17.5 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41C15.57 3 14 4.57 14 6.5c0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78.71-.71-1.41-1.41L12 3.49c-1.17-1.17-3.07-1.17-4.24 0L4.22 7.03l1.41 1.41H2.81l-.71.71 3.54 3.54.71-.71V9.15l1.41 1.41.71-.71 1.78 1.78-7.41 7.41 2.12 2.12L16.34 9.79c.36.13.75.21 1.16.21z"}),"Construction");$=p.default=w;const K="_logo_1p13c_1",Q="_logoImg_1p13c_12",X="_title_1p13c_17",Y="_buttonIcon_1p13c_25",Z="_boxButtons_1p13c_33",tt="_titleText_1p13c_44",et="_menuButton_1p13c_49";var n={logo:K,logoImg:Q,title:X,buttonIcon:Y,boxButtons:Z,titleText:tt,menuButton:et},m={},at=d.exports;Object.defineProperty(m,"__esModule",{value:!0});var y=m.default=void 0,ot=at(u),nt=v,st=(0,ot.default)((0,nt.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");y=m.default=st;const rt=r.exports.lazy(()=>N(()=>import("./EditBanner.js"),["assets/EditBanner.js","assets/index.js","assets/index8.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Check.js","assets/Alert.js","assets/Close.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js"])),lt=r.exports.lazy(()=>N(()=>import("./index6.js").then(function(a){return a.i}),["assets/index6.js","assets/index.js","assets/index8.css","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Typography.js"])),it=()=>{const a=E(),{authState:e,modalSignOut:o}=r.exports.useContext(P),{setSettings:C,settingsState:g}=r.exports.useContext(k),{sidebarState:L}=g,{isLoggedIn:l,tipo:i,username:z}=e,[,T]=o;return s(S,{children:[t(r.exports.Suspense,{fallback:t("div",{}),children:t(rt,{})}),s("nav",{className:I.appbar,children:[l&&t(y,{className:n.menuButton,onClick:()=>C(b(h({},g),{sidebarState:!L}))}),s(D,{className:n.title,to:i==="Consulta-NIT"?"/nit":"/",children:[t("div",{className:n.logo,children:t("img",{className:n.logoImg,src:V,alt:"Logo"})}),t(c,{className:l?n.titleText:"",variant:"h6",noWrap:!0,component:"div",children:"CHEUNG E HIJOS"})]}),t("div",{className:I.end}),l&&s("div",{className:n.boxButtons,children:[i&&i!=="Consulta-NIT"&&t(r.exports.Suspense,{fallback:t("div",{}),children:t(lt,{})}),["jamespd","victorch"].includes(z||"")&&t(S,{children:s(c,{className:n.buttonIcon,onClick:()=>a("/supervalidados/negocios"),variant:"body2",children:[t("span",{children:"Mantenimiento"})," ",t($,{fontSize:"small"})]})}),s(c,{className:n.buttonIcon,onClick:()=>T(!0),variant:"body2",children:[t("span",{children:"Salir"})," ",t(j,{fontSize:"small"})]})]})]})]})};var pt=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"}));export{pt as N,n as s};
