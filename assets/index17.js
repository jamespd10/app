import{r as t,ab as _,a as e,b as h,j as v}from"./index.js";import{L}from"./Loader.js";import{H as g}from"./HeaderTitle.js";import{u as q}from"./useFetch.js";import{u as b}from"./useFirstFetch.js";import{u as y}from"./useHandlePrint.js";import{u as o}from"./useModal.js";const S=t.exports.createContext({}),j=({children:a})=>{const{id:r}=_(),{loading:i,value:n,retry:s}=b({url:`/admin/liquidacion/${r}`}),{send:d}=q(),l=async()=>{await d({url:`/admin/liquidacion/${r}/print`,method:"POST"})},{elementRef:c,handlePrint:u,printing:m}=y({pageStyle:"@page { size: letter }",onAfterPrint:l}),p=o(),f=o(),P=o(),x=o();return e(S.Provider,{value:{loading:i,value:n,elementRef:c,handlePrint:u,printing:m,modalPrint:p,modalEdit:f,modalShowEdit:P,modalProcesado:x,retry:s},children:a})},F=t.exports.lazy(()=>h(()=>import("./Liquidacion.js"),["assets/Liquidacion.js","assets/index.js","assets/index7.css","assets/Loader.js","assets/Grid.js","assets/Typography.js","assets/NotFoundResults.js","assets/Paper.js","assets/HeaderTitle.js","assets/Divider.js","assets/useFetch.js","assets/useHttpService.js","assets/useFirstFetch.js","assets/useAsyncRetry.js","assets/useHandlePrint.js","assets/index15.js","assets/useModal.js"])),E=()=>v(j,{children:[e(g,{message:"Informaci\xF3n de la liquidaci\xF3n"}),e(t.exports.Suspense,{fallback:e(L,{}),children:e(F,{})})]});var C=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));export{S as L,C as i};
