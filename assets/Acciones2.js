var v=Object.defineProperty,y=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var f=(i,t,o)=>t in i?v(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o,u=(i,t)=>{for(var o in t||(t={}))S.call(t,o)&&f(i,o,t[o]);if(l)for(var o of l(t))C.call(t,o)&&f(i,o,t[o]);return i},x=(i,t)=>y(i,P(t));import{r as a,f as q,aw as F,b as L,j as A,F as R,a as s}from"./index.js";import{d as j}from"./PersonOff.js";import{d as k}from"./Print.js";import{S as w}from"./StyledSpeedDial.js";import{L as h}from"./index25.js";import{u as z}from"./usePrint.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./SpeedDial.module.js";import"./Backdrop.js";import"./Fade.js";import"./Stack.js";import"./Typography.js";import"./HeaderTitle.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./index23.js";const I=()=>{const{pagination:i}=a.exports.useContext(h),{selected:t,setSelected:o,fetcher:r}=i,[,,e,,p]=r,[,_]=q();return z({pageStyle:"@page { margin: 0 !important; }",onAfterPrint:()=>{const d=F(new Date,"yyyy-MM-dd hh:mm:ss");_("/admin/liquidaciones/0",{method:"PATCH",data:{field:"liquidaciones.fecha_enviado",value:d,ids:t.map(m=>m.id)}});const n=(e==null?void 0:e.resultados)||[];for(const m of t){const c=n.findIndex(g=>g.id===m.id);c!==-1&&(n[c]=x(u({},n[c]),{fecha_enviado:d}))}p({paginas:(e==null?void 0:e.paginas)||1,resultados:n}),o([])}})},T=a.exports.lazy(()=>L(()=>import("./index70.js").then(function(i){return i.i}),["assets/index70.js","assets/index16.css","assets/index.js","assets/index2.css"])),xt=()=>{const{modalRealizar:i,pagination:t}=a.exports.useContext(h),[,o]=i,{selected:r}=t,[e,p]=I();return A(R,{children:[s(w,{acciones:[{title:"Realizar Liquidaci\xF3n",icon:j,onClick:()=>o(!0)},...r.length>0?[{title:"Imprimir",icon:k,onClick:()=>p()}]:[]]}),s(a.exports.Suspense,{fallback:s("div",{}),children:s(T,{list:r,divRef:e})})]})};export{xt as default};
