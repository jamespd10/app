import{r as o,a6 as L,A as b,b as N,a7 as j,j as s,F as x,a as t,a8 as T}from"./index.js";import{c as v,i as _,r as p}from"./jsx-runtime_commonjs-proxy.js";import{s as I}from"./App.module.js";import{I as $}from"./IconButton.js";import{T as d}from"./Typography.js";var P="/app/assets/logo.svg",m={},z=_.exports;Object.defineProperty(m,"__esModule",{value:!0});var C=m.default=void 0,O=z(v),R=p,k=(0,O.default)((0,R.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");C=m.default=k;const B=e=>{const[l,c]=o.exports.useState(!1),i=L(),{authState:u}=o.exports.useContext(b),{tipo:n}=u;return o.exports.useEffect(()=>{(()=>{const{pathname:r}=i;r==="/"||r==="/signin"||e&&e.notIncludes&&e.notIncludes.includes(r)||n&&e&&e.notUsersTypes&&e.notUsersTypes.includes(n)?c(!1):c(!0)})()},[i]),l};var f={},E=_.exports;Object.defineProperty(f,"__esModule",{value:!0});var S=f.default=void 0,H=E(v),M=p,A=(0,H.default)((0,M.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");S=f.default=A;var g={},D=_.exports;Object.defineProperty(g,"__esModule",{value:!0});var y=g.default=void 0,q=D(v),V=p,U=(0,q.default)((0,V.jsx)("path",{d:"m13.7826 15.1719 2.1213-2.1213 5.9963 5.9962-2.1213 2.1213zM17.5 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41C15.57 3 14 4.57 14 6.5c0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78.71-.71-1.41-1.41L12 3.49c-1.17-1.17-3.07-1.17-4.24 0L4.22 7.03l1.41 1.41H2.81l-.71.71 3.54 3.54.71-.71V9.15l1.41 1.41.71-.71 1.78 1.78-7.41 7.41 2.12 2.12L16.34 9.79c.36.13.75.21 1.16.21z"}),"Construction");y=g.default=U;const w="_logo_17044_1",F="_logoImg_17044_12",G="_title_17044_17",J="_buttonIcon_17044_25",W="_boxButtons_17044_33",K="_titleText_17044_44";var a={logo:w,logoImg:F,title:G,buttonIcon:J,boxButtons:W,titleText:K};const Q=o.exports.lazy(()=>N(()=>import("./EditBanner.js"),["assets/EditBanner.js","assets/index.js","assets/index7.css","assets/Close2.js","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Check.js","assets/Alert.js","assets/Close.js","assets/Paper.js","assets/IconButton.js","assets/ButtonBase.js","assets/emotion-react.browser.esm.js"])),X=o.exports.lazy(()=>N(()=>import("./index6.js").then(function(e){return e.i}),["assets/index6.js","assets/index.js","assets/index7.css","assets/jsx-runtime_commonjs-proxy.js","assets/createSvgIcon.js","assets/useId.js","assets/useControlled.js","assets/useIsFocusVisible.js","assets/Typography.js"])),Y=()=>{const e=B({notUsersTypes:["Consulta-NIT"]}),l=j(),{authState:c,modalSignOut:i}=o.exports.useContext(b),{isLoggedIn:u,tipo:n,username:h}=c,[,r]=i;return s(x,{children:[t(o.exports.Suspense,{fallback:t("div",{}),children:t(Q,{})}),s("nav",{className:I.appbar,children:[e&&t($,{color:"inherit",onClick:()=>l(-1),children:t(S,{})}),s(T,{className:a.title,to:n==="Consulta-NIT"?"/nit":"/",children:[t("div",{className:a.logo,children:t("img",{className:a.logoImg,src:P,alt:"Logo"})}),t(d,{className:u?a.titleText:"",variant:"h6",noWrap:!0,component:"div",children:"CHEUNG E HIJOS"})]}),t("div",{className:I.end}),u&&s("div",{className:a.boxButtons,children:[n&&n!=="Consulta-NIT"&&t(o.exports.Suspense,{fallback:t("div",{}),children:t(X,{})}),["jamespd","victorch"].includes(h||"")&&t(x,{children:s(d,{className:a.buttonIcon,onClick:()=>l("/supervalidados/negocios"),variant:"body2",children:[t("span",{children:"Mantenimiento"})," ",t(y,{fontSize:"small"})]})}),s(d,{className:a.buttonIcon,onClick:()=>r(!0),variant:"body2",children:[t("span",{children:"Salir"})," ",t(C,{fontSize:"small"})]})]})]})]})};var nt=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{nt as N,S as d,a as s};
