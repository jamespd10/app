import{r as o,a as e,F as c,j as m,S as f}from"./index.js";import{d as u}from"./Assignment.js";import{F as g,S as x,a as S}from"./FabButtonAction.js";import{a as C}from"./ContentProvider.js";import{B as F}from"./Backdrop.js";import{G as P}from"./Grow.js";import{S as b}from"./Stack.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./ButtonBase.js";import"./Tooltip.js";import"./Portal.js";import"./isHostComponent.js";import"./useModal.js";import"./jwt-decode.esm.js";import"./extendSxProp.js";const J=t=>{const[i,s]=o.exports.useState(!1),d=()=>s(!0),r=()=>s(!1),{contentScroll:h}=o.exports.useContext(C),[,,,l]=h;if(o.exports.useEffect(()=>{(()=>{l.current&&(l.current.style.marginBottom="50px")})()},[]),t.icons.length!==t.titles.length&&t.titles.length!==t.onPresses.length)throw new Error("La lista de iconos, titulos y funciones deben ser del mismo tama\xF1o");return t.icons.length===0&&t.titles.length===0&&t.onPresses.length===0?e(c,{}):t.icons.length===1&&t.titles.length===1&&t.onPresses.length===1?e(g,{text:t.titles[0],icon:t.icons[0],onClick:()=>t.onPresses[0]()}):m(c,{children:[e(F,{open:i}),e(P,{in:!0,timeout:700,children:e(x,{ariaLabel:"Custom SpeedDial",FabProps:{variant:"extended",size:"medium"},sx:{position:"fixed",bottom:10,right:10},icon:m(b,{direction:"row",spacing:1,children:[t.icon||e(u,{}),t.title||"Acciones"]}),onClose:r,onOpen:d,open:i,children:t.titles.slice().reverse().map((n,a)=>e(S,{icon:e(f,{component:t.icons[t.titles.length-1-a]}),tooltipTitle:n,tooltipOpen:!0,onClick:()=>{r(),t.onPresses[t.titles.length-1-a]()}},n))})})]})};export{J as default};