var v=Object.defineProperty,y=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var f=(o,t,i)=>t in o?v(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i,u=(o,t)=>{for(var i in t||(t={}))S.call(t,i)&&f(o,i,t[i]);if(l)for(var i of l(t))C.call(t,i)&&f(o,i,t[i]);return o},x=(o,t)=>y(o,P(t));import{r as a,f as q,aw as F,b as L,j as A,F as R,a as n}from"./index.js";import{d as j}from"./PersonOff.js";import{d as k}from"./Print.js";import{S as w}from"./StyledSpeedDial.js";import{L as h}from"./index24.js";import{u as z}from"./usePrint.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useId.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./Assignment.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./SpeedDial.module.js";import"./Backdrop.js";import"./Fade.js";import"./Stack.js";import"./Typography.js";import"./HeaderTitle.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./index23.js";const I=()=>{const{pagination:o}=a.exports.useContext(h),{selected:t,setSelected:i,fetcher:r}=o,[,,e,,p]=r,[,_]=q();return z({pageStyle:"@page { margin: 0 !important; }",onAfterPrint:()=>{const d=F(new Date,"yyyy-MM-dd hh:mm:ss");_("/admin/liquidaciones/0",{method:"PATCH",data:{field:"liquidaciones.fecha_enviado",value:d,ids:t.map(m=>m.id)}});const s=(e==null?void 0:e.resultados)||[];for(const m of t){const c=s.findIndex(g=>g.id===m.id);c!==-1&&(s[c]=x(u({},s[c]),{fecha_enviado:d}))}p({paginas:(e==null?void 0:e.paginas)||1,resultados:s}),i([])}})},T=a.exports.lazy(()=>L(()=>import("./index70.js"),["assets/index70.js","assets/index.js","assets/index7.css","assets/ViewProvider.js","assets/view.module.js","assets/view.module.css"])),ht=()=>{const{modalRealizar:o,pagination:t}=a.exports.useContext(h),[,i]=o,{selected:r}=t,[e,p]=I();return A(R,{children:[n(w,{acciones:[{title:"Realizar Liquidaci\xF3n",icon:j,onClick:()=>i(!0)},...r.length>0?[{title:"Imprimir",icon:k,onClick:()=>p()}]:[]]}),n(a.exports.Suspense,{fallback:n("div",{}),children:n(T,{list:r,divRef:e})})]})};export{ht as default};
