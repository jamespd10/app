var g=Object.defineProperty,_=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var f=(e,t,o)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))h.call(t,o)&&f(e,o,t[o]);if(l)for(var o of l(t))A.call(t,o)&&f(e,o,t[o]);return e},u=(e,t)=>_(e,P(t));import{r as i,f as S,b,j as D,F,a}from"./index.js";import{S as R}from"./StyledSpeedDial.js";import{d as z}from"./Print.js";import{u as I}from"./usePrint.js";import{d as M}from"./WorkspacePremium.js";import{C as x,b as j,M as k,a as v}from"./index14.js";import"./Assignment.js";import"./jsx-runtime_commonjs-proxy.js";import"./createSvgIcon.js";import"./useControlled.js";import"./useIsFocusVisible.js";import"./FabButtonAction.js";import"./react-is.production.min.js";import"./AssignmentRounded.js";import"./ButtonBase.js";import"./emotion-react.browser.esm.js";import"./Tooltip.js";import"./Popper.js";import"./Portal.js";import"./isHostComponent.js";import"./Grow.js";import"./SpeedDial.module.js";import"./Backdrop.js";import"./Fade.js";import"./Stack.js";import"./Typography.js";import"./index23.js";import"./HeaderTitle.js";import"./Divider.js";import"./Loader.js";import"./Grid.js";import"./CircularProgress.js";import"./useLocalStorage.js";import"./yup.module.js";import"./regex.js";import"./array.js";import"./upperFirst.js";const y=()=>{const{pagination:e}=i.exports.useContext(x),{fetcher:t,selected:o}=e,[,,s,,n]=t,[,p]=S();return{onAfterPrint:()=>{const m=[...s.resultados.map(r=>o.findIndex(C=>Number(C.id)===Number(r.id))!==-1?u(c({},r),{fecha_impresion:new Date}):c({},r))];n({paginas:s.paginas,resultados:m}),p("/admin/certificaciones-ingresos/1",{method:"PATCH",data:{field:"certificaciones_ingresos.fecha_impresion",value:new Date,ids:o.map(r=>r.id)}})}}},w=i.exports.lazy(()=>b(()=>import("./index72.js"),["assets/index72.js","assets/index.js","assets/index6.css","assets/index14.js","assets/HeaderTitle.js","assets/Typography.js","assets/Divider.js","assets/Loader.js","assets/Grid.js","assets/CircularProgress.js","assets/emotion-react.browser.esm.js","assets/useLocalStorage.js","assets/yup.module.js","assets/regex.js","assets/array.js","assets/upperFirst.js","assets/formularios.module.js","assets/formularios.module.css","assets/FormulariosProvider.js"])),Pt=()=>{const{pagination:e}=i.exports.useContext(x),{selected:t}=e,{modalRealizar:o}=i.exports.useContext(j),[,s]=o,{onAfterPrint:n}=y(),[p,d]=I({pageStyle:"@page { margin: 0 !important; }",onAfterPrint:n}),[,m]=i.exports.useContext(k),{cpa:r}=i.exports.useContext(v);return D(F,{children:[a(R,{acciones:[{icon:M,onClick:()=>s(!0),title:"Realizar certificaci\xF3n"},...t.length!==0?[{icon:z,onClick:r?d:()=>m(!0),title:"Imprimir"}]:[]]}),a(i.exports.Suspense,{fallback:a("div",{}),children:a(w,{valRef:p})})]})};export{Pt as default};
