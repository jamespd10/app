var u=Object.defineProperty,f=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var m=(t,r,e)=>r in t?u(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,l=(t,r)=>{for(var e in r||(r={}))x.call(r,e)&&m(t,e,r[e]);if(p)for(var e of p(r))g.call(r,e)&&m(t,e,r[e]);return t},n=(t,r)=>f(t,h(r));import{O as v,a as i,F as d,j as o,r as y}from"./index.js";import{c as I,i as L,r as b}from"./jsx-runtime_commonjs-proxy.js";import{a as j}from"./List.js";import{L as _}from"./ListItem.js";import{L as w}from"./ListItemIcon.js";import{L as D}from"./ListItemText.js";import{T as F}from"./Typography.js";import{D as T}from"./Divider.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./listItemButtonClasses.js";import"./isHostComponent.js";import"./ButtonBase.js";import"./listItemIconClasses.js";import"./listItemTextClasses.js";import"./extendSxProp.js";var s={},R=L.exports;Object.defineProperty(s,"__esModule",{value:!0});var c=s.default=void 0,S=R(I),q=b,A=(0,S.default)((0,q.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");c=s.default=A;const X=({children:t})=>{const r=v();return i(d,{children:i(j,{sx:{width:"100%",bgcolor:"background.paper"},children:t.map((e,a)=>o(y.exports.Fragment,{children:[o(_,{alignItems:"flex-start",children:[i(w,{children:i(c,{})}),o("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[i(D,{primary:o(F,{variant:"h5",style:{textDecoration:"underline"},children:["Paso ",a+1,":"]})}),i("div",{style:n(l({},r.typography.subtitle2),{color:r.palette.grey[700],fontSize:"16px",textAlign:"justify"}),children:e.child}),e.img?i("div",{style:{pointerEvents:"none",marginTop:10,padding:10,border:"1px solid black",borderRadius:"5px"},children:e.img}):i(d,{})]})]}),a<t.length-1&&i(T,{})]},a))})})};export{X as default};
